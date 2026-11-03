# PLAN DE EVOLUCIÓN — Notes Hub

> **Estado vigente:** T00–T07 completados. T08 **parcial**: primera parte Docker local autorizada, completada y [validada](T08_LOCAL_RESULTADOS.md). Producción, HTTPS y backups externos no autorizados ni ejecutados. Las entradas históricas conservan el contexto de cada entrega.

## Visión

Plataforma autohospedada de estudio basada en Astro/MDX/TypeScript, que conserva teoría y bancos de preguntas en archivos; añade Node.js y SQLite para identidad y progreso de usuarios. Sin registro público: creación administrativa de cuentas. Todas las materias publicadas disponibles tras autenticación; cada persona configura cuáles aparecen en su biblioteca. Preguntas e intentos versionados; estadísticas por usuario, no por navegador.

## Decisiones

| ID | Decisión | Estado |
|---|---|---|
| D01 | Conservar Astro, Markdown/MDX, JSON de preguntas y organización área/materia/bloque | **Aceptada** |
| D02 | SQLite como primera base de datos y un solo servidor | **Implementada en desarrollo**, node:sqlite; despliegue pendiente T08 |
| D03 | Usuarios creados desde el servidor, sin registro público | **Aceptada** |
| D04 | Todas las materias publicadas visibles a cualquier usuario autenticado | **Aceptada** |
| D05 | Preferencias de biblioteca independientes de permisos y progreso | **Aceptada** |
| D06 | Backend Node integrado en Astro; sin backend separado al inicio | **Implementada**, adaptador oficial Node 11.1.9 / Astro 7.4.2 |
| D07 | Evaluar biblioteca estable de autenticación, por ejemplo Better Auth | **Evaluada e implementada**, Better Auth 1.7.15; alta administrativa |
| D08 | Páginas de estudio y documentos asociados requieren sesión; login y recursos generales pueden ser públicos | **Política objetivo aprobada por el usuario en conversaciones**; completar inventario y mecanismo en T00 |
| D09 | El servidor será fuente de verdad de datos de usuario; sin edición colaborativa o modo offline pleno inicial | **Implementada**, operaciones idempotentes, versiones e importación explícita |
| D10 | No cambiar versión semántica por corregir solo explicación; sí ante cambios de enunciado/material/clave relevantes | **Principio aceptado**, definir protocolo en T00 |

## Estado de partida informado (3-11-2026)

- Astro configurado para sitio estático; lecturas en `src/pages/materias/[subject]/[note].astro` mediante `getStaticPaths()`.
- Sin API ni BD de aplicación. Progreso local en `study:aws:*` y otras claves locales; `src/scripts/progress.ts` no es acceso exclusivo.
- `src/content/modules/<area>/<materia>/`: `theory/`, `questions/`, `reference/`.
- AWS: 18 apuntes, 480 preguntas, tres series de 65, 247 conceptos activos, 16 comparativas.
- Copias editoriales en `aws-clf-c02/`, activos en `src/content/modules/`, materiales en `public/docs-aws/` y `public/study-docs/`.
- El banco de 480 está instalado, **no reinstalar**. La migración de progreso de cada navegador es un estado distinto; puede depender de llamar a `getStats()`.
- Hay cambios y archivos sin seguimiento en Git según Codex; no asumir que un commit es respaldo completo.

## Hoja de ruta y dependencias

