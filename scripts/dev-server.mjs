// Development only. Files and synthetic accounts live outside the checkout.
import fs from 'node:fs';import path from 'node:path';import {spawn,spawnSync} from 'node:child_process';import {developmentEnvironment} from './development-env.mjs';
const env=developmentEnvironment();
const migration=spawnSync(process.execPath,['scripts/auth-migrate.mjs'],{env,stdio:'inherit',windowsHide:true});if(migration.status!==0)process.exit(migration.status||1);
const cli=path.resolve('node_modules/astro',JSON.parse(fs.readFileSync('node_modules/astro/package.json','utf8')).bin.astro);
const mode=process.argv[2]||'dev';if(!['dev','preview'].includes(mode))throw Error('Use dev or preview');
const child=spawn(process.execPath,[cli,mode,'--host','127.0.0.1','--port',env.PORT],{stdio:'inherit',env,windowsHide:true});
child.on('exit',code=>{process.exitCode=code??1;});for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
