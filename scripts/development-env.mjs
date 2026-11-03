import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {createHash,randomBytes} from 'node:crypto';
export function developmentEnvironment(){
 const dir=process.env.NOTES_DATA_DIR||path.join(os.tmpdir(),'notes-hub-development-'+createHash('sha256').update(process.cwd()).digest('hex').slice(0,12));
 const delta=path.relative(process.cwd(),path.resolve(dir));if(!delta||(!delta.startsWith('..')&&!path.isAbsolute(delta)))throw Error('Development data must be outside checkout');fs.mkdirSync(dir,{recursive:true,mode:0o700});
 const secretFile=path.join(dir,'development.secret');if(!process.env.BETTER_AUTH_SECRET&&!fs.existsSync(secretFile))fs.writeFileSync(secretFile,randomBytes(48).toString('base64url'),{flag:'wx',mode:0o600});
 const port=process.env.PORT||'4329';return{...process.env,NOTES_DB_PATH:process.env.NOTES_DB_PATH||path.join(dir,'development.sqlite'),BETTER_AUTH_SECRET:process.env.BETTER_AUTH_SECRET||fs.readFileSync(secretFile,'utf8'),NOTES_ORIGIN:process.env.NOTES_ORIGIN||`http://127.0.0.1:${port}`,HOST:'127.0.0.1',PORT:port};
}
