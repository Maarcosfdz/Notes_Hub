# Comprobaciones T01

> Esta sección conserva el procedimiento histórico de T01. Para pruebas actuales usa `pnpm.cmd test:regression` después del build. No ejecutes baseline.mjs ni validadores de entregas antiguas para sobreescribir sus evidencias.

## Suite vigente y respaldo posterior a T06B

El punto duradero está en `../Notes_Hub_Recovery/POST-T06B-20261103-qd1ZEv`. `recovery.mjs verify <ruta>` y `restore-test <ruta>` verifican/restauran en destino nuevo. T01 permanece intacto. Comparación 2480/2062, SHA y restauración: [T07 recovery](../docs/evidencias-T07/recovery.json).

Navegador sobre build: `node docs/reformultation/checks/t07-browser.mjs`, `node docs/reformultation/checks/study-e2e.mjs T07` y `node docs/reformultation/checks/server-e2e.mjs T07`. Ejecutar secuencialmente: usan el mismo puerto local 4330 y requieren Chromium de Playwright. Cuentas, claves y DB se generan fuera del repositorio; no utilizan navegador personal. t07-browser recorre 28 rutas en cinco anchos y dos temas; study-e2e recorre 195 respuestas y regresiones funcionales; server-e2e comprueba privacidad y auth. Las capturas se guardan en evidencias-T07, sin pantalla de credenciales.

La regresión de contenido de T07 compara hashes contra el **snapshot duradero posterior a T06B**, no contra el glosario de 247 anterior. No se cambió una expectativa para ocultar un fallo: T06A autorizó 489 conceptos y T07 exige conservarlos sin alteraciones.

Ejecutar desde la raíz del proyecto con Node compatible con los paquetes instalados (en esta entrega: Node 24.14.0). No instalar nuevas dependencias para estas pruebas. Resultados y límites: [T01](../docs/T01_RESULTADOS.md).

## Comprobar y restaurar el respaldo existente

```powershell
node docs/reformultation/checks/recovery.mjs verify '..\Notes_Hub_Recovery\T01-20261103-fdBKQy'
node docs/reformultation/checks/recovery.mjs restore-test '..\Notes_Hub_Recovery\T01-20261103-fdBKQy'
```

`verify` comprueba el sello del manifiesto y estado Git y tamaño/SHA-256 de cada archivo. Comparar además el hash del manifiesto con el registrado en el informe. `restore-test` siempre crea una carpeta temporal independiente y devuelve su ruta; nunca restaura encima del proyecto. Verifica antes de copiar y comprueba todos los archivos restaurados. No recupera archivos excluidos ni metadatos de Git.

En la carpeta restaurada:

```powershell
node scripts/verify-content.mjs
```

Para una recuperación de uso real, conservar esa copia independiente, revisar configuración local y provisión separada de secretos. Las dependencias se reconstruyen con `pnpm.cmd install --frozen-lockfile`, seguido de `pnpm.cmd build`; esos dos pasos de reinstalación en la copia restaurada **no se ejecutaron en T01**. No copiar `.env` automáticamente desde ubicaciones desconocidas. Recuperar progreso personal mediante su exportación propia, no desde este respaldo de fuentes. No superponer el último commit a la restauración: perdería cambios del árbol no confirmados.

`snapshot` crea otra copia en TEMP y excluye secretos por nombre/patrones, metadatos Git y herramientas regenerables. Incluye archivos sin seguimiento y los PDF históricos ignorados; conserva dist/.astro previos bajo categoría propia. Fallos de lectura detienen la copia. No sustituye una auditoría de secretos ni una copia duradera: mover/copiar el snapshot verificado a almacenamiento privado externo y verificar de nuevo, sin borrar el original. El manifiesto describe exactamente lo incluido y excluido. El script no toca localStorage de ningún navegador.

## Línea base no visual

```powershell
node docs/reformultation/checks/baseline.mjs
pnpm.cmd build
```

`baseline.mjs` guarda JSON y logs en `docs/reformultation/docs/evidencias-T01/`. Ejecuta el verificador y los tests de `progress.ts` mediante TypeScript en memoria con almacenamiento falso. Se espera salida 1 mientras existan los tres fallos documentados. No reinstala paquetes ni corrige la aplicación. Cada runtime y sus fixtures son independientes; los datos brutos se capturan antes de invocar lectores con efectos de migración.

## Navegador con Playwright disponible

```powershell
pnpm.cmd preview --host 127.0.0.1 --port 4329
node docs/reformultation/checks/run-browser-fixture.mjs
```

El segundo comando produce una función para `browser_run_code_unsafe` del conector Playwright, inyectando el banco y fixtures en memoria. Pasar su salida completa como `code`, sin servir esas fixtures por HTTP ni ejecutar el archivo con Node como si fuera una suite autónoma. Usa el navegador del conector, crea un **contexto nuevo**, y lo cierra con `finally`. No navegar ni borrar almacenamiento del contexto que el usuario ya tenga abierto. Los resultados se devuelven como JSON; conservarlos como evidencia.

Opcionalmente pasar prefijos separados por comas para repetir solo escenarios afectados, por ejemplo `node docs/reformultation/checks/run-browser-fixture.mjs 'Navigation:,Light/dark'`. El arnés marca como bloqueadas las pruebas dependientes si los scripts publicados del cuestionario no ejecutan. No inyecta código que repare la aplicación. El itinerario completo de simulacros está preparado, pero no pudo ejecutarse por ese fallo.

La función usa acciones DOM reales, revisa las rutas de dist y solicita enlaces locales. Las capturas de escritorio oscuro y móvil claro se tomaron en otro contexto aislado y se inspeccionaron. No certifica contraste completo, dispositivos físicos, anclas ni enlaces externos. Detener preview al finalizar; en T01 se detuvo la sesión creada para estas pruebas.
