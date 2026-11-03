# T08 — Preparación y validación Docker local

**Primera parte completada; T08 global permanece parcial.** Solo Docker local: sin servidor real, HTTPS/proxy ni automatización de backups externos. Se usó el contexto local desktop-linux (socket de Docker Desktop); no se cambiaron dependencias, driver, esquema ni código de la aplicación. Cambios anteriores del checkout conservados, sin mezclarlos en un commit.

## Cambios

- Dockerfile de cuatro etapas: gestor/dependencias, dependencias de producción, build y runtime. Node 24.14.0 bookworm-slim fijado por digest `sha256:d8e448a56fc63242f70026718378bd4b00f8c82e78d20eefb199224a4d8e33d8`; pnpm 11.1.2 y frozen-lockfile. Se conserva el runtime ya probado, sin cambiarlo para ocultar su advertencia SQLite.
- .dockerignore con allowlist: excluye Git, .env, datos SQLite, snapshots, docs/tests, tmp, herramientas históricas y fuentes editoriales duplicadas. public puede faltar en un checkout limpio; se copia condicionalmente en build. Los 744 recursos privados sí se conservan íntegros en runtime.
- compose.yaml: puerto solo en 127.0.0.1, volumen nombrado /data, node UID 1000, raíz de solo lectura, /tmp efímero, capabilities retiradas, no-new-privileges e init. DB en /data/notes-hub.sqlite; no se guarda en /app/public ni se publica un puerto SQLite.
- .env.example sin secretos; exige secreto en ejecución. docker/entrypoint.mjs reutiliza migraciones y snapshots anteriores al DDL, aplica umask 077, solo inicia HTTP tras verificarlas y propaga parada. docker/healthcheck.mjs comprueba tablas y HTTP /login, sin endpoint público nuevo.
- [Runbook local](../../DOCKER_LOCAL.md): arranque, alta administrativa, health, recreación, actualización con snapshot local consistente, comprobaciones y límites. README/arquitectura/plan/ticket actualizados.

## Pruebas ejecutadas

Motor Linux local Docker 29.9.2, Compose 5.6.1, linux/amd64. Docker Desktop estaba detenido y se inició para la validación. No se detuvieron ni modificaron otros proyectos existentes.

| Comprobación | Resultado |
|---|---|
| Build multi-stage, verify:content, tipos y build dentro de Linux | PASS; 18 capítulos, 480 preguntas, 489 conceptos, 16 comparativas |
| Tipos del checkout completo y suite mantenida | PASS; 37 pruebas, B01/B07 e invariantes de fuentes/recursos incluidos |
| Compose sin secreto; arranque con secreto corto o ruta DB dentro de /app | Rechazados; no inicia HTTP con configuración inválida |
| Up y healthcheck | healthy; usuario 1000, rootfs read-only, SQLite modo 600, cuatro migraciones |
| Chromium: login de dos cuentas y dos sesiones de A | PASS; cookies/sesiones independientes, respuestas y progreso aislados |
| Repetir mismo intento | PASS; se guarda una sola vez |
| Marcas de lectura/favoritos, biblioteca A/B, estadísticas y sesión de simulacro | PASS; estado propio y cursor persistente |
| Manipular sesión de A desde B o enviar userId cliente | Rechazado (404 / 400) |
| Registro público | Anónimo 401; autenticado 404, ninguna alta disponible |
| Banco, 18 rutas de capítulos, nueve muestras de documentos/figuras por familia/extensión | PASS; recursos denegados a anónimos y accesibles con sesión |
| Force-recreate | ID de contenedor distinto; mismo volumen, cookies válidas y estado completo idéntico |
| Down/up sin eliminar volumen | Usuarios y datos conservados; logout/relogin y nueva lectura de estadísticas PASS |
| CLI SQLite check, snapshot consistente y restauración a archivo nuevo dentro del volumen sintético | PASS; sin sobrescribir la base activa ni copiar WAL a ciegas |
| Imagen y logs | Sin secreto/contraseñas de prueba registrados o incorporados a Config de imagen; sin .env, tests ni Playwright en runtime |

[Evidencia reproducible](evidencias-T08-local/docker.json), [contenido/tipos/37 tests y hashes](evidencias-T08-local/checks.json). Se comprobaron sin diferencias 18 archivos de dependencias/configuración y servidor respecto al checkpoint anterior. El arnés usa secretos/contraseñas aleatorios en memoria y puertos/proyectos/volúmenes exclusivos; no accede a datos reales ni al navegador personal. Termina sus contenedores y red; se confirmó que no queda ningún contenedor de la última prueba. Conserva únicamente sus volúmenes sintéticos y la imagen de validación. Nombres e identificador exacto de imagen en el informe; no se usó prune ni down -v.

La imagen contiene las dependencias de producción declaradas (sin podarlas a mano): du midió aproximadamente 192 MiB de node_modules, 164 MiB de recursos privados y 3,7 MiB de dist. Docker informa unos 899 MB para la imagen. Se excluyeron herramientas dev y duplicados editoriales; no se eliminaron recursos para reducir el tamaño. No se promete imagen mínima ni reproducibilidad byte a byte de las claves internas generadas por Astro.

La primera ejecución del arnés esperaba 404 para registro **anónimo** y falló porque el middleware devuelve 401 antes del router. Se corrigió la expectativa para probar ambas barreras (anónimo 401 y autenticado 404), conservando [el fallo inicial](evidencias-T08-local/initial-test-failure.json). No se modificó la aplicación ni se relajó el bloqueo del registro.

## Recuperación y alcance pendiente

T01 y el checkpoint duradero posterior a T06B se conservan. Antes de preparar Docker se verificó de nuevo el sello y los 2062 archivos de POST-T06B-20261103-qd1ZEv; SHA del manifiesto `ca1cb1f8034a7ed96aa8e0af3a8c71866ea5019e30aea02c7775c97f35c88d48`. No se migró ninguna BD anterior: todo se ensayó en volúmenes nuevos sintéticos. El test Docker ensaya además copia/restore local por la API SQLite ya existente.

Pendiente del resto de T08: runtime/imagen productivos y política de estabilidad del binding, proxy/HTTPS y Secure cookies reales, almacenamiento y permisos del host, carga/límites, retención/destino externo de backups, recuperación operativa y actualización/rollback en el entorno real. Node 24.14.0 mantiene ExperimentalWarning de node:sqlite, documentada en T07; no se cambió ni se silenció. No se repitieron los tres simulacros completos en Docker: aquí se verifican banco/series y una sesión persistente; la suite automatizada recorre los 195 pasos del servicio y mantiene B07. No se ensayó arm64, despliegue, TLS ni restauración externa.

La publicación sigue limitada a loopback. Esta entrega no autoriza continuar con producción.
