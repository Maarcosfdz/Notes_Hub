import type { APIContext } from "astro";
import fs from "node:fs";import path from "node:path";
const types:Record<string,string>={".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".pdf":"application/pdf",".md":"text/markdown; charset=utf-8",".json":"application/json",".webp":"image/webp"};
export function studyAsset(context:APIContext,family:string){
  if(!context.locals.user)return new Response(null,{status:401});
  const base=path.resolve('private/study-assets',family),file=path.resolve(base,context.params.asset||'');
  const relative=path.relative(base,file);if(!relative||relative.startsWith('..')||path.isAbsolute(relative))return new Response(null,{status:404});
  if(!fs.existsSync(file)||!fs.statSync(file).isFile())return new Response(null,{status:404});
  const real=fs.realpathSync(file),realRelative=path.relative(fs.realpathSync(base),real);if(realRelative.startsWith('..')||path.isAbsolute(realRelative))return new Response(null,{status:404});
  return new Response(context.request.method==='HEAD'?null:new Uint8Array(fs.readFileSync(real)),{headers:{'Content-Type':types[path.extname(file).toLowerCase()]||'application/octet-stream','Content-Length':String(fs.statSync(file).size),'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
}
