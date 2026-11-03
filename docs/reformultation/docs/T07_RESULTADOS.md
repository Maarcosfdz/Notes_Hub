# T07 — Resultado y evidencia

**Estado: completado.** T08 y producción no ejecutados. No se modificaron esquema SQLite, arquitectura de autenticación, operaciones de datos ni archivos académicos. B05 y B08 (mensajes de guardado) resueltas; L05/L06/L07/L09 cerradas con los límites descritos.

## Recuperación previa, antes de modificar la aplicación

T01 permanece en `../Notes_Hub_Recovery/T01-20261103-fdBKQy`, sin sobrescritura ni eliminación. Su manifiesto SHA-256 sigue siendo `394a5764d145ddeeb9becf14124f38067684ce123f952c49c8299c7559601ae5`.

La copia posterior a T06B se copió desde `%TEMP%/notes-hub-T01-recovery-qd1ZEv` a **`../Notes_Hub_Recovery/POST-T06B-20261103-qd1ZEv`**. Se conservaron también el origen TEMP y su manifiesto. SHA-256 del manifiesto duradero: `ca1cb1f8034a7ed96aa8e0af3a8c71866ea5019e30aea02c7775c97f35c88d48`. Se verificaron 2062 archivos y se restauraron todos, con tamaño/hash idénticos, en `%TEMP%/notes-hub-T01-restore-I2l7Gb`. No se sobrescribió el proyecto. [Registro completo](evidencias-T07/recovery.json).

La copia fue una escritura externa al workspace, autorizada por el usuario y el permiso de ejecución correspondiente. No se trasladó borrando el único origen: la copia verificada queda duradera y se conservó TEMP como precaución. Secretos, credenciales, SQLite de usuario y dependencias regenerables se provisionan por separado; no se añadieron al respaldo compartible.

| Grupo | T01 | Posterior a T06B | Diferencia explicada |
|---|---:|---:|---|
| dist | 723 | 59 | −664 artefactos: sitio estático anterior frente a build SSR, sin duplicar documentos privados en cliente |
| public / private | 687 / 0 | 0 / 744 | Las 687 rutas originales existen bajo private/study-assets; 57 recursos incorporados por T02A, conservando URL protegida |
| docs | 25 | 167 | +142 documentación, pruebas y evidencias |
| src | 46 | 74 | +28 servidor, adaptadores y módulos |
| scripts | 5 | 23 | +18 herramientas mantenidas y trazabilidad |
| .astro | 8 | 9 | +1 artefacto regenerable |
| aws-clf-c02 | 490 | 490 | Ninguna fuente editorial eliminada |
| tmp | 487 | 487 | Ningún histórico/PDF eliminado |
| Configuración raíz y resto | 9 | 9 | Mismas rutas; cambios de versión/configuración autorizados en tickets anteriores |
| **Total** | **2480** | **2062** | **−418 = −664 −687 +744 +142 +28 +18 +1** |

Fuera de dist/public no falta ninguna ruta de T01. Las publicaciones antiguas tienen correspondencia privada; las fuentes, contenido, migraciones embebidas en src/server, scripts y configuración necesaria de la copia post-T06B suman **1336 archivos comprobados contra el árbol al inicio de T07**, sin diferencias. Los cambios previos de capítulos en T02A fueron de rutas/metadatos, con conservación del cuerpo docente probada; el banco coincide con T01. Recuento de archivos no equivale a pérdida de información.

Recuperación: `node docs/reformultation/checks/recovery.mjs verify <ruta>` y `restore-test <ruta>` crean/verifican un destino aislado. Las dependencias se reconstruyen desde el lockfile y los secretos se proporcionan externamente. No superponer un reset de Git, una BD activa ni una copia que ignore WAL. La restauración ensayada verifica todos los bytes, pero no se reinstalaron dependencias en el directorio restaurado durante T07; el build se ejecuta en el checkout de desarrollo.

## Limpieza y cambios aplicados

