# T06A — Integración semántica de glosarios III/IV y buscador

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Alta
- **Dependencias:** T02A y fuentes/glosarios originales disponibles
- **Referencias:** L08; R05, R03, R17

## Objetivo

Completar la cobertura del buscador de conceptos de AWS, manteniendo calidad semántica y referencias a apuntes correctos.

## Alcance y archivos a inspeccionar

Revisar `reference/glossary.json`, esquema de entradas (término, etiqueta, grupo, ID de apunte, definición, alias), buscador, glosarios integrales de Bloques III/IV, capítulos, comparativas y tabla de cobertura. Confirmar que las fuentes están presentes antes de deduplicar.

## Trabajo solicitado

1. Inventariar 247 conceptos actuales y comparar con glosarios integrales III (reportado: 225 entradas) y IV (reportado: 155) sin sumarlos ingenuamente: hay términos solapados.
2. Crear reglas de equivalencia canónica, variante de nombre y alias real. No confundir servicios relacionados, subtipo o componente con sinónimo.
3. Proponer mapeos por término; resolver conflictos con evidencia del capítulo y mantener enlaces `noteId` existentes.
4. Integrar definiciones solo en formato activo y con procedencia, evitando reemplazar definiciones buenas por textos más pobres.
5. Crear validador semántico/estructural: unicidad canónica por ámbito, alias, links a apuntes, grupos, referencias, caracteres UTF-8.
6. Probar búsqueda por término, alias y grupo, así como diseño móvil y paginación si aplica.

## Criterios de aceptación

- Ninguna de las 247 entradas previas desaparece sin decisión explícita y respaldo.
- Glosarios III y IV quedan representados con informe de fusionados/nuevos/conflictos.
- Sin duplicados semánticos evidentes ni alias inventados; referencias a capítulos existentes.
- Buscador conserva funcionamiento y comparativas siguen intactas.
- Diferenciar verificación de formato de revisión semántica humana.

## Validación y evidencias

Pruebas de búsqueda, unicidad normalizada, rutas `noteId`, inspección de ejemplos de alias ambiguos, verificador de contenido y build. Aportar tabla de conflictos si quedan pendientes.

## Fuera de alcance

No generar más preguntas ni editar contenido completo de los capítulos sin necesidad; no modificar BD de usuarios. No sumar automáticamente 247+225+155.

## Riesgos / reversión

Riesgo: pérdida de términos o enlaces incorrectos. Exportar snapshot, informe de diff y mapeo reversible; no fusionar automáticamente conceptos distintos solo por similitud textual.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; 489 conceptos integrados con mapa semántico
- **Fecha / commit:** 2026-11-03; sin commit por árbol previo no aislado
- **Archivos modificados:** glossary.json, glossary-provenance.json, integrador/validador, snapshot y GLOSARIO_INTEGRADO.md; teoría/banco/comparativas intactos.
- **Comprobaciones ejecutadas y resultados:** Contenido, tipos, build y 25 tests PASS (evidencias-T06A/validation.json). 247 entradas previas conservan definiciones/noteId; 380 mapas y anclas validados. Chromium: alias/grupos/enlaces/buscador/móvil y 195 respuestas remotas PASS (evidencias-T06A/browser.json).
- **Comprobaciones no ejecutadas / motivo:** Sin revisión humana pedagógica independiente ni actualización externa de las fuentes AWS.
- **Problemas y decisiones abiertas:** 242 nuevos, 138 correspondencias. Separadas herramientas SCT/Schema Conversion retirando sus falsos alias del grupo contextual, que se conserva. Suite/componentes, Health servicio/UI/API y soporte histórico mantienen identidad distinta.
- **Respaldo / reversión probada:** Snapshot exacto de 247 conceptos y fuentes originales conservados; integración reproducible e idempotente con rechazo de ediciones nuevas no revisadas.
- **Autorización para siguiente ticket:** T06B autorizado por secuencia y gate satisfecho. Último ticket; no T07/T08.
