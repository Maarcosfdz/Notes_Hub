# T02A — Fuentes y recursos reproducibles

Completado el 2026-11-03 tras autorización expresa del usuario para continuar después de T01B. No se ha iniciado T02B. [Ticket](tickets/T02A_fuentes_y_recursos.md), [procedimiento mantenido](../../FLUJO_CONTENIDO.md), [clasificación de herramientas](../../../scripts/README.md).

## Implementación

La fuente editorial de los 18 capítulos es `aws-clf-c02/bloque-{1,2,3,4}/`; las iteraciones de `archivo/` son históricas. [Manifiesto de entrada](../../../scripts/content-manifest.json) con origen/destino, IDs actuales, excepciones de metadatos, prefijos públicos y cinco PDF preservados cuyo origen histórico ya no está disponible. Preguntas y referencias JSON permanecen en sus archivos activos, fuera de este sincronizador. No se ha vuelto a ejecutar la integración 370→480.

`content-pipeline.mjs` planifica todos los capítulos y recursos antes de escribir, limita entradas a fuentes declaradas y salidas a los destinos gestionados, recorre dependencias con protección de ciclos, comprueba conflictos y nunca borra archivos. Soporta enlaces Markdown en línea y atributos HTML estáticos de los formatos actuales; las referencias resultantes se validan además sobre el build real. Si hay que incorporar otros formatos, ampliar explícitamente el parser y sus pruebas.

Se incorporaron comandos `content:plan`, `content:sync`, `content:check` y `verify:publication` a package.json, sin cambiar dependencias. Los scripts nuevos no usan `tmp/` ni reinstalan contenido de preguntas. Los scripts antiguos se han clasificado documentalmente, conservándolos donde estaban para no romper referencias.

## Cambios concretos de contenido y publicaciones

- Los 18 capítulos se generan desde sus originales, con saltos LF, IDs conservados y rutas adaptadas. Prueba de conservación: el texto docente antes/después es idéntico al normalizar saltos, retirar la cabecera duplicada y sustituir únicamente destinos de enlaces.
- Los siete capítulos del Bloque III tenían una cabecera editorial dentro del cuerpo y un título externo «---». Se conserva una sola cabecera y se toma el título editorial correcto. No se cambia `aws-block-3-*` por `technology-block-3-*`.
- Enlaces III/IV a capítulos I/II pasan a sus rutas renderizadas cuando existe capítulo registrado. Se conservan fragmentos; las copias descargables previas permanecen accesibles.
- Se añadieron 57 imágenes a `public/study-docs/bloque-1/figuras/` y su subcarpeta de originales: faltaban en esa copia transitiva, aunque existían en otras ubicaciones. Son copias binarias idénticas de los originales, no figuras nuevas ni regeneradas. Esto completa dependencias de documentos descargables.
- Manifiesto de salida: **758 archivos gestionados** (18 capítulos y 740 recursos), **4048 relaciones** directas/transitivas. [Plan anterior](evidencias-T02A/plan-before.json) y [manifiesto posterior](evidencias-T02A/manifest.json) con hashes y entradas preservadas. Tras aplicar, `content:check` devuelve cero diferencias.

Cuatro publicaciones previas quedan fuera de la generación automática: `study-docs/bloque-1/08_registro_enlaces.md`, `study-docs/bloque-2/00_indice.md`, `study-docs/bloque-2/10_informe_validacion.md` y `study-docs/bloque-2/figuras/README.md`. Se conservan como publicaciones históricas; los tres últimos tienen consumidores detectados. El registro de enlaces del Bloque I es el único candidato sin consumidor en el build. Su papel es conservar referencias de una integración anterior: **no se elimina** ni se presenta una ausencia de referencias como permiso de borrado.

Todos los archivos actuales de public pertenecen a estudio y tienen como política objetivo exigir sesión. Hoy siguen siendo públicos. No se ha intentado protegerlos ocultando menús ni trasladándolos antes de tener rutas seguras. Los candidatos, los documentos preservados y los recursos transitivos forman parte del inventario que deberá usar T03B.