- **L05**: base de action-button centralizada; estados/contextos siguen separados por especificidad. Tokens de botón, borde de controles y grupos, sin dependencias nuevas ni sistema de diseño nuevo. Se conserva ancho de biblioteca/lectura, serif/sans, fondos cálidos y terracota.
- **B05**: tablas Markdown envueltas sin reescribir celdas; max-width/min-width en contenedores y scroll horizontal local. Pre/código y figuras contenidos. Solo regiones que realmente desbordan entran en orden de tabulación. Scope de cabeceras generado y nombre accesible del scroll. CSS fallback conserva información antes de JS; figuras enlazan a su original autenticado.
- **L06**: botón principal blanco/terracota oscuro en ambos temas, texto secundario más oscuro en claro y bordes de control distinguibles; grupos I–IV y secciones con texto/color. Menú móvil nativo con Escape; foco en summary, regiones y opciones; skip link enfoca main. Selección/corrección con texto y borde, importación de fichero por teclado. Tras comprobar/avanzar, foco sigue el cuestionario. Login asocia errores a campos; logout ofrece error/reintento. Región viva estable para guardado: corregido un fallo previo que trataba mensajes string de progreso/éxito como error genérico. No cambió la operación de persistencia.
- **L07**: inventario de 26 herramientas con SHA, consumidores textuales y estado; 487 archivos tmp conservados. Solo verify-content.mjs tiene seguimiento/historia Git inicial; para los demás se documentan snapshots y tickets, sin inventar commits anteriores. Ningún comando mantenido depende de tmp. Herramientas peligrosas/una sola ejecución se distinguen y no se vuelven a ejecutar. **Cero archivos eliminados o movidos durante la limpieza.** [Inventario](evidencias-T07/tools-inventory.json).
- **L09**: guía admite .md/.mdx conforme al glob real, explica ID estable y edición editorial; progreso descrito por cuenta, no navegador. Arquitectura corrige referencias obsoletas a sesiones solo en memoria. Requisitos R12/R19 se alinean con lo ya implementado. Instrucciones históricas de pruebas se señalan como tales, evitando sobrescribir evidencias.

Archivos de aplicación: src/styles/{tokens,global}.css; src/layouts/BaseLayout.astro; src/components/StudyTools.astro; src/scripts/{content-accessibility,progress-remote,quiz-controller}.ts; src/config/study-groups.ts; src/pages/{login,como-aportar}.astro; src/pages/materias/aws/{terminos,estadisticas}.astro. Herramientas y tests: run-regressions, consolidación puntual CSS, arnés B07, phase-check y t07*. Documentación: Arquitectura, Requisitos, Estilo, Limpieza, plan, ticket, seguimiento, guías de scripts/pruebas y este informe. [Lista exacta con hashes](evidencias-T07/changed-files.json): 34 archivos de código/documentación añadidos o modificados frente al snapshot; logs/capturas se agrupan aparte. No se confunden con cambios anteriores de Git.

## Conceptos y SQLite

489 conceptos: sin duplicados canónicos exactos/normalizados, colisiones de alias ni definiciones exactamente repetidas. Referencias a capítulos y 380 apartados fuente validadas. El formato no tiene un ID de concepto independiente: identidad por materia/nombre canónico, noteId como destino (puede compartirse). **Siete pares relacionados o ambiguos pendientes de revisión humana**, sin fusionar ni cambiar contenido: [calidad de datos](evidencias-T07/glossary-quality.json). No se afirma validación pedagógica de los 489 conceptos.

La advertencia se reproduce en Node 24.14.0 importando node:sqlite con una base en memoria; no la origina el motor SQLite 3.51.2 ni la aplicación. [Investigación y fuentes oficiales](T07_SQLITE.md), [traza reproducida](evidencias-T07/sqlite-runtime.json). Driver y dependencias permanecen iguales. Antes de desplegar: fijar un runtime soportado y repetir compatibilidad/recuperación en la imagen destino; si la política exige binding estable, evaluar better-sqlite3 en un ticket específico, sin cambiar a ciegas sobre datos reales.

