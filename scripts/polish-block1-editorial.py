from pathlib import Path
import re,json,shutil,hashlib
root=Path('aws-clf-c02/bloque-1');archive=Path('aws-clf-c02/archivo/antes-tercera-pasada');archive.mkdir(parents=True,exist_ok=True)
admin={'T1':{1,2,3,17,24},'T2':{1,2,3,11},'CA':{1,2,3,4,16,21,26,31,36,43,44,52,53,61,62,63,64,68}}
moved=[];before={};after={};preserved={}
for p in sorted(root.glob('0[1-4]_*.md')):
 s=p.read_text(encoding='utf-8-sig');shutil.copy2(p,archive/p.name);before[p.name]=len(s.split());original=s
 matches=list(re.finditer(r'<a id="((t1|t2|ca)-p(\d+))"></a>',s))
 # A source section stops before the next page anchor or top-level thematic section.
 removals=[]
 for i,m in enumerate(matches):
  tag=m[2].upper();n=int(m[3]);end=matches[i+1].start() if i+1<len(matches) else len(s)
  heading=re.search(r'^## ',s[m.end():end],re.M)
  if heading:end=m.end()+heading.start()
  if n in admin.get(tag,set()):
   block=s[m.start():end].strip();moved.append((tag,n,m[1],block,p.name));removals.append((m.start(),end))
 for start,end in reversed(removals):s=s[:start]+s[end:]
 s=re.sub(r'^## Registro de páginas introductorias y separadoras\s*','',s,flags=re.M)
 s=s.replace('## 1.1. Caso práctico común: AnyCompany\n\n','')
 if p.name.startswith('03_'):
  start=s.index('## Pilar 6. Sostenibilidad: definición, principios y prácticas')
  end=s.index('### Ampliación oficial: Fiabilidad',start)
  pillar=s[start:end].replace('\n#### ','\n### ');s=s[:start]+s[end:]
  start=s.index('## Pilar 6. Sostenibilidad: aplicación al caso')
  end=re.search(r'^## ',s[start+4:],re.M)
  stop=start+4+end.start() if end else len(s)
  application=s[start:stop].replace('## Pilar 6. Sostenibilidad: aplicación al caso','### Aplicación de sostenibilidad a AnyCompany')
  application=re.sub(r'El desarrollo del sexto pilar[\s\S]*?esa explicación\.\s*','',application)
  s=s[:start]+s[stop:]
  pos=s.index('## Revisión con AWS Well-Architected Tool');s=s[:pos]+pillar+'\n'+application+'\n'+s[pos:]
 # Proof: every paragraph outside the moved administrative blocks remains, except headings and one obsolete pointer.
 original_noadmin=original
 for tag,n,anchor,block,file in moved:
  if file==p.name:original_noadmin=original_noadmin.replace(block,'')
 meaningful=[b.strip() for b in re.split(r'\n\s*\n',original_noadmin) if b.strip() and not b.lstrip().startswith(('#','<a ')) and not b.startswith('El desarrollo del sexto pilar')]
 missing=[b for b in meaningful if b not in s]
 assert not missing,(p.name,missing[:2])
 preserved[p.name]=len(meaningful);after[p.name]=len(s.split());p.write_text(s,encoding='utf8')

matrix=(root/'06_control_cobertura.md').read_text(encoding='utf8')
matrix=matrix.replace('segunda iteración','tercera pasada editorial')
matrix+='\n## Registro administrativo de las fuentes\n\nEstas páginas se conservan aquí para mantener la trazabilidad, sin interrumpir la lectura de los capítulos. Sus índices, objetivos y resúmenes se mantienen íntegros.\n'
for tag,n,anchor,block,file in moved:
 matrix=matrix.replace(f'({file}#{anchor})',f'(06_control_cobertura.md#{anchor})')
 matrix+=f'\n### {tag}, página {n}: registro de la fuente\n\n'+block+'\n'
for name in ['06_control_cobertura.md','06_matriz_cobertura.md']:(root/name).write_text(matrix,encoding='utf8')
index=(root/'00_indice.md').read_text(encoding='utf8').split('\n## Contenido desarrollado de los capítulos')[0]
index+='\n## Contenido desarrollado de los capítulos\n'
for p in sorted(root.glob('0[1-4]_*.md')):
 index+='\n### '+p.name+'\n\n'
 for title in re.findall(r'^## (.+)$',p.read_text(encoding='utf8'),re.M):index+='- '+title+'\n'
(root/'00_indice.md').write_text(index,encoding='utf8')
Path('tmp/pdfs/third-editorial-audit.json').write_text(json.dumps({'administrative_pages_moved':len(moved),'words_before':before,'words_after':after,'substantive_paragraphs_preserved':preserved,'moved':[[x[0],x[1]] for x in moved]},ensure_ascii=False,indent=2),encoding='utf8')
print('Moved',len(moved),'administrative source sections; substantive paragraphs preserved:',preserved)
