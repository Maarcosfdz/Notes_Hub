import fs from 'node:fs';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
const out = 'docs/reformultation/docs/evidencias-T01B';
fs.mkdirSync(out, { recursive: true });
const hash = f => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const run = (name, args) => {
  const r = spawnSync(process.execPath, args, { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1' } });
  fs.writeFileSync(`${out}/${name}.log`, (r.stdout || '') + (r.stderr || ''));
  return { command: 'node ' + args.join(' '), exitCode: r.status };
};
const backup = '../Notes_Hub_Recovery/T01-20261103-fdBKQy';
const manifest = JSON.parse(fs.readFileSync(`${backup}/manifest.json`, 'utf8'));
const history = ['docs/reformultation/docs/T01_RESULTADOS.md', 'docs/reformultation/docs/tickets/T01_respaldo_y_regresion.md', ...fs.readdirSync('docs/reformultation/docs/evidencias-T01').map(f => 'docs/reformultation/docs/evidencias-T01/' + f)];
const result = {
  at: new Date().toISOString(), node: process.version,
  content: run('content', ['scripts/verify-content.mjs']),
  bundling: run('bundling', ['--test', '--test-reporter=tap', 'docs/reformultation/checks/t01b.test.mjs']),
  persistence: run('persistence', ['--test', '--test-reporter=tap', 'docs/reformultation/checks/progress.test.mjs']),
  backupManifestSha256: hash(`${backup}/manifest.json`),
  productDifferencesFromT01: manifest.files.filter(e => !e.path.startsWith('docs/') && !/^(dist|\.astro)\//.test(e.path) && (!fs.existsSync(e.path) || hash(e.path) !== e.sha256)).map(e => e.path),
  T01HistoryHashes: Object.fromEntries(history.map(f => [f, hash(f)])),
};
fs.writeFileSync(`${out}/validation.json`, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
// Existing B02-B04 remain red and are reported, not hidden; B01 has its own gate.
process.exitCode = result.content.exitCode || result.bundling.exitCode;
