import fs from 'node:fs';import {setupServer,login,must,writeReport} from './e2e-support.mjs';
import {getDatabase} from '../../../src/server/database.ts';import {authOptions} from '../../../src/server/auth.ts';import {betterAuth} from 'better-auth';
const phase=process.argv[2]||'T03B',s=await setupServer(phase),db=getDatabase(),results=[];const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(d+'/'+e.name):[d+'/'+e.name]);
try{
 if(process.argv.includes('--visual-only')){
  const context=await s.browser.newContext({viewport:{width:1280,height:900}}),page=await login(context,s.base,s.users[0]);await page.goto(s.base+'/materias/aws/preguntas/');await page.locator('#quiz h2').waitFor();
  const dir=`docs/reformultation/docs/evidencias-${phase}`;await page.screenshot({path:dir+'/quiz-desktop-light.png',fullPage:true,animations:'disabled'});
  await page.locator('[data-theme-toggle]').click();await page.screenshot({path:dir+'/quiz-desktop-dark.png',fullPage:true,animations:'disabled'});
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:dir+'/quiz-mobile-dark.png',fullPage:true,animations:'disabled'});
  writeReport(phase,'visual',{screenshots:['quiz-desktop-light.png','quiz-desktop-dark.png','quiz-mobile-dark.png'],syntheticOnly:true,independentHumanReview:false});
  await context.close();await s.close();console.log('Synthetic visual captures ready; no credentials captured.');process.exit(0);
 }
 const privateRoutes=['/','/areas/devops/','/areas/development/','/materias/aws/','/materias/english/','/buscar/?q=IAM','/materias/aws/apuntes/','/materias/aws/terminos/','/materias/aws/comparativas/','/materias/aws/preguntas/','/materias/aws/estadisticas/','/api/study/bank','/src/content/modules/devops/aws/questions/bank.json','/private/study-assets/study-docs/bloque-1/00_indice.md','/.env','/development.sqlite','/server/entry.mjs','/@fs/src/content/modules/devops/aws/questions/bank.json',...fs.readdirSync('src/content/modules/devops/aws/theory').map(f=>'/materias/aws/'+f.replace(/\.mdx?$/,'')+'/')];
 for(const route of privateRoutes){const r=await fetch(s.base+route,{redirect:'manual'});must([302,303,401,404].includes(r.status),'Anonymous route exposed: '+route);}
 const assets=walk('private/study-assets').map(f=>'/'+f.slice('private/study-assets/'.length));
 for(const route of assets){const r=await fetch(s.base+route,{method:'HEAD'});must(r.status===401,'Anonymous download exposed');}
 must(walk('public').length===0,'Study copies remain public');
 const bank=JSON.parse(fs.readFileSync('src/content/modules/devops/aws/questions/bank.json','utf8'));
 const clientFiles=walk('dist/client');must(!clientFiles.some(f=>/\.(?:mdx?|pdf|sqlite|json)$/.test(f)),'Private document found in client build');
 for(const f of clientFiles.filter(f=>/\.(?:js|html|map)$/.test(f))){const text=fs.readFileSync(f,'utf8');must(!text.includes(s.env.BETTER_AUTH_SECRET),'Secret in client build');for(const q of bank)must(!text.includes(q.q)&&!text.includes(JSON.stringify(q.q).slice(1,-1)),'Question bank leaked into a public bundle');}
 results.push({case:'Anonymous matrix and build audit',routes:privateRoutes.length,assets:assets.length,status:'PASS'});
 const a=await s.browser.newContext(),b=await s.browser.newContext();const pa=await login(a,s.base,s.users[0]),pb=await login(b,s.base,s.users[1]);
 const cookieFlags=(await a.cookies()).filter(c=>c.name.includes('session')).map(c=>({httpOnly:c.httpOnly,sameSite:c.sameSite,secure:c.secure}));must(cookieFlags.length&&cookieFlags.every(c=>c.httpOnly&&c.sameSite==='Lax'),'Unsafe development cookie flags');
 for(const context of [a,b]){for(const route of ['/materias/aws/','/materias/english/','/materias/aws/cloud-block-1-introduccion/','/buscar/?q=IAM']){const r=await context.request.get(s.base+route);must(r.status()===200,'Authenticated page denied');must(r.headers()['cache-control'].includes('no-store'),'Private cache header absent');}for(const route of assets){const r=await context.request.head(s.base+route);must(r.status()===200,'Authenticated asset denied');await r.dispose();}}
 await pa.goto(s.base+'/materias/aws/preguntas/');await pa.locator('#quiz h2').waitFor();must(await pa.locator('#quiz .option').count()>1,'Authenticated bank did not load');
 results.push({case:'Two accounts access every published asset and all subjects',assetsPerAccount:assets.length,cookieFlags,status:'PASS'});
 const signup=await a.request.post(s.base+'/api/auth/sign-up/email',{data:{email:'never-created@example.invalid',password:s.users[0].password,name:'Synthetic'},headers:{Origin:s.base}});must(signup.status()===404,'Public registration usable');
 const csrf=await a.request.post(s.base+'/api/auth/sign-in/email',{data:{email:s.users[0].email,password:s.users[0].password},headers:{Origin:'https://untrusted.invalid'}});must(csrf.status()>=400,'Untrusted origin accepted');
 const secureAuth=betterAuth({...authOptions(),baseURL:'https://synthetic.invalid',trustedOrigins:['https://synthetic.invalid'],advanced:{...authOptions().advanced,useSecureCookies:true}});
 const secureResponse=await secureAuth.handler(new Request('https://synthetic.invalid/api/auth/sign-in/email',{method:'POST',headers:{Origin:'https://synthetic.invalid','Content-Type':'application/json'},body:JSON.stringify({email:s.users[0].email,password:s.users[0].password})}));must(secureResponse.ok&&secureResponse.headers.getSetCookie().some(c=>/; Secure/i.test(c)&&/; HttpOnly/i.test(c)&&/SameSite=Lax/i.test(c)),'HTTPS cookies not secure');
 results.push({case:'Registration blocked, origin rejection and HTTPS cookie attributes',status:'PASS'});
 await pa.goto(s.base+'/');await pa.locator('[data-logout]').click();await pa.waitForURL(/\/login/);must((await a.request.get(s.base+'/api/study/bank')).status()===401,'Logout retained access');
 must(s.admin('revoke',s.users[1]).status===0,'Revocation CLI failed');must((await b.request.get(s.base+'/api/study/bank')).status()===401,'Revoked session retained access');
 await pb.goto(s.base+'/login');await pb.locator('[name=email]').fill(s.users[1].email);await pb.locator('[name=password]').fill(s.users[1].password);await pb.getByRole('button',{name:'Entrar',exact:true}).click();await pb.waitForURL(s.base+'/');
 const userB=db.prepare('SELECT id FROM "user" WHERE email=?').get(s.users[1].email);db.prepare('UPDATE session SET expiresAt=0 WHERE userId=?').run(userB.id);must((await b.request.get(s.base+'/api/study/bank')).status()===401,'Expired session retained access');
 must(s.admin('disable',s.users[0]).status===0,'Disable CLI failed');const denied=await a.request.post(s.base+'/api/auth/sign-in/email',{data:{email:s.users[0].email,password:s.users[0].password},headers:{Origin:s.base}});must(denied.status()===401,'Disabled account accepted');must(s.admin('enable',s.users[0]).status===0,'Enable CLI failed');
 const replacement=globalThis.crypto.randomUUID()+globalThis.crypto.randomUUID();must(s.admin('reset-password',s.users[0],replacement).status===0,'Password recovery CLI failed');
 const old=await a.request.post(s.base+'/api/auth/sign-in/email',{data:{email:s.users[0].email,password:s.users[0].password},headers:{Origin:s.base}});must(old.status()===401,'Old password retained access');const recovered=await a.request.post(s.base+'/api/auth/sign-in/email',{data:{email:s.users[0].email,password:replacement},headers:{Origin:s.base}});must(recovered.ok(),'Administrative recovery did not restore access');
 results.push({case:'Logout, revocation, expiry, disable/enable and administrative password recovery',status:'PASS'});
 let limited=false;for(let i=0;i<15;i++){const r=await a.request.post(s.base+'/api/auth/sign-in/email',{data:{email:'absent@example.invalid',password:replacement},headers:{Origin:s.base,'x-notes-client-ip':'spoof-'+i,'x-forwarded-for':'203.0.113.'+i}});if(r.status()===429){limited=true;break;}}must(limited,'Sign-in rate limit bypassed by forged IP header');results.push({case:'Brute-force limit with spoofed IP headers',status:'PASS'});
 await a.close();await b.close();writeReport(phase,'security',{status:'PASS',browser:s.browser.version(),results,syntheticOnly:true});console.log('T03B security and Chromium checks PASS; credentials omitted.');
}catch(error){writeReport(phase,'security',{status:'FAIL',error:error.message,results});throw error;}finally{await s.close();}