## Pruebas

| Comprobación | Resultado |
|---|---|
| Conservación del cuerpo y metadatos/IDs | PASS para 18 capítulos |
| Edición y figura sintéticas en copia independiente | PASS; llegan al destino esperado sin alterar originales |
| Segunda sincronización en copia y en proyecto | PASS; cero cambios |
| Entrada ausente / identidad duplicada | Fallan antes de escribir, como se espera |
| Contenido activo | 18 capítulos, 480 preguntas, 247 conceptos y 16 comparativas; tres series intactas |
| Build y tipos | PASS, 35 páginas; comprobación final sin errores/avisos/hints |
| Publicación completa | 4918 referencias locales y 1993 fragmentos, cero errores |
| Imágenes y PDF | 678 imágenes y cinco PDF inspeccionados, cero errores |
| Navegador sobre build | Ocho escenarios PASS, cero errores JS en el recorrido |
| Conservación respecto al respaldo T01 | 501 archivos protegidos sin diferencias; hashes históricos T01 sin cambios |

Los tests están en `docs/reformultation/checks/content-pipeline.test.mjs`; ejecutan el código real del sincronizador. La copia sintética queda en TEMP como `notes-hub-T02A-editorial-*`, separada del proyecto. La figura SVG y el párrafo sintético nunca se incorporaron a contenido real.

Evidencias: [tests](evidencias-T02A/pipeline-tests.log), [idempotencia](evidencias-T02A/idempotence.log), [contenido](evidencias-T02A/content.log), [build](evidencias-T02A/build.log), [rutas/anclas/consumidores](evidencias-T02A/publication.json), [binarios](evidencias-T02A/binary-assets.json), [navegador](evidencias-T02A/browser.json) y [conservación](evidencias-T02A/preservation.json).

El navegador repite navegación, las 35 rutas, 227 destinos directos de los capítulos, conceptos/búsqueda, favoritos/lectura tras recarga, arranque de preguntas/estadísticas, temas y salto por teclado. Son 227 destinos directos después de sustituir descargas por enlaces a capítulos, frente a 232 antes; la verificación completa recorre además las dependencias transitivas. No se responde otra vez un simulacro: B07 sigue pendiente y su fallo ya está registrado en T01B.

El inspector binario usó Pillow ya disponible y PyMuPDF del paquete local ignorado `.pdf-tools`, con autorización de ejecución de Python fuera de la restricción que impedía lanzarlo. No se instalaron paquetes ni se modificaron PDF. La herramienta emitió un aviso de deprecación del alias fitz; terminó con código 0. Solo se inspeccionaron anotaciones y páginas de destino, no se certificó la calidad pedagógica o visual de cada página PDF.

## Límites y reversión

193 enlaces externos de los documentos se registran sin verificarlos por HTTP; también se enumeran los externos extraídos de PDF sin consultarlos. Las anclas de descargas Markdown se comprueban como contenido, pero esas descargas no son páginas renderizadas de Astro. Los candidatos a archivo no se han eliminado ni movido. Las limitaciones de parser están documentadas en el procedimiento; las expresiones MDX dinámicas no se ejecutan para copiar dependencias.

El respaldo T01, el cierre y la evidencia histórica permanecen intactos. Los 501 archivos protegidos incluyen todos los originales editoriales presentes, preguntas, referencias, persistencia y estilos; cero diferencias. Para revertir una integración, usar una restauración aislada del respaldo y recuperar exclusivamente los destinos indicados por el plan previo. Mantener las correcciones de T01B; no superponer un commit antiguo ni usar git clean/reset. Las nuevas copias públicas pueden conservarse mientras se revisa su uso: el sincronizador no necesita borrarlas para restaurar capítulos.

Estado pendiente ajeno a T02A: B02–B04 de compatibilidad de progreso, B05 de tabla móvil, B06 de mínimo Node y B07 de simulacros. B01 permanece resuelta. No hay SQLite, autenticación, cambios de diseño, nuevas preguntas ni importación de glosarios.
