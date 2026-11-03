import type { APIRoute } from "astro";
import {getAuth,isDisabled} from "../../../server/auth";
import {getDatabase} from "../../../server/database";
import {boundedText,errorResponse,HttpError} from "../../../server/http";
export const ALL:APIRoute=async context=>{
  const path=context.url.pathname.replace(/\/$/,"");
  if(!["/api/auth/sign-in/email","/api/auth/sign-out","/api/auth/get-session"].includes(path))return new Response(null,{status:404});
  if(path.endsWith('/get-session')&&!context.locals.user)return Response.json(null,{headers:{'Cache-Control':'no-store'}});
  let request=context.request;
  try{
  if(request.method==='POST'){
    if(!request.headers.get('content-type')?.toLowerCase().startsWith('application/json'))throw new HttpError(415,'Se requiere JSON.');
    const text=await boundedText(request,16384);request=new Request(request,{body:text});
  }
  if(path.endsWith('/sign-in/email')&&context.request.method==='POST'){
    const body=await request.clone().json().catch(()=>null);
    if(body?.email){const user=getDatabase().prepare('SELECT id FROM "user" WHERE lower(email)=lower(?)').get(String(body.email).trim());if(user&&isDisabled(String(user.id)))return Response.json({message:"Credenciales no válidas"},{status:401});}
  }
  const headers=new Headers(request.headers);headers.set('x-notes-client-ip',context.clientAddress);
  return getAuth().handler(new Request(request,{headers}));
  }catch(error){return errorResponse(error);}
};
