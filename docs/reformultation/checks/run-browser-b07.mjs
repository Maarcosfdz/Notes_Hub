import fs from 'node:fs';
import { bank } from './fixtures.mjs';
const exams = [1,2,3].map(n=>JSON.parse(fs.readFileSync(`src/content/modules/devops/aws/questions/simulacro_${n}_65.json`, 'utf8')));
const source = fs.readFileSync(new URL('./browser-b07.cjs', import.meta.url), 'utf8');
process.stdout.write(source.replace('const fixture = /*FIXTURE*/ null;', 'const fixture = ' + JSON.stringify({bank,exams}) + ';'));
