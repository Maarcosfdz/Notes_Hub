# Limpieza pendiente

Inventario vivo con estado tras T07. Las evidencias históricas se conservan y las reglas viven en [Requisitos](REQUISITOS.md), [Estilo](ESTILO.md) y [Arquitectura](ARQUITECTURA.md). [Cierre T07](reformultation/docs/T07_RESULTADOS.md). T08 no ejecutado.

| ID | Hallazgo | Acción propuesta | Comprobación de cierre |
|---|---|---|---|
| L01 | Resuelto en T02A: fuentes y destinos declarados | Flujo mantenido e idempotente con manifiesto; ver [procedimiento](FLUJO_CONTENIDO.md) | Prueba de edición/figura en copia; cuerpo docente conservado; segunda sincronización sin cambios |
| L02 | Inventariado en T02A; sin borrados ni consolidación física | Dependencias directas/transitivas y consumidores publicados; conservación de publicaciones históricas | Rutas/anclas locales y binarios comprobados; candidato sin consumidor conservado; detalle en [T02A](reformultation/docs/T02A_RESULTADOS.md) |
| L03 | Resuelto en T02B/T04A/T04B | Adaptadores local/remoto, operaciones por cuenta y migración explícita | Persistencia, aislamiento, importación y reintentos pasan; T07 corrige solo presentación de mensajes |
| L04 | Resuelto en T06B | Controlador, selección/filtros, vista y persistencia separados | B01/B07 y 195 respuestas remotas repetidas en T07, sin pérdida de historial |
| L05 | Resuelto en T07 | Base action-button centralizada; tokens y reglas contextuales conservados | 37 tests, capturas y matriz responsive pasan; no se introduce otro sistema de diseño |
| L06 | Resuelto en el alcance de T07 | Paleta con texto, contraste, foco, menú móvil, regiones vivas y B05 | Cinco anchos/dos temas, teclado, tablas/código/figuras y estados pasan; no certifica WCAG completa |
| L07 | Revisión cerrada en T07; conservación deliberada | [Inventario de consumidores y clasificación](reformultation/docs/evidencias-T07/tools-inventory.json); ayudas históricas claramente separadas | Ningún proceso mantenido depende de tmp; 487 archivos preservados; cero borrados/movimientos de limpieza |
| L08 | Integrado en T06A; calidad estructural revisada en T07 | 489 entradas, sin duplicados exactos ni colisiones; 247 anteriores conservadas | Destinos/alias validados; siete pares semánticos relacionados pendientes de revisión humana, sin afirmar verificación pedagógica |
| L09 | Resuelto en T07 | Guía Markdown/MDX, ID estable, fuentes editoriales y comandos actuales | Cargador real y ayuda coinciden; corregidas referencias obsoletas a progreso local y sesiones temporales |

## Orden sugerido

Primero L01–L02 para fijar el flujo de contenido y recursos. Después L03–L04 para consolidar lógica con respaldo y comprobaciones de comportamiento. Abordar estilos con revisión visual y herramientas/documentación según la tarea relacionada.

No toda copia es un error: original docente, edición revisada, publicación y respaldo pueden coexistir. El objetivo es que cada dato tenga origen claro y copias justificadas y reproducibles.

## Mantener una referencia por asunto

Un requisito nuevo se añade solo a Requisitos; una decisión visual, a Estilo; una decisión técnica aplicada, a Arquitectura. Al resolver una fila se actualiza esta lista. El README enlaza esas referencias. Los informes de entregas anteriores son historia, no sustituyen la especificación actual.
