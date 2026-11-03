import type {APIRoute} from 'astro';
import bank from '../../../content/modules/devops/aws/questions/bank.json';
import exam1 from '../../../content/modules/devops/aws/questions/simulacro_1_65.json';
import exam2 from '../../../content/modules/devops/aws/questions/simulacro_2_65.json';
import exam3 from '../../../content/modules/devops/aws/questions/simulacro_3_65.json';
export const GET:APIRoute=()=>Response.json({bank,exams:{'1':exam1.map(q=>({id:q.id})),'2':exam2.map(q=>({id:q.id})),'3':exam3.map(q=>({id:q.id}))}},{headers:{'Cache-Control':'private, no-store'}});
