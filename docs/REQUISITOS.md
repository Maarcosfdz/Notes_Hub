# Requisitos de Notes Hub

Referencia funcional del proyecto: qué debe conservarse al limpiar o ampliar la aplicación. No afirma que todos los criterios hayan sido probados en todos los navegadores. Los formatos y ubicaciones están en [Arquitectura](ARQUITECTURA.md); los detalles visuales en [Estilo](ESTILO.md).

## Organización y estudio

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| R01 | Biblioteca por áreas, materias y bloques de estudio | Cada capítulo se encuentra desde su materia sin conocer el archivo |
| R02 | Secciones diferenciadas de Apuntes, Conceptos y Preguntas | Se puede cambiar entre ellas dentro de AWS; comparativas y estadísticas siguen accesibles |
| R03 | Apuntes completos y didácticos | La integración conserva explicaciones, tablas, ejemplos y procedencia; no los sustituye por resúmenes |
| R04 | Figuras y referencias útiles | Las imágenes cargan, los enlaces tienen destino y se distingue información histórica de actualizaciones y explicaciones editoriales |
| R05 | Consulta de conceptos por término, alias y grupo | Los alias son equivalentes auténticos, sin relleno ni componentes confundidos con el concepto completo |
| R06 | Continuidad de lectura | Abrir o cerrar un apartado no lleva al inicio del documento; navegar a otra página o ancla tiene su comportamiento propio |

## Preguntas y práctica

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| R07 | Práctica por tema, nivel y preguntas falladas | Los filtros actúan sobre el banco activo y explican la ausencia de resultados |
| R08 | Selección simple y múltiple | Se comunica la selección necesaria, se compara el conjunto de respuestas y la explicación aparece tras comprobar |
| R09 | Identidad y versión semántica de las preguntas | Una respuesta antigua no se corrige con una clave reformulada; mejorar solo la explicación no invalida el intento |
| R10 | Tres series de práctica preparadas | Cada una contiene 65 preguntas con cuotas 16/19/22/8 por dominio 1/2/3/4; las tres series suministradas no comparten IDs |
| R11 | Presentación honesta de resultados | El porcentaje de práctica no se convierte en puntuación oficial AWS ni garantiza aprobar |

Los recuentos actuales se registran únicamente en la instantánea de Arquitectura. No constituyen una obligación de mantener para siempre un número fijo de preguntas.

## Datos y conservación

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| R12 | Persistencia de progreso, favoritos e intentos por cuenta | Servidor como fuente de verdad; recarga y otro dispositivo recuperan datos de la cuenta, con aislamiento. El legado local se conserva y solo se importa con confirmación explícita |
| R13 | Exportación e importación | La copia conserva datos y versión necesarios para una restauración compatible |
| R14 | Protección ante cambios de banco | Se respalda antes de migrar, se conserva evidencia histórica y no se invalidan otra vez los intentos de la versión actual |
| R15 | Conservación de fuentes | Se integran copias de archivos con las adaptaciones necesarias; no se eliminan originales por existir una copia activa |

Los límites de estadísticas heredadas sin detalle suficiente se documentan. No se inventa una reconstrucción exacta de información inexistente.

## Presentación y calidad

| ID | Requisito | Criterio de aceptación |
|---|---|---|
| R16 | Interfaz legible, accesible y adaptable | Cumple los criterios de Estilo, incluidos teclado, contraste y tarjetas del cuestionario |
| R17 | Documentos utilizables | UTF-8 correcto, rutas y anclas existentes, imágenes accesibles y tablas con columnas consistentes |
| R18 | Verificación con alcance explícito | Una URL accesible o una fila de cobertura no se presenta como revisión técnica exhaustiva |
| R19 | Compilación Astro/Node válida | Pasan tipos, build SSR y comprobaciones pertinentes; se comunican fallos y límites que no hayan podido comprobarse |

## Mantenimiento de requisitos

Las necesidades nuevas se añaden aquí con su criterio de aceptación. Los cambios técnicos que conservan comportamiento se documentan en Arquitectura. Las propuestas abiertas van en [Limpieza pendiente](LIMPIEZA_PENDIENTE.md), sin presentarlas como funcionalidades implementadas.

Este documento no aprueba por sí mismo reescribir el temario, generar más preguntas, añadir backend o sincronización remota. Esas decisiones requieren un encargo concreto.
