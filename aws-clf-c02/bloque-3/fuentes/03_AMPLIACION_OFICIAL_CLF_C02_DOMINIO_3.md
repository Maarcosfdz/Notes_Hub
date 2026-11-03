# 03. Ampliación oficial del dominio 3 — CLF-C02

**Consulta de referencia: 2-11-2026.** Esta ampliación es una **síntesis editorial basada en los objetivos y el inventario de servicios oficiales**; no se debe atribuir a las diapositivas de 2022, ni tratar como cita literal del proveedor. Para información vigente de cada producto, consultar su documentación específica antes de implantarlo. URLs maestras:

- https://docs.aws.amazon.com/es_es/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html
- https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html
- https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html

## 3.1 — Aprovisionamiento, operación y despliegue

**La Consola AWS** permite interactuar gráficamente con servicios y recursos. **AWS CLI** permite órdenes reproducibles desde terminal; **SDK** permite incorporar llamadas a AWS dentro de aplicaciones; **API** es la interfaz expuesta por servicios. No son cuatro niveles diferentes de privilegio: en todos los casos se aplican autenticación, autorización y configuraciones apropiadas. Para acceso humano recurrente suelen ser preferibles sesiones federadas o de IAM Identity Center frente a claves estáticas permanentes.

**Infraestructura como código (IaC)**: representar en plantillas o declaraciones los recursos, relaciones y configuraciones de una infraestructura de forma versionable, replicable y revisable. **AWS CloudFormation** administra despliegues definidos mediante plantillas y *stacks*. La función primordial de IaC es describir/gestionar la infraestructura, no observar métricas (**CloudWatch**), registrar operaciones (**CloudTrail**), ejecutar una construcción de software (**CodeBuild**) ni organizar por sí solo un flujo completo de entregas (**CodePipeline**). La repetibilidad aporta control, pero una plantilla reproducible puede reproducir una vulnerabilidad si está mal diseñada.

**Escenario:** una operación manual única para inspeccionar un recurso puede hacerse con consola; levantar decenas de entornos reproducibles favorece IaC; integrar un servicio desde una aplicación favorece SDK. Una organización híbrida combina infraestructuras locales y servicios cloud mediante conectividad, identidad y procesos. No asumir que «híbrido» exige siempre dos proveedores públicos.

## 3.2 — Infraestructura global, alta disponibilidad y DR

Diferenciar **Región**, **AZ**, centro de datos y **edge location/PoP**. La separación de AZ ayuda a eliminar puntos de fallo únicos de infraestructura; no garantiza que una aplicación diseñada para una única instancia sea automáticamente tolerante a fallos. Alta disponibilidad multizona y **múltiples regiones** resuelven escenarios de riesgo y alcance distintos. La segunda puede responder a continuidad de negocio ante fallo regional, residencia/soberanía, latencia internacional o requisitos de recuperación; conlleva replicación, sincronización, conmutación, coste y supervisión.

**Route 53** ofrece DNS y políticas de respuesta; **CloudFront** entrega contenido mediante CDN; **Global Accelerator** utiliza la infraestructura de red global para mejorar rutas hacia extremos compatibles. Son funciones diferentes: DNS no es un balanceador HTTP stateful; CDN no es una AZ, y Global Accelerator no sustituye el cómputo de origen.

## 3.3 — Cómputo, contenedores y serverless

### Seleccionar familia EC2

- **Uso general:** equilibrio entre cómputo, memoria y red; apropiado para variedad de cargas.
- **Optimizado para cómputo:** cálculos que requieren CPU, tareas de procesamiento y servicios CPU-bound.
- **Optimizado para memoria:** análisis o aplicaciones que necesitan mucha RAM en relación con CPU.
- **Optimizado para almacenamiento:** workloads donde capacidad y rendimiento de discos locales son decisivos.
- **Cómputo acelerado:** procesamiento específico que aprovecha aceleradores como GPU cuando el servicio/instancia lo admite.

**No mezclar** estas familias con **modelos de compra de EC2** (On-Demand, Spot, Reserved Instances, Savings Plans o servidores dedicados) que responden a condiciones económicas y de disponibilidad/capacidad. El dominio 3 evalúa principalmente perfil técnico, escalado y entrega; los modelos de precio también pueden aparecer transversalmente, pero se desarrollarán con detalle en el dominio 4.

