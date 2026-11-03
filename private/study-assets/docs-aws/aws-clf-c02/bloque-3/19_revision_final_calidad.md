# 19. Última revisión de calidad — Bloque III

Fecha: **3 de noviembre de 2026**. Alcance: cotejo visual selectivo, 16 figuras de apoyo y corrección editorial; se mantienen teoría, numeración, glosario de 225 entradas y exportación sin integración. No se ha vuelto a generar el temario.

## Páginas cotejadas directamente

Se abrieron las imágenes JPG originales a su resolución disponible y se compararon sus elementos principales con los capítulos. Los números siguientes son los del archivo y del índice físico del tema, no siempre el rótulo impreso. Son **40 páginas distintas**, incluidas las cuatro que ya se habían ampliado en la primera entrega; no se suman como 44. Se conserva el criterio de no inferir detalles ilegibles.

| Fuente | Páginas cotejadas en esta revisión | Elementos comparados y límites |
|---|---|---|
| T6 | 9, 11, 17, 18, 20, 25, 27, 29, 44, 46, 47, 54, 55, 57, 58 | Nueve decisiones EC2, creación/copia AMI, rol y perfil de instancia, script de arranque, persistencia, ejemplo CLI, hibernación, metadatos, VM/contenedores, tareas ECS y capacidad Fargate, entradas/rol/observación Lambda, miniaturas y cuadro de límites. No se certifican todos los menús diminutos de la consola p.9 ni se ejecutan comandos. Se confirma que las cifras y requisitos de las capturas son históricos. |
| T7 | 7, 9, 11, 16, 20, 30, 31, 33, 34 | EBS y alcance zonal, tabla SSD/HDD e IOPS, snapshots incrementales, catálogo de clases, capas Intelligent-Tiering, restauración Glacier, vaults frente a buckets, plazos de ejemplo Lifecycle y tabla histórica S3/Glacier. No se trasladan capacidades o precios antiguos a límites actuales. |
| T8 | 12, 14, 25, 26, 41, 42 | Replicación síncrona del standby Multi-AZ de instancia y asíncrona de réplica de lectura; claves DynamoDB, consulta/escaneo y particionado; seis copias de almacenamiento Aurora frente a réplicas SQL y explicación histórica de recuperación. El JSON lateral pequeño de p.25 no se declara transcrito carácter por carácter. |
| T5 | 12, 18, 20, 21, 24 | Reservas IPv4 y aritmética del ejemplo; NAT público y rutas; peering y no transitividad; túnel Site-to-Site y rango corporativo; etiquetas y solución del diagrama VPC. La tabla de p.12 es correcta; se señala la inconsistencia original de p.21. |
| T9 | 6, 9, 10, 16, 17 | Tipos ALB/NLB/CLB/GWLB y protocolos del esquema; seis enunciados y claves ELB; cinco enunciados y claves de alarmas CloudWatch. Se mantienen el carácter histórico de CLB y el matiz de HTTPS no exclusivo de ALB. Se confirma EBS >1000, no ≥1000, y la ausencia de estadístico como error de la alarma. |

Las imágenes no se han recortado, retocado ni sustituido. El cotejo usa los JPG suministrados; no se afirma haber extraído notas del presentador que no estén visibles en ellos.

## Figuras añadidas

Cada figura lleva explicación breve del concepto, etiqueta de fuente histórica y enlace al registro de la página. No se añaden portadas o separadores. Se conservan las figuras existentes de réplica de lectura T8 p.14 y VM/contenedores T6 p.44.

