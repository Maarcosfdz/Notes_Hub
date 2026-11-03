# 17. Informe de validación del Bloque III

Fecha de contraste oficial y HTTP: **2 de noviembre de 2026**. Cierre de comprobaciones locales: **3 de noviembre de 2026**. Se entregan los siete capítulos 08–14, glosario, exportación de conceptos, corpus por página, matriz y registro de enlaces. Se ha conservado la aplicación existente y los Bloques I y II. El alcance de los controles se describe aquí sin equiparar correspondencia documental con literalidad exhaustiva.

## Resultado y archivos

| Entrega | Resultado |
|---|---|
| [Índice](00_indice.md) | Orden de lectura, estado, fuentes y documentación de revisión |
| [08. Despliegue e infraestructura](08_despliegue_e_infraestructura.md) | API, consola, CLI, SDK, IaC, modelos de despliegue, AZ, regiones y edge |
| [09. Cómputo](09_computacion_contenedores_serverless.md) | EC2, lanzamiento, ciclo de vida, imágenes, ECS/EKS/ECR/Fargate, Lambda, ELB y Auto Scaling |
| [10. Bases de datos](10_bases_de_datos.md) | Administración, RDS/Aurora, disponibilidad, réplicas, NoSQL, memoria, documentos, grafos y migración |
| [11. Redes](11_redes_y_contenidos.md) | Direccionamiento, VPC, rutas, gateways, conexiones, actividades, DNS, contenido y APIs |
| [12. Almacenamiento](12_almacenamiento_y_recuperacion.md) | Bloques, objetos, archivos, clases, restauración, gateway híbrido y protección |
| [13. IA/ML y analítica](13_ia_ml_y_analitica.md) | Desarrollo por tarea, comparación de servicios y flujo analítico completo |
| [14. Integración y otras categorías](14_integracion_y_otros_servicios.md) | Mensajes, eventos, aplicaciones, herramientas, usuario final, frontend, IoT y soporte |
| [Glosario](15_glosario_integral_tecnologia.md) | 225 conceptos canónicos;97 sin alias y sin campos de relleno; componentes y productos diferentes separados |
| conceptos_bloque_3.json | Exportación con destino Markdown para integración futura, sin tocar el buscador actual |
| [Matriz](16_matriz_cobertura.md) | 236 correspondencias individuales y desglose de habilidades 3.1–3.8 |
| [Registro HTTP](18_registro_enlaces.md) | Referencias accesibles y redirecciones; distinto de comprobar cada afirmación del destino |

La suma orientativa de los siete capítulos supera las **21.000 palabras**. El corpus de recuperación individual contiene aproximadamente 24.800 y el glosario,11.200. Son recuentos mecánicos que incluyen tablas y metadatos; no se usan como prueba única de calidad. La revisión se apoya también en explicaciones, casos, actividades y distinciones técnicas.

## Fase 1: trabajo realmente realizado sobre las fuentes

Se leyeron README, instrucciones rápidas, prompt maestro completo, auditoría, inventario, base docente y ampliación del paquete. Se confirmó que la base inicial era una síntesis por familias y no una transcripción de 236 páginas. Se conservaron copias de los documentos de procedencia dentro de `fuentes/` con rutas relativas de figuras adaptadas.

Se abrieron los siete PDF originales mediante PyMuPDF y se comprobaron los recuentos:44 T5,62 T6,43 T7,42 T8,29 T9,2 T1 y 14 T2. Los cinco temas principales suman 220 páginas y las selecciones añaden 16. La extracción directa devolvió cero caracteres en T6–T9 y T7; solo se encontraron 591 caracteres en T5 y 122 en T2, insuficientes como transcripción. Por eso se utilizó Windows OCR sobre cada una de las 236 imágenes suministradas.

Se revisaron visualmente las 236 imágenes en 40 láminas de contacto. En la primera entrega se abrieron individualmente T5 p.24, T9 p.10, T7 p.9 y T8 p.12 para cotejar solución de etiquetado, actividad ELB, tabla numérica EBS y diagrama Multi-AZ. Las imágenes originales se copiaron sin recortar ni modificar. Los números de cita siguen JPG/índice físico en T5–T9, distinguiendo rótulos impresos desfasados en T6. En T1/T2 se registró aparte el índice del PDF seleccionado.