**EC2** da control de máquina virtual. **Lightsail** simplifica pequeños entornos con paquetes predecibles dentro de sus opciones. **Elastic Beanstalk** simplifica desplegar aplicaciones sobre recursos; el cliente sigue siendo dueño del código. **AWS Batch** organiza trabajos por lotes. **AWS Outposts** extiende infraestructura/servicios AWS compatibles a entornos físicos del cliente, dentro de condiciones específicas. **AWS Lambda** ejecuta funciones sin que el cliente administre servidores subyacentes; **AWS Fargate** aporta capacidad sin administrar hosts para ejecutar contenedores compatibles con ECS/EKS.

**ECS** es orquestación de contenedores con el modelo propio de AWS; **EKS** es Kubernetes administrado; **ECR** es un registro de imágenes, no un servicio que ejecute por sí solo contenedores. **Auto Scaling** ajusta cantidad/capacidad, mientras **Elastic Load Balancing** distribuye tráfico y comprueba salud de destinos; trabajar juntos no los hace un único servicio.

## 3.4 — Bases de datos

### Elección según modelo de datos y trabajo

- **Amazon RDS:** servicios administrados de motores relacionales compatibles; adecuado para aplicaciones transaccionales con SQL y relaciones.
- **Amazon Aurora:** motor relacional gestionado diseñado por AWS con compatibilidad MySQL/PostgreSQL según variante; identificar disponibilidad y arquitectura frente al RDS genérico.
- **Amazon DynamoDB:** NoSQL de clave-valor/documentos, con escalado y acceso mediante claves/patrones adecuados.
- **Amazon ElastiCache:** capa de datos en memoria gestionada orientada a latencia y descargas de trabajo de bases, según motor/compatibilidad; no es almacenamiento duradero universal ni el sustituto directo de una BBDD transaccional.
- **Amazon DocumentDB:** base documental administrada con compatibilidad MongoDB en las capacidades/versiones admitidas; no es DynamoDB ni Aurora.
- **Amazon Neptune:** base orientada a grafos/relaciones de grafo, adecuada para conexiones complejas y recorridos según modelos compatibles.
- **Amazon Redshift:** almacén de datos analítico para consultas agregadas, BI y grandes conjuntos; no debe memorizarse como sustituto de RDS para transacciones rápidas.

**EC2 con motor instalado**: más libertad de personalización y más tareas de parcheo, copias, configuración y operación. **RDS/Aurora administrados**: delegan tareas específicas en AWS; la aplicación mantiene responsabilidad sobre modelo de datos, acceso y decisiones de configuración. **Multi-AZ** favorece disponibilidad; **read replica** favorece repartir determinadas lecturas. **AWS DMS** migra/replica datos y puede capturar cambios según soporte; **AWS Schema Conversion Tool (SCT)** ayuda con conversión de esquema/código al cambiar motores. Ninguna de las dos garantiza que cualquier aplicación incompatible funcione sin cambios.

## 3.5 — Redes y conectividad

### Herramienta según necesidad

| Necesidad | Producto o concepto | Matiz importante |
|---|---|---|
| Red virtual de una cuenta | Amazon VPC | El cliente define CIDR, subredes, rutas y controles |
| Conectar una subred pública a Internet | Internet Gateway + rutas y configuración | El gateway por sí solo no hace pública cualquier instancia |
| Conexión saliente de cargas privadas | NAT Gateway | No implica admitir conexiones entrantes arbitrarias |
| Filtrar tráfico en un recurso | Security Group | Stateful, reglas Allow |
| Filtrar tráfico en subred | Network ACL | Stateless, Allow/Deny y orden numérico |
| Resolver y dirigir nombres DNS | Amazon Route 53 | DNS routing no equivale a controlar todas las conexiones activas |
| Acercar contenido en caché | Amazon CloudFront | CDN; no es una región de cómputo |
| Conectar redes con túneles cifrados | AWS Site-to-Site VPN | Tráfico de túnel según configuración; usa conectividad subyacente |
| Conexión de red dedicada | AWS Direct Connect | No asumir cifrado de datos automáticamente |
| Centralizar conexiones de muchas VPC/redes | AWS Transit Gateway | Soluciona topologías extensas; no concede IAM |
| Acceso privado a servicios compatibles | AWS PrivateLink | No equivale a exponer una IP pública ni a una VPN general |
| Entrada a APIs administradas | Amazon API Gateway | Publicación/protección/gestión de endpoints API compatibles |
| Mejorar acceso global a endpoints | AWS Global Accelerator | Red global/enrutamiento, no sustituto de Route 53 ni CloudFront |

