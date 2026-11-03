import {migrateAuth} from '../src/server/auth.ts';
await migrateAuth();console.log('Authentication schema verified (development database).');
