export interface StudyStats {
  done: number; ok: number; failed: number[]; byLevel: Record<string, { done: number; ok: number }>;
  answered: Record<string, number>; history: StudyAttempt[];
}
export interface StudyAttempt {
  id?: string; questionId?: string | number; at?: string; question?: string; topic?: string; level?: string; selected?: string[];
  correct?: string[]; ok?: boolean; why?: string;
}

const emptyStats = (): StudyStats => ({ done: 0, ok: 0, failed: [], byLevel: {}, answered: {}, history: [] });
const key = (subject: string, kind: string) => `study:${subject}:${kind}`;

export function migrate(subject: string) {
  if (localStorage.getItem(key(subject, "migrated"))) return;
  if (subject === "aws") {
    for (const [oldKey, newKey] of [["awsNeonStats", "stats"], ["awsNeonBookmarks", "bookmarks"], ["awsNeonProgress", "progress"]]) {
      const oldValue = localStorage.getItem(oldKey);
      if (oldValue && !localStorage.getItem(key(subject, newKey))) localStorage.setItem(key(subject, newKey), oldValue);
    }
  }
  localStorage.setItem(key(subject, "migrated"), "true");
}

export function getStats(subject: string): StudyStats {
  migrate(subject);
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(key(subject, "stats")) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return emptyStats();
    const stats = { ...emptyStats(), ...saved } as StudyStats;
    stats.done = Number.isFinite(stats.done) ? stats.done : 0;
    stats.ok = Number.isFinite(stats.ok) ? stats.ok : 0;
    stats.failed = Array.isArray(stats.failed) ? stats.failed : [];
    stats.byLevel = stats.byLevel && typeof stats.byLevel === "object" ? stats.byLevel : {};
    stats.answered = stats.answered && typeof stats.answered === "object" ? stats.answered : {};
    stats.history = Array.isArray(stats.history) ? stats.history : [];
    return stats;
  }
  catch { return emptyStats(); }
}
export function saveStats(subject: string, stats: StudyStats) { localStorage.setItem(key(subject, "stats"), JSON.stringify(stats)); }
export function getProgress(subject: string, kind: "progress" | "bookmarks" = "progress"): Record<string, boolean> | string[] {
  migrate(subject);
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key(subject, kind)) || (kind === "progress" ? "{}" : "[]"));
    if (kind === "bookmarks") return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
    return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, boolean> : {};
  }
  catch { return kind === "progress" ? {} : []; }
}
export function saveProgress(subject: string, kind: "progress" | "bookmarks", value: Record<string, boolean> | string[]) {
  localStorage.setItem(key(subject, kind), JSON.stringify(value));
}
export function exportAll() {
  const payload = Object.fromEntries(["aws"].map(subject => [subject, {
    stats: getStats(subject), progress: getProgress(subject), bookmarks: getProgress(subject, "bookmarks"),
  }]));
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([JSON.stringify({ format: "study-notes", version: 1, exportedAt: new Date().toISOString(), subjects: payload }, null, 2)], { type: "application/json" }));
  link.download = `progreso-estudio-${new Date().toISOString().slice(0, 10)}.json`;
  link.click(); URL.revokeObjectURL(link.href);
}
export async function importAll(file: File) {
  const payload: unknown = JSON.parse(await file.text());
  if (payload && typeof payload === "object" && "stats" in payload) {
    const legacy = payload as Record<string, unknown>;
    if (legacy.stats && typeof legacy.stats === "object") localStorage.setItem(key("aws", "stats"), JSON.stringify(legacy.stats));
    if (Array.isArray(legacy.progress) || (legacy.progress && typeof legacy.progress === "object")) localStorage.setItem(key("aws", "progress"), JSON.stringify(legacy.progress));
    if (Array.isArray(legacy.bookmarks)) localStorage.setItem(key("aws", "bookmarks"), JSON.stringify(legacy.bookmarks));
    return;
  }
  if (!payload || typeof payload !== "object" || !("subjects" in payload) || !payload.subjects || typeof payload.subjects !== "object") throw new Error("El archivo no tiene el formato de progreso esperado.");
  const subject = (payload.subjects as Record<string, unknown>).aws;
  if (!subject || typeof subject !== "object") throw new Error("El archivo no contiene progreso de AWS.");
  const data = subject as Record<string, unknown>;
  if (data.stats && typeof data.stats === "object") localStorage.setItem(key("aws", "stats"), JSON.stringify(data.stats));
  if (Array.isArray(data.progress) || (data.progress && typeof data.progress === "object")) localStorage.setItem(key("aws", "progress"), JSON.stringify(data.progress));
  if (Array.isArray(data.bookmarks)) localStorage.setItem(key("aws", "bookmarks"), JSON.stringify(data.bookmarks));
}
