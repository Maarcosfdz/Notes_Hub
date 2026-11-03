# Arquitectura del proyecto

Mapa del estado actual, no una reestructuración ya ejecutada. El comportamiento esperado está en [Requisitos](REQUISITOS.md), la presentación en [Estilo](ESTILO.md) y las mejoras abiertas en [Limpieza pendiente](LIMPIEZA_PENDIENTE.md).

## Aplicación

Astro 7.4.2, MDX y TypeScript funcionan con @astrojs/node 11.1.9 y renderizado por petición. Better Auth 1.7.15 valida sesiones en servidor, con alta exclusivamente administrativa. Las páginas, APIs y 744 recursos de estudio son privados. El banco se sirve mediante API autenticada; no se empaqueta en cliente. SQLite externo guarda cuentas, sesiones y progreso. [Ejecución y recuperación](SERVIDOR_DESARROLLO.md), [contrato remoto](PROGRESO_REMOTO.md). Sin despliegue de producción en esta secuencia.

| Ubicación | Responsabilidad |
|---|---|
| `src/config/library.ts` | Catálogo de áreas y materias |
| `src/content.config.ts` | Colección y esquema de metadatos de apuntes |
| `src/content/modules/` | Contenido y datos consumidos por la aplicación |
| `src/pages/` | Rutas y parte de la interacción de las herramientas |
| `src/server/` | SQLite, migraciones, auth, autorización de recursos, operaciones e importación |
| `src/scripts/quiz-controller.ts` | Flujo de práctica y sesiones; selección/filtros y vista de opciones separados |
| `src/components/QuizFilters.astro` | Controles del cuestionario, mismas clases y rutas |
| `src/layouts/BaseLayout.astro` | Estructura común de página |
| `src/components/StudyTools.astro` | Navegación compartida de estudio |
| `src/scripts/progress.ts` | Acceso, exportación/importación y migración del progreso |
| `src/styles/tokens.css` | Valores de tema, radios, sombras y movimiento |
| `src/styles/global.css` | Componentes y adaptación de pantalla |
| `scripts/verify-content.mjs` | Validación estructural del contenido AWS |
| `astro.config.mjs`, `package.json`, `pnpm-lock.yaml` | Configuración y dependencias |
| `dist/`, `.astro/` | Salidas regenerables |

## Contenido y datos

```text
src/content/modules/<area>/<materia>/
  theory/       apuntes .md o .mdx
  questions/    banco y conjuntos de práctica
  reference/    glosario y comparativas activos
```

La colección carga `**/theory/*.{md,mdx}`. Requiere `id`, `area`, `subject`, `group`, `title` y `summary`; el esquema define campos auxiliares y valores predeterminados. El ID enlaza contenido, rutas y datos de estudio: cambiarlo requiere revisar esas relaciones.

En AWS, `questions/bank.json` conserva `id`, `level`, `topic`, `q`, `options`, `correct` y `why`; el banco revisado añade `domain` y `type`. Las respuestas correctas son índices de opciones. Los archivos `simulacro_*_65.json` y su manifiesto definen las series; la pantalla selecciona sus IDs del banco activo. `ids_requieren_migrar_respuestas.json` delimita los cambios de la revisión instalada.

`reference/glossary.json` utiliza filas de término, etiqueta, grupo, ID de apunte, definición y alias. Es distinto del formato de las exportaciones editoriales. `reference/comparisons.json` contiene las tablas comparativas.

## Rutas y ejecución

`src/pages/materias/[subject]/[note].astro` genera lecturas desde la colección. Las herramientas AWS están bajo `/materias/aws/`. Las áreas y materias usan el catálogo de configuración.

Hay renderizado de Astro y ejecución en el navegador. Importar un dato en ambas partes puede ser necesario: una ruta de importación repetida no demuestra por sí sola duplicación eliminable.

Los scripts con imports usan `<script>` sin atributos para que Astro procese TypeScript y empaquete dependencias. Añadir `lang="ts"` desactivaba ese procesamiento y entregaba imports sin resolver (B01, corregido en [T01B](reformultation/docs/tickets/T01B_corregir_arranque_preguntas_estadisticas.md)). Las regresiones del compilador/bundle siguen comprobándose. B07 conserva lookup puro y avance único; desde T04A las sesiones de simulacro son persistentes en SQLite, con plan, cursor y resultado propio. T06B separó controlador, selección y vista sin duplicar bancos; ver [contrato vigente](CUESTIONARIOS.md).

## Fuentes y copias publicadas

| Ubicación | Papel y tratamiento |
|---|---|
| `proceso/` — histórica, ausente actualmente | Ubicación usada para recibir paquetes, corpus y propuestas; no asumir que sus archivos originales siguen disponibles |
| `aws-clf-c02/` | Ediciones revisadas, matrices, glosarios, informes y figuras; no es la colección activa |
| `src/content/modules/` | Copia adaptada y utilizada por la aplicación |
| `private/study-assets/docs-aws/` | Documentos y figuras protegidos, servidos por rutas autenticadas con la misma URL histórica |
| `private/study-assets/study-docs/` y `study-figures/` | Recursos conservados byte a byte; no servir directamente con proxy estático |
| `proceso/respaldo_integracion/` — histórica, ausente actualmente | Ubicación utilizada para el banco previo e informe; no se declara disponible como respaldo de disco actual |
| `tmp/` | Utilidades y comprobaciones ad hoc; no deben ser una dependencia oculta del flujo mantenido |

