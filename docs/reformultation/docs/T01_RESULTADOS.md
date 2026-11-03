# T01 — Recuperación y línea base de regresión

Fecha: 2026-11-03. **Completado con incidencias de línea base, sin cambios productivos.** T00 revisado y T01 autorizado expresamente por el usuario. T02A y los demás tickets no se han iniciado.

Referencias: [ticket T01](tickets/T01_respaldo_y_regresion.md), [T00](T00_AUDITORIA.md), [Requisitos](../../REQUISITOS.md), [Arquitectura](../../ARQUITECTURA.md). Este informe registra resultados de pruebas; no declara implementado el objetivo multiusuario.

## Archivos de esta entrega

- Completados los campos de cierre de T00 con evidencia ya disponible; corregidas tildes sustituidas por `?` en su cierre, el plan y las anotaciones del inventario JSON. En el inventario no se cambiaron destinos ni referencias.
- Actualizados T01 y el plan.
- Añadidos este informe, [recuperación y comandos](../checks/README.md), `recovery.mjs`, `fixtures.mjs`, `progress.test.mjs`, `baseline.mjs`, `browser.cjs` y `run-browser-fixture.mjs` bajo `docs/reformultation/checks/`.
- Evidencias bajo [evidencias-T01](evidencias-T01/baseline.json): resultados JSON, salida TAP de pruebas, verificador, resumen de compilación y dos capturas sintéticas.
- La compilación regeneró `dist/` y `.astro/`; sus versiones previas están respaldadas por separado en el manifiesto. No se modificaron `src/`, `public/`, `aws-clf-c02/`, `scripts/`, configuración ni dependencias. Comparación SHA-256 con el respaldo: cero diferencias en archivos previos fuera de documentación y salidas generadas.

## Respaldo y restauración

Respaldo duradero, fuera del repositorio y de la publicación:

```text
C:\Users\mroma\Desktop\FIC\master\1.Informática como servizo\Teoria\aws\Notes_Hub_Recovery\T01-20261103-fdBKQy
```

Se creó primero en `C:\Users\mroma\AppData\Local\Temp\notes-hub-T01-recovery-fdBKQy`, antes del build y las pruebas. Después se copió a la carpeta duradera mediante la operación autorizada de escritura externa. Ambas copias tienen el mismo manifiesto validado:

```text
SHA-256 manifest.json:
394a5764d145ddeeb9becf14124f38067684ce123f952c49c8299c7559601ae5
```

| Categoría | Archivos | Bytes |
|---|---:|---:|
| Proyecto: fuentes, recursos, configuración, lockfile, documentos y temporales relevantes | 1265 | 207990009 |
| Entradas históricas `tmp/pdfs/`, incluidas aunque Git las ignore | 484 | 99600737 |
| Salidas previas `dist/` y `.astro/` | 731 | 144193860 |
| **Total** | **2480** | **451784606** |

El recorrido no depende de que Git conozca el archivo. Conserva las eliminaciones previas como ausencia: no recupera automáticamente MDX antiguos del último commit. Se guardó `git-status.txt` con archivos modificados y sin seguimiento. El manifiesto contiene rutas, tamaños, categorías y SHA-256; `integrity.json` sella manifiesto y estado Git. No se copia el respaldo al repositorio ni a `public/`.

Exclusiones reales: `.git/`, `node_modules/`, `.pnpm-store/`, `.pdf-tools/` y `.playwright-mcp/`. Dependencias/herramientas son regenerables; el estado de herramientas de navegador puede contener datos privados. `.git/` se excluye para no copiar configuración, remotos, hooks ni historia sin revisar: esta es una recuperación del árbol de trabajo, no del índice, ramas ni metadatos completos de Git. El repositorio original se mantiene intacto; HEAD observado `2677e842b7e3c463164cef42ab00899de316b22f`.

El script excluye nombres de secretos, `.env*`, claves, bases de datos y exportaciones personales, y comprueba patrones de credenciales en textos antes de copiarlos. No hubo exclusiones adicionales por esos patrones en esta ejecución; `.npmrc` solo contiene opciones del gestor, sin tokens. Esto no certifica cualquier archivo binario como compartible: el respaldo sigue siendo privado. No se leyeron perfiles ni datos reales de usuario; el progreso personal continúa en el navegador y **no forma parte de este respaldo de código**. No hay SQLite implementado. Las fixtures y las capturas de la entrega son sintéticas.