El [corpus por página](fuentes/05_CORPUS_POR_PAGINA.md) conserva contenido recuperado, no solo títulos: definiciones, listas, etiquetas de diagramas, ejemplos, preguntas y celdas reconocidas. **No se ha terminado una depuración manual literal de todas las líneas OCR**. Puede haber errores de caracteres, columnas desordenadas y anotaciones mezcladas. Esta capa se etiqueta como fuente de recuperación con limitaciones; no se presenta como texto docente definitivo para memorizar. Los capítulos proporcionan la explicación editorial legible y las reconstrucciones que sí se han utilizado.

Por tanto, la fase de fuentes está **ampliada y trazada, con cotejo literal pendiente**. No se afirma haber logrado una transcripción exhaustiva certificada antes de redactar. Se continuó con contenido verificable, figuras y documentación oficial, conforme a la instrucción de avanzar sin inventar lo que no se pudiera leer. La matriz conserva un estado explícito para cada página en lugar de declarar todas verificadas por tener una fila.

## Fase 2: redacción y revisión por capítulo

Se trabajó sucesivamente 08,09,10,11,12,13 y 14, escribiendo cada archivo y ejecutando una revisión de estructura, marcadores y rutas antes de pasar al siguiente. Las referencias hacia capítulos todavía no creados se trataron como referencias planificadas durante esa secuencia y se comprobaron de nuevo al existir todos.

Se desarrollaron párrafos, tablas de comparación y escenarios. Los conceptos ya explicados en los bloques previos se enlazan mediante anclas concretas, especialmente responsabilidad compartida, IAM y SG/NACL. No se sobrescribieron esos contenidos. Las páginas administrativas se conservan en el registro de fuente, sin convertir portadas o separadores en secciones del manual.

Las actividades T5 pp.23–24 y T9 pp.9–10 conservan enunciados, clave y explicación en los capítulos 11 y 09. La actividad CloudWatch T9 pp.16–17 se conserva en 14 y enlaza al desarrollo previo 7.11. No se añadieron al banco de preguntas. Las páginas económicas, incluidas T6 pp.32–40, se registran en las fuentes y matriz para futuro Bloque IV; no se presentan como precios actuales ni como teoría técnica completamente nueva del III.

Las capturas conservan anotaciones y textos añadidos sin fecha. El copyright de 2022 no acredita que toda nota visible pertenezca a esa edición ni que su autor sea AWS. Se conserva el archivo como fuente entregada y se separa del contraste oficial.

## Correcciones y contrastes técnicos

- **EC2:** ciclo de vida frente a persistencia de instance store; parada distinta de reinicio; costes de recursos asociados distintos del uso de instancia; roles, SSH y user data diferenciados. Se explica IMDSv2 frente al ejemplo antiguo de metadatos sin token.
- **Contenedores:** imagen, ejecución, registro, orquestación y capacidad separados. ECR no ejecuta por sí solo contenedores; Fargate no es un alias de ECS o EKS. La configuración de lanzamiento antigua se contrasta con launch templates versionadas.
- **ELB:** ALB/NLB/GWLB/CLB diferenciados. Se preserva la clave docente CLB y se señala su carácter anterior. HTTPS no identifica de forma exclusiva ALB. Los health checks no se presentan como garantía completa de salud de negocio ni de todo escenario sin destinos sanos.
- **RDS:** standby de Multi-AZ DB instance frente a lectores de Multi-AZ DB cluster; réplicas de lectura frente a copias y desfase asíncrono. Se separan migración de datos DMS y conversión SCT/DMS Schema Conversion, sin tratarlos como productos idénticos.
- **VPC:** CIDR primario frente a bloques secundarios; cuatro /24 no agotan un /16; dirección pública, ruta y controles son condiciones distintas. DNS multivalor no equivale a ELB, pesos DNS no garantizan porcentajes exactos de conexiones y geolocalización no certifica cumplimiento legal.
- **Almacenamiento:** EBS frente a instance store y sistemas de archivos; excepción Multi-Attach compatible sin prometer concurrencia segura de cualquier filesystem. Snapshots no son objetos del bucket ordinario del cliente. Se separan clases S3, alcance zonal, restauración y el vocabulario histórico Glacier/vault. EFS Regional y One Zone no tienen el mismo alcance.
- **IA y analítica:** modelos propios frente a APIs preparadas; dirección texto/voz; extracción estructurada frente a visión y análisis de lenguaje; preparación, streaming, consulta, búsqueda y visualización diferenciados. Quick y Quick Sight se explican según relación actual, sin usarlos como alias perfectos.
- **Otras categorías:** AppStream2.0 de la guía frente a WorkSpaces Applications en la documentación actual; X-Ray frente a instrumentación OpenTelemetry y mantenimiento de SDK/daemon; aviso fechado de plugins Q Developer. Los cambios de nombre no se trasladan como garantía comercial general.

