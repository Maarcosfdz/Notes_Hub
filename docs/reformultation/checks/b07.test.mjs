// Exercise the actual selection/advance AST from the page, not a rewritten algorithm.
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import test from 'node:test';
import assert from 'node:assert/strict';
import { bank } from './fixtures.mjs';
import {questionAt}from '../../../src/scripts/quiz-selection.ts';
const questionRoot = new URL('../../../src/content/modules/devops/aws/questions/', import.meta.url);
const exams = Object.fromEntries([1,2,3].map(n => [String(n), JSON.parse(fs.readFileSync(new URL(`simulacro_${n}_65.json`, questionRoot), 'utf8'))]));
const manifest = JSON.parse(fs.readFileSync(new URL('simulacros_manifest.json', questionRoot), 'utf8'));
const source = fs.readFileSync(new URL('../../../src/scripts/quiz-controller.ts', import.meta.url), 'utf8');
function ast(page) { return ts.createSourceFile('page.ts', page.includes('<script>')?page.match(/<script>([\s\S]*?)<\/script>/)[1]:page, ts.ScriptTarget.Latest, true); }
function find(root, predicate) { if (predicate(root)) return root; return ts.forEachChild(root, n => find(n, predicate)); }
const tree = ast(source);
const selection = root => find(root, n => ts.isIfStatement(n) && n.expression.getText().replaceAll(' ', '') === 'mode.value!=="practice"' && n.thenStatement.getText().includes('const series'));
const js = code => ts.transpileModule(code, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None } }).outputText;
function runtime(mode = '1', selectionNode = selection(tree)) {
  let lookups = 0;
  const element = () => ({ textContent: '', listeners: {}, addEventListener(type, fn) { this.listeners[type] = fn; } });
  const context = vm.createContext({ mode: { value: mode }, exams, examIndex: 0, examDone: 65, examCorrect: 52, current: undefined,
    bank: { find(predicate) { lookups++; return bank.find(predicate); } }, quiz: { children: [], append(...nodes) { this.children.push(...nodes); } },
    document: { createElement: element }, questionAt, resetExam() {}, next() {} });
  const code = js(`(function selectCurrent() { ${selectionNode.getText()} })();`);
  return { context, select: () => vm.runInContext(code, context), lookups: () => lookups };
}

test('Series match their manifest exactly: 65 ordered IDs each', () => {
  for (const item of manifest.simulacros) {
    assert.equal(exams[item.numero].length, 65);
    assert.deepEqual(exams[item.numero].map(q => q.id), item.ids);
    assert.equal(new Set(item.ids).size, 65);
  }
});
for (const mode of ['1','2','3']) {
  test(`Exam ${mode}: repeated lookup is pure; all 65 positions and end boundary are safe`, () => {
    const r = runtime(mode);
    for (let i = 0; i < 65; i++) {
      r.context.examIndex = i;
      for (let repeat = 0; repeat < 2; repeat++) {
        r.select();
        assert.equal(r.context.examIndex, i, 'Lookup mutated cursor');
        assert.equal(r.context.current.id, exams[mode][i].id);
      }
    }
    const before = r.lookups(); r.context.examIndex = 65; r.select();
    assert.equal(r.lookups(), before, 'End screen attempted a bank lookup');
    assert.equal(r.context.examIndex, 65);
    assert.match(r.context.quiz.children[0].textContent, /52\/65 correctas \(80%\)/);
    assert.equal(r.context.quiz.children[1].textContent, 'Reiniciar simulacro');
  });
}
test('Actual advance handler moves once, ignores duplicate activation and leaves practice cursor alone', async () => {
  const listener = find(tree, n => ts.isCallExpression(n) && n.expression.getText() === 'following.addEventListener');
  assert.ok(ts.isArrowFunction(listener.arguments[1]));
  for (const mode of ['1','practice']) {
    let renders = 0;
    const context = vm.createContext({ session: undefined,quiz:{querySelector(){return{setAttribute(){},focus(){}};}}, mode: { value: mode }, following: { disabled: false }, examIndex: 0, next() { renders++; } });
    await vm.runInContext(js(`var advance = ${listener.arguments[1].getText()}; Promise.all([advance(),advance()]);`), context);
    assert.equal(context.examIndex, mode === 'practice' ? 0 : 1);
    assert.equal(renders, 1);
  }
});
test('Actual reset clears only temporary cursor and score', () => {
  const reset = find(tree, n => ts.isFunctionDeclaration(n) && n.name?.text === 'resetExam');
  const context = vm.createContext({ examIndex: 65, examDone: 65, examCorrect: 52 });
  vm.runInContext(js(reset.getText() + '; resetExam();'), context);
  assert.deepEqual([context.examIndex,context.examDone,context.examCorrect], [0,0,0]);
});
test('Negative control: the pre-fix production expression fails the purity regression', () => {
  const fixture = JSON.parse(fs.readFileSync(new URL('./fixtures-b07-before.json', import.meta.url), 'utf8'));
  const oldSelection = selection(ts.createSourceFile('before.ts', fixture.selection, ts.ScriptTarget.Latest, true));
  assert.ok(oldSelection.getText().includes('series[examIndex++].id'));
  for (const mode of ['1','2','3']) {
    const r = runtime(mode, oldSelection);
    assert.throws(r.select, /reading 'id'/);
    assert.notEqual(r.context.examIndex, 0);
  }
});