Restauración ejecutada sin sobrescribir el proyecto:

```text
C:\Users\mroma\AppData\Local\Temp\notes-hub-T01-restore-dntL9b
```

Se copiaron los 2480 archivos desde el snapshot inicial y se verificó tamaño y SHA-256 de todos ellos. Resultado PASS. En esa copia se ejecutó `node scripts/verify-content.mjs`, también PASS con los recuentos originales. La copia duradera se verificó después contra el mismo manifiesto sellado. No se instalaron dependencias ni se compiló la restauración: el ensayo comprueba recuperación binaria y funcionamiento del verificador, no una reinstalación desde red. Los directorios temporales pueden limpiarse por el sistema; el respaldo duradero es la referencia que se debe conservar. No se han borrado las copias de prueba.

El snapshot representa el punto de recuperación **anterior a las pruebas**, con el cierre inicial de T00 y el script de recuperación. Las pruebas y documentos finales añadidos después no se atribuyen al snapshot inicial.

## Entorno efectivo

| Elemento | Versión |
|---|---|
| Node.js | 24.14.0 |
| pnpm | 11.1.2, ejecutado mediante `pnpm.cmd` |
| Astro | 7.4.2 |
| MDX | 8.1.1 |
| TypeScript | 5.9.3 |
| @astrojs/check | 0.9.10 |
| Navegador automatizado | Chromium 156.0.8078.80 |

El proyecto declara Node `>=22.12.0`, pero Astro y MDX instalados exigen `>=22.23.4`. La versión utilizada satisface la exigencia efectiva. No se cambió el contrato ni se actualizaron paquetes; pendiente para T03A.

## Validaciones y resultados

| Comprobación | Resultado | Alcance |
|---|---|---|
| `pnpm.cmd verify:content` | PASS | 18 capítulos, 480 preguntas, 247 términos, 16 comparativas |
| `pnpm.cmd build` | PASS | Incluye `astro check`: 25 archivos, 0 errores/avisos/hints; 35 páginas estáticas |
| Pruebas de series | PASS | Tres series de 65, IDs existentes sin solapamiento y cuotas por dominio 16/19/22/8; banco con 443 preguntas simples y 37 múltiples |
| Pruebas de persistencia real en VM aislada | **9 PASS / 3 FAIL** | Ejecutan `progress.ts` transpilado en memoria; sin reimplementar su lógica |
| Escenarios de navegador | **7 PASS / 2 FAIL / 5 BLOCKED** | Contextos nuevos y cerrados al terminar; almacenamiento propio |
| Restauración y hashes | PASS | 2480 archivos; verificador ejecutado en copia restaurada |

Salidas: [TAP de persistencia](evidencias-T01/progress.log), [contenido](evidencias-T01/content.log), [build resumido](evidencias-T01/build.log), [navegador](evidencias-T01/browser.json). No se presenta el resumen del build como una transcripción íntegra.

Pruebas aisladas que pasan: copia de claves `awsNeon*` sin alterar originales; respaldo bruto de historial; filtrado de intentos reformulados; segunda migración idempotente; marca del banco actual que conserva intentos; roundtrip de exportación/importación moderna; importación legacy con mapa de lectura; rechazo de JSON inválido o sin AWS; persistencia en nuevo runtime y separación por materia; lectura de JSON corrupto sin sobrescribirlo. El test estructural de las series completa los nueve casos aprobados.

En navegador pasan: navegación área → materia → Apuntes → capítulo; respuesta y renderizado de las 35 rutas; 232 destinos locales de enlaces e imágenes de los 18 capítulos con HTTP satisfactorio; búsqueda por concepto/alias y grupo y búsqueda general IAM; favoritos y lectura tras recarga; tema claro/oscuro tras recarga con colores finales comprobados; enlace inicial de teclado para saltar al contenido.

