# Cuestionarios y sesiones (T06B)

La página preguntas.astro conserva render servidor, metadatos, niveles y estructura visual. QuizFilters.astro contiene los controles existentes. Un script procesado por Astro arranca quiz-controller.ts y muestra errores de arranque; no contiene imports inline sin empaquetar.

El controlador coordina carga autenticada del banco, modo/filtros, estado temporal y operaciones remotas. quiz-selection.ts contiene filtro puro, lookup sin modificar índice y validación de cantidad. quiz-view.ts crea opciones con texto seguro. study.ts comparte revisión/corrección por conjuntos; progress-remote.ts gestiona persistencia y errores. No se duplican bancos ni claves. La página no publica el banco en el bundle.

La selección exige la cantidad indicada antes de comprobar; las opciones quedan bloqueadas mientras se guarda y tras confirmación. Un reintento reutiliza UUID, incluida la pérdida de la respuesta HTTP después del commit. La explicación aparece tras comprobar. Los simulacros reanudan cursor confirmado al seleccionar serie; reiniciar crea sesión nueva y conserva resultados anteriores. La última respuesta seguida de recarga finaliza por avance idempotente, sin leer posición 66.

Las pruebas B07 siguen extrayendo la lógica real del controlador y ejecutan las tres series y el control negativo original. Las B01 comprueban scripts extraídos por el compilador y dependencias del bundle SSR; Chromium verifica ambas páginas reales. La prueba de 480 preguntas compara selección invertida, cantidad, filtros y límites. El navegador final recorre las 195 posiciones y comprueba resultados, historial, persistencia, recarga final, reinicio, cambio de serie, fallo de red confirmado, filtros, falladas, aislamiento y temas. No se cambiaron CSS, rutas, contenido ni identificadores durante esta refactorización.

La captura anterior a la extracción está en evidencias-T06B/preguntas-before.astro.txt, fuera del código compilable. Fue necesario usar extensión de texto: tratar una copia histórica como página Astro producía errores de imports relativos sin representar un error del producto. Las evidencias T01/T01B/T02A se mantienen intactas.
