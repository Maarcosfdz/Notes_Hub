# T02A-B07 — Reparar la navegación de los simulacros

- **Estado:** Completado; B07 resuelta con los tres recorridos completos verificados.
- **Dependencias:** T01B y T02A completados. No habilita T02B.
- **Referencias:** [plan](../PLAN_EVOLUCION.md), [seguimiento](../SEGUIMIENTO_INCIDENCIAS.md), [T01B](T01B_corregir_arranque_preguntas_estadisticas.md), [T02A](../T02A_RESULTADOS.md), [requisitos](../../../REQUISITOS.md).

## Alcance

Corregir solo selección, avance, finalización y reinicio temporal en `src/pages/materias/aws/preguntas.astro`, más pruebas y documentación. Banco 480, listas/manifiesto de tres series 65, claves, explicaciones, progress.ts, estructura de materias, glosarios, estilos, configuración y dependencias quedan intactos. Sin sesiones persistentes ni backend.

## Causa confirmada

`bank.find(question => question.id === series[examIndex++].id)` incrementa el índice por cada candidato inspeccionado. La búsqueda debe consultar la entrada actual sin efectos y el avance debe realizarse una sola vez al pulsar Siguiente después de comprobar.

## Aceptación

Recorrer en Chromium el build completo: 195 preguntas en orden, con selecciones simples/múltiples y resultados contrastados contra selecciones reales, última pregunta sin acceso fuera de rango, historial/estadísticas persistentes y reinicio/cambio de serie coherentes. Cero excepciones JS. Regresión de práctica, filtros, falladas, exportación/importación y navegación. Verificador de contenido, tipos y build. Test automatizado que falle con el incremento dentro de find. Evidencias históricas conservadas.

## Solución aplicada

La búsqueda usa `const questionId = series[examIndex].id` y un predicado sin efectos. `examIndex` representa la posición actual y solo aumenta al activar Siguiente después de comprobar; el botón se consume para impedir dos avances. Antes de buscar se comprueba el límite de la serie, por lo que completar la pregunta 65 no consulta la posición 66.

El párrafo existente de finalización muestra aciertos/respuestas y porcentaje de ese recorrido, calculados con contadores temporales. Se añade Reiniciar simulacro con el mismo estilo de botón existente; no hay CSS ni rediseño. Reiniciar y cambiar de modo restablecen cursor y contadores, sin eliminar intentos guardados. También se evita registrar dos veces la misma comprobación si se reactiva un botón consumido. No se crean sesiones persistentes ni campos nuevos en localStorage.

## Resultados sobre el build en Chromium

| Serie | Preguntas y orden | Aciertos | Fallos | Resultado visible | Selección múltiple |
|---|---|---:|---:|---|---:|
| 1 | 65/65, IDs 89 a 462 según la lista completa | 52 | 13 | 52/65 (80%) | 8 |
| 2 | 65/65, IDs 356 a 267 según la lista completa | 48 | 17 | 48/65 (74%) | 8 |
| 3 | 65/65, IDs 164 a 239 según la lista completa | 55 | 10 | 55/65 (85%) | 8 |

Son patrones sintéticos con fallos deliberados cada 5, 4 y 7 posiciones, empezando por la primera; no se modifican claves ni explicaciones para obtenerlos. Las trazas guardan los 195 IDs esperados y respondidos, posiciones, selecciones y resultado. Total: **195 intentos, 155 aciertos, 40 fallos, 79% acumulado y 195 entradas de historial**. Se comprueban también agregados por nivel, recuento por ID y conjunto de falladas, no solo la primera pregunta o el mensaje final.

Las 24 preguntas múltiples y 171 simples se corrigen mediante la interfaz real. En cada posición se comparan enunciado/opciones, explicación tras comprobar, instantánea histórica y avance siguiente. Se prueba respuesta vacía, segunda activación de Comprobar y activación del botón Siguiente ya consumido. No hay salto, repetición inesperada ni pregunta 66.

Tras cada final se prueba reinicio, selección sin comprobar y cambio a otra serie y vuelta: primera pregunta correcta, opciones vacías y datos guardados intactos. Los resultados independientes de las tres series y el test de reset confirman que los contadores no se acumulan entre recorridos.