| Capítulo y sección | Figura añadida | Concepto y finalidad |
|---|---|---|
| [9.2](09_computacion_contenedores_serverless.md#seccion-9-2) | [t6_p11.jpg](figuras/t6_p11.jpg) | Crear y copiar una AMI |
| [9.5](09_computacion_contenedores_serverless.md#seccion-9-5) | [t6_p46.jpg](figuras/t6_p46.jpg) | ECS distribuye ejecuciones |
| [9.6](09_computacion_contenedores_serverless.md#seccion-9-6) | [t6_p47.jpg](figuras/t6_p47.jpg) | Capacidad EC2 frente a Fargate |
| [9.7](09_computacion_contenedores_serverless.md#seccion-9-7) | [t6_p54.jpg](figuras/t6_p54.jpg) | Orígenes y observación de Lambda |
| [9.7](09_computacion_contenedores_serverless.md#seccion-9-7) | [t6_p55.jpg](figuras/t6_p55.jpg) | Código, dependencias y rol de ejecución |
| [9.7](09_computacion_contenedores_serverless.md#seccion-9-7) | [t6_p58.jpg](figuras/t6_p58.jpg) | Cuotas de Lambda en la lámina histórica |
| [10.3](10_bases_de_datos.md#seccion-10-3) | [t8_p12.jpg](figuras/t8_p12.jpg) | Multi-AZ de instancia RDS |
| [10.5](10_bases_de_datos.md#seccion-10-5) | [t8_p26.jpg](figuras/t8_p26.jpg) | DynamoDB: acceso y particionado |
| [10.4](10_bases_de_datos.md#seccion-10-4) | [t8_p42.jpg](figuras/t8_p42.jpg) | Recuperación de Aurora en el material docente |
| [11.5](11_redes_y_contenidos.md#seccion-11-5) | [t5_p20.jpg](figuras/t5_p20.jpg) | Peering y rutas de las dos VPC |
| [11.6](11_redes_y_contenidos.md#seccion-11-6) | [t5_p21.jpg](figuras/t5_p21.jpg) | Túnel Site-to-Site y rango corporativo |
| [12.3](12_almacenamiento_y_recuperacion.md#seccion-12-3) | [t7_p11.jpg](figuras/t7_p11.jpg) | Snapshots, cifrado y elasticidad de EBS |
| [12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5) | [t7_p16.jpg](figuras/t7_p16.jpg) | Catálogo de clases S3 del curso |
| [12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5) | [t7_p20.jpg](figuras/t7_p20.jpg) | Movimiento entre capas en Intelligent-Tiering |
| [12.6](12_almacenamiento_y_recuperacion.md#seccion-12-6) | [t7_p30.jpg](figuras/t7_p30.jpg) | Opciones históricas de recuperación Glacier |
| [12.6](12_almacenamiento_y_recuperacion.md#seccion-12-6) | [t7_p31.jpg](figuras/t7_p31.jpg) | Vault y archivo frente a clases S3 |

Distribución de inserciones: **6** en cómputo, **3** en bases de datos, **2** en redes y **5** en almacenamiento. Total: **28 → 44** imágenes incrustadas en los siete capítulos; las **236** imágenes originales permanecen disponibles y sin cambios. En IA/analítica y otras categorías no se inventan capturas docentes que el paquete no incluye.

## Correcciones realizadas

- Corregidos **39 casos de separación** entre palabras y cifras en los capítulos y documentación editorial, entre ellos `contiene256 → contiene 256`, `dejando251 → dejando 251`, `los30 o60 → los 30 o 60`, `las236 → las 236`, `páginas36–37 → páginas 36–37`, `objetivos3.1 → objetivos 3.1` y `puertos80 → puertos 80`. Se excluyen destinos Markdown, URLs, código y etiquetas HTML para no romper rutas, CIDR, comandos ni nombres como IPv4, EC2, IMDSv2 o t3.large.
- Se retira la atribución errónea de una errata a **T5 p.12**: la tabla original utiliza correctamente 10.0.0.x para 10.0.0.0/24. El bloque 10.0.1.0/24 del diagrama es otra subred válida dentro de 10.0.0.0/16. Se conserva el cotejo de la página y su explicación técnica.
- Se advierte que el rótulo público **10.1.0.0/24 de T5 p.21** queda fuera de la VPC 10.0.0.0/16 dibujada. Se conserva la figura y se impide interpretarla como un plan para copiar.
- Se acompañan las nuevas figuras con cautelas concretas ya coherentes con la teoría: Fargate no elimina el escalado de tareas; los plazos de recuperación Aurora no son un SLA; los límites Lambda y tiempos Glacier son históricos; vault no equivale a bucket. No se ha introducido una reescritura de los capítulos.
- No se encontraron discrepancias de las claves de ELB/CloudWatch, de la tabla histórica EBS o de los conceptos principales comparados que exigieran sustituir la explicación. El texto OCR original se conserva como recuperación, sin presentarlo ahora como una transcripción depurada completa.

## Objetivos, fuentes y conceptos

Se volvió a consultar la [guía oficial 3.1–3.8](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html) y el [historial de cambios](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html). Se mantiene la correspondencia: 08 cubre despliegue/infraestructura; 09 cómputo; 10 bases; 11 redes; 12 almacenamiento; 13 IA y analítica; 14 integración y otras categorías. No se elimina ninguna habilidad de la matriz ni se toma la revisión selectiva de fuentes antiguas como sustituto de los objetivos que requieren ampliación oficial.

El glosario conserva **225** entradas canónicas, sin ampliación indiscriminada ni cambios de definiciones. Se comprueban alias y destinos de la exportación contra las secciones reales. `conceptos_bloque_3.json` permanece byte a byte intacto y **no se importa** en la aplicación.

## Comprobaciones de cierre

- **Contenido existente:** `pnpm.cmd verify:content` correcto: 7 apuntes, 247 conceptos, 16 comparativas y 370 preguntas de la aplicación conservada.
- **Compilación:** `pnpm.cmd build` correcto: 24 páginas estáticas; cero errores, advertencias e indicaciones de Astro.
- **Markdown y navegación documental:** lectura UTF-8 estricta y comprobación de rutas, anclas y destinos del glosario sin errores. Se procesaron los documentos con el renderizador Satteri instalado por el proyecto.
- **Presentación:** en el HTML temporal de los siete capítulos, el navegador decodificó las **44 imágenes** y comprobó las columnas de las **16 tablas**, sin errores. Se inspeccionó además la presentación del nuevo diagrama Multi-AZ con su explicación. No es una auditoría visual de todas las posiciones o tamaños de pantalla ni una integración en la aplicación.
- **Integridad:** los **236 JPG** se decodifican y coinciden byte a byte con las fuentes. El control SHA-256 de **643 archivos** —405 archivos previos, 236 imágenes y los dos archivos de glosario/exportación— no detecta cambios. Se conservan las 225 entradas y su exportación sin importarlas.
- **Fuentes oficiales:** consultadas nuevamente la guía del dominio 3 y sus revisiones. Para las 57 referencias del registro se reutiliza la comprobación HTTP del **2 de noviembre**, todas con respuesta 200; no se declara una nueva solicitud a cada URL durante esta revisión. El control local confirma que no hay referencias nuevas sin ese registro.

Las comprobaciones ad hoc y el HTML de revisión se mantienen en archivos temporales; no se añaden tests al proyecto. Los resultados también se recogen en el [informe de validación](17_informe_validacion.md).

## Limitaciones que siguen abiertas

- Este cotejo selecciona elementos de 40 páginas; **no verifica literalmente todas las notas de las 236**. Las 196 restantes conservan el estado de revisión general y OCR anterior.
- Incluso en páginas seleccionadas quedan fuera de una certificación literal los menús pequeños, ejemplos de JSON laterales, detalles manuscritos poco claros y cualquier carácter no legible. Se describen solo los elementos que se pudieron leer.
- No se certifican cifras históricas como actuales. No se han ejecutado recursos AWS, políticas, migraciones, restauraciones, comandos de la consola o ensayos de rendimiento.
- La conversión/renderización de documentos no equivale a integrar o probar rutas nuevas de aplicación. La aplicación y su progreso, favoritos y preguntas no se han modificado.
