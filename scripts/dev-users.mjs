import {spawn} from 'node:child_process';import {developmentEnvironment} from './development-env.mjs';
const child=spawn(process.execPath,['scripts/users.mjs',...process.argv.slice(2)],{stdio:'inherit',env:developmentEnvironment(),windowsHide:true});child.on('exit',code=>{process.exitCode=code??1;});
