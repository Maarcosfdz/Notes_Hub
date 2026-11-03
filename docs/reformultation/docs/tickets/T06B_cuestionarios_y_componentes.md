# T06B — Refactor controlado del cuestionario y simulacros

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Media
- **Dependencias:** T02B, T04A y preferiblemente T04B
- **Referencias:** L04; R07–R11, R16

## Objetivo

Hacer mantenible la página de preguntas separando responsabilidades, conservando comportamiento y persistencia remota lograda.

## Alcance y archivos a inspeccionar

Inspeccionar páginas `/materias/aws/`, componentes, scripts de filtros, carga `bank.json`, manifiesto/series, corrección, guardado, progreso y estilos. No asumir que todo lo ubicado en `.astro` es código duplicado: render y navegador tienen responsabilidades distintas.

## Trabajo solicitado

1. Identificar módulos actuales: selección de banco/series, filtros, selección de respuestas, corrección, explicación, vista, envío remoto, estadísticas y resultado de simulacro.
2. Extraer **solo** los límites con beneficio claro en archivos bien nombrados, manteniendo rutas y estilos.
3. Asegurar que pregunta simple/múltiple valida cantidad y compara conjuntos (sin depender del orden de selección), muestra explicación tras comprobar y evita revelar respuesta de antemano.
4. Conservar las 480 preguntas y tres conjuntos disjuntos de 65 con cuotas 16/19/22/8. No crear copias de preguntas para cada simulacro: resolver por IDs/revisiones del banco.
5. Gestionar sesiones de simulacro persistentes de T04A, reintentos y resultados. UX: reanudar cuando el contrato lo permita, salida y fin de serie, errores guardando.
6. Revisar filtros por nivel, dominio/tema y falladas por usuario, sin compartir progreso entre cuentas.
7. Mantener accesibilidad, dos columnas cuando quepa, claridad de estado y teclado.

## Criterios de aceptación

- Mismos resultados de corrección para banco actual y fixtures.
- Simulacros siguen siendo 65, cuota correcta, IDs no solapados, y persisten intentos con historial/versiones.
- Cambios visuales mínimos y rutas existentes sin regresiones.
- Sin duplicación innecesaria de código ni dependencia de estado en memoria para historial persistente.
- Pruebas automatizadas y al menos comprobación manual representativa documentada.

## Validación y evidencias

Comparación antes/después con fixtures, preguntas correctas de 1 y varias, quiz repetido, filtros vacíos, pregunta fallada, actualización/revisión de banco, cerrar/abrir y red lenta. Build y tests de UI cuando disponibles.

## Fuera de alcance

No reescribir 480 enunciados, no editar glosarios ni rediseñar la aplicación entera, no incorporar gamificación, cronómetro obligatorio o puntuación AWS inventada.

## Riesgos / reversión

Riesgo: regresión en lógica de selección e historial. Tests de funciones puras, capturas comparativas y commit de reversión. No borrar trazas históricas.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; último ticket autorizado, secuencia detenida
- **Fecha / commit:** 2026-11-03; sin commit por cambios previos no aislados
- **Archivos modificados:** QuizFilters.astro, preguntas.astro, quiz-controller/selection/view.ts, regresiones B01/B07 y navegador, comandos de test y documentación CUESTIONARIOS.md.
- **Comprobaciones ejecutadas y resultados:** 35 pruebas PASS, verify:content, tipos y build PASS (evidencias-T06B/validation.json). Chromium: 195 preguntas, orden exacto y 52/65 en cada serie; historial/remoto, recarga tras pregunta 65, reinicio, cambio/reanudación, filtros, falladas, red con commit confirmado y retry sin duplicación PASS (evidencias-T06B/browser.json). Seguridad final PASS (evidencias-T06B/security.json): 36 rutas/744 recursos y dos cuentas. 4157 referencias/1958 anclas sin errores; content:check sin divergencias.
- **Comprobaciones no ejecutadas / motivo:** Sin revisión humana visual/pedagógica independiente, proxy HTTPS real, producción ni datos reales. T07/T08 excluidos.
- **Problemas y decisiones abiertas:** Límites extraídos con beneficio concreto; misma estética. Cantidad de opciones validada antes de comprobar; guardado bloquea selección. Fixture histórico usa .txt para no compilar copias como páginas. B05 tabla móvil sigue pendiente.
- **Respaldo / reversión probada:** T01 y snapshot pre-secuencia restaurado conservados; copia textual antes de extracción y snapshots SQLite externos. Recuperación final documentada en RESULTADOS_T02B_T06B.md.
- **Autorización para siguiente ticket:** Ninguna: detener al completar T06B; no ejecutar T07/T08.

Inspección visual por el agente: escritorio claro/oscuro y móvil oscuro revisados en capturas de evidencias-T06B, conservando estilo y disposición responsive. Correcciones adicionales de cierre sobre componentes creados en la secuencia: etiquetas históricas agregadas con diccionarios sin prototipo y ruta externa SQLite con comparación estricta/canónica. Ambas tienen regresión específica dentro de las 35 pruebas finales. No se modificó el esquema ni se tocaron datos reales. Informe de recuperación final: ../evidencias-T06B/recovery-final.json.
