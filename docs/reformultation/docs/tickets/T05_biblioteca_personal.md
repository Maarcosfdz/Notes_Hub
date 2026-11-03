# T05 — Biblioteca personal de materias sin permisos individuales

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Media/Alta
- **Dependencias:** T03B y T04A
- **Referencias:** R01, R02 y nueva funcionalidad de preferencias

## Objetivo

Permitir elegir qué materias aparecen en el inicio, sin restringir el acceso de ninguna materia publicada ni borrar progreso al ocultarla.

## Alcance y archivos a inspeccionar

Revisar `src/config/library.ts`, páginas índice/áreas/materias, contenido por colección, API y tablas de preferencias. Mantener la lista de materias publicada en fuente editorial y sus IDs estables.

## Trabajo solicitado

1. Crear preferencias por usuario con IDs `area/subject` del catálogo. Garantizar que la preferencia solo afecta al menú o dashboard, nunca a permisos de servidor.
2. Definir estado inicial y comportamiento si no se ha elegido nada (propuesta: selector de materias, sin ocultar un catálogo general). Confirmar criterio UX antes de fijarlo.
3. UI accesible: seleccionar, ocultar, recuperar, consultar catálogo completo y añadir nuevas materias publicadas.
4. Al deseleccionar, conservar lectura, favoritos, intentos y sesiones intactos.
5. Evitar que borrar/renombrar una materia por error invalide progreso: migraciones de ID y política de materias retiradas.
6. Diseñar para más áreas sin condicionales AWS esparcidos, respetando el contenido real disponible.

## Criterios de aceptación

- Usuario A selecciona AWS; B selecciona otra materia; ambos pueden entrar en las dos por URL si están publicadas y autenticados.
- Ocultar/volver a añadir no elimina progreso.
- Preferencias se sincronizan al entrar desde otro dispositivo.
- Nueva materia publicada aparece en catálogo sin código específico duplicado.
- Se ve bien en móvil y con teclado.

## Validación y evidencias

Pruebas con 2 cuentas, materia nueva, preferencia vacía, ocultar/restaurar, URL directa, recarga y cambio de dispositivo; pruebas de seguridad que distingan catálogo de permisos.

## Fuera de alcance

No crear roles por materia, suscripciones, pagos ni panel editorial. No tocar el texto de los 18 capítulos ni el banco 480.

## Riesgos / reversión

Riesgo: tratar preferencia como autorización. Mantener un catálogo accesible a toda cuenta y validación de identidad en servidor; revertir el cambio de UI sin borrar filas de preferencias.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; biblioteca vacía con selector elegida por usuario
- **Fecha / commit:** 2026-11-03; sin commit por árbol previo no aislado
- **Archivos modificados:** library.ts, operación versionada library, index.astro, tests y documentación. Sin esquema adicional.
- **Comprobaciones ejecutadas y resultados:** Contenido, tipos, build y 24 tests PASS (evidencias-T05/validation.json). Chromium: selección distinta A/B, otro dispositivo, ocultar/reponer conserva 195 intentos, acceso directo, móvil/teclado PASS (evidencias-T05/browser.json). Tres simulacros remotos completos repetidos.
- **Comprobaciones no ejecutadas / motivo:** Sin producción ni cambios de IDs reales. Catálogo nuevo/retirado probado con fixture sintético.
- **Problemas y decisiones abiertas:** Primera prueba observó DOM antes de recarga; SQLite ya había guardado false/version2. Se corrigió la espera para exigir desaparición real y se repitió todo, sin cambiar la lógica para ocultar defectos. Preferencia nunca autoriza acceso.
- **Respaldo / reversión probada:** T01 y snapshots SQLite conservados. Preferencias reutilizan marcas por recurso; ocultar no elimina filas de estudio.
- **Autorización para siguiente ticket:** T06A autorizado por secuencia y gate satisfecho.
