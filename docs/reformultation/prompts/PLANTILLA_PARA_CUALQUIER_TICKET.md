# Plantilla de prompt para ejecutar tickets posteriores

**Usar solo después de revisar/cerrar el anterior y autorizar este concreto. Reemplaza `[ID]` y `[RUTA]`.**

Ejecuta **únicamente el ticket [ID]** del archivo `[RUTA]` en Notes Hub.

Lee los cuatro documentos de referencia, `docs/PLAN_EVOLUCION.md`, el ticket y el estado actual del código. Comprueba dependencias, decisiones cerradas, cambios del árbol Git y que exista respaldo/restauración suficiente si toca archivos o datos. No toques otras fases.

Implementa el objetivo y sus criterios de aceptación; resuelve fallos recuperables dentro del alcance. Antes de modificar datos reales, producción, archivos desconocidos o realizar una operación destructiva, detente y pide aprobación específica. Ejecuta pruebas relevantes, verifica regresiones y registra tanto lo comprobado como lo que no se pudo probar. Actualiza solo los documentos pertinentes y el estado del ticket.

Entrega: cambios realizados, pruebas con resultados, riesgos y límites, reversión disponible y si puede solicitarse revisión para autorizar el siguiente ticket. **No ejecutes automáticamente otro ticket.**