| Orden | Ticket | Propósito | Dependencias | Estado inicial | Relación con Lxx |
|---|---|---|---|---|---|
| 1 | [T00](tickets/T00_auditoria_y_decisiones.md) | Cerrar auditoría y decisiones | Ninguna | Revisada; T01 autorizado | Todas (inventario) |
| 2 | [T01](tickets/T01_respaldo_y_regresion.md) | Respaldo recuperable y regresión base | T00 | Completado con incidencias documentadas | Transversal |
| 2b | [T01B](tickets/T01B_corregir_arranque_preguntas_estadisticas.md) | Corregir B01: scripts de preguntas y estadísticas | T01 | Completado; B01 resuelta | Corrección funcional acotada |
| 3 | [T02A](tickets/T02A_fuentes_y_recursos.md) | Sincronización editorial, activos y enlaces | T01 | Completado; fuentes y recursos reproducibles | L01, L02, L07 parcial |
| 3b | [T02A-B07](tickets/T02A_B07_corregir_simulacros.md) | Reparar selección, avance y finalización de simulacros | T01B, T02A | Completado; B07 resuelta | Corrección funcional B07 |
| 4 | [T02B](tickets/T02B_persistencia_local_y_versiones.md) | Contrato de persistencia local y preguntas | T01; coordinación T02A | Completado; B02–B04 resueltas | L03, L04 mínimo |
| 5 | [T03A](tickets/T03A_node_sqlite_y_migraciones.md) | Ejecución Node y base SQLite | T00, T01, T02B | Completado; restauración probada | Backend |
| 6 | [T03B](tickets/T03B_autenticacion_y_proteccion.md) | Cuentas, sesiones y rutas privadas | T03A | Completado; gate verificado | Backend / R12 futura |
| 7 | [T04A](tickets/T04A_progreso_remoto_y_simulacros.md) | Persistencia remota y datos aislados | T03B, T02B | Completado; gate verificado | L03, L04 parcial |
| 8 | [T04B](tickets/T04B_importacion_y_sincronizacion.md) | Migrar `localStorage`, sincronizar sin pérdidas | T04A | Completado; gate verificado | R09, R13, R14 |
| 9 | [T05](tickets/T05_biblioteca_personal.md) | Elegir materias sin afectar permisos/historial | T03B, T04A | Completado; gate verificado | Biblioteca |
| 10 | [T06A](tickets/T06A_glosarios_y_conceptos.md) | Glosarios III/IV y buscador | T02A | Completado; gate verificado | L08 |
| 11 | [T06B](tickets/T06B_cuestionarios_y_componentes.md) | Ordenar cuestionarios y experiencia | T04A/B, T02B | Completado; gate verificado | L04 |
| 12 | [T07](tickets/T07_estilos_utilidades_y_documentacion.md) | Estilos, accesibilidad y limpieza residual | T02A/B; T06B preferible | Completado; gate verificado | L05–L07, L09 |
| 13 | [T08](tickets/T08_docker_seguridad_y_despliegue.md) | Despliegue propio y recuperación | T03B, T04B, T05; pruebas necesarias | Parcial; Docker local validado, resto pendiente | Producción |

**Paralelismo razonable:** T06A puede desarrollarse después de T02A sin esperar a la BD; T07 puede iniciarse en partes visuales cuando existan pruebas. No combinar dos migraciones de datos o cambios críticos de rutas en un solo encargo.

## Puertas de calidad (gates)

1. **Antes de tocar lógica:** copia íntegra y restauración ensayada de árbol de trabajo, incluido contenido no confirmado en Git; datos de prueba; inventario de cambios previos.
2. **Antes de almacenar datos de usuarios reales:** SQLite persistente, migraciones reversibles o restauración documentada y **ensayo de respaldo/restauración**.
3. **Antes de exponer servidor a Internet:** login por servidor, sin registro público, verificación de autorización en rutas, APIs y descargas; HTTPS; configuración de secretos; test de acceso anónimo.
4. **Antes de importar progreso real:** formato y versión validados, copia local, ID de lote e intentos, importación idempotente, aislamiento entre cuentas y tratamiento de registros legacy.
5. **Antes de pasar a producción:** pruebas funcionales, compilación, recursos, móvil/claro/oscuro, migraciones, despliegue y recuperación documentada.

## Criterios transversales

- Los tickets se ejecutan **de uno en uno**. El usuario ha autorizado expresamente la secuencia T02B–T06B, condicionada a sus gates; no requiere nueva aprobación entre ellos. T07/T08 y producción siguen fuera de alcance.
- Releer el código y documentar variaciones respecto al estado de 3-11-2026; no fiarse de rutas o cifras desactualizadas.
- No eliminar copias, recursos, migraciones ni archivos no seguidos por Git sin identificar referencias y respaldo.
- Conservar el banco actual 480 preguntas, su identidad y las tres series; no regenerarlas sin encargo.
- No confundir pruebas de compilación con verificación real de datos personales o control de acceso.
- Registrar en cada ticket pruebas ejecutadas/no ejecutadas, archivos realmente modificados, limitaciones y decisión de avance.
- `ARQUITECTURA.md`: estado **implementado**. `REQUISITOS.md`: comportamiento requerido. `ESTILO.md`: guía visual. `LIMPIEZA_PENDIENTE.md`: pendientes. Esta hoja: plan y decisiones, no sustituto de esos documentos.

## Registro de ejecución