**AWS VPN** es categoría: distinguir **Site-to-Site VPN** para redes y **Client VPN** para usuarios/dispositivos. **VPC peering** es conexión entre redes compatible, sin asumir transitividad. La función real de cualquier enlace depende de rutas, permisos, estado y rangos IP.

## 3.6 — Almacenamiento

### Reconocer almacenamiento por tipo

| Servicio | Tipo general | Caso típico y diferencia |
|---|---|---|
| Amazon S3 | Objetos | Buckets y objetos accedidos por API; no es un volumen POSIX de bloques |
| Amazon EBS | Bloques | Volúmenes compatibles con EC2; persistencia/snapshots según configuración |
| EC2 instance store | Bloques locales efímeros | Rendimiento local; no asumir persistencia ante fallo o reemplazo del host |
| Amazon EFS | Archivos | Sistema de archivos compartido gestionado para clientes compatibles |
| Amazon FSx | Archivos | Familia de sistemas de archivos gestionados, con variantes/protocolos específicos |
| AWS Storage Gateway | Integración híbrida de almacenamiento | Conecta aplicaciones/almacenamiento local a servicios AWS compatibles, con modalidades de caché |
| AWS Backup | Orquestación de copias | Políticas y gestión central de backups compatibles, restauración necesita validación |
| AWS Elastic Disaster Recovery | Recuperación | Replicación y mecanismos de recuperación de servidores según soportes; distinto a copia de objetos ordinaria |

### S3: clases y ciclo de vida

Clases orientativas: **Standard** para acceso frecuente, **Standard-IA** para acceso infrecuente manteniendo recuperación adecuada, **One Zone-IA** cuando se acepta el dominio de AZ único para datos recreables, **Intelligent-Tiering** cuando el patrón es variable o desconocido, y las clases de archivo **Glacier** con distintas condiciones de recuperación. La elección debe valorar frecuencia de uso, tamaño, mínimo de permanencia, operaciones, disponibilidad, resiliencia y plazo de restauración. Una clase de archivo no debe confundirse con una copia completamente imposible de recuperar. Las **Lifecycle Rules** automatizan transiciones y expiración bajo condiciones; **versioning** conserva versiones compatibles. Las durabilidades y tarifas precisas dependen de clase/fecha y no se deducen de una tabla docente de 2022.

## 3.7 — Inteligencia artificial y análisis de datos

**Este objetivo está insuficientemente cubierto por T5–T9; su desarrollo debe proceder principalmente de fuentes oficiales actuales.** El examen pide reconocer la *necesidad que resuelve* cada servicio, no entrenar un modelo ni programar un pipeline.

### Inteligencia artificial / ML

| Servicio oficial | Concepto de uso |
|---|---|
| Amazon SageMaker AI | Entorno y herramientas administradas para desarrollar, entrenar y desplegar modelos de ML; distinguir de consumir APIs preentrenadas |
| Amazon Lex | Interfaces conversacionales y bots mediante voz/texto en aplicaciones compatibles |
| Amazon Polly | Generar voz a partir de texto (*text to speech*) |
| Amazon Transcribe | Convertir audio hablado en texto (*speech to text*) |
| Amazon Translate | Traducción automática de texto entre idiomas compatibles |
| Amazon Comprehend | Análisis de lenguaje natural en textos, como entidades, sentimientos y clasificación compatible |
| Amazon Rekognition | Análisis de imágenes/vídeo, detección de objetos y otras características compatibles |
| Amazon Textract | Extraer texto y estructura de documentos escaneados, formularios y tablas compatibles |
| Amazon Q | Familia de capacidades de IA generativa para tareas de conocimiento/desarrollo según producto y acceso; la marca y productos específicos requieren precisión |

**Diferencias frecuentes:** Polly crea audio desde texto, Transcribe obtiene texto desde audio; Textract lee documentos (incluidas estructuras), Rekognition analiza contenido visual; Comprehend analiza significado de texto y Translate lo traduce. SageMaker AI permite trabajos de ML más personalizados; una API administrada preentrenada simplifica usar una capacidad específica. No prometer que todas estas herramientas admitan cualquier idioma/archivo ni que sus resultados sean infalibles.

### Análisis

| Servicio oficial | Concepto de uso |
|---|---|
| Amazon Athena | Consultas SQL sobre datos en S3 en formatos compatibles, sin administrar clústeres de base tradicionales |
| AWS Glue | Integración, catálogo y procesamiento/ETL de datos |
| Amazon Kinesis | Ingesta y procesamiento de datos o eventos de flujo continuo según producto |
| Amazon EMR | Procesamiento distribuido de grandes datos con marcos como Spark/Hadoop según modalidad |
| Amazon Redshift | Analítica SQL y data warehouse |
| Amazon OpenSearch Service | Búsqueda/análisis de datos indexados y logs según casos admitidos |
| Amazon Quick Sight (ver denominación oficial vigente) | Visualización y análisis de BI; contrastar nombres comerciales actuales e históricos, evitando confundir el servicio con la función de ETL |

