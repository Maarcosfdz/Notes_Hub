# T02A — Fuentes editoriales, recursos y publicación reproducible

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Alta
- **Dependencias:** T01 cerrado; T00 decisiones de publicación
- **Referencias:** L01, L02, L07 parcial; R03, R04, R15, R17

## Objetivo

Hacer reproducible la incorporación de capítulos y recursos, sin perder figuras, enlaces, tablas ni procedencia.

## Alcance y archivos a inspeccionar

Inspeccionar `aws-clf-c02/`, `src/content/modules/`, `public/docs-aws/`, `public/study-docs/`, `tmp/`, herramientas/scripts y metadatos reales de Content Collections. Detectar referencias Markdown, HTML, CSS, links desde PDFs/MD y enlaces indirectos antes de deduplicar.

## Trabajo solicitado

1. Inventariar origen editorial, versión adaptada, publicada y respaldo; no confundir copias justificadas con duplicados removibles.
2. Elegir fuente editorial por materia y generar manifiesto de archivos y dependencias (incluidas imágenes referenciadas transitivamente y documentos descargables).
3. Proponer o implementar comando de sincronización **idempotente** que copie y adapte metadatos/rutas con transformaciones explícitas y verificables; jamás reescribir manualmente el cuerpo de capítulos.
4. Diferenciar assets generales y documentos de estudio que deben quedar inaccesibles sin sesión en el despliegue final; no resolver la protección solo ocultando enlaces.
5. Crear verificación de rutas, anclas, imágenes y citas publicadas, con reporte de archivos huérfanos candidatos a revisión. No borrar candidatos en este ticket sin autorización específica.
6. Clasificar herramientas de integración: mantener solo comandos reproducibles, archivar lo histórico preservando evidencia.

## Criterios de aceptación

- Edición de prueba en una copia editorial produce el mismo texto en activo salvo transformaciones registradas.
- Repetir sincronización no genera diferencias inesperadas.
- Manifiesto con origen y dependencias de figuras y documentos completos.
- Sin referencias rotas y sin reducción de los 18 capítulos; conservación de fuentes documentada.
- Ninguna limpieza destructiva basada solo en búsquedas simples de rutas.

## Validación y evidencias

Comparar hashes/textos y cambios controlados; ejecutar verificación de contenido, build y chequeo automático de rutas y recursos; documentar qué enlaces externos no se han verificado.

## Fuera de alcance

No introducir usuarios, DB, cambiar acceso real o reescribir contenido académico o las 480 preguntas. No eliminar archivos públicos antes de implementar sus rutas seguras.

## Riesgos / reversión

Riesgo: fuentes o JPG cargados transitivamente podrían dejar de abrir. Preparar manifest de consumidores, comparación antes/después y reversión recuperando archivos respaldados. Hasta T03B la publicación privada sigue siendo una limitación conocida.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; no se aplicaron borrados ni control de acceso.
- **Fecha / commit:** 2026-11-03; árbol de trabajo sobre HEAD `2677e842b7e3c463164cef42ab00899de316b22f`, sin nuevo commit. Autorización expresa posterior al cierre de T01B.
- **Archivos modificados:** 18 capítulos generados (metadatos, rutas y saltos LF), 57 figuras transitivas añadidas a una copia publicada, comandos de package.json. Nuevos manifiesto/sincronizador/verificadores mantenidos, pruebas, informes y documentación. Detalle en [resultados](../T02A_RESULTADOS.md).
- **Comprobaciones ejecutadas y resultados:** Tres tests de conservación, edición/figura aislada e idempotencia pasan. Sync real repetido sin cambios. Contenido 18/480/247/16 y tres series intactos; build y tipos correctos. 4918 referencias locales y 1993 fragmentos sin errores; 678 imágenes y cinco PDF inspeccionados sin errores. Ocho escenarios de navegador PASS, cero errores JS en ese recorrido. 501 archivos protegidos sin diferencias; historia T01 intacta.
- **Comprobaciones no ejecutadas / motivo:** 193 destinos externos de documentación inventariados sin consultas HTTP; enlaces externos de PDF tampoco se consultan. No auditoría pedagógica ni navegación completa de simulacros (B07 conocido, ajeno al ticket). No prueba de privacidad: sigue pendiente T03B.
- **Problemas y decisiones abiertas:** Cinco PDF originales históricos ausentes tienen copia preservada declarada. Se conserva un candidato sin consumidores detectados. B02–B07 permanecen; no se regeneró banco, no se integraron glosarios ni se modificó persistencia o CSS.
- **Respaldo / reversión probada:** Respaldo y restauración T01 conservados; originales editoriales intactos. Ensayo de sincronización en copia temporal independiente. Plan previo y manifiesto SHA-256 disponibles; no se eliminó ningún archivo. Para revertir, restaurar solo destinos de T02A desde copia independiente, conservando la corrección B01.
- **Autorización para siguiente ticket:** Ninguna implícita. T02B y demás tickets no iniciados.
