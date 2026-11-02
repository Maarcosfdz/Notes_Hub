# Notes Hub

Biblioteca personal de apuntes estática, organizada por áreas y materias. El contenido se escribe en Git como Markdown/MDX y JSON; no necesita cuentas, servidor ni base de datos. El progreso de AWS se guarda localmente en el navegador.

## Requisitos y comandos

Se necesita Node.js 22.12 o posterior y pnpm 11.

```sh
pnpm install
pnpm dev
pnpm verify:content
pnpm check
pnpm build
pnpm preview
```

`pnpm-lock.yaml` fija las versiones de dependencias. La compilación estática se genera en `dist/`.

## Organizar el contenido

Las áreas y materias se definen en `src/config/library.ts`. El contenido sigue esta estructura:

```text
src/content/modules/<area>/<materia>/
  theory/       # un archivo .mdx por apunte
  questions/    # preguntas para practicar
  reference/    # glosarios y comparativas
```

Por ejemplo, los apuntes de AWS viven bajo `src/content/modules/devops/aws/`: teoría en `theory/`, el banco en `questions/bank.json` y referencias en `reference/`. Cada apunte usa metadatos `id`, `area`, `subject`, `group`, `title` y `summary`; `source` es opcional. Las materias sin apuntes tienen una página lista y enlazan a la [guía para aportar contenido](src/pages/como-aportar.astro).

La página de AWS ofrece 370 preguntas, glosario, comparativas e historial. Favoritos, apuntes repasados y estadísticas se guardan en `localStorage`; el progreso antiguo se migra al abrir AWS. Se puede importar y exportar una copia JSON.

## Estilos y navegación

Los tokens de color, tipografía, radios y movimiento están en `src/styles/tokens.css`; el CSS compartido y responsive está en `src/styles/global.css`. La biblioteca usa CSS nativo para mantener la interfaz sencilla. El cambio de tema se conserva en este navegador y las animaciones respetan `prefers-reduced-motion`.

## Uso local

Ejecuta `pnpm dev` y abre la dirección local que muestra Astro (normalmente `http://localhost:4321/`). Para revisar una versión de producción en tu ordenador, ejecuta `pnpm build` y después `pnpm preview`. No necesita servidor de datos: el progreso personal se guarda en el navegador.
