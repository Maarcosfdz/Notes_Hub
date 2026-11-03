# Índice de tickets de Notes Hub

**No ejecutes este índice como una única tarea.** Selecciona un ticket, revisa dependencias y pide a Codex que ejecute solo ese alcance.

| Orden | Ticket | Área | Dependencias |
|---|---|---|---|
| 1 | [T00](T00_auditoria_y_decisiones.md) | Auditoría/decisiones | — |
| 2 | [T01](T01_respaldo_y_regresion.md) | Respaldo/regresión | T00 |
| 2b | [T01B](T01B_corregir_arranque_preguntas_estadisticas.md) | Corrección de arranque B01 | T01 |
| 3 | [T02A](T02A_fuentes_y_recursos.md) | Fuentes y recursos | T01 |
| 3b | [T02A-B07](T02A_B07_corregir_simulacros.md) | Reparación de navegación de simulacros | T01B y T02A |
| 4 | [T02B](T02B_persistencia_local_y_versiones.md) | Persistencia local/versiones | T01 |
| 5 | [T03A](T03A_node_sqlite_y_migraciones.md) | Node + SQLite | T02B |
| 6 | [T03B](T03B_autenticacion_y_proteccion.md) | Autenticación/privacidad | T03A |
| 7 | [T04A](T04A_progreso_remoto_y_simulacros.md) | Progreso remoto/simulacros | T03B |
| 8 | [T04B](T04B_importacion_y_sincronizacion.md) | Importar/sincronizar | T04A |
| 9 | [T05](T05_biblioteca_personal.md) | Biblioteca propia | T03B y T04A |
| 10 | [T06A](T06A_glosarios_y_conceptos.md) | Glosarios/buscador | T02A |
| 11 | [T06B](T06B_cuestionarios_y_componentes.md) | Refactor preguntas | T02B y T04A/B |
| 12 | [T07](T07_estilos_utilidades_y_documentacion.md) | CSS/accesibilidad/herramientas | T02A/B, preferiblemente T06B |
| 13 | [T08](T08_docker_seguridad_y_despliegue.md) | Docker/producción | T03B, T04B y T05 |

El estado vigente está en el [plan](../PLAN_EVOLUCION.md) y el cierre de cada ticket. Los identificadores T02/T03/T04/T06 se desdoblan en A/B para evitar encargos excesivos. Cerrar cada sub-ticket por separado.

Los tickets están redactados para planificar y guiar a Codex, pero no reemplazan revisar la implementación actual ni comprobar versiones vigentes de dependencias externas.
