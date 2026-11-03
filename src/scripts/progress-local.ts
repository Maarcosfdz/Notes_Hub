import revisedQuestionIds from "../content/modules/devops/aws/questions/ids_requieren_migrar_respuestas.json" with {type:'json'};
export interface StudyStats {
    done: number;
    ok: number;
    failed: number[];
    byLevel: Record<string, {
        done: number;
        ok: number;
    }>;
    answered: Record<string, number>;
    history: StudyAttempt[];
}
export interface StudyAttempt {
    type?: string;
    id?: string;
    questionId?: string | number;
    at?: string;
    question?: string;
    topic?: string;
    level?: string;
    selected?: string[];
    correct?: string[];
    ok?: boolean;
    why?: string;
    revision?: string;
    options?: string[];
    selectedIndices?: number[];
    correctIndices?: number[];
}
export interface RecoveryCopy {
    id: string;
    reason: string;
    at: string;
    raw: Record<string, string>;
    importSource?: string;
}
const recoveryKey = "study:recovery:v2";
export const emptyStats = (): StudyStats => ({ done: 0, ok: 0, failed: [], byLevel: {}, answered: {}, history: [] });
const key = (subject: string, kind: string) => { if (!/^[a-z0-9][a-z0-9-]*$/.test(subject))
    throw Error("Materia inválida."); return `study:${subject}:${kind}`; };
const object = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);
const count = (v: unknown): v is number => Number.isSafeInteger(v) && Number(v) >= 0;
function strings(v: unknown): string[] { if (!Array.isArray(v) || !v.every(x => typeof x === "string"))
    throw Error("Lista inválida."); return v; }
