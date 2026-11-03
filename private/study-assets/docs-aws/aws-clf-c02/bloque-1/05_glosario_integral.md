# 5. Glosario integral revisado

Cada definición fue revisada individualmente contra el vocabulario de los corpus 05 y 06. Las explicaciones de uso y diferencias son editoriales cuando la fuente solo menciona un nombre o icono. Los sinónimos se reúnen en una única entrada y se conservan como alias para buscar tanto en este documento como en Conceptos. «ACL» es un término general; su uso aquí remite específicamente al control de red de VPC.


<a id="alta-disponibilidad"></a>

## Alta disponibilidad

**Alias:** High availability, HA.

Diseño que procura mantener un servicio accesible y minimizar sus interrupciones mediante redundancia, detección y recuperación. Se utiliza para cumplir un objetivo de continuidad; no equivale a conservar los datos, que es una cuestión de durabilidad, ni implica ausencia absoluta de fallos.

**Procedencia:** T2 p.10; CA pp.49–52. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="ami-amazon-machine-image"></a>

## AMI — Amazon Machine Image

**Alias:** AMI, Amazon Machine Image.

Plantilla con la información necesaria para lanzar una instancia EC2, incluido su sistema operativo y software inicial. Permite reproducir una configuración base; se diferencia de la instancia, que es el recurso en ejecución, y no sustituye la estrategia de respaldo de los datos de la aplicación.

**Procedencia:** T1 p.16. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="api"></a>

## API

**Alias:** API.

Interfaz que especifica cómo un programa solicita operaciones o datos a otro sistema. Se utiliza para integrar y automatizar servicios; la consola, la CLI y los SDK son formas distintas de interactuar con las API de AWS y siguen sujetas a autorización.

**Procedencia:** T1 pp.25,30. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="aws-artifact"></a>

## AWS Artifact

**Alias:** AWS Artifact.

Portal para consultar documentos e informes de cumplimiento de AWS y gestionar determinados acuerdos. Sirve como evidencia sobre controles del proveedor; no configura los controles de la aplicación ni demuestra por sí solo el cumplimiento del cliente.

**Procedencia:** T2 p. 18. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-aurora"></a>

## Amazon Aurora

**Alias:** Amazon Aurora.

Base de datos relacional administrada por AWS con compatibilidad con MySQL o PostgreSQL según la edición. Se utiliza para cargas relacionales que necesitan esas interfaces; se distingue de DynamoDB, que es NoSQL, y de Redshift, orientado a analítica.

**Procedencia:** T2 p. 16. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-auto-scaling"></a>

## AWS Auto Scaling

**Alias:** AWS Auto Scaling.

Nombre utilizado en el material para capacidades de ajuste automático de recursos compatibles. Ayuda a adaptar la capacidad a condiciones y políticas; EC2 Auto Scaling se centra específicamente en grupos de instancias EC2, por lo que los nombres no deben tratarse como servicios idénticos.

**Procedencia:** T2 p. 20. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="availability"></a>

## Availability

**Alias:** Disponibilidad.

Disponibilidad: proporción del intervalo observado durante el que el servicio satisface el criterio de funcionamiento definido. Sirve para evaluar continuidad y objetivos operativos; debe indicarse la ventana de medida y qué cuenta como éxito, y no confundirse con el número de AZ de una región.

**Procedencia:** CA pp.48–50. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws"></a>

## AWS

**Alias:** AWS.

Amazon Web Services, plataforma que ofrece recursos y servicios tecnológicos bajo demanda. Permite combinar cómputo, redes, almacenamiento y servicios administrados; consumir AWS no elimina las responsabilidades del cliente sobre datos, permisos y configuración.

**Procedencia:** T1 pp.4,26. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="aws-batch"></a>

## AWS Batch

**Alias:** AWS Batch.

Servicio para planificar y ejecutar trabajos de procesamiento por lotes sobre capacidad de cómputo. Se utiliza cuando los trabajos pueden organizarse y esperar en colas según recursos disponibles; se diferencia de una aplicación web que debe responder interactivamente a cada petición.

**Procedencia:** T1 p. 29. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-budgets"></a>

## AWS Budgets

**Alias:** AWS Budgets.

Herramienta para definir presupuestos y supervisar costes o uso frente a umbrales. Sirve para avisar de desviaciones y, en configuraciones compatibles, apoyar acciones; un presupuesto no constituye por sí mismo un límite duro que detenga toda la factura.

**Procedencia:** T2 p. 19. [Contexto de estudio](02_beneficios_economia.md).

<a id="business-case"></a>

## Business Case

**Alias:** Business Case.

Justificación de una iniciativa que reúne inversión, beneficios esperados, riesgos y objetivos. Se utiliza para decidir y priorizar una migración; el TCO contribuye con la estimación de costes, pero no sustituye la evaluación de beneficios y alternativas.

**Procedencia:** 06, apartados D.1–D.3. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="byol"></a>

## BYOL

**Alias:** BYOL.

Bring Your Own License: uso de licencias propias existentes cuando sus condiciones permiten emplearlas en el entorno cloud seleccionado. Puede aprovechar inversiones previas; se diferencia de License Included, que integra derechos de licencia concretos en la tarifa del producto.

**Procedencia:** 06, apartado B.5. [Contexto de estudio](02_beneficios_economia.md).

<a id="aws-caf"></a>

## AWS CAF

**Alias:** Cloud Adoption Framework.

AWS Cloud Adoption Framework, marco para identificar capacidades y preparar una transformación cloud mediante seis perspectivas. Se utiliza para alinear negocio, personas, gobierno y capacidades técnicas; sus perspectivas no son fases de migración ni pilares de Well-Architected.

**Procedencia:** 06, apartado D.2. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="capex"></a>

## CAPEX

**Alias:** CAPEX.

Gasto de capital destinado a adquirir o mejorar activos, como servidores e instalaciones. Se utiliza en el análisis de inversión de un entorno propio; no equivale exactamente a coste fijo, porque la clasificación contable y el comportamiento del coste responden a criterios distintos.

**Procedencia:** T1 p.18; 06, B.1. [Contexto de estudio](02_beneficios_economia.md).

<a id="cdc"></a>

## CDC

**Alias:** CDC.

Change Data Capture: captura de cambios posteriores a una copia inicial para propagarlos a un destino. Se utiliza en migraciones y replicación de bases de datos para reducir el desfase; no elimina la necesidad de validar consistencia y planificar el corte.

**Procedencia:** 06, D.5–D.6. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="cdn"></a>

## CDN

**Alias:** CDN.

Content Delivery Network: red distribuida que acerca contenido a los usuarios mediante puntos de entrega y mecanismos de caché. Se utiliza para reducir latencia y solicitudes al origen; se diferencia de DNS, que resuelve nombres y dirige a destinos, y CloudFront es un servicio que implementa esta función.

**Procedencia:** T2 pp.9,17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-cli"></a>

## AWS CLI

**Alias:** Command Line Interface.

