# T07 — Consistencia visual, accesibilidad y mantenimiento residual

- **Estado inicial:** Pendiente (propuesta, no ejecutada)
- **Prioridad:** Media
- **Dependencias:** T02A/B y T06B recomendado; respaldo T01
- **Referencias:** L05, L06, L07 restante, L09; R06, R16–R19

## Objetivo

Resolver deuda de estilos y herramientas sin cambiar la identidad visual ni funcionalidad del producto.

## Alcance y archivos a inspeccionar

Revisar `src/styles/tokens.css`, `src/styles/global.css`, páginas/componentes, guía de contribución, `tmp/`, utilidades `scripts/`, README y documentación. Confirmar dependencias antes de borrar.

## Trabajo solicitado

1. Auditar selectores compartidos como `.action-button` y cascada CSS; centralizar reglas comunes sin eliminar reglas contextuales necesarias.
2. Mantener fondos cálidos/oscuro, terracota, serif para títulos, sans serif para cuerpo y tokens existentes; mejorar contraste de botones en ambos temas.
3. Aplicar colores coherentes por grupo acompañados de texto; accesibilidad de foco, teclado, estados, errores, preferencia `reduced-motion`, tablas e imágenes adaptadas.
4. Comprobar que desplegables/acordeones no provocan desplazamientos inesperados; revisar lectura móvil y pantallas medianas.
5. Inventariar scripts temporales/históricos, distinguir mantenidos vs archivados; eliminar únicamente archivos sin consumidores tras revisión y autorización. Alinear comandos documentados.
6. Corregir documentación que prescribe solo MDX cuando cargador admite `.md` y `.mdx`; evitar repetir especificaciones en varios sitios.
7. Actualizar arquitectura con estado implementado, requisitos funcionales cambiados y cerrar filas L05–L07/L09 verificadas.

## Criterios de aceptación

- Estilos visualmente coherentes en claro/oscuro y móvil; foco visible, contraste suficiente en botones y controles.
- No cambia estructura de contenidos, navegación ni puntuaciones.
- No quedan scripts mantenidos ocultos en `tmp/`; archivos eliminados listados y recuperables.
- README/guía y cargador real coinciden en formatos y comandos.
- Cambios documentados con pruebas visuales, sin afirmar auditoría WCAG completa si no se ejecutó.

## Validación y evidencias

Capturas comparativas en ambos temas y resoluciones representativas, teclado y tab order, `prefers-reduced-motion`, verificador/build y enlaces. Registrar herramientas ausentes si no se pueden automatizar pruebas visuales.

## Fuera de alcance

No nuevo sistema de diseño, no migrar frameworks, no modificar base de datos ni eliminar publicaciones sin mapa de referencias.

## Riesgos / reversión

Riesgo: cascade CSS o eliminar script con consumidores ocultos. Dividir commits por estilo/documentación/archivo, conservar backups y revertir regresiones localizadas.


## Reglas comunes

- Inspeccionar el repositorio real antes de modificar: rutas, dependencias y herramientas de prueba pueden diferir de las notas de 3-11-2026.
- Leer `REQUISITOS.md`, `ARQUITECTURA.md`, `ESTILO.md` y `LIMPIEZA_PENDIENTE.md` en su ubicación real.
- Mantener las funcionalidades existentes, 18 capítulos AWS, banco 480, tres series 65, conceptos y comparativas; no reinterpretar ni regenerar su contenido incidentalmente.
- No ejecutar tickets siguientes. No ocultar errores recuperables: resolverlos dentro del alcance o registrar bloqueo fundamentado.
- No borrar archivos desconocidos, incluidos archivos no seguidos por Git, sin mapa de consumidores y respaldo.
- No incorporar secretos, contraseñas, cookies, tokens ni datos reales en logs, informes o commits.
- Actualizar estado y evidencias en este ticket; después actualizar `PLAN_EVOLUCION.md` y documentos de referencia solo cuando proceda.

## Cierre / resultado (rellenar al ejecutar)

- **Estado final:** Completado; B05 y mensajes de guardado corregidos, L05/L06/L07/L09 cerradas con límites documentados
- **Fecha / commit:** 2026-11-03; sin commit por árbol previo no aislado
- **Archivos modificados:** CSS/tokens, BaseLayout, StudyTools, content-accessibility.ts/study-groups.ts, login/guía/glosario/estadísticas, presentación de estados y foco del cuestionario, tests, inventarios y documentación. Lista exacta en evidencias-T07/changed-files.json. Ningún archivo académico ni esquema/driver modificado; cero borrados de limpieza.
- **Comprobaciones ejecutadas y resultados:** 37 tests, verify:content, tipos/build PASS. Matriz 5 anchos x 2 temas x 28 rutas PASS; 90 tablas/190 imágenes/7 bloques de código por combinación, sin overflow global y última columna accesible. 195 preguntas en Chromium: 52/65 en cada serie; persistencia, cuentas, biblioteca, reintentos, B01/B07 PASS. Seguridad: 36 rutas/744 recursos PASS. Publicación 4157 referencias/1958 fragmentos sin errores. Ver T07_RESULTADOS.md.
- **Comprobaciones no ejecutadas / motivo:** Sin auditoría WCAG completa, lectores de pantalla, revisión pedagógica humana independiente, navegadores físicos, proxy HTTPS real ni producción. Reinstalación en carpeta restaurada no ejecutada; bytes/integridad/restauración sí verificados.
- **Problemas y decisiones abiertas:** Siete pares semánticos requieren revisión humana. Advertencia de node:sqlite reproducida en Node 24.14.0, sin cambio de binding; evaluar runtime fijado y alternativa solo si procede antes de producción. No se atribuye estabilidad plena al release candidate documentado.
- **Respaldo / reversión probada:** T01 intacto; POST-T06B-20261103-qd1ZEv duradero, 2062 archivos restaurados en notes-hub-T01-restore-I2l7Gb; manifiestos/SHA verificados. Balance -418 explicado por artefactos SSR, traslado privado y nuevos archivos; 1336 archivos necesarios comprobados antes de cambios.
- **Autorización para siguiente ticket:** Ninguna: T08 y despliegue expresamente excluidos.
