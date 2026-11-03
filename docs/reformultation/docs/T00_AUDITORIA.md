# T00 — Evidencias y decisiones

Fecha: 2026-11-03. Referencia HEAD: `2677e842b7e3c463164cef42ab00899de316b22f`. El árbol tiene cambios previos; HEAD no representa por sí solo la aplicación auditada. Auditoría documental, sin cambios funcionales.

Referencias vigentes: [Arquitectura](../../ARQUITECTURA.md), [Requisitos](../../REQUISITOS.md), [Estilo](../../ESTILO.md), [Limpieza](../../LIMPIEZA_PENDIENTE.md). El paquete está realmente en `docs/reformultation/`; no en las rutas de extracción sugeridas por el prompt original.

## Inventario y exposición

[Inventario textual completo](T00_INVENTARIO.json): 11 archivos de rutas, 687 archivos públicos y 4135 referencias extraídas en fuentes textuales. Registra consumidores inmediatos; encadenar sus aristas permite seguir referencias transitivas en Markdown publicado. No interpreta referencias calculadas, imports, enlaces internos de PDF ni valida anclas: esta parte exige el verificador mantenido de T02A. Una lista vacía de consumidores no autoriza borrar.

Todas las rutas actuales son estáticas por `astro.config.mjs`. Familias:

| Fuente en `src/pages/` | URL | Situación y objetivo |
|---|---|---|
| `index.astro` | `/` | Biblioteca; propuesta: sesión, con login público separado |
| `buscar.astro` | `/buscar/` | Expone contenido buscable; requiere sesión |
| `como-aportar.astro` | `/como-aportar/` | Guía; propuesta: pública si no contiene estudio privado |
| `areas/[area].astro` | `/areas/:area/` | Generada desde catálogo; propuesta: sesión |
| `materias/[subject]/index.astro` | `/materias/:subject/` | Generada desde catálogo; requiere sesión |
| `materias/[subject]/[note].astro` | `/materias/:subject/:note/` | Generada desde colección; requiere sesión |
| `materias/aws/{apuntes,terminos,preguntas,comparativas,estadisticas}.astro` | URLs homónimas | Estudio; requiere sesión |

No hay rutas API, middleware de autenticación ni login. `dist/materias/aws/preguntas/index.html` y `dist/materias/aws/terminos/index.html` existen: evidencia de HTML directamente publicable sin sesión, no prueba HTTP ni de compilación vigente. `dist/` puede estar desactualizado. El banco importado en el script del cuestionario pasa al cliente: revisar también bundles e índices de búsqueda si se exige privacidad del contenido.

`public/docs-aws/`, `public/study-docs/` y `public/study-figures/` se clasifican como estudio, incluidas fuentes enlazadas transitivamente. Actualmente se publican directamente. Futuro: sacarlas de la publicación directa y servirlas por ruta autenticada con resolución segura de identificadores, sin permitir recorridos de directorio. Los recursos generales se permitirán expresamente tras clasificación. No mover nada hasta contar con equivalencia de enlaces.

## Persistencia actual

Evidencias: `src/scripts/progress.ts`, `src/pages/materias/[subject]/[note].astro:34–47`, `src/pages/materias/aws/estadisticas.astro:48`, `src/layouts/BaseLayout.astro:43–53`. Búsqueda de `localStorage|sessionStorage` en `src`: no se encontraron otros consumidores ni uso de sessionStorage.

| Clave | Forma / efectos |
|---|---|
| `studyTheme` | Preferencia visual local; no necesita sincronizarse inicialmente |
| `awsNeonStats`, `awsNeonBookmarks`, `awsNeonProgress` | Legado: se copian si falta destino; las lecturas también usan favoritos/progreso como fallback |
| `study:<subject>:migrated` | Marca de copia de claves antiguas |
| `study:<subject>:stats` | done, ok, failed[], byLevel, answered, history[] |
| `study:<subject>:progress` | Mapa ID de apunte → booleano; importación también acepta arrays sin normalización completa |
| `study:<subject>:bookmarks` | Array de IDs de apuntes |
| `study:aws:bank-2026-480` | Evita repetir invalidación del banco reformulado |
| `study:aws:stats-before-bank-2026-480` | JSON bruto anterior |
| `study:aws:history-before-bank-2026-480` | Historial anterior separado |

