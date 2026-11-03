// Prints a Playwright tool function with synthetic reference data. Does not serve fixtures.
import fs from 'node:fs';
import path from 'node:path';
import { bank, noteId } from './fixtures.mjs';
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name).replaceAll('\\', '/')]);
const routes = walk('dist').filter(f => f.endsWith('/index.html')).map(f => '/' + f.slice(5, -10));
const fixture = {
  bank, noteId, routes,
  onlyRun: process.argv[2]?.split(','),
  notes: routes.filter(r => /\/materias\/aws\/(?:cloud-block|security-block|aws-block)/.test(r)),
  term: JSON.parse(fs.readFileSync('src/content/modules/devops/aws/reference/glossary.json', 'utf8')).find(t => t[5]?.length),
  exams: [1, 2, 3].map(i => JSON.parse(fs.readFileSync(`src/content/modules/devops/aws/questions/simulacro_${i}_65.json`, 'utf8'))),
};
const code = fs.readFileSync(new URL('./browser.cjs', import.meta.url), 'utf8');
process.stdout.write(code.replace('const fixture = /*FIXTURE*/ null;', 'const fixture = ' + JSON.stringify(fixture) + ';'));
