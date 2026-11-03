import type {StudyStats,StudyAttempt}from './progress-local';
export type {StudyStats,StudyAttempt}from './progress-local';
type Session={id:string;exam:string;cursor:number;status:string;done:number;ok:number;plan:{id:number;revision:string}[];answers:(StudyAttempt&{position:number})[]};
type State={stats:StudyStats;progress:Record<string,boolean>;bookmarks:string[];marks:{kind:string;item:string;value:number;version:number}[];sessions:Session[];imports:{digest:string;summary:{legacy:number;legacyAggregates:{done:number;ok:number}[]};at:string}[]};
const cache=new Map<string,State>();
export function showError(error:unknown,state:'error'|'pending'|'success'='error'){let el=document.querySelector<HTMLElement>('[data-persistence-status]');if(!el){el=document.createElement('p');el.dataset.persistenceStatus='';el.setAttribute('role','status');el.setAttribute('aria-live','polite');document.querySelector('main')?.append(el);}el.dataset.state=state;el.textContent=typeof error==='string'?error:error instanceof TypeError?'No se pudo conectar. Comprueba la conexión y reintenta.':error instanceof Error?error.message:'No se pudo guardar. Recarga para reintentar.';}
export async function initialize(subject:string){try{const r=await fetch(`/api/study/state?subject=${encodeURIComponent(subject)}`,{cache:'no-store'});if(!r.ok)throw Error('No se pudo cargar el progreso. Inicia sesión o recarga para reintentar.');cache.set(subject,await r.json());window.dispatchEvent(new CustomEvent('study:updated',{detail:subject}));}catch(e){showError(e);throw e;}}
export async function operation(subject:string,op:Record<string,unknown>){showError('Guardando…','pending');try{const r=await fetch('/api/study/state',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...op,subject})});if(!r.ok){const e=await r.json();throw Error(e.error||'No se pudo guardar. Reintenta.');}const result=await r.json();await initialize(subject);showError('Guardado en tu cuenta.','success');return result;}catch(e){showError(e);throw e;}}
function current(s:string){const data=cache.get(s);if(!data)throw Error('Progreso aún no cargado.');return data;}
export const getStats=(s:string)=>structuredClone(current(s).stats);
export const getBookmarks=(s:string)=>[...current(s).bookmarks];
export const getReading=(s:string)=>({...current(s).progress});
export const getSessions=(s:string)=>structuredClone(current(s).sessions);
export const getImports=(s:string)=>structuredClone(current(s).imports);
export async function saveMark(s:string,kind:string,item:string,value:boolean){const mark=current(s).marks.find(m=>m.kind===kind&&m.item===item);return operation(s,{op:'mark',kind,item,value,version:mark?.version||0});}
export async function recordAttempt(s:string,a:StudyAttempt,session?:Session){return operation(s,{op:'attempt',id:a.id,questionId:a.questionId,revision:a.revision,selectedIndices:a.selectedIndices,...(session?{sessionId:session.id,position:session.cursor}:{})}) as Promise<StudyAttempt>;}
export const startSession=(s:string,exam:string,id:string)=>operation(s,{op:'start',id,exam}) as Promise<Session>;
export const advanceSession=(s:string,session:Session)=>operation(s,{op:'advance',id:session.id,position:session.cursor}) as Promise<Session>;
export const resetStats=(s:string)=>operation(s,{op:'reset'});
export async function exportAll(){try{const r=await fetch('/api/study/export',{cache:'no-store'});if(!r.ok)throw Error('No se pudo exportar.');const a=document.createElement('a'),url=URL.createObjectURL(await r.blob());a.href=url;a.download='progreso-cuenta.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch(e){showError(e);}}
export async function previewImport(text:string){const r=await fetch('/api/study/import',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text})});const result=await r.json();if(!r.ok)throw Error(result.error);return result;}
export async function importAll(file:File){const text=await file.text(),preview=await previewImport(text);const summary=`Cuenta destino: ${preview.account}\nOrigen: ${preview.format} v${preview.version}\nMaterias: ${preview.subjects.join(', ')}\nIntentos identificables: ${preview.events}; duplicados: ${preview.duplicates}; legado sin identidad: ${preview.legacy}\n${preview.policy}\n¿Confirmas la importación a esta cuenta?`;if(!confirm(summary))return false;const r=await fetch('/api/study/import',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,confirm:preview.digest})});if(!r.ok)throw Error((await r.json()).error||'No se pudo importar.');await initialize('aws');return true;}
export async function importBrowser(){
 // No getters or legacy migration before this byte-for-byte snapshot.
 const {captureLocalRaw}=await import('./progress-local');const raw=captureLocalRaw();const text=JSON.stringify(raw,null,2);const bytes=new TextEncoder().encode(text),hash=await crypto.subtle.digest('SHA-256',bytes);const digest=[...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('');
 const url=URL.createObjectURL(new Blob([text],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=`respaldo-local-${digest.slice(0,12)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 const subjects:Record<string,Record<string,unknown>>={};for(const[k,v]of Object.entries(raw)){const m=k.match(/^study:([a-z0-9-]+):(stats|progress|bookmarks)$/);if(m){subjects[m[1]]??={};try{subjects[m[1]][m[2]]=JSON.parse(v);}catch{throw Error('Datos locales dañados. Se descargó el respaldo bruto; no se importó nada.');}}}
 for(const[k,kind]of [['awsNeonStats','stats'],['awsNeonProgress','progress'],['awsNeonBookmarks','bookmarks']])if(raw[k]){subjects.aws??={};if(subjects.aws[kind]===undefined)try{subjects.aws[kind]=JSON.parse(raw[k]);}catch{throw Error('Legado dañado; respaldo descargado, sin importar.');}}
 if(!Object.keys(subjects).length)throw Error('No hay materias locales reconocibles. El respaldo contiene las claves originales.');
 return importAll(new File([JSON.stringify({format:'study-notes',version:2,subjects,raw,localSnapshotSha256:digest})],'local.json',{type:'application/json'}));
}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')for(const subject of cache.keys())void initialize(subject).catch(()=>{});});