`getStats()` muta al leer: llama a migrate y, sin marca 480, respalda, filtra intentos/IDs reformulados, ajusta agregados y escribe marca. Su recuperación ante JSON inválido devuelve vacío; no demuestra que todos los errores de cuota/escritura sean recuperables. No se ejecutó sobre almacenamiento real ni simulado en T00.

Exportación v1 `study-notes`, `bankRevision: 2026-480`: solo AWS; incluye stats/progress/bookmarks y previousBankStats, pero no todas las claves brutas ni el respaldo separado de history. Importación reemplaza datos, no fusiona; formato antiguo o revisión ausente retira marca 480. Su validación es parcial. Antes de importar a una cuenta: capturar todas las claves brutas antes de invocar lectores, no volver a invalidar intentos actuales, preservar respaldos sin sobreescritura.

No se ha encontrado persistencia de favoritos de conceptos: es objetivo futuro, no funcionalidad demostrada. Los agregados legacy sin intentos suficientes no permiten reconstrucción exacta.

## Identidad y simulacros

Catálogo `src/config/library.ts`: tres áreas y seis materias; AWS pertenece a devops. El subject es clave global del catálogo y segmento de ruta; mantenerlo estable. La colección admite MD/MDX y exige id/area/subject/group/title/summary; la ruta usa `entry.data.id`. El esquema no demuestra unicidad global ni coherencia de catálogo: añadir verificación en tickets posteriores.

Banco y series en `src/content/modules/devops/aws/questions/`. 480 preguntas, tres series de 65 verificadas por herramienta existente; no reinstalar banco. El historial actual conserva enunciado, selección y corrección textuales y explicación, pero no revisión semántica explícita ni opciones completas. ID de intento `${Date.now()}-${questionId}` no garantiza unicidad entre dispositivos.

Protocolo propuesto D10: identidad `(subject, questionId)` estable; revisión nueva ante cambio de significado, clave, opciones o selección exigida. Corrección meramente editorial de explicación no invalida. Conservar selección mediante IDs estables de opción o instantánea de opciones ordenadas y sus índices. No reinterpretar el resultado histórico usando el banco vigente. Legacy sin revisión se conserva como legacy con evidencia disponible; no atribuir automáticamente revisión actual.

`preguntas.astro:26–30,48–51,90`: examIndex solo en memoria; historial general por pregunta sin ID de sesión, finalización ni resultado específico. Cambiar modo reinicia índice. Deuda: sesiones persistentes con serie/revisión, orden, respuestas, fechas, estado y resultado propio. No prometer recuperación de sesiones pasadas que nunca se guardaron.

## Git y herramientas

`git status --short`, `git rev-parse HEAD` y consulta de ignorados ejecutados. Hay modificaciones previas, eliminaciones de MDX antiguos y nuevos capítulos MD sin seguimiento; también aws-clf-c02, public, docs y utilidades sin seguimiento. No se descartó ni añadió nada al índice. No se concluye que las eliminaciones previas sean errores.

Ignorados relevantes: node_modules, dist, .astro, .pnpm-store, .pdf-tools, .playwright-mcp y tmp/pdfs; `.env` figura en reglas. No se leyó contenido de secretos. Git advirtió permisos insuficientes sobre configuración global ignore y subdirectorios de .pdf-tools: inventario de ignorados no exhaustivo. No se requiere leer esas dependencias para T00; T01 debe documentar exclusiones y errores al respaldar.

Mantenido: `scripts/verify-content.mjs` y comandos de package.json. Candidatos históricos por revisar: check/polish/extract de bloque I en scripts; `tmp/integrate-study.py`, `tmp/check-study-files.py`, `tmp/check-integration.cjs`. No se ejecutaron utilidades de integración. `proceso/` y sus respaldos históricos no se toman como copias disponibles.

## Evaluación técnica (consulta oficial 2026-11-03)

