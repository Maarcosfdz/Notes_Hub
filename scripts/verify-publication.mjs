// Verify actual Astro output and every published textual resource, including downloads.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { frontmatter, links } from './content-pipeline.mjs';
if(fs.existsSync('dist/server/entry.mjs')){await import('./verify-private-publication.mjs');process.exit(process.exitCode||0);}
const requireAstro = createRequire(fs.realpathSync('node_modules/astro/package.json'));
const Slugger = requireAstro('github-slugger').default;
const root = path.resolve('dist');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const files = walk(root), errors = [], external = new Set(), incoming = new Map(), anchorsCache = new Map();
const attrs = text => [...text.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map(m => m[1]);
const anchors = file => {
  if (anchorsCache.has(file)) return anchorsCache.get(file);
  const text = fs.readFileSync(file, 'utf8'), ids = new Set([...text.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]));
  if (/\.mdx?$/.test(file)) {
    const slugger = new Slugger();
    for (const match of frontmatter(text).body.matchAll(/^#{1,6}\s+(.+?)\s*#*$/gm)) ids.add(slugger.slug(match[1].replace(/<[^>]*>|[*`]/g, '')));
  }
  anchorsCache.set(file, ids); return ids;
};
let checked = 0, fragments = 0;
for (const file of files.filter(f => /\.(?:html|mdx?|css|svg)$/.test(f))) {
  const text = fs.readFileSync(file, 'utf8');
  const destinations = /\.mdx?$/.test(file) ? links(text.replace(/```[\s\S]*?```/g, '')) : attrs(text);
  if (/\.css$/.test(file)) for (const match of text.matchAll(/url\(["']?([^\s)'";]+)["']?\)/g)) destinations.push(match[1]);
  for (let url of destinations) {
    url = url.replaceAll('&amp;', '&');
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url)) { if (/^https?:/.test(url)) external.add(url); continue; }
    const source = path.relative(root, file).replaceAll('\\','/');
    let parsed;
    try { parsed = new URL(url, 'https://study.invalid/' + source.replace(/index\.html$/, '')); }
    catch { errors.push({ source, url, kind: 'invalid-url' }); continue; }
    const relative = decodeURIComponent(parsed.pathname).replace(/^\//, '');
    let target = path.resolve(root, relative);
    if (path.relative(root, target).startsWith('..')) { errors.push({ source, url, kind: 'path-escape' }); continue; }
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
    checked++;
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) { errors.push({ source, url, kind: 'missing-file' }); continue; }
    const targetRel = path.relative(root, target).replaceAll('\\','/');
    if (!incoming.has(targetRel)) incoming.set(targetRel, new Set()); incoming.get(targetRel).add(source);
    if (parsed.hash && /\.(?:html|mdx?)$/.test(target)) {
      fragments++;
      if (!anchors(target).has(decodeURIComponent(parsed.hash.slice(1)))) errors.push({ source, url, kind: 'missing-anchor' });
    }
  }
}
const report = { checked, fragments, errors, externalNotChecked: [...external].sort(), consumers: Object.fromEntries([...incoming].map(([f,sources]) => [f,[...sources].sort()])), orphanCandidates: files.map(f=>path.relative(root,f).replaceAll('\\','/')).filter(f=>!f.endsWith('index.html')&&!f.startsWith('_astro/')&&!incoming.has(f)), limits: ['HTTP external targets not fetched', 'PDF annotations checked by optional Python companion, not this command', 'Markdown download fragments checked semantically; raw downloads are not rendered Astro pages', 'Candidates are not deletion authorization'] };
const reportIndex = process.argv.indexOf('--report');
if (reportIndex >= 0) fs.writeFileSync(process.argv[reportIndex+1], JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({ checked, fragments, errors: errors.length, orphanCandidates: report.orphanCandidates.length, externalNotChecked: external.size }));
for (const error of errors.slice(0,20)) console.error(JSON.stringify(error));
if (errors.length) process.exitCode = 1;
