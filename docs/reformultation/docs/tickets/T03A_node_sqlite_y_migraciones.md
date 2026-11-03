# T03A — Ejecución Node + SQLite y migraciones sin datos reales

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T00, T01, T02B
- **Referencias:** Arquitectura futura, R12–R14

## Objetivo

Preparar infraestructura de servidor para Notes Hub sin publicar una versión intermedia insegura.

## Alcance y archivos a inspeccionar

Revisar `astro.config.mjs`, `package.json`, dependencias compatibles, rutas `getStaticPaths`, estrategia de protección acordada, Docker futuro, entorno local y tests. No presuponer un ORM o adaptador; elegir tras evaluar opciones.

## Trabajo solicitado

1. Incorporar adaptador Node y configuración Astro adecuada para combinar contenido y endpoints protegibles; documentar prerender vs render bajo demanda por ruta.
2. Crear módulo de acceso SQLite con esquema/migraciones para datos personales y un mecanismo de historial de versiones; no trasladar MDX, JSON o imágenes a la BD.
3. Crear BD **de desarrollo** fuera de `public/` y del repositorio; validar permisos, integridad referencial, índices razonables, WAL si conveniente para el volumen real.
4. Elaborar tablas/entidades mínimas propuestas: cuentas/sesiones (si corresponden a librería de auth), materias elegidas, lectura, favoritos, intentos y sesiones de simulacros, importaciones e historial. Crear únicamente lo que la fase necesite, sin tabla innecesaria.
5. Crear comando de migración versionada y procedimiento de copia/restauración consistente (por ejemplo API de backup SQLite cuando haya conexiones); comprobar restauración antes de datos reales.
6. Mantener el frontend actual y definir cómo T03B protegerá rutas y recursos, sin dar por segura una página prerenderizada solo por middleware.

## Criterios de aceptación

- Compilación/verificación pasan con configuración Node y contenido actual conservado.
- BD persistente de desarrollo con migraciones repetibles y restauración comprobada.
- SQLite no se distribuye desde `public/` ni se incluye en build/commits.
- Matriz rutas estáticas vs protegidas lista y limitaciones explícitas.
- No se despliega al público una versión con contenido privado aún expuesto.

## Validación y evidencias

Migraciones up/down o estrategia de rollback documentada, integridad de esquema, tests de lectura/actualización, verificación y build server; ensayo de copia/restauración. Anotar si hay páginas aún públicas hasta T03B.

## Fuera de alcance

No crear cuentas reales, exponer nuevos endpoints de usuario en Internet, importar progreso real ni migrar a PostgreSQL/MongoDB.

## Riesgos / reversión

Riesgo: la transición de estático a servidor puede cambiar URL, prerender y exposición de contenido. Mantener rama aislada o despliegue no público hasta T03B y plan de reversión al build anterior.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; infraestructura de desarrollo verificada, aún sin autenticación.
- **Fecha / commit:** 2026-11-03; sin commit por árbol previo no aislado.
- **Archivos modificados:** Adaptador oficial @astrojs/node 11.1.9, @types/node 24.19.2, engines/lockfile/config; tres rutas dinámicas SSR; database.ts y CLI; dev-server.mjs; tests y documentación. Contenido intacto.
- **Comprobaciones ejecutadas y resultados:** [Validación](../evidencias-T03A/validation.json): contenido, tipos, build Node y 16 tests PASS. [Siete escenarios SSR](../evidencias-T03A/browser.json) PASS en preview compilado. SQLite 3.51.2: migración/checksum/idempotencia, FK, rollback, WAL y backup/restauración con datos sintéticos PASS.
- **Comprobaciones no ejecutadas / motivo:** Sin despliegue, datos reales ni cuentas en esta fase. Protección de rutas/documentos se implementará en T03B; solo se ejecutó en loopback.
- **Problemas y decisiones abiertas:** Elegido node:sqlite por soporte documentado de Better Auth y compatibilidad probada, sin ORM/driver adicional. API emite ExperimentalWarning en Node 24.14: revisar runtime antes de producción. B06 resuelta fijando mínimo probado >=24.14.0. Public/ y bundles aún requieren T03B.
- **Respaldo / reversión probada:** Snapshot de código adicional restaurado en T02B, T01 conservado. DatabaseSync backup con escrituras posteriores y restauración aislada validada; rollback de esquema por snapshot, no down destructivo. BD de desarrollo externa en [registro](../evidencias-T03A/development.json); ninguna BD en public/build/repositorio.
- **Autorización para siguiente ticket:** T03B autorizado por la secuencia y gate satisfecho. T07/T08 excluidos.
