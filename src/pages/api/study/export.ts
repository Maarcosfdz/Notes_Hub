import type {APIRoute}from 'astro';
import {getDatabase}from '../../../server/database';
import {state}from '../../../server/study-service';
import {subjects}from '../../../config/library';
export const GET:APIRoute=({locals})=>{
 if(!locals.user)return new Response(null,{status:401});
 const db=getDatabase(),user=locals.user.id;
 const data=Object.fromEntries(Object.keys(subjects).map(s=>[s,state(db,user,s)]));
 const archives=db.prepare('SELECT digest,payload,summary,created_at FROM study_imports WHERE user_id=? ORDER BY rowid').all(user);
 const historicalAttempts=db.prepare('SELECT subject,payload FROM study_attempts WHERE user_id=? ORDER BY rowid').all(user).map(r=>({subject:r.subject,attempt:JSON.parse(String(r.payload))}));
 return Response.json({format:'notes-hub-account',version:3,exportedAt:new Date().toISOString(),subjects:data,archives,historicalAttempts},{headers:{'Content-Disposition':'attachment; filename="progreso-cuenta.json"','Cache-Control':'no-store'}});
};