AWS Command Line Interface, herramienta para invocar operaciones de AWS mediante comandos de terminal. Se utiliza en scripts y tareas repetibles; frente al SDK ofrece comandos en vez de bibliotecas integradas en un lenguaje, y necesita credenciales y permisos adecuados.

**Procedencia:** T1 p. 30; T2 p. 20. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="cloud-computing"></a>

## Cloud Computing

**Alias:** Cloud Computing.

Modelo de acceso por red, bajo demanda, a recursos tecnológicos configurables que pueden aprovisionarse y liberarse con rapidez. Permite consumir capacidad sin adquirir cada equipo físico; no significa que los recursos sean ilimitados, gratuitos o ajenos a la gestión del cliente.

**Procedencia:** T1 pp.4–9. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="cloud-financial-management"></a>

## Cloud Financial Management

**Alias:** Cloud Financial Management.

Disciplina que coordina ingeniería, finanzas y responsables de negocio para gobernar el gasto cloud y su valor. Se utiliza para asignar costes, definir responsabilidades y mejorar el coste por resultado; no consiste únicamente en escoger el recurso con menor precio por hora.

**Procedencia:** CA pp.38–39. [Contexto de estudio](02_beneficios_economia.md).

<a id="cloudformation"></a>

## CloudFormation

**Alias:** CloudFormation.

Servicio de infraestructura como código para definir y aprovisionar recursos mediante plantillas. Facilita entornos repetibles y cambios revisables; una plantilla reproducible sigue necesitando revisión de permisos, parámetros y decisiones arquitectónicas.

**Procedencia:** 06, B.6. [Contexto de estudio](02_beneficios_economia.md).

<a id="amazon-cloudfront"></a>

## Amazon CloudFront

**Alias:** Amazon CloudFront.

Servicio CDN de AWS que entrega contenido desde ubicaciones distribuidas y puede almacenarlo en caché. Se utiliza para acercar respuestas a los usuarios y aliviar el origen; una ubicación edge no equivale a una región en la que desplegar cualquier recurso AWS.

**Procedencia:** T2 pp. 9, 17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-cloudtrail"></a>

## AWS CloudTrail

**Alias:** AWS CloudTrail.

Servicio que registra actividad de cuenta y operaciones de API dentro del alcance configurado. Se utiliza para auditoría e investigación de acciones; se diferencia de CloudWatch, centrado en observabilidad, y de Config, centrado en configuración de recursos.

**Procedencia:** T2 p. 20. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-cloudwatch"></a>

## Amazon CloudWatch

**Alias:** Amazon CloudWatch.

Servicio de observabilidad para métricas, registros, alarmas y otras señales operativas. Se utiliza para detectar problemas y evaluar el funcionamiento de cargas; una métrica de rendimiento no reemplaza el registro de actividad de API que aporta CloudTrail.

**Procedencia:** T2 p. 20. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-cognito"></a>

## Amazon Cognito

**Alias:** Amazon Cognito.

Servicio para gestionar identidad y autenticación de usuarios de aplicaciones. Sirve para registro, inicio de sesión y funciones de acceso compatibles; su propósito difiere de administrar los permisos de operadores y cargas sobre recursos AWS mediante IAM.

**Procedencia:** T2 p. 18. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-compute-optimizer"></a>

## AWS Compute Optimizer

**Alias:** Compute Optimizer.

Servicio que analiza configuración y métricas de utilización para recomendar ajustes de capacidad de recursos compatibles. Se utiliza para apoyar el dimensionamiento correcto; sus recomendaciones deben contrastarse con requisitos de la aplicación y se diferencian de las comprobaciones más generales de Trusted Advisor.

**Procedencia:** 06, B.4: Rightsizing. [Contexto de estudio](02_beneficios_economia.md).

<a id="aws-config"></a>

## AWS Config

**Alias:** AWS Config.

Servicio que registra configuraciones e historial de recursos y permite evaluarlos mediante reglas. Se utiliza para analizar cambios y conformidad de configuración; CloudTrail documenta actividad y llamadas, mientras que Config permite examinar el estado configurado.

**Procedencia:** T2 p. 20. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-cost-and-usage-report"></a>

## AWS Cost and Usage Report

**Alias:** AWS Cost and Usage Report.

Informe con datos detallados de costes y uso de servicios AWS. Se utiliza para análisis y atribución del consumo con mayor detalle que una vista resumida; no debe confundirse con una alerta presupuestaria de AWS Budgets.

**Procedencia:** T2 p. 19. [Contexto de estudio](02_beneficios_economia.md).

<a id="aws-cost-explorer"></a>

## AWS Cost Explorer

**Alias:** AWS Cost Explorer.

Herramienta para visualizar y analizar costes y uso a lo largo del tiempo, con funciones de previsión disponibles. Se utiliza para identificar tendencias y cambios de gasto; sus estimaciones no constituyen una garantía de la factura futura.

**Procedencia:** T2 p. 19. [Contexto de estudio](02_beneficios_economia.md).

<a id="cost-optimization"></a>

## Cost Optimization

**Alias:** Optimización de costes.

Pilar de Well-Architected que busca entregar valor de negocio evitando gasto innecesario. Relaciona recursos, demanda y coste por resultado; se diferencia de sostenibilidad, cuyo objetivo principal es reducir el impacto ambiental por trabajo útil.

**Procedencia:** CA p. 36–41. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="cpd-data-center"></a>

## CPD / Data Center

**Alias:** CPD / Data Center.

Instalación física con servidores, almacenamiento, redes, energía, refrigeración y controles de seguridad. Sustenta los servicios cloud; una AZ puede incluir uno o más CPD y el cliente normalmente elige región y AZ, no el edificio concreto.

**Procedencia:** T2 pp.7–8. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="das"></a>

## DAS

**Alias:** DAS.

Direct-Attached Storage: almacenamiento conectado directamente al equipo que lo utiliza. Sirve para proporcionar capacidad local al host; se diferencia de NAS, que ofrece archivos por red, y de SAN, que proporciona acceso a almacenamiento de bloques mediante una red especializada.

**Procedencia:** T1 p.16. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="data-at-rest-in-transit"></a>

## Data at rest / in transit

**Alias:** Data at rest / in transit.

Distinción entre datos almacenados y datos que se transmiten entre componentes. Sirve para definir protecciones en ambos estados: cifrar un objeto o volumen no cifra automáticamente todos los trayectos de comunicación, y TLS no sustituye el cifrado en reposo.

**Procedencia:** CA p. 23, 65–66. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-data-transfer-terminal"></a>

## AWS Data Transfer Terminal

**Alias:** Data Transfer Terminal, DTT.

Servicio que proporciona acceso programado a instalaciones físicas para conectar dispositivos propios y transferir datos a AWS mediante conectividad de alta capacidad. Se utiliza cuando se necesita cargar grandes volúmenes bajo las condiciones de acceso del servicio; se diferencia de enviar un dispositivo de la familia Snow y de una transferencia administrada por software como DataSync.