## Comprobaciones y límites

- Verificación de contenido, tipos/build y **37 tests automatizados PASS**, incluyendo B01/B07, importación/idempotencia, aislamiento, backup/restauración y hashes inmutables de fuentes/contenido/recursos. [Validación](evidencias-T07/validation.json).
- content:check sin divergencias; 4157 referencias y 1958 fragmentos de publicación sin errores.
- Chromium compilado: matriz de 320/375/390/768/1440 × claro/oscuro; 28 rutas por combinación, incluidos 18 capítulos. Cada combinación contempla 90 tablas, 190 imágenes y siete bloques de código. Sin overflow de documento; tablas anchas conservan scroll local. Contraste real del botón: 5,43:1 en ambos temas. Texto/tokens y bordes tienen test específico. [Matriz, teclado y estados](evidencias-T07/responsive.json).
- Tres simulacros completos: **195 preguntas, orden correcto, 52/65 en cada uno**, historial/estadísticas, recarga final, reinicio, cambio/reanudación, filtros, falladas, red con commit confirmado y retry sin duplicar; biblioteca A/B y dos dispositivos PASS. [Regresión funcional](evidencias-T07/browser.json).
- Privacidad/auth: **PASS**, 36 rutas/744 recursos, ambas cuentas, cookies, origen ajeno, registro público bloqueado, logout/caducidad/revocación/recuperación y límite de intentos. [Seguridad final](evidencias-T07/security.json). No se ensayó proxy/TLS real; atributos Secure se comprobaron mediante petición HTTPS sintética.

Pruebas exclusivamente sintéticas, sin navegador personal ni servidor real. Capturas antes de T07 en evidencias-T06B y después en evidencias-T07. La inspección por el agente detectó una ampliación no deseada del ancho al introducir contención CSS: se corrigió manteniendo los límites originales y se añadió comprobación de ancho. También se corrigió un error de sintaxis del nuevo test antes de cerrar; no se relajaron criterios. Los tests de contenido de T07 toman el glosario de 489 del snapshot post-T06B como línea base autorizada, no el histórico de 247.

Se revisaron capturas por el agente: [cuestionario 1440 claro](evidencias-T07/quiz-1440-light.png), [320 oscuro](evidencias-T07/quiz-320-dark.png), [375 claro](evidencias-T07/quiz-375-light.png), [tabla izquierda clara](evidencias-T07/table-left-light.png), [última columna oscura](evidencias-T07/table-right-dark.png) y [código oscuro](evidencias-T07/code-dark.png). Se conserva la estética y se comprueba acceso horizontal a información que no cabe simultáneamente. No se afirma auditoría WCAG completa, revisión independiente humana, lectores de pantalla NVDA/VoiceOver, otros motores ni dispositivos físicos. Las tablas de dos dimensiones conservan su desplazamiento propio según el criterio [Reflow de W3C](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html); la comprobación de contraste sigue los umbrales de [W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Guía utilizada: skill ui-ux-pro-max, reglas estáticas; el buscador Python no estaba ejecutable en este entorno, no se presentan búsquedas no realizadas como evidencia.

## Antes de T08 (no ejecutado)

Mantener ambos respaldos duraderos y comprobar su almacenamiento externo/off-host. T08 debe definir Docker/volúmenes, propietario y permisos de BD/secretos, runtime exacto, HTTPS/proxy/cache, límite de peticiones, backups SQLite consistentes y recuperación operativa, actualización/reversión y carga del servidor único. Repetir pruebas negativas en el proxy real y en la imagen final. No servir private ni un dist estático histórico; no usar TEMP para datos productivos. Resolver o aceptar explícitamente la estabilidad del binding. La revisión humana semántica y de accesibilidad completa sigue independiente de los checks automatizados.
