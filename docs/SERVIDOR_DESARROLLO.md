# Servidor de desarrollo

Implementado en T03A: Astro 7.4.2 y adaptador oficial Node 11.1.9 (peer Astro ^7.2.1). Node mínimo del proyecto: 24.14.0, probado en este entorno; tipos de Node 24.19.2. SQLite integrado de Node, sin ORM ni driver adicional. SQLite es experimental en el runtime suministrado: la compatibilidad y restauración están probadas, pero el runtime de producción se revisará en T08. No se despliega nada en esta secuencia.

## Ejecución y rutas

`pnpm.cmd build` genera servidor y assets. `node scripts/dev-server.mjs preview` escucha únicamente en 127.0.0.1:4329 y usa datos sintéticos externos. `node scripts/dev-server.mjs dev` arranca desarrollo. Puede fijarse NOTES_DATA_DIR/NOTES_DB_PATH; toda ruta de BD debe ser absoluta y externa al checkout. El directorio por defecto bajo TEMP sirve para desarrollo, no para durabilidad de producción.

Todas las páginas (inicio, áreas, materias, capítulos, buscador y herramientas) se renderizan por petición. Las rutas con parámetros consultan catálogo/colección y devuelven 404 si no existen. No se mantiene HTML de estudio prerenderizado para confiar después en middleware. Los assets generales de _astro son estáticos. Desde T03B no quedan copias de estudio en public ni banco en bundles; páginas, APIs y descargas exigen sesión. El gate privado se repitió al cerrar T06B.

## SQLite y recuperación

`src/server/database.ts` exige rutas externas, foreign_keys=ON, WAL y busy_timeout. Registra versión/checksum/fecha de migraciones; una versión desconocida o checksum alterado impide continuar. T03A crea únicamente metadatos/migraciones; el esquema de autenticación y las tablas de estudio se incorporan cuando sus fases lo necesitan.

Con NOTES_DB_PATH configurada, `node scripts/database.mjs migrate` o `check`. Para una copia consistente incluso con WAL: `node scripts/database.mjs backup <destino absoluto nuevo>`. Para restaurar: `node scripts/database.mjs restore <copia> <destino absoluto nuevo>`. Nunca restaurar encima de una BD activa. Se verifica integridad y claves foráneas; las migraciones no incluyen down destructivo, la reversión se realiza en otro archivo desde snapshot. Mantener datos/copia fuera del repositorio y de los directorios servidos.

El test database.test.mjs crea padres/hijos sintéticos, prueba FK y rollback, copia online, escribe después del snapshot y restaura verificando que solo contiene el estado respaldado. No toca datos del navegador ni bases reales.

## Autenticación implementada (T03B)

Better Auth 1.7.15 crea user/session/account/verification; user_access permite desactivar cuentas. No hay registro público. Dev/preview preparan esquema y secreto aleatorio fuera del checkout. Alta: node scripts/dev-users.mjs create correo nombre; contraseña por entrada estándar, oculta en terminal. reset-password, disable, enable y revoke reciben el correo; nunca pasar contraseñas como argumentos. Solo usar cuentas sintéticas.

Middleware exige sesión en todas las rutas salvo login, tres endpoints de auth y assets generales _astro. Los 744 recursos están en private/study-assets, conservan URL y se sirven autenticados. No servir directamente esa carpeta ni el antiguo dist estático; publicar únicamente mediante el servidor Node y revisar proxy/TLS en T08. Banco y series llegan por API autenticada, no por bundle cliente. Respuestas privadas usan no-store.

Producción futura requiere NOTES_DB_PATH absoluto externo, NOTES_ORIGIN HTTPS y BETTER_AUTH_SECRET robusto externo. HTTP solo se admite en loopback de desarrollo. Nunca subir archivos de datos, secretos o copias SQLite. Dev usa TEMP y no garantiza durabilidad ante limpieza del sistema.
