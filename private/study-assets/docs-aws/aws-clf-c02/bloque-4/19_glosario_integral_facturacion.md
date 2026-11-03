# 19. Glosario integral de facturación, precios y soporte

Cada entrada reúne un concepto canónico, función, uso y diferencia relevante. Solo se incluyen alias equivalentes; subtipos, componentes y herramientas relacionadas tienen sus propias entradas. Las definiciones se redactan individualmente, sin unir fragmentos OCR. La procedencia enlaza al apartado docente/oficial donde se desarrolla el concepto y a un glosario anterior cuando se encuentra una equivalencia de nombre o alias.

Los conceptos compartidos se consolidan aquí para consulta económica, sin modificar sus entradas de los Bloques I–III. Los cambios comerciales fechados, especialmente soporte y Free Tier, se interpretan según las actualizaciones del Bloque IV. Esto no importa ningún concepto al buscador de la aplicación. Las magnitudes, identificadores de ejemplo y nombres de clientes no son servicios nuevos.

<a id="all-upfront"></a>

## All Upfront

**Alias:** AURI.

Forma de pago que abona por adelantado el compromiso contratado. En las RI de la lámina se denomina AURI y sirve para comparar flujo de caja y descuento; no significa que red, discos y toda la arquitectura queden pagados.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="always-free"></a>

## Always Free

Ofertas de uso gratuito de servicios dentro de cantidades y condiciones publicadas. No significan uso ilimitado ni que toda la cuenta sea gratuita; hay que distinguir su franquicia de los créditos y de la duración del plan de cuenta.

