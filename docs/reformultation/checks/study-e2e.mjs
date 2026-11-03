import fs from 'node:fs';import {setupServer,login,must,writeReport}from './e2e-support.mjs';
import {createAttempt}from '../../../src/scripts/study.ts';
const phase=process.argv[2]||'T04A',s=await setupServer(phase),results=[];const bank=JSON.parse(fs.readFileSync('src/content/modules/devops/aws/questions/bank.json','utf8'));const exams=[1,2,3].map(n=>JSON.parse(fs.readFileSync(`src/content/modules/devops/aws/questions/simulacro_${n}_65.json`,'utf8')));
try{const a=await s.browser.newContext(),a2=await s.browser.newContext(),b=await s.browser.newContext();const p=await login(a,s.base,s.users[0]);await login(a2,s.base,s.users[0]);const pb=await login(b,s.base,s.users[1]);const errors=[];p.on('pageerror',e=>errors.push(e.message));pb.on('pageerror',e=>errors.push(e.message));
 const local={'study:aws:stats':'{"done":1,"ok":0,"history":[]}','study:aws:bank-2026-480':'true'};await p.evaluate(v=>{for(const[k,x]of Object.entries(v))localStorage.setItem(k,x)},local);
 await p.goto(s.base+'/materias/aws/preguntas/');await p.locator('#quiz h2').waitFor();
 for(let n=0;n<3;n++){
  await p.locator('[data-mode]').selectOption(String(n+1));await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[n][0].id).q}).waitFor();let expected=0;const seen=[];
  for(let i=0;i<65;i++){
   const q=bank.find(q=>q.id===exams[n][i].id);must(await p.locator('#quiz h2').textContent()===q.q,`Unexpected order exam ${n+1} at ${i}`);seen.push(q.id);
   const wrong=[...q.correct];if(i%5===0){const replacement=q.options.findIndex((_x,index)=>!q.correct.includes(index));if(replacement>=0)wrong[0]=replacement;}
   const selected=i%5===0?wrong:q.correct;const ok=JSON.stringify([...selected].sort())===JSON.stringify([...q.correct].sort());if(ok)expected++;
   for(const index of selected)await p.locator('#quiz input').nth(index).check();await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz .feedback').waitFor();must((await p.locator('#quiz .feedback').textContent()).includes(q.why),'Explanation missing');
   if(['T06B','T07'].includes(phase)&&n===2&&i===64){await p.reload();await p.locator('#quiz h2').waitFor();await p.locator('[data-mode]').selectOption('3');}
   else await p.getByRole('button',{name:'Siguiente pregunta →',exact:true}).click();
   if(i<64)await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[n][i+1].id).q}).waitFor();
   if(i===24){await p.reload();await p.locator('#quiz h2').waitFor();await p.locator('[data-mode]').selectOption(String(n+1));await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[n][i+1].id).q}).waitFor();}
  }
  await p.getByRole('button',{name:'Reiniciar simulacro',exact:true}).waitFor();must((await p.locator('#quiz').textContent()).includes(`${expected}/65 correctas`),'Incorrect final score');results.push({exam:n+1,ids:seen,done:65,ok:expected,status:'PASS'});
  if(['T06B','T07'].includes(phase)&&n===2){await p.getByRole('button',{name:'Reiniciar simulacro',exact:true}).click();await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[n][0].id).q}).waitFor();must((await(await a.request.get(s.base+'/api/study/state?subject=aws')).json()).sessions.filter(x=>x.status==='completed').length===3,'Restart erased completed sessions');}
 }
 const get=async ctx=>(await(await ctx.request.get(s.base+'/api/study/state?subject=aws')).json());const sa=await get(a),sa2=await get(a2),sb=await get(b);must(sa.stats.done===195&&sa2.stats.done===195&&sb.stats.done===0,'Account/device isolation failed');must(sa.sessions.filter(x=>x.status==='completed').length===3,'Completed histories missing');
 await p.goto(s.base+'/materias/aws/estadisticas/');await p.locator('[data-done]').filter({hasText:'195'}).waitFor();await p.reload();await p.locator('[data-done]').filter({hasText:'195'}).waitFor();
 const exported=await(await a.request.get(s.base+'/api/study/export')).json();must(exported.subjects.aws.stats.done===195,'Remote export mismatch');
 await p.goto(s.base+'/materias/aws/cloud-block-1-introduccion/');await p.locator('[data-save]').click();await p.locator('[data-save][aria-pressed=true]').waitFor();await p.locator('[data-read]').click();await p.locator('[data-read][aria-pressed=true]').waitFor();await p.reload();await p.locator('[data-read][aria-pressed=true]').waitFor();
 await pb.goto(s.base+'/materias/aws/cloud-block-1-introduccion/');await pb.locator('[data-read][aria-pressed=false]').waitFor();
 must(await p.evaluate(v=>Object.entries(v).every(([k,x])=>localStorage.getItem(k)===x),local),'Legacy browser storage changed');must(errors.length===0,'JavaScript exception');
 results.push({case:'Two accounts/two devices, reload, marks, account export, legacy bytes and zero JS exceptions',status:'PASS'});
 if(phase==='T04B'){
  const e1=await createAttempt(bank[200],bank[200].correct),e2=await createAttempt(bank[201],bank[201].correct);
  const copy=history=>JSON.stringify({format:'study-notes',version:2,subjects:{aws:{stats:{done:history.length+370,ok:history.length,history:[...history,{questionId:3,question:'Synthetic legacy',ok:false}]},progress:{synthetic:true},bookmarks:['synthetic'] }},raw:{'study:aws:bank-2026-480':'true','study:aws:history-before-bank-2026-480':'[]'}});
  const call=(ctx,data)=>ctx.request.post(s.base+'/api/study/import',{data,headers:{Origin:s.base}});
  const text1=copy([e1]),text2=copy([e1,e2]);const preview=await(await call(a,{text:text1})).json();must(preview.events===1&&preview.legacy===1,'Import preview incorrect');
  for(const ctx of [a,a2])must((await call(ctx,{text:text1,confirm:preview.digest})).status()===200,'Repeated import failed');
  const preview2=await(await call(a2,{text:text2})).json();must(preview2.duplicates===1,'Overlapping export not identified');
  const repeated=await Promise.all([call(a,{text:text2,confirm:preview2.digest}),call(a2,{text:text2,confirm:preview2.digest})]);must(repeated.every(r=>r.status()===200),'Concurrent import failed');
  must((await get(a)).stats.done===197&&(await get(a2)).stats.done===197&&(await get(b)).stats.done===0,'Import account/device isolation failed');
  must((await call(a,{text:'{invalid'})).status()===400,'Corrupt import accepted');
  await p.goto(s.base+'/materias/aws/estadisticas/');await p.locator('[data-done]').filter({hasText:'197'}).waitFor();
  p.once('dialog',d=>d.accept());await p.locator('[data-import]').setInputFiles({name:'synthetic.json',mimeType:'application/json',buffer:Buffer.from(text2)});await p.waitForLoadState('networkidle');must((await get(a)).stats.done===197,'UI import duplicated events');
  await p.goto(s.base+'/materias/aws/preguntas/');await p.locator('#quiz h2').waitFor();await p.locator('#quiz input').first().check();await p.route('**/api/study/state',route=>route.request().method()==='POST'?route.abort():route.continue());await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz [role=alert]').waitFor();must((await get(a)).stats.done===197,'Failed network request was counted');await p.unroute('**/api/study/state');await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz .feedback').waitFor();must((await get(a)).stats.done===198,'Network retry not persisted once');
  must(await p.evaluate(v=>Object.entries(v).every(([k,x])=>localStorage.getItem(k)===x),local),'Import changed original local bytes');
  results.push({case:'Two accounts/two sessions; explicit UI import, repeat/overlap/concurrent imports, corrupt rejection and network retry',events:198,otherAccount:0,status:'PASS'});
 }
 if(['T05','T06A','T06B','T07'].includes(phase)){
  await p.goto(s.base+'/');await p.locator('[data-library-toggle=aws]').waitFor();must(await p.locator('[data-library-subject]').count()===0,'New library was not empty');
  await p.locator('[data-library-toggle=aws]').click();await p.locator('[data-library-subject=aws]').waitFor();
  await pb.goto(s.base+'/');await pb.locator('[data-library-toggle=english]').click();await pb.locator('[data-library-subject=english]').waitFor();must(await pb.locator('[data-library-subject=aws]').count()===0,'Library leaked between accounts');
  const device=await a2.newPage();await device.goto(s.base+'/');await device.locator('[data-library-subject=aws]').waitFor();
  await p.locator('[data-library-toggle=aws]').click();await p.locator('[data-library-subject=aws]').waitFor({state:'detached'});must(await p.locator('[data-library-subject=aws]').count()===0,'Hide failed');must((await get(a)).stats.done===195,'Hide erased progress');
  must((await a.request.get(s.base+'/materias/english/')).status()===200&&(await b.request.get(s.base+'/materias/aws/')).status()===200,'Preference was used as authorization');
  await p.locator('[data-library-toggle=aws]').click();await p.locator('[data-library-subject=aws]').waitFor();
  await p.setViewportSize({width:390,height:844});await p.keyboard.press('Tab');must(await p.locator('[data-library-toggle=aws]').isVisible(),'Mobile selector invisible');await p.setViewportSize({width:1280,height:900});
  results.push({case:'Empty library, two accounts, hide/restore without data loss, second device, direct access, mobile and keyboard controls',status:'PASS'});
 }
 if(['T06A','T06B','T07'].includes(phase)){
  await p.goto(s.base+'/materias/aws/terminos/');await p.locator('[data-count]').filter({hasText:'489'}).waitFor();
  for(const query of ['AWS SCT','Amazon QuickSight','S3 Lifecycle','AWS Health API']){await p.locator('[data-search]').fill(query);must(await p.locator('[data-term]:not([hidden])').count()>0,'Alias search failed: '+query);}
  await p.locator('[data-search]').fill('');await p.getByRole('button',{name:'Bloque IV · Facturación, precios y soporte',exact:true}).click();must(await p.locator('[data-term]:not([hidden])').count()>0,'Group filter empty');
  const link=p.locator('[data-term]:not([hidden]) a').first();const href=await link.getAttribute('href');must((await a.request.get(s.base+href)).status()===200,'Concept chapter link broken');
  await p.goto(s.base+'/buscar/?q=QuickSight');await p.locator('[data-results] a').first().waitFor();
  await p.setViewportSize({width:390,height:844});await p.goto(s.base+'/materias/aws/terminos/');await p.locator('[data-count]').filter({hasText:'489'}).waitFor();must(await p.locator('[data-search]').isVisible(),'Mobile concept search inaccessible');await p.setViewportSize({width:1280,height:900});
  results.push({case:'489 concepts, term/alias/group searches, linked chapters, general search and mobile input',status:'PASS'});
 }
 if(['T06B','T07'].includes(phase)){
  await p.goto(s.base+'/materias/aws/preguntas/');await p.locator('#quiz h2').waitFor();
  const html=await p.content();must(!/<script[^>]*lang=["']ts["']/.test(html)&&/<script[^>]*type="module"[^>]*src="\/_astro\//.test(html),'B01 raw/nonmodule script regression');
  await p.locator('[data-level]').selectOption(bank[0].level);await p.locator('[data-topic]').selectOption(bank[0].topic);
  let title=await p.locator('#quiz h2').textContent(),q=bank.find(q=>q.q===title);must(q?.level===bank[0].level&&q?.topic===bank[0].topic,'Topic/level filters failed');
  await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('[data-answer-hint]').waitFor();must((await get(a)).stats.done===195,'Empty selection recorded');
  for(const i of q.correct)await p.locator('#quiz input').nth(i).check();await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz .feedback').waitFor();
  await p.getByRole('button',{name:'Siguiente pregunta →',exact:true}).click();await p.locator('#quiz h2').waitFor();title=await p.locator('#quiz h2').textContent();q=bank.find(q=>q.q===title);const wrong=[...q.correct],replacement=q.options.findIndex((_x,i)=>!q.correct.includes(i));wrong[0]=replacement;for(const i of wrong)await p.locator('#quiz input').nth(i).check();await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz .feedback.bad').waitFor();must((await get(a)).stats.failed.includes(q.id),'Wrong answer not recorded');
  await p.locator('[data-failed]').check();await p.locator('#quiz h2').waitFor();title=await p.locator('#quiz h2').textContent();q=bank.find(q=>q.q===title);must((await get(a)).stats.failed.includes(q.id),'Failed filter showed an unfailed question');
  await p.reload();await p.locator('#quiz h2').waitFor();let before=(await get(a)).stats.done;title=await p.locator('#quiz h2').textContent();q=bank.find(q=>q.q===title);for(const i of q.correct)await p.locator('#quiz input').nth(i).check();
  let interrupted=false;await p.route('**/api/study/state',async route=>{if(route.request().method()==='POST'&&!interrupted){interrupted=true;await route.fetch();await route.abort();}else await route.continue();});await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz [role=alert]').waitFor();must((await get(a)).stats.done===before+1,'Server did not commit synthetic interrupted response');await p.unroute('**/api/study/state');await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz .feedback').waitFor();must((await get(a)).stats.done===before+1,'Lost-response retry duplicated attempt');
  await p.locator('[data-mode]').selectOption('1');await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[0][0].id).q}).waitFor();q=bank.find(q=>q.id===exams[0][0].id);for(const i of q.correct)await p.locator('#quiz input').nth(i).check();await p.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await p.locator('#quiz .feedback').waitFor();await p.getByRole('button',{name:'Siguiente pregunta →',exact:true}).click();
  await p.locator('[data-mode]').selectOption('2');await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[1][0].id).q}).waitFor();await p.locator('[data-mode]').selectOption('1');await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[0][1].id).q}).waitFor();
  await p.reload();await p.locator('#quiz h2').waitFor();await p.locator('[data-mode]').selectOption('1');await p.locator('#quiz h2').filter({hasText:bank.find(q=>q.id===exams[0][1].id).q}).waitFor();
  const cross=await b.request.post(s.base+'/api/study/state',{headers:{Origin:s.base},data:{subject:'aws',op:'advance',id:(await get(a)).sessions.find(x=>x.exam==='1'&&x.status==='active').id,position:1}});must(cross.status()===404,'Cross-account session write accepted');
  await p.goto(s.base+'/materias/aws/estadisticas/');await p.locator('[data-done]').filter({hasText:String((await get(a)).stats.done)}).waitFor();must(!/<script[^>]*lang=["']ts["']/.test(await p.content()),'B01 stats regression');
  await p.goto(s.base+'/');const theme=p.locator('[data-theme-toggle]');if(await theme.count()){const original=await p.locator('html').getAttribute('data-theme');await theme.click();must(await p.locator('html').getAttribute('data-theme')!==original,'Theme toggle failed');await p.reload();must(await p.locator('html').getAttribute('data-theme')!==original,'Theme did not persist');}
  results.push({case:'B01 modules, normal practice, count validation, filters, failed attempts, committed-response loss/retry, change/resume after reload, owner rejection and themes',status:'PASS'});
 }
 must(errors.length===0,'JavaScript exception');writeReport(phase,'browser',results);console.log(`${phase}: Chromium 195 remote answers and isolated accounts PASS; credentials omitted.`);
}finally{await s.close();}