### 2026-11-03 — T08, primera parte local

Autorización posterior limitada a Docker local. Multi-stage con runtime fijado, Compose loopback/non-root/read-only, SQLite en volumen, variables obligatorias y healthcheck. Build Linux y 37 tests pasan; dos cuentas/dispositivos, estado aislado, force-recreate y down/up conservan datos. Snapshot/restore local sintético PASS. [Resultados](T08_LOCAL_RESULTADOS.md). T08 queda parcial: sin servidor real, HTTPS ni backups externos; no hay autorización para continuar esos puntos.

Mantener aquí una entrada breve por ticket al aprobarlo, indicando fecha, commit/referencia opcional, resultado y enlaces a evidencia. El estado vigente figura en la tabla; las entradas siguientes conservan los resultados de cada entrega en su fecha.

### 2026-11-03 — T00

Auditoría documental entregada para revisión: [informe](T00_AUDITORIA.md), [inventario textual](T00_INVENTARIO.json) y [cierre](tickets/T00_auditoria_y_decisiones.md). Sin cambios funcionales ni dependencias. Verificador correcto (18/480/247/16). Rutas y recursos de estudio actualmente públicos; política objetivo D08 confirmada, no implementada. Detectado mínimo Node incompatible entre package.json del proyecto y Astro instalado. D07 permanece pendiente; D06/D09 son propuestas. No build, navegador ni restauración: alcance y pendientes expresos en informe. Posteriormente el usuario revisó T00 y autorizó expresamente T01; no autoriza tickets sucesivos.

### 2026-11-03 — T01

Completado con incidencias: [resultados y recuperación](T01_RESULTADOS.md), [cierre](tickets/T01_respaldo_y_regresion.md), [evidencias](evidencias-T01/baseline.json). Respaldo duradero fuera del repositorio, 2480 archivos con SHA-256 y restauración aislada verificada; contenido y build correctos. Persistencia 9 PASS/3 FAIL; navegador 7 PASS/2 FAIL/5 BLOCKED. Fallo crítico: imports sin procesar en scripts de preguntas/estadísticas impiden arrancar esas herramientas en HTML compilado. Además: validación de importación, lectura legacy, cobertura del respaldo exportado y tabla móvil. No se cambió código productivo para ocultarlos. La línea base no es verde; corregir y repetir pruebas bloqueadas mediante encargo explícito antes de considerar validado el cuestionario. T02A no iniciado ni autorizado automáticamente.

### 2026-11-03 — T01B

B01 resuelta: scripts procesados por Astro, tipos y build correctos, preguntas y estadísticas operativas. [Ticket](tickets/T01B_corregir_arranque_preguntas_estadisticas.md) y [seguimiento](SEGUIMIENTO_INCIDENCIAS.md). Repetidos los cinco escenarios bloqueados: filtros, corrección/falladas, estadísticas y exportación/importación pasan; simulacros fallan por otro defecto B07 preexistente (índice dentro de find). Línea base T01 intacta. El usuario autorizó expresamente continuar con T02A tras este cierre; B02–B07 quedan fuera de su alcance.

### 2026-11-03 — T02A

Completado: [resultados](T02A_RESULTADOS.md) y [ticket](tickets/T02A_fuentes_y_recursos.md). Fuente editorial de los 18 capítulos y 740 salidas de recursos declaradas; 57 figuras transitivas incorporadas sin borrar publicaciones. Sync idempotente y prueba de edición/figura aislada. 4918 referencias locales y 1993 fragmentos sin errores; 678 imágenes y cinco PDF comprobados; 193 enlaces externos inventariados sin verificación HTTP. Originales y datos protegidos: 501 archivos sin diferencias respecto a T01; evidencia histórica intacta. B01 sigue resuelta; B02–B07 pendientes. T02B y demás tickets no iniciados.

### 2026-11-03 — T02A-B07

B07 resuelta en encargo independiente: [ticket y pruebas](tickets/T02A_B07_corregir_simulacros.md). Búsqueda sin mutar índice, avance único, fin seguro, resultado y reinicio en memoria. Chromium recorre 195 preguntas en orden: 52/65, 48/65 y 55/65 con selecciones sintéticas; historial, estadísticas, recarga y exportación/importación comprobados, cero excepciones. Siete tests de regresión pasan, incluido control negativo con la expresión anterior. Solo cambia preguntas.astro como archivo productivo; históricos conservados. Permanecen B02–B06; T02B no iniciado.

