# T01 — Respaldo íntegro y pruebas de regresión de referencia

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T00 aprobado
- **Referencias:** R01–R19; R09, R12–R14 especialmente

## Objetivo

Disponer de una vuelta atrás comprobada y pruebas que detecten cambios de conducta **antes de cualquier migración**.

## Alcance y archivos a inspeccionar

Inspeccionar `git status`, `.gitignore`, archivos no seguidos e ignorados relevantes, scripts de compilación/verificación y almacenamiento de prueba. Utilizar rutas de backup **fuera de publicación web**; no asumir que `proceso/respaldo_integracion/` existe.

## Trabajo solicitado

1. Generar manifiesto (rutas, tamaño, hash opcional) del árbol de trabajo completo, incluidos untracked pertinentes, y distinguir secretos/generados no respaldables en repo.
2. Crear respaldo **externo o directorio seguro** que permita restaurar archivos de proyecto y estado actual no confirmado; no publicar ni versionar credenciales. No usar solo `git commit` como copia.
3. Documentar procedimiento de restauración real y ejecutarlo en una copia temporal aislada.
4. Crear fixtures sintéticas de progreso local, favoritas, intentos legacy y marca de migración del banco 480; capturar datos brutos antes de invocar `getStats()`.
5. Tests de lectura, filtros simple/múltiple, migración local que no invalide dos veces, importación/exportación y simulacros; identificar qué aún necesita prueba de navegador.
6. Ejecutar verificador, chequeo de tipos, build y pruebas disponibles, sin limpiar `dist/` o carpetas ajenas si contienen cambios relevantes.

## Criterios de aceptación

- Respaldo localizado fuera de `public/` y **restauración ensayada** y documentada.
- Check-list de pruebas antes/después con resultados reproducibles.
- Fixtures sin datos personales reales, sin claves o tokens.
- Banco activo y referencias intactos; no modificar contenido como efecto colateral.
- El baseline documenta limitaciones actuales (no prueba sincronización real ni seguridad multiusuario).

## Validación y evidencias

Guardar salidas/errores de verificación, compilación y al menos una prueba de restauración en copia; comprobar reproducibilidad de datos de prueba, sin suponer navegador real si no se usó.

## Fuera de alcance

No refactorizar persistencia, instalar autenticación, cambiar output de Astro ni crear BD. No borrar ignored/untracked para lograr build limpio.

## Riesgos / reversión

Riesgo: pérdida de contenido no confirmado en Git y secretos en un ZIP de respaldo. Guardar backups con permisos adecuados, inventariar exclusiones, simular restauración sin sobrescribir trabajo vigente.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado con incidencias de línea base documentadas; no equivale a una suite verde.
- **Fecha / commit:** 2026-11-03; HEAD `2677e842b7e3c463164cef42ab00899de316b22f` con cambios previos preservados. Sin commit nuevo.
- **Archivos modificados:** Este ticket, cierre de T00, plan y corrección de tildes en anotaciones del inventario T00. Añadidos [informe](../T01_RESULTADOS.md), [scripts y fixtures](../../checks/README.md) y [evidencias](../evidencias-T01/baseline.json). Build regeneró dist/.astro después de respaldarlos. Sin cambios productivos.
- **Comprobaciones ejecutadas y resultados:** Respaldo de 2480 archivos y SHA-256; restauración aislada y verificador en copia. Contenido 18/480/247/16, tres series de 65 con cuotas correctas. Build correcto: 0 errores/avisos/hints, 35 páginas. Persistencia: 9 PASS/3 FAIL. Navegador aislado: 7 PASS/2 FAIL/5 BLOCKED. Cero diferencias en archivos productivos frente al respaldo.
- **Comprobaciones no ejecutadas / motivo:** Cuestionarios, corrección, falladas, recorrido de simulacros, estadísticas e importación/exportación desde interfaz bloqueados por imports sin procesar en HTML. El módulo de persistencia sí se ejecutó en VM aislada. Sin reinstalación/build de la copia restaurada ni auditoría exhaustiva de contraste, anclas, PDFs o enlaces externos.
- **Problemas y decisiones abiertas:** B01 scripts de preguntas/estadísticas no ejecutan pese a build correcto; B02 versión de importación no validada; B03 arrays legacy de lectura no recuperados; B04 respaldo separado de historial omitido al exportar; B05 tabla desborda en móvil; B06 mínimo Node declarado distinto al requerido. Detalles en informe. No corregidos por estar fuera de alcance.
- **Respaldo / reversión probada:** Carpeta hermana `Notes_Hub_Recovery/T01-20261103-fdBKQy`, fuera del repositorio/public. Restauración en TEMP `notes-hub-T01-restore-dntL9b`, 2480 hashes/tamaños correctos; verificador PASS. Manifiesto SHA-256 `394a5764d145ddeeb9becf14124f38067684ce123f952c49c8299c7559601ae5`. Exclusiones y pasos en [recuperación](../../checks/README.md).
- **Autorización para siguiente ticket:** No concedida por este cierre. T02A y demás tickets no iniciados.
