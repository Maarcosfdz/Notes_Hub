# 15. Glosario de tecnología y servicios

Cada entrada corresponde a un concepto canónico. Los alias solo incluyen denominaciones equivalentes o nombres históricos explicitados en la explicación; no se tratan componentes, operaciones, recursos o subtipos como sinónimos del conjunto. Cuando no existe alias real, no aparece el campo. Las definiciones previas reutilizadas se recuperan por clave exacta y conservan procedencia; las nuevas son explicaciones editoriales apoyadas en el apartado y sus referencias.

El archivo `conceptos_bloque_3.json` contiene la exportación de estas entradas con destino Markdown. **No se ha importado en la aplicación**, porque el encargo exige mantenerla intacta. Antes de una futura integración deberán resolverse los compartidos con su glosario activo; no se presentan rutas web nuevas como si ya existieran.

<a id="alta-disponibilidad"></a>

## Alta disponibilidad

**Alias:** High availability, HA.

Diseño que procura mantener un servicio accesible y minimizar sus interrupciones mediante redundancia, detección y recuperación. Se utiliza para cumplir un objetivo de continuidad; no equivale a conservar los datos, que es una cuestión de durabilidad, ni implica ausencia absoluta de fallos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.6](08_despliegue_e_infraestructura.md#seccion-8-6).

<a id="amazon-api-gateway"></a>

## Amazon API Gateway

**Alias:** API Gateway.

Servicio para publicar y administrar APIs compatibles y sus integraciones. Proporciona una entrada de solicitudes; no ejecuta por sí solo toda la lógica de negocio ni es una base de datos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.11](11_redes_y_contenidos.md#seccion-11-11).

<a id="amazon-appstream-2-0"></a>

## Amazon AppStream 2.0

**Alias:** Amazon WorkSpaces Applications.

Denominación del examen para entrega de aplicaciones por streaming, presentada actualmente como WorkSpaces Applications. Permite usar software remoto; se distingue del escritorio completo y del navegador administrado.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.7](14_integracion_y_otros_servicios.md#seccion-14-7).

<a id="amazon-athena"></a>

## Amazon Athena

**Alias:** Athena.

Servicio de consulta, especialmente SQL sobre datos S3 compatibles. Facilita análisis sin gestionar un clúster tradicional; no es una base OLTP para cualquier aplicación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.8](13_ia_ml_y_analitica.md#seccion-13-8).

<a id="amazon-aurora"></a>

## Amazon Aurora

Base de datos relacional administrada por AWS con compatibilidad con MySQL o PostgreSQL según la edición. Se utiliza para cargas relacionales que necesitan esas interfaces; se distingue de DynamoDB, que es NoSQL, y de Redshift, orientado a analítica.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 10.4](10_bases_de_datos.md#seccion-10-4).

<a id="amazon-cloudfront"></a>

## Amazon CloudFront

Servicio CDN de AWS que entrega contenido desde ubicaciones distribuidas y puede almacenarlo en caché. Se utiliza para acercar respuestas a los usuarios y aliviar el origen; una ubicación edge no equivale a una región en la que desplegar cualquier recurso AWS.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.9](11_redes_y_contenidos.md#seccion-11-9).

<a id="amazon-cloudwatch"></a>

## Amazon CloudWatch

Servicio de observabilidad para métricas, registros, alarmas y otras señales operativas. Se utiliza para detectar problemas y evaluar el funcionamiento de cargas; una métrica de rendimiento no reemplaza el registro de actividad de API que aporta CloudTrail.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.11](14_integracion_y_otros_servicios.md#seccion-14-11).

<a id="amazon-cognito"></a>

## Amazon Cognito

Servicio para gestionar identidad y autenticación de usuarios de aplicaciones. Sirve para registro, inicio de sesión y funciones de acceso compatibles; su propósito difiere de administrar los permisos de operadores y cargas sobre recursos AWS mediante IAM.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.8](14_integracion_y_otros_servicios.md#seccion-14-8).

<a id="amazon-comprehend"></a>

## Amazon Comprehend

**Alias:** Comprehend.

Servicio de análisis de lenguaje natural para tareas compatibles sobre contenido. Ayuda a obtener entidades o sentimiento; no es traducción ni prueba infalible de intención humana.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.5](13_ia_ml_y_analitica.md#seccion-13-5).

<a id="amazon-connect"></a>

## Amazon Connect

**Alias:** Connect.

Servicio de capacidades de centro de contacto. Atiende gestión de interacciones; no equivale a enviar correo de aplicación con SES.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.5](14_integracion_y_otros_servicios.md#seccion-14-5).

<a id="amazon-data-firehose"></a>

## Amazon Data Firehose

**Alias:** Data Firehose.

Servicio de entrega de datos de flujo a destinos compatibles. Se relaciona históricamente con Kinesis; no es un alias de Data Streams.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.9](13_ia_ml_y_analitica.md#seccion-13-9).

<a id="amazon-documentdb"></a>

## Amazon DocumentDB

**Alias:** DocumentDB.

Base documental administrada con compatibilidad MongoDB dentro del soporte del producto. Se evalúa para aplicaciones documentales; no es un alias de DynamoDB ni una garantía de toda función de MongoDB.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.6](10_bases_de_datos.md#seccion-10-6).

<a id="amazon-dynamodb"></a>

## Amazon DynamoDB

Base de datos NoSQL administrada con modelos de clave-valor y documentos. Se utiliza para patrones de acceso compatibles con ese modelo; no sustituye automáticamente una base relacional con otras consultas, y no es la base de pedidos de Show and Sell en CA p.13.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 10.5](10_bases_de_datos.md#seccion-10-5).

<a id="amazon-ebs"></a>

## Amazon EBS

Almacenamiento persistente de bloques para cargas compatibles con EC2. Se utiliza para volúmenes que el sistema operativo trata como discos; se diferencia del almacenamiento de objetos S3 y necesita una estrategia de snapshots y recuperación apropiada.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.2](12_almacenamiento_y_recuperacion.md#seccion-12-2).

<a id="amazon-ec2"></a>

## Amazon EC2

Servicio para ejecutar instancias de cómputo virtual configurables. Se utiliza cuando la carga necesita control sobre el sistema operativo y su entorno; frente a Lambda exige administrar más componentes del servidor invitado.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="amazon-ecr"></a>

## Amazon ECR

Registro administrado para almacenar y distribuir imágenes de contenedores. Se utiliza como repositorio de artefactos que después ejecutan motores y orquestadores; subir una imagen al registro no pone en marcha el contenedor.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="amazon-ecs"></a>

## Amazon ECS

Servicio administrado de AWS para organizar tareas y servicios en contenedores. Se utiliza con el modelo de orquestación de AWS; se diferencia de EKS, que expone el ecosistema Kubernetes, y puede utilizar capacidad de ejecución compatible como Fargate.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="amazon-efs"></a>

## Amazon EFS

Sistema de archivos administrado y compartido por red para clientes compatibles. Se utiliza cuando varias cargas necesitan acceder a archivos comunes; ofrece una interfaz de archivos, distinta del almacenamiento de objetos de S3 y de los volúmenes de bloques EBS.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.8](12_almacenamiento_y_recuperacion.md#seccion-12-8).

<a id="amazon-eks"></a>

## Amazon EKS

Servicio administrado para ejecutar Kubernetes y orquestar aplicaciones en contenedores. Se elige cuando se necesitan la API y el ecosistema Kubernetes; ECS utiliza el orquestador propio de AWS y Fargate aporta capacidad de ejecución, no una API de orquestación alternativa.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="amazon-elasticache"></a>

## Amazon ElastiCache

**Alias:** ElastiCache.

Servicio administrado de capacidades en memoria con motores y modalidades compatibles. Se utiliza para caché y otras cargas admitidas; no sustituye universalmente una base transaccional duradera.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.6](10_bases_de_datos.md#seccion-10-6).

<a id="amazon-emr"></a>

## Amazon EMR

**Alias:** EMR.

Servicio para ejecutar procesamiento distribuido con marcos compatibles. Se usa con grandes conjuntos y herramientas como Spark; no es un panel BI.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.10](13_ia_ml_y_analitica.md#seccion-13-10).

<a id="amazon-eventbridge"></a>

## Amazon EventBridge

**Alias:** EventBridge.

Servicio de integración de eventos con mecanismos de encaminamiento compatibles. Relaciona fuentes y destinos; no es sinónimo de una máquina de estados completa.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.4](14_integracion_y_otros_servicios.md#seccion-14-4).

<a id="amazon-fsx"></a>

## Amazon FSx

**Alias:** FSx.

Familia de sistemas de archivos administrados. Se elige una variante según protocolos y carga; no es un único sistema idéntico para todas las aplicaciones.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.9](12_almacenamiento_y_recuperacion.md#seccion-12-9).

<a id="amazon-inspector"></a>

## Amazon Inspector

**Alias:** Inspector.

Servicio que identifica vulnerabilidades y determinados problemas de exposición en recursos y software compatibles. Se utiliza para priorizar remediación; un hallazgo de vulnerabilidad no significa necesariamente que ya se haya observado un ataque.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.8](11_redes_y_contenidos.md#seccion-11-8).

<a id="amazon-kinesis"></a>

## Amazon Kinesis

**Alias:** Kinesis.

Familia de capacidades de datos en flujo continuo. Se reconoce por streaming; deben distinguirse sus productos y no tratarlos como una única API idéntica.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.9](13_ia_ml_y_analitica.md#seccion-13-9).

<a id="amazon-lex"></a>

## Amazon Lex

**Alias:** Lex.

Servicio para construir interfaces conversacionales de voz y texto. Gestiona interacción compatible; no es solo síntesis de voz ni un centro de contacto completo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.3](13_ia_ml_y_analitica.md#seccion-13-3).

<a id="amazon-lightsail"></a>

## Amazon Lightsail

Servicio que simplifica la puesta en marcha de entornos y recursos para proyectos de alcance acotado. Se utiliza para priorizar facilidad de configuración; frente a componer cada componente con EC2 y otros servicios ofrece una experiencia más integrada y menos granular.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="amazon-neptune"></a>

## Amazon Neptune

**Alias:** Neptune.

Base de datos orientada a grafos bajo modelos compatibles. Permite recorrer relaciones entre entidades; no realiza por sí sola una decisión de negocio como determinar fraude.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.6](10_bases_de_datos.md#seccion-10-6).

<a id="amazon-opensearch-service"></a>

## Amazon OpenSearch Service

**Alias:** OpenSearch Service.

Servicio administrado de búsqueda y análisis de datos indexados. Ayuda a explorar información y registros; no es un volumen de archivos ni sustituye automáticamente la fuente transaccional.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.10](13_ia_ml_y_analitica.md#seccion-13-10).

<a id="amazon-polly"></a>

## Amazon Polly

**Alias:** Polly.

Servicio de síntesis de voz a partir de texto. Permite lectura de contenido; realiza la dirección opuesta a transcribir audio.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.4](13_ia_ml_y_analitica.md#seccion-13-4).

<a id="amazon-q"></a>

## Amazon Q

Marca de capacidades de asistencia generativa con productos distintos. Se reconoce en el temario; sus variantes y fechas de soporte no son intercambiables.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.6](13_ia_ml_y_analitica.md#seccion-13-6).

<a id="amazon-q-developer"></a>

## Amazon Q Developer

Asistencia generativa para tareas de desarrollo y operación compatibles. Ayuda a comprender o producir software; requiere revisión y tiene avisos de soporte de interfaces específicos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.6](13_ia_ml_y_analitica.md#seccion-13-6).

<a id="amazon-quick"></a>

## Amazon Quick

Plataforma que incorpora capacidades como Quick Sight según la documentación actual. Se identifica en la evolución del temario; no se reduce a un sinónimo de la función de paneles.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.11](13_ia_ml_y_analitica.md#seccion-13-11).

<a id="amazon-quick-sight"></a>

## Amazon Quick Sight

**Alias:** Quick Sight, Amazon QuickSight.

Capacidad de visualización y BI dentro de Quick en la documentación actual. Permite explorar y presentar indicadores; no prepara automáticamente todo el pipeline ni equivale a la plataforma amplia.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.11](13_ia_ml_y_analitica.md#seccion-13-11).

<a id="amazon-rds"></a>

## Amazon RDS

Servicio administrado para operar motores de bases de datos relacionales compatibles. Se utiliza para delegar tareas de infraestructura y del motor admitidas por el servicio; el cliente mantiene responsabilidad sobre datos, acceso y configuración, y el modelo difiere de DynamoDB.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="amazon-redshift"></a>

## Amazon Redshift

Almacén de datos administrado orientado a consultas analíticas. Se utiliza para analizar conjuntos de datos y generar información de negocio; su propósito difiere del procesamiento transaccional típico de una base relacional de aplicación.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 10.7](10_bases_de_datos.md#seccion-10-7).

<a id="amazon-rekognition"></a>

## Amazon Rekognition

**Alias:** Rekognition.

Servicio de análisis de imágenes y vídeo bajo sus capacidades. Se usa para reconocer contenido visual; no sustituye todo el análisis estructurado de documentos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.5](13_ia_ml_y_analitica.md#seccion-13-5).

<a id="amazon-route-53"></a>

## Amazon Route 53

Servicio DNS administrado con funciones de resolución y enrutamiento de respuestas. Se utiliza para dirigir clientes hacia recursos mediante nombres y políticas compatibles; no reparte cada conexión de aplicación como un balanceador de tráfico.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.10](11_redes_y_contenidos.md#seccion-11-10).

<a id="amazon-s3"></a>

## Amazon S3

Servicio de almacenamiento de objetos organizados en buckets e identificados mediante claves. Se utiliza para archivos, imágenes, registros y conjuntos de datos; no expone un volumen de bloques como EBS ni la misma interfaz de archivos compartidos que EFS.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.4](12_almacenamiento_y_recuperacion.md#seccion-12-4).

<a id="amazon-s3-glacier"></a>

## Amazon S3 Glacier

Familia de clases de almacenamiento de S3 destinada a archivo y datos de acceso poco frecuente. Se utiliza cuando retención, coste y tiempos de recuperación permiten esas clases; no se debe asumir el mismo acceso inmediato ni las mismas condiciones de recuperación en todas ellas.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.6](12_almacenamiento_y_recuperacion.md#seccion-12-6).

<a id="amazon-sagemaker-ai"></a>

## Amazon SageMaker AI

**Alias:** SageMaker AI.

Servicio de herramientas administradas para desarrollar, entrenar y desplegar modelos ML. Se utiliza con necesidades de modelo propio; no es una API única de traducción preparada.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.2](13_ia_ml_y_analitica.md#seccion-13-2).

<a id="amazon-ses"></a>

## Amazon SES

**Alias:** Simple Email Service, SES.

Servicio de correo para aplicaciones bajo su configuración. Se usa para comunicaciones transaccionales compatibles; aceptar un envío no demuestra que el destinatario lo haya leído.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.5](14_integracion_y_otros_servicios.md#seccion-14-5).

<a id="amazon-sns"></a>

## Amazon SNS

**Alias:** Simple Notification Service, SNS.

Servicio de publicación y entrega de notificaciones mediante destinos compatibles. Se utiliza para avisos de alarmas del ejemplo; recibir una notificación no ejecuta por sí solo una investigación ni es lo mismo que almacenar un trabajo en una cola.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.3](14_integracion_y_otros_servicios.md#seccion-14-3).

<a id="amazon-sqs"></a>

## Amazon SQS

**Alias:** Simple Queue Service, SQS.

Servicio de colas para desacoplar productores y consumidores. Mantiene trabajo para procesamiento; no distribuye por defecto una copia a todos los consumidores como un topic.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.2](14_integracion_y_otros_servicios.md#seccion-14-2).

<a id="amazon-textract"></a>

## Amazon Textract

**Alias:** Textract.

Servicio de detección y análisis de texto y estructuras de documentos compatibles. Extrae campos y tablas; no se confunde con identificar objetos en fotografías.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.5](13_ia_ml_y_analitica.md#seccion-13-5).

<a id="amazon-transcribe"></a>

## Amazon Transcribe

**Alias:** Transcribe.

Servicio de reconocimiento de voz que transforma audio en texto. Ayuda con transcripciones; sus resultados requieren evaluación y no son infalibles.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.4](13_ia_ml_y_analitica.md#seccion-13-4).

<a id="amazon-translate"></a>

## Amazon Translate

**Alias:** Translate.

Servicio de traducción de texto entre idiomas compatibles. Se usa para experiencias multilingües; no reconoce audio ni genera voz por sí solo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.4](13_ia_ml_y_analitica.md#seccion-13-4).

<a id="amazon-vpc"></a>

## Amazon VPC

Red virtual lógicamente aislada en AWS donde se configuran subredes, direcciones, rutas y controles de conectividad. Se utiliza para organizar redes de cargas; no es una instalación física ni concede por sí sola permisos IAM sobre los servicios.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.2](11_redes_y_contenidos.md#seccion-11-2).

<a id="amazon-workspaces"></a>

## Amazon WorkSpaces

**Alias:** WorkSpaces.

Servicio de entornos de escritorio virtual bajo modalidades compatibles. Entrega una experiencia de trabajo remota; no equivale a toda aplicación web ni a streaming de una sola aplicación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.7](14_integracion_y_otros_servicios.md#seccion-14-7).

<a id="amazon-workspaces-secure-browser"></a>

## Amazon WorkSpaces Secure Browser

**Alias:** WorkSpaces Secure Browser.

Capacidad de navegación web remota administrada bajo su modelo de aislamiento. Se utiliza para acceso web; no es sinónimo de un escritorio completo WorkSpaces.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.7](14_integracion_y_otros_servicios.md#seccion-14-7).

<a id="ami-amazon-machine-image"></a>

## AMI — Amazon Machine Image

**Alias:** AMI, Amazon Machine Image.

Plantilla con la información necesaria para lanzar una instancia EC2, incluido su sistema operativo y software inicial. Permite reproducir una configuración base; se diferencia de la instancia, que es el recurso en ejecución, y no sustituye la estrategia de respaldo de los datos de la aplicación.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="apache-hadoop"></a>

## Apache Hadoop

**Alias:** Hadoop.

Ecosistema de procesamiento distribuido citado en EMR. Se reconoce como tecnología utilizada por servicios; no equivale a una base de datos AWS específica.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.10](13_ia_ml_y_analitica.md#seccion-13-10).

<a id="apache-spark"></a>

## Apache Spark

**Alias:** Spark.

Marco de procesamiento de datos utilizado en entornos compatibles. Permite trabajos distribuidos; no es el servicio EMR completo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.10](13_ia_ml_y_analitica.md#seccion-13-10).

<a id="api"></a>

## API

Interfaz que especifica cómo un programa solicita operaciones o datos a otro sistema. Se utiliza para integrar y automatizar servicios; la consola, la CLI y los SDK son formas distintas de interactuar con las API de AWS y siguen sujetas a autorización.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.1](08_despliegue_e_infraestructura.md#seccion-8-1).

<a id="application-load-balancer"></a>

## Application Load Balancer

**Alias:** ALB.

Balanceador para decisiones de aplicación HTTP/HTTPS compatibles, como rutas o hosts. Distribuye solicitudes hacia destinos; no ejecuta el código de negocio.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="auto-scaling-group"></a>

## Auto Scaling Group

**Alias:** ASG.

Agrupación de instancias con límites y capacidad deseada para su administración. Permite mantener o ajustar unidades; es un recurso del servicio de escalado, no un alias del servicio completo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.10](09_computacion_contenedores_serverless.md#seccion-9-10).

<a id="aws-amplify"></a>

## AWS Amplify

**Alias:** Amplify.

Herramientas y capacidades para desarrollar y desplegar frontend y aplicaciones compatibles. Facilita flujos e integración; no elimina diseño de backend ni permisos sobre datos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.8](14_integracion_y_otros_servicios.md#seccion-14-8).

<a id="aws-artifact"></a>

## AWS Artifact

Portal para consultar documentos e informes de cumplimiento de AWS y gestionar determinados acuerdos. Sirve como evidencia sobre controles del proveedor; no configura los controles de la aplicación ni demuestra por sí solo el cumplimiento del cliente.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.8](11_redes_y_contenidos.md#seccion-11-8).

<a id="aws-auto-scaling"></a>

## AWS Auto Scaling

Nombre utilizado en el material para capacidades de ajuste automático de recursos compatibles. Ayuda a adaptar la capacidad a condiciones y políticas; EC2 Auto Scaling se centra específicamente en grupos de instancias EC2, por lo que los nombres no deben tratarse como servicios idénticos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.10](09_computacion_contenedores_serverless.md#seccion-9-10).

<a id="aws-backup"></a>

## AWS Backup

Servicio para centralizar políticas y administración de copias de recursos compatibles. Ayuda al gobierno de protección; las restauraciones y objetivos deben validarse.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.10](12_almacenamiento_y_recuperacion.md#seccion-12-10).

<a id="aws-batch"></a>

## AWS Batch

Servicio para planificar y ejecutar trabajos de procesamiento por lotes sobre capacidad de cómputo. Se utiliza cuando los trabajos pueden organizarse y esperar en colas según recursos disponibles; se diferencia de una aplicación web que debe responder interactivamente a cada petición.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="aws-budgets"></a>

## AWS Budgets

Herramienta para definir presupuestos y supervisar costes o uso frente a umbrales. Sirve para avisar de desviaciones y, en configuraciones compatibles, apoyar acciones; un presupuesto no constituye por sí mismo un límite duro que detenga toda la factura.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-cli"></a>

## AWS CLI

**Alias:** AWS Command Line Interface.

AWS Command Line Interface, herramienta para invocar operaciones de AWS mediante comandos de terminal. Se utiliza en scripts y tareas repetibles; frente al SDK ofrece comandos en vez de bibliotecas integradas en un lenguaje, y necesita credenciales y permisos adecuados.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.2](08_despliegue_e_infraestructura.md#seccion-8-2).

<a id="aws-client-vpn"></a>

## AWS Client VPN

**Alias:** Client VPN.

Servicio para acceso de usuarios y dispositivos remotos mediante VPN cliente. Se utiliza para conectividad autorizada; no es el mismo recurso que un túnel entre dos redes completas.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.6](11_redes_y_contenidos.md#seccion-11-6).

<a id="aws-cloudformation"></a>

## AWS CloudFormation

Servicio que administra infraestructura definida mediante plantillas y stacks. Se utiliza para despliegues repetibles; una plantilla no acredita por sí sola seguridad ni ausencia de sustituciones al actualizar recursos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.3](08_despliegue_e_infraestructura.md#seccion-8-3).

<a id="aws-cloudtrail"></a>

## AWS CloudTrail

Servicio que registra actividad de cuenta y operaciones de API dentro del alcance configurado. Se utiliza para auditoría e investigación de acciones; se diferencia de CloudWatch, centrado en observabilidad, y de Config, centrado en configuración de recursos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-codebuild"></a>

## AWS CodeBuild

**Alias:** CodeBuild.

Servicio para ejecutar construcciones y comprobaciones de código. Produce artefactos compatibles; no es toda la orquestación de un pipeline.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.6](14_integracion_y_otros_servicios.md#seccion-14-6).

<a id="aws-codepipeline"></a>

## AWS CodePipeline

**Alias:** CodePipeline.

Servicio que coordina fases de entrega de software. Puede integrar CodeBuild y despliegues; no es el archivo de infraestructura ni el ejecutor de todo trabajo concreto.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.6](14_integracion_y_otros_servicios.md#seccion-14-6).

<a id="aws-config"></a>

## AWS Config

Servicio que registra configuraciones e historial de recursos y permite evaluarlos mediante reglas. Se utiliza para analizar cambios y conformidad de configuración; CloudTrail documenta actividad y llamadas, mientras que Config permite examinar el estado configurado.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-control-tower"></a>

## AWS Control Tower

**Alias:** Control Tower.

Servicio que ayuda a establecer gobierno de entornos de múltiples cuentas. Facilita controles y organización; no es una red que conecte automáticamente todas las VPC.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-cost-and-usage-report"></a>

## AWS Cost and Usage Report

Informe con datos detallados de costes y uso de servicios AWS. Se utiliza para análisis y atribución del consumo con mayor detalle que una vista resumida; no debe confundirse con una alerta presupuestaria de AWS Budgets.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-cost-explorer"></a>

## AWS Cost Explorer

Herramienta para visualizar y analizar costes y uso a lo largo del tiempo, con funciones de previsión disponibles. Se utiliza para identificar tendencias y cambios de gasto; sus estimaciones no constituyen una garantía de la factura futura.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-database-migration-service"></a>

## AWS Database Migration Service

**Alias:** AWS DMS, DMS.

Servicio para mover y replicar datos entre orígenes y destinos compatibles. Ayuda en migraciones y captura de cambios admitida; no garantiza que la aplicación funcione sin adaptación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.8](10_bases_de_datos.md#seccion-10-8).

<a id="aws-direct-connect"></a>

## AWS Direct Connect

Servicio de conectividad dedicada entre una ubicación externa y AWS. Se utiliza cuando se necesita una conexión de red dedicada con características planificadas; no debe suponerse cifrado extremo a extremo por defecto, a diferencia del túnel cifrado de una VPN.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.6](11_redes_y_contenidos.md#seccion-11-6).

<a id="aws-elastic-beanstalk"></a>

## AWS Elastic Beanstalk

Servicio que simplifica el despliegue y la operación de aplicaciones sobre recursos AWS. Se utiliza para delegar parte del aprovisionamiento de plataforma conservando el código propio; no es una aplicación SaaS terminada ni elimina la configuración del cliente.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="aws-elastic-disaster-recovery"></a>

## AWS Elastic Disaster Recovery

Servicio orientado a recuperar servidores mediante replicación y mecanismos compatibles. Apoya continuidad; no es una clase de almacenamiento ni una garantía de RTO idéntico en todo entorno.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.10](12_almacenamiento_y_recuperacion.md#seccion-12-10).

<a id="aws-fargate"></a>

## AWS Fargate

Modalidad administrada de capacidad para ejecutar contenedores sin que el cliente administre directamente los hosts. Se utiliza con orquestadores compatibles como ECS o EKS; el cliente sigue gestionando imágenes, aplicación, permisos y configuración.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.6](09_computacion_contenedores_serverless.md#seccion-9-6).

<a id="aws-global-accelerator"></a>

## AWS Global Accelerator

**Alias:** Global Accelerator.

Servicio que utiliza la red global para dirigir acceso hacia endpoints compatibles. Ayuda a prestaciones y disponibilidad bajo su modelo; no almacena objetos como una CDN.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.11](11_redes_y_contenidos.md#seccion-11-11).

<a id="aws-glue"></a>

## AWS Glue

**Alias:** Glue.

Servicio de integración, preparación y catálogo de datos. Ayuda a transformar conjuntos para consumo; no es la capa de visualización empresarial.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.8](13_ia_ml_y_analitica.md#seccion-13-8).

<a id="aws-health-dashboard"></a>

## AWS Health Dashboard

Recurso para consultar eventos de salud bajo su alcance. Ayuda a diagnosticar incidencias; no demuestra por sí solo la salud funcional de una aplicación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-iam"></a>

## AWS IAM

Identity and Access Management, servicio de identidades y autorización para recursos AWS. Se utiliza para definir quién puede realizar qué acciones sobre qué recursos; no filtra puertos ni paquetes como Security Groups o Network ACL.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="aws-iot-core"></a>

## AWS IoT Core

**Alias:** IoT Core.

Servicio para conectar y autenticar dispositivos e integrar sus mensajes. Ayuda a construir soluciones IoT; no interpreta automáticamente toda señal ni autoriza cualquier acción física.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.9](14_integracion_y_otros_servicios.md#seccion-14-9).

<a id="aws-kms"></a>

## AWS KMS

Key Management Service, servicio para crear y administrar claves criptográficas y controlar su uso. Se integra con cifrado de servicios compatibles; no sustituye la clasificación de datos ni concede automáticamente a cualquier identidad permiso para descifrarlos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.7](12_almacenamiento_y_recuperacion.md#seccion-12-7).

<a id="aws-lambda"></a>

## AWS Lambda

Servicio para ejecutar funciones en respuesta a invocaciones o eventos sin administrar servidores subyacentes. Se utiliza para lógica que encaja en sus condiciones de ejecución; frente a EC2 reduce gestión del host, pero el cliente mantiene código, dependencias y permisos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.7](09_computacion_contenedores_serverless.md#seccion-9-7).

<a id="aws-management-console"></a>

## AWS Management Console

Interfaz web gráfica para acceder a servicios y administrar recursos AWS. Se utiliza para explorar y configurar operaciones visualmente; frente a CLI y SDK ofrece interacción por navegador, pero sigue necesitando autenticación y permisos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.2](08_despliegue_e_infraestructura.md#seccion-8-2).

<a id="aws-organizations"></a>

## AWS Organizations

Servicio para administrar y gobernar varias cuentas AWS de forma centralizada. Se utiliza para agrupar cuentas y aplicar políticas de organización; las políticas de control limitan permisos máximos y no conceden por sí solas acceso a cada recurso.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.5](11_redes_y_contenidos.md#seccion-11-5).

<a id="aws-outposts"></a>

## AWS Outposts

Infraestructura y servicios AWS compatibles desplegados en instalaciones del cliente. Se utiliza cuando una carga requiere procesamiento local, integración cercana o requisitos específicos; no equivale a disponer de una región AWS completa dentro del edificio.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="aws-privatelink"></a>

## AWS PrivateLink

**Alias:** PrivateLink.

Capacidad de acceso privado a servicios compatibles mediante su modelo de endpoints. Se usa para consumir servicios específicos; no es una VPN general entre todas las redes.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.5](11_redes_y_contenidos.md#seccion-11-5).

<a id="aws-resource-access-manager"></a>

## AWS Resource Access Manager

**Alias:** AWS RAM.

Servicio para compartir recursos compatibles entre cuentas bajo sus condiciones. Participa en compartir subredes; no equivale a conceder automáticamente acceso a todos los datos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.5](11_redes_y_contenidos.md#seccion-11-5).

<a id="aws-schema-conversion-tool"></a>

## AWS Schema Conversion Tool

**Alias:** AWS SCT, SCT.

Herramienta que ayuda a evaluar y convertir esquema y código compatible entre motores. Se utiliza en migraciones heterogéneas; no equivale a copiar todas las filas ni a DMS Schema Conversion como producto idéntico.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.8](10_bases_de_datos.md#seccion-10-8).

<a id="aws-sdk"></a>

## AWS SDK

**Alias:** AWS Software Development Kit.

Software Development Kit: bibliotecas para utilizar API de AWS desde un lenguaje de programación. Se utiliza para integrar servicios en aplicaciones; frente a la CLI proporciona interfaces de código en lugar de comandos y sigue requiriendo autorización adecuada.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.2](08_despliegue_e_infraestructura.md#seccion-8-2).

<a id="aws-serverless-application-repository"></a>

## AWS Serverless Application Repository

Catálogo de aplicaciones serverless empaquetadas mencionado por el material docente. Ayuda a descubrir componentes reutilizables; su presencia histórica no garantiza condiciones comerciales actuales.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="aws-service-catalog"></a>

## AWS Service Catalog

**Alias:** Service Catalog.

Servicio para ofrecer productos de infraestructura aprobados. Ayuda a estandarizar aprovisionamiento; no equivale a un catálogo de todos los datos analíticos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-shield"></a>

## AWS Shield

Servicio de protección frente a determinados ataques distribuidos de denegación de servicio dentro del alcance de sus modalidades. Se utiliza para proteger disponibilidad ante ese tipo de amenaza; no sustituye autorización IAM, reglas de red ni seguridad de la aplicación.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.8](11_redes_y_contenidos.md#seccion-11-8).

<a id="aws-site-to-site-vpn"></a>

## AWS Site-to-Site VPN

**Alias:** Site-to-Site VPN.

Conectividad cifrada de red a red mediante túneles compatibles. Se utiliza entre instalaciones y AWS; necesita rutas y no equivale al acceso individual de Client VPN.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.6](11_redes_y_contenidos.md#seccion-11-6).

<a id="aws-step-functions"></a>

## AWS Step Functions

**Alias:** Step Functions.

Servicio de coordinación de procesos mediante estados y pasos. Orquesta tareas; no sustituye el código que ejecuta cada operación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.4](14_integracion_y_otros_servicios.md#seccion-14-4).

<a id="aws-storage-gateway"></a>

## AWS Storage Gateway

**Alias:** Storage Gateway.

Servicio de integración de almacenamiento entre entornos locales y AWS mediante modalidades compatibles. Se utiliza en el ejemplo de transferencia protegida hacia S3; no es un gestor de identidad ni un certificado TLS.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.10](12_almacenamiento_y_recuperacion.md#seccion-12-10).

<a id="aws-support"></a>

## AWS Support

**Alias:** Soporte AWS.

Servicio de asistencia para incidencias y consultas de AWS según el ámbito y plan aplicables. Se utiliza en el material al tratar situaciones de acceso o gestión de la cuenta que requieren soporte; no sustituye los permisos IAM ni concede automáticamente administración sobre recursos del cliente.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-systems-manager"></a>

## AWS Systems Manager

**Alias:** Systems Manager.

Conjunto de capacidades de administración de recursos compatibles. Ayuda a operar entornos; no elimina permisos ni equivale a un único agente universal.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-transit-gateway"></a>

## AWS Transit Gateway

Servicio de interconexión central para conectar múltiples redes, incluidas VPC y redes externas compatibles. Se utiliza para simplificar topologías de conectividad; no elimina la necesidad de definir rutas, rangos de direcciones y segmentación.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.5](11_redes_y_contenidos.md#seccion-11-5).

<a id="aws-trusted-advisor"></a>

## AWS Trusted Advisor

Herramienta que realiza comprobaciones y ofrece recomendaciones sobre recursos y configuración dentro de su alcance. Se utiliza para investigar oportunidades de mejora operativa, seguridad o coste; frente a Well-Architected Tool aporta hallazgos del entorno y necesita evaluación contextual.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-vpn"></a>

## AWS VPN

Servicios de conectividad mediante túneles cifrados entre redes o clientes y AWS, según la modalidad. Se utilizan para acceso remoto o conexión de entornos; una Site-to-Site VPN suele emplear Internet como transporte y se diferencia de la conectividad dedicada de Direct Connect.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.6](11_redes_y_contenidos.md#seccion-11-6).

<a id="aws-well-architected-tool"></a>

## AWS Well-Architected Tool

Herramienta que guía y registra revisiones de cargas mediante preguntas del marco y planes de mejora. Se utiliza para organizar decisiones y revisiones posteriores; no sustituye pruebas de recuperación o seguridad ni funciona igual que las comprobaciones de Trusted Advisor.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="aws-x-ray"></a>

## AWS X-Ray

**Alias:** X-Ray.

Servicio de trazado para diagnosticar recorridos de solicitudes compatibles. Se combina con métricas y registros; no funciona como instrumentación universal sin integración.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.6](14_integracion_y_otros_servicios.md#seccion-14-6).

<a id="business-intelligence"></a>

## Business intelligence

**Alias:** BI, Inteligencia de negocio.

Prácticas y capacidades para explorar y presentar información útil para decisiones. Incluye métricas y paneles; la visualización no garantiza calidad de los datos de origen.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.11](13_ia_ml_y_analitica.md#seccion-13-11).

<a id="cache"></a>

## Caché

**Alias:** Cache.

Copia o representación temporal para acelerar accesos o evitar trabajo repetido. Necesita políticas de actualización o invalidación; no debe confundirse con la fuente autoritativa de datos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.6](10_bases_de_datos.md#seccion-10-6).

<a id="cdn"></a>

## CDN

Content Delivery Network: red distribuida que acerca contenido a los usuarios mediante puntos de entrega y mecanismos de caché. Se utiliza para reducir latencia y solicitudes al origen; se diferencia de DNS, que resuelve nombres y dirige a destinos, y CloudFront es un servicio que implementa esta función.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.9](11_redes_y_contenidos.md#seccion-11-9).

<a id="cidr"></a>

## CIDR

**Alias:** Classless Inter-Domain Routing.

Notación para representar prefijos y rangos de direcciones IP. Se utiliza en reglas y direccionamiento, como los rangos ilustrativos del curso; un prefijo no es una identidad IAM ni una referencia a un Security Group.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="classic-load-balancer"></a>

## Classic Load Balancer

**Alias:** CLB.

Generación anterior de balanceador conservada en actividades docentes. Sirve para interpretar arquitecturas históricas; la documentación recomienda migrar a generaciones actuales.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="clave-de-ordenacion"></a>

## Clave de ordenación

**Alias:** Sort key.

Atributo que completa una clave primaria compuesta en DynamoDB. Permite distinguir y ordenar elementos dentro de la clave de partición según operaciones; no es su sinónimo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.5](10_bases_de_datos.md#seccion-10-5).

<a id="clave-de-particion"></a>

## Clave de partición

**Alias:** Partition key.

Atributo que participa en la identificación y distribución de elementos DynamoDB. Se diseña según acceso y distribución de carga; no es una clave de cifrado.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.5](10_bases_de_datos.md#seccion-10-5).

<a id="contenedor"></a>

## Contenedor

**Alias:** Container.

Ejecución aislada de una aplicación bajo un modelo de virtualización del sistema. Empaqueta dependencias y configuración; no es la imagen almacenada ni necesariamente una VM completa.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="cpd-data-center"></a>

## CPD / Data Center

Instalación física con servidores, almacenamiento, redes, energía, refrigeración y controles de seguridad. Sustenta los servicios cloud; una AZ puede incluir uno o más CPD y el cliente normalmente elige región y AZ, no el edificio concreto.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.5](08_despliegue_e_infraestructura.md#seccion-8-5).

<a id="data-lake"></a>

## Data lake

**Alias:** Lago de datos.

Repositorio de conjuntos para diferentes usos analíticos. Puede conservar datos brutos y preparados; no equivale necesariamente a un warehouse transaccionalmente modelado.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.7](13_ia_ml_y_analitica.md#seccion-13-7).

<a id="data-warehouse"></a>

## Data warehouse

**Alias:** Almacén de datos.

Organización de datos para cargas analíticas e informes. Facilita agregaciones y exploración; no equivale al sistema transaccional de cada aplicación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.7](10_bases_de_datos.md#seccion-10-7).

<a id="dead-letter-queue"></a>

## Dead-letter queue

**Alias:** DLQ.

Cola destinada a separar mensajes que no se procesan bajo una política. Facilita investigación y tratamiento; no resuelve automáticamente la causa del fallo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.2](14_integracion_y_otros_servicios.md#seccion-14-2).

<a id="despliegue-hibrido"></a>

## Despliegue híbrido

**Alias:** Hybrid deployment.

Combinación de entornos cloud y de instalaciones bajo una arquitectura integrada. Permite mantener necesidades locales y utilizar nube; no exige necesariamente dos proveedores públicos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.4](08_despliegue_e_infraestructura.md#seccion-8-4).

<a id="dhcp"></a>

## DHCP

**Alias:** Dynamic Host Configuration Protocol.

Protocolo relacionado con configuración de red de clientes. Aparece como ejemplo de aplicación en la fuente; no es sinónimo de DNS ni de una tabla de rutas.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="dms-schema-conversion"></a>

## DMS Schema Conversion

Capacidades gestionadas de evaluación y conversión de esquemas en el ámbito de DMS. Ayudan a preparar un destino; requieren revisar compatibilidad y trabajo manual pendiente.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.8](10_bases_de_datos.md#seccion-10-8).

<a id="dns"></a>

## DNS

Domain Name System, sistema de resolución de nombres y otros registros de dominio. Se utiliza para localizar servicios mediante nombres; una respuesta DNS dirige hacia un destino y no balancea cada conexión activa de la misma forma que ELB.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.10](11_redes_y_contenidos.md#seccion-11-10).

<a id="docker"></a>

## Docker

Plataforma y herramientas para construir y ejecutar contenedores. Se utiliza para empaquetar aplicaciones; no equivale a ECS, Kubernetes o un registro de imágenes.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="ebs-multi-attach"></a>

## EBS Multi-Attach

**Alias:** Multi-Attach.

Capacidad para asociar un volumen compatible a varias instancias de la misma AZ. Atiende aplicaciones coordinadas; no convierte automáticamente un sistema de archivos convencional en compartido seguro.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.2](12_almacenamiento_y_recuperacion.md#seccion-12-2).

<a id="ebs-snapshot"></a>

## EBS snapshot

**Alias:** instantánea EBS.

Copia de estado de un volumen EBS que permite recuperar datos a un punto conservado. Se utiliza dentro de una estrategia de copias; la replicación de infraestructura y la existencia de una copia no prueban una restauración completa ensayada.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 12.3](12_almacenamiento_y_recuperacion.md#seccion-12-3).

<a id="ec2-auto-scaling"></a>

## EC2 Auto Scaling

**Alias:** Amazon EC2 Auto Scaling.

Servicio que administra grupos de instancias EC2 y ajusta su capacidad mediante políticas y comprobaciones de salud. Se utiliza para responder a demanda y reemplazar instancias no saludables; el Auto Scaling Group es el conjunto administrado, mientras que rightsizing selecciona tipos y tamaños adecuados.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.10](09_computacion_contenedores_serverless.md#seccion-9-10).

<a id="ec2-instance-store"></a>

## EC2 instance store

**Alias:** Instance store.

Almacenamiento local ligado a la instancia y al host. Sirve para datos temporales o recreables; no debe asumirse persistencia tras parada o terminación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.2](12_almacenamiento_y_recuperacion.md#seccion-12-2).

<a id="edge-location"></a>

## Edge Location

Ubicación de borde desde la que se prestan determinadas funciones de entrega y red cerca de usuarios. Se utiliza, por ejemplo, para distribución de contenido; no es una AZ ni un centro regional donde se despliegue cualquier servicio de cómputo.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.7](08_despliegue_e_infraestructura.md#seccion-8-7).

<a id="elastic-ip"></a>

## Elastic IP

**Alias:** Dirección IP elástica.

Dirección pública estática administrada como recurso bajo condiciones AWS. Permite conservar direccionamiento público cuando procede; no configura automáticamente accesibilidad ni salud.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.4](09_computacion_contenedores_serverless.md#seccion-9-4).

<a id="elastic-load-balancing"></a>

## Elastic Load Balancing

**Alias:** Elastic Load Balancing (ELB), ELB.

Familia de servicios que distribuye tráfico entre destinos compatibles y puede integrar comprobaciones de salud. Se utiliza para repartir solicitudes y apoyar arquitecturas disponibles; no almacena los pedidos ni sustituye las copias o la resiliencia de los destinos.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="elt"></a>

## ELT

**Alias:** Extract, Load, Transform.

Proceso que carga antes de realizar determinadas transformaciones. Se elige según arquitectura; no es un alias de ETL ni una garantía de mayor rendimiento.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.7](13_ia_ml_y_analitica.md#seccion-13-7).

<a id="eni"></a>

## ENI

**Alias:** Elastic Network Interface, Interfaz de red elástica.

Interfaz virtual con direcciones y atributos de red. Conecta recursos y puede reasignarse bajo condiciones; no es una IP pública ni una subred.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.3](11_redes_y_contenidos.md#seccion-11-3).

<a id="entrenamiento"></a>

## Entrenamiento

**Alias:** Training.

Proceso de ajustar un modelo utilizando datos y un procedimiento. Se distingue de utilizar el modelo resultante para producir inferencias.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.1](13_ia_ml_y_analitica.md#seccion-13-1).

<a id="etl"></a>

## ETL

**Alias:** Extract, Transform, Load.

Proceso de extraer, transformar y cargar datos. Se usa en preparación e integración; su secuencia no es la misma que ELT.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.7](13_ia_ml_y_analitica.md#seccion-13-7).

<a id="fifo"></a>

## FIFO

**Alias:** First In, First Out.

Propiedad de orden que identifica una modalidad de cola bajo sus condiciones. Ayuda en flujos que requieren orden; no asegura por sí sola exactamente una vez todo efecto externo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.2](14_integracion_y_otros_servicios.md#seccion-14-2).

<a id="fsx-for-lustre"></a>

## FSx for Lustre

Variante de archivos paralelos orientada a cargas de alto rendimiento. Se evalúa en procesamiento intensivo; no equivale a un archivo de objetos de larga retención.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.9](12_almacenamiento_y_recuperacion.md#seccion-12-9).

<a id="fsx-for-netapp-ontap"></a>

## FSx for NetApp ONTAP

Servicio de archivos basado en capacidades ONTAP compatibles. Permite utilizar su modelo en AWS; no comparte automáticamente todas las funciones de las otras variantes FSx.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.9](12_almacenamiento_y_recuperacion.md#seccion-12-9).

<a id="fsx-for-openzfs"></a>

## FSx for OpenZFS

Variante de archivos basada en OpenZFS bajo el modelo del servicio. Atiende aplicaciones compatibles; no es un volumen EBS individual ni un bucket.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.9](12_almacenamiento_y_recuperacion.md#seccion-12-9).

<a id="fsx-for-windows-file-server"></a>

## FSx for Windows File Server

Variante de archivos administrados para necesidades compatibles con Windows y SMB. Se evalúa para aplicaciones que esperan ese entorno; no es EFS con otro nombre.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.9](12_almacenamiento_y_recuperacion.md#seccion-12-9).

<a id="ftp"></a>

## FTP

**Alias:** File Transfer Protocol.

Protocolo de transferencia de archivos citado en la tabla OSI. Sirve para identificar funciones de aplicación; no es un servicio administrado AWS ni implica protección universal del canal.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="gateway-load-balancer"></a>

## Gateway Load Balancer

**Alias:** GWLB.

Balanceador que integra dispositivos virtuales de red compatibles dentro del flujo. Facilita distribuir tráfico hacia esas capacidades; no es simplemente un balanceador HTTP.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="glue-data-catalog"></a>

## Glue Data Catalog

Catálogo de metadatos sobre conjuntos y estructuras. Facilita interpretación y descubrimiento; no contiene por definición una copia de todos los bytes originales.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.8](13_ia_ml_y_analitica.md#seccion-13-8).

<a id="health-check"></a>

## Health check

**Alias:** Comprobación de salud.

Evaluación configurada para determinar si un destino cumple condiciones. Ayuda a dirigir tráfico o recuperar capacidad; una comprobación simple no certifica todo el proceso de negocio.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="http"></a>

## HTTP

**Alias:** Hypertext Transfer Protocol.

Protocolo de aplicación para intercambio de solicitudes y respuestas. Se usa en servicios web; no equivale a conectividad IP ni implica cifrado por sí solo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="https"></a>

## HTTPS

Uso de HTTP protegido mediante TLS en el contexto actual. Protege el canal bajo configuración correcta; no sustituye autorización ni diseño de caché.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="iaas"></a>

## IaaS

Infrastructure as a Service: consumo de infraestructura virtualizada de cómputo, red y almacenamiento. Se utiliza para conservar control del sistema operativo y las aplicaciones; frente a PaaS deja más administración técnica en manos del cliente.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.1](09_computacion_contenedores_serverless.md#seccion-9-1).

<a id="ibm-db2"></a>

## IBM Db2

Motor relacional que aparece en la figura de motores entregada. Sirve para reconocer opciones de compatibilidad; la figura no prueba disponibilidad de todas las ediciones actuales.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="imagen-de-contenedor"></a>

## Imagen de contenedor

**Alias:** Container image.

Artefacto que describe el entorno que se ejecutará como contenedor. Se guarda y distribuye en un registro; almacenarlo no significa haber desplegado una aplicación saludable.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="imdsv2"></a>

## IMDSv2

Versión orientada a sesiones del servicio de metadatos de instancias. Permite consultar información bajo ese mecanismo; no es un rol IAM ni una clave SSH.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.4](09_computacion_contenedores_serverless.md#seccion-9-4).

<a id="inferencia"></a>

## Inferencia

**Alias:** Inference.

Uso de un modelo para obtener resultados sobre entradas. Se utiliza después o junto a procesos de aprendizaje; no equivale a entrenar desde cero en cada solicitud.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.1](13_ia_ml_y_analitica.md#seccion-13-1).

<a id="infraestructura-como-codigo"></a>

## Infraestructura como código

**Alias:** IaC.

Representación versionable de recursos y relaciones para administrar despliegues. Facilita reproducir y revisar entornos; no equivale a observar métricas ni a cualquier script de creación sin control de estado.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.3](08_despliegue_e_infraestructura.md#seccion-8-3).

<a id="internet-gateway"></a>

## Internet Gateway

**Alias:** Gateway de Internet, IGW.

Componente de conectividad de VPC que participa en el acceso a Internet bajo rutas y configuraciones admitidas. Se utiliza en arquitecturas de red pública; su presencia no sustituye direccionamiento, Security Groups, ACL ni autenticación.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.4](11_redes_y_contenidos.md#seccion-11-4).

<a id="iops"></a>

## IOPS

**Alias:** Input/Output Operations Per Second.

Medida de operaciones de entrada y salida por segundo. Ayuda a comparar cargas y almacenamiento; no equivale a bytes transferidos por segundo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.3](12_almacenamiento_y_recuperacion.md#seccion-12-3).

<a id="ipv4"></a>

## IPv4

Versión de IP con direcciones de 32 bits. Permite direccionar redes y extremos; no utiliza la misma longitud y notación que IPv6.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="ipv6"></a>

## IPv6

Versión de IP con direcciones de 128 bits. Se usa bajo configuración y soporte compatibles; no se describe correctamente como cuatro números decimales separados por puntos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="json"></a>

## JSON

JavaScript Object Notation, formato textual para representar datos estructurados mediante objetos, listas y valores. Se utiliza en intercambios de API y configuraciones; a diferencia de XML no expresa la estructura mediante etiquetas de marcado.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.1](08_despliegue_e_infraestructura.md#seccion-8-1).

<a id="kinesis-data-streams"></a>

## Kinesis Data Streams

Servicio de ingestión y consumo de registros como stream. Permite procesamiento continuo; no equivale a una consulta ocasional de datos históricos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.9](13_ia_ml_y_analitica.md#seccion-13-9).

<a id="kiro"></a>

## Kiro

Herramienta citada por la documentación como alternativa relacionada con asistencia de desarrollo. Se conserva para interpretar el aviso actual; no se considera alias de Q Developer.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.6](13_ia_ml_y_analitica.md#seccion-13-6).

<a id="kubernetes"></a>

## Kubernetes

Plataforma de orquestación de cargas en contenedores. Organiza despliegue y operación; EKS proporciona Kubernetes administrado y no es un nombre equivalente de todo el proyecto.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.5](09_computacion_contenedores_serverless.md#seccion-9-5).

<a id="launch-template"></a>

## Launch template

**Alias:** Plantilla de lanzamiento.

Recurso versionable que conserva parámetros para lanzar instancias. Se utiliza con mecanismos como Auto Scaling; no es una AMI ni el grupo que mantiene la capacidad.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.10](09_computacion_contenedores_serverless.md#seccion-9-10).

<a id="ldap"></a>

## LDAP

**Alias:** Lightweight Directory Access Protocol.

Protocolo de acceso a información de directorio. Se reconoce en el modelo de red; no es una VPC ni una política IAM.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="lifecycle-rules"></a>

## Lifecycle Rules

**Alias:** Reglas de ciclo de vida.

Reglas que automatizan transiciones o vencimiento de objetos compatibles. Reducen intervención manual; no significan que todos los datos deban seguir los plazos del ejemplo docente.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.7](12_almacenamiento_y_recuperacion.md#seccion-12-7).

<a id="listener"></a>

## Listener

**Alias:** Agente de escucha.

Configuración que recibe conexiones de acuerdo con protocolo y puerto del balanceador. Participa en dirigir tráfico; no es el grupo de servidores que lo procesa.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="mac"></a>

## MAC

**Alias:** Media Access Control.

Denominación relacionada con control e identificación en la capa de enlace. Se utiliza para diferenciar niveles de dirección; no equivale a una IP o identidad IAM.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="machine-learning"></a>

## Machine learning

**Alias:** ML, Aprendizaje automático.

Enfoque que utiliza modelos aprendidos a partir de datos. Permite predicciones o tareas sobre casos nuevos; no convierte cualquier consulta de datos en entrenamiento.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 13.1](13_ia_ml_y_analitica.md#seccion-13-1).

<a id="maquina-de-estados"></a>

## Máquina de estados

**Alias:** State machine.

Representación de un flujo y sus estados y transiciones. Se usa para coordinar procesos; no equivale a una única invocación de función.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.4](14_integracion_y_otros_servicios.md#seccion-14-4).

<a id="mariadb"></a>

## MariaDB

Motor relacional mencionado en el catálogo docente. Se evalúa por compatibilidad de aplicación; no es un alias de cualquier edición MySQL.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="mount-target"></a>

## Mount target

**Alias:** Destino de montaje.

Recurso de conectividad para acceder a un sistema EFS bajo su modelo. Se ubica en una subred compatible; no equivale al sistema de archivos completo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.8](12_almacenamiento_y_recuperacion.md#seccion-12-8).

<a id="multi-az"></a>

## Multi-AZ

Diseño o modalidad que utiliza varias zonas de disponibilidad. Ayuda frente a fallos zonales; sus capacidades concretas dependen del servicio y no equivalen siempre a réplicas de lectura.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.6](08_despliegue_e_infraestructura.md#seccion-8-6).

<a id="multirregion"></a>

## Multirregión

**Alias:** Multi-Region.

Arquitectura distribuida entre regiones para objetivos como continuidad o alcance geográfico. Necesita configurar datos y conmutación; no surge automáticamente de tener varios recursos AWS.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.6](08_despliegue_e_infraestructura.md#seccion-8-6).

<a id="mysql"></a>

## MySQL

Motor relacional utilizado por aplicaciones y servicios compatibles. Se reconoce al elegir motor; no es el servicio RDS completo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="nat-gateway"></a>

## NAT Gateway

**Alias:** Puerta de enlace NAT.

Servicio de traducción de direcciones para flujos compatibles. En el ejemplo público permite salida iniciada desde redes privadas; no admite por ello cualquier conexión nueva entrante desde Internet.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.4](11_redes_y_contenidos.md#seccion-11-4).

<a id="netbios"></a>

## NetBIOS

Conjunto histórico de interfaces y servicios de comunicación de red. Se conserva por la tabla docente; no se prescribe como base obligatoria de una arquitectura AWS moderna.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="network-acl"></a>

## Network ACL

**Alias:** Network ACL (NACL), NACL, ACL de red, lista de control de acceso de red.

Lista de reglas que permite o deniega tráfico cuando entra o sale de una subred de VPC. Se utiliza como control de red adicional y es stateless, por lo que el retorno requiere reglas apropiadas; los Security Groups se asocian a recursos compatibles y conservan estado de conexión.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.8](11_redes_y_contenidos.md#seccion-11-8).

<a id="network-load-balancer"></a>

## Network Load Balancer

**Alias:** NLB.

Balanceador orientado a flujos y protocolos de transporte compatibles. Responde a necesidades de red y direccionamiento; no comparte todas las reglas de aplicación de ALB.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="nfs"></a>

## NFS

**Alias:** Network File System.

Protocolo de sistema de archivos de red. Permite a clientes compatibles acceder a archivos; no es el mismo contrato que una API de objetos S3.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.8](12_almacenamiento_y_recuperacion.md#seccion-12-8).

<a id="nosql"></a>

## NoSQL

Categoría amplia de modelos de datos no reducidos a un único modelo relacional tradicional. Incluye enfoques diferentes; no promete que toda base sea más rápida ni que todas tengan las mismas APIs.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.5](10_bases_de_datos.md#seccion-10-5).

<a id="on-premises"></a>

## On-premises

**Alias:** En las instalaciones.

Infraestructura situada en instalaciones administradas por la organización o para ella. Describe ubicación y operación; no es sinónimo de una región AWS ni de una conexión VPN.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.4](08_despliegue_e_infraestructura.md#seccion-8-4).

<a id="opentelemetry"></a>

## OpenTelemetry

**Alias:** OTel.

Estándar y herramientas de instrumentación de telemetría. Se utiliza en la evolución de trazado; no es un alias del servicio X-Ray.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.6](14_integracion_y_otros_servicios.md#seccion-14-6).

<a id="oracle-database"></a>

## Oracle Database

Motor relacional citado en escenarios de instalación propia y servicios compatibles. Su administración depende del despliegue; no implica las mismas tareas en EC2 y RDS.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="osi"></a>

## OSI

**Alias:** Open Systems Interconnection.

Modelo de capas para explicar comunicaciones. Ayuda a separar aplicación, transporte y red; no es un catálogo de servicios AWS ni una descripción perfecta de toda implementación real.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="paas"></a>

## PaaS

Platform as a Service: modelo en el que el proveedor opera infraestructura y componentes de plataforma para desplegar aplicaciones. Se utiliza para concentrarse en código, datos y configuración del servicio; frente a IaaS reduce administración del entorno y frente a SaaS conserva una aplicación propia.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="perfil-de-instancia"></a>

## Perfil de instancia

**Alias:** Instance profile.

Mecanismo mediante el que se presenta un rol IAM a una instancia EC2 en el caso compatible. Se utiliza para que la aplicación obtenga credenciales del rol; no equivale a una imagen AMI ni concede permisos diferentes de los definidos para ese rol.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="plano-de-control"></a>

## Plano de control

**Alias:** Control plane.

Conjunto de capacidades que administran recursos y configuración. Se usa para crear o modificar infraestructura; se distingue del plano que presta el trabajo operativo de la aplicación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.1](08_despliegue_e_infraestructura.md#seccion-8-1).

<a id="plano-de-datos"></a>

## Plano de datos

**Alias:** Data plane.

Capacidades que atienden las operaciones de datos o servicio de un sistema. Permite distinguir uso de administración; su comportamiento no debe inferirse únicamente del estado de una interfaz de control.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.1](08_despliegue_e_infraestructura.md#seccion-8-1).

<a id="postgresql"></a>

## PostgreSQL

Motor relacional con capacidades y extensiones propias. Se utiliza en aplicaciones SQL; compatibilidad Aurora requiere revisar funciones y versiones.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="query-de-dynamodb"></a>

## Query de DynamoDB

Operación que recupera elementos mediante condiciones de clave compatibles. Aprovecha el diseño del acceso; no equivale a recorrer indiscriminadamente toda la tabla.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.5](10_bases_de_datos.md#seccion-10-5).

<a id="read-replica"></a>

## Read replica

**Alias:** Réplica de lectura.

Copia de base que permite descargar determinadas consultas de lectura. Su actualización y desfase dependen del servicio; no equivale al standby de cualquier modalidad Multi-AZ.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.3](10_bases_de_datos.md#seccion-10-3).

<a id="region-region"></a>

## Región (Region)

**Alias:** Region, Región.

Área geográfica de AWS que contiene varias zonas de disponibilidad y ofrece un catálogo regional de servicios. Se elige por requisitos legales, latencia, disponibilidad de servicios y coste; la replicación entre regiones requiere una decisión explícita y no debe suponerse automática.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.5](08_despliegue_e_infraestructura.md#seccion-8-5).

<a id="rol-iam"></a>

## Rol IAM

**Alias:** IAM role.

Identidad asumible que permite obtener una sesión con credenciales temporales. Se utiliza para delegar acceso a personas, aplicaciones o servicios; quién puede asumirlo y qué puede hacer se definen mediante políticas con funciones diferentes.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="rpc"></a>

## RPC

**Alias:** Remote Procedure Call.

Modelo de invocación de procedimientos remotos mencionado en OSI. Ayuda a estudiar diálogo entre sistemas; no identifica por sí solo un servicio AWS concreto.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="rpo"></a>

## RPO

Recovery Point Objective: objetivo de pérdida temporal máxima de datos tolerable después de un incidente. Se utiliza para diseñar la frecuencia y método de protección; se diferencia de RTO, que establece el tiempo tolerable para restablecer el servicio.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.6](08_despliegue_e_infraestructura.md#seccion-8-6).

<a id="rto"></a>

## RTO

Recovery Time Objective: objetivo de tiempo máximo tolerable para recuperar el servicio tras una interrupción. Se utiliza para definir procedimientos, recursos y pruebas de recuperación; no expresa cuántos datos se pueden perder, que es el foco del RPO.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.6](08_despliegue_e_infraestructura.md#seccion-8-6).

<a id="s3-express-one-zone"></a>

## S3 Express One Zone

Clase orientada a un perfil de alto rendimiento en una AZ. Debe evaluarse con su modelo y condiciones; no es equivalente a One Zone-IA.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-glacier-deep-archive"></a>

## S3 Glacier Deep Archive

Clase de archivo para conservación prolongada con condiciones de recuperación. Se valora cuando puede esperarse la restauración; no se propone para contenido activo sin analizar su acceso.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-glacier-flexible-retrieval"></a>

## S3 Glacier Flexible Retrieval

Clase de archivo con opciones de restauración y plazos específicos. Se elige cuando se acepta ese procedimiento; no es Instant Retrieval.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-glacier-instant-retrieval"></a>

## S3 Glacier Instant Retrieval

Clase de archivo S3 con acceso inmediato bajo sus condiciones. Sirve para archivo de acceso ocasional; demuestra por qué Glacier no siempre significa esperar horas.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-intelligent-tiering"></a>

## S3 Intelligent-Tiering

Clase que adapta capas de acceso bajo su modelo de observación. Ayuda con patrones variables; deben conocerse condiciones y capas activadas.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-one-zone-ia"></a>

## S3 One Zone-IA

Clase de acceso infrecuente con almacenamiento en una AZ. Puede servir para datos recreables; no ofrece el mismo alcance zonal que clases multizona.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-standard"></a>

## S3 Standard

Clase S3 para acceso frecuente. Se utiliza en objetos activos; no es sinónimo del servicio S3 completo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="s3-standard-ia"></a>

## S3 Standard-IA

**Alias:** S3 Standard-Infrequent Access.

Clase para acceso infrecuente con recuperación en línea bajo sus condiciones. Se evalúa con costes de acceso y permanencia; no equivale a archivado con espera.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.5](12_almacenamiento_y_recuperacion.md#seccion-12-5).

<a id="saas"></a>

## SaaS

Software as a Service: aplicación completa consumida como servicio y operada principalmente por el proveedor. Se utiliza para acceder a funcionalidad sin administrar su plataforma; el cliente conserva decisiones sobre usuarios, datos y configuración disponible y no despliega su propio código como en PaaS.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 10.7](10_bases_de_datos.md#seccion-10-7).

<a id="scan-de-dynamodb"></a>

## Scan de DynamoDB

Operación que recorre elementos de una tabla o índice bajo su configuración. Puede usarse para ciertos trabajos; no suele sustituir un patrón de acceso eficiente por clave.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.5](10_bases_de_datos.md#seccion-10-5).

<a id="security-group"></a>

## Security Group

**Alias:** Security Groups, SG, grupo de seguridad.

Control de red que permite tráfico de entrada y salida para recursos asociados compatibles. Se utiliza para restringir fuentes, destinos, protocolos y puertos y es stateful; una Network ACL opera en subredes, puede permitir o denegar y es stateless.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 11.8](11_redes_y_contenidos.md#seccion-11-8).

<a id="serverless"></a>

## Serverless

Modelo donde el consumidor no administra directamente servidores subyacentes de la capacidad utilizada. Simplifica operación de infraestructura; no elimina límites ni obligaciones sobre código, datos y permisos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.7](09_computacion_contenedores_serverless.md#seccion-9-7).

<a id="service-quotas"></a>

## Service Quotas

Servicio para consultar y gestionar cuotas compatibles. Ayuda a planificar capacidad; no equivale a comprar una reserva ni a aumentar todos los límites automáticamente.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.10](14_integracion_y_otros_servicios.md#seccion-14-10).

<a id="smb"></a>

## SMB

**Alias:** Server Message Block.

Protocolo de acceso a archivos y recursos de red utilizado por aplicaciones compatibles. Ayuda a seleccionar sistemas de archivos; no es un motor relacional.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.9](12_almacenamiento_y_recuperacion.md#seccion-12-9).

<a id="sql"></a>

## SQL

Lenguaje para operaciones y consultas relacionales según dialecto. Se utiliza en bases y analítica; compartir SQL no garantiza idéntica compatibilidad o carga de trabajo.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="sql-server"></a>

## SQL Server

**Alias:** Microsoft SQL Server.

Motor de base de datos citado como destino de la regla TCP 1433 del ejemplo. Se utiliza para interpretar por qué una aplicación necesita ese flujo; permitir el puerto no concede acceso a sus datos ni convierte el motor en un servicio administrado.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 10.2](10_bases_de_datos.md#seccion-10-2).

<a id="ssh"></a>

## SSH

**Alias:** Secure Shell.

Protocolo de acceso remoto protegido a sistemas compatibles. Se utiliza para administrar un sistema invitado y requiere custodiar claves y limitar exposición; su clave privada no es una access key de API AWS.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="stack-de-cloudformation"></a>

## Stack de CloudFormation

Unidad de administración de recursos desplegados a partir de una plantilla. Permite gestionar su ciclo de vida conjunto; no es el archivo de plantilla ni una instancia EC2 individual.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 8.3](08_despliegue_e_infraestructura.md#seccion-8-3).

<a id="standby"></a>

## Standby

Instancia o capacidad de reserva preparada para asumir funciones ante fallos bajo una modalidad. Apoya disponibilidad; su uso para lecturas depende del producto y tipo de despliegue.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 10.3](10_bases_de_datos.md#seccion-10-3).

<a id="subred"></a>

## Subred

**Alias:** Subnet.

Rango de direcciones de una VPC situado en una AZ. Organiza ubicación y rutas de recursos; no equivale a la VPC regional completa.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.2](11_redes_y_contenidos.md#seccion-11-2).

<a id="tabla-de-rutas"></a>

## Tabla de rutas

**Alias:** Route table.

Conjunto de destinos y objetivos que participa en el encaminamiento de una subred. Decide caminos de red; no concede permisos IAM ni abre puertos por sí sola.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.3](11_redes_y_contenidos.md#seccion-11-3).

<a id="target-group"></a>

## Target group

**Alias:** Grupo de destino.

Agrupación de destinos y configuración compatible para recibir tráfico. Se utiliza con balanceadores admitidos; no es sinónimo de un Auto Scaling Group.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.9](09_computacion_contenedores_serverless.md#seccion-9-9).

<a id="tcp"></a>

## TCP

**Alias:** Transmission Control Protocol.

Protocolo de transporte orientado a conexiones. Se utiliza en comunicaciones de aplicaciones; no equivale a HTTP ni garantiza cifrado.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="throughput"></a>

## Throughput

**Alias:** Rendimiento de transferencia.

Cantidad de datos transferida por unidad de tiempo. Se usa junto con latencia e IOPS; una capacidad alta no garantiza el mismo rendimiento para todo patrón de acceso.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.3](12_almacenamiento_y_recuperacion.md#seccion-12-3).

<a id="tipo-de-instancia"></a>

## Tipo de instancia

Perfil de recursos de una opción EC2, relacionado con familia, generación y tamaño. Se elige según CPU, memoria, red y almacenamiento; no equivale al modelo de compra.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.3](09_computacion_contenedores_serverless.md#seccion-9-3).

<a id="topic"></a>

## Topic

**Alias:** Tema de SNS.

Punto lógico de publicación para distribuir a suscriptores compatibles. Se usa en publicación-suscripción; no es una cola compartida de trabajadores.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.3](14_integracion_y_otros_servicios.md#seccion-14-3).

<a id="traza"></a>

## Traza

**Alias:** Trace.

Representación del recorrido y partes de una solicitud. Ayuda a localizar latencia y fallos; no es simplemente un contador agregado de CPU.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.6](14_integracion_y_otros_servicios.md#seccion-14-6).

<a id="udp"></a>

## UDP

**Alias:** User Datagram Protocol.

Protocolo de transporte basado en datagramas. Atiende patrones de comunicación distintos; no añade por sí mismo garantías de entrega de aplicación.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.1](11_redes_y_contenidos.md#seccion-11-1).

<a id="user-data"></a>

## User data

**Alias:** Datos de usuario de EC2.

Configuración de inicialización entregada a una instancia compatible. Ayuda a preparar software al arrancar; no debe utilizarse como almacén de secretos ni confundirse con metadatos de identidad.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 9.2](09_computacion_contenedores_serverless.md#seccion-9-2).

<a id="versionado"></a>

## Versionado

**Alias:** Versioning.

Mecanismo para conservar versiones de objetos según configuración. Ayuda ante cambios o borrados; no elimina costes, permisos ni toda necesidad de copias.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 12.7](12_almacenamiento_y_recuperacion.md#seccion-12-7).

<a id="visibility-timeout"></a>

## Visibility timeout

**Alias:** Tiempo de visibilidad.

Intervalo que controla disponibilidad de un mensaje recibido para otros consumidores. Se relaciona con duración y fallos de procesamiento; no es una confirmación automática del efecto de negocio.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 14.2](14_integracion_y_otros_servicios.md#seccion-14-2).

<a id="vmware-cloud-on-aws"></a>

## VMware Cloud on AWS

Entorno de tecnología VMware sobre infraestructura AWS mencionado en el catálogo histórico del curso. Se utiliza como ejemplo de continuidad de plataforma para cargas compatibles; el icono de 2022 no acredita disponibilidad, condiciones comerciales ni regiones vigentes.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 9.8](09_computacion_contenedores_serverless.md#seccion-9-8).

<a id="vpc-peering"></a>

## VPC peering

**Alias:** Interconexión de VPC.

Conexión privada entre dos VPC compatibles. Requiere rutas y controles; no es transitiva por concatenar varios emparejamientos.

**Procedencia:** Apartado enlazado: procedencia docente o ampliación y referencias oficiales diferenciadas. [Desarrollo 11.5](11_redes_y_contenidos.md#seccion-11-5).

<a id="zona-de-disponibilidad-az"></a>

## Zona de disponibilidad (AZ)

**Alias:** AZ, Availability Zone.

Dominio de aislamiento dentro de una región AWS compuesto por uno o más centros de datos. Se utiliza para distribuir componentes entre dominios de fallo; un diseño multi-AZ requiere que aplicación, red y datos admitan esa distribución y no elimina automáticamente todos los puntos únicos de fallo.

**Procedencia:** Glosario previo conservado; contexto y fuente específica en el apartado enlazado. [Desarrollo 8.5](08_despliegue_e_infraestructura.md#seccion-8-5).