Implementado: Astro 7.4.2, MDX 8.1.1, TypeScript 5.9.3. Node ejecutado: 24.14.0. El paquete instalado de Astro declara Node >=22.23.4; package.json del proyecto declara >=22.12.0. Discrepancia confirmada: corregir contrato en T03A; no se modificó ahora.

Propuesta D06: adaptador oficial Node standalone, contenido en colecciones y rutas de estudio bajo demanda; recursos generales estáticos. [Node](https://docs.astro.build/en/guides/integrations-guide/node/) y [renderizado](https://docs.astro.build/en/guides/on-demand-rendering/). El middleware no vuelve a proteger por petición HTML prerenderizado. Compatibilidad exacta del adaptador con Astro 7.4.2 pendiente de fijar versiones y probar en T03A.

Propuesta D07: Better Auth como candidato preferente, todavía no elegido ni instalado. Tiene [integración Astro](https://better-auth.com/docs/integrations/astro), [SQLite](https://better-auth.com/docs/adapters/sqlite), [registro deshabilitable](https://better-auth.com/docs/authentication/email-password), [administración](https://better-auth.com/docs/plugins/admin) y [sesiones](https://better-auth.com/docs/concepts/session-management). La documentación y repositorio muestran actividad reciente, pero no se ha auditado soporte de una versión fijada ni avisos de seguridad. T03B deberá probar alta por comando sin exponer registro, recuperación, revocación, cookies y límites de peticiones. No se asume que su CLI de esquema sea una CLI completa para usuarios. El plugin admin añade operaciones y superficie que deben justificarse; no instalarlo automáticamente.

Driver preferente a evaluar: better-sqlite3, soportado directamente por Better Auth; tiene dependencia nativa a validar en Windows y contenedor Linux. Alternativa node:sqlite depende de la versión exacta de Node y soporte de autenticación. Sin ORM adicional inicialmente salvo ventaja concreta; migraciones SQL versionadas para aplicación y esquema de autenticación gestionado de forma coordinada, nunca regenerado destructivamente. No se han instalado ni fijado versiones de estos paquetes.

SQLite fuera de public, volumen persistente, transacciones, claves foráneas y restricciones de unicidad. Un proceso inicial. Evaluar WAL y busy timeout bajo pruebas, no prometer concurrencia ilimitada. [API de backup consistente](https://www.sqlite.org/backup.html): respaldar archivo vivo mediante mecanismo SQLite, no copia ingenua del .db. Ensayar restauración antes de datos reales.

## Contrato propuesto, sin tablas definitivas

D01–D05 y D08 aceptadas como objetivo por el paquete del usuario; no implementadas. D06 y D09 siguen propuestas; D07 pendiente. D10 aceptado como principio, protocolo anterior propuesto.

| Operación propuesta | Contrato |
|---|---|
| `/api/auth/*` | Handler autenticación; registro público rechazado por servidor |
| GET `/api/me/progress?subject=…` | Estado solo de sesión actual |
| PUT `/api/me/reading/:subject/:note` | Estado explícito y revisión esperada; conflicto detectable |
| PUT/DELETE `/api/me/bookmarks/:kind/:subject/:id` | Favoritos de apunte/concepto, semántica definida y validación de destinos |
| POST `/api/me/attempts` | ID de operación único por usuario; revisión y evidencia de pregunta; reintento idempotente |
| POST/PATCH `/api/me/study-sessions` | Práctica/simulacro con estado y control de concurrencia |
| POST `/api/me/imports` | Validación, lote, deduplicación por intento y transacción; legacy separado |
| GET `/api/me/export` | Exportación completa versionada de la cuenta |
| PUT `/api/me/library/:subject` | Selección sin borrar progreso ni otorgar permisos |
| GET `/study-assets/:id` | Descarga con sesión y catálogo seguro de archivos |

Nunca aceptar userId del cliente como autoridad. API valida sujeto, tamaño y formato; sesión en servidor, mismo origen y protección contra CSRF según biblioteca. Cambios incompatibles de lectura/favoritos deben devolver conflicto o política explícita: no mezclar objetos de estadísticas por último guardado. Servidor fuente de verdad propuesto; sin offline completo. Reintentos no duplican intentos; quitar materia conserva historial. Estadísticas derivadas cuando existan eventos, legacy con procedencia aparte.

## Matriz de regresión

V = verificador ejecutado; I = inspección de código/documentos, no prueba funcional. No se ensayó navegador, build, autenticación, DB ni almacenamiento real.

| Requisito | Evidencia actual | Hueco / prueba siguiente |
|---|---|---|
| R01 | I catálogo/rutas | Navegar área→materia→capítulo |
| R02 | I StudyTools y rutas | Navegación herramientas |
| R03 | V 18 capítulos, I colección | Comparación integral editorial T02A |
| R04 | Inventario textual | Recursos transitivos, PDFs y enlaces externos |
| R05 | V 247 términos, I términos | Búsqueda alias y revisión semántica |
| R06 | I requisitos/lectura | Scroll y anclas en navegador |
| R07 | I filtros cuestionario | Tema/nivel/falladas y vacío |
| R08 | V índices, I comparación conjuntos | Simple/múltiple y explicación tras comprobar |
| R09 | I snapshots y marca | Cambio semántico vs explicación, legacy |
| R10 | V tres series de 65 | Fin/reinicio/recarga y resultado propio futuro |
| R11 | I mensaje de práctica | Verificar todos los resultados visibles |
| R12 | I claves y consumidores | Recarga, errores de almacenamiento |
| R13 | I import/export | Roundtrip legacy/actual y datos inválidos |
| R14 | I migración con efectos | Ejecutar dos veces con fixture sin pérdida |
| R15 | I fuentes/copias | Respaldo y restauración T01 |
| R16 | I Estilo | Teclado, contraste, móvil, claro/oscuro |
| R17 | V estructura parcial | Anclas/UTF-8/recursos/tablas completas |
| R18 | Alcance explícito de este informe | Mantener evidencia por ticket |
| R19 | V contenido | Tipos y build T01; adaptar criterio estático al introducir servidor |

## Próximos encargos acotados

T01: crear solo respaldo seguro, manifiestos, fixtures y pruebas de referencia, scripts de prueba y documentación; package.json únicamente si necesita comando de pruebas justificado. No cambiar código productivo para hacer pasar el baseline. Restaurar en copia aislada; inventariar exclusiones y no leer progreso personal. Build y navegador quedan para este ticket, después del respaldo.

T02A: aws-clf-c02 como candidato a fuente editorial, src/content/modules y public como destinos mapeados; scripts mantenidos y manifiesto. No eliminar fuentes ni recursos; validar en copia antes de sincronizar. Modificaciones de contenido limitadas a adaptaciones reproducibles, sin reescritura pedagógica ni regeneración de banco.

T02B: permitir src/scripts/progress.ts, nuevos módulos de persistencia/identidad, consumidores de lectura/estadísticas/preguntas y pruebas/documentación asociadas. Preservar banco y series. Exportación versionada con compatibilidad legacy, respaldo bruto y pruebas de marca 480. Separación mínima de corrección, sin rediseño.

## Resultado y límites

Verificador ejecutado con éxito: 18 apuntes, 247 términos, 16 comparativas, 480 preguntas. Git e inventario ejecutados; un comando Get-Content con argumentos incompatibles falló y se repitió correctamente. No build: genera salidas y T00 prioriza solo lectura; se reserva al baseline tras respaldo. No prueba HTTP ni navegador: no se arrancó servidor ni se verificó despliegue. No respaldo/restauración: corresponde a T01. Mapa de persistencia inspeccionado, no probado dinámicamente. Inventario profundo de PDF/anclas y compatibilidad instalada de paquetes futuros pendientes explícitos, no bloquean el encargo de respaldo.

Auditoría entregada para revisión. Decisiones que requieren elección futura: D07 y versiones/driver en T03A/B; ratificar D09 y política de conflictos en T02B. T01 recomendado; no ejecutado ni autorizado implícitamente por este cierre.
