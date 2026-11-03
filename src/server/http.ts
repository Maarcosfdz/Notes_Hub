export class HttpError extends Error { status:number; constructor(status:number,message:string){super(message);this.status=status;} }
export async function boundedText(request:Request,limit:number){
  if(Number(request.headers.get('content-length')||0)>limit)throw new HttpError(413,'Solicitud demasiado grande.');
  if(!request.body)return '';
  const reader=request.body.getReader(),chunks:Uint8Array[]=[];let size=0;
  while(true){const{done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>limit){await reader.cancel();throw new HttpError(413,'Solicitud demasiado grande.');}chunks.push(value);}
  const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}return new TextDecoder('utf-8',{fatal:true}).decode(bytes);
}
export async function jsonBody(request:Request,limit=64*1024){
  if(!request.headers.get('content-type')?.toLowerCase().startsWith('application/json'))throw new HttpError(415,'Se requiere JSON.');
  try{return JSON.parse(await boundedText(request,limit));}catch(error){if(error instanceof HttpError)throw error;throw new HttpError(400,'JSON inválido.');}
}
export function errorResponse(error:unknown){return Response.json({error:error instanceof HttpError?error.message:'No se pudo completar la operación.'},{status:error instanceof HttpError?error.status:500,headers:{'Cache-Control':'no-store'}});}