Estadísticas muestra 195 respuestas y 155 aciertos; la recarga conserva el estado completo. La descarga real y posterior importación con el input de archivo restauran los 195 intentos sin diferencias. Dos respuestas adicionales de práctica verifican filtros por dificultad/tema, registro de fallo y acierto en falladas: estado final 197 respuestas y 156 aciertos. No forman parte de las 195 respuestas de simulacro.

**Cero excepciones JavaScript y cero peticiones fallidas** en el recorrido. Contexto nuevo de Chromium 156.0.8078.80, únicamente datos sintéticos, cerrado en finally. [Resultado y trazas](../evidencias-T02A-B07/browser-exams.json).

## Pruebas y comandos

- `pnpm.cmd verify:content`: PASS, 18 capítulos, 480 preguntas, 247 conceptos y 16 comparativas.
- `pnpm.cmd build`: PASS; incluye chequeo de tipos sin errores/avisos/hints y genera 35 páginas. Preview del resultado, no servidor de desarrollo. [Resumen](../evidencias-T02A-B07/build.log).
- `pnpm.cmd check` final, con los nuevos archivos de prueba incluidos: 40 archivos, cero errores/avisos/hints. [Salida](../evidencias-T02A-B07/typecheck.log).
- `node --test docs/reformultation/checks/b07.test.mjs`: **7 PASS / 0 FAIL**. Ejecuta el AST de la selección y el avance reales de la página. Valida las tres listas contra su manifiesto, búsquedas repetidas sin mutación, las 65 posiciones y límite final, doble activación y reset. El control negativo usa una extracción de la expresión original y reproduce su fallo en los tres modos; el fixture está en el repositorio, sin depender de que TEMP siga existiendo.
- `node docs/reformultation/checks/validate-b07.mjs`: guarda pruebas y conservación en la nueva carpeta, sin sobrescribir evidencias previas. Verificador, sincronización editorial y publicación también pasan. [Resultados](../evidencias-T02A-B07/validation.json).
- La suite histórica de persistencia conserva **9 PASS / 3 FAIL** (B02–B04); [log](../evidencias-T02A-B07/existing-persistence.log). No se corrigieron ni ocultaron esos fallos. El gate específico de B07 es independiente y no declara verde toda la aplicación.
- Regresión general: navegación área/materia/capítulo, búsqueda de conceptos/global, favoritos y lectura tras recarga, arranque de preguntas/estadísticas, claro/oscuro, enlace de teclado y ausencia de excepciones. [Resultado](../evidencias-T02A-B07/browser-general.json).

Para repetir los 195 pasos: iniciar `pnpm.cmd preview --host 127.0.0.1 --port 4329`; `node docs/reformultation/checks/run-browser-b07.mjs` genera la función con fixture para pasar como code al conector Playwright. Esta función crea su propio contexto, usa acciones DOM y lo cierra al terminar. No ejecutarla sobre el perfil personal ni sembrar datos en él. Las pruebas generales reutilizan el generador histórico solo como lector, seleccionando escenarios; sus resultados se escriben aquí.

## Cierre y conservación

- **Fecha:** 2026-11-03; Node 24.14.0, pnpm 11.1.2, Astro 7.4.2. Sin nuevo commit.
- **Archivo productivo modificado:** Solo `src/pages/materias/aws/preguntas.astro`. Nuevos tests, fixture, generadores y evidencias bajo docs/reformultation; actualizados este ticket, plan, índice, seguimiento y nota de arquitectura vigente.
- **Respaldo:** Copia temporal de la página previa y hashes de todo el alcance protegido en [before.json](../evidencias-T02A-B07/before.json). El respaldo duradero de T01 permanece intacto. No se usó reset/clean ni se eliminaron archivos.
- **Conservación comprobada:** Comparados 1327 archivos previos, incluidos 28 archivos de evidencia histórica: solo difiere la página autorizada. Banco, listas/manifiesto, progress.ts, contenido, glosarios, CSS, configuración y dependencias sin cambios. Históricos de T01/T01B/T02A intactos; enlaces documentales nuevos comprobados. [Informe de alcance](../evidencias-T02A-B07/scope.json). Preview de pruebas detenido al finalizar.
- **Pendientes:** B02–B04 (compatibilidad de progreso), B05 (tabla móvil), B06 (mínimo Node). B01 sigue resuelta y B07 pasa a resuelta. No se implementan sesiones persistentes.
- **Continuación:** T02B y cualquier otro ticket no iniciados ni autorizados por este cierre.
