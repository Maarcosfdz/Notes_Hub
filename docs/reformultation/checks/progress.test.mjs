// Executes the actual production module, transpiled in memory, with isolated globals.
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import assert from 'node:assert/strict';
import test from 'node:test';
import { bank, changed, revisedId, stableId, noteId, stats, current, legacy } from './fixtures.mjs';
const source = fs.readFileSync(new URL('../../../src/scripts/progress.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const plain = v => JSON.parse(JSON.stringify(v));
function runtime(initial = {}) {
  const data = new Map(Object.entries(initial));
  const localStorage = { getItem: k => data.get(k) ?? null, setItem: (k, v) => data.set(k, String(v)), removeItem: k => data.delete(k) };
  const blobs = [];
  const exports = {};
  vm.runInNewContext(compiled, { exports, require: name => { if (name.includes('ids_requieren')) return changed; throw Error(name); }, localStorage, Blob, Date, URL: { createObjectURL: blob => { blobs.push(blob); return 'blob:synthetic'; }, revokeObjectURL() {} }, document: { createElement: () => ({ click() {} }) } });
  return { api: exports, data, blobs, raw: () => Object.fromEntries(data) };
}
const file = payload => ({ text: async () => JSON.stringify(payload) });
test('Legacy keys copied without changing originals; second read is idempotent', () => {
  const raw = JSON.stringify(stats());
  const r = runtime({ awsNeonStats: raw, awsNeonBookmarks: JSON.stringify([noteId]), awsNeonProgress: JSON.stringify({ [noteId]: true }) });
  const before = r.raw(); // Capture BEFORE invoking getStats.
  r.api.getStats('aws');
  assert.equal(r.data.get('awsNeonStats'), before.awsNeonStats);
  assert.deepEqual(plain(r.api.getProgress('aws', 'bookmarks')), [noteId]);
  assert.deepEqual(plain(r.api.getProgress('aws')), { [noteId]: true });
  const after = r.raw(); r.api.getStats('aws'); assert.deepEqual(r.raw(), after);
});
test('Migration preserves raw history and filters revised attempts once', () => {
  const original = stats(); const raw = JSON.stringify(original);
  const r = runtime({ 'study:aws:stats': raw });
  const out = plain(r.api.getStats('aws'));
  assert.equal(r.data.get('study:aws:stats-before-bank-2026-480'), raw);
  assert.deepEqual(JSON.parse(r.data.get('study:aws:history-before-bank-2026-480')), original.history);
  assert.equal(out.done, 1); assert.equal(out.ok, 1); assert.deepEqual(out.failed, []);
  assert.equal(out.history[0].questionId, stableId); assert.equal(out.answered[revisedId], undefined);
  assert.deepEqual(out.byLevel.Basico, { done: 1, ok: 1 });
  const after = r.raw(); r.api.getStats('aws'); assert.deepEqual(r.raw(), after);
});
test('Current-bank mark retains attempts even for historically revised IDs', () => {
  const r = runtime({ 'study:aws:stats': JSON.stringify(stats()), 'study:aws:bank-2026-480': 'true' });
  assert.deepEqual(plain(r.api.getStats('aws')), stats());
  assert.equal(r.data.has('study:aws:stats-before-bank-2026-480'), false);
});
test('Modern import/export roundtrip retains stats, favorites, reading and prior stats', async () => {
  const r = runtime(); const payload = current(); payload.previousBankStats = JSON.stringify(stats());
  await r.api.importAll(file(payload)); r.api.exportAll();
  const exported = JSON.parse(await r.blobs[0].text());
  assert.equal(exported.version, 1); assert.equal(exported.bankRevision, '2026-480');
  assert.deepEqual(exported.subjects, payload.subjects); assert.equal(exported.previousBankStats, payload.previousBankStats);
  const reloaded = runtime(r.raw()); assert.deepEqual(plain(reloaded.api.getStats('aws')), stats());
  assert.deepEqual(plain(reloaded.api.getProgress('aws')), payload.subjects.aws.progress);
});
test('Legacy import migrates only revised attempts and retains raw snapshot', async () => {
  const r = runtime(); await r.api.importAll(file(legacy()));
  assert.equal(r.data.has('study:aws:bank-2026-480'), false);
  assert.equal(r.api.getStats('aws').done, 1);
  assert.deepEqual(JSON.parse(r.data.get('study:aws:stats-before-bank-2026-480')), stats());
});
test('JSON invalid and absent AWS payload reject without changing existing state', async () => {
  const r = runtime({ 'study:aws:stats': JSON.stringify(stats()) }); const before = r.raw();
  await assert.rejects(r.api.importAll({ text: async () => '{bad' }));
  await assert.rejects(r.api.importAll(file({ subjects: { other: {} } })));
  assert.deepEqual(r.raw(), before);
});
test('Reading and favorites persist on a new runtime, independently by subject', () => {
  const r = runtime(); r.api.saveProgress('aws', 'progress', { [noteId]: true }); r.api.saveProgress('aws', 'bookmarks', [noteId]);
  r.api.saveProgress('english', 'bookmarks', ['synthetic-english']);
  const reload = runtime(r.raw());
  assert.deepEqual(plain(reload.api.getProgress('aws', 'bookmarks')), [noteId]);
  assert.deepEqual(plain(reload.api.getProgress('english', 'bookmarks')), ['synthetic-english']);
  assert.deepEqual(plain(reload.api.getProgress('aws')), { [noteId]: true });
});
test('Malformed stored JSON yields empty stats without overwriting raw value', () => {
  const r = runtime({ 'study:aws:stats': '{broken' });
  assert.equal(r.api.getStats('aws').done, 0); assert.equal(r.data.get('study:aws:stats'), '{broken');
});
test('Three supplied series each have 65 distinct valid IDs with required domain quotas', () => {
  const all = new Set();
  for (let i = 1; i <= 3; i++) {
    const series = JSON.parse(fs.readFileSync(new URL(`../../../src/content/modules/devops/aws/questions/simulacro_${i}_65.json`, import.meta.url), 'utf8'));
    assert.equal(series.length, 65); const counts = {};
    for (const entry of series) { assert.equal(all.has(entry.id), false); all.add(entry.id); const q = bank.find(q => q.id === entry.id); assert.ok(q); counts[q.domain] = (counts[q.domain] || 0) + 1; }
    assert.deepEqual(Object.values(counts).sort((a,b) => a-b), [8,16,19,22]);
    for (const [index, expected] of [16,19,22,8].entries()) {
      const domain = Object.keys(counts).find(name => name.startsWith(`Dominio ${index + 1} -`));
      assert.equal(counts[domain], expected, `Domain ${index + 1} quota`);
    }
  }
});
// Desired guarantees: intentional failures expose the existing baseline, not fixes.
test('REGRESSION GAP: reject unknown import version before changing local data', async () => {
  const r = runtime({ 'study:aws:stats': JSON.stringify(stats()) }); const before = r.raw();
  const payload = current(); payload.version = 999;
  await assert.rejects(r.api.importAll(file(payload))); assert.deepEqual(r.raw(), before);
});
test('REGRESSION GAP: legacy progress array survives as read-note IDs', async () => {
  const r = runtime(); const payload = legacy(); payload.progress = [noteId];
  await r.api.importAll(file(payload)); assert.deepEqual(plain(r.api.getProgress('aws')), { [noteId]: true });
});
test('REGRESSION GAP: export retains separate migration-history backup', async () => {
  const history = JSON.stringify(stats().history);
  const r = runtime({ 'study:aws:bank-2026-480': 'true', 'study:aws:history-before-bank-2026-480': history });
  r.api.exportAll(); const payload = JSON.parse(await r.blobs[0].text());
  assert.ok(JSON.stringify(payload).includes('synthetic-old-revised'), 'Separate raw history was omitted');
});
