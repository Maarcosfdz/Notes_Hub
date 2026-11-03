import {spawn,spawnSync}from 'node:child_process';
process.umask(0o077);
if(!process.env.BETTER_AUTH_SECRET||process.env.BETTER_AUTH_SECRET.length<32){console.error('Configure a runtime secret of at least 32 characters.');process.exit(1);}
// Reuses checksummed migrations and their pre-change SQLite snapshots.
const migration=spawnSync(process.execPath,['scripts/auth-migrate.mjs'],{stdio:'inherit',env:process.env});
if(migration.status!==0){console.error('Schema verification failed; HTTP server was not started.');process.exit(1);}
const server=spawn(process.execPath,['dist/server/entry.mjs'],{stdio:'inherit',env:process.env});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.kill(signal));
server.on('error',()=>{console.error('HTTP server failed to start.');process.exitCode=1;});
server.on('exit',(code,signal)=>{process.exitCode=code??(signal?0:1);});
