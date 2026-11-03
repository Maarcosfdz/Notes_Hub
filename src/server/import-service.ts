import type {DatabaseSync}from 'node:sqlite';import {createHash}from 'node:crypto';import path from 'node:path';import {randomUUID}from 'node:crypto';
import {validateImport,type StudyAttempt}from '../scripts/progress-local.ts';import {questionRevision,gradeQuestion}from '../scripts/study.ts';import {subjectId}from './study-service.ts';import {backupDatabase,transaction}from './database.ts';import {HttpError}from './http.ts';
import bank from '../content/modules/devops/aws/questions/bank.json' with {type:'json'};
import one from '../content/modules/devops/aws/questions/simulacro_1_65.json' with {type:'json'};import two from '../content/modules/devops/aws/questions/simulacro_2_65.json' with {type:'json'};import three from '../content/modules/devops/aws/questions/simulacro_3_65.json' with {type:'json'};
const canonical=(value:any):string=>JSON.stringify(value,(_key,v)=>v&&typeof v==='object'&&!Array.isArray(v)?Object.fromEntries(Object.entries(v).sort(([a],[b])=>a.localeCompare(b))):v);
export async function prepareImport(text:string){
 if(Buffer.byteLength(text)>10*1024*1024)throw new HttpError(413,'La copia supera 10 MiB.');
 let validated;let account=false;try{const p=JSON.parse(text);if(p.userId!==undefined)throw Error('ID de cuenta no admitido.');account=p.format==='notes-hub-account'&&p.version===3;if(account){for(const data of Object.values(p.subjects) as any[]){data.stats.history=[...data.stats.history,...(data.sessions||[]).flatMap((s:any)=>s.answers||[])];}for(const row of p.historicalAttempts||[]){subjectId(row.subject);if(!p.subjects[row.subject])throw Error('Materia histórica ausente.');p.subjects[row.subject].stats.history.push(row.attempt);}}validated=account?validateImport(JSON.stringify({...p,format:'study-notes',version:2})):validateImport(text);}catch{throw new HttpError(400,'Formato, versión o datos inválidos.');}
 const events:{subject:string;attempt:StudyAttempt}[]=[];let legacy=0;
 for(const[subject,data]of Object.entries(validated.subjects)){subjectId(subject);for(const a of data.stats.history){
  if(!a.id||!a.revision||!a.options||!a.selectedIndices||!a.correctIndices||!a.question||!Number.isSafeInteger(Number(a.questionId))||Number(a.questionId)<=0){legacy++;continue;}
  if(!/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(a.id)||!a.at||!Number.isFinite(Date.parse(a.at))||!a.correctIndices.length||new Set(a.correctIndices).size!==a.correctIndices.length||a.correctIndices.some(i=>i>=a.options!.length))throw new HttpError(400,'Identidad o instantánea inválida.');
  const known=bank.find(q=>q.id===Number(a.questionId)&&q.q===a.question&&canonical(q.options)===canonical(a.options)&&canonical(q.correct)===canonical(a.correctIndices));
  const type=a.type||known?.type;
  const q={id:Number(a.questionId),q:a.question,options:a.options,correct:a.correctIndices,why:a.why||'',topic:a.topic||'',level:a.level||'',...(type?{type}:{})};
  let grade;try{grade=gradeQuestion(q,a.selectedIndices);}catch{throw new HttpError(400,'Selección histórica inválida.');}const revision=await questionRevision(q);if(revision!==a.revision&&!a.type&&!known){legacy++;continue;}if(revision!==a.revision||grade.ok!==a.ok||canonical(a.selected)!==canonical(grade.indices.map(i=>q.options[i]))||canonical(a.correct)!==canonical(grade.correct.map(i=>q.options[i])))throw new HttpError(400,'Instantánea incoherente.');
  events.push({subject,attempt:{id:a.id,questionId:a.questionId,revision:a.revision,at:a.at,question:a.question,topic:q.topic,level:q.level,...(a.type?{type:a.type}:{}),options:q.options,selectedIndices:grade.indices,correctIndices:grade.correct,selected:grade.indices.map(i=>q.options[i]),correct:grade.correct.map(i=>q.options[i]),ok:grade.ok,why:q.why}});
 }}
 const unique=new Map<string,typeof events[number]>();for(const e of events){const old=unique.get(e.attempt.id!);if(old&&canonical(old)!==canonical(e))throw new HttpError(409,'ID repetido con datos diferentes dentro del archivo.');unique.set(e.attempt.id!,e);}
 const sessions:{subject:string;value:any}[]=[];
 if(account)for(const[subject,data]of Object.entries(validated.payload.subjects as Record<string,any>))for(const s of data.sessions||[]){
  const series=({'1':one,'2':two,'3':three} as Record<string,{id:number}[]>)[s.exam];
  if(subject!=='aws'||!series||typeof s.id!=='string'||!/^[\da-f-]{36}$/i.test(s.id)||!Array.isArray(s.plan)||s.plan.length!==65||s.plan.some((p:any,i:number)=>p.id!==series[i].id||typeof p.revision!=='string')||!Number.isInteger(s.cursor)||s.cursor<0||s.cursor>65||!['active','completed'].includes(s.status)||(s.status==='completed')!==(s.cursor===65)||!Array.isArray(s.answers))throw new HttpError(400,'Sesión histórica inválida.');
  const positions=new Set<number>();for(const a of s.answers){const event=unique.get(a.id);if(!event||event.subject!==subject||positions.has(a.position)||!Number.isInteger(a.position)||a.position<0||a.position>=65||s.plan[a.position].id!==event.attempt.questionId||s.plan[a.position].revision!==event.attempt.revision)throw new HttpError(400,'Respuesta de sesión incoherente.');positions.add(a.position);}
  // Some old/reset exports have answers but no current events: retain those sessions in the original archive, never fabricate records.
  for(let i=0;i<s.cursor;i++)if(!positions.has(i))throw new HttpError(400,'Sesión histórica incompleta.');
  sessions.push({subject,value:s});
 }
 return{text,digest:createHash('sha256').update(text).digest('hex'),subjects:validated.subjects,events:[...unique.values()],sessions,legacy,format:account?'notes-hub-account':String(validated.payload.format||'legacy'),version:account?3:validated.payload.version||0};
}
export function previewImport(db:DatabaseSync,user:string,p:Awaited<ReturnType<typeof prepareImport>>){let duplicates=0;for(const e of p.events){const old=db.prepare('SELECT payload,subject FROM study_attempts WHERE user_id=? AND id=?').get(user,e.attempt.id!);if(old){if(old.subject!==e.subject||canonical(JSON.parse(String(old.payload)))!==canonical(e.attempt))throw new HttpError(409,'Un ID histórico contiene datos diferentes. No se ha importado nada.');duplicates++;}}
 return{digest:p.digest,subjects:Object.keys(p.subjects),events:p.events.length,duplicates,legacy:p.legacy,legacyAggregates:Object.values(p.subjects).map(s=>({done:s.stats.done,ok:s.stats.ok})),format:p.format,version:p.version,alreadyImported:!!db.prepare('SELECT digest FROM study_imports WHERE user_id=? AND digest=?').get(user,p.digest),policy:'Se añaden eventos identificables; marcas existentes prevalecen. Agregados y registros sin identidad quedan archivados, sin sumarse. No se borra el navegador.'};}