**Procedencia:** 06, D.6: AWS Data Transfer Terminal. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="datasync"></a>

## DataSync

**Alias:** DataSync.

Servicio administrado para transferir archivos y objetos entre sistemas de almacenamiento compatibles. Se utiliza para mover conjuntos de datos y verificar transferencias según las capacidades del servicio; no convierte el esquema ni el código de una base de datos como las herramientas de conversión especializadas.

**Procedencia:** 06, D.6. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="aws-direct-connect"></a>

## AWS Direct Connect

**Alias:** AWS Direct Connect.

Servicio de conectividad dedicada entre una ubicación externa y AWS. Se utiliza cuando se necesita una conexión de red dedicada con características planificadas; no debe suponerse cifrado extremo a extremo por defecto, a diferencia del túnel cifrado de una VPN.

**Procedencia:** T2 p. 17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="dms"></a>

## DMS

**Alias:** AWS Database Migration Service.

AWS Database Migration Service, servicio de migración y replicación de bases de datos entre orígenes y destinos admitidos. Puede combinar carga inicial y captura de cambios; trasladar los datos no garantiza compatibilidad del esquema o del código con un motor diferente.

**Procedencia:** 06, D.5–D.6. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="aws-dms-schema-conversion-aws-sct"></a>

## AWS DMS Schema Conversion / AWS SCT

**Alias:** DMS Schema Conversion, AWS Schema Conversion Tool, AWS SCT, SCT.

Grupo de herramientas relacionadas para evaluar y convertir esquemas y determinados objetos o código al migrar entre motores de bases de datos. DMS Schema Conversion ofrece capacidades de conversión dentro de AWS DMS y AWS SCT es una herramienta diferenciada; sus nombres se agrupan para estudiar la misma necesidad, pero no son productos idénticos. La conversión puede requerir adaptaciones manuales y se distingue de la carga o replicación de datos realizada por DMS.

