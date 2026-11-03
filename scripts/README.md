# Herramientas de Notes Hub

## Mantenidas

| Archivo | Uso |
|---|---|
| `verify-content.mjs` | Estructura y relaciones del banco, conceptos y comparativas activos |
| `content-manifest.json` | Fuente editorial por capítulo, IDs, excepciones y entradas preservadas |
| `content-pipeline.mjs` | Planificación, copia reproducible e idempotencia de capítulos/recursos; nunca migra el banco |
| `verify-publication.mjs` | Destinos, anclas y consumidores del build y sus descargas; requiere build previo |
| `inspect-study-assets.py` | Comprobación opcional de imágenes/PDF con herramientas existentes; solo lectura |

Comandos y límites: [flujo de contenido](../docs/FLUJO_CONTENIDO.md). Pruebas de regresión en `docs/reformultation/checks/`; resultados históricos conservados por ticket. No usar `baseline.mjs` para guardar resultados nuevos encima de T01.

## Históricas, conservadas en su ubicación

`check-block1-editorial.py`, `extract-block1-diagrams.py`, `polish-block1-editorial.py` y `polish-block1-glossary.py` corresponden a pasadas editoriales previas. Algunas escriben contenido o esperan cifras antiguas; no son validadores generales ni comandos del flujo mantenido. No se trasladan ni eliminan: pueden seguir apareciendo en informes y contienen evidencia útil.

`tmp/integrate-study.py` es una integración histórica que intenta reinstalar el banco desde fuentes hoy ausentes. **No ejecutarla para sincronizar capítulos.** `tmp/check-study-files.py` y `tmp/check-integration.cjs` dependen de snapshots/fuentes históricos; se conservan para referencia, fuera de los comandos mantenidos. Los PDF y registros de `tmp/pdfs/` siguen respaldados; no se han limpiado.

No hay dependencia de `tmp/` en los comandos nuevos. No se archiva físicamente una herramienta hasta conocer sus consumidores y disponer de respaldo.

## Revisión T07

Primera parte de T08: entrypoint y healthcheck de contenedor viven en `docker/` y reutilizan `auth-migrate.mjs`, `users.mjs` y `database.mjs`. Prueba local: `docs/reformultation/checks/docker-local.mjs`; no depende de tmp ni usa el servidor real. [Runbook](../docs/DOCKER_LOCAL.md).

Inventario con SHA-256, consumidores textuales y procedencia: [tools-inventory.json](../docs/reformultation/docs/evidencias-T07/tools-inventory.json). No se eliminó ni movió ningún archivo. Los 487 archivos de tmp siguen conservados. Los consumidores por nombre son evidencia textual, no una prueba de que sea seguro borrar: también existen llamadas dinámicas y referencias históricas.

Además del flujo de contenido anterior, se mantienen `database.mjs`, `auth-migrate.mjs`, `users.mjs`, `dev-users.mjs`, `dev-server.mjs` y `development-env.mjs` para operación **de desarrollo**; `run-regressions.mjs`, `verify-glossary.mjs` y `verify-private-publication.mjs` son comprobaciones. Referencias de comandos: [README](../README.md) y [servidor](../docs/SERVIDOR_DESARROLLO.md). No ejecutar una CLI de escritura sobre producción como parte de una revisión documental.

`integrate-glossaries.mjs` reproduce una integración editorial concreta con guardia de divergencias; no es una importación automática recurrente. `close-t03b.mjs` / `close-ticket.mjs`, `extract-quiz-controller.mjs` y `t07-css-consolidate.mjs` son ayudas de entregas puntuales, conservadas para trazabilidad, **no comandos de mantenimiento**. El cierre T03B reescribiría documentos históricos; no volver a ejecutarlo. La extracción y consolidación esperan un estado anterior y se detienen si ya no coincide.

Las suites actuales viven en docs/reformultation/checks, nunca en tmp. Las herramientas de captura de líneas base T01/T01B/B07 se conservan como historia: no ejecutarlas para guardar resultados actuales encima de evidencias previas. La suite mantenida es `pnpm.cmd test:regression`; navegador actual: `study-e2e.mjs T07`, `server-e2e.mjs T07` y `t07-browser.mjs`, tras build. Se ejecutan secuencialmente porque comparten el puerto de pruebas 4330, con cuentas y bases sintéticas.
