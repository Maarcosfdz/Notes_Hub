// One-off, verified mechanical extraction for T06B. Retains the pre-refactor fixture.
import fs from 'node:fs';
const page='src/pages/materias/aws/preguntas.astro',source=fs.readFileSync(page,'utf8'),out='docs/reformultation/docs/evidencias-T06B';fs.mkdirSync(out,{recursive:true});if(fs.existsSync('src/scripts/quiz-controller.ts'))throw Error('Controller already extracted; do not repeat.');fs.writeFileSync(out+'/preguntas-before.astro.txt',source);
const script=source.match(/  <script>([\s\S]*?)  <\/script>/)[1];const imports=script.split('\n').filter(line=>line.trim().startsWith('import ')).join('\n').replaceAll('../../../scripts/','./');const body=script.split('\n').filter(line=>!line.trim().startsWith('import ')).join('\n');
fs.writeFileSync('src/scripts/quiz-controller.ts',imports+'\nexport async function initializeQuiz(){\n'+body+'\n}\n');
fs.writeFileSync(page,source.replace(/  <script>[\s\S]*?  <\/script>/,'  <script>\n    import {initializeQuiz} from "../../../scripts/quiz-controller";\n    import {showError} from "../../../scripts/progress";\n    void initializeQuiz().catch(showError);\n  </script>'));

