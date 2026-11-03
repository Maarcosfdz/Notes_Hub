"""Check local Markdown links, image integrity, glossary aliases and the source-page matrix."""
from pathlib import Path
from urllib.parse import unquote
from PIL import Image
import re,json,hashlib,shutil,unicodedata
root=Path('aws-clf-c02/bloque-1');public=Path('public/study-figures/bloque-1')
for im in (root/'figuras').rglob('*.png'):
 target=public/im.relative_to(root/'figuras');target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(im,target)
for p in root.glob('0[1-4]_*.md'):
 s=p.read_text(encoding='utf-8-sig');id=re.search(r'^id: (.+)$',s,re.M)[1]
 s=s.replace('](figuras/','](/study-figures/bloque-1/')
 Path('src/content/modules/devops/aws/theory',id+'.md').write_text(s,encoding='utf8')
def slug(s):
 s=unicodedata.normalize('NFKD',s.lower());s=''.join(c for c in s if not unicodedata.combining(c));return re.sub(r'[^a-z0-9 -]','',s).replace(' ','-')
errors=[];checked=0;external=set();encoding=[]
for p in root.rglob('*.md'):
 s=p.read_bytes().decode('utf8')
 if '\ufffd' in s or re.search(r'[A-Za-zÁÉÍÓÚáéíóúñ]\?[A-Za-zÁÉÍÓÚáéíóúñ]',s):encoding.append(str(p))
 ids=re.findall(r'<a id="([^"]+)"',s)
 if len(ids)!=len(set(ids)):errors.append('duplicate explicit anchor: '+str(p))
 for label,target in re.findall(r'\[([^\]]*)\]\(([^)]+)\)',s):
  if target.startswith(('https://','http://')):external.add(target);continue
  file,_,anchor=unquote(target).partition('#');q=p.parent/file if file else p
  checked+=1
  if not q.exists():errors.append(f'{p.name}: missing {target}');continue
  if anchor:
   t=q.read_text(encoding='utf-8-sig');anchors=set(re.findall(r'<a id="([^"]+)"',t))|{slug(h) for h in re.findall(r'^#{1,6} (.+)$',t,re.M)}
   if anchor not in anchors:errors.append(f'{p.name}: unknown anchor {target}')
 images=re.findall(r'!\[[^\]]*\]\(([^)]+)\)',s)
 for name in images:
  try:
   with Image.open(p.parent/name) as im:im.verify()
  except Exception as e:errors.append(f'image {name}: {e}')
matrix=(root/'06_control_cobertura.md').read_text(encoding='utf8')
rows=re.findall(r'^\| (T1|T2|CA) \| (\d+) \|',matrix,re.M)
assert len(rows)==118 and len(set(rows))==118
assert {s:sum(tag==s for tag,n in rows) for s in ['T1','T2','CA']}=={'T1':30,'T2':20,'CA':68}
terms=json.loads(Path('src/content/modules/devops/aws/reference/glossary.json').read_text(encoding='utf8'))
review=json.loads((root/'09_revision_glosario.json').read_text(encoding='utf8'))
assert len(review)==139 and len(terms)==137
assert all(x['canonical'] in {t[0] for t in terms} for x in review)
alias_owner={}
for term in terms:
 name,label,group,note,definition,aliases=term
 assert len(re.split(r'(?<=[.!?])\s+',definition)) in [2,3,4],name
 assert not re.search(r'(?:^|[.!?]\s+)\d+\.\s*$',definition),name
 assert ' - ' not in definition and 'Su uso se estudia' not in definition,name
 for alias in aliases:
  k=alias.casefold()
  assert k not in alias_owner or alias_owner[k]==name,(alias,name)
  alias_owner[k]=name
 assert Path('src/content/modules/devops/aws/theory',note+'.md').exists(),note
assert not errors,errors
assert not encoding,encoding
text=(root/'03_infraestructura_y_arquitectura.md').read_text(encoding='utf8')
pillars=re.findall(r'^## Pilar (\d)\.',text,re.M)
assert pillars==list('123456'),pillars
assert not re.search(r'^### (Portada|Inicio:|Module overview|Module objectives|Thank you)',text,re.M)
primary=list((root/'figuras').glob('*.png'));assert len(primary)==52
assert all(hashlib.sha256(p.read_bytes()).digest()==hashlib.sha256((public/p.name).read_bytes()).digest() for p in primary)
audit={'glossary_original_entries_reviewed':139,'canonical_entries':len(terms),'aliases':len(alias_owner),'page_links':len(rows),'administrative_pages_in_matrix':27,'primary_figures':52,'cropped_figures':5,'full_page_alternatives':5,'local_links_checked':checked,'local_link_errors':errors,'encoding_errors':encoding,'pillars_in_order':pillars,'external_urls':sorted(external),'scope':'Local checks; HTTP and browser checks recorded separately in report.'}
(root/'10_control_calidad.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({k:v for k,v in audit.items() if k not in ['external_urls','scope']},ensure_ascii=False,indent=2))
