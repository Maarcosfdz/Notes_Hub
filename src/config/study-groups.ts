export function studyBlock(group:string){const roman=group.match(/\bBloque (IV|III|II|I)\b/)?.[1];return roman?({I:'1',II:'2',III:'3',IV:'4'} as Record<string,string>)[roman]:undefined;}
