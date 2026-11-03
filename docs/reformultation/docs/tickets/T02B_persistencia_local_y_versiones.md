# T02B — Capa de persistencia local y contrato de identidad

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T01; inventario T00
- **Referencias:** L03; L04 parcial; R07–R09, R12–R14

## Objetivo

Unificar acceso al estado de estudio **manteniendo el comportamiento local** y establecer un contrato que luego pueda implementarse en SQLite sin reescribir cuestionarios.

## Alcance y archivos a inspeccionar

Inspeccionar `src/scripts/progress.ts`, páginas de lectura, estadísticas, favoritos, cuestionarios, exportación/importación y todas las claves `localStorage`. Proponer módulos/interfaces en TypeScript en ubicaciones coherentes con el repo.

## Trabajo solicitado

1. Definir identificadores `area/subject/note/question`, revisión semántica de pregunta, ID de intento/sesión, instantánea mínima para historial y formato versionado de exportación.
2. Diferenciar cambios que invalidan respuesta (clave, opciones/material de pregunta) de edición editorial de explicación que no la invalida. Documentar transición desde IDs 1–480 actuales, sin regenerarlos.
3. Centralizar acceso a las claves locales mediante una interfaz/repositorio de persistencia: lectura, favoritos, preguntas, migraciones y estadísticas. Evitar ejecutar migración con efectos inesperados al simple consultar si es viable sin romper compatibilidad.
4. Mantener exportación e importación antiguas de AWS; añadir compatibilidad para nuevas materias sin imponer migración destructiva, usando versionado y pruebas.
5. Separar **mínimamente** cálculo/corrección de preguntas de efectos de persistencia; no rehacer la UI de preguntas todavía.
6. Definir operaciones futuras idempotentes y reglas de merge, no enviar un blob completo de estadísticas en cada guardado.
7. Mantener copia intacta del dato local bruto antes de migrar y registrar marcas de la migración 370→480 de cada navegador.

## Criterios de aceptación

- Recarga conserva resultados, favoritos, lectura y falladas exactamente como antes.
- Exportaciones antiguas siguen pudiendo importarse sin pérdida silenciosa y con respaldo.
- Repetir migración local 480 no invalida una segunda vez.
- Tests documentados de versión de preguntas y cambio solo de explicación.
- API interna de persistencia prepara cambio a backend sin tocar contenidos ni crear DB todavía.

## Validación y evidencias

Pruebas unitarias con almacenamiento falso, fixtures legacy, import/export, corrección simple/múltiple, build y una ruta real de lectura. Registrar cambios de esquema y compatibilidad.

## Fuera de alcance

No instalar base de datos, habilitar cuentas, sincronizar dispositivos ni hacer un refactor visual completo. No borrar progreso local.

## Riesgos / reversión

Riesgo: pérdida o doble migración por efectos en `getStats()`. Capturar bruto, prueba de versiones, migración transaccional cuando corresponda, rollback mediante respaldo fixture, documentar cualquier limitación de agregados históricos.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; B02, B03 y B04 resueltas.
- **Fecha / commit:** 2026-11-03; sin commit: el árbol incluye cambios anteriores no aislados, conservados sin añadirlos al índice.
- **Archivos modificados:** progress.ts como API pública; adaptador progress-local.ts; estudio puro study.ts; consumidores de lectura, preguntas y estadísticas; pruebas y contrato [DATOS_ESTUDIO](../../../DATOS_ESTUDIO.md). Sin cambios de contenido.
- **Comprobaciones ejecutadas y resultados:** [Validación](../evidencias-T02B/validation.json): contenido, tipos (43 archivos sin incidencias), build (35 páginas) y 18 tests PASS (ocho de datos, siete B07, tres B01). Chromium: [195 respuestas](../evidencias-T02B/browser-exams.json), resultado 155/195, recarga, importación/exportación actual y dos prácticas; [siete escenarios generales](../evidencias-T02B/browser-general.json) PASS, cero excepciones. Capítulos/banco sin diferencias.
- **Comprobaciones no ejecutadas / motivo:** Sin usuarios, SQLite ni migración de datos personales en esta fase. Los tests históricos permanecen como evidencia; la suite actual valida exportación v2 e importación v1/legacy sin ocultar errores.
- **Problemas y decisiones abiertas:** Se conserva la inicialización diferida de getStats por compatibilidad, respaldada e idempotente. Registros sin revisión son legado desconocido. El límite de importación es 10 MiB. Backend e importación a cuentas todavía no implementados.
- **Respaldo / reversión probada:** Snapshot adicional TEMP notes-hub-T01-recovery-30sJe2: 2665 archivos, 511840486 bytes; restauración independiente notes-hub-T01-restore-4eVaLK, 2665 hashes/tamaños PASS. Respaldo duradero T01 intacto. Los datos sintéticos prueban rollback de escritura y fallo del respaldo antes de mutar.
- **Autorización para siguiente ticket:** T03A autorizado expresamente dentro de la secuencia T02B–T06B; gate de T02B satisfecho. T07/T08 excluidos.