Las copias tienen funciones distintas. **T02A incorpora un sincronizador permanente para los cuatro bloques**, `scripts/content-pipeline.mjs`, guiado por `scripts/content-manifest.json`. Las ediciones actuales de `aws-clf-c02/bloque-{1,2,3,4}/` son la fuente editorial; los destinos activos y públicos se generan con adaptación explícita de metadatos/rutas y recorrido de recursos transitivos. Los cinco PDF sin originales disponibles tienen entradas preservadas declaradas. No se reinstala el banco ni se importan glosarios con este comando. Procedimiento y límites: [flujo de contenido](FLUJO_CONTENIDO.md).

Los comandos `content:plan`, `content:sync` y `content:check` permiten revisar cambios, aplicarlos sin borrar y comprobar divergencias. `verify:publication` comprueba rutas y fragmentos del build y descargas; la inspección binaria opcional es independiente. Se conserva una sola cabecera de metadatos por capítulo y los IDs históricos, incluidos los de Bloque III que difieren de los editoriales. Las utilidades anteriores se clasifican en [scripts/README](../scripts/README.md), sin moverlas ni depender de `tmp/`.

La última integración copió capítulos III/IV y archivos alcanzables por sus enlaces, incluidas fuentes enlazadas. Contar solo imágenes visibles no basta para decidir qué JPG sobra. Un recurso sin referencias directas o transitivas es candidato a revisión, no una autorización automática de borrado.

## Persistencia

Las cuentas usan APIs por operación e intentos inmutables por UUID. El usuario procede de la sesión; nunca de un ID enviado por navegador. Las estadísticas se derivan de eventos; favoritos/lectura usan versión por recurso, y los simulacros conservan plan/cursor/resultado propio. Las claves locales `study:*` y `awsNeon*` quedan como origen legacy sin modificación ni importación implícita.

`progress.ts` expone `progress-remote.ts`. `progress-local.ts` conserva el contrato de T02B y valida copias antiguas; no se ejecuta su migrador al autenticar. `study.ts` comparte corrección por conjuntos y revisión semántica SHA-256 con el servidor. T04B importa explícitamente lotes idempotentes, archiva originales/legado sin inventar eventos y exporta cuenta v3. [Contrato local histórico](DATOS_ESTUDIO.md) y [contrato vigente](PROGRESO_REMOTO.md).

El adaptador local histórico respalda antes de migrar IDs reformulados y conserva evidencia. Sus getters pueden ejecutar esa migración: no se invocan al autenticar ni antes de capturar valores brutos. Las cuentas importan explícitamente mediante T04B, sin volver a ejecutar la migración 370→480. Los agregados sin detalle suficiente quedan separados; no se reconstruyen eventos inexistentes.

Las copias locales, los snapshots de código y las copias consistentes de SQLite son mecanismos distintos. Los registros de migración/importación actuales están en SQLite y las evidencias por ticket en docs/reformultation; no dependen de informes históricos ausentes. La investigación de la advertencia del binding SQLite y sus implicaciones operativas está en [T07 SQLite](reformultation/docs/T07_SQLITE.md); no se cambió driver ni esquema.

## Presentación y accesibilidad (T07)

Las reglas base de action-button se centralizan y los tokens separan botón, controles y paletas por grupo. BaseLayout carga content-accessibility.ts para envolver tablas generadas y hacer foco/scroll solo cuando desbordan, con fallback CSS antes de JS. Conserva todas las celdas; las figuras permiten abrir el original protegido. Los cambios no alteran archivos académicos. Menú móvil nativo details/summary con Escape, skip link a main enfocable, importación por teclado y regiones vivas para guardado/error. Las claves, operaciones y tablas de persistencia no cambian.

## Estado actual

Instantánea tras la integración del **3 de noviembre de 2026**, descriptiva y no obligatoria para siempre:

| Elemento | Estado |
|---|---|
| Apuntes AWS activos | 18 capítulos, Bloques I–IV |
| Preguntas | 480 |
| Series suministradas | Tres conjuntos de 65 |
| Conceptos activos | 489 tras T06A; 247 previos conservados, 242 nuevos y 138 correspondencias de III/IV |
| Comparativas | 16 |

## Comprobaciones

Primera parte de T08 implementada: Docker multi-stage conserva Astro/Node y dependencias actuales; Compose sirve solo en loopback con UID 1000, raíz read-only y SQLite en volumen /data externo a /app. El arranque reutiliza migraciones existentes antes de HTTP y dispone de healthcheck local. Auth, esquema y datos de estudio no cambian. Recreación y down/up conservan datos en pruebas sintéticas. [Operación local y límites](DOCKER_LOCAL.md); HTTPS y operación productiva pendientes, no ejecutados.

El verificador de contenido valida estructura, índices e IDs y relaciones con apuntes. Tipos, build SSR y comprobación offline de referencias complementan pruebas de navegador y seguridad. No demuestran por sí solos calidad pedagógica, exactitud externa, datos personales reales o presentación en todos los dispositivos.

Según el cambio se añaden comprobaciones de rutas, recursos, interfaz y persistencia con datos de prueba. Si una herramienta temporal pasa a ser necesaria de forma recurrente, debe tener ubicación estable y comando documentado.
