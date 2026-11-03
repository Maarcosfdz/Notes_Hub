import {DatabaseSync}from 'node:sqlite';
let db;
try{
  db=new DatabaseSync(process.env.NOTES_DB_PATH,{readOnly:true});
  db.prepare('SELECT digest FROM study_imports LIMIT 0').all();
  db.prepare('SELECT id FROM "user" LIMIT 0').all();
  db.close();db=undefined;
  const response=await fetch(`http://127.0.0.1:${process.env.PORT||4321}/login`,{redirect:'manual',signal:AbortSignal.timeout(3000)});
  await response.body?.cancel();if(response.status!==200)throw Error();
  process.exit(0);
}catch{db?.close();console.error('Local HTTP/SQLite healthcheck failed.');process.exit(1);}
