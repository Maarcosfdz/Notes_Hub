import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const moduleRoot = new URL("../src/content/modules/devops/aws/", import.meta.url);
const load = async (path) => JSON.parse(await readFile(new URL(path, moduleRoot), "utf8"));
const [terms, comparisons, questions, theoryFiles] = await Promise.all([
  load("reference/glossary.json"), load("reference/comparisons.json"), load("questions/bank.json"),
  readdir(new URL("theory/", moduleRoot)),
]);
const noteIds = new Set(theoryFiles.filter((file) => /\.mdx?$/.test(file)).map((file) => file.replace(/\.mdx?$/, "")));
const questionIds = new Set();

assert.ok(noteIds.size > 0, "AWS debe conservar apuntes Markdown o MDX.");
for (const [abbreviation, label, group, noteId, description] of terms) {
  assert.ok(abbreviation && label && group && description, `Término incompleto: ${abbreviation}`);
  assert.ok(noteIds.has(noteId), `${abbreviation} enlaza a un apunte inexistente: ${noteId}`);
}
for (const { id, level, topic, q, options, correct, why } of questions) {
  assert.ok(!questionIds.has(id), `Identificador duplicado: ${id}`);
  questionIds.add(id);
  assert.ok(level && topic && q && why && options.length > 1 && correct.length > 0, `Pregunta incompleta: ${id}`);
  assert.ok(correct.every((answer) => Number.isInteger(answer) && answer >= 0 && answer < options.length), `Respuesta fuera de rango: ${id}`);
}
for (const comparison of comparisons) {
  assert.ok(comparison.title && comparison.cols.length > 0 && comparison.rows.length > 0, "Comparativa incompleta.");
  assert.ok(comparison.rows.every((row) => row.length === comparison.cols.length + 1), `Columnas inconsistentes: ${comparison.title}`);
}
console.log(`AWS válido: ${noteIds.size} apuntes, ${terms.length} términos, ${comparisons.length} comparativas y ${questions.length} preguntas.`);
