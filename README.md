# Notes Hub

Biblioteca de estudio organizada por áreas y materias, con Astro/MDX/TypeScript y servidor Node. El contenido sigue versionado en Markdown/MDX/JSON; SQLite externo guarda cuentas, sesiones y progreso individual. Sin registro público: las cuentas se crean administrativamente. Desarrollo multiusuario probado hasta T06B; no desplegado en producción.

## Requisitos y comandos

Se necesita Node.js **24.14.0 o posterior** y pnpm 11 (probado con 11.1.2).

```sh
pnpm install
node scripts/dev-users.mjs create persona@example.invalid "Persona de prueba"
pnpm dev
pnpm verify:content
pnpm check
pnpm build
pnpm preview
pnpm test:regression
```

La creación pide contraseña por entrada estándar oculta; nunca pasar contraseñas como argumentos. Dev/preview escuchan en loopback `http://127.0.0.1:4329`. Preparan SQLite y secreto fuera del checkout, bajo TEMP por defecto; usar solo datos sintéticos. TEMP no es almacenamiento duradero de producción. [Configuración, cuentas y recuperación](docs/SERVIDOR_DESARROLLO.md).

En Windows puedes iniciar el proyecto con `iniciar.bat`. Desde PowerShell usa `pnpm.cmd install` y `pnpm.cmd dev`; `pnpm` puede quedar bloqueado por la política de ejecución de scripts de PowerShell.

`pnpm-lock.yaml` fija las versiones efectivas. El build genera `dist/server/` y `dist/client/`; arrancar el servidor Node, no servirlo como un sitio estático. El contenido de `private/study-assets/` se entrega mediante rutas autenticadas. [Pruebas y resultados de la evolución](docs/reformultation/docs/RESULTADOS_T02B_T06B.md).

## Documentación del proyecto

Docker local (primera parte de T08): [configuración, arranque, actualización y pruebas](docs/DOCKER_LOCAL.md). Usa .env.example sin secretos y SQLite en volumen; no configura producción ni HTTPS.

Cada asunto tiene una referencia principal. Los demás documentos la enlazan, sin repetir sus reglas.

| Documento | Qué define |
|---|---|
| [Requisitos](docs/REQUISITOS.md) | Qué debe permitir la aplicación y cómo reconocer que funciona |
| [Estilo](docs/ESTILO.md) | Apariencia, interacción y criterios editoriales |
| [Arquitectura](docs/ARQUITECTURA.md) | Estructura real, datos, persistencia y responsabilidad de las carpetas |
| [Limpieza pendiente](docs/LIMPIEZA_PENDIENTE.md) | Repeticiones detectadas y mejoras que todavía no se han aplicado |
| [Flujo de contenido](docs/FLUJO_CONTENIDO.md) | Fuentes editoriales, sincronización reproducible y comprobación de publicaciones |

[AGENTS.md](AGENTS.md) indica cómo usar estas referencias al trabajar en el repositorio. Los informes de los bloques conservan su contexto específico; no son otra especificación general del producto. Los paquetes de preparación mencionados en informes históricos no deben suponerse presentes en el árbol actual.

## Uso local

Ejecuta `pnpm dev` y abre la dirección local que muestra Astro (normalmente `http://localhost:4321/`). Para revisar una versión de producción en tu ordenador, ejecuta `pnpm build` y después `pnpm preview`. No necesita servidor de datos: el progreso personal se guarda en el navegador.

## Archivo de conceptos anteriores

El [glosario anterior](aws-clf-c02/archivo/glosario_anterior.json) se conserva para futuras revisiones. La ubicación y alcance del glosario activo se documentan en [Arquitectura](docs/ARQUITECTURA.md#contenido-y-datos).
