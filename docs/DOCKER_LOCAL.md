# Docker local — primera parte de T08

Preparación local validada, **no despliegue productivo**. Referencias: [Arquitectura](ARQUITECTURA.md), [Requisitos](REQUISITOS.md), [datos/recuperación](SERVIDOR_DESARROLLO.md), [alcance y resultados](reformultation/docs/T08_LOCAL_RESULTADOS.md).

## Configuración y arranque

Requiere motor Docker **Linux** local y Compose moderno. Probado en Docker Desktop, Engine 29.9.2 / Compose 5.6.1, linux/amd64. No se validó arm64. El servicio solo publica en 127.0.0.1 y usa HTTP local; no configura proxy ni HTTPS.

```powershell
Copy-Item .env.example .env
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
# Guarda el valor generado en BETTER_AUTH_SECRET dentro de .env.
# No sobrescribas un .env existente ni compartas el valor generado.
docker compose config --quiet
docker compose build app
docker compose up -d --no-build --wait
docker compose ps
```

Acceso: `http://127.0.0.1:4329`. NOTES_ORIGIN debe coincidir exactamente con la URL usada; si cambias NOTES_PORT, cambia también NOTES_ORIGIN. Usa siempre el mismo secreto y nombre de proyecto para conservar sesiones/volumen. Compose rechaza un secreto vacío y el arranque rechaza menos de 32 caracteres. No hay secreto predeterminado ni secreto durante build. .env está ignorado por Git y excluido del contexto Docker. `compose config --quiet` valida sin imprimir valores; config sin quiet o inspect de contenedores pueden exponer variables a quien tenga permisos Docker.

Compose fija NOTES_DB_PATH=/data/notes-hub.sqlite. El volumen **notes_data** persiste la BD, WAL/SHM y snapshots internos existentes, fuera de /app y de rutas servidas. El nombre real es `<proyecto>_notes_data`, por defecto `notes-hub-local_notes_data`. Cambiar el proyecto crea otro volumen y puede hacer que parezca vacía la biblioteca. No hay puerto de base de datos ni bind mount del checkout.

La imagen crea /data con propietario node (UID 1000) y modo 700; un volumen nuevo hereda ese directorio. El proceso corre sin root, sin capabilities, con raíz de solo lectura y /tmp efímero. La entrada fija umask 077 y ejecuta las migraciones/checksums existentes antes de arrancar HTTP. Si falla, no inicia el servidor. No cambia ni repara automáticamente permisos de un volumen ajeno ya existente.

## Cuentas y comprobación

```powershell
docker compose exec app node scripts/users.mjs create persona@example.invalid "Persona de prueba"
# Contraseña por stdin oculto, nunca como argumento o variable del compose.
docker compose exec -T app node scripts/database.mjs check
docker compose exec -T app node docker/healthcheck.mjs
docker compose logs --tail 30 app
```

Se reutilizan create, reset-password, disable, enable y revoke de la CLI existente, sin registro público. Usar solo cuentas de desarrollo en esta fase. El healthcheck verifica tablas SQLite y HTTP /login con timeout; es diagnóstico, no certifica seguridad ni reinicia por sí mismo un proceso vivo marcado unhealthy. La política de reinicio actúa si termina el proceso. La parada propaga SIGTERM al servidor.

## Recrear, parar y actualizar localmente

```powershell
docker compose up -d --no-build --force-recreate --wait
docker compose down
docker compose up -d --no-build --wait
```

Estas operaciones conservan el volumen. **down -v, volume rm y prune pueden borrar datos; no forman parte de actualizar.** No ejecutes dos aplicaciones escribiendo el mismo volumen con esquemas distintos. No copies directamente un SQLite activo ignorando WAL.

Antes de actualizar una instalación local con datos que quieras conservar, usa el comando existente de backup consistente, con un nombre nuevo y desde la imagen actual:

```powershell
docker compose exec -T app node scripts/database.mjs backup /data/pre-update-NOMBRE-UNICO.sqlite
docker compose build app
docker compose up -d --no-build --wait
docker compose exec -T app node scripts/database.mjs check
docker compose ps
```

Después comprueba login, lectura, estadísticas y cierre de sesión. Es un reemplazo de instancia única, **con posible interrupción**, no actualización atómica. Conserva el identificador/tag anterior y el snapshot antes de cambiar código; volver a una imagen anterior después de migrar no implica que el esquema sea compatible. La recuperación documentada restaura a otro archivo, verifica integridad y después cambia la configuración, sin sobrescribir una BD activa. Los snapshots dentro del mismo volumen no protegen frente a perder ese volumen; retención/destino externo y recuperación operativa quedan pendientes. No se automatizaron backups externos.

## Prueba reproducible

```powershell
node docs/reformultation/checks/docker-local.mjs
```

Usa contexto desktop-linux por defecto. En Linux puede fijarse NOTES_DOCKER_CONTEXT=default; el arnés rechaza endpoints remotos y solo acepta sockets locales. Crea un proyecto y puerto aleatorios, dos cuentas sintéticas, secretos solo en memoria y volumen independiente. Usa Chromium aislado disponible para Playwright; no usa el navegador personal. Construye la imagen de prueba, valida acceso, estado, recreación, down/up e integridad/copia/restauración local en destinos nuevos.

Al terminar para únicamente sus propios contenedores/red, conserva la imagen de validación y los volúmenes sintéticos para inspección; nombres en su informe. No elimina volúmenes ni toca otros proyectos Docker. Las credenciales de prueba no se entregan ni registran. Los resultados están en docs/reformultation/docs/evidencias-T08-local. Para limpiar datos sintéticos posteriormente, identifica expresamente el volumen de ese proyecto; nunca uses prune global.

## Límites de esta entrega

No cambiaron dependencias, driver ni esquema. Node 24.14.0 mantiene la advertencia experimental de node:sqlite, ya [investigada](reformultation/docs/T07_SQLITE.md); no se oculta. Se fija la imagen oficial por digest y pnpm/lockfile, sin afirmar reproducibilidad byte a byte del artefacto generado. La imagen final conserva las dependencias declaradas de producción y 744 recursos necesarios; excluye herramientas dev, navegador, fuentes editoriales duplicadas, históricos, secretos y datos de cuentas. No se podaron dependencias a mano.

Pendiente antes de producción: runtime/imagen soportados y política de estabilidad del binding, TLS/proxy/caché y cookies Secure reales, límites/carga, permisos del host, retención/backup externo y ensayo de recuperación/rollback en el entorno final. No se ha accedido al servidor del usuario.

Referencias de implementación: [multi-stage](https://docs.docker.com/build/building/multi-stage/), [variables requeridas](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/), [ciclo de vida de volúmenes](https://docs.docker.com/engine/storage/volumes/).
