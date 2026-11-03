// Save reproducible non-browser evidence without modifying production code.
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
const output = new URL('../docs/evidencias-T01/', import.meta.url);
fs.mkdirSync(output, { recursive: true });
const run = (name, args) => {
  const result = spawnSync(process.execPath, args, { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1' } });
  fs.writeFileSync(new URL(name + '.log', output), (result.stdout || '') + (result.stderr || ''));
  return { command: 'node ' + args.join(' '), exitCode: result.status, error: result.error?.message };
};
const dependencies = Object.fromEntries(['astro', '@astrojs/mdx', '@astrojs/check', 'typescript'].map(name => {
  const p = JSON.parse(fs.readFileSync('node_modules/' + name + '/package.json', 'utf8'));
  return [name, { version: p.version, engines: p.engines }];
}));
const results = { at: new Date().toISOString(), node: process.version, dependencies, content: run('content', ['scripts/verify-content.mjs']), progress: run('progress', ['--test', '--test-reporter=tap', 'docs/reformultation/checks/progress.test.mjs']) };
fs.writeFileSync(new URL('baseline.json', output), JSON.stringify(results, null, 2) + '\n');
console.log(JSON.stringify(results, null, 2));
process.exitCode = results.content.exitCode || results.progress.exitCode;
