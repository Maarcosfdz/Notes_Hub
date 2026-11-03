// Enhances generated Markdown without changing editorial files or table cells.
export function enhanceContent(){
  for(const table of document.querySelectorAll<HTMLTableElement>('main table')){
    if(!table.parentElement?.classList.contains('table-wrap')){const wrapper=document.createElement('div');wrapper.className='table-wrap';table.before(wrapper);wrapper.append(table);}
    const wrapper=table.parentElement!;wrapper.setAttribute('role','region');
    wrapper.setAttribute('aria-label',table.caption?.textContent?.trim()||'Tabla de estudio; desplaza horizontalmente para consultar todas las columnas');
    for(const th of table.querySelectorAll('thead th'))if(!th.hasAttribute('scope'))th.setAttribute('scope','col');
  }
  const containers=[...document.querySelectorAll<HTMLElement>('.table-wrap, main pre, .study-diagram')];
  const update=()=>{for(const el of containers){const scrolls=el.scrollWidth>el.clientWidth+1;el.classList.toggle('is-scrollable',scrolls);if(scrolls){el.tabIndex=0;el.setAttribute('role','region');if(!el.hasAttribute('aria-label'))el.setAttribute('aria-label',el.tagName==='PRE'?'Código; desplaza horizontalmente para leerlo completo':'Diagrama; desplaza para consultar el contenido');}else el.removeAttribute('tabindex');}};
  const observer=new ResizeObserver(update);containers.forEach(el=>observer.observe(el));update();
  for(const image of document.querySelectorAll<HTMLImageElement>('.article img')){if(!image.closest('a')){const link=document.createElement('a');link.href=image.currentSrc||image.src;link.setAttribute('aria-label',`Ampliar figura: ${image.alt||'imagen del apunte'}`);image.before(link);link.append(image);}}
}
