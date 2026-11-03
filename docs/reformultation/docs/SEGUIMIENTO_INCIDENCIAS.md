# Seguimiento de incidencias

La evidencia original permanece en [T01](T01_RESULTADOS.md); este archivo registra su evolución, sin reescribir la línea base.

| ID | Estado | Evidencia / siguiente trabajo |
|---|---|---|
| B01 | **Resuelta en T01B**, 2026-11-03 | Scripts empaquetados por Astro; práctica y estadísticas ejecutadas. [Ticket y pruebas](tickets/T01B_corregir_arranque_preguntas_estadisticas.md) |
| B02 | Resuelta en T02B | Versión/estructura/tamaño validados antes de escribir |
| B03 | Resuelta en T02B | Arrays legacy normalizados a mapas; originales conservados |
| B04 | Resuelta en T02B | Exportación v2 conserva ambos respaldos y valores brutos; roundtrip probado |
| B05 | **Resuelta en T07** | Contención/scroll local sin quitar columnas; 320/375/390/768/1440, ambos temas, tablas/código/figuras y scroll por teclado PASS. [Resultado](T07_RESULTADOS.md) |
| B06 | Resuelta en T03A | Contrato fijado a Node >=24.14.0, runtime probado con Astro/SQLite |
| B07 | **Resuelta en T02A-B07**, 2026-11-03 | La búsqueda deja de modificar el índice; avance único, final y reinicio temporal verificados. Tres recorridos completos (195 preguntas), cero excepciones. [Cierre](tickets/T02A_B07_corregir_simulacros.md). Se conserva el [diagnóstico original](evidencias-T01B/exams.json) |

Secuencia T02B–T06B: B01/B07 conservan regresiones automatizadas, adaptadas al build SSR y al controlador extraído. Cierre T06B: 195 respuestas remotas en Chromium, 52/65 en cada serie; recarga, final, reinicio, historial y reintento después de commit PASS. B02–B04 mantienen compatibilidad local y cuentan con importación remota explícita probada. No quedan defectos críticos detectados en los gates ejecutados. B05 sigue pendiente de T07; no se ha modificado CSS para ocultarlo. SQLite de Node conserva advertencia experimental; proxy/TLS y operación productiva pendientes de T08. [Resultados y límites](RESULTADOS_T02B_T06B.md).

T07: B05 cerrada conservando la descripción y evidencia históricas anteriores. B01/B07 pasan de nuevo, incluidos 195 pasos y fin/reinicio/reanudación. **B08 — mensajes de guardado engañosos, resuelta:** el presentador trataba strings de guardado/éxito como error genérico; ahora acepta texto y estado, con región viva estable y pruebas de Guardando/Guardado/error. No cambian operaciones de datos. Siete candidatos semánticos del glosario siguen pendientes de revisión humana; no son duplicados confirmados. Advertencia SQLite investigada sin cambiar driver. No quedan fallos críticos detectados en las pruebas ejecutadas; T08 no autorizado.
