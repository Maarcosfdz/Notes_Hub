# SQLite: advertencia y decisión para T07

Comprobado el 3-11-2026 con Node **24.14.0** y SQLite **3.51.2**. Una importación directa de `node:sqlite` y una base `:memory:` reproducen `ExperimentalWarning`, incluso sin Astro ni Better Auth. `--trace-warnings` identifica `node:sqlite:4:1` / `emitExperimentalWarning`. No es un error de integridad de la BD ni una advertencia de nuestro SQL: se refiere al estado de estabilidad de la API JavaScript integrada.

La documentación de [Node 24.14.0](https://nodejs.org/download/release/v24.14.0/docs/api/sqlite.html) la clasifica como Stability 1.1 (desarrollo activo). La ausencia de flag obligatorio no equivale a API estable. [Node 24.15.0](https://nodejs.org/download/release/v24.15.0/docs/api/sqlite.html) documenta el paso a Stability 1.2 (release candidate): tampoco es la categoría estable 2. No se instaló ni se probó ese runtime en T07.

Better Auth **1.7.15** instalado admite `DatabaseSync` (compatibilidad funcional probada en T03B–T07). Su [documentación oficial de SQLite](https://better-auth.com/docs/adapters/sqlite) contempla node:sqlite y recomienda better-sqlite3 como alternativa estable. SQLite no es experimental por ser un archivo: hay que separar el motor/formato SQLite de la estabilidad del binding de Node.

| Opción para evaluar antes de T08 | Ventaja | Coste / comprobación necesaria |
|---|---|---|
| Mantener node:sqlite en un runtime soportado y fijado | Sin dependencia nativa adicional; migraciones, backup/restauración y auth ya probados | Revisar estado de API de la versión elegida, parche de seguridad, comportamiento síncrono y carga real; repetir suite y recuperación en la imagen destino |
| better-sqlite3 | Alternativa estable y recomendada por Better Auth | Nueva dependencia nativa; verificar binarios/compilación para arquitectura y libc de la imagen; adaptar wrapper, transacciones y backup con prueba de equivalencia |

El proyecto [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) documenta requisitos de Node y disponibilidad de binarios para versiones LTS; no se presupone que todos los contenedores dispongan de un binario compatible. Cambiar el binding no exige por sí solo cambiar el formato del archivo, pero eso no demuestra equivalencia de APIs, pragmas o copias. Una evaluación requeriría copia independiente e integridad/FK antes y después; nunca probar el cambio sobre datos reales.

**Decisión T07: mantener el driver y el runtime actuales, sin migración ni supresión de warnings.** No hay fallo crítico demostrado que justifique ampliar esta fase. Como recomendación para T08, evaluar primero un runtime soportado más reciente sin cambiar simultáneamente el driver. Si el binding elegido continúa por debajo de estable y la política operativa no acepta ese riesgo, preparar un ticket específico de equivalencia con better-sqlite3 antes de desplegar. No elegir una alternativa solo para hacer desaparecer un mensaje.

Las operaciones síncronas pueden bloquear el bucle de Node mientras se ejecutan; para este servidor único se han probado funcionalidad y concurrencia sintética, no capacidad productiva. T08 debe medir tamaño/latencia de exportaciones y backups, bloqueo y carga, además de fijar runtime e imagen. Esto es investigación y recomendación; **T08 no se ha ejecutado**.
