// Maintained editorial pipeline. No question-bank migration, deletions or tmp dependency.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const posix = path.posix;
export const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
export function frontmatter(text) {
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!m) return { metadata: {}, header: '', body: text };
  const metadata = {};
  for (const line of m[1].split('\n')) {
    if (!line.trim() || line.startsWith('#')) continue;
    const pair = line.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (!pair) throw Error('Unsupported frontmatter line; extend parser explicitly: ' + line);
    const raw = pair[2];
    metadata[pair[1]] = raw.startsWith('"') ? JSON.parse(raw) : raw.startsWith("'") ? raw.slice(1, -1).replaceAll("''", "'") : raw;
  }
  return { metadata, header: m[1], body: text.slice(m[0].length) };
}
// Current editorial format: inline Markdown links/images and quoted HTML attributes.
// Post-build publication verification also checks the links produced by Astro.
export function rewriteLinks(text, replace) {
  return text.replace(/(!?\[[^\]\n]*\]\()([^\s)]+)(\))|((?:href|src)=["'])([^"']+)(["'])/g,
    (_whole, open, md, close, attr, url, quote) => open ? open + replace(md, open.startsWith('!')) + close : attr + replace(url, attr.startsWith('src')) + quote);
}
export function links(text) { const all = []; rewriteLinks(text, url => { all.push(url); return url; }); return all; }
const external = url => /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url);
const cleanPath = url => decodeURIComponent(url.split(/[?#]/)[0]);
function safe(root, rel) {
  const file = path.resolve(root, rel), delta = path.relative(root, file);
  if (delta.startsWith('..') || path.isAbsolute(delta)) throw Error('Path outside project: ' + rel);
  return file;
}
export function planContent(root, manifest) {
  root = path.resolve(root);
  for (const key of ['source','destination','id']) if (new Set(manifest.chapters.map(c => key === 'id' ? c.subject + ':' + c.id : c[key])).size !== manifest.chapters.length) throw Error('Duplicate chapter ' + key);
  const outputs = new Map(), edges = [], externalLinks = new Set(), fallbacks = [], queue = [];
  const notes = new Map(manifest.chapters.map(c => [c.source, c]));
  const assetRoot = manifest.assetRoot || 'public/';
  const read = concept => {
    if (!manifest.editorialRoots.some(prefix => concept.startsWith(prefix)) && !manifest.preservedInputs?.[concept]) throw Error('Input outside declared editorial sources: ' + concept);
    const preferred = safe(root, concept);
    if (fs.existsSync(preferred)) return { input: concept, bytes: fs.readFileSync(preferred) };
    const fallback = manifest.preservedInputs?.[concept];
    if (!fallback) throw Error('Missing editorial input (no declared fallback): ' + concept);
    fallbacks.push({ conceptualSource: concept, input: fallback });
    return { input: fallback, bytes: fs.readFileSync(safe(root, fallback)) };
  };
  const put = (output, bytes, input, role) => {
    if (!output.startsWith(assetRoot) && !manifest.chapters.some(c => c.destination === output)) throw Error('Output outside managed paths: ' + output);
    safe(root, output);
    const previous = outputs.get(output);
    if (previous && !previous.bytes.equals(bytes)) throw Error('Conflicting generated output: ' + output);
    outputs.set(output, { bytes, input, role });
  };
  const publicFor = concept => {
    for (const rule of manifest.publicationPrefixes) if (concept.startsWith(rule.source)) return rule.destination + concept.slice(rule.source.length);
    throw Error('No public mapping: ' + concept);
  };
  for (const chapter of manifest.chapters) {
    const source = read(chapter.source), parsed = frontmatter(source.bytes.toString('utf8'));
    const metadata = { ...parsed.metadata, ...chapter.metadataOverrides };
    metadata.title = parsed.metadata.title || parsed.body.match(/^#\s+(.+)$/m)?.[1];
    for (const key of ['id','area','subject','group','title','summary']) if (!metadata[key]) throw Error('Missing metadata ' + key + ': ' + chapter.source);
    if (metadata.id !== chapter.id || metadata.subject !== chapter.subject) throw Error('Identity drift: ' + chapter.source);
    const adapted = rewriteLinks(parsed.body, url => {
      if (external(url)) { externalLinks.add(url); return url; }
      if (url.startsWith('#')) return url;
      if (url.startsWith('/')) { edges.push({ from: chapter.destination, url, output: 'public' + cleanPath(url), kind: 'absolute' }); return url; }
      const suffix = url.slice(url.search(/[?#]/) < 0 ? url.length : url.search(/[?#]/));
      const concept = posix.normalize(posix.join(posix.dirname(chapter.source), cleanPath(url)));
      const note = notes.get(concept);
      if (note) { const route = `/materias/${note.subject}/${note.id}/` + suffix; edges.push({ from: chapter.destination, url: route, output: note.destination, kind: 'chapter' }); return route; }
      const output = publicFor(concept);
      queue.push({ concept, output });
      edges.push({ from: chapter.destination, url, output, kind: 'resource' });
      return '/' + output.slice(assetRoot.length) + suffix;
    });
    // Preserve source header formatting unless an application override is necessary.
    let header = parsed.header;
    for (const [key, value] of Object.entries(metadata)) {
      if (parsed.metadata[key] === value) continue;
      const line = key + ': ' + JSON.stringify(value);
      const re = new RegExp('^' + key + ':.*$', 'm');
      header = re.test(header) ? header.replace(re, () => line) : header + (header ? '\n' : '') + line;
    }
    put(chapter.destination, Buffer.from('---\n' + header + '\n---\n' + adapted), source.input, 'chapter');
  }
  const visited = new Set();
  while (queue.length) {
    const { concept, output } = queue.shift();
    const key = concept + '|' + output;
    if (visited.has(key)) continue;
    visited.add(key);
    const source = read(concept);
    put(output, source.bytes, source.input, 'resource');
    if (!/\.(?:mdx?|html|css|svg)$/i.test(concept)) continue;
    const text = source.bytes.toString('utf8');
    for (const url of links(text)) {
      if (external(url)) { externalLinks.add(url); continue; }
      if (url.startsWith('#')) continue;
      if (url.startsWith('/')) { edges.push({ from: output, url, output: 'public' + cleanPath(url), kind: 'absolute' }); continue; }
      const nextConcept = posix.normalize(posix.join(posix.dirname(concept), cleanPath(url)));
      const nextOutput = posix.normalize(posix.join(posix.dirname(output), cleanPath(url)));
      queue.push({ concept: nextConcept, output: nextOutput });
      edges.push({ from: output, url, output: nextOutput, kind: 'transitive' });
    }
  }
  const files = [...outputs].map(([output, f]) => ({ output, input: f.input, role: f.role, bytes: f.bytes.length, sha256: digest(f.bytes), currentSha256: fs.existsSync(safe(root, output)) ? digest(fs.readFileSync(safe(root, output))) : null })).sort((a,b) => a.output.localeCompare(b.output));
  return { outputs, report: { schema: 1, files, changes: files.filter(f => f.sha256 !== f.currentSha256), edges, fallbacks: [...new Map(fallbacks.map(f => [f.conceptualSource, f])).values()], externalLinks: [...externalLinks].sort() } };
}
export function applyPlan(root, plan) {
  // Plan all inputs before writing. Existing public assets are only copied, never deleted.
  for (const { output, sha256, currentSha256 } of plan.report.changes) {
    const file = safe(root, output);
    const actual = fs.existsSync(file) ? digest(fs.readFileSync(file)) : null;
    if (actual !== currentSha256) throw Error('Output changed since planning: ' + output);
    if (digest(plan.outputs.get(output).bytes) !== sha256) throw Error('Plan corruption');
  }
  for (const { output } of plan.report.changes) {
    const file = safe(root, output);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, plan.outputs.get(output).bytes);
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const mode = process.argv[2] || 'check';
  if (!['check','plan','apply'].includes(mode)) throw Error('Use check, plan or apply');
  const root = process.cwd(), manifest = JSON.parse(fs.readFileSync('scripts/content-manifest.json', 'utf8'));
  const plan = planContent(root, manifest);
  const reportIndex = process.argv.indexOf('--report');
  if (reportIndex >= 0) fs.writeFileSync(safe(root, process.argv[reportIndex + 1]), JSON.stringify(plan.report, null, 2) + '\n');
  if (mode === 'apply') applyPlan(root, plan);
  console.log(JSON.stringify({ mode, chapters: manifest.chapters.length, managedFiles: plan.report.files.length, changes: plan.report.changes.map(f => f.output), preservedInputs: plan.report.fallbacks.length }));
  if (mode === 'check' && plan.report.changes.length) process.exitCode = 1;
}
