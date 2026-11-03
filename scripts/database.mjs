import {getDatabase,backupDatabase,restoreDatabase,checkDatabase} from '../src/server/database.ts';
const [command,arg,target]=process.argv.slice(2);
if(command==='restore'){restoreDatabase(arg,target);console.log('Restore verified in new destination.');}
else{const db=getDatabase();try{if(command==='backup')await backupDatabase(db,arg);else if(command!=='migrate'&&command!=='check')throw Error('Use migrate, check, backup <absolute destination> or restore <source> <new destination>');checkDatabase(db);console.log('Database operation verified.');}finally{db.close();}}