export async function applyImport(db:DatabaseSync,user:string,p:Awaited<ReturnType<typeof prepareImport>>,confirmed:string){if(confirmed!==p.digest)throw new HttpError(409,'La copia cambió desde la previsualización.');const preview=previewImport(db,user,p);if(preview.alreadyImported)return preview;
 const dbFile=process.env.NOTES_DB_PATH;if(!dbFile)throw Error('Base no configurada.');await backupDatabase(db,path.join(path.dirname(dbFile),`before-import-${randomUUID()}.sqlite`));
 return transaction(db,()=>{const summary=previewImport(db,user,p);if(summary.alreadyImported)return summary;
  for(const e of p.events)db.prepare('INSERT OR IGNORE INTO study_attempts(user_id,subject,id,payload,created_at) VALUES(?,?,?,?,?)').run(user,e.subject,e.attempt.id!,JSON.stringify(e.attempt),new Date().toISOString());
  for(const{subject,value:s}of p.sessions){
   const old=db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND id=?').get(user,s.id);
   if(old&&(old.subject!==subject||old.exam!==s.exam||canonical(JSON.parse(String(old.plan)))!==canonical(s.plan)))throw new HttpError(409,'Sesión importada en conflicto.');
   if(!old)db.prepare('INSERT INTO study_sessions(user_id,subject,id,exam,plan,cursor,status,created_at) VALUES(?,?,?,?,?,?,?,?)').run(user,subject,s.id,s.exam,JSON.stringify(s.plan),s.cursor,s.status,new Date().toISOString());
   for(const a of s.answers){const row=db.prepare('SELECT session_id,position FROM study_attempts WHERE user_id=? AND id=?').get(user,a.id);if(row?.session_id&&(row.session_id!==s.id||row.position!==a.position))throw new HttpError(409,'Intento asociado a otra sesión.');db.prepare('UPDATE study_attempts SET session_id=?,position=? WHERE user_id=? AND id=?').run(s.id,a.position,user,a.id);}
  }
  for(const[subject,data]of Object.entries(p.subjects)){
   for(const[item,value]of Object.entries(data.progress))db.prepare('INSERT OR IGNORE INTO study_marks VALUES(?,?,?,?,?,1)').run(user,subject,'progress',item,Number(value));
   for(const item of data.bookmarks)db.prepare('INSERT OR IGNORE INTO study_marks VALUES(?,?,?,?,1,1)').run(user,subject,'bookmarks',item);
  }
  db.prepare('INSERT INTO study_imports VALUES(?,?,?,?,?)').run(user,p.digest,p.text,JSON.stringify(summary),new Date().toISOString());return summary;
 });
}
