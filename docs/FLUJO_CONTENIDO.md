# Fuentes editoriales y publicación reproducible

Implementado en T02A. Referencias: [Arquitectura](ARQUITECTURA.md), [Requisitos](REQUISITOS.md), [limpieza](LIMPIEZA_PENDIENTE.md) y [manifest de entradas](../scripts/content-manifest.json).

## Fuente por materia

AWS: los 18 capítulos de las ediciones actuales de `aws-clf-c02/bloque-1/` a `bloque-4/` son la fuente editorial. `aws-clf-c02/archivo/` conserva historia y no se sincroniza como edición actual. El manifiesto enumera cada fuente y destino, ID estable, materia y excepciones de metadatos. Los bancos de preguntas y referencias JSON activos se mantienen en `src/content/modules/devops/aws/{questions,reference}/`; este flujo **no los reinstala ni importa glosarios**.

Las otras materias del catálogo todavía no tienen capítulos activos. Para incorporarlos se añaden entradas explícitas al manifiesto y reglas de publicación adecuadas; el sincronizador no depende de que una materia se llame AWS. La identidad de capítulo es materia + ID. No cambiar IDs existentes para hacer coincidir nombres editoriales.

Cinco PDF tienen rutas de procedencia históricas `proceso/...` ausentes del árbol actual. `preservedInputs` declara sus copias conservadas en `private/study-assets/docs-aws/proceso/` como entradas recuperables. T03B movió los recursos públicos a esta raíz privada conservando hashes y URL: el servidor autentica cada descarga. No se borra ni sustituye esa última copia. Si reaparece un original, comparar su hash y revisar antes de sustituirlo.

## Procedimiento

1. Conservar el respaldo de T01 o crear otro punto de recuperación equivalente antes de una integración importante. Revisar `git status`, incluidos archivos sin seguimiento.
2. Editar exclusivamente la fuente editorial. No mantener manualmente un segundo cuerpo en `src/content/modules/`.
3. Ejecutar `pnpm.cmd content:plan`. Inspeccionar destinos y diferencias: no se aplican cambios con este comando.
4. Ejecutar `pnpm.cmd content:sync`. Primero se construye todo el plan y se comprueba que los destinos no hayan cambiado durante su preparación. Copia capítulos y recursos alcanzables, sin borrar archivos.
5. Ejecutar `pnpm.cmd content:check` (código 0 si no hay divergencias), `pnpm.cmd verify:content`, `pnpm.cmd build` y `pnpm.cmd verify:publication`.
6. Revisar el diff y las páginas afectadas en preview. Comprobar también figuras y documentos enlazados. Un enlace externo inventariado no se considera comprobado en red.

Para guardar evidencia: `node scripts/content-pipeline.mjs plan --report <ruta.json>` y `node scripts/verify-publication.mjs --report <ruta.json>`, con directorio de destino ya creado. Los informes se guardan fuera de `public/`.

El sincronizador acepta el frontmatter sencillo utilizado actualmente: claves escalares de texto, con o sin comillas JSON o simples. Rechaza líneas complejas no admitidas; ampliar el parser explícitamente si hacen falta bloques YAML, no interpretar silenciosamente otro formato. El cargador Astro sigue admitiendo MD y MDX; el flujo de copia soporta textos y enlaces estáticos de ambos, no evalúa expresiones MDX dinámicas.

## Transformaciones explícitas

- UTF-8 sin BOM y saltos de línea LF en capítulos generados; no modificar manualmente saltos para aparentar diferencias editoriales.
- Una sola cabecera: se consume el frontmatter de origen, se conservan sus campos y se aplican las excepciones declaradas. Si el original no tiene frontmatter, los campos de aplicación están en el manifiesto y el título se obtiene del primer encabezado.
- En el Bloque III, los IDs públicos `aws-block-3-*` se conservan aunque el original use `technology-block-3-*`. Se corrigió la cabecera doble de la integración anterior y el título «---»; el texto docente permanece intacto.
- Un enlace a otro capítulo registrado se convierte en su ruta Astro y conserva su fragmento. Las figuras de I/II mantienen `study-figures`; documentos previos I/II mantienen `study-docs`; III/IV y sus fuentes usan `docs-aws` según prefijos del manifiesto.
- Las descargas se copian sin reescribir su cuerpo. Sus enlaces relativos se recorren recursivamente y se copian sus dependencias a posiciones equivalentes, incluidos originales de imágenes enlazados indirectamente. Cada salida tiene origen y SHA-256 en el informe.

No hay cambios pedagógicos automáticos ni deduplicación semántica. La prueba de conservación compara los cuerpos antes/después admitiendo solo URLs, saltos y retirada de la cabecera duplicada, y se ensaya una edición/figura sintética en una copia temporal independiente. Repetir el sincronizador sobre el mismo origen no escribe cambios.

## Publicación y conservación

Todos los archivos actuales de `public/study-*` y `public/docs-aws/` son material de estudio: **objetivo de acceso con sesión**, todavía no implementado. T02A no mueve archivos a rutas privadas ni cambia el control de acceso; T03B debe proteger también las descargas y todos los recursos transitivos. Un recurso es público hoy aunque solo aparezca enlazado desde una fuente.

El verificador recorre todas las páginas generadas y recursos textuales publicados, comprueba destinos y anclas y registra consumidores. Las anclas de descargas Markdown se comprueban como contenido, pero la descarga no se convierte en página renderizada ni se promete navegación por fragmento en el visor de texto del navegador. Los candidatos sin consumidor se conservan hasta revisión expresa; no se borran automáticamente.

El inspector opcional `python scripts/inspect-study-assets.py --report <ruta.json>` comprueba integridad de archivos de imagen y anotaciones PDF con Pillow/PyMuPDF existentes. No es dependencia del sincronizador Node ni instala paquetes. Los PDF no se editan. Si faltan herramientas, el informe debe expresar esa limitación; no declarar inspección completa.

Las publicaciones históricas pueden coexistir con las copias activas cuando tienen URL o finalidad propia. El flujo mantenido está en `scripts/`; los antiguos integradores de `tmp/` y utilidades editoriales no se ejecutan como parte de esta sincronización. Clasificación: [scripts](../scripts/README.md).
