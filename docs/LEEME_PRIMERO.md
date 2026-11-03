# Notes Hub — paquete de tickets para la evolución multiusuario

Este ZIP es **un plan y un conjunto de tickets propuestos**. No cambia la aplicación ni demuestra que las soluciones futuras estén implementadas. Está basado en los documentos `ARQUITECTURA.md`, `REQUISITOS.md`, `ESTILO.md`, `LIMPIEZA_PENDIENTE.md` aportados por el usuario y en la auditoría resumida de Codex (3 de noviembre de 2026). Los resultados de esa auditoría no equivalen a una inspección directa del repositorio por quien redactó estos tickets.

## Cómo incorporarlo

1. Guarda una copia del repositorio y comprueba `git status` (hay cambios sin seguimiento según la auditoría). No descartes nada.
2. Extrae `docs/PLAN_EVOLUCION.md`, `docs/tickets/` y, opcionalmente, `prompts/` en el repositorio; **no sobrescribas** archivos homónimos existentes sin compararlos. Si la documentación está en otra carpeta, adapta las rutas manteniendo enlaces coherentes.
3. Conserva los cuatro documentos originales como fuentes de verdad: `ARQUITECTURA`, `REQUISITOS`, `ESTILO` y `LIMPIEZA_PENDIENTE`.
4. Ejecuta **solo T00** con Codex; utiliza `prompts/CODEX_T00.md`. Espera revisión antes de autorizar T01 y sucesivos.
5. Antes de cada ticket comprueba dependencias, decisiones abiertas, archivos actuales, pruebas disponibles y estado de Git. Tras implementarlo, registra los cambios, evidencia, resultado y pendientes sin dar por hechas pruebas que no se hayan ejecutado.

## Decisiones del producto ya tomadas

- Mantener Astro + MDX + TypeScript y el contenido en archivos versionados.
- Preparar Astro/Node.js con SQLite para cuentas y datos personales, sujeto a verificar compatibilidad técnica real.
- Usuarios **solo por invitación/alta administrativa desde el servidor**, sin registro público.
- **Todas las materias publicadas disponibles para todos los usuarios autenticados**; la biblioteca personal es una selección de visibilidad, no un control de permisos.
- Progreso, favoritos, intentos y simulacros separados por cuenta y sincronizados entre dispositivos.
- Estudio y documentos asociados protegidos por sesión; login y recursos genéricos públicos. Esta política debe confirmarse contra inventario de recursos en T00.
- Aplicación autohospedada en un solo servidor con Docker y copias consistentes; sin microservicios ni sistemas innecesarios.

## Estado informado, no revalidado por este paquete

18 capítulos AWS I–IV; 480 preguntas; tres simulacros de 65; 247 conceptos activos con glosarios III/IV por completar; 16 comparativas. `output: static`, sin backend, `localStorage` `study:aws:*`, simulacros sin entidad persistente propia. La migración local al banco 480 puede seguir activándose al consultar estadísticas según marca de navegador.

## Regla de seguridad y ejecución

No lanzar en producción una fase intermedia con páginas o documentos privados expuestos. No añadir secretos, datos personales ni copias de bases de datos al repositorio o al ZIP. Los cambios destructivos, de cuenta real, producción y permisos requieren autorización específica.

El plan agrupa **9 áreas/fases** en **13 tickets concretos** (T00, T01, T02A, T02B, T03A, T03B, T04A, T04B, T05, T06A, T06B, T07, T08), para mantener cada entrega razonablemente pequeña.
