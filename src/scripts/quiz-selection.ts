import type {Question}from './study';
export function questionAt(bank:Pick<Question[],'find'>,series:{id:number}[],index:number){
 if(!Number.isInteger(index)||index<0||index>=series.length)throw Error('Posición fuera de la serie.');
 const id=series[index].id,question=bank.find(q=>q.id===id);if(!question)throw Error('La pregunta de la serie no está disponible. Recarga para comprobar su versión.');return question;
}
export function filterQuestions(bank:Question[],level:string,topic:string,failedOnly:boolean,failed:number[]){return bank.filter(q=>(level==='Todos'||q.level===level)&&(topic==='Todos'||q.topic===topic)&&(!failedOnly||failed.includes(q.id)));}
export function validSelectionCount(q:Question,selected:number[]){return selected.length===q.correct.length;}
