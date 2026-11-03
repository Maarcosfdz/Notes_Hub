from pathlib import Path
import sys,shutil,json
sys.path.insert(0,str(Path('.pdf-tools').resolve()))
import pymupdf
from PIL import Image
root=Path('aws-clf-c02/bloque-1');fig=root/'figuras';originals=fig/'originales';originals.mkdir(exist_ok=True)
# Coordinates identify the slide frame in the original PDF page, not the explanatory notes below it.
regions={12:(.175,.165,.85,.44),13:(.174,.18,.85,.438),14:(.18,.17,.85,.44),47:(.157,.09,.852,.58),50:(.15,.09,.85,.59)}
doc=pymupdf.open('proceso/Capturas.pdf');manifest=[]
for n,coords in regions.items():
 name=f'ca_p{n:02}.png';page=doc[n-1];rect=page.rect
 src=fig/name;backup=originals/name
 if not backup.exists():shutil.copy2(src,backup)
 clip=pymupdf.Rect(coords[0]*rect.width,coords[1]*rect.height,coords[2]*rect.width,coords[3]*rect.height)
 page.get_pixmap(matrix=pymupdf.Matrix(3,3),clip=clip).save(src)
 with Image.open(src) as im:size=list(im.size)
 manifest.append({'file':name,'source':f'CA p.{n}','normalized_clip':coords,'pixels':size,'full_page':'originales/'+name})
for p in root.glob('0[1-4]_*.md'):
 s=p.read_text(encoding='utf8')
 for n in regions:
  name=f'ca_p{n:02}.png'
  import re
  pattern=r'(!\[[^\]]*\]\(figuras/'+name+r'\))\s*\*Página original conservada con sus notas para contextualizar el diagrama; material docente histórico\.\*'
  s=re.sub(pattern,r'\1\n\n*Diagrama extraído del PDF original. [Consultar la página completa y sus notas](figuras/originales/'+name+r').*',s)
 p.write_text(s,encoding='utf8')
(fig/'recortes.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf8')
p=fig/'README.md';s=p.read_text(encoding='utf8').split('\n## Recortes de la tercera pasada')[0];s+='\n## Recortes de la tercera pasada\n\nSe extrajeron a mayor resolución los diagramas de AnyCompany (CA pp.12–14), el ciclo de fiabilidad (CA p.47) y la tabla de disponibilidad (CA p.50). Las coordenadas y dimensiones están en `recortes.json`. Los otros 47 archivos mantienen las páginas completas porque incluyen notas, condiciones de ejercicios o contexto útil.\n\n'
for n in regions:s+=f'- CA p.{n}: [diagrama](ca_p{n:02}.png) · [página completa con notas](originales/ca_p{n:02}.png).\n'
p.write_text(s,encoding='utf8')
print('Extracted',len(manifest),'diagrams; originals retained.')