### 2026-11-03 — T02B

Completado: adaptador local centralizado, exportación v2 con originales/respaldos, importación v1/legacy validada y reversible, revisión SHA-256 e IDs UUID de intentos. B02–B04 resueltas. 18 tests y dos recorridos de navegador (195 respuestas y siete escenarios generales) pasan. [Ticket](tickets/T02B_persistencia_local_y_versiones.md). Snapshot adicional restaurado; sin cambios de contenido. El usuario autoriza T03A–T06B condicionados a gates, sin T07/T08.

### 2026-11-03 — T03A

Astro/Node SSR y SQLite de desarrollo externo, migraciones con checksum, FK/WAL, backup online y restauración PASS. 16 tests y siete escenarios SSR pasan; contenido intacto. Mínimo Node corregido a la versión probada, B06 resuelta. [Ticket](tickets/T03A_node_sqlite_y_migraciones.md) y [operación](../../SERVIDOR_DESARROLLO.md). Solo loopback; contenido aún requiere protección T03B, que se inicia a continuación.

### 2026-11-03 — T03B

Completado; acceso privado y cuentas administrativas probados. [22 tests, contenido, tipos y build](../evidencias-T03B/validation.json) PASS; [Chromium y seguridad](../evidencias-T03B/security.json) PASS: 36 rutas anónimas denegadas, 744 documentos denegados sin sesión y accesibles para ambas cuentas, cookies, origen, límite de peticiones, caducidad, revocación y recuperación.

### 2026-11-03 — T04A

Completado; progreso remoto y simulacros persistentes probados. Contenido, tipos, build y 21 tests PASS (evidencias-T04A/validation.json). Chromium: tres series completas, 195 respuestas, resultados, recarga, dos cuentas y dos dispositivos PASS (evidencias-T04A/browser.json). Backup/restauración de intentos y sesiones PASS.

### 2026-11-03 — T04B

Completado; importación explícita y sincronización probadas. Contenido, tipos, build y 23 tests PASS (evidencias-T04B/validation.json). Chromium: 195 respuestas más importación repetida/solapada/concurrente, dos cuentas/dos sesiones, UI confirmada, red interrumpida/reintento PASS (evidencias-T04B/browser.json). Recuperación de copia y sesión exportada PASS.

### 2026-11-03 — T05

Completado; biblioteca vacía con selector elegida por usuario. Contenido, tipos, build y 24 tests PASS (evidencias-T05/validation.json). Chromium: selección distinta A/B, otro dispositivo, ocultar/reponer conserva 195 intentos, acceso directo, móvil/teclado PASS (evidencias-T05/browser.json). Tres simulacros remotos completos repetidos.

### 2026-11-03 — T06A

Completado; 489 conceptos integrados con mapa semántico. Contenido, tipos, build y 25 tests PASS (evidencias-T06A/validation.json). 247 entradas previas conservan definiciones/noteId; 380 mapas y anclas validados. Chromium: alias/grupos/enlaces/buscador/móvil y 195 respuestas remotas PASS (evidencias-T06A/browser.json).

### 2026-11-03 — T06B

Completado; último ticket autorizado, secuencia detenida. 33 pruebas PASS, verify:content, tipos y build PASS (evidencias-T06B/validation.json). Chromium: 195 preguntas, orden exacto y 52/65 en cada serie; historial/remoto, recarga tras pregunta 65, reinicio, cambio/reanudación, filtros, falladas, red con commit confirmado y retry sin duplicación PASS (evidencias-T06B/browser.json). Seguridad final PASS (evidencias-T06B/security.json): 36 rutas/744 recursos y dos cuentas. 4157 referencias/1958 anclas sin errores; content:check sin divergencias.

### 2026-11-03 — T07

Completado; B05 y mensajes de guardado corregidos, L05/L06/L07/L09 cerradas con límites documentados. 37 tests, verify:content, tipos/build PASS. Matriz 5 anchos x 2 temas x 28 rutas PASS; 90 tablas/190 imágenes/7 bloques de código por combinación, sin overflow global y última columna accesible. 195 preguntas en Chromium: 52/65 en cada serie; persistencia, cuentas, biblioteca, reintentos, B01/B07 PASS. Seguridad: 36 rutas/744 recursos PASS. Publicación 4157 referencias/1958 fragmentos sin errores. Ver T07_RESULTADOS.md.
