# Resultado de la secuencia T02B–T06B

**Completados los ocho tickets autorizados, 2026-11-03. Detenido en T06B. T07/T08 no ejecutados.** Aplicación multiusuario operativa y probada en desarrollo local, sin datos reales ni despliegue. Los cierres individuales y evidencias están enlazados en [el plan](PLAN_EVOLUCION.md). Ningún commit mezcla el trabajo previo: el checkout ya contenía muchos cambios/no seguidos al comenzar; se conservaron y se trabajó sobre el snapshot, no sobre la suposición de un HEAD completo.

| Ticket / estado | Archivos y decisiones principales | Pruebas y resultado | Cambio visible / incidencias |
|---|---|---|---|
| T02B completado | progress-local.ts, progress.ts, study.ts; lectura/estadísticas/preguntas; DATOS_ESTUDIO.md. Exportación local v2, validación antes de escribir, originales/respaldos, revisión SHA y UUID. | 18 tests; contenido/tipos/build; Chromium 195 respuestas y siete escenarios generales PASS. [Evidencia](evidencias-T02B/validation.json). | B02/B03/B04 resueltas. Compatibilidad legacy/v1/v2 conservada; datos inválidos no reemplazan progreso. |
| T03A completado | astro.config.mjs, package/lockfile, rutas SSR, database.ts y CLI. Adaptador Node oficial y SQLite integrado, sin ORM ni backend separado. | 16 tests, siete escenarios SSR; FK/WAL, migraciones/checksum, rollback, backup online/restauración PASS. [Evidencia](evidencias-T03A/validation.json). | B06 resuelta: mínimo Node >=24.14.0 probado. Servidor local necesario; no publicación estática. |
| T03B completado | auth.ts, middleware, login/logout, API auth/bank, CLI users, recursos privados y pipeline. Better Auth 1.7.15; alta administrativa, sin registro público. | 22 tests; 36 rutas y 744 documentos denegados a anónimos y accesibles para ambas cuentas; origen, límites, cookies, logout, caducidad, revocación/recuperación PASS. [Seguridad](evidencias-T03B/security.json). | Sesión requerida para estudio/descargas. 744 recursos movidos conservando SHA y URL; ningún original eliminado. Banco fuera de bundles públicos. |
| T04A completado | study-schema/service, migración 3, API state/export, progress-remote.ts, páginas de estudio. Operaciones pequeñas, intentos inmutables, marcas versionadas, sesiones con plan/cursor y resultado. | 21 tests; Chromium 195 respuestas remotas, dos cuentas/dos dispositivos, historial/recarga/marcas; backup y restauración de intentos PASS. [Navegador](evidencias-T04A/browser.json). | Progreso por cuenta; no adopta datos del navegador. Error de guardado visible, confirmación servidor obligatoria; reset estadístico conserva evidencia. |
| T04B completado | import-schema/service, migración 4, API import/export y asistente. Captura bruta previa, preview con cuenta destino, confirmación digest; lote transaccional, UUID idempotentes, archivo legacy separado. | 23 tests; dos cuentas/dos sesiones, importaciones repetidas/solapadas/concurrentes, JSON corrupto, UI y reintento de red PASS. Copia restaurada y sesión exportada recuperada. [Navegador](evidencias-T04B/browser.json). | Exportación cuenta v3; importación explícita con política de fusión, no sobrescritura. Legado/agregados archivados, sin fabricar eventos; claves locales intactas. |
| T05 completado | library.ts, marca versionada library, index.astro. Usuario eligió inicio vacío con selector y catálogo permanente. | 24 tests; A/B eligen distinto, otro dispositivo, ocultar/reponer conserva intentos, URLs directas, móvil/teclado y fixture de nueva/retirada PASS. [Navegador](evidencias-T05/browser.json). | Biblioteca personal; preferencias nunca restringen permisos. Primer fallo de prueba fue espera prematura de recarga: SQLite ya confirmaba false/version2. Se exigió desaparición real del DOM y se repitió el recorrido. |
| T06A completado | glossary.json y provenance, integrador/validador, GLOSARIO_INTEGRADO.md. 247 anteriores + 242 nuevos = 489; 138 correspondencias y 380 mapas de fuente. | 25 tests; definiciones/noteId de 247 conservados, unicidad/alias/380 apartados; búsqueda/grupos/enlaces/móvil y 195 respuestas PASS. [Integración](evidencias-T06A/integration.json). | Glosarios III/IV representados. Solo se retiran falsos alias del grupo contextual SCT/Schema Conversion; ambas herramientas tienen entrada propia. Revisión humana independiente pendiente. |
| T06B completado | QuizFilters.astro, quiz-controller/selection/view.ts, preguntas.astro; regresiones B01/B07 y comandos de test. Límites concretos, sin rediseño. | **35 tests**, contenido/tipos/build PASS. Chromium **195/195 IDs**, **52/65 en cada serie**; recarga final, reinicio, cambio/reanudación, historial, filtros/falladas, respuesta perdida después de commit y retry sin duplicar PASS. [Navegador](evidencias-T06B/browser.json), [validación](evidencias-T06B/validation.json), [seguridad final](evidencias-T06B/security.json). | Cantidad de respuestas validada, opciones bloqueadas al guardar; misma estética y rutas. Regresiones B01/B07 conservadas con control negativo. |