**Diferencias frecuentes:** Kinesis trata flujos/streaming; Glue ayuda a preparar/categorizar datos; Athena consulta datos en S3; Redshift aloja/ejecuta cargas analíticas de warehouse; EMR coordina procesamiento distribuido; OpenSearch sirve a búsqueda y análisis indexados; Quick/Quick Sight presenta información a usuarios empresariales. No confundir ETL, almacenamiento, consultas ad hoc y paneles visuales.

## 3.8 — Integración y otras categorías

| Categoría | Servicios que deben reconocerse | Uso y comparación relevante |
|---|---|---|
| Integración de aplicaciones | Amazon SQS | Cola que desacopla productor y consumidor y almacena mensajes hasta procesarse; no es una notificación push por defecto |
| Integración de aplicaciones | Amazon SNS | Publicación-suscripción y distribución de notificaciones a suscriptores/destinos admitidos; distinto a persistencia y recepción de trabajo por cola SQS |
| Integración de aplicaciones | Amazon EventBridge | Bus y reglas para enrutar eventos desde fuentes a destinos, automatizar respuestas y desacoplar componentes |
| Integración de aplicaciones | AWS Step Functions | Coordinar flujos de trabajo con estados y pasos de servicios compatibles; distinto a una sola invocación Lambda |
| Aplicaciones empresariales | Amazon Connect | Centro de contacto gestionado; no equivale a SES |
| Aplicaciones empresariales | Amazon SES | Envío/recepción de correo para aplicaciones según configuración; no equivale a SNS para todo tipo de destinatarios |
| Developer Tools | AWS CodeBuild | Compilación y pruebas de código en entornos administrados |
| Developer Tools | AWS CodePipeline | Orquestación de fases en un flujo de integración/entrega de software |
| Developer Tools | AWS X-Ray | Trazado distribuido y análisis de peticiones para diagnóstico de aplicaciones compatibles |
| Computación usuario final | Amazon WorkSpaces | Escritorios virtuales administrados según modalidades |
| Computación usuario final | Amazon AppStream 2.0 | Entrega de aplicaciones a usuarios mediante streaming según compatibilidad |
| Computación usuario final | Amazon WorkSpaces Secure Browser | Acceso administrado a navegación web aislada/segura bajo su modelo |
| Frontend web y móvil | AWS Amplify | Herramientas/plataforma de construcción y despliegue de aplicaciones frontend y móviles compatibles |
| Internet de las cosas | AWS IoT Core | Conectar, autenticar, intercambiar mensajes y gestionar integración con dispositivos IoT según protocolos admitidos |
| Atención al cliente | AWS Support | Asistencia técnica y planes, distinguiendo disponibilidad comercial de soporte de un recurso desplegado |

**Situaciones comparativas:** una aplicación quiere encolar trabajos para reintentar después → SQS; enviar una alerta a múltiples suscriptores → SNS; reaccionar a eventos de varios servicios según reglas → EventBridge; coordinar una serie de pasos con estado → Step Functions. Para correo transaccional → SES; para centro de contacto → Connect. Para pipeline de despliegue → CodePipeline; para construir/probar un componente → CodeBuild; para averiguar dónde se consume el tiempo entre microservicios → X-Ray.

## Nota sobre evolución del temario y nombres

- El historial oficial consultado identifica CLF-C02 **v1.3 publicada el 29-10-2026**. La lista *in-scope* es no exhaustiva y cambia; se debe fechar su consulta.
- Hay diapositivas de 2022 con servicios y cuotas antiguas: tarifas «gratuitas un año», límites de Lambda, nombres de S3 Glacier, familias EC2, categorías de Elastic Load Balancing, métodos de escalado y consolas. No convertirlas en afirmaciones actuales sin verificar.
- El inventario de servicios del examen puede incluir productos de otros bloques. **No duplicar capítulos completos:** enlazar Bloque I para infraestructura y Bloque II para seguridad, y desarrollar aquí decisiones técnicas y comparaciones del dominio 3.
- No añadir temario avanzado de certificación arquitecto más allá de un ejemplo breve que ayude a distinguir servicios.