Las referencias oficiales concretas figuran junto a esas explicaciones. Se consultaron la guía, servicios incluidos e historial CLF-C02: versión publicada 1.3 del 29-10-2026 y margen aproximado de un mes para reflejar actualizaciones en el examen. El material distingue publicación de aplicación inmediata y no pretende predecir la composición exacta de un examen individual.

## Comprobaciones ejecutadas

1. **Contenido existente:** `pnpm.cmd verify:content`, correcto:7 apuntes actuales,247 conceptos,16 comparativas y 370 preguntas. Es una comprobación de la aplicación conservada; no se utiliza para afirmar que los nuevos capítulos ya estén integrados.
2. **Compilación del proyecto:** `pnpm.cmd build`, correcto: Astro con cero errores, cero advertencias y cero hints;24 páginas estáticas. Los nuevos Markdown permanecen fuera de la colección activa por instrucción expresa de no modificar la aplicación.
3. **Render de nuevos Markdown:** procesados adicionalmente con el renderizador Markdown Satteri instalado por el proyecto, con tablas GFM. Se generó HTML temporal de los documentos para comprobar análisis y estructura. Esto comprueba conversión, no una revisión visual de cada página web ni rutas activas de aplicación.
4. **Rutas y anclas:** comprobación de destinos Markdown y JSON, anclas explícitas y referencias cruzadas. Se corrigieron rutas de imágenes en las copias de fuentes y separaciones entre tablas y párrafos. Las referencias individuales de las 236 páginas tienen destino real.
5. **Figuras:**236 JPG decodificados y verificados con Pillow, comparados byte a byte con los originales. Tras la revisión final se utilizan 44 imágenes incrustadas en capítulos y se conservan las restantes en fuentes/matriz. No se afirma haberlas probado todas mediante el navegador de la aplicación.
6. **Glosario:**225 entradas, sin nombres o alias equivalentes asignados a conceptos distintos según el control canónico; definición, uso y diferencias en texto.97 entradas no tienen alias y omiten ese campo. ASG, AssumeRole u otros recursos/operaciones no se utilizan para nombrar un servicio completo; las variantes de clase y productos se separan. Los destinos exportados son Markdown comprobados, no rutas web inexistentes.
7. **UTF-8:** lectura estricta, búsqueda de caracteres de sustitución y marcadores pendientes. Los errores posibles de OCR se distinguen de codificación: que un texto sea UTF-8 no garantiza que el reconocimiento haya leído bien cada palabra.
8. **HTTP:** 57 referencias comprobadas por solicitud GET con seguimiento de redirecciones el 2 de noviembre, todas con respuesta 200. Una repetición final solicitada tras escribir el informe no se ejecutó porque la revisión automática de permisos agotó su plazo; no se presenta esa repetición como realizada. El cierre local reutiliza el registro anterior y comprueba que no hay URL nuevas sin control. Accesibilidad no equivale a validar todas las afirmaciones ni a que cada producto conserve la misma disponibilidad comercial.
9. **Integridad previa:** cotejo SHA-256 de 405 archivos protegidos en Bloques I/II, `src/`, `scripts/` y `public/`. Sin cambios respecto al comienzo de este trabajo. No se modificaron ni crearon tests, preguntas, favoritos, progreso ni se importó el glosario en la aplicación.

