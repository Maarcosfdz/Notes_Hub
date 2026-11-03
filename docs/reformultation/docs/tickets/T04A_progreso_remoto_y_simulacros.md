# T04A — Persistencia remota por usuario, intentos y simulacros

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T03B, T02B
- **Referencias:** R07–R11, R12 futura, R14

## Objetivo

Convertir SQLite en fuente de verdad para estado de estudio autenticado con aislamiento real, sin sobrescrituras por subir un objeto agregado de estadísticas.

## Alcance y archivos a inspeccionar

Revisar contrato local de T02B, tablas/migraciones T03A, rutas de lectura y preguntas, estadísticas, favoritos y series; crear endpoints o acciones server protegidos según convenciones de Astro.

## Trabajo solicitado

1. Modelar operaciones pequeñas e idempotentes para marcar lectura, favoritos, intentos de pregunta y sesiones/resultado de simulacro con IDs estables y timestamps del servidor.
2. Derivar estadísticas desde intentos cuando haya detalle suficiente; preservar aparte agregados heredados sin fabricar eventos.
3. Asociar todas las filas a usuario autenticado y materia: no aceptar `userId` arbitrario del cliente como fuente de autoridad; aplicar controles en lecturas y escrituras.
4. Guardar ID y revisión semántica de pregunta más instantánea mínima de enunciado, opciones, respuestas y explicación necesaria para mostrar intento histórico coherente.
5. Guardar simulacro con ID de sesión, lista de preguntas/versiones, respuestas y resultado propio. Preservar compatibilidad con las tres series de 65 sin duplicar bancos.
6. Diseñar idempotencia en envíos repetidos y colisiones de varios dispositivos; mostrar estados guardando/error/reintento. Definir política de última escritura o versión para preferencias, no para intentos inmutables.
7. Mantener el localStorage antiguo como origen disponible para T04B, sin borrarlo o importar implícitamente.

## Criterios de aceptación

- Dos cuentas no pueden leer ni alterar datos cruzados aun cambiando IDs en requests.
- Repetir la misma operación no duplica intentos ni puntuaciones.
- Los simulacros mantienen resultado e historial propio tras cerrar sesión y entrar de nuevo.
- Intentos históricos no se recalifican contra una clave nueva.
- Fallos de red tienen error visible; no se afirma sincronización sin confirmación del servidor.
- Datos `localStorage` antiguos siguen íntegros para migración posterior.

## Validación y evidencias

Tests de autorización por recurso, transacciones e idempotencia, concurrencia simulada, mismo usuario en dos sesiones, cambio de pregunta, backfill de agregados legacy, fixtures y build. Probar la recarga y cambio de sesión en navegador si hay entorno.

## Fuera de alcance

No borrar datos locales, no importar progreso real, no implementar offline completo/websockets ni panel de administración.

## Riesgos / reversión

Riesgos: duplicaciones, contaminación cruzada o pérdida por escritura concurrente. Usar IDs de operación, restricciones únicas, transacciones e historiales independientes; restauración SQLite probada antes de uso real.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; progreso remoto y simulacros persistentes probados
- **Fecha / commit:** 2026-11-03; sin commit por árbol previo no aislado
- **Archivos modificados:** study-schema/service, migración 3, APIs state/export, adaptador remoto, páginas de lectura/preguntas/estadísticas, tests y PROGRESO_REMOTO.md.
- **Comprobaciones ejecutadas y resultados:** Contenido, tipos, build y 21 tests PASS (evidencias-T04A/validation.json). Chromium: tres series completas, 195 respuestas, resultados, recarga, dos cuentas y dos dispositivos PASS (evidencias-T04A/browser.json). Backup/restauración de intentos y sesiones PASS.
- **Comprobaciones no ejecutadas / motivo:** Importación de legacy pendiente de T04B; no se importa implícitamente. Sin datos reales ni producción.
- **Problemas y decisiones abiertas:** Intentos inmutables por UUID; servidor corrige y guarda instantánea. Marcas con versión; simulacros con plan/cursor propio. Reset conserva historial bruto.
- **Respaldo / reversión probada:** Snapshot automático antes de migración 3; backup online y restauración de 195 intentos en SQLite independiente PASS; T01 conservado.
- **Autorización para siguiente ticket:** T04B autorizado por secuencia; gate satisfecho.
