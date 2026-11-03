import { betterAuth } from "better-auth";
import { getMigrations } from "better-auth/db/migration";
import { getDatabase, backupDatabase, checkDatabase, migrateDatabase } from "./database.ts";
import path from "node:path";
import { randomUUID } from "node:crypto";

export function authOptions(allowAdministrativeCreate=false){
  const origin=process.env.NOTES_ORIGIN,secret=process.env.BETTER_AUTH_SECRET;
  if(!origin||!secret||secret.length<32)throw Error("Configura NOTES_ORIGIN y un secreto externo de al menos 32 caracteres.");
  const url=new URL(origin);if(url.protocol!=="https:"&&!(url.protocol==="http:"&&["127.0.0.1","localhost","[::1]"].includes(url.hostname)))throw Error("Solo se permite HTTP para desarrollo loopback.");
  return {database:getDatabase(),baseURL:url.origin,secret,trustedOrigins:[url.origin],
    emailAndPassword:{enabled:true,disableSignUp:!allowAdministrativeCreate,autoSignIn:false,minPasswordLength:12},
    session:{expiresIn:60*60*24*7,cookieCache:{enabled:false}},
    rateLimit:{enabled:true,window:60,max:100,customRules:{"/sign-in/email":{window:60,max:10}}},
    advanced:{useSecureCookies:url.protocol==="https:",defaultCookieAttributes:{httpOnly:true,sameSite:"lax" as const},ipAddress:{ipAddressHeaders:["x-notes-client-ip"]}},
    logger:{disabled:true}};
}
function createApplicationAuth(){return betterAuth(authOptions());}
let auth:ReturnType<typeof createApplicationAuth>|undefined;
export function getAuth(){return auth??=createApplicationAuth();}
export function administrativeAuth(){return betterAuth(authOptions(true));}
export async function migrateAuth(){
  const options=authOptions(),db=getDatabase(),migration=await getMigrations(options);
  if(migration.toBeCreated.length||migration.toBeAdded.length||migration.toBeAddedIndexes.length){
    const file=process.env.NOTES_DB_PATH!;await backupDatabase(db,path.join(path.dirname(file),`before-auth-${randomUUID()}.sqlite`));
    await migration.runMigrations();
  }
  migrateDatabase(db);
  db.prepare('INSERT INTO app_meta(key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').run('auth-library','better-auth@1.7.15');
  checkDatabase(db);
}
export function isDisabled(userId:string){return !!getDatabase().prepare('SELECT disabled FROM user_access WHERE user_id=?').get(userId)?.disabled;}
