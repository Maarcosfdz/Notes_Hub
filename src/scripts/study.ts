import type { StudyAttempt } from "./progress";
export interface Question {
    id: number;
    q: string;
    options: string[];
    correct: number[];
    why: string;
    topic: string;
    level: string;
    type?: string;
}
export function gradeQuestion(q: Question, selected: number[]) {
    if (!selected.length || new Set(selected).size !== selected.length || selected.some(i => !Number.isInteger(i) || i < 0 || i >= q.options.length))
        throw Error("Selecciona respuestas válidas.");
    const indices = [...selected].sort((a, b) => a - b), correct = [...q.correct].sort((a, b) => a - b);
    return { indices, correct, ok: JSON.stringify(indices) === JSON.stringify(correct) };
}
export async function questionRevision(q: Question) {
    const semantic = JSON.stringify([q.q, q.options, [...q.correct].sort((a, b) => a - b), q.type || (q.correct.length > 1 ? "multiple" : "single")]);
    const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(semantic));
    return "sha256:" + [...new Uint8Array(bytes)].map(n => n.toString(16).padStart(2, "0")).join("");
}
export async function createAttempt(q: Question, selected: number[]): Promise<StudyAttempt> {
    const g = gradeQuestion(q, selected);
    return { id: crypto.randomUUID(), questionId: q.id, revision: await questionRevision(q), at: new Date().toISOString(), question: q.q, topic: q.topic, level: q.level, ...(q.type?{type:q.type}:{}), options: [...q.options], selectedIndices: g.indices, correctIndices: g.correct, selected: g.indices.map(i => q.options[i]), correct: g.correct.map(i => q.options[i]), ok: g.ok, why: q.why };
}
