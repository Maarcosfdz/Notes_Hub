// T01: private filesystem snapshot, independent of Git tracking. No dependencies.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
const root = process.cwd();
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const write = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
const inside = (base, target) => { const r = path.relative(base, target); return r === '' || (!r.startsWith('..') && !path.isAbsolute(r)); };
const ignoredDirs = new Set(['.git', 'node_modules', '.pnpm-store', '.pdf-tools', '.playwright-mcp']);
const secretName = /^(?:\.env(?:\..*)?|\.aws|\.ssh|credentials(?:\..*)?|secrets?(?:\..*)?|auth\.json|storageState\.json)$|\.(?:pem|key|p12|pfx|sqlite(?:3)?|db)(?:-wal|-shm)?$|^(?:progreso-estudio|playwright-report|test-results)/i;
const secretContent = /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|\b(?:AKIA|ASIA)[A-Z0-9]{16}\b|\bgh[pousr]_[A-Za-z0-9]{30,}|(?:_authToken|aws_secret_access_key)\s*[=:]\s*[^\s$<{]+/i;
function safeTarget(base, rel) { const t = path.resolve(base, rel); if (!inside(base, t)) throw Error('Unsafe manifest path'); return t; }
function verify(dir) {
  const m = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  for (const e of m.files) { const f = safeTarget(path.join(dir, 'files'), e.path); if (fs.statSync(f).size !== e.bytes || hash(f) !== e.sha256) throw Error('Integrity failure: ' + e.path); }
  return m;
}
const command = process.argv[2] || 'snapshot';
if (command === 'snapshot') {
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'notes-hub-T01-recovery-'));
  if (inside(root, dest)) throw Error('Backup must be outside repository');
  fs.mkdirSync(path.join(dest, 'files'));
  const m = { createdAt: new Date().toISOString(), source: root, node: process.version, head: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), exclusions: [], files: [] };
  const visit = rel => {
    for (const e of fs.readdirSync(path.join(root, rel), { withFileTypes: true })) {
      const name = path.posix.join(rel, e.name);
      if (e.isSymbolicLink()) { m.exclusions.push({ path: name, reason: 'symlink: manual review required' }); continue; }
      if (e.isDirectory() && ignoredDirs.has(e.name)) { m.exclusions.push({ path: name, reason: e.name === '.git' ? 'Git metadata/history excluded: working files captured independently, no remotes/config/hooks/index copied' : 'Regenerable dependencies or browser/tool state' }); continue; }
      if (secretName.test(e.name)) { m.exclusions.push({ path: name, reason: 'Potential secret or user data; not read or copied' }); continue; }
      if (e.isDirectory()) { visit(name); continue; }
      const source = path.join(root, name);
      const bytes = fs.statSync(source).size;
      if (/\.(?:mdx?|json|ya?ml|toml|ini|conf|txt|[cm]?js|ts|astro|html|css|xml)$|(?:^|\/)\.[^/]+$/.test(name) && bytes < 8e6 && secretContent.test(fs.readFileSync(source, 'utf8'))) {
        m.exclusions.push({ path: name, reason: 'Potential credential pattern; excluded without logging content' }); continue;
      }
      const target = safeTarget(path.join(dest, 'files'), name);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
      m.files.push({ path: name, bytes, sha256: hash(source), category: /^(dist|\.astro)\//.test(name) ? 'generated-baseline' : name.startsWith('tmp/pdfs/') ? 'historical-input' : 'project' });
      if (hash(target) !== m.files.at(-1).sha256) throw Error('Copy mismatch: ' + name);
    }
  };
  visit('');
  write(path.join(dest, 'manifest.json'), m);
  // Status describes tracked changes and untracked files; no file contents or credentials.
  fs.writeFileSync(path.join(dest, 'git-status.txt'), execFileSync('git', ['status', '--short', '--untracked-files=all'], { encoding: 'utf8' }));
  write(path.join(dest, 'integrity.json'), Object.fromEntries(['manifest.json', 'git-status.txt'].map(f => [f, hash(path.join(dest, f))])));
  verify(dest);
  console.log(JSON.stringify({ backup: dest, files: m.files.length, bytes: m.files.reduce((s, f) => s + f.bytes, 0), exclusions: m.exclusions }, null, 2));
} else {
  const dest = path.resolve(process.argv[3] || '');
  const seals = JSON.parse(fs.readFileSync(path.join(dest, 'integrity.json'), 'utf8'));
  for (const [f, expected] of Object.entries(seals)) if (hash(safeTarget(dest, f)) !== expected) throw Error('Manifest/bundle seal mismatch: ' + f);
  const m = verify(dest);
  if (command === 'restore-test') {
    const target = fs.mkdtempSync(path.join(os.tmpdir(), 'notes-hub-T01-restore-'));
    if (inside(root, target) || inside(dest, target)) throw Error('Restore must be independent');
    for (const e of m.files) {
      const out = safeTarget(target, e.path);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.copyFileSync(safeTarget(path.join(dest, 'files'), e.path), out, fs.constants.COPYFILE_EXCL);
      if (fs.statSync(out).size !== e.bytes || hash(out) !== e.sha256) throw Error('Restore mismatch: ' + e.path);
    }
    const result = { restoredAt: new Date().toISOString(), backup: dest, target, verified: m.files.length, result: 'PASS' };
    write(path.join(dest, 'restore-result.json'), result);
    console.log(JSON.stringify(result));
  } else if (command === 'verify') console.log(JSON.stringify({ result: 'PASS', files: m.files.length, manifestSha256: hash(path.join(dest, 'manifest.json')) }));
  else throw Error('Use snapshot, verify <backup>, restore-test <backup>');
}
