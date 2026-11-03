import { DatabaseSync, backup } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
import {studySchema} from './study-schema.ts';
import {importSchema} from './import-schema.ts';

const migrations = [
  {version:1,requiresAuth:false,sql:"CREATE TABLE app_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL); INSERT INTO app_meta VALUES ('format','notes-hub-user-data-v1');"},
  {version:2,requiresAuth:true,sql:'CREATE TABLE IF NOT EXISTS user_access (user_id TEXT PRIMARY KEY REFERENCES "user"(id), disabled INTEGER NOT NULL DEFAULT 0 CHECK(disabled IN(0,1)));'},
  {version:3,requiresAuth:true,sql:studySchema},
  {version:4,requiresAuth:true,sql:importSchema}
];
function eligible(db:DatabaseSync){const auth=!!db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='user'").get();return migrations.filter(m=>!m.requiresAuth||auth);}
function within(root:string,target:string){const relative=path.relative(root,target);return relative===''||(relative!=='..'&&!relative.startsWith('..'+path.sep)&&!path.isAbsolute(relative));}
export function externalPath(file:string) {
  if(!path.isAbsolute(file))throw Error("NOTES_DB_PATH debe ser absoluto y externo al repositorio.");
  const resolved=path.resolve(file);
  if(within(process.cwd(),resolved))throw Error("La base de datos y sus copias deben quedar fuera del repositorio.");
  let parent=path.dirname(resolved);while(!fs.existsSync(parent))parent=path.dirname(parent);
  const real=fs.realpathSync(parent),root=fs.realpathSync(process.cwd());
  if(within(root,real)||(fs.existsSync(resolved)&&within(root,fs.realpathSync(resolved))))throw Error("El directorio de datos resuelve dentro del repositorio.");
  return resolved;
}
export function transaction<T>(db:DatabaseSync,fn:()=>T):T {db.exec("BEGIN IMMEDIATE");try{const result=fn();db.exec("COMMIT");return result;}catch(error){db.exec("ROLLBACK");throw error;}}
export function migrateDatabase(db:DatabaseSync){
  db.exec("CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, checksum TEXT NOT NULL, applied_at TEXT NOT NULL)");
  const applied=db.prepare("SELECT version,checksum FROM schema_migrations ORDER BY version").all() as {version:number;checksum:string}[];
  if(applied.some(row=>!migrations.some(m=>m.version===row.version)))throw Error("La base contiene una migración de aplicación desconocida.");
  for(const m of migrations){const checksum=createHash('sha256').update(m.sql).digest('hex'),old=applied.find(row=>row.version===m.version);if(old){if(old.checksum!==checksum)throw Error("Checksum de migración no coincide.");continue;}if(!eligible(db).some(e=>e.version===m.version))continue;
    transaction(db,()=>{db.exec(m.sql);db.prepare("INSERT INTO schema_migrations VALUES (?,?,?)").run(m.version,checksum,new Date().toISOString());});
  }
}
export function openDatabase(file:string){
  file=externalPath(file);fs.mkdirSync(path.dirname(file),{recursive:true,mode:0o700});const existed=fs.existsSync(file);
  const db=new DatabaseSync(file);
  const tables=db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").all();
  if(existed&&tables.length&&!tables.some(t=>t.name==='schema_migrations')){db.close();throw Error("El archivo no pertenece a Notes Hub; no se modifica.");}
  db.exec("PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000; PRAGMA journal_mode=WAL;");
  try{
    const hasRegistry=!!db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='schema_migrations'").get();
    const applied=hasRegistry?db.prepare('SELECT version FROM schema_migrations').all().map(r=>r.version):[];
    if(existed&&eligible(db).some(m=>!applied.includes(m.version))){
      const copy=path.join(path.dirname(file),`before-app-migration-${randomUUID()}.sqlite`);db.prepare('VACUUM INTO ?').run(copy);
      const check=new DatabaseSync(copy,{readOnly:true});try{checkDatabase(check);}finally{check.close();}
    }
    migrateDatabase(db);return db;
  }catch(error){db.close();throw error;}
}
export function checkDatabase(db:DatabaseSync){
  const integrity=db.prepare('PRAGMA integrity_check').all();
  if(integrity.length!==1||Object.values(integrity[0])[0]!=="ok"||db.prepare('PRAGMA foreign_key_check').all().length)throw Error("La comprobación de integridad SQLite falló.");
}
export async function backupDatabase(db:DatabaseSync,destination:string){
  destination=externalPath(destination);if(fs.existsSync(destination))throw Error("La copia de destino ya existe.");
  fs.mkdirSync(path.dirname(destination),{recursive:true,mode:0o700});await backup(db,destination);
  const copy=new DatabaseSync(destination,{readOnly:true});try{checkDatabase(copy);}finally{copy.close();}
}
export function restoreDatabase(source:string,destination:string){
  source=externalPath(source);destination=externalPath(destination);if(fs.existsSync(destination))throw Error("La restauración exige un destino nuevo.");
  const copy=new DatabaseSync(source,{readOnly:true});try{checkDatabase(copy);}finally{copy.close();}
  fs.mkdirSync(path.dirname(destination),{recursive:true,mode:0o700});fs.copyFileSync(source,destination,fs.constants.COPYFILE_EXCL);
  const restored=new DatabaseSync(destination,{readOnly:true});try{checkDatabase(restored);}finally{restored.close();}
}
let database:DatabaseSync|undefined;
export function getDatabase(){if(!database){const file=process.env.NOTES_DB_PATH;if(!file)throw Error("Configura NOTES_DB_PATH fuera del repositorio.");database=openDatabase(file);}return database;}
