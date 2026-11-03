import {spawnSync}from 'node:child_process';
const checks='docs/reformultation/checks/';
const tests=['database','local-progress','b07','remote-study','remote-import','quiz','t01b','content-pipeline','http','t07','t07-contrast'].map(n=>checks+n+'.test.mjs');
const result=spawnSync(process.execPath,['--test',...tests,'scripts/verify-glossary.mjs'],{stdio:'inherit',windowsHide:true});process.exitCode=result.status??1;
