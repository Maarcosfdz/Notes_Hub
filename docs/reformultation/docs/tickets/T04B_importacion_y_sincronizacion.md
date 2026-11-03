# T04B — Importación segura de progreso local y sincronización multi-dispositivo

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T04A; T01 respaldos; compatibilidad T02B
- **Referencias:** R09, R12–R14

## Objetivo

Ofrecer migración reversible desde `localStorage` y exportaciones legacy hacia una cuenta, sin duplicar intentos ni perder marcas históricas de la migración 370→480.

## Alcance y archivos a inspeccionar

Inspeccionar formatos de exportación actuales, `progress.ts`, claves `study:aws:*` y otras, `getStats()` y migraciones por navegador. Reutilizar APIs servidor idempotentes de T04A.

## Trabajo solicitado

1. **Capturar valores locales brutos ANTES** de invocar funciones que puedan mutarlos, especialmente `getStats()`; respaldar y verificar integridad de la copia.
2. Crear asistente de previsualización que indique materia, origen, versión, datos importables, registros duplicados y legacy sin identidad suficiente. Exigir cuenta autenticada y confirmación explícita.
3. Validar esquema, tamaño y datos; no confiar en JSON del cliente, evitar asignar contenido a otra cuenta por ID suministrado.
4. Importar lote transaccional con ID del lote, clave idempotente por evento y registro de procedencia. La deduplicación debe funcionar tanto si se repite el **mismo fichero** como si se importa una exportación posterior que contiene parte de los mismos intentos.
5. Para registros sin identidad estable, preservar como legado separado o requerir decisión documentada; no deduplicar solo con texto y fecha ni inventar intentos a partir de agregados.
6. No re-ejecutar a ciegas la migración del banco 370→480; interpretar marcas por navegador y proteger información histórica de preguntas reformuladas.
7. Implementar sincronización básica al autenticar, navegar y volver a cargar con estado de guardado; no mezclar automáticamente datos de navegador de otro usuario.
8. Retener exportación/importación versionadas y opción de revertir al respaldo; borrar claves locales solo con política explícita en un encargo futuro.

## Criterios de aceptación

- Dos ejecuciones de la misma importación: mismo número de intentos y estadísticas.
- Dos exportaciones solapadas: eventos compartidos no se duplican.
- Importación desde dos navegadores al mismo usuario: progreso coherente; sin mezclar usuarios.
- Registros legacy conservaron evidencia aunque no puedan asignarse exactamente.
- Datos originales locales siguen recuperables y existe resumen y log sin datos sensibles.
- Se puede recuperar desde backup y reintentar sin inconsistencias.

## Validación y evidencias

Fixtures 370→480, cuenta A/B, importación completa/parcial, importación repetida y solapada, fichero corrupto/malicioso, conflicto de favoritos, red interrumpida, reintentos, navegador distinto y restauración. Anotar qué pruebas en navegador real se completaron.

## Fuera de alcance

No habilitar registro abierto, no borrar `localStorage` automaticamente, no prometer soporte offline completo, no trasladar ficheros de teoría a BD.

## Riesgos / reversión

Riesgo alto de daño a historial real. Ensayo con datos sintéticos, backup previo, transacción por lote, trazabilidad sin PII, rollback de lote o restauración; aprobación del usuario antes de importar datos reales.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; importación explícita y sincronización probadas
- **Fecha / commit:** 2026-11-03; sin commit por árbol previo no aislado
- **Archivos modificados:** import-schema/service y migración 4, API import/export, adaptador remoto/asistente, estadísticas/lectura, study.ts snapshot type, tests y PROGRESO_REMOTO.md.
- **Comprobaciones ejecutadas y resultados:** Contenido, tipos, build y 23 tests PASS (evidencias-T04B/validation.json). Chromium: 195 respuestas más importación repetida/solapada/concurrente, dos cuentas/dos sesiones, UI confirmada, red interrumpida/reintento PASS (evidencias-T04B/browser.json). Recuperación de copia y sesión exportada PASS.
- **Comprobaciones no ejecutadas / motivo:** Sin importación real, producción ni sincronización offline. Revisión humana de conflictos legacy depende de datos futuros.
- **Problemas y decisiones abiertas:** Eventos identificables se fusionan por UUID, conflictos rechazan lote; legado/agregados conservados separados. Marcas del servidor prevalecen. Exportación v3 incluye historial anterior a reset y sesiones; importar es fusión, no sobrescritura del corte estadístico origen. Límite 10 MiB explícito.
- **Respaldo / reversión probada:** Snapshot automático de esquema y backup online antes de cada lote; restauración en destino independiente y reintento idempotente PASS. Originales locales permanecen íntegros; T01 conservado.
- **Autorización para siguiente ticket:** T05 autorizado y gate satisfecho. Usuario eligió biblioteca vacía con selector.