Versiones efectivas: Node 24.14.0, pnpm 11.1.2, Astro 7.4.2, MDX 8.1.1, TypeScript 5.9.3, @astrojs/node 11.1.9, Better Auth 1.7.15, SQLite 3.51.2. Playwright 1.61.1 usa Chromium aislado disponible en este entorno. Node avisa que node:sqlite es experimental; no se oculta.

## Contenido, acceso y conservación

Los **18 capítulos, 480 preguntas y sus IDs/claves, tres series de 65 y 16 comparativas** conservan los hashes de la línea base autorizada; el único cambio editorial autorizado es el glosario. La verificación final comprueba 4157 referencias locales y 1958 fragmentos sin errores. content:check no encuentra divergencias; cinco PDF preservados siguen disponibles autenticados. No se tocó CSS en la secuencia: el diff de Git incluye cambios anteriores, no confundirlo con esta ejecución.

[Inventario de código cambiado frente al snapshot inicial](evidencias-T06B/changed-code.json), con hashes anterior/posterior; [744 movimientos de recursos conservados](evidencias-T03B/moved-assets.json). Los documentos nuevos/cierres y evidencias se agrupan por ticket bajo esta carpeta.

Durante el cierre se añadieron dos regresiones de seguridad de datos: etiquetas históricas como `__proto__` se agregan en diccionarios sin prototipo; las rutas de datos rechazan hijos internos aunque su nombre comience por dos puntos y comprueban destino real de archivos existentes. Son correcciones de los componentes incorporados por esta secuencia. Los 35 tests finales incluyen ambas; no cambian contenido ni esquema y se repitió el navegador tras el ajuste de agregación.

Los datos de pruebas son sintéticos y están en SQLite externo. No se inspeccionó ni migró el navegador real. Los tests crean contraseñas/secretos en memoria, no los escriben en comandos, fixtures ni informes. Ninguna clave local se borra al autenticar/importar. No existe registro público ni confianza en userId cliente; todas las operaciones se vinculan a la sesión.

## Recuperación

Respaldo T01 duradero conservado sin modificación: `../Notes_Hub_Recovery/T01-20261103-fdBKQy`, 2480 archivos; SHA-256 de manifiesto `394a5764d145ddeeb9becf14124f38067684ce123f952c49c8299c7559601ae5`. Procedimiento original en [T01](T01_RESULTADOS.md).

Antes de la secuencia se creó otro punto externo: `C:\Users\mroma\AppData\Local\Temp\notes-hub-T01-recovery-30sJe2`, 2665 archivos / 511840486 bytes. Se restauraron y verificaron todos en `notes-hub-T01-restore-4eVaLK`, sin sobrescribir proyecto. Su ubicación bajo TEMP es de desarrollo y puede limpiarse por el sistema; no sustituye el respaldo T01 duradero.