**Procedencia:** explicación de estudio y referencias en [15.13](15_modelos_de_precios_aws.md#seccion-15-13).

<a id="amazon-athena"></a>

## Amazon Athena

**Alias:** Athena.

Servicio para consultar conjuntos de datos mediante SQL, incluido el análisis compatible de informes conservados en S3. Permite investigar detalle sin confundirlo con el dataset CUR; las consultas y su infraestructura económica tienen condiciones propias que deben añadirse al análisis.

**Procedencia:** explicación de estudio y referencias en [17.5](17_facturacion_presupuestos_y_costes.md#seccion-17-5). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-athena).

<a id="amazon-cloudfront"></a>

## Amazon CloudFront

**Alias:** CloudFront.

Servicio de distribución de contenido mediante una red de ubicaciones de entrega. Se utiliza para acercar contenido a usuarios; económicamente hay que distinguir transferencia del origen, entrega al cliente y solicitudes, sin deducir gratuidad total de una exención concreta.

**Procedencia:** explicación de estudio y referencias en [15.9](15_modelos_de_precios_aws.md#seccion-15-9). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-cloudfront).

<a id="amazon-cloudwatch"></a>

## Amazon CloudWatch

**Alias:** CloudWatch.

Servicio de observabilidad con métricas, logs y alarmas que ayudan a entender el comportamiento operativo. Sus mediciones permiten evaluar dimensionamiento y elasticidad; no es un informe de factura ni un plan de soporte, y una alarma no identifica por sí sola la causa de un coste.

**Procedencia:** explicación de estudio y referencias en [16.6](16_tco_y_optimizacion_de_costes.md#seccion-16-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-cloudwatch).

<a id="amazon-dynamodb"></a>

## Amazon DynamoDB

**Alias:** DynamoDB.

Servicio de base de datos NoSQL administrada, visible como partida en el panel docente. Se utiliza para cargas de datos compatibles con su modelo; su coste no es una licencia RDS ni queda descrito por una barra agregada del gráfico.

**Procedencia:** explicación de estudio y referencias en [17.2](17_facturacion_presupuestos_y_costes.md#seccion-17-2). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-dynamodb).

<a id="amazon-ebs"></a>

## Amazon EBS

**Alias:** Elastic Block Store, EBS.

Almacenamiento de bloques utilizado por instancias EC2. Se paga capacidad aprovisionada y, según tipo, rendimiento y copias; detener la instancia no libera automáticamente el volumen ni elimina sus cargos. No equivale a pagar solo los archivos que la aplicación ha escrito.

**Procedencia:** explicación de estudio y referencias en [15.10](15_modelos_de_precios_aws.md#seccion-15-10). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-ebs).

<a id="amazon-ec2"></a>

## Amazon EC2

**Alias:** Elastic Compute Cloud, EC2.

Servicio de capacidad de cómputo mediante instancias configurables. Permite elegir recursos y modalidades económicas; su precio no incluye automáticamente volúmenes, licencias de terceros, transferencia y soporte. El mismo recurso técnico puede recibir un descuento de facturación compatible.

**Procedencia:** explicación de estudio y referencias en [15.3](15_modelos_de_precios_aws.md#seccion-15-3). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-ec2).

<a id="amazon-ec2-auto-scaling"></a>

## Amazon EC2 Auto Scaling

**Alias:** EC2 Auto Scaling.

Mecanismo para mantener y ajustar una población de instancias EC2 conforme a políticas y necesidades. Ayuda a adaptar capacidad a demanda, pero puede reemplazar una instancia detenida por otra acción. No es un descuento de compra ni un límite de gasto.

**Procedencia:** explicación de estudio y referencias en [16.6](16_tco_y_optimizacion_de_costes.md#seccion-16-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#ec2-auto-scaling).

<a id="amazon-efs"></a>

## Amazon EFS

**Alias:** Elastic File System, EFS.

Sistema de archivos administrado para acceso compartido compatible. Su coste depende de modalidades de almacenamiento, acceso y rendimiento; no se calcula copiando la tarifa de EBS ni se garantiza un descuento uniforme por aumentar GB.

**Procedencia:** explicación de estudio y referencias en [15.10](15_modelos_de_precios_aws.md#seccion-15-10). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-efs).

<a id="amazon-elasticache"></a>

## Amazon ElastiCache

**Alias:** ElastiCache.

Servicio administrado de caché que figura entre los servicios del panel histórico T4 p.27. Se distingue de Elasticsearch Service, nombre que aparece en la leyenda de T4 p.30; tener nombres parecidos no implica que presten la misma función.

**Procedencia:** explicación de estudio y referencias en [17.2](17_facturacion_presupuestos_y_costes.md#seccion-17-2). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-elasticache).

<a id="amazon-elasticsearch-service-nombre-historico"></a>

## Amazon Elasticsearch Service, nombre histórico

Denominación histórica visible en la captura T4 p.30 de un servicio de búsqueda y análisis. Se conserva para interpretar esa leyenda y se remite al servicio de búsqueda del Bloque III; no se usa como alias de ElastiCache ni como nombre comercial actual universal.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3).

<a id="amazon-fsx"></a>

## Amazon FSx

**Alias:** FSx.

Familia de sistemas de archivos administrados para necesidades y motores específicos. Se evalúan capacidad, rendimiento y condiciones de la variante elegida; no es una clase S3 ni un sinónimo de EFS, aunque todos conserven datos.

**Procedencia:** explicación de estudio y referencias en [15.10](15_modelos_de_precios_aws.md#seccion-15-10). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-fsx).

<a id="amazon-rds"></a>

## Amazon RDS

**Alias:** Relational Database Service, RDS.

Servicio administrado de bases de datos relacionales. En su factura se separan cómputo, motor, almacenamiento, rendimiento, copias y red según modalidad; una Reserved DB Instance no importa automáticamente todas las reglas de una RI EC2.

**Procedencia:** explicación de estudio y referencias en [15.12](15_modelos_de_precios_aws.md#seccion-15-12). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-rds).

<a id="amazon-s3"></a>

## Amazon S3

**Alias:** Simple Storage Service, S3.

Almacenamiento de objetos organizado en buckets. Su economía depende de clase, cantidad almacenada, solicitudes, recuperación y transferencias; elegir la menor tarifa por GB puede ser inadecuado si aumenta operaciones o no cumple el tiempo de acceso requerido.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-s3).

<a id="amazon-sagemaker-ai"></a>

## Amazon SageMaker AI

**Alias:** SageMaker AI.

Servicio para desarrollar, entrenar y desplegar soluciones de aprendizaje automático. Sus recursos elegibles pueden tener Savings Plans específicos; eso no hace que cualquier servicio de IA quede cubierto por Compute Savings Plans ni convierte el plan económico en el servicio de entrenamiento.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-sagemaker-ai).

<a id="amazon-sns"></a>

## Amazon SNS

**Alias:** Simple Notification Service, SNS.

Servicio de publicación de mensajes a suscriptores mediante temas. Puede transportar notificaciones de presupuestos y anomalías con la configuración pertinente; recibir un mensaje no equivale a detener recursos ni a ejecutar una acción de Budgets.

**Procedencia:** explicación de estudio y referencias en [17.4](17_facturacion_presupuestos_y_costes.md#seccion-17-4). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-sns).

<a id="amazon-vpc"></a>

## Amazon VPC

**Alias:** Virtual Private Cloud, VPC.

Entorno de red virtual para organizar recursos y conectividad. Que una conexión se mantenga dentro de una VPC no demuestra coste cero: AZ, direcciones, transferencia y componentes como NAT deben analizarse por separado.

**Procedencia:** explicación de estudio y referencias en [15.9](15_modelos_de_precios_aws.md#seccion-15-9). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#amazon-vpc).

<a id="ami"></a>

## AMI

**Alias:** Amazon Machine Image.

Imagen utilizada para lanzar instancias EC2 con una configuración de software. Si se adquiere una AMI de tercero, puede existir coste de licencia además de infraestructura; la imagen, el derecho de uso del software y la instancia ejecutada son elementos distintos.

**Procedencia:** explicación de estudio y referencias en [18.10](18_soporte_y_recursos_aws.md#seccion-18-10). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#ami-amazon-machine-image).

<a id="amortized-costs"></a>

## Amortized costs

**Alias:** Costes amortizados.

Perspectiva que distribuye costes iniciales y periódicos de compromisos a lo largo del periodo para analizar su coste económico. Ayuda a comparar consumo sin interpretar todo el adelanto como un único día de operación; no cambia cuándo se pagó el dinero.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3).

<a id="aws-basic-support"></a>

## AWS Basic Support

**Alias:** Basic Support.

Plan básico con atención de cuenta/facturación y recursos de autoservicio y salud. Permite obtener ayuda de facturación sin contratar asistencia técnica productiva; no ofrece por ese nombre las severidades y prestaciones de los planes técnicos superiores.

**Procedencia:** explicación de estudio y referencias en [18.2](18_soporte_y_recursos_aws.md#seccion-18-2).

<a id="aws-billing-and-cost-management"></a>

## AWS Billing and Cost Management

**Alias:** Billing and Cost Management.

Conjunto de funciones para revisar y pagar cargos, analizar uso, planificar y organizar costes. Sirve como ámbito de gestión económica; no convierte factura, previsión, presupuesto y estimación en una sola métrica intercambiable.

**Procedencia:** explicación de estudio y referencias en [17.1](17_facturacion_presupuestos_y_costes.md#seccion-17-1).

<a id="aws-budgets"></a>

## AWS Budgets

**Alias:** Budgets.

Herramienta para seguir objetivos de coste, uso o compromisos y emitir avisos reales o previstos. Puede ejecutar acciones compatibles configuradas, pero su evaluación y alcance no constituyen un corte universal e instantáneo de todo gasto AWS.

**Procedencia:** explicación de estudio y referencias en [17.4](17_facturacion_presupuestos_y_costes.md#seccion-17-4). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-budgets).

<a id="aws-business-support-legado"></a>

## AWS Business Support, legado

**Alias:** Business Support.

Plan histórico de asistencia a producción de la presentación y de contratos en transición. Se distingue de Business Support+, con oferta actual diferente; el aviso de retirada tiene fecha y excepciones y no permite afirmar que jamás existió.

**Procedencia:** explicación de estudio y referencias en [18.3](18_soporte_y_recursos_aws.md#seccion-18-3).

<a id="aws-business-support-plus"></a>

## AWS Business Support+

**Alias:** Business Support+.

Plan de asistencia técnica que incluye acceso 24/7 a expertos y herramientas bajo condiciones publicadas. Se valora para operar cargas productivas; no es un alias exacto del antiguo Business Support ni implica un TAM designado por el mero nombre del plan.

**Procedencia:** explicación de estudio y referencias en [18.2](18_soporte_y_recursos_aws.md#seccion-18-2).

<a id="aws-cloudformation"></a>

## AWS CloudFormation

**Alias:** CloudFormation.

Servicio para definir y gestionar conjuntos de recursos mediante plantillas de infraestructura. Permite repetir despliegues; los recursos creados mantienen sus propias tarifas. La lámina de servicios sin cargo adicional no demuestra gratuidad de todo recurso o funcionalidad moderna asociada.

**Procedencia:** explicación de estudio y referencias en [15.2](15_modelos_de_precios_aws.md#seccion-15-2). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-cloudformation).

<a id="aws-compute-optimizer"></a>

## AWS Compute Optimizer

**Alias:** Compute Optimizer.

Servicio que analiza configuración y métricas de recursos compatibles para proponer mejoras de dimensionamiento y detectar ociosidad. Se utiliza para evaluar alternativas con datos; una recomendación requiere validar rendimiento y dependencias, y no equivale a una reducción de factura ya realizada.

**Procedencia:** explicación de estudio y referencias en [16.6](16_tco_y_optimizacion_de_costes.md#seccion-16-6). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#aws-compute-optimizer).

<a id="aws-cost-and-usage-report"></a>

## AWS Cost and Usage Report

**Alias:** CUR, Cost and Usage Report.

Informe detallado de uso y costes con partidas y dimensiones para análisis. Se utiliza para investigar y conciliar más allá de un total agregado; sus actualizaciones no son una alerta instantánea y no deben sumarse versiones acumulativas como consumo distinto.

**Procedencia:** explicación de estudio y referencias en [17.5](17_facturacion_presupuestos_y_costes.md#seccion-17-5). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-cost-and-usage-report).

<a id="aws-cost-anomaly-detection"></a>

## AWS Cost Anomaly Detection

**Alias:** Cost Anomaly Detection.

Función que detecta cambios atípicos en patrones de gasto y envía avisos. Complementa umbrales fijos porque busca desviaciones respecto al comportamiento observado; usa datos económicos con latencia y no sustituye un sistema de respuesta de seguridad.

**Procedencia:** explicación de estudio y referencias en [17.9](17_facturacion_presupuestos_y_costes.md#seccion-17-9).

<a id="aws-cost-categories"></a>

## AWS Cost Categories

**Alias:** Cost Categories.

Mecanismo de reglas para agrupar costes según estructuras del negocio. Puede combinar dimensiones como cuenta y etiquetas para imputar a equipos; no es una OU ni una autorización IAM, y cambiar el reparto no reduce por sí mismo la factura.

**Procedencia:** explicación de estudio y referencias en [17.7](17_facturacion_presupuestos_y_costes.md#seccion-17-7).

<a id="aws-cost-explorer"></a>

## AWS Cost Explorer

**Alias:** Cost Explorer.

Herramienta para explorar costes y uso con agrupaciones, filtros, informes y previsiones. Ayuda a investigar tendencias del consumo existente; una previsión histórica no sustituye modelar explícitamente una arquitectura nueva con Pricing Calculator.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-cost-explorer).

<a id="aws-cost-optimization-hub"></a>

## AWS Cost Optimization Hub

**Alias:** Cost Optimization Hub.

Función que consolida y prioriza recomendaciones de optimización entre cuentas y regiones compatibles. Considera descuentos y relaciones entre oportunidades para estimar ahorro; no debe sumarse cada propuesta como si todas fueran independientes o ya se hubieran aplicado.

**Procedencia:** explicación de estudio y referencias en [17.9](17_facturacion_presupuestos_y_costes.md#seccion-17-9).

<a id="aws-data-exports"></a>

## AWS Data Exports

**Alias:** Data Exports.

Función para crear exportaciones de datos económicos y otros conjuntos compatibles. Permite seleccionar columnas o filas y entregar resultados para análisis; CUR 2.0 es un conjunto disponible, no un sinónimo de toda la herramienta.

**Procedencia:** explicación de estudio y referencias en [17.5](17_facturacion_presupuestos_y_costes.md#seccion-17-5).

<a id="aws-developer-support-legado"></a>

## AWS Developer Support, legado

**Alias:** Developer Support.

Plan histórico orientado a desarrollo y pruebas, con restricciones de horario y severidad en la lámina de 2022. Tiene transición de fin de soporte publicada para 2027 en el ámbito indicado; no se presenta como uno de los planes generales actuales ni se omiten excepciones regionales.

**Procedencia:** explicación de estudio y referencias en [18.3](18_soporte_y_recursos_aws.md#seccion-18-3).

<a id="aws-documentation"></a>

## AWS Documentation

Documentación oficial con guías conceptuales, procedimientos y referencias de servicios y APIs. Es adecuada para comprobar configuración y requisitos; se distingue de un blog fechado, un caso de soporte y una respuesta comunitaria.

**Procedencia:** explicación de estudio y referencias en [18.7](18_soporte_y_recursos_aws.md#seccion-18-7).

<a id="aws-elastic-beanstalk"></a>

## AWS Elastic Beanstalk

**Alias:** Elastic Beanstalk.

Servicio que facilita desplegar y administrar aplicaciones utilizando recursos AWS. El ejemplo económico distingue la función de gestión de EC2, almacenamiento y balanceadores subyacentes; no equivale a ejecutar una aplicación completa sin ningún cargo.

**Procedencia:** explicación de estudio y referencias en [15.2](15_modelos_de_precios_aws.md#seccion-15-2). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-elastic-beanstalk).

<a id="aws-enterprise-on-ramp-legado"></a>

## AWS Enterprise On-Ramp, legado

**Alias:** Enterprise On-Ramp.

Plan legado con transición específica de fin de soporte publicada por AWS. Se distingue de Enterprise Support, que continúa en el catálogo actual; no deben fusionarse como alias porque comparten la palabra Enterprise.

**Procedencia:** explicación de estudio y referencias en [18.3](18_soporte_y_recursos_aws.md#seccion-18-3).

<a id="aws-enterprise-support"></a>

## AWS Enterprise Support

**Alias:** Enterprise Support.

Plan de soporte técnico y acompañamiento estratégico con TAM designado y prestaciones publicadas para necesidades empresariales. No debe confundirse con Enterprise On-Ramp, que tiene su propia transición de fin de soporte, ni con un contrato de implantación profesional.

**Procedencia:** explicación de estudio y referencias en [18.2](18_soporte_y_recursos_aws.md#seccion-18-2).

<a id="aws-free-tier"></a>

## AWS Free Tier

**Alias:** Free Tier.

Programa de ofertas y créditos de AWS con condiciones de elegibilidad y uso. Se utiliza para experimentar dentro del alcance aplicable; no es sinónimo de un año ilimitado gratis ni del Free account plan como estado concreto de cuenta.

**Procedencia:** explicación de estudio y referencias en [15.13](15_modelos_de_precios_aws.md#seccion-15-13).

<a id="aws-health"></a>

## AWS Health

Servicio de información de salud de servicios y recursos y de cambios relevantes de AWS. Ofrece dashboard y mecanismos de integración con condiciones diferentes; el servicio, su pantalla y su API no son tres alias intercambiables de una sola interfaz.

**Procedencia:** explicación de estudio y referencias en [18.6](18_soporte_y_recursos_aws.md#seccion-18-6).

<a id="aws-health-api"></a>

## AWS Health API

**Alias:** Health API.

Interfaz programática para integrar eventos e información de AWS Health. Su uso depende de plan, permisos y condiciones publicadas; no es un alias del dashboard ni de la API de AWS Support, aunque ambos sirvan a procesos operativos.

**Procedencia:** explicación de estudio y referencias en [18.6](18_soporte_y_recursos_aws.md#seccion-18-6).

<a id="aws-health-dashboard"></a>

## AWS Health Dashboard

**Alias:** Health Dashboard.

Interfaz que muestra eventos de salud y cambios relevantes de AWS, incluidos los que afectan a recursos del cliente según vista. Ayuda a preparar y gestionar incidencias; no sustituye métricas propias de aplicación ni habilita automáticamente acceso programático de cualquier plan.

**Procedencia:** explicación de estudio y referencias en [18.6](18_soporte_y_recursos_aws.md#seccion-18-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-health-dashboard).

<a id="aws-iam"></a>

## AWS IAM

**Alias:** Identity and Access Management, IAM.

Servicio para administrar identidades y permisos de acciones sobre recursos AWS. Interviene al delegar acceso a costes o ejecutar acciones autorizadas; una etiqueta financiera, una factura pagada o una licencia no concede por sí sola esos permisos.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-iam).

<a id="aws-knowledge-center"></a>

## AWS Knowledge Center

**Alias:** Knowledge Center.

Colección de artículos oficiales de resolución de problemas integrada en re:Post. Ayuda a aplicar soluciones a escenarios conocidos; no toda respuesta de la comunidad es uno de sus artículos ni existe un compromiso contractual por leerlo.

**Procedencia:** explicación de estudio y referencias en [18.7](18_soporte_y_recursos_aws.md#seccion-18-7). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#aws-knowledge-center).

<a id="aws-marketplace"></a>

## AWS Marketplace

**Alias:** Marketplace.

Catálogo y mecanismos para adquirir y gestionar productos y servicios de terceros. Facilita compras y gobierno; una oferta no implica que AWS sea su fabricante ni que licencia, infraestructura y trabajo de integración estén incluidos en un solo precio.

**Procedencia:** explicación de estudio y referencias en [18.10](18_soporte_y_recursos_aws.md#seccion-18-10). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#aws-marketplace).

<a id="aws-organizations"></a>

## AWS Organizations

**Alias:** Organizations.

Servicio de organización de múltiples cuentas y políticas de gobierno, con facturación consolidada. Permite centralizar pagos conservando cuentas separadas; las reglas SCP, el acceso a datos y la compartición de descuentos son funciones distintas que requieren su configuración.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-organizations).

<a id="aws-partner-network"></a>

## AWS Partner Network

**Alias:** APN.

Ecosistema de organizaciones que desarrollan productos o prestan servicios relacionados con AWS. Aporta rutas y programas con beneficios sujetos a requisitos; ser partner no significa que todos reciban iguales descuentos o que toda solución tenga cumplimiento automático.

**Procedencia:** explicación de estudio y referencias en [18.9](18_soporte_y_recursos_aws.md#seccion-18-9).

<a id="aws-prescriptive-guidance"></a>

## AWS Prescriptive Guidance

**Alias:** Prescriptive Guidance.

Recurso oficial de patrones y recomendaciones para ejecutar iniciativas técnicas como arquitectura y migración. Se utiliza para estructurar decisiones y tareas; no es un servicio que migre automáticamente una aplicación al consultar un patrón.

**Procedencia:** explicación de estudio y referencias en [18.7](18_soporte_y_recursos_aws.md#seccion-18-7).

<a id="aws-pricing-calculator"></a>

## AWS Pricing Calculator

**Alias:** Pricing Calculator.

Herramienta para estimar costes de una arquitectura a partir de servicios y cantidades introducidos. Permite comparar supuestos antes de desplegar; no es una factura ni incluye automáticamente componentes omitidos, impuestos o demanda futura desconocida.

**Procedencia:** explicación de estudio y referencias en [17.1](17_facturacion_presupuestos_y_costes.md#seccion-17-1). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#aws-pricing-calculator).

<a id="aws-professional-services"></a>

## AWS Professional Services

**Alias:** Professional Services.

Asistencia profesional de AWS para iniciativas con alcance y condiciones acordadas. Se valora para trabajo de transformación o migración; no se obtiene un proyecto completo por tener Basic ni por abrir un caso técnico corriente.

**Procedencia:** explicación de estudio y referencias en [18.11](18_soporte_y_recursos_aws.md#seccion-18-11).

<a id="aws-re-post"></a>

## AWS re:Post

**Alias:** re:Post.

Plataforma de conocimiento y comunidad que también contiene artículos oficiales de Knowledge Center. Sirve para localizar explicaciones y experiencias; la autoría debe identificarse y una respuesta comunitaria no equivale a un contrato de soporte.

**Procedencia:** explicación de estudio y referencias en [18.7](18_soporte_y_recursos_aws.md#seccion-18-7). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#aws-re-post).

<a id="aws-support"></a>

## AWS Support

Oferta de recursos y asistencia de AWS organizada por planes y prestaciones. Distingue ayuda de cuenta/facturación, soporte técnico y acompañamiento; no implica operación ilimitada de cualquier aplicación ni reemplaza su arquitectura de continuidad.

**Procedencia:** explicación de estudio y referencias en [18.1](18_soporte_y_recursos_aws.md#seccion-18-1). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-support).

<a id="aws-support-center"></a>

## AWS Support Center

**Alias:** Support Center.

Portal para abrir y seguir casos de soporte conforme al plan y permisos. Se usa para gestionar una interacción concreta; no es un foro comunitario, una vista de salud ni una garantía de que todo tipo de caso esté disponible para cualquier cuenta.

**Procedencia:** explicación de estudio y referencias en [18.5](18_soporte_y_recursos_aws.md#seccion-18-5).

<a id="aws-support-concierge"></a>

## AWS Support Concierge

**Alias:** Support Concierge.

Función de asistencia sobre cuentas y facturación bajo prestaciones pertinentes. Ayuda a resolver cuestiones administrativas; no administra por definición los servidores del cliente ni debe suponerse incluida con idéntico alcance en todos los planes.

**Procedencia:** explicación de estudio y referencias en [18.5](18_soporte_y_recursos_aws.md#seccion-18-5).

<a id="aws-trust-safety"></a>

## AWS Trust & Safety

**Alias:** Trust and Safety.

Equipo y procedimientos para tratar informes de uso abusivo de recursos AWS. Se utiliza para reportar actividad como phishing, spam o abuso de red con evidencia; no sustituye el canal de facturación ni la consultoría de arquitectura.

**Procedencia:** explicación de estudio y referencias en [18.8](18_soporte_y_recursos_aws.md#seccion-18-8).

<a id="aws-trusted-advisor"></a>

## AWS Trusted Advisor

**Alias:** Trusted Advisor.

Herramienta que inspecciona condiciones y ofrece recomendaciones en las categorías disponibles. Ayuda a identificar oportunidades y riesgos, con alcance según plan; no certifica toda la arquitectura ni corrige automáticamente cada problema señalado.

**Procedencia:** explicación de estudio y referencias en [18.6](18_soporte_y_recursos_aws.md#seccion-18-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-trusted-advisor).

<a id="aws-unified-operations"></a>

## AWS Unified Operations

**Alias:** Unified Operations.

Oferta de asistencia operativa especializada para cargas críticas, con conocimiento contextual y especialistas designados. Incluye procesos de incorporación y revisión de cargas; no es simplemente otro nombre de Enterprise ni garantiza resolver cualquier incidente en cinco minutos.

**Procedencia:** explicación de estudio y referencias en [18.2](18_soporte_y_recursos_aws.md#seccion-18-2).

<a id="backup"></a>

## Backup

**Alias:** Copia de seguridad.

Copia o mecanismo de conservación de datos orientado a recuperación. Retención y almacenamiento pueden generar cargos aunque el recurso original desaparezca; no equivale a una réplica de lectura ni vuelve prescindibles las pruebas de restauración.

**Procedencia:** explicación de estudio y referencias en [15.12](15_modelos_de_precios_aws.md#seccion-15-12).

<a id="blended-costs"></a>

## Blended costs

**Alias:** Costes combinados.

Perspectiva económica basada en promedios de uso dentro de la familia de facturación consolidada según sus reglas. Puede servir para análisis agregado; no es idéntica al coste no combinado de cada línea ni al reparto interno decidido por la empresa.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3).

<a id="byol"></a>

## BYOL

**Alias:** Bring Your Own License.

Modelo que utiliza licencias de software ya poseídas cuando sus términos permiten el despliegue. Puede justificar control de host físico; no basta tener una copia del instalador ni elimina todo cargo de infraestructura o responsabilidad de licencia.

**Procedencia:** explicación de estudio y referencias en [15.7](15_modelos_de_precios_aws.md#seccion-15-7). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#byol).

<a id="capacity-reservation"></a>

## Capacity Reservation

**Alias:** On-Demand Capacity Reservation.

Reserva de capacidad EC2 con atributos y AZ concretos. Ayuda a disponer de capacidad para lanzar instancias, pero puede costar sin utilizarse y no incorpora por sí sola un descuento; las condiciones difieren entre uso inmediato y comienzo futuro.

**Procedencia:** explicación de estudio y referencias en [15.8](15_modelos_de_precios_aws.md#seccion-15-8).

<a id="capex"></a>

## CAPEX

**Alias:** Gastos de capital.

Gasto de inversión en activos dentro del modelo financiero aplicable. Permite analizar compras iniciales frente a consumos operativos; no se identifica automáticamente con todo coste local ni se cuenta dos veces junto con su amortización en un mismo modelo de caja.

**Procedencia:** explicación de estudio y referencias en [16.1](16_tco_y_optimizacion_de_costes.md#seccion-16-1). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#capex).

<a id="centro-de-coste"></a>

## Centro de coste

**Alias:** Cost center.

Unidad organizativa a la que se atribuye gasto. Se representa mediante etiquetas o reglas de imputación para responsabilizar equipos; no es un servicio AWS ni necesariamente coincide con una cuenta, una OU o una aplicación.

**Procedencia:** explicación de estudio y referencias en [17.6](17_facturacion_presupuestos_y_costes.md#seccion-17-6).

<a id="chargeback"></a>

## Chargeback

Repercusión interna de costes a unidades o equipos según una política acordada. Se distingue de showback porque implica un cargo o traslado interno; la política no altera por sí sola el total que factura AWS.

**Procedencia:** explicación de estudio y referencias en [17.7](17_facturacion_presupuestos_y_costes.md#seccion-17-7).

<a id="checkpoint"></a>

## Checkpoint

**Alias:** Punto de control.

Estado de avance guardado para poder retomar trabajo tras una interrupción. Es útil en procesamiento tolerante a pérdidas de capacidad Spot; no asegura continuidad si se almacena exclusivamente en el recurso que puede desaparecer.

**Procedencia:** explicación de estudio y referencias en [15.4](15_modelos_de_precios_aws.md#seccion-15-4).

<a id="cobertura-de-compromisos"></a>

## Cobertura de compromisos

**Alias:** Coverage.

Proporción del uso elegible cubierta por descuentos o compromisos según la métrica del informe. Se usa para estudiar cuánto consumo sigue sin cubrir; no es la proporción del compromiso comprado que se aprovecha, que corresponde a utilización.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="compute-savings-plans"></a>

## Compute Savings Plans

Tipo de Savings Plan aplicable a consumo compatible de EC2, Fargate y Lambda con flexibilidad publicada. Sirve para una base de gasto que puede cambiar de configuración; no cubre automáticamente discos, transferencias, planos de control o toda la factura de esos servicios.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="copy-de-s3"></a>

## COPY de S3

Operación para copiar objetos bajo las capacidades y reglas de S3. Se considera al calcular solicitudes y almacenamiento resultante; no debe contarse como si una copia duplicara gratuitamente los datos o equivaliera a leerlos.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="cost-allocation-tags"></a>

## Cost allocation tags

**Alias:** Etiquetas de asignación de costes.

Etiquetas utilizadas como dimensiones de imputación en informes de costes. Pueden ser definidas por usuario o generadas por AWS y requieren activación según reglas; no se confunden con etiquetas del objeto presupuesto utilizadas para controlar acceso a ese objeto.

**Procedencia:** explicación de estudio y referencias en [17.6](17_facturacion_presupuestos_y_costes.md#seccion-17-6).

<a id="coste-directo"></a>

## Coste directo

Coste que puede atribuirse directamente al objeto de análisis, por ejemplo una licencia exclusiva de una carga. Facilita construir su TCO; la clasificación depende del alcance y no convierte todo recurso compartido en gasto exclusivo de cada proyecto.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2).

<a id="coste-indirecto"></a>

## Coste indirecto

Coste compartido o no asignable de forma inmediata a una sola carga. Debe repartirse con un criterio explícito al comparar alternativas; imputar toda la misma partida a varios equipos produce doble contabilidad.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2).

<a id="coste-marginal"></a>

## Coste marginal

Coste asociado a una unidad adicional de consumo bajo el tramo aplicable. Ayuda a interpretar precios escalonados; una tarifa marginal menor no implica que todo lo consumido antes cambie de precio ni que el total baje al consumir más.

**Procedencia:** explicación de estudio y referencias en [15.2](15_modelos_de_precios_aws.md#seccion-15-2).

<a id="credito-promocional"></a>

## Crédito promocional

Saldo aplicable a consumos elegibles con condiciones y vencimiento. Reduce cargos según sus reglas, pero no es una franquicia ilimitada ni la duración del plan de cuenta; se comprueba la caducidad del crédito concreto en lugar de asumir una universal.

**Procedencia:** explicación de estudio y referencias en [15.13](15_modelos_de_precios_aws.md#seccion-15-13).

<a id="cuenta-de-administracion"></a>

## Cuenta de administración

**Alias:** Management account.

Cuenta que administra la organización y paga los cargos de sus miembros en facturación consolidada bajo sus condiciones. Puede controlar preferencias y consultar información agregada; no se convierte por ese hecho en cada identidad técnica de las cuentas miembro.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#cuenta-de-administracion).

<a id="cuenta-miembro"></a>

## Cuenta miembro

**Alias:** Member account.

Cuenta incorporada a una organización que mantiene sus propios recursos y ámbito de acceso. Sus cargos forman parte de la consolidación pertinente; no se fusionan automáticamente permisos o recursos con los de los demás proyectos.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#cuenta-miembro).

<a id="cur-2-0"></a>

## CUR 2.0

**Alias:** Cost and Usage Report 2.0.

Conjunto de datos de coste y uso detallado publicado mediante Data Exports y recomendado por AWS para ese propósito. Se utiliza para exportaciones analizables; no es lo mismo que todo Data Exports ni que cada versión acumulativa del CUR tradicional.

**Procedencia:** explicación de estudio y referencias en [17.5](17_facturacion_presupuestos_y_costes.md#seccion-17-5).

<a id="database-savings-plans"></a>

## Database Savings Plans

Tipo de Savings Plan para uso elegible de servicios de bases de datos según catálogo vigente. Se distingue de Compute Savings Plans y de Reserved DB Instances; no se trasladan automáticamente coberturas o reglas de una modalidad a la otra.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="dedicated-hosts"></a>

## Dedicated Hosts

**Alias:** Hosts dedicados.

Servidores físicos dedicados con visibilidad y control de colocación de instancias bajo su modalidad. Son útiles para requisitos de host o BYOL y se facturan según host; no son un simple descuento ni equivalen al menor control de Dedicated Instances.

**Procedencia:** explicación de estudio y referencias en [15.7](15_modelos_de_precios_aws.md#seccion-15-7).

<a id="dedicated-instances"></a>

## Dedicated Instances

**Alias:** Instancias dedicadas.

Instancias EC2 que utilizan hardware dedicado a una cuenta. Proporcionan aislamiento físico respecto a otras cuentas, pero no la misma identidad y control de host de Dedicated Hosts; su selección requiere evaluar requisitos y cargos de su modelo.

**Procedencia:** explicación de estudio y referencias en [15.7](15_modelos_de_precios_aws.md#seccion-15-7).

<a id="descuento-por-volumen"></a>

## Descuento por volumen

Condición de precio que depende de consumo agregado elegible o de tramos publicados. Puede aprovecharse mediante facturación consolidada cuando corresponde; no significa que cualquier servicio reduzca su tarifa ni que se deba consumir más para bajar el gasto total.

**Procedencia:** explicación de estudio y referencias en [15.2](15_modelos_de_precios_aws.md#seccion-15-2).

<a id="dimensionamiento-adecuado"></a>

## Dimensionamiento adecuado

**Alias:** Rightsizing.

Ajuste de recursos a necesidades de rendimiento, capacidad y continuidad observadas. Se usa antes de comprometer compras y después se valida con métricas; no consiste en reducir siempre el tamaño a partir de una media de CPU aislada.

**Procedencia:** explicación de estudio y referencias en [16.6](16_tco_y_optimizacion_de_costes.md#seccion-16-6). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#rightsizing).

<a id="domain-specialist-engineer"></a>

## Domain Specialist Engineer

**Alias:** DSE.

Especialista de dominio técnico dentro del alcance de asistencia pertinente. Aporta profundidad específica sobre cargas o servicios; no es un alias del TAM que mantiene la relación ni del ingeniero que gestiona un incidente.

**Procedencia:** explicación de estudio y referencias en [18.2](18_soporte_y_recursos_aws.md#seccion-18-2).

<a id="ec2-instance-savings-plans"></a>

## EC2 Instance Savings Plans

Tipo de Savings Plan ligado a una familia EC2 y región seleccionadas con flexibilidad admitida de tamaño, plataforma y tenancy. Se usa para demanda estable en ese ámbito; no ofrece la misma flexibilidad de servicio y región que Compute Savings Plans.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="elastic-volumes"></a>

## Elastic Volumes

Capacidad de EBS para modificar parámetros compatibles de volúmenes, como ampliación, tipo o rendimiento. Facilita ajustes sin recrear todo recurso en escenarios soportados; no permite encoger directamente un volumen existente, que requiere otra estrategia de migración.

**Procedencia:** explicación de estudio y referencias en [16.6](16_tco_y_optimizacion_de_costes.md#seccion-16-6).

<a id="elasticidad"></a>

## Elasticidad

Capacidad de ajustar recursos a cambios de demanda, incluyendo reducción cuando dejan de necesitarse. Puede reducir horas de uso; no cancela compromisos financieros ni libera automáticamente almacenamiento y otros recursos que permanezcan.

**Procedencia:** explicación de estudio y referencias en [16.6](16_tco_y_optimizacion_de_costes.md#seccion-16-6). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#elasticidad).

<a id="entitlement"></a>

## Entitlement

**Alias:** Derecho de uso.

Derecho contractual a utilizar un producto, prestación o cantidad adquirida. Sirve para gobernar software de terceros; no equivale a un permiso IAM ni asegura que exista infraestructura técnica preparada para ejecutar el producto.

**Procedencia:** explicación de estudio y referencias en [18.10](18_soporte_y_recursos_aws.md#seccion-18-10).

<a id="facturacion-consolidada"></a>

## Facturación consolidada

**Alias:** Consolidated billing.

Centralización de facturación y pago de cuentas de una organización bajo las reglas pertinentes. Permite visión agregada y beneficios elegibles por uso compartido; no fusiona las cuentas y puede generar facturas distintas según seller of record.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8).

<a id="fargate"></a>

## Fargate

**Alias:** AWS Fargate.

Capacidad administrada para ejecutar contenedores compatibles sin administrar directamente sus hosts de cómputo. Puede tener uso elegible para Compute Savings Plans; la cobertura económica no convierte Fargate en un orquestador ni incluye toda la arquitectura de contenedores.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-fargate).

<a id="fibre-channel"></a>

## Fibre Channel

**Alias:** FC.

Tecnología de interconexión utilizada en redes de almacenamiento. Aparece en el desglose histórico de infraestructura del CPD; sus conmutadores y operación forman parte de costes que no se limitan a comprar discos.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2).

<a id="flujo-de-caja"></a>

## Flujo de caja

**Alias:** Cash flow.

Distribución temporal de entradas y salidas de dinero. Permite interpretar compras iniciales y renovaciones en un caso empresarial; no es idéntico a TCO ni a distribuir contablemente un coste por amortización.

**Procedencia:** explicación de estudio y referencias en [16.1](16_tco_y_optimizacion_de_costes.md#seccion-16-1).

<a id="free-account-plan"></a>

## Free account plan

**Alias:** Free plan.

Estado de cuenta gratuita con servicios, créditos y duración limitados según oferta aplicable. Se utiliza para experimentar dentro de esas condiciones; no es todo AWS Free Tier y su vencimiento puede implicar pérdida de acceso, no solo cambiar la tarifa.

**Procedencia:** explicación de estudio y referencias en [15.13](15_modelos_de_precios_aws.md#seccion-15-13).

<a id="gb-mes"></a>

## GB-mes

**Alias:** GB-month.

Unidad que combina cantidad de almacenamiento y tiempo. Ayuda a estimar costes de capacidad o datos conservados según servicio; no es una medida de velocidad ni permite asumir idéntico precio para EBS, S3 y copias.

**Procedencia:** explicación de estudio y referencias en [15.1](15_modelos_de_precios_aws.md#seccion-15-1).

<a id="get-de-s3"></a>

## GET de S3

Operación para obtener un objeto bajo las reglas del almacenamiento correspondiente. Su uso puede implicar solicitudes y recuperación según clase; no se confunde con una solicitud de restauración previa en clases de archivo.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="glacier-servicio-historico-de-archivos"></a>

## Glacier, servicio histórico de archivos

Referencia al modelo de archivos y vaults del material antiguo, con tiempos y operaciones propios. Se conserva para entender la comparación docente; no debe confundirse todo ese modelo con las clases S3 Glacier actuales, que tienen prestaciones diferentes.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="incident-management-engineer"></a>

## Incident Management Engineer

**Alias:** IME.

Función especializada en la gestión de incidentes dentro de la oferta de soporte pertinente. Ayuda a coordinar respuesta con contexto de la carga; un objetivo de intervención de ese ingeniero no es una garantía de recuperación completa del servicio.

**Procedencia:** explicación de estudio y referencias en [18.2](18_soporte_y_recursos_aws.md#seccion-18-2).

<a id="integrador-de-sistemas"></a>

## Integrador de sistemas

**Alias:** System integrator.

Empresa o equipo que combina tecnologías y realiza implantación o integración bajo un alcance acordado. Puede ayudar a conectar y migrar sistemas; no es necesariamente el fabricante del software ni un plan de AWS Support.

**Procedencia:** explicación de estudio y referencias en [18.9](18_soporte_y_recursos_aws.md#seccion-18-9).

<a id="iops"></a>

## IOPS

**Alias:** Input/output operations per second.

Medida de operaciones de entrada/salida por segundo. Se utiliza para dimensionar rendimiento y, según tipo, capacidad facturable; no es throughput en bytes por segundo ni garantiza que todas las IOPS necesarias estén incluidas en cualquier volumen.

**Procedencia:** explicación de estudio y referencias en [15.1](15_modelos_de_precios_aws.md#seccion-15-1). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#iops).

<a id="isv"></a>

## ISV

**Alias:** Independent Software Vendor.

Proveedor independiente que desarrolla y comercializa software. Puede vender mediante Marketplace y ofrecer otros servicios; no es sinónimo de integrador ni significa que el producto haya sido construido por AWS.

**Procedencia:** explicación de estudio y referencias en [18.9](18_soporte_y_recursos_aws.md#seccion-18-9).

<a id="lambda"></a>

## Lambda

**Alias:** AWS Lambda.

Servicio de ejecución de funciones con administración de infraestructura por AWS. Se valora su consumo y compatibilidad con descuentos como parte del diseño; serverless no equivale a coste cero ni a que desaparezcan solicitudes, datos y servicios auxiliares.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#aws-lambda).

<a id="lan"></a>

## LAN

**Alias:** Local Area Network.

Red de área local de una instalación. Sus conmutadores y administración aparecen en el TCO docente del CPD; el coste de red no se limita al ancho de banda contratado hacia Internet.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2).

<a id="lifecycle-de-s3"></a>

## Lifecycle de S3

**Alias:** S3 Lifecycle.

Reglas para transicionar o expirar objetos según condiciones de ciclo de vida. Permiten adecuar almacenamiento a retención y acceso; pueden generar operaciones y consecuencias de permanencia mínima, y no determinan por sí solas que un dato deba borrarse.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="list-de-s3"></a>

## LIST de S3

Operación para enumerar objetos o recursos bajo la API utilizada. Puede producir cargos de solicitudes incluso al explorar contenido; no es la lectura del cuerpo de todos los objetos ni se considera siempre gratuita por no descargar archivos.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="multi-az"></a>

## Multi-AZ

Patrón o modalidad de despliegue distribuido entre zonas de disponibilidad. En bases de datos se estima conforme a la arquitectura concreta; no equivale siempre a una réplica de lectura ni autoriza a aplicar sin revisar una tarifa genérica de transferencia entre AZ.

**Procedencia:** explicación de estudio y referencias en [15.12](15_modelos_de_precios_aws.md#seccion-15-12). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#multi-az).

<a id="nat-gateway"></a>

## NAT Gateway

Componente administrado de traducción de direcciones para conectividad según el diseño VPC. Puede tener cargos por disponibilidad y procesamiento de tráfico; una transferencia exenta en un tramo no elimina necesariamente el cargo de este componente.

**Procedencia:** explicación de estudio y referencias en [15.9](15_modelos_de_precios_aws.md#seccion-15-9). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#nat-gateway).

<a id="net-costs"></a>

## Net costs

**Alias:** Costes netos.

Perspectivas de coste que incorporan descuentos pertinentes según métrica, como net unblended o net amortized. Se usan para comparar bases coherentes; no deben sumarse a sus valores brutos como si fueran otra partida de consumo.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3).

<a id="no-upfront"></a>

## No Upfront

**Alias:** NURI.

Forma de pago sin importe inicial del compromiso. En el contexto RI del curso aparece como NURI; sigue existiendo obligación durante el plazo y no significa que solo se pague cuando haya una instancia encendida.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="on-demand"></a>

## On-Demand

**Alias:** Bajo demanda.

Modalidad de uso sin el compromiso prolongado de una RI o Savings Plan. Es útil para incertidumbre y picos, pero no garantiza capacidad de lanzamiento ni elimina cuotas, mínimos facturables o costes asociados.

**Procedencia:** explicación de estudio y referencias en [15.3](15_modelos_de_precios_aws.md#seccion-15-3).

<a id="opex"></a>

## OPEX

**Alias:** Gastos operativos.

Gasto asociado a operación dentro del modelo económico considerado. Ayuda a estudiar pagos recurrentes y consumos, pero no se utiliza como sinónimo de todos los costes cloud ni como prueba de ahorro frente a cualquier inversión local.

**Procedencia:** explicación de estudio y referencias en [16.1](16_tco_y_optimizacion_de_costes.md#seccion-16-1). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#opex).

<a id="ou"></a>

## OU

**Alias:** Organizational Unit.

Agrupación de cuentas dentro de Organizations para organizar gobierno y políticas. Puede representar estructura organizativa, pero no constituye automáticamente una regla de imputación económica ni determina por sí sola cómo se comparten descuentos.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#ou).

<a id="paid-account-plan"></a>

## Paid account plan

**Alias:** Paid plan.

Estado de cuenta que permite acceso y facturación de consumos bajo condiciones de pago aplicables. Puede usar créditos elegibles mientras sean válidos; agotarlos no implica el mismo comportamiento de cierre del plan gratuito.

**Procedencia:** explicación de estudio y referencias en [15.13](15_modelos_de_precios_aws.md#seccion-15-13).

<a id="partial-upfront"></a>

## Partial Upfront

**Alias:** PURI.

Forma de pago con parte inicial y cargos comprometidos durante el plazo. Se emplea para comparar compromisos y flujo de caja; no es una reserva parcial de capacidad ni convierte el resto del contrato en consumo opcional.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="pdu"></a>

## PDU

**Alias:** Power Distribution Unit.

Unidad de distribución de energía de una instalación o rack. Es parte del equipamiento asociado a servidores en el TCO docente; ilustra por qué adquirir cómputo físico implica más componentes que el propio procesador.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2).

<a id="permanencia-minima-facturable"></a>

## Permanencia mínima facturable

Periodo mínimo de almacenamiento por el que puede cobrarse un objeto en una clase determinada. Permite comparar archivo y acceso infrecuente; no impide técnicamente borrar antes, pero hacerlo puede generar el cargo proporcional restante.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="post-de-s3"></a>

## POST de S3

Tipo de operación de petición HTTP utilizado en funciones compatibles de S3. En la lámina integra una categoría de solicitudes facturables; no se sustituye su precio por el de GET sin comprobar la tarifa aplicable.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="presupuesto"></a>

## Presupuesto

**Alias:** Budget.

Objetivo de gasto, uso u otra métrica con periodo y alcance definidos. Permite comparar lo observado o previsto con lo deseado; no es una factura ni una estimación garantizada del precio de una arquitectura.

**Procedencia:** explicación de estudio y referencias en [17.4](17_facturacion_presupuestos_y_costes.md#seccion-17-4).

<a id="prevision"></a>

## Previsión

**Alias:** Forecast.

Proyección del gasto o uso futuro a partir de datos y reglas del instrumento utilizado. Sirve para advertir trayectorias probables; no conoce automáticamente decisiones de arquitectura futuras ni equivale a un importe final facturado.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3).

<a id="private-marketplace"></a>

## Private Marketplace

Catálogo privado de productos aprobados dentro del gobierno de adquisiciones de Marketplace. Ayuda a controlar qué puede contratarse; no significa que todo producto se despliegue en una red privada ni reemplaza las condiciones de licencia.

**Procedencia:** explicación de estudio y referencias en [18.10](18_soporte_y_recursos_aws.md#seccion-18-10).

<a id="private-offer"></a>

## Private offer

**Alias:** Oferta privada.

Oferta de adquisición negociada entre vendedor y comprador en Marketplace. Puede fijar precio y condiciones contractuales específicas; no es un sinónimo de subred privada ni de catálogo de productos preaprobados.

**Procedencia:** explicación de estudio y referencias en [18.10](18_soporte_y_recursos_aws.md#seccion-18-10).

<a id="put-de-s3"></a>

## PUT de S3

Operación utilizada para escribir un objeto. Contribuye a las solicitudes y cargos aplicables al ciclo de vida del dato; no es un alias de GET ni implica que almacenar indefinidamente el resultado esté incluido en la llamada.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="reserved-db-instances"></a>

## Reserved DB Instances

**Alias:** Instancias de base de datos reservadas.

Mecanismo de descuento por compromiso para uso compatible de base de datos. Se compara con modalidades On-Demand y otros descuentos elegibles; no crea automáticamente una nueva base ni adopta cada regla regional, zonal o de tamaño de EC2 RI.

**Procedencia:** explicación de estudio y referencias en [15.12](15_modelos_de_precios_aws.md#seccion-15-12).

<a id="reserved-instances"></a>

## Reserved Instances

**Alias:** RI, EC2 Reserved Instances.

Beneficio de facturación para consumo EC2 compatible bajo compromiso y atributos. No es una máquina física creada al comprarlo; la reserva de capacidad depende del alcance zonal y no debe atribuirse automáticamente a cualquier RI regional.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="ri-convertible"></a>

## RI Convertible

**Alias:** Convertible Reserved Instance.

Clase de EC2 RI que permite intercambios bajo reglas de conversión. Se utiliza cuando se valora cierta flexibilidad de atributos; no permite cancelar libremente cualquier compromiso ni equivale a cambiar un Savings Plan después de comprado.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="ri-regional"></a>

## RI regional

**Alias:** Regional Reserved Instance.

RI EC2 con ámbito en una región que aplica a uso elegible entre sus AZ. Puede admitir flexibilidad de tamaño bajo condiciones; no reserva capacidad zonal ni habilita cambios universales de región, familia o sistema operativo.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="ri-standard"></a>

## RI Standard

**Alias:** Standard Reserved Instance.

Clase de EC2 RI con condiciones de descuento y menor flexibilidad de intercambio que Convertible. Admite determinadas modificaciones y opciones sujetas a reglas; no debe definirse como un recurso cuyos atributos jamás pueden cambiar.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="ri-zonal"></a>

## RI zonal

**Alias:** Zonal Reserved Instance.

RI EC2 con alcance de una AZ y atributos específicos, que incluye reserva de capacidad correspondiente. Se distingue de una RI regional por su alcance y flexibilidad; no se generaliza su garantía a toda reserva económica.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="roi"></a>

## ROI

**Alias:** Return on Investment.

Indicador que relaciona retorno neto e inversión bajo una definición financiera explícita. Se usa para evaluar el beneficio de una iniciativa; no es un alias del TCO ni del porcentaje de reducción de factura.

**Procedencia:** explicación de estudio y referencias en [16.1](16_tco_y_optimizacion_de_costes.md#seccion-16-1).

<a id="s3-express-one-zone"></a>

## S3 Express One Zone

Clase de objetos de alto rendimiento y alcance zonal. Se evalúa para aplicaciones sensibles a latencia; no es una opción de archivo profundo ni implica el mismo alcance de distribución que Standard.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-express-one-zone).

<a id="s3-glacier-deep-archive"></a>

## S3 Glacier Deep Archive

**Alias:** Glacier Deep Archive.

Clase para archivo prolongado con recuperación más lenta y condiciones de mínima permanencia. Sirve cuando el tiempo de espera es compatible; no es adecuada por defecto para objetos que una aplicación necesita servir inmediatamente.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-glacier-deep-archive).

<a id="s3-glacier-flexible-retrieval"></a>

## S3 Glacier Flexible Retrieval

**Alias:** Glacier Flexible Retrieval.

Clase de archivo que requiere restaurar datos antes del acceso ordinario. Permite escoger modalidades de recuperación y costes pertinentes; no es el acceso inmediato de Glacier Instant Retrieval ni debe identificarse con todo el servicio histórico de vaults.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-glacier-flexible-retrieval).

<a id="s3-glacier-instant-retrieval"></a>

## S3 Glacier Instant Retrieval

**Alias:** Glacier Instant Retrieval.

Clase de archivo con recuperación inmediata de objetos y condiciones económicas de archivo. Se distingue de Flexible Retrieval y Deep Archive porque no exige su restauración previa; su nombre no significa que desaparezca todo coste de recuperación o permanencia.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-glacier-instant-retrieval).

<a id="s3-intelligent-tiering"></a>

## S3 Intelligent-Tiering

**Alias:** Intelligent-Tiering.

Clase que adapta capas de almacenamiento al patrón de acceso bajo sus condiciones. Ayuda con acceso cambiante o incierto; requiere valorar monitorización, tamaño de objetos y capas opcionales, sin importarle automáticamente el precio de recuperación de Standard-IA.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-intelligent-tiering).

<a id="s3-one-zone-ia"></a>

## S3 One Zone-IA

Clase de acceso infrecuente que conserva datos en una AZ bajo su modelo. Puede atender datos con necesidades compatibles de recuperación y coste; no tiene el mismo alcance de disponibilidad que una opción multizona ni elimina cargos de recuperación.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-one-zone-ia).

<a id="s3-standard"></a>

## S3 Standard

Clase de objetos orientada a acceso frecuente. Se valora almacenamiento y solicitudes junto con otros cargos; no equivale a la totalidad de S3 ni a un precio de infraestructura que ya incluya cualquier transferencia.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-standard).

<a id="s3-standard-ia"></a>

## S3 Standard-IA

**Alias:** Standard-Infrequent Access.

Clase para acceso infrecuente con disponibilidad inmediata del objeto. Su comparación incluye recuperación, tamaños y duración mínima de facturación; no debe escogerse solo por menor coste de almacenamiento cuando las lecturas son intensivas.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#s3-standard-ia).

<a id="sagemaker-ai-savings-plans"></a>

## SageMaker AI Savings Plans

Tipo de Savings Plan destinado a uso elegible de instancias de SageMaker AI. Es un compromiso económico dentro de ese ámbito; no es el servicio de entrenamiento ni cobertura general de cualquier producto de aprendizaje automático.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="san"></a>

## SAN

**Alias:** Storage Area Network.

Red de almacenamiento utilizada para conectar sistemas y dispositivos en una instalación. En el TCO docente integra infraestructura y administración; no es lo mismo que la LAN general ni que un recurso S3.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#san).

<a id="savings-plans"></a>

## Savings Plans

Modelo de descuento basado en compromiso monetario por hora durante el plazo adquirido. Se usa para una base de gasto elegible y sus tipos tienen coberturas distintas; no reserva capacidad ni acumula automáticamente compromiso no usado para otra hora.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="scheduled-reserved-instances"></a>

## Scheduled Reserved Instances

**Alias:** Scheduled Instances.

Modalidad histórica de EC2 para capacidad con horarios recurrentes. Se conserva para interpretar T6 p.32, pero AWS indica que ya no puede comprarse; no se recomienda como solución vigente para tareas programadas.

**Procedencia:** explicación de estudio y referencias en [15.5](15_modelos_de_precios_aws.md#seccion-15-5).

<a id="scp"></a>

## SCP

**Alias:** Service Control Policy.

Política de Organizations que limita permisos máximos en el ámbito aplicable. Puede intervenir en acciones compatibles de gobierno presupuestario; no concede permisos por sí sola ni es el mecanismo que reparte descuentos de compra entre cuentas.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8). Concepto compartido: [entrada previa](../bloque-2/08_glosario_integral_seguridad.md#scp).

<a id="seller-of-record"></a>

## Seller of record

**Alias:** SOR.

Entidad vendedora o emisora correspondiente a determinados cargos. Importa al interpretar facturación consolidada: una organización con varios emisores puede recibir facturas separadas, aunque mantenga centralización de pagos y análisis.

**Procedencia:** explicación de estudio y referencias en [17.8](17_facturacion_presupuestos_y_costes.md#seccion-17-8).

<a id="showback"></a>

## Showback

Presentación interna de costes atribuidos a equipos o proyectos para visibilidad. Se distingue de chargeback porque informar del consumo no implica necesariamente repercutir un cargo interno; ambos requieren reglas que eviten contar dos veces lo compartido.

**Procedencia:** explicación de estudio y referencias en [17.7](17_facturacion_presupuestos_y_costes.md#seccion-17-7).

<a id="sla"></a>

## SLA

**Alias:** Service Level Agreement.

Acuerdo de nivel de servicio con alcance y condiciones específicos. Sirve para interpretar compromisos de un servicio; no es equivalente al objetivo de primera respuesta de soporte ni promete resolver toda incidencia en ese plazo.

**Procedencia:** explicación de estudio y referencias en [18.4](18_soporte_y_recursos_aws.md#seccion-18-4). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#sla-service-level-agreement).

<a id="snapshot-ebs"></a>

## Snapshot EBS

**Alias:** Instantánea EBS.

Copia de datos de un volumen mediante el mecanismo de instantáneas de EBS. Conserva información para recuperación y puede generar almacenamiento facturable; no equivale a liberar el volumen ni a un objeto ordinario en un bucket propio del cliente.

**Procedencia:** explicación de estudio y referencias en [15.10](15_modelos_de_precios_aws.md#seccion-15-10). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#ebs-snapshot).

<a id="solutions-architect"></a>

## Solutions Architect

**Alias:** SA.

Profesional que ayuda a razonar sobre arquitectura y uso de servicios AWS en los canales disponibles. Se diferencia del ingeniero de incidentes y de un contrato de implantación; orientación no significa ejecución ilimitada de todo el proyecto.

**Procedencia:** explicación de estudio y referencias en [18.11](18_soporte_y_recursos_aws.md#seccion-18-11).

<a id="spend-limit-de-proyecto"></a>

## Spend limit de proyecto

Control específico de gasto de proyectos en AWS Settings, documentado como un tipo de AWS Budgets con condiciones propias. Puede pausar recursos según sus reglas; no se extrapola su comportamiento a todo presupuesto convencional de avisos o a cualquier cuenta.

**Procedencia:** explicación de estudio y referencias en [17.4](17_facturacion_presupuestos_y_costes.md#seccion-17-4).

<a id="spot"></a>

## Spot

**Alias:** EC2 Spot Instances.

Modalidad que utiliza capacidad EC2 sobrante susceptible de interrupción. Se aplica a trabajos con recuperación y flexibilidad adecuadas; un precio menor no garantiza capacidad permanente ni convierte una carga sin persistencia externa en tolerante a fallos.

**Procedencia:** explicación de estudio y referencias en [15.4](15_modelos_de_precios_aws.md#seccion-15-4).

<a id="tco"></a>

## TCO

**Alias:** Total Cost of Ownership, Coste total de propiedad.

Estimación de costes directos e indirectos de disponer y operar un sistema durante un horizonte. Se utiliza para comparar resultados equivalentes; no es únicamente precio de servidor ni una garantía de ahorro por migrar a la nube.

**Procedencia:** explicación de estudio y referencias en [16.1](16_tco_y_optimizacion_de_costes.md#seccion-16-1). Concepto compartido: [entrada previa](../bloque-1/05_glosario_integral.md#tco).

<a id="technical-account-manager"></a>

## Technical Account Manager

**Alias:** TAM.

Figura de orientación y acompañamiento técnico que conoce las necesidades del cliente en planes pertinentes. Se distingue del soporte de facturación y del especialista de incidentes; no se presume asignada a todos los clientes por usar AWS.

**Procedencia:** explicación de estudio y referencias en [18.5](18_soporte_y_recursos_aws.md#seccion-18-5).

<a id="throughput"></a>

## Throughput

**Alias:** Rendimiento de transferencia.

Cantidad de datos procesada o transferida por unidad de tiempo bajo la definición del recurso. Sirve para dimensionar necesidades secuenciales y rendimiento contratado; no es capacidad almacenada ni el mismo indicador que operaciones por segundo.

**Procedencia:** explicación de estudio y referencias en [15.1](15_modelos_de_precios_aws.md#seccion-15-1). Concepto compartido: [entrada previa](../bloque-3/15_glosario_integral_tecnologia.md#throughput).

<a id="tiempo-de-primera-respuesta"></a>

## Tiempo de primera respuesta

Intervalo objetivo hasta la primera atención de un caso según plan, severidad y condiciones. Es útil para seleccionar asistencia operativa; no es el tiempo de diagnóstico completo, resolución o recuperación de la aplicación.

**Procedencia:** explicación de estudio y referencias en [18.4](18_soporte_y_recursos_aws.md#seccion-18-4).

<a id="tor"></a>

## TOR

**Alias:** Top of Rack.

Referencia a conmutadores situados en la parte superior del rack en el modelo de infraestructura docente. Su adquisición y mantenimiento forman parte del TCO físico; no son una modalidad de compra cloud ni una licencia de software.

**Procedencia:** explicación de estudio y referencias en [16.2](16_tco_y_optimizacion_de_costes.md#seccion-16-2).

<a id="unblended-costs"></a>

## Unblended costs

**Alias:** Costes no combinados.

Perspectiva del coste de uso sin aplicar el promedio combinado de la familia consolidada, con tipos de cargo diferenciados. Ayuda a estudiar líneas y descuentos; debe compararse con la misma métrica y no confundirse con una vista neta o amortizada.

**Procedencia:** explicación de estudio y referencias en [17.3](17_facturacion_presupuestos_y_costes.md#seccion-17-3).

<a id="utilizacion-de-compromisos"></a>

## Utilización de compromisos

**Alias:** Utilization.

Medida de cuánto compromiso adquirido se aprovecha con uso elegible según el informe. Ayuda a detectar obligaciones ociosas; no es lo mismo que cobertura y puede ser alta aunque gran parte del consumo total quede a tarifa On-Demand.

**Procedencia:** explicación de estudio y referencias en [15.6](15_modelos_de_precios_aws.md#seccion-15-6).

<a id="vault"></a>

## Vault

Contenedor de archivos del modelo histórico Glacier tratado en la comparación docente. Permite entender las operaciones y términos del material antiguo; no es un sinónimo de bucket S3 ni una denominación de todas las clases Glacier modernas.

**Procedencia:** explicación de estudio y referencias en [15.11](15_modelos_de_precios_aws.md#seccion-15-11).

<a id="whitepaper"></a>

## Whitepaper

**Alias:** White paper.

Documento de orientación y razonamiento sobre arquitectura, operación o prácticas. Se utiliza para estudiar decisiones y marcos; no reemplaza los parámetros actuales de una API ni ofrece por sí mismo un contrato de soporte.

**Procedencia:** explicación de estudio y referencias en [18.7](18_soporte_y_recursos_aws.md#seccion-18-7).