Capturas inspeccionadas: [escritorio oscuro](evidencias-T01/dark-desktop.png) y [tabla en móvil claro](evidencias-T01/light-mobile-table.png). Se conserva la estética existente. No son una auditoría completa de contraste, todos los controles ni todos los tamaños. Las respuestas HTTP no validan anclas, contenido interno de PDF, decodificación de todas las figuras ni referencias externas.

## Incidencias conservadas como línea base

| ID | Hallazgo reproducido | Consecuencia / trabajo posterior |
|---|---|---|
| B01 — crítico funcional | `preguntas.astro` y `estadisticas.astro` usan `<script lang="ts">`; sus salidas HTML conservan imports sin `type="module"`. Chromium informa `Cannot use import statement outside a module` | El cuestionario queda vacío y las estadísticas no se inicializan. Build pasa igualmente. Corregir en un encargo explícito antes de dar por validada cualquier evolución del cuestionario |
| B02 | Importación con `version: 999` aceptada | Falta validar versión y formato antes de escritura; T02B |
| B03 | Importación legacy acepta `progress: [id]`, pero `getProgress()` devuelve `{}` | Compatibilidad incompleta del formato aceptado; T02B |
| B04 | Exportación omite `history-before-bank-2026-480` cuando solo existe ese respaldo separado | La exportación no garantiza conservar todas las evidencias brutas; T02B |
| B05 | Capítulo introductorio: `scrollWidth=421` con viewport de 390 px | Tabla sin contención suficiente; texto cortado visible en captura; futura corrección responsive |
| B06 | Mínimo Node declarado distinto al instalado requerido | Ajustar configuración/documentación en T03A, sin actualizar ahora |

B01 se confirmó en HTML de `dist/materias/aws/{preguntas,estadisticas}/index.html` y por errores reales de ejecución; no es un fallo de disponibilidad del servidor. Las cinco pruebas BLOCKED son filtros de preguntas; respuestas simples/múltiples y falladas; recorrido completo de simulacros; estadísticas después de recarga; descarga/importación desde interfaz. **No se respondieron 195 preguntas en navegador ni se atribuye ese resultado a la verificación estructural de las series.** Importación/exportación y migraciones sí se probaron por separado sobre el módulo productivo aislado.

Los tres tests FAIL formulan garantías deseadas y se mantienen rojos de forma deliberada para evidenciar fallos existentes. El comando devuelve código 1. No se han marcado como éxito ni corregido mediante mocks. Los mocks solo sustituyen almacenamiento, descarga y entorno DOM en pruebas unitarias.

Errores recuperables de herramientas: PowerShell bloqueó `pnpm.ps1`; se usó `pnpm.cmd` sin alterar política. Leer package.json mediante exports de @astrojs/check falló; se leyó su archivo instalado directamente. Una ruta supuesta de CLI de Astro no existía; preview arrancó mediante el comando del proyecto. El generador inicial de fixture de navegador sustituyó un comentario en lugar del marcador; se corrigió. La primera prueba de navegación omitía el índice de Apuntes y luego encontró dos h1; se ajustó el recorrido y selector a la estructura existente. La medición del tema se ajustó para esperar el fin de ambas transiciones. Solo se repitieron escenarios afectados por esos errores del arnés. La suite de persistencia se repitió al guardar logs y reforzar la cuota por dominio.

Git advierte falta de acceso a su ignore global; el respaldo no depende de esa configuración. La consola PowerShell externa también mostró un aviso de PSReadLine; la copia final terminó y pasó la verificación. Ningún fallo se resolvió cambiando código de aplicación.

## Antes de T02A

El respaldo y la restauración permiten continuar con cambios editoriales cuando se autoricen, pero la línea base no es verde. Mantener el respaldo duradero y sus exclusiones; no usar un commit como sustituto. T02A debe validar anclas y referencias transitivas, no borrar candidatos por ausencia de enlaces directos y no publicar como privadas rutas actualmente estáticas. Las pruebas de cuestionario bloqueadas requieren un encargo de corrección funcional y repetición posterior; no asumir que una modificación editorial las arreglará.

T01 queda completado con incidencias documentadas. No implica que B01–B06 estén corregidas ni autoriza T02A.