function safeTree(v: unknown): void {
    if (Array.isArray(v)) {
        v.forEach(safeTree);
        return;
    }
    if (object(v))
        for (const [k, value] of Object.entries(v)) {
            if (["__proto__", "prototype", "constructor"].includes(k))
                throw Error("Clave no admitida.");
            safeTree(value);
        }
}
export function validateStats(v: unknown): StudyStats {
    if (!object(v))
        throw Error("Estadísticas inválidas.");
    const s = { ...emptyStats(), ...v } as StudyStats;
    if (!count(s.done) || !count(s.ok) || s.ok > s.done || !Array.isArray(s.failed) || !s.failed.every(count) || !object(s.byLevel) || !object(s.answered) || !Array.isArray(s.history))
        throw Error("Estadísticas inválidas.");
    for (const item of Object.values(s.byLevel))
        if (!object(item) || !count(item.done) || !count(item.ok) || item.ok > item.done)
            throw Error("Nivel inválido.");
    for (const value of Object.values(s.answered))
        if (!count(value))
            throw Error("Contador inválido.");
    for (const a of s.history) {
        if (!object(a))
            throw Error("Intento inválido.");
        for (const f of ["id", "at", "question", "topic", "level", "why", "revision", "type"])
            if (a[f] !== undefined && typeof a[f] !== "string")
                throw Error("Campo de intento inválido.");
        if (a.questionId !== undefined && typeof a.questionId !== "string" && !count(a.questionId))
            throw Error("ID inválido.");
        if (a.ok !== undefined && typeof a.ok !== "boolean")
            throw Error("Resultado inválido.");
        for (const f of ["selected", "correct", "options"])
            if (a[f] !== undefined)
                strings(a[f]);
        for (const f of ["selectedIndices", "correctIndices"])
            if (a[f] !== undefined && (!Array.isArray(a[f]) || !a[f].every(count)))
                throw Error("Índices inválidos.");
    }
    safeTree(s);
    return s;
}
function reading(v: unknown): Record<string, boolean> {
    if (Array.isArray(v))
        return Object.fromEntries(strings(v).map(id => [id, true]));
    if (!object(v) || !Object.values(v).every(x => typeof x === "boolean"))
        throw Error("Lectura inválida.");
    safeTree(v);
    return v as Record<string, boolean>;
}
export function captureLocalRaw(): Record<string, string> {
    const raw: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i)!;
        if (k !== recoveryKey && (k.startsWith("study:") || k.startsWith("awsNeon")))
            raw[k] = localStorage.getItem(k)!;
    }
    return raw;
}
export function getRecoveryCopies(): RecoveryCopy[] {
    const copies: unknown = JSON.parse(localStorage.getItem(recoveryKey) || "[]");
    if (!Array.isArray(copies))
        throw Error("Registro de recuperación inválido; conserva el original.");
    return copies as RecoveryCopy[];
}
export function backupLocal(reason: string, importSource?: string) {
    const raw = captureLocalRaw(), copies = getRecoveryCopies();
    if (!copies.some(c => JSON.stringify(c.raw) === JSON.stringify(raw) && c.importSource === importSource)) {
        copies.push({ id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, at: new Date().toISOString(), reason, raw, ...(importSource ? { importSource } : {}) });
        localStorage.setItem(recoveryKey, JSON.stringify(copies));
    }
}
function writeBatch(writes: Record<string, string | null>) {
    const before = Object.fromEntries(Object.keys(writes).map(k => [k, localStorage.getItem(k)]));
    try {
        for (const [k, v] of Object.entries(writes))
            if (v === null)
                localStorage.removeItem(k);
            else
                localStorage.setItem(k, v);
    }
    catch (error) {
        for (const [k, v] of Object.entries(before))
            if (v === null)
                localStorage.removeItem(k);
            else
                localStorage.setItem(k, v);
        throw error;
    }
}
export function migrate(subject: string) {
    if (localStorage.getItem(key(subject, "migrated")))
        return;
    backupLocal("before-legacy-keys");
    const writes: Record<string, string> = { [key(subject, "migrated")]: "true" };
    if (subject === "aws")
        for (const [old, k] of [["awsNeonStats", "stats"], ["awsNeonBookmarks", "bookmarks"], ["awsNeonProgress", "progress"]]) {
            const v = localStorage.getItem(old);
            if (v && !localStorage.getItem(key(subject, k)))
                writes[key(subject, k)] = v;
        }
    writeBatch(writes);
}
export function getStats(subject: string): StudyStats {
    migrate(subject);
    const raw = localStorage.getItem(key(subject, "stats"));
    let stats: StudyStats;
    try {
        stats = validateStats(JSON.parse(raw || "{}"));
    }
    catch {
        return emptyStats();
    }
    if (subject === "aws" && !localStorage.getItem(key(subject, "bank-2026-480"))) {
        backupLocal("before-bank-2026-480");
        const writes: Record<string, string> = { [key(subject, "bank-2026-480")]: "true" };
        if (raw) {
            if (!localStorage.getItem(key(subject, "stats-before-bank-2026-480")))
                writes[key(subject, "stats-before-bank-2026-480")] = raw;
            if (!localStorage.getItem(key(subject, "history-before-bank-2026-480")))
                writes[key(subject, "history-before-bank-2026-480")] = JSON.stringify(stats.history);
            const changed = new Set(revisedQuestionIds.map(String)), invalidated = stats.history.filter(a => changed.has(String(a.questionId)));
            stats.history = stats.history.filter(a => !changed.has(String(a.questionId)));
            stats.failed = stats.failed.filter(id => !changed.has(String(id)));
            for (const id of changed)
                delete stats.answered[id];
            stats.done = Math.max(0, stats.done - invalidated.length);
            stats.ok = Math.max(0, stats.ok - invalidated.filter(a => a.ok).length);
            for (const a of invalidated) {
                const level = a.level ? stats.byLevel[a.level] : undefined;
                if (level) {
                    level.done = Math.max(0, level.done - 1);
                    if (a.ok)
                        level.ok = Math.max(0, level.ok - 1);
                }
            }
            writes[key(subject, "stats")] = JSON.stringify(stats);
        }
        writeBatch(writes);
    }
    return stats;
}
export function saveStats(s: string, v: StudyStats) { localStorage.setItem(key(s, "stats"), JSON.stringify(validateStats(v))); }
export function resetStats(s: string) { backupLocal("before-reset"); localStorage.removeItem(key(s, "stats")); }
export function getProgress(s: string, kind: "progress" | "bookmarks" = "progress"): Record<string, boolean> | string[] {
    migrate(s);
    try {
        const v: unknown = JSON.parse(localStorage.getItem(key(s, kind)) || (kind === "progress" ? "{}" : "[]"));
        return kind === "progress" ? reading(v) : strings(v);
    }
    catch {
        return kind === "progress" ? {} : [];
    }
}
export function saveProgress(s: string, kind: "progress" | "bookmarks", v: Record<string, boolean> | string[]) { localStorage.setItem(key(s, kind), JSON.stringify(kind === "progress" ? reading(v) : strings(v))); }
export function getBookmarks(s: string) { return getProgress(s, "bookmarks") as string[]; }
export function getReading(s: string) { return getProgress(s) as Record<string, boolean>; }
export function exportPayload() {
    backupLocal("before-export");
    const subjects = new Set(["aws"]);
    for (const k of Object.keys(captureLocalRaw())) {
        const m = k.match(/^study:([a-z0-9-]+):(stats|progress|bookmarks)$/);
        if (m)
            subjects.add(m[1]);
    }
    return { format: "study-notes", version: 2, bankRevision: "2026-480", exportedAt: new Date().toISOString(), subjects: Object.fromEntries([...subjects].map(s => [s, { stats: getStats(s), progress: getProgress(s), bookmarks: getProgress(s, "bookmarks") }])), raw: captureLocalRaw(), recovery: getRecoveryCopies(), previousBankStats: localStorage.getItem(key("aws", "stats-before-bank-2026-480")), previousBankHistory: localStorage.getItem(key("aws", "history-before-bank-2026-480")) };
}
export function exportAll() { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(exportPayload(), null, 2)], { type: "application/json" })); a.download = `progreso-estudio-${new Date().toISOString().slice(0, 10)}.json`; a.click(); URL.revokeObjectURL(a.href); }
export function validateImport(text: string) {
    if (new Blob([text]).size > 10 * 1024 * 1024)
        throw Error("La copia supera 10 MiB.");
    const payload: unknown = JSON.parse(text);
    safeTree(payload);
    if (!object(payload))
        throw Error("Copia inválida.");
    const legacy = "stats" in payload && !("subjects" in payload);
    if (!legacy && (payload.format !== "study-notes" || ![1, 2].includes(Number(payload.version)) || typeof payload.version !== "number"))
        throw Error("Formato o versión no admitidos.");
    const source = legacy ? { aws: payload } : payload.subjects;
    if (!object(source) || !Object.keys(source).length)
        throw Error("La copia no contiene materias.");
    const subjects: Record<string, {
        stats: StudyStats;
        progress: Record<string, boolean>;
        bookmarks: string[];
    }> = {};
    for (const [s, v] of Object.entries(source)) {
        key(s, "stats");
        if (!object(v))
            throw Error("Materia inválida.");
        subjects[s] = { stats: validateStats(v.stats ?? {}), progress: reading(v.progress ?? {}), bookmarks: strings(v.bookmarks ?? []) };
    }
    if (payload.raw !== undefined && (!object(payload.raw) || !Object.values(payload.raw).every(v => typeof v === "string")))
        throw Error("Respaldo bruto inválido.");
    if (payload.recovery !== undefined && (!Array.isArray(payload.recovery) || !payload.recovery.every(c => object(c) && typeof c.id === "string" && object(c.raw) && Object.values(c.raw).every(v => typeof v === "string"))))
        throw Error("Copias de recuperación inválidas.");
    return { payload, subjects, legacy };
}
export async function importAll(file: File) {
    const text = await file.text(), { payload, subjects, legacy } = validateImport(text);
    backupLocal("before-import", text);
    const writes: Record<string, string | null> = {};
    for (const [s, data] of Object.entries(subjects)) {
        for (const [k, v] of Object.entries(data))
            writes[key(s, k)] = JSON.stringify(v);
        if (s === "aws")
            writes[key(s, "bank-2026-480")] = !legacy && payload.bankRevision === "2026-480" ? "true" : null;
    }
    for (const [field, kind] of [["previousBankStats", "stats-before-bank-2026-480"], ["previousBankHistory", "history-before-bank-2026-480"]])
        if (typeof payload[field] === "string" && !localStorage.getItem(key("aws", kind)))
            writes[key("aws", kind)] = payload[field] as string;
    if (Array.isArray(payload.recovery)) {
        const copies = getRecoveryCopies();
        for (const c of payload.recovery as RecoveryCopy[])
            if (!copies.some(x => x.id === c.id && JSON.stringify(x) === JSON.stringify(c)))
                copies.push(c);
        writes[recoveryKey] = JSON.stringify(copies);
    }
    writeBatch(writes);
}