Se ha sellado también el estado final: [ubicación exacta, SHA-256 del manifiesto y restauración independiente](evidencias-T06B/recovery-final.json). Se comprueban 536 archivos protegidos frente al snapshot inicial y los hashes de los 744 recursos movidos, sin diferencias. Esta copia adicional también reside en TEMP; conservarla en almacenamiento duradero antes de limpiar temporales. El registro de cierre se escribe después de capturar el árbol y se conserva junto a las evidencias, fuera del propio snapshot.

SQLite verifica integridad/FK y crea copia consistente antes de nuevas migraciones sobre archivos existentes y antes de importar. Las pruebas restauran a destino nuevo, comprueban datos y reintentan operaciones idempotentes. La restauración no autoactualiza el esquema. [Comandos y operación](../../SERVIDOR_DESARROLLO.md); [política de datos/importación](../../PROGRESO_REMOTO.md). Conservar una copia posterior antes de revertir a un snapshot: la recuperación de BD revierte todos los cambios posteriores, no solo un lote. No copiar a mano una BD activa ignorando WAL.

## Ejecución local

```powershell
pnpm.cmd install --frozen-lockfile
node scripts/dev-users.mjs create persona@example.invalid "Persona de prueba"
pnpm.cmd dev
```

Contraseña por stdin oculta, nunca argumento. Acceso `http://127.0.0.1:4329`. Dev/preview generan secreto y SQLite fuera del checkout bajo TEMP por defecto; solo datos de desarrollo. Se puede fijar NOTES_DATA_DIR/NOTES_DB_PATH a directorio absoluto externo. CLI de cuenta: create, reset-password, disable, enable y revoke. Sin panel administrativo.

```powershell
pnpm.cmd verify:content
pnpm.cmd glossary:check
pnpm.cmd content:check
pnpm.cmd build
pnpm.cmd verify:publication
pnpm.cmd test:regression
node docs/reformultation/checks/study-e2e.mjs T06B
node docs/reformultation/checks/server-e2e.mjs T06B
pnpm.cmd preview
```

Los tests de navegador exigen Chromium de Playwright disponible y puerto local 4330 libre; las dos suites no se ejecutan simultáneamente. No usan cookies del usuario. Si no está instalado el navegador, preparar el navegador de pruebas antes de ejecutarlas. [Responsabilidades del cuestionario](../../CUESTIONARIOS.md), [biblioteca](../../BIBLIOTECA_PERSONAL.md).

## Pendientes y límites antes de producción

- **B05**: tabla ancha en móvil, pendiente de T07; buscar en móvil se probó, no se afirma que la incidencia visual esté corregida.
- T08: Docker/volumen duradero, proxy/TLS real, configuración segura del servidor, backups duraderos y ensayo operativo de actualización/restauración. No se desplegó ni se configuró servidor real.
- Revisar runtime y advertencia experimental de SQLite antes de producción; compatibilidad probada aquí, sin prometer estabilidad futura de dependencias.
- Las copias de progreso tienen límite 10 MiB. El legado sin identidad/revisión suficiente permanece separado; requiere inspección de su evidencia para resolver casos ambiguos, no una recalificación automática. Sin offline pleno ni websocket.
- No se efectuó revisión humana pedagógica independiente del glosario ni revisión visual manual completa en todos los dispositivos. No se actualizaron afirmaciones comerciales AWS con fuentes externas durante esta integración.
- No se importarán datos reales sin una operación explícita del usuario a la cuenta correcta, respaldo propio y copia SQLite duradera. Un backup bajo TEMP no es política de producción.

No se han detectado riesgos críticos abiertos en las pruebas ejecutadas. Esto no equivale a autorización de producción. La siguiente fase necesita su encargo propio; esta ejecución termina aquí.

Inspección visual representativa efectuada por el agente: [escritorio claro](evidencias-T06B/quiz-desktop-light.png), [escritorio oscuro](evidencias-T06B/quiz-desktop-dark.png) y [móvil oscuro](evidencias-T06B/quiz-mobile-dark.png). Se comprobó legibilidad, disposición de filtros/opciones y conservación de tipografía/colores sin editar CSS. Capturas realizadas tras finalizar transiciones, con cuenta sintética y sin credenciales visibles. No sustituyen una revisión humana de accesibilidad completa; B05 permanece pendiente en tablas.