## Limitaciones pendientes

- **Literalidad de fuentes:** el OCR de 236 páginas no está corregido manualmente en su totalidad. Deben cotejarse notas pequeñas, comandos de consola, celdas densas y anotaciones. La matriz identifica especialmente T6 pp.9,13–15,18,23,25,27,29–30,32–40,58; T7 pp.12,22,27,30–36,42–43 y T8 pp.16–20,39–42. Esta es una limitación real de la fase 1, no una comprobación perfecta declarada.
- **Compatibilidades y cifras:** se han contrastado puntos técnicos seleccionados, no cada condición comercial o cuota de todos los productos. Las cifras de 2022 permanecen históricas. No se hicieron laboratorios en una cuenta AWS, migraciones reales, restauraciones, pruebas de políticas ni mediciones de rendimiento.
- **Aplicación:** no se integran capítulos ni conceptos para respetar la restricción actual. La exportación requiere una futura decisión de integración y consolidación con los conceptos existentes. No se declara comprobada navegación de rutas nuevas que no se han creado.
- **Presentación:** las figuras son páginas completas y algunas requieren ampliar. La conversión a HTML se ejecutó, pero no se realizó una inspección visual de todas las posiciones, tamaños de pantalla o accesibilidad de un lector nuevo.
- **Servicios actuales:** la guía usa nombres que pueden diferir de productos actuales. Los avisos fechados se mantienen separados del material histórico y de los objetivos de examen; antes de implantar se consulta documentación y disponibilidad actual.

El resultado proporciona desarrollo conceptual de 3.1–3.8 y trazabilidad individual de 236 páginas. **No se certifica cobertura literal exhaustiva ni se da por cerrada la depuración de cada nota fuente.** Los pendientes están conservados para una auditoría independiente sin ocultar el contenido recuperado.

## Actualización final de calidad — 3 de noviembre de 2026

Se cotejaron directamente **40 páginas** y se añadieron **16 figuras explicadas**, pasando de 28 a 44 imágenes en los capítulos. La lista exacta por fuente y de cada inserción está en [19. Revisión final de calidad](19_revision_final_calidad.md). Se corrigieron 39 separaciones de palabras y números y se explicó la inconsistencia de direccionamiento de T5 p.21. Se retira la atribución errónea de una errata a T5 p.12: su tabla original es correcta y 10.0.1.0/24 representa otra subred válida del diagrama. Se conserva su cotejo en la matriz. La revisión preserva los objetivos 3.1–3.8 y las 225 entradas de glosario.

En el cierre se repitieron `pnpm.cmd verify:content` y `pnpm.cmd build`: correctos, con 370 preguntas conservadas, 24 páginas estáticas y cero errores, advertencias e indicaciones de Astro. El control documental no encontró errores de UTF-8, rutas, anclas ni destinos del glosario. En el HTML temporal de los siete capítulos el navegador decodificó las 44 imágenes y verificó las columnas de las 16 tablas; se inspeccionó visualmente el nuevo diagrama Multi-AZ y su explicación. Los 236 JPG coinciden con sus originales y el cotejo SHA-256 de 643 archivos protegidos no detectó modificaciones. No se integra la exportación ni se crean tests.

Se consultaron de nuevo la guía oficial del dominio 3 y sus revisiones. El control HTTP de las 57 referencias reutiliza expresamente el registro del 2 de noviembre; no representa nuevas solicitudes individuales durante esta revisión.

El listado inicial de páginas con notas pendientes no equivale a que ninguna haya sido cotejada ahora: la matriz marca las 40 revisadas y el documento 19 delimita los elementos legibles. El OCR no se vuelve una transcripción literal certificada por añadir figuras ni por superar controles de formato.
