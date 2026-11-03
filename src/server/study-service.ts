import type {DatabaseSync} from 'node:sqlite';
import bank from '../content/modules/devops/aws/questions/bank.json' with {type:'json'};
import one from '../content/modules/devops/aws/questions/simulacro_1_65.json' with {type:'json'};
import two from '../content/modules/devops/aws/questions/simulacro_2_65.json' with {type:'json'};
import three from '../content/modules/devops/aws/questions/simulacro_3_65.json' with {type:'json'};
import {subjects} from '../config/library.ts';
import {createAttempt,questionRevision, type Question} from '../scripts/study.ts';
import {transaction} from './database.ts';
import {HttpError}from './http.ts';
import type {StudyAttempt,StudyStats}from '../scripts/progress-local';
const emptyStats=():StudyStats=>({done:0,ok:0,failed:[],byLevel:Object.create(null),answered:Object.create(null),history:[]});
const exams:Record<string,{id:number}[]>={'1':one,'2':two,'3':three};
export function subjectId(value:unknown){if(typeof value!=='string'||!Object.hasOwn(subjects,value))throw new HttpError(400,'Materia inválida.');return value;}
function identifier(value:unknown){if(typeof value!=='string'||!/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(value))throw new HttpError(400,'Identificador inválido.');return value;}
export function state(db:DatabaseSync,user:string,subject:string){
 subjectId(subject);const stats=emptyStats();const reset=db.prepare('SELECT after_row FROM study_resets WHERE user_id=? AND subject=?').get(user,subject)?.after_row||0;
 const attempts=db.prepare('SELECT payload FROM study_attempts WHERE user_id=? AND subject=? AND rowid>? ORDER BY rowid').all(user,subject,reset) as {payload:string}[];
 for(const row of attempts){const a:StudyAttempt=JSON.parse(row.payload);stats.done++;if(a.ok)stats.ok++;const level=a.level||'Sin nivel';stats.byLevel[level]??={done:0,ok:0};stats.byLevel[level].done++;if(a.ok)stats.byLevel[level].ok++;const id=String(a.questionId);stats.answered[id]=(stats.answered[id]||0)+1;stats.failed=a.ok?stats.failed.filter(n=>n!==Number(id)):[...new Set([...stats.failed,Number(id)])];stats.history.push(a);}
 const marks=db.prepare('SELECT kind,item,value,version FROM study_marks WHERE user_id=? AND subject=?').all(user,subject) as {kind:string;item:string;value:number;version:number}[];
 const progress=Object.fromEntries(marks.filter(m=>m.kind==='progress').map(m=>[m.item,!!m.value]));const bookmarks=marks.filter(m=>m.kind==='bookmarks'&&m.value).map(m=>m.item);
 const sessions=db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND subject=? ORDER BY rowid DESC').all(user,subject).map(s=>sessionView(db,user,s));
 const imports=db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='study_imports'").get()?db.prepare('SELECT digest,summary,created_at FROM study_imports WHERE user_id=? ORDER BY rowid DESC').all(user).map(r=>({digest:r.digest,summary:JSON.parse(String(r.summary)),at:r.created_at})):[];
 return{stats,progress,bookmarks,marks,sessions,imports};
}
function sessionView(db:DatabaseSync,user:string,s:any){const answers=db.prepare('SELECT payload,position FROM study_attempts WHERE user_id=? AND session_id=? ORDER BY position').all(user,s.id).map(a=>({...JSON.parse(String(a.payload)),position:a.position}));return{id:s.id,exam:s.exam,plan:JSON.parse(s.plan),cursor:s.cursor,status:s.status,answers,done:answers.length,ok:answers.filter(a=>a.ok).length};}
export async function operate(db:DatabaseSync,user:string,input:any){
 if(!input||typeof input!=='object'||Object.hasOwn(input,'userId'))throw new HttpError(400,'Operación inválida.');const subject=subjectId(input.subject);
 if(input.op==='attempt'){
   const id=identifier(input.id);if(subject!=='aws')throw new HttpError(400,'Banco no disponible.');const q=bank.find(q=>q.id===input.questionId) as Question|undefined;if(!q)throw new HttpError(400,'Pregunta inválida.');
   const revision=await questionRevision(q);if(input.revision!==revision)throw new HttpError(409,'La pregunta ha cambiado. Recarga antes de responder.');
   if(!Array.isArray(input.selectedIndices))throw new HttpError(400,'Selección inválida.');let attempt;try{attempt=await createAttempt(q,input.selectedIndices);}catch{throw new HttpError(400,'Selección inválida.');}attempt.id=id;
   return transaction(db,()=>{
     const old=db.prepare('SELECT payload,session_id,position,subject FROM study_attempts WHERE user_id=? AND id=?').get(user,id);
     if(old){const a=JSON.parse(String(old.payload));if(old.subject!==subject||a.questionId!==q.id||a.revision!==revision||JSON.stringify(a.selectedIndices)!==JSON.stringify(attempt.selectedIndices)||(old.session_id||null)!==(input.sessionId||null)||(old.position??null)!==(input.position??null))throw new HttpError(409,'El ID ya pertenece a otro intento.');return a;}
     if(input.sessionId){identifier(input.sessionId);const s=db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND id=? AND subject=?').get(user,input.sessionId,subject);if(!s)throw new HttpError(404,'Sesión inexistente.');const plan=JSON.parse(String(s.plan));if(s.status!=='active'||s.cursor!==input.position||plan[input.position]?.id!==q.id||plan[input.position]?.revision!==revision)throw new HttpError(409,'La sesión cambió. Recarga para continuar.');}
     else if(input.position!==undefined)throw new HttpError(400,'Posición sin sesión.');
     db.prepare('INSERT INTO study_attempts(user_id,subject,id,payload,created_at,session_id,position) VALUES(?,?,?,?,?,?,?)').run(user,subject,id,JSON.stringify(attempt),attempt.at!,input.sessionId||null,input.position??null);return attempt;
   });
 }
 if(input.op==='start'){
   const id=identifier(input.id),series=exams[input.exam];if(subject!=='aws'||!series)throw new HttpError(400,'Serie inválida.');
   const plan=await Promise.all(series.map(async item=>{const q=bank.find(q=>q.id===item.id)!;return{id:q.id,revision:await questionRevision(q)};}));
   return transaction(db,()=>{const old=db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND id=?').get(user,id);if(old){if(old.exam!==input.exam||old.subject!==subject)throw new HttpError(409,'ID de sesión en conflicto.');return sessionView(db,user,old);}db.prepare('INSERT INTO study_sessions(user_id,subject,id,exam,plan,created_at) VALUES(?,?,?,?,?,?)').run(user,subject,id,input.exam,JSON.stringify(plan),new Date().toISOString());return sessionView(db,user,db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND id=?').get(user,id));});
 }
 if(input.op==='advance')return transaction(db,()=>{identifier(input.id);const s=db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND id=? AND subject=?').get(user,input.id,subject);if(!s)throw new HttpError(404,'Sesión inexistente.');if(!Number.isInteger(input.position)||input.position<0)throw new HttpError(400,'Posición inválida.');if(Number(s.cursor)>input.position)return sessionView(db,user,s);if(s.cursor!==input.position||!db.prepare('SELECT id FROM study_attempts WHERE user_id=? AND session_id=? AND position=?').get(user,input.id,input.position))throw new HttpError(409,'Responde antes de avanzar.');const cursor=input.position+1;db.prepare('UPDATE study_sessions SET cursor=?,status=? WHERE user_id=? AND id=?').run(cursor,cursor===JSON.parse(String(s.plan)).length?'completed':'active',user,input.id);return sessionView(db,user,db.prepare('SELECT * FROM study_sessions WHERE user_id=? AND id=?').get(user,input.id));});
 if(input.op==='mark')return transaction(db,()=>{if(!['progress','bookmarks','library'].includes(input.kind)||typeof input.item!=='string'||!input.item.length||input.item.length>250||typeof input.value!=='boolean'||!Number.isSafeInteger(input.version)||input.version<0||(input.kind==='library'&&input.item!==subject))throw new HttpError(400,'Marca inválida.');const old=db.prepare('SELECT * FROM study_marks WHERE user_id=? AND subject=? AND kind=? AND item=?').get(user,subject,input.kind,input.item);const version=Number(old?.version||0);if(version!==input.version){if(!!old?.value===input.value)return{version};throw new HttpError(409,'Otro dispositivo cambió esta marca. Recarga y vuelve a intentarlo.');}db.prepare('INSERT INTO study_marks VALUES(?,?,?,?,?,?) ON CONFLICT(user_id,subject,kind,item) DO UPDATE SET value=excluded.value,version=excluded.version').run(user,subject,input.kind,input.item,Number(input.value),version+1);return{version:version+1};});
 if(input.op==='reset')return transaction(db,()=>{const last=db.prepare('SELECT COALESCE(MAX(rowid),0) AS n FROM study_attempts WHERE user_id=? AND subject=?').get(user,subject)!.n;db.prepare('INSERT INTO study_resets VALUES(?,?,?) ON CONFLICT(user_id,subject) DO UPDATE SET after_row=excluded.after_row').run(user,subject,last);return{reset:true};});
 throw new HttpError(400,'Operación desconocida.');
}
