# T00 — Auditoría verificable y decisiones de arquitectura

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Crítica
- **Dependencias:** Ninguna
- **Referencias:** R01–R19; L01–L09; D01–D10

## Objetivo

Cerrar las incógnitas del proyecto **sin cambiar su comportamiento**. Aprovechar la auditoría previa de Codex; verificar evidencias faltantes en lugar de repetir todo desde cero.

## Alcance y archivos a inspeccionar

Leer configuración (`astro.config.mjs`, `package.json`), `src/pages/`, `src/content.config.ts`, `src/content/modules/`, `src/config/library.ts`, `src/scripts/progress.ts`, herramientas AWS, imports de `localStorage`, `public/`, `scripts/`, `tmp/`, Git y scripts de verificación. Documentar rutas reales y archivos no presentes.

## Trabajo solicitado

1. Inventariar rutas prerenderizadas/dinámicas, assets y enlaces directos/transitivos; separar recurso público general vs privado de estudio. Recordar: ocultar menú o usar middleware en una página prerenderizada no protege el HTML publicado.
2. Levantar un mapa de todas las claves `localStorage`, esquemas, versiones y funciones con efectos de migración; estudiar si `getStats()` muta al leer.
3. Inspeccionar IDs `area/subject/note/question`, banco 480, marcas de migración local y el historial existente; concretar qué constituye revisión semántica de pregunta y qué no.
4. Registrar deuda de simulacros: series de IDs vs intento/sesión propia.
5. Auditar estado Git: tracked, untracked, ignored relevantes, generated; no exponer secretos.
6. Evaluar compatibilidad actual Astro + adaptador Node, SQLite (driver, ORM opcional) y Better Auth u opción equivalente: mantenimiento, Node requerido, creación de cuentas por CLI, recuperación de acceso, revocación, no registro público **en servidor**. Si hace falta comprobación externa, citar versiones/docs con fecha.
7. Proponer modelo de endpoints, acceso restringido a fuentes/descargas y contrato de persistencia sin implementar todavía tablas definitivas.
8. Elaborar matriz R01–R19 con pruebas actuales y huecos; convertir las dudas que requieren elección en decisiones propuestas/aceptadas.
9. Proponer alcance y archivos permitidos para T01 y T02A/T02B.

## Criterios de aceptación

- Informe de inventario enlazado al código real y decisiones etiquetadas `Propuesta`, `Aceptada` o `Implementada`.
- Política de publicación adoptada: todo material de estudio y documentos vinculados accesibles **solo a usuarios autenticados**; inicio de sesión y elementos generales pueden ser públicos.
- Todos los usuarios autenticados pueden acceder a todas las materias publicadas; selección de biblioteca ≠ autorización.
- Mapa de persistencia local y migraciones probado o marcado explícitamente como no probado.
- Matriz de regresión preparada y tickets siguientes acotados.
- Ningún cambio funcional ni dependencia instalada.

## Validación y evidencias

Validaciones de solo lectura (`git status`, inspección de imports, inventario de rutas, verificador existente si no modifica trabajo). Identificar comandos omitidos, incluido build y navegador, y por qué. Añadir evidencia de acceso directo a rutas estáticas existentes.

## Fuera de alcance

No tocar Astro, paquetes, contenido, cuestionarios, usuarios, datos o despliegue. No generar datos de prueba persistentes sin aviso.

## Riesgos / reversión

Riesgo: documentación anterior desactualizada. Mitigar adjuntando rutas/líneas/commit observados y estado Git. Reversión: exclusivamente los archivos documentales añadidos.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Auditoría entregada y revisada por el usuario; autorizada la continuación con T01. Las validaciones dinámicas no se ejecutaron en T00.
- **Fecha / commit:** Auditoría del 2026-11-03; HEAD observado `2677e842b7e3c463164cef42ab00899de316b22f`, con cambios previos en el árbol. Cierre completado al iniciar T01 con evidencia existente.
- **Archivos modificados:** Este ticket y `PLAN_EVOLUCION.md`; añadidos [informe](../T00_AUDITORIA.md) e [inventario](../T00_INVENTARIO.json). Solo documentación.
- **Comprobaciones ejecutadas y resultados:** Inspección de Git, rutas, consumidores y persistencia; inventario textual (11 archivos de rutas, 687 recursos públicos y 4135 referencias). Verificador correcto: 18 apuntes, 480 preguntas, 247 términos y 16 comparativas. JSON y documentos comprobados.
- **Comprobaciones no ejecutadas / motivo:** Build, navegador y HTTP reservados a T01 tras respaldo. Sin pruebas dinámicas de almacenamiento, restauración ni dependencias futuras. PDF y anclas requieren validación posterior en T02A.
- **Problemas y decisiones abiertas:** Mínimo Node del proyecto distinto al de Astro instalado; recursos actualmente públicos; datos locales y simulacros con limitaciones descritas en el informe. D07 pendiente; D06/D09 propuestas. Inventario de ignorados limitado por avisos de permisos.
- **Respaldo / reversión probada:** No ejecutada en T00; corresponde a T01. No se modificaron código ni datos.
- **Autorización para siguiente ticket:** T01 autorizado expresamente por el usuario al solicitar su ejecución. No habilita T02A.
