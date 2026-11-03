# T08 — Despliegue Docker, seguridad y recuperación en servidor propio

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T03B, T04B, T05 y pruebas de T01; T06B/T07 idealmente cerrados
- **Referencias:** R12–R19; política D08

## Autorización acotada vigente

El usuario autoriza exclusivamente la primera parte: preparación y validación **local** con Docker. No autoriza servidor real, HTTPS/proxy ni backups externos automatizados. La primera parte está completada; los criterios productivos de este ticket siguen pendientes. [Resultado local](../T08_LOCAL_RESULTADOS.md), [runbook](../../../DOCKER_LOCAL.md).

## Objetivo

Publicar Notes Hub multiusuario en un servidor único de forma mantenible y recuperable, sin exponer contenido privado ni perder SQLite al actualizar.

## Alcance y archivos a inspeccionar

Inspeccionar infraestructura real del usuario **cuando esté disponible** (sistema operativo, proxy, dominio, certificados, almacenamiento, estrategia de backup); no asumir acceso al servidor. Preparar Dockerfile, compose, env de ejemplo, scripts y runbook adaptados a esa realidad.

## Trabajo solicitado

1. Construir imagen reproducible de Astro/Node para producción, usuario de proceso no privilegiado y configuración de servidor adecuada.
2. Volumen persistente para SQLite en almacenamiento local adecuado; BD y secretos fuera de `public/`, sin exponer puerto de DB. Controlar permisos de archivos y WAL.
3. HTTPS mediante reverse proxy existente o solución simple, cookies seguras, headers/caché adecuados, límites razonables de peticiones y login; sin registro público.
4. Confirmar que artefactos prerenderizados, JSON, MDX, PDFs y documentos de estudio no son descargables por URL directa sin sesión. Testear archivos enlazados, cache y errores 401/403/redirect según recurso.
5. Implementar backup consistente SQLite (incluido WAL) por API/herramienta adecuada, copia de configuración requerida y recursos importantes, retención y destino no público; preparar procedimiento de restauración con prueba periódica. No hacer `cp notes-hub.db` a ciegas con conexiones activas.
6. Diseñar update con despliegue atómico cuando sea posible, migraciones verificadas antes de tráfico, rollback de código y recuperación BD, healthcheck/logs sin PII.
7. Probar con dos cuentas y varios dispositivos, recursos, simulacros, cambios de materia, importación previa, reinicio Docker y restauración.
8. Documentar alta administrativa de cuentas, operaciones, actualización, recuperación y seguridad mínima. No ejecutar pasos destructivos en servidor real sin autorización.

## Criterios de aceptación

- `docker compose` inicia servicio y conserva SQLite tras recrear contenedor.
- HTTPS y sesiones seguras; registro público denegado incluso por API; estudio privado no disponible anónimamente.
- Backup y restauración **ensayados**, con tiempos/limitaciones anotados.
- Migración fallida no deja publicación corrupta sin procedimiento conocido de rollback.
- Dos usuarios tienen progreso aislado; 480 preguntas, glosarios y documentos activos funcionan.
- Existe guía para administrar cuentas, diagnosticar errores y actualizar.

## Validación y evidencias

Pruebas en entorno similar a producción: build, `compose up/down` con volumen, reinicio/recreación, negativa de acceso directo, auth/cookies, dos cuentas, importación repetida, backup/restauración, recuperación tras fallo simulado y enlaces. Anotar si no se ha hecho prueba en servidor real.

## Fuera de alcance

No publicar el servicio ni abrir puertos del servidor sin orden explícita. No registrar secretos ni entregar credenciales. No introducir Kubernetes, balanceadores, MongoDB o Redis por defecto.

## Riesgos / reversión

Riesgos: pérdida BD, filtrado de documentos, bloqueo de acceso y caídas por despliegue. Ensayos en staging, backup externo, recuperación probada, política de rollback y comprobación posdespliegue antes de autorizar exposición pública.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Parcial: primera parte Docker local completada y validada; despliegue productivo pendiente, no autorizado.
- **Fecha / commit:** 2026-11-03; sin commit por cambios anteriores no aislados.
- **Archivos modificados:** Dockerfile, compose.yaml, .dockerignore, .env.example, docker/entrypoint.mjs y healthcheck.mjs, docker-local.mjs, README, Arquitectura, plan/ticket, DOCKER_LOCAL.md y resultado/evidencias. No se modificaron dependencias, driver, esquema ni aplicación.
- **Comprobaciones ejecutadas y resultados:** Build Linux multi-stage (contenido, tipos, compilación) PASS; tipos del checkout y 37 tests PASS. Compose/health/non-root/read-only/permisos PASS; Chromium A/B y dos sesiones, aislamiento/idempotencia, lectura/favoritos/biblioteca/estadísticas/simulacro, bloqueo de registro y documentos PASS. Force-recreate y down/up conservan estado y cuentas; SQLite check, snapshot y restauración local a destino nuevo PASS. Evidencia en ../evidencias-T08-local/docker.json.
- **Comprobaciones no ejecutadas / motivo:** Servidor real, HTTPS/proxy/cookies Secure reales, backups externos/retención, carga, arm64 y recuperación operativa final fuera del alcance. No se recorrieron 195 preguntas mediante UI Docker; se conserva regresión automatizada completa y se verifica una sesión persistente dentro del contenedor.
- **Problemas y decisiones abiertas:** Node 24.14.0 conserva ExperimentalWarning del binding; resolver política/runtime antes de producción, sin cambiarlo en esta entrega. Primer test exigía 404 anónimo; middleware devuelve correctamente 401 y endpoint autenticado 404. Expectativas corregidas y prueba repetida sin modificar aplicación; fallo inicial conservado.
- **Respaldo / reversión probada:** T01 y POST-T06B duraderos conservados; sello y 2062 archivos verificados antes del trabajo. Todo ensayo sobre volumen sintético nuevo; recreación y snapshot/restore por API SQLite existente probados, sin sobrescribir base activa. Volúmenes de pruebas retenidos, contenedores/red propios detenidos. Sin down -v ni prune.
- **Autorización para siguiente ticket:** Ninguna. El resto de T08 requiere autorización nueva; no ejecutar producción automáticamente.
