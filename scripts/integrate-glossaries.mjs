// Reproducible, non-destructive integration: reviewed equivalences, never fuzzy similarity.
import fs from 'node:fs';import path from 'node:path';import {createHash}from 'node:crypto';
export const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').replace(/[^\p{L}\p{N}+]/gu,'');
const target='src/content/modules/devops/aws/reference/glossary.json',out='docs/reformultation/docs/evidencias-T06A';
const baselinePath=out+'/glossary-before.json';fs.mkdirSync(out,{recursive:true});if(!fs.existsSync(baselinePath))fs.copyFileSync(target,baselinePath);
const before=JSON.parse(fs.readFileSync(baselinePath,'utf8')),active=structuredClone(before),manifest=JSON.parse(fs.readFileSync('scripts/content-manifest.json','utf8'));
const iiiPath='aws-clf-c02/bloque-3/conceptos_bloque_3.json',ivPath='aws-clf-c02/bloque-4/19_glosario_integral_facturacion.md';
const iii=JSON.parse(fs.readFileSync(iiiPath,'utf8')).map(x=>({...x,source:iiiPath,block:'III',reference:x.markdown}));
const ivText=fs.readFileSync(ivPath,'utf8').replaceAll('\r','');
const iv=ivText.split(/^## /m).slice(1).map(block=>{const lines=block.trim().split('\n'),term=lines.shift().trim(),aliases=block.match(/\*\*Alias:\*\* (.+)/)?.[1].replace(/\.$/,'').split(',').map(s=>s.trim())||[];const description=lines.join('\n').replace(/<a id="[^"]+"><\/a>/g,'').split('**Procedencia:**')[0].replace(/\*\*Alias:\*\*[^\n]+/g,'').trim().replace(/\n+/g,' ');const reference=block.split('**Procedencia:**')[1]?.match(/\]\((\d[^)]+\.md#[^)]+)\)/)?.[1];if(!reference)throw Error('Missing provenance: '+term);return{term,aliases,description,group:'Bloque IV · Facturación, precios y soporte',source:ivPath,block:'IV',reference};});
if(before.length!==247||iii.length!==225||iv.length!==155)throw Error('Unexpected editorial baseline counts');
// The old combined entry explicitly describes two different tools: retain it as context,
// remove its false equivalence list, and create separate entries for each actual tool.
const combined=active.find(a=>a[0]==='AWS DMS Schema Conversion / AWS SCT');combined[1]='Herramientas relacionadas; no equivalentes';combined[5]=[combined[0]];
const explicit=new Map([
 ['AWS CloudFormation','CloudFormation'],['Infraestructura como código','Infrastructure as Code (IaC)'],
 ['Dimensionamiento adecuado','Rightsizing'],['Fargate','AWS Fargate'],['Lambda','AWS Lambda'],
 ['Lifecycle de S3','Lifecycle Rules'],['Snapshot EBS','EBS snapshot'],
]);
const mappings=[];
for(const term of [...iii,...iv]){
 const keys=[term.term,...term.aliases].map(normalize),wanted=explicit.get(term.term);
 const hits=active.filter(a=>wanted?a[0]===wanted:[a[0],...a[5]].some(s=>keys.includes(normalize(s))));
 if(hits.length>1)throw Error('Ambiguous equivalence requiring decision: '+term.term+' -> '+hits.map(a=>a[0]).join('/'));
 const sourceFile=path.posix.join(path.posix.dirname(term.source),term.reference.split('#')[0]);const chapter=manifest.chapters.find(c=>c.source===sourceFile);if(!chapter)throw Error('Missing active chapter '+sourceFile);
 let entry=hits[0],action='merged';if(!entry){entry=[term.term,term.aliases.join(', ')||term.term,term.group,chapter.id,term.description,[term.term,...term.aliases]];active.push(entry);action='new';}
 else{entry[5]=[...new Set([...entry[5],term.term,...term.aliases])];}
 mappings.push({source:term.source,term:term.term,sourceReference:term.reference,sourceDescription:term.description,target:entry[0],noteId:entry[3],sourceNoteId:chapter.id,action,rule:wanted?'reviewed translation or service-name equivalence':'exact canonical or true source alias'});
}
const report={baseline:247,sources:{III:225,IV:155},total:active.length,newEntries:active.length-247,merged:mappings.filter(m=>m.action==='merged').length,decisions:[{entry:combined[0],change:'Preserved original definition and noteId; removed individual tool aliases, represented by separate canonical tool entries.',reason:'Original definition already distinguishes the two products.'},{entry:'Amazon Elasticsearch Service, nombre histórico',change:'Separate historical context retained; not aliased to ElastiCache or silently equated with all current OpenSearch functionality.'},{entry:'AWS Health / AWS Health Dashboard / AWS Health API',change:'Separate service, UI and API, as explicitly described by source.'},{entry:'TCP, HTTP y HTTPS / AWS Documentation y Whitepapers',change:'Original combined contextual entries retained; individual concepts stay distinct.'},{entry:'Service limits / quotas / Service Quotas',change:'Limits are a concept; Service Quotas is a tool. Kept distinct.'}],humanReview:'Integration maps reviewed by coding agent; no independent human pedagogical review performed.',sources:[iiiPath,ivPath].map(file=>({file,sha256:createHash('sha256').update(fs.readFileSync(file)).digest('hex')})),mappings};
if(process.argv.includes('--write')){const current=JSON.parse(fs.readFileSync(target,'utf8'));if(JSON.stringify(current)!==JSON.stringify(before)&&JSON.stringify(current)!==JSON.stringify(active))throw Error('Active glossary has new editorial changes; review them before reapplying this integration.');fs.writeFileSync(target,JSON.stringify(active,null,2)+'\n');fs.writeFileSync('src/content/modules/devops/aws/reference/glossary-provenance.json',JSON.stringify(report,null,2)+'\n');fs.writeFileSync(out+'/integration.json',JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({total:report.total,new:report.newEntries,merged:report.merged,entries:report.mappings.length}));
