import { defineMiddleware } from "astro:middleware";
import { getAuth, isDisabled } from "./server/auth";
const publicAuth=new Set(["/api/auth/sign-in/email","/api/auth/sign-out","/api/auth/get-session"]);
export const onRequest=defineMiddleware(async(context,next)=>{
  const path=context.url.pathname.replace(/\/$/,"")||"/";
  const session=await getAuth().api.getSession({headers:context.request.headers});
  const valid=session&&!isDisabled(session.user.id);
  context.locals.user=valid?session.user:null;context.locals.session=valid?session.session:null;
  if(!valid&&path!=="/login"&&!publicAuth.has(path)&&!path.startsWith("/_astro/")){
    if(path.startsWith("/api/")||path.startsWith("/docs-aws/")||path.startsWith("/study-"))return new Response(JSON.stringify({error:"Sesión requerida"}),{status:401,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
    return context.redirect("/login?next="+encodeURIComponent(context.url.pathname+context.url.search));
  }
  const response=await next();response.headers.set("Cache-Control","private, no-store");response.headers.set("X-Content-Type-Options","nosniff");response.headers.set("Referrer-Policy","same-origin");return response;
});
