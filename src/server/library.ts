import type {DatabaseSync}from 'node:sqlite';import {subjects}from '../config/library.ts';
// Library preferences reuse versioned marks; they are never authorization rules.
export function librarySelection(db:DatabaseSync,user:string,catalog:Record<string,unknown>=subjects){return db.prepare("SELECT item FROM study_marks WHERE user_id=? AND kind='library' AND value=1").all(user).map(r=>String(r.item)).filter(id=>Object.hasOwn(catalog,id));}
