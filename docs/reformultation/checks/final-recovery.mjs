import fs from 'node:fs';import crypto from 'node:crypto';import {spawnSync}from 'node:child_process';
const out='docs/reformultation/docs/evidencias-T06B',hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const previous='C:/Users/mroma/AppData/Local/Temp/notes-hub-T01-recovery-30sJe2',manifest=JSON.parse(fs.readFileSync(previous+'/manifest.json','utf8'));
const protectedFiles=manifest.files.filter(e=>e.path.startsWith('aws-clf-c02/')||e.path.startsWith('src/styles/')||/^docs\/reformultation\/docs\/(?:evidencias-T01(?:B)?\/|T01_RESULTADOS\.md|T02A_RESULTADOS\.md)/.test(e.path)||/^src\/content\/modules\/.+\/(?:theory|questions)\//.test(e.path));
const differences=protectedFiles.filter(e=>!fs.existsSync(e.path)||hash(e.path)!==e.sha256).map(e=>e.path);if(differences.length)throw Error('Protected files changed: '+differences.join(', '));
const moved=JSON.parse(fs.readFileSync('docs/reformultation/docs/evidencias-T03B/moved-assets.json','utf8'));
if(moved.files.length!==744||moved.files.some(e=>!fs.existsSync(e.to)||hash(e.to)!==e.sha256))throw Error('Moved private assets differ from their verified originals.');
function run(args){const r=spawnSync(process.execPath,['docs/reformultation/checks/recovery.mjs',...args],{encoding:'utf8',windowsHide:true,maxBuffer:20*1024*1024});if(r.status!==0)throw Error('Recovery verification failed: '+(r.stderr||'exit '+r.status));return JSON.parse(r.stdout);}
const snapshot=run(['snapshot']),verified=run(['verify',snapshot.backup]),restore=run(['restore-test',snapshot.backup]);
fs.writeFileSync(out+'/recovery-final.json',JSON.stringify({at:new Date().toISOString(),snapshot:{backup:snapshot.backup,files:snapshot.files,bytes:snapshot.bytes},verified,restore,protectedFilesChecked:protectedFiles.length,protectedDifferences:differences,movedReport:'evidencias-T03B/moved-assets.json',moves:moved.files.length},null,2)+'\n');
console.log(JSON.stringify({backup:snapshot.backup,files:snapshot.files,restore:restore.target,result:'PASS',protected:protectedFiles.length}));
