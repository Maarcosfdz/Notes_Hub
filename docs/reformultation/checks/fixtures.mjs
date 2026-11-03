import fs from 'node:fs';
const base = new URL('../../../src/content/modules/devops/aws/questions/', import.meta.url);
export const bank = JSON.parse(fs.readFileSync(new URL('bank.json', base), 'utf8'));
export const changed = JSON.parse(fs.readFileSync(new URL('ids_requieren_migrar_respuestas.json', base), 'utf8'));
export const revisedId = changed[0];
export const stableId = bank.find(q => !changed.map(String).includes(String(q.id))).id;
export const noteId = 'cloud-block-1-introduccion';
export const stats = () => ({ done: 2, ok: 1, failed: [revisedId], byLevel: { Basico: { done: 2, ok: 1 } }, answered: { [revisedId]: 1, [stableId]: 1 }, history: [
  { id: 'synthetic-old-revised', questionId: revisedId, at: '2026-01-01T00:00:00Z', question: 'Pregunta sintética antigua', topic: 'Fixture', level: 'Basico', selected: ['A'], correct: ['B'], ok: false, why: 'Explicación sintética antigua' },
  { id: 'synthetic-old-stable', questionId: stableId, at: '2026-01-01T00:01:00Z', question: 'Pregunta sintética estable', topic: 'Fixture', level: 'Basico', selected: ['A'], correct: ['A'], ok: true, why: 'Explicación sintética estable' },
] });
export const current = () => ({ format: 'study-notes', version: 1, bankRevision: '2026-480', subjects: { aws: { stats: stats(), progress: { [noteId]: true }, bookmarks: [noteId] } } });
export const legacy = () => ({ stats: stats(), progress: { [noteId]: true }, bookmarks: [noteId] });