**Procedencia:** 06, D.6: AWS DMS Schema Conversion / AWS Schema Conversion Tool (SCT). [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="dns"></a>

## DNS

**Alias:** DNS.

Domain Name System, sistema de resolución de nombres y otros registros de dominio. Se utiliza para localizar servicios mediante nombres; una respuesta DNS dirige hacia un destino y no balancea cada conexión activa de la misma forma que ELB.

**Procedencia:** T2 pp.9,17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-dynamodb"></a>

## Amazon DynamoDB

**Alias:** Amazon DynamoDB.

Base de datos NoSQL administrada con modelos de clave-valor y documentos. Se utiliza para patrones de acceso compatibles con ese modelo; no sustituye automáticamente una base relacional con otras consultas, y no es la base de pedidos de Show and Sell en CA p.13.

**Procedencia:** T1 p.28; T2 p.16. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-ebs"></a>

## Amazon EBS

**Alias:** Amazon EBS.

Almacenamiento persistente de bloques para cargas compatibles con EC2. Se utiliza para volúmenes que el sistema operativo trata como discos; se diferencia del almacenamiento de objetos S3 y necesita una estrategia de snapshots y recuperación apropiada.

**Procedencia:** T1 p. 16; T2 p. 14; CA p. 59, 65–66. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-ec2"></a>

## Amazon EC2

**Alias:** Amazon EC2.

Servicio para ejecutar instancias de cómputo virtual configurables. Se utiliza cuando la carga necesita control sobre el sistema operativo y su entorno; frente a Lambda exige administrar más componentes del servidor invitado.

**Procedencia:** T1 pp. 16, 28–29; T2 p. 15; CA p. 10, 12–14. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="ec2-auto-scaling"></a>

## EC2 Auto Scaling

**Alias:** EC2 Auto Scaling / Auto Scaling Group, Amazon EC2 Auto Scaling, Auto Scaling Group, ASG.

Servicio que administra grupos de instancias EC2 y ajusta su capacidad mediante políticas y comprobaciones de salud. Se utiliza para responder a demanda y reemplazar instancias no saludables; el Auto Scaling Group es el conjunto administrado, mientras que rightsizing selecciona tipos y tamaños adecuados.

**Procedencia:** T2 p.15; CA p.13. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="economias-de-escala"></a>

## Economías de escala

**Alias:** Economías de escala.

Reducción potencial del coste unitario al distribuir costes y operar recursos a gran escala. Permiten que un proveedor reúna demanda de muchos clientes y obtenga eficiencias; no garantizan que cualquier aplicación cloud sea más barata sin considerar diseño y uso.

**Procedencia:** T1 p.19; 06, B.6. [Contexto de estudio](02_beneficios_economia.md).

<a id="amazon-ecr"></a>

## Amazon ECR

**Alias:** Amazon ECR.

Registro administrado para almacenar y distribuir imágenes de contenedores. Se utiliza como repositorio de artefactos que después ejecutan motores y orquestadores; subir una imagen al registro no pone en marcha el contenedor.

**Procedencia:** T2 p. 15. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-ecs"></a>

## Amazon ECS

**Alias:** Amazon ECS.

Servicio administrado de AWS para organizar tareas y servicios en contenedores. Se utiliza con el modelo de orquestación de AWS; se diferencia de EKS, que expone el ecosistema Kubernetes, y puede utilizar capacidad de ejecución compatible como Fargate.

**Procedencia:** T1 p. 29; T2 p. 15. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="edge-location"></a>

## Edge Location

**Alias:** Edge Location.

Ubicación de borde desde la que se prestan determinadas funciones de entrega y red cerca de usuarios. Se utiliza, por ejemplo, para distribución de contenido; no es una AZ ni un centro regional donde se despliegue cualquier servicio de cómputo.

**Procedencia:** T2 p.9. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-efs"></a>

## Amazon EFS

**Alias:** Amazon EFS.

Sistema de archivos administrado y compartido por red para clientes compatibles. Se utiliza cuando varias cargas necesitan acceder a archivos comunes; ofrece una interfaz de archivos, distinta del almacenamiento de objetos de S3 y de los volúmenes de bloques EBS.

**Procedencia:** T1 p. 16; T2 p. 14. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-eks"></a>

## Amazon EKS

**Alias:** Amazon EKS.

Servicio administrado para ejecutar Kubernetes y orquestar aplicaciones en contenedores. Se elige cuando se necesitan la API y el ecosistema Kubernetes; ECS utiliza el orquestador propio de AWS y Fargate aporta capacidad de ejecución, no una API de orquestación alternativa.

**Procedencia:** T1 p. 29; T2 p. 15. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-elastic-beanstalk"></a>

## AWS Elastic Beanstalk

**Alias:** AWS Elastic Beanstalk.

Servicio que simplifica el despliegue y la operación de aplicaciones sobre recursos AWS. Se utiliza para delegar parte del aprovisionamiento de plataforma conservando el código propio; no es una aplicación SaaS terminada ni elimina la configuración del cliente.

**Procedencia:** T1 p. 29; T2 p. 15. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="elastic-load-balancing"></a>

## Elastic Load Balancing

**Alias:** Elastic Load Balancing (ELB), ELB, balanceo de carga.

Familia de servicios que distribuye tráfico entre destinos compatibles y puede integrar comprobaciones de salud. Se utiliza para repartir solicitudes y apoyar arquitecturas disponibles; no almacena los pedidos ni sustituye las copias o la resiliencia de los destinos.

**Procedencia:** CA p. 13, 65–66. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="elasticidad"></a>

## Elasticidad

**Alias:** Elasticidad.

Capacidad de aumentar y reducir recursos conforme cambia la demanda. Se utiliza para evitar mantener permanentemente capacidad de pico; se distingue de escalabilidad, que describe la capacidad de soportar crecimiento y no exige ajuste automático en ambos sentidos.

**Procedencia:** T1 pp.7,20; T2 p.10. [Contexto de estudio](02_beneficios_economia.md).

<a id="escalabilidad"></a>

## Escalabilidad

**Alias:** Escalabilidad.

Capacidad de una solución para soportar más carga mediante recursos mayores o más componentes. Se utiliza para planificar crecimiento vertical u horizontal; no implica por sí sola que la capacidad se reduzca después de un pico, como sucede en un diseño elástico.

**Procedencia:** T2 p.10; CA p.51. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="esg"></a>

## ESG

**Alias:** ESG.

Environmental, Social and Governance: aspectos ambientales, sociales y de gobierno corporativo usados para evaluar resultados de una organización. En adopción cloud ayudan a definir objetivos de transformación; no equivalen solo al consumo de energía del pilar de sostenibilidad.

**Procedencia:** 06, D.1–D.2. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="amazon-eventbridge"></a>

## Amazon EventBridge

**Alias:** Amazon EventBridge.

Servicio para enrutar eventos desde productores hacia destinos mediante reglas y capacidades compatibles. Se utiliza para automatizar respuestas y desacoplar integraciones; una cola de mensajes tiene otro cometido principal, mantener trabajos pendientes hasta su consumo.

**Procedencia:** Ampliación 06, B.6. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-fargate"></a>

## AWS Fargate

**Alias:** AWS Fargate.

Modalidad administrada de capacidad para ejecutar contenedores sin que el cliente administre directamente los hosts. Se utiliza con orquestadores compatibles como ECS o EKS; el cliente sigue gestionando imágenes, aplicación, permisos y configuración.

**Procedencia:** T1 p. 29; T2 p. 15. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="iaas"></a>

## IaaS

**Alias:** IaaS.

Infrastructure as a Service: consumo de infraestructura virtualizada de cómputo, red y almacenamiento. Se utiliza para conservar control del sistema operativo y las aplicaciones; frente a PaaS deja más administración técnica en manos del cliente.

**Procedencia:** T1 p.10. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="aws-iam"></a>

## AWS IAM

**Alias:** AWS IAM.

Identity and Access Management, servicio de identidades y autorización para recursos AWS. Se utiliza para definir quién puede realizar qué acciones sobre qué recursos; no filtra puertos ni paquetes como Security Groups o Network ACL.

**Procedencia:** T1 p. 16; T2 p. 18; CA p. 8, 10, 57. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="infrastructure-as-code-iac"></a>

## Infrastructure as Code (IaC)

**Alias:** Infrastructure as Code (IaC).

Práctica de expresar y gestionar infraestructura mediante archivos declarativos o código versionado. Se utiliza para reproducir entornos y revisar cambios; repetir una definición no demuestra que sus permisos o decisiones de diseño sean correctos.

**Procedencia:** T1 pp.5–7; 06, B.6. [Contexto de estudio](02_beneficios_economia.md).

<a id="instancia"></a>

## Instancia

**Alias:** Instancia.

Recurso de cómputo virtual en ejecución, como una instancia de Amazon EC2. Se utiliza para ejecutar un sistema y sus aplicaciones; una AMI proporciona la configuración inicial, mientras que la instancia tiene su propio ciclo de vida y estado operativo.

**Procedencia:** T1 pp.16,28–29. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="json"></a>

## JSON

**Alias:** JSON.

JavaScript Object Notation, formato textual para representar datos estructurados mediante objetos, listas y valores. Se utiliza en intercambios de API y configuraciones; a diferencia de XML no expresa la estructura mediante etiquetas de marcado.

**Procedencia:** T1 p.25. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="aws-kms"></a>

## AWS KMS

**Alias:** AWS KMS.

Key Management Service, servicio para crear y administrar claves criptográficas y controlar su uso. Se integra con cifrado de servicios compatibles; no sustituye la clasificación de datos ni concede automáticamente a cualquier identidad permiso para descifrarlos.

**Procedencia:** T2 p. 18. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-lambda"></a>

## AWS Lambda

**Alias:** AWS Lambda.

Servicio para ejecutar funciones en respuesta a invocaciones o eventos sin administrar servidores subyacentes. Se utiliza para lógica que encaja en sus condiciones de ejecución; frente a EC2 reduce gestión del host, pero el cliente mantiene código, dependencias y permisos.

**Procedencia:** T1 p. 29; T2 p. 15. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="landing-zone"></a>

## Landing Zone

**Alias:** Landing Zone.

Entorno cloud inicial con cuentas, identidad, red, registros y controles de gobierno y seguridad. Se utiliza para recibir cargas de forma consistente durante una adopción o migración; no es una aplicación de negocio ni una fase del CAF.

**Procedencia:** 06, D.3. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="latencia"></a>

## Latencia

**Alias:** Latencia.

Tiempo que transcurre entre una acción o solicitud y la respuesta observada en el trayecto considerado. Se utiliza para evaluar experiencia y rendimiento; mayor ancho de banda no elimina necesariamente distancia, procesamiento o esperas en otros componentes.

**Procedencia:** T1 p.23; T2 p.6. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="license-included"></a>

## License Included

**Alias:** License Included.

Modelo en el que derechos de licencia de un producto concreto están incluidos en la tarifa del recurso o servicio. Simplifica la adquisición de las licencias admitidas; se diferencia de BYOL, donde el cliente aporta derechos existentes y elegibles.

**Procedencia:** 06, B.5. [Contexto de estudio](02_beneficios_economia.md).

<a id="aws-license-manager"></a>

## AWS License Manager

**Alias:** AWS License Manager.

Servicio para gestionar y supervisar el uso de licencias de software en entornos compatibles. Ayuda a controlar asignaciones y cumplimiento; no modifica los derechos contractuales del fabricante ni hace transferible una licencia que no lo sea.

**Procedencia:** Ampliación 06, B.5. [Contexto de estudio](02_beneficios_economia.md).

<a id="amazon-lightsail"></a>

## Amazon Lightsail

**Alias:** Amazon Lightsail.

Servicio que simplifica la puesta en marcha de entornos y recursos para proyectos de alcance acotado. Se utiliza para priorizar facilidad de configuración; frente a componer cada componente con EC2 y otros servicios ofrece una experiencia más integrada y menos granular.

**Procedencia:** T1 p. 29. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-management-console"></a>

## AWS Management Console

**Alias:** AWS Management Console.

Interfaz web gráfica para acceder a servicios y administrar recursos AWS. Se utiliza para explorar y configurar operaciones visualmente; frente a CLI y SDK ofrece interacción por navegador, pero sigue necesitando autenticación y permisos.

**Procedencia:** T1 p. 30; T2 p. 20. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="mfa"></a>

## MFA

**Alias:** MFA.

Multi-Factor Authentication: autenticación que exige factores de categorías diferentes para reforzar la verificación de identidad. Se utiliza para proteger accesos, especialmente el usuario raíz; no concede permisos adicionales ni sustituye el principio de mínimo privilegio.

**Procedencia:** CA p. 8, 56. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="mgn-aws-transform-mgn"></a>

## MGN / AWS Transform MGN

**Alias:** MGN / AWS Transform MGN.

Nombre de la herramienta de migración de servidores tratada en la ampliación 06, relacionada con AWS Application Migration Service y el rehost. Se utiliza para replicar y trasladar cargas con pocos cambios de aplicación; la denominación comercial y disponibilidad deben comprobarse en la documentación enlazada antes de un proyecto real.

**Procedencia:** 06, D.6. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="migration-evaluator"></a>

## Migration Evaluator

**Alias:** Migration Evaluator.

Herramienta de evaluación para apoyar el caso económico de una migración a partir de inventario y uso. Se utiliza para estimar alternativas y costes; no realiza por sí misma el traslado de servidores ni convierte una estimación en ahorro garantizado.

**Procedencia:** 06, D.6. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="aws-migration-hub"></a>

## AWS Migration Hub

**Alias:** Migration Hub.

Servicio utilizado para centralizar información y seguimiento de migraciones de aplicaciones y servidores mediante herramientas compatibles. Se estudia como recurso histórico de coordinación, no como herramienta que traslada por sí sola todas las cargas. El complemento 06 recoge el aviso de que no acepta nuevos clientes desde el 7 de noviembre de 2025 y remite a AWS Transform para nuevas iniciativas; debe consultarse ese aviso antes de planificar un uso real.

**Procedencia:** 06, D.6: AWS Migration Hub (histórico) y AWS Transform. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="migration-wave"></a>

## Migration Wave

**Alias:** Migration Wave.

Oleada: grupo de aplicaciones y recursos que se migran de forma coordinada según dependencias, riesgos y ventanas de cambio. Se utiliza para ejecutar una cartera por etapas y aprender de las primeras migraciones; no es una de las estrategias 7 Rs.

**Procedencia:** 06, D.3. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="mtbf"></a>

## MTBF

**Alias:** MTBF.

Mean Time Between Failures: tiempo medio entre fallos bajo la convención y el intervalo de medida adoptados. Se utiliza para analizar sistemas reparables; en el ejemplo docente incluye 96 horas de operación y 72 de reparación, mientras que MTTF considera el tramo operativo.

**Procedencia:** CA p. 46–47. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="mttf"></a>

## MTTF

**Alias:** MTTF.

Mean Time To Failure: tiempo medio de operación antes de fallar bajo el modelo estudiado. Se utiliza para describir fiabilidad y el tramo disponible de un ciclo; no debe confundirse con MTTR, que mide la reparación o recuperación.

**Procedencia:** CA p. 47. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="mttr"></a>

## MTTR

**Alias:** MTTR.

Mean Time To Repair o Recover, según la definición adoptada: tiempo medio empleado en reparar o restablecer el servicio. Se utiliza para evaluar capacidad de recuperación; reducirlo puede mejorar disponibilidad aunque no cambie la frecuencia de fallos.

**Procedencia:** CA p. 47. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="multi-tenancy"></a>

## Multi-tenancy

**Alias:** Multi-tenancy.

Modelo en el que varios clientes o tenants comparten infraestructura con separación lógica. Se utiliza para aprovechar recursos comunes a escala; compartir hardware no significa que cada cliente pueda acceder a datos o recursos privados de los demás.

**Procedencia:** T1 pp.8–12. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="nas"></a>

## NAS

**Alias:** NAS.

Network-Attached Storage: almacenamiento que ofrece acceso a archivos mediante una red. Se utiliza para compartir archivos entre equipos; se diferencia de DAS, conectado directamente a un host, y de SAN, que proporciona almacenamiento de bloques a través de una red especializada.

**Procedencia:** T1 p.16. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="network-acl"></a>

## Network ACL

**Alias:** ACL / NACL, Network ACL (NACL), NACL, ACL, lista de control de acceso de red.

Lista de reglas que permite o deniega tráfico cuando entra o sale de una subred de VPC. Se utiliza como control de red adicional y es stateless, por lo que el retorno requiere reglas apropiadas; los Security Groups se asocian a recursos compatibles y conservan estado de conexión.

**Procedencia:** T1 p.16; corrección editorial basada en documentación VPC. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="nist"></a>

## NIST

**Alias:** NIST.

National Institute of Standards and Technology, institución que formuló el modelo de cloud computing 5-3-4 utilizado en las fuentes. Sirve para organizar cinco características, tres modelos de servicio y cuatro de despliegue; es un marco conceptual, no un servicio AWS.

**Procedencia:** T1 pp.8–11. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="operational-excellence"></a>

## Operational Excellence

**Alias:** Excelencia operativa.

Pilar de Well-Architected centrado en operar y observar cargas para entregar valor y mejorar procedimientos continuamente. Se utiliza para orientar automatización, respuesta y aprendizaje de eventos; se diferencia de fiabilidad, cuyo foco es que la carga funcione correctamente y se recupere.

**Procedencia:** CA p. 16–20. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="opex"></a>

## OPEX

**Alias:** OPEX.

Gasto operativo asociado al funcionamiento y consumo habitual de recursos y servicios. Se utiliza al analizar el cambio económico hacia cloud; no es sinónimo exacto de coste variable, pues puede haber compromisos recurrentes o componentes estables de gasto.

**Procedencia:** T1 p.18; 06, B.1. [Contexto de estudio](02_beneficios_economia.md).

<a id="aws-organizations"></a>

## AWS Organizations

**Alias:** AWS Organizations.

Servicio para administrar y gobernar varias cuentas AWS de forma centralizada. Se utiliza para agrupar cuentas y aplicar políticas de organización; las políticas de control limitan permisos máximos y no conceden por sí solas acceso a cada recurso.

**Procedencia:** T2 p. 18. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-outposts"></a>

## AWS Outposts

**Alias:** AWS Outposts.

Infraestructura y servicios AWS compatibles desplegados en instalaciones del cliente. Se utiliza cuando una carga requiere procesamiento local, integración cercana o requisitos específicos; no equivale a disponer de una región AWS completa dentro del edificio.

**Procedencia:** T1 p. 29. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="paas"></a>

## PaaS

**Alias:** PaaS.

Platform as a Service: modelo en el que el proveedor opera infraestructura y componentes de plataforma para desplegar aplicaciones. Se utiliza para concentrarse en código, datos y configuración del servicio; frente a IaaS reduce administración del entorno y frente a SaaS conserva una aplicación propia.

**Procedencia:** T1 p.10. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="pago-por-uso"></a>

## Pago por uso

**Alias:** Pago por uso.

Modelo de cobro basado en las unidades de consumo definidas por cada servicio. Se utiliza para relacionar gasto con recursos utilizados; no significa que todos los servicios tengan la misma métrica, ni que no existan costes mínimos, compromisos o recursos facturados mientras están aprovisionados.

**Procedencia:** T1 pp.4,18,26. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="performance-efficiency"></a>

## Performance Efficiency

**Alias:** Eficiencia del rendimiento.

Pilar que busca utilizar recursos de cómputo de forma eficiente para satisfacer requisitos y mantener esa eficiencia al evolucionar demanda y tecnología. Se utiliza para seleccionar y medir arquitectura, cómputo, datos y red; no equivale a elegir siempre la opción más barata.

**Procedencia:** CA p. 31–35. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="point-of-presence-pop"></a>

## Point of Presence (PoP)

**Alias:** Point of Presence (PoP).

Punto de presencia de una red distribuida desde el que se prestan determinadas funciones de entrega y conectividad. Se utiliza para acercar servicios a usuarios e incluye ubicaciones de borde según el contexto; no representa una AZ ni una región para desplegar cualquier servicio.

**Procedencia:** T2 p.9. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-pricing-calculator"></a>

## AWS Pricing Calculator

**Alias:** Pricing Calculator, Calculadora de precios de AWS.

Herramienta para estimar el coste de una configuración prevista de servicios AWS a partir de sus parámetros de uso. Se utiliza para comparar escenarios antes de desplegar; no mide por sí misma el consumo real ni incorpora automáticamente todos los costes de un centro de datos local.

**Procedencia:** 06, B.2: Recursos para evaluar costes. [Contexto de estudio](02_beneficios_economia.md).

<a id="queue-cola-de-mensajes"></a>

## Queue / cola de mensajes

**Alias:** Queue / cola de mensajes.

Mecanismo que conserva mensajes o trabajos pendientes y desacopla productores de consumidores. Se utiliza para procesar etapas de forma asíncrona y absorber variación de demanda; el consumidor debe considerar reintentos y duplicados según la semántica del sistema.

**Procedencia:** CA p. 14. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="rdbms"></a>

## RDBMS

**Alias:** RDBMS / base de datos relacional, Relational Database Management System, base de datos relacional.

Relational Database Management System: sistema gestor de bases de datos organizadas mediante relaciones y tablas. Se utiliza para almacenar y consultar datos relacionales; en AnyCompany se aloja sobre EC2, por lo que mencionar RDBMS no implica utilizar Amazon RDS.

**Procedencia:** T1 p.16; CA pp.12–13. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-rds"></a>

## Amazon RDS

**Alias:** Amazon RDS.

Servicio administrado para operar motores de bases de datos relacionales compatibles. Se utiliza para delegar tareas de infraestructura y del motor admitidas por el servicio; el cliente mantiene responsabilidad sobre datos, acceso y configuración, y el modelo difiere de DynamoDB.

**Procedencia:** T1 p. 16; T2 p. 16. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="recoverability"></a>

## Recoverability

**Alias:** Recoverability.

Capacidad y conjunto de procedimientos para restablecer servicios y datos tras un incidente. Se utiliza para diseñar copias, restauración y recuperación según RTO y RPO; tener redundancia o una copia aislada no demuestra que la restauración completa funcione.

**Procedencia:** CA p. 51. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-redshift"></a>

## Amazon Redshift

**Alias:** Amazon Redshift.

Almacén de datos administrado orientado a consultas analíticas. Se utiliza para analizar conjuntos de datos y generar información de negocio; su propósito difiere del procesamiento transaccional típico de una base relacional de aplicación.

**Procedencia:** T2 p. 16. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="redundancia"></a>

## Redundancia

**Alias:** Redundancia.

Duplicación de componentes o rutas para evitar depender de un único elemento. Se utiliza para tolerar ciertos fallos y apoyar disponibilidad; los elementos duplicados pueden seguir compartiendo dependencias y no sustituyen las copias de seguridad.

**Procedencia:** T1 pp.4–30; T2 pp.4–20. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="refactor"></a>

## Refactor

**Alias:** Refactor.

Estrategia de migración que modifica significativamente código o arquitectura para aprovechar capacidades cloud. Se utiliza cuando el valor de modernizar justifica el esfuerzo y riesgo; frente a replatform introduce cambios más profundos y frente a rehost supera el traslado con pocas modificaciones.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="region-region"></a>

## Región (Region)

**Alias:** Region, Región.

Área geográfica de AWS que contiene varias zonas de disponibilidad y ofrece un catálogo regional de servicios. Se elige por requisitos legales, latencia, disponibilidad de servicios y coste; la replicación entre regiones requiere una decisión explícita y no debe suponerse automática.

**Procedencia:** T2 pp.5–6. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="regional-edge-cache"></a>

## Regional Edge Cache

**Alias:** Regional Edge Cache.

Capa de caché de CloudFront situada entre determinados puntos de entrega y el origen. Se utiliza para reducir recuperaciones del origen y apoyar distribución de contenido; el nombre regional no la convierte en una AZ ni en una región para desplegar recursos de propósito general.

**Procedencia:** T2 p.9. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="rehost"></a>

## Rehost

**Alias:** Rehost.

Estrategia de migración que traslada una aplicación con cambios mínimos, también llamada lift and shift. Se utiliza para mover cargas con rapidez o cumplir un plazo de salida; no produce automáticamente modernización ni optimización de costes.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="reliability"></a>

## Reliability

**Alias:** Fiabilidad.

Pilar que busca que una carga cumpla su función correctamente y de forma consistente cuando se necesita, incluida recuperación ante fallos. Se utiliza para diseñar dominios de fallo, cambios controlados y restauración probada; la disponibilidad es una medida relacionada, pero no agota toda la fiabilidad.

**Procedencia:** CA p. 26–30, 46–52. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="relocate"></a>

## Relocate

**Alias:** Relocate.

Estrategia de traslado de una plataforma o conjunto de cargas compatible sin rediseñar de forma sustancial cada aplicación. Se utiliza cuando se puede reubicar el entorno conservando buena parte de su operación; se diferencia del rehost de servidores individuales y de la refactorización del código.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="rendering"></a>

## Rendering

**Alias:** Rendering.

Procesamiento de modelos, imágenes o vídeo para producir una representación visual. En Make and Ship se utiliza para crear modelos y vistas previas mediante trabajos encolados; sus requisitos de cómputo y duración difieren de la interacción web de Show and Sell.

**Procedencia:** CA p. 14. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="replatform"></a>

## Replatform

**Alias:** Replatform.

Estrategia que migra introduciendo cambios acotados de plataforma sin rediseñar por completo la aplicación. Se utiliza, por ejemplo, para sustituir un componente autogestionado por uno administrado compatible; implica más adaptación que rehost y menos transformación que refactor.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="repurchase"></a>

## Repurchase

**Alias:** Repurchase.

Estrategia que sustituye una solución por otro producto, a menudo SaaS. Se utiliza cuando adquirir una alternativa satisface mejor la necesidad que mantener la aplicación existente; aun así puede requerir migración de datos, integración de identidad y cambios de proceso.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="retain"></a>

## Retain

**Alias:** Retain.

Decisión de mantener una carga en su entorno actual, al menos temporalmente. Se utiliza por restricciones, dependencias o prioridades de cartera; se debe documentar y revisar la razón, y no significa retirar o apagar la aplicación.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="retire"></a>

## Retire

**Alias:** Retire.

Decisión de desactivar una aplicación innecesaria o redundante tras analizar dependencias. Se utiliza para eliminar trabajo y coste sin valor; las obligaciones de conservación de datos pueden continuar aunque la aplicación deje de funcionar.

**Procedencia:** 06, D.4. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="rightsizing"></a>

## Rightsizing

**Alias:** Rightsizing.

Proceso de ajustar tipo, tamaño y configuración de recursos a demanda y requisitos medidos. Se utiliza para reducir sobreaprovisionamiento manteniendo servicio; se diferencia de Auto Scaling, que modifica capacidad conforme a políticas, y necesita mediciones representativas.

**Procedencia:** CA p. 37–39; Optimización. [Contexto de estudio](02_beneficios_economia.md).

<a id="root-user"></a>

## root user

**Alias:** root user.

Identidad raíz de la cuenta AWS con privilegios especialmente amplios y capacidad para tareas reservadas. Se protege con autenticación reforzada y se evita en trabajo cotidiano; compartir sus credenciales dificulta la atribución y concede acceso innecesario.

**Procedencia:** CA p. 8, 10, 56. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-route-53"></a>

## Amazon Route 53

**Alias:** Amazon Route 53.

Servicio DNS administrado con funciones de resolución y enrutamiento de respuestas. Se utiliza para dirigir clientes hacia recursos mediante nombres y políticas compatibles; no reparte cada conexión de aplicación como un balanceador de tráfico.

**Procedencia:** T2 pp. 9, 17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="rpo"></a>

## RPO

**Alias:** RPO.

Recovery Point Objective: objetivo de pérdida temporal máxima de datos tolerable después de un incidente. Se utiliza para diseñar la frecuencia y método de protección; se diferencia de RTO, que establece el tiempo tolerable para restablecer el servicio.

**Procedencia:** 06, C.3. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="rto"></a>

## RTO

**Alias:** RTO.

Recovery Time Objective: objetivo de tiempo máximo tolerable para recuperar el servicio tras una interrupción. Se utiliza para definir procedimientos, recursos y pruebas de recuperación; no expresa cuántos datos se pueden perder, que es el foco del RPO.

**Procedencia:** 06, C.3. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-s3"></a>

## Amazon S3

**Alias:** Amazon S3.

Servicio de almacenamiento de objetos organizados en buckets e identificados mediante claves. Se utiliza para archivos, imágenes, registros y conjuntos de datos; no expone un volumen de bloques como EBS ni la misma interfaz de archivos compartidos que EFS.

**Procedencia:** T1 pp. 16, 28; T2 p. 14; CA p. 12, 14, 60, 65–66. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-s3-glacier"></a>

## Amazon S3 Glacier

**Alias:** Amazon S3 Glacier.

Familia de clases de almacenamiento de S3 destinada a archivo y datos de acceso poco frecuente. Se utiliza cuando retención, coste y tiempos de recuperación permiten esas clases; no se debe asumir el mismo acceso inmediato ni las mismas condiciones de recuperación en todas ellas.

**Procedencia:** T2 p. 14. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="saas"></a>

## SaaS

**Alias:** SaaS.

Software as a Service: aplicación completa consumida como servicio y operada principalmente por el proveedor. Se utiliza para acceder a funcionalidad sin administrar su plataforma; el cliente conserva decisiones sobre usuarios, datos y configuración disponible y no despliega su propio código como en PaaS.

**Procedencia:** T1 p.10. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="san"></a>

## SAN

**Alias:** SAN.

Storage Area Network: red especializada que permite a hosts acceder a almacenamiento de bloques. Se utiliza para presentar volúmenes a sistemas operativos mediante una infraestructura compartida; NAS ofrece archivos por red y DAS conecta almacenamiento directamente a un equipo.

**Procedencia:** T1 p.16. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="aws-sdk"></a>

## AWS SDK

**Alias:** Software Development Kit.

Software Development Kit: bibliotecas para utilizar API de AWS desde un lenguaje de programación. Se utiliza para integrar servicios en aplicaciones; frente a la CLI proporciona interfaces de código en lugar de comandos y sigue requiriendo autorización adecuada.

**Procedencia:** T1 p. 30. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="security"></a>

## Security

**Alias:** Seguridad.

Pilar que orienta la protección de identidades, información, sistemas y activos mediante análisis y mitigación de riesgos. Se utiliza para combinar prevención, detección y respuesta en varias capas; no equivale solo a cifrar datos o cerrar puertos.

**Procedencia:** CA p. 21–25. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="security-group"></a>

## Security Group

**Alias:** Security Groups, SG, grupo de seguridad.

Control de red que permite tráfico de entrada y salida para recursos asociados compatibles. Se utiliza para restringir fuentes, destinos, protocolos y puertos y es stateful; una Network ACL opera en subredes, puede permitir o denegar y es stateless.

**Procedencia:** CA p. 58. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="serverless"></a>

## Serverless

**Alias:** Serverless.

Modelo de consumo que reduce o elimina la administración directa de servidores para el cliente. Se utiliza para concentrarse en funciones o cargas administradas; siguen existiendo servidores y responsabilidades sobre aplicación, datos, configuración y costes.

**Procedencia:** CA p. 33. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="service-limits-quotas"></a>

## Service limits / quotas

**Alias:** Service limits / quotas.

Límites de uso o capacidad de servicios, cuentas o recursos según el alcance definido. Se consideran al planificar escalado, migración y recuperación; algunos admiten solicitudes de aumento, por lo que cloud no debe interpretarse como capacidad ilimitada inmediata.

**Procedencia:** CA p. 29, 54. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-shield"></a>

## AWS Shield

**Alias:** AWS Shield.

Servicio de protección frente a determinados ataques distribuidos de denegación de servicio dentro del alcance de sus modalidades. Se utiliza para proteger disponibilidad ante ese tipo de amenaza; no sustituye autorización IAM, reglas de red ni seguridad de la aplicación.

**Procedencia:** T2 p. 18. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="sla-service-level-agreement"></a>

## SLA — Service Level Agreement

**Alias:** SLA, Service Level Agreement.

Acuerdo que define compromisos de servicio, forma de medirlos y condiciones o compensaciones aplicables. Se utiliza para evaluar obligaciones contractuales; un objetivo interno de disponibilidad o una tabla de porcentajes y minutos no constituyen por sí solos un SLA.

**Procedencia:** CA pp.48–50; explicación editorial. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="snowball-edge"></a>

## Snowball Edge

**Alias:** Snowball Edge.

Dispositivo físico de la familia Snow tratado en las fuentes para transferencia de datos sin depender únicamente de la red y para determinados usos locales. Se estudia como referencia histórica de migración; la ampliación 06 registra restricciones y retirada del producto, por lo que su disponibilidad debe comprobarse antes de planificar un uso real.

**Procedencia:** 06, D.6, referencia histórica. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="sustainability"></a>

## Sustainability

**Alias:** Sostenibilidad.

Pilar que busca reducir el impacto ambiental de una carga y los recursos necesarios por unidad útil de trabajo. Se utiliza para orientar utilización, retención, eficiencia y efectos sobre usuarios; se diferencia de Cost Optimization, aunque una mejora pueda favorecer ambos objetivos.

**Procedencia:** CA p. 7; Well-Architected. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="tco"></a>

## TCO

**Alias:** TCO.

Total Cost of Ownership: estimación de costes directos e indirectos de una solución durante un período y alcance definidos. Se utiliza para comparar alternativas con requisitos equivalentes; ROI incorpora además el beneficio relacionado con la inversión y no es otra denominación del coste total.

**Procedencia:** 06, B.2. [Contexto de estudio](02_beneficios_economia.md).

<a id="tolerancia-a-fallos"></a>

## Tolerancia a fallos

**Alias:** Fault tolerance.

Capacidad de continuar prestando la función prevista ante los fallos contemplados por el diseño. Se utiliza para reducir o evitar interrupciones mediante componentes y mecanismos adecuados; no equivale simplemente a poder restaurar el sistema después de una caída.

**Procedencia:** T2 p.10; CA p.51. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-transfer-family"></a>

## AWS Transfer Family

**Alias:** Transfer Family.

Servicio administrado para intercambiar archivos mediante protocolos compatibles, como SFTP, con almacenamiento y destinos admitidos en AWS. Se utiliza para integrar flujos de archivos y sistemas que ya emplean esos protocolos; no convierte esquemas ni replica cambios de bases de datos como AWS DMS.

**Procedencia:** 06, D.6: AWS Transfer Family y AWS Direct Connect. [Contexto de estudio](04_adopcion_y_migracion_aws.md).

<a id="aws-transit-gateway"></a>

## AWS Transit Gateway

**Alias:** AWS Transit Gateway.

Servicio de interconexión central para conectar múltiples redes, incluidas VPC y redes externas compatibles. Se utiliza para simplificar topologías de conectividad; no elimina la necesidad de definir rutas, rangos de direcciones y segmentación.

**Procedencia:** T2 p. 17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-trusted-advisor"></a>

## AWS Trusted Advisor

**Alias:** AWS Trusted Advisor.

Herramienta que realiza comprobaciones y ofrece recomendaciones sobre recursos y configuración dentro de su alcance. Se utiliza para investigar oportunidades de mejora operativa, seguridad o coste; frente a Well-Architected Tool aporta hallazgos del entorno y necesita evaluación contextual.

**Procedencia:** T2 p. 20; CA p. 53–61; Arquitectura/operación. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="vmware-cloud-on-aws"></a>

## VMware Cloud on AWS

**Alias:** VMware Cloud on AWS.

Entorno de tecnología VMware sobre infraestructura AWS mencionado en el catálogo histórico del curso. Se utiliza como ejemplo de continuidad de plataforma para cargas compatibles; el icono de 2022 no acredita disponibilidad, condiciones comerciales ni regiones vigentes.

**Procedencia:** T1 p. 29. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="amazon-vpc"></a>

## Amazon VPC

**Alias:** Amazon VPC.

Red virtual lógicamente aislada en AWS donde se configuran subredes, direcciones, rutas y controles de conectividad. Se utiliza para organizar redes de cargas; no es una instalación física ni concede por sí sola permisos IAM sobre los servicios.

**Procedencia:** T1 pp. 16, 28; T2 p. 17; Diagramas CA p. 12–14. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-vpn"></a>

## AWS VPN

**Alias:** AWS VPN.

Servicios de conectividad mediante túneles cifrados entre redes o clientes y AWS, según la modalidad. Se utilizan para acceso remoto o conexión de entornos; una Site-to-Site VPN suele emplear Internet como transporte y se diferencia de la conectividad dedicada de Direct Connect.

**Procedencia:** T2 p. 17. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-well-architected-framework"></a>

## AWS Well-Architected Framework

**Alias:** AWS Well-Architected Framework.

Marco de preguntas, principios y buenas prácticas para evaluar cargas mediante seis pilares. Se utiliza para identificar riesgos y orientar mejoras y compromisos de diseño; no es una certificación automática ni una herramienta que valide por sí sola toda configuración.

**Procedencia:** CA p. 6–8, 42–43. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="well-architected-review"></a>

## Well-Architected review

**Alias:** Well-Architected review.

Proceso de evaluación de una carga frente a preguntas y prácticas del marco Well-Architected. Se utiliza para reunir evidencias, identificar riesgos y priorizar mejoras; depende de la calidad del análisis y debe repetirse al evolucionar la arquitectura.

**Procedencia:** CA p. 15, 42. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="aws-well-architected-tool"></a>

## AWS Well-Architected Tool

**Alias:** AWS Well-Architected Tool.

Herramienta que guía y registra revisiones de cargas mediante preguntas del marco y planes de mejora. Se utiliza para organizar decisiones y revisiones posteriores; no sustituye pruebas de recuperación o seguridad ni funciona igual que las comprobaciones de Trusted Advisor.

**Procedencia:** T2 p. 20; CA p. 42; Revisión arquitectónica. [Contexto de estudio](03_infraestructura_y_arquitectura.md).

<a id="xml"></a>

## XML

**Alias:** XML.

Extensible Markup Language, formato de representación estructurada de datos mediante etiquetas. Se utiliza en documentos e intercambios de servicios web compatibles; JSON representa objetos y listas con una sintaxis diferente y ninguno de los formatos concede permisos sobre una API.

**Procedencia:** T1 pp.4–30; T2 pp.4–20. [Contexto de estudio](01_introduccion_cloud_computing.md).

<a id="zona-de-disponibilidad-az"></a>

## Zona de disponibilidad (AZ)

**Alias:** AZ, Availability Zone.

Dominio de aislamiento dentro de una región AWS compuesto por uno o más centros de datos. Se utiliza para distribuir componentes entre dominios de fallo; un diseño multi-AZ requiere que aplicación, red y datos admitan esa distribución y no elimina automáticamente todos los puntos únicos de fallo.

**Procedencia:** T2 pp.5–7. [Contexto de estudio](03_infraestructura_y_arquitectura.md).
