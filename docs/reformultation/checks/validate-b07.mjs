// Write new evidence only; never overwrite T01/T01B/T02A results.
import fs from 'node:fs';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
const out = 'docs/reformultation/docs/evidencias-T02A-B07';
const before = JSON.parse(fs.readFileSync(`${out}/before.json`, 'utf8'));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const run = (name, args) => {
  const result = spawnSync(process.execPath, args, { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1' } });
  fs.writeFileSync(`${out}/${name}.log`, (result.stdout || '') + (result.stderr || ''));
  return { command: 'node ' + args.join(' '), exitCode: result.status };
};
const results = {
  at: new Date().toISOString(), node: process.version,
  regression: run('regression', ['--test', '--test-reporter=tap', 'docs/reformultation/checks/b07.test.mjs']),
  content: run('content', ['scripts/verify-content.mjs']),
  sourceSync: run('source-sync', ['scripts/content-pipeline.mjs', 'check']),
  publication: run('publication', ['scripts/verify-publication.mjs']),
  existingPersistence: run('existing-persistence', ['--test', '--test-reporter=tap', 'docs/reformultation/checks/progress.test.mjs']),
  differences: Object.entries(before.hashes).filter(([file,expected]) => !fs.existsSync(file) || hash(file) !== expected).map(([file]) => file),
};
results.outOfScopeChanges = results.differences.filter(file => file !== 'src/pages/materias/aws/preguntas.astro');
fs.writeFileSync(`${out}/validation.json`, JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify(results,null,2));
// B02-B04 remain explicitly red in their own log; B07 has a separate gate.
process.exitCode = results.regression.exitCode || results.content.exitCode || results.sourceSync.exitCode || results.publication.exitCode || (results.outOfScopeChanges.length ? 1 : 0);
