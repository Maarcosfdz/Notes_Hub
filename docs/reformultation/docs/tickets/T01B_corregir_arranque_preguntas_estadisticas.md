# T01B — Corregir el arranque de preguntas y estadísticas

- **Estado:** Completado: B01 resuelto; B07 descubierto y pendiente fuera de alcance.
- **Dependencias:** T00 revisado y T01 cerrado con incidencias; B01 autorizado expresamente.
- **Alcance:** Solo procesamiento de scripts de las páginas de preguntas y estadísticas, tipos necesarios, pruebas y documentación asociadas.
- **Referencias:** [T01](../T01_RESULTADOS.md), [Requisitos](../../../REQUISITOS.md), [Arquitectura](../../../ARQUITECTURA.md).

## Objetivo y límites

Resolver B01 en Astro 7.4.2: imports entregados sin procesar al navegador. Conservar las 480 preguntas, las tres series de 65, persistencia y formatos actuales, diseño, filtros y corrección. No corregir B02–B06, instalar paquetes, reestructurar componentes ni editar dist manualmente. Conservar intactos el respaldo y los resultados históricos de T01.

## Validación requerida

Verificador de contenido, tipos y compilación. Preview del build con contexto aislado y datos sintéticos: inicialización, opciones, simple/múltiple, filtros, falladas, simulacros completos, estadísticas/recarga, exportación/importación actual, ausencia de errores JS y regresión de páginas que pasaban. Repetir los cinco escenarios bloqueados de T01; documentar cualquier causa distinta.

## Causa y solución comprobadas

Astro procesa scripts sin atributos salvo src. `lang="ts"` desactiva ese procesamiento: no empaqueta imports ni los transforma en módulo. Se usa `<script>` y se tipa el DOM para el chequeo estricto del proyecto, sin añadir `type="module"` manualmente. El compilador instalado de Astro 7.4.2 extrae cero scripts con lang=ts y uno con script sin atributos; la prueba reproduce la causa sin depender solo de documentación. [Documentación oficial consultada el 2026-11-03](https://docs.astro.build/en/guides/client-side-scripts/).

Solo cambian dos archivos productivos: `src/pages/materias/aws/preguntas.astro` y `estadisticas.astro`: etiqueta script, tipos de controles/estadísticas y aserciones de elementos existentes. Los imports se resuelven en bundles `/_astro/*.js`, servidos con HTTP satisfactorio; no hay imports de fuentes sin procesar en las páginas generadas. Comparación de JavaScript tras borrar tipos contra T01: idéntico en ambas páginas, [evidencia](../evidencias-T01B/logic-equivalence.json). No se cambia algoritmo, persistencia, contenido ni CSS.

## Validación ejecutada

- Fecha 2026-11-03; Node 24.14.0, pnpm 11.1.2, Astro 7.4.2. `pnpm.cmd verify:content`: PASS 18 capítulos, 480 preguntas, 247 conceptos, 16 comparativas y tres series de 65.
- `pnpm.cmd build` incluye `astro check`: 30 archivos, cero errores/avisos/hints; 35 páginas. [Resumen](../evidencias-T01B/build.log).
- Tres tests del compilador y salida empaquetada: PASS. Persistencia: 9 PASS/3 FAIL, los mismos B02–B04 históricos, sin corregir. [Validación y hashes](../evidencias-T01B/validation.json).
- Navegador sobre preview compilado: 12 PASS/3 FAIL, sin bloqueos por B01. [Resultados](../evidencias-T01B/browser.json). Contextos nuevos, datos sintéticos y cierre al terminar; ningún almacenamiento personal consultado.
- Pasan inicialización y opciones, filtros por dificultad/tema/falladas, ausencia de explicación antes de comprobar, selección requerida, corrección simple/múltiple, explicaciones, registro de error y retirada de falladas al acertar. Cuatro intentos reales de interfaz: tres aciertos y un fallo.
- Pasan estadísticas e historial tras recarga y descarga/importación actual desde la interfaz. El arnés histórico suponía 195 respuestas y 30 filas; al fallar los simulacros por B07 se adaptó exclusivamente en el nuevo generador para comprobar los cuatro intentos reales y su historial. [Repetición específica](../evidencias-T01B/statistics-recheck.json), sin excepciones JavaScript en práctica/estadísticas.
- Los siete escenarios que pasaban en T01 siguen pasando: navegación, 35 rutas, 232 enlaces locales de capítulos, conceptos/búsqueda, favoritos/lectura, temas y enlace de teclado. Se conserva B05: tabla a 421 px en pantalla de 390 px.
- Los tres FAIL del navegador representan inicio/recorrido de simulacros por B07, comprobación global de excepciones por ese mismo B07 y desbordamiento móvil B05. No se afirma ausencia total de errores JS: no quedan errores de importación B01, pero seleccionar simulacro produce el error distinto documentado abajo.

## Incidencia nueva B07, no corregida

El código original contiene `bank.find(question => question.id === series[examIndex++].id)`. El incremento ocurre por cada candidato inspeccionado por find, no una vez por pregunta. Los tres simulacros alcanzan índice 66 al intentar iniciarse y fallan con `Cannot read properties of undefined (reading 'id')`; la práctica sí arranca. Confirmado tanto en el respaldo T01 como en los tres modos reales de Chromium: [diagnóstico](../evidencias-T01B/exams.json). No se ha iniciado, avanzado ni finalizado un simulacro completo. La estructura de los tres conjuntos sigue válida. Esta causa es independiente de B01 y requiere encargo específico; no se modifica dentro de T01B ni de T02A.

La primera ejecución de navegador se conserva en [browser-first-attempt.json](../evidencias-T01B/browser-first-attempt.json); las discrepancias de expectativas del arnés se distinguen de fallos productivos. Un sondeo inicial de compilador falló por comillas de shell y después por resolución del enlace pnpm; se repitió correctamente con realpath y createRequire. Ninguno requirió cambiar paquetes.

## Cierre

- **B01:** Resuelto y registrado en [seguimiento](../SEGUIMIENTO_INCIDENCIAS.md), sin alterar la descripción original de T01.
- **Cambios:** Dos páginas, pruebas/generadores y evidencias T01B; ticket, plan, índice, seguimiento y nota de arquitectura. `dist/` solo regenerado por build.
- **Conservación:** Respaldo T01 verificado (2480 archivos, mismo SHA del manifiesto). Resultados históricos intactos y hashes registrados. Banco, series, capítulos, glosario, comparativas, CSS y progress.ts sin cambios.
- **Pendientes:** B02–B06 permanecen; B07 añadido. No hay migración real ni nuevas dependencias.
- **Continuación:** El usuario ha aclarado expresamente que autoriza T02A después de cerrar T01B. No autoriza corregir B07 ni ejecutar T02B.
