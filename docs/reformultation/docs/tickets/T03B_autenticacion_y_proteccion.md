# T03B — Autenticación por administración y control de acceso

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** T03A con copias/restauración probadas
- **Referencias:** R01–R04, R12, R16; política de publicación D08

## Objetivo

Conseguir inicio de sesión seguro y acceso privado a estudio, sin registro público y sin panel administrativo obligatorio.

## Alcance y archivos a inspeccionar

Evaluar biblioteca de autenticación compatible con versión y runtime del proyecto (Better Auth como candidata, no como decisión irreversible). Revisar endpoints, middleware, contenido estático, `public/`, recursos enlazados, proxy y gestión de sesiones.

## Trabajo solicitado

1. Elegir e integrar solución consolidada de auth; documentar versiones, mantenimiento y tablas requeridas.
2. Deshabilitar de verdad el alta pública en servidor/API (no solo ocultar interfaz). Proveer CLI administrativa de alta/invitación y revocación o desactivación, con contraseñas nunca registradas en texto plano y configuración de MFA solo si está justificada.
3. Implementar login, logout, caducidad/revocación y recuperación administrativa de cuenta; cookies seguras `HttpOnly`, `Secure` en HTTPS y política `SameSite` adecuada. Evitar fugas de información en mensajes de error.
4. Proteger **páginas y recursos de estudio**: rutas renderizadas, APIs, documentos descargables y archivos fuente. No dejar HTML/JSON/MD/PDF privados prerenderizados en `dist/` o accesibles desde `public/` sin control. Decidir cómo mantener públicas únicamente las imágenes y assets generales necesarios.
5. Denegar por defecto a anónimos y validar sesión en servidor en cada operación de datos; aplicar medidas frente a CSRF/bruteforce según la solución elegida.
6. Documentar acceso directo a URL, caché/proxy y cómo despliega sin filtrar contenido la versión estática previa.

## Criterios de aceptación

- Cuentas solo por alta administrativa, no existe endpoint abierto de registro usable.
- Anónimo no ve materia, capítulo, banco, glosario, simulacro o documento privado pegando URL directa.
- Usuario autenticado sí accede a **todas** las materias publicadas.
- Sesiones revocadas o caducadas no conservan acceso; cookies configuradas apropiadamente.
- En producción de prueba no se filtran secretos, BD ni recursos privados.
- Build, login, logout y pruebas de negativa superadas.

## Validación y evidencias

Probar con 2 cuentas y anónimo, acceso a rutas/descargas directas, logout/revocación, endpoint alta bloqueado, cookies y headers, acceso a assets generales, SSR + build. Documentar pruebas no ejecutadas en proxy real.

## Fuera de alcance

No desarrollar panel complejo de usuarios, invitaciones por email o roles por materia; no migrar aún historial local ni lanzar públicamente sin revisar T08.

## Riesgos / reversión

Riesgo alto de exposición de contenido estático. Auditar artefacto de build y `public/`, no depender de cliente JS para autorizar. Revertir a deploy previo privado/no público si falla prueba negativa.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; acceso privado y cuentas administrativas probados
- **Fecha / commit:** 2026-11-03; sin commit por cambios previos no aislados
- **Archivos modificados:** Auth/middleware/login/CLI, servidor de recursos privados, API de banco, pipeline/manifest y verificadores, lockfile, tests y documentación. 744 recursos movidos conservando SHA; contenido original intacto.
- **Comprobaciones ejecutadas y resultados:** [22 tests, contenido, tipos y build](../evidencias-T03B/validation.json) PASS; [Chromium y seguridad](../evidencias-T03B/security.json) PASS: 36 rutas anónimas denegadas, 744 documentos denegados sin sesión y accesibles para ambas cuentas, cookies, origen, límite de peticiones, caducidad, revocación y recuperación.
- **Comprobaciones no ejecutadas / motivo:** HTTPS/proxy real y producción excluidos; Secure verificado con petición HTTPS sintética. Datos personales continúan locales hasta T04A.
- **Problemas y decisiones abiertas:** Better Auth 1.7.15 con node:sqlite, sin ORM. Rutas por defecto privadas; endpoint público de registro inexistente. SQLite de Node emite advertencia experimental; revisar runtime antes de producción.
- **Respaldo / reversión probada:** T01 y snapshot pre-secuencia conservados. Snapshot online antes de DDL de auth; migraciones de aplicación respaldadas mediante VACUUM INTO; restauración exacta sin autoactualización y rechazo de SQLite ajeno probados.
- **Autorización para siguiente ticket:** T04A autorizado por secuencia; gate satisfecho. T07/T08 excluidos.
