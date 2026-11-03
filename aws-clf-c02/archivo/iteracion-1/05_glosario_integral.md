# 5. Glosario integral

Definiciones reunidas de los capítulos 1–4. Las entradas marcadas como explicación editorial amplían menciones breves o iconos del material; no se atribuyen a la diapositiva. Los nombres de producto y sus capacidades pueden cambiar: para decisiones operativas, consulta la documentación oficial actual.

| Término | Significado y uso | Procedencia principal |
|---|---|---|
| **7 Rs** | Siete estrategias de migración: Rehost, Relocate, Replatform, Refactor/Re-architect, Repurchase, Retain y Retire. | Ampliación oficial, cap. 4 |
| **API** | Interfaz que define cómo un programa solicita operaciones o datos a otro servicio. CLI, SDK y consola pueden acabar invocando APIs. | T1 p. 25 |
| **AWS CAF** | AWS Cloud Adoption Framework: marco para identificar capacidades y orientar una transformación cloud desde perspectivas de negocio y técnicas. | Ampliación oficial, cap. 4 |
| **AZ** | Availability Zone; zona de disponibilidad aislada dentro de una región AWS, formada por uno o más centros de datos. | T2 pp. 5–7 |
| **BYOL** | Bring Your Own License: aportar una licencia propia cuando el contrato y el entorno permiten ese uso. | Ampliación oficial, cap. 2 |
| **CAPEX** | Gasto de capital; inversión anticipada en activos como servidores o instalaciones. | T1 p. 18 |
| **CDN** | Content Delivery Network: red distribuida que acerca contenido a usuarios y reduce carga/latencia según caché y diseño. | T2 p. 9 |
| **Cloud Computing** | Consumo de recursos de TI configurables por red, bajo demanda y con provisión/liberación rápida. | T1 pp. 4–9 |
| **CloudFront** | CDN de AWS que entrega contenido a través de ubicaciones distribuidas; puede almacenar respuestas en caché. | T1 p. 27; T2 p. 17 |
| **CloudTrail** | Servicio que registra actividad de cuenta y llamadas a APIs para auditoría y análisis. | T2 p. 20 |
| **CloudWatch** | Servicio de observabilidad para métricas, alarmas y otros datos operativos. | T2 p. 20 |
| **Cognito** | Servicio para identidad, registro e inicio de sesión de usuarios de aplicaciones. | T2 p. 18 |
| **CPD / Data Center** | Centro de procesamiento de datos: instalación física de servidores, redes, alimentación y refrigeración. | T1 p. 22; T2 p. 8 |
| **DAS / SAN / NAS** | Formas tradicionales de almacenamiento conectado directamente, por red de área de almacenamiento o como sistema de archivos en red. | T1 p. 16 |
| **DataSync** | Servicio para transferir datos entre ubicaciones compatibles, incluidas ubicaciones locales y almacenamiento AWS. | Ampliación oficial, cap. 4 |
| **DynamoDB** | Base de datos NoSQL administrada de AWS, orientada a patrones de acceso distribuidos y escalables. | T1 p. 28; T2 p. 16 |
| **EBS** | Elastic Block Store: almacenamiento persistente por bloques que se puede asociar a cargas EC2 compatibles. | T1 p. 16; T2 p. 14 |
| **EC2** | Elastic Compute Cloud: servicio de cómputo que permite ejecutar instancias virtuales configurables. | T1 p. 28; T2 p. 15 |
| **ECR** | Elastic Container Registry: registro para almacenar y distribuir imágenes de contenedores. | T2 p. 15 |
| **ECS** | Elastic Container Service: orquestador de contenedores administrado por AWS. | T1 p. 29; T2 p. 15 |
| **EFS** | Elastic File System: sistema de archivos administrado que ofrece acceso compartido por red a cargas compatibles. | T1 p. 16; T2 p. 14 |
| **EKS** | Elastic Kubernetes Service: servicio administrado de AWS para ejecutar Kubernetes y orquestar aplicaciones en contenedores. | Explicación editorial (aparece en T1 p. 29 y T2 p. 15) |
| **Elasticidad** | Ajuste de capacidad hacia arriba o abajo al cambiar la demanda. | T1 p. 20 |
| **ELB** | Elastic Load Balancing: familia de servicios que distribuye tráfico entre destinos. | T2 p. 17 |
| **Fargate** | Capacidad administrada para ejecutar contenedores sin administrar directamente servidores EC2 subyacentes. | T1 p. 29; T2 p. 15 |
| **IaaS** | Infrastructure as a Service: consumo de infraestructura virtualizada con mayor gestión de SO y aplicación por el cliente. | T1 p. 10 |
| **IAM** | Identity and Access Management: servicio para gestionar identidades, credenciales, roles y permisos en AWS. | T1 p. 16; T2 p. 18 |
| **KMS** | Key Management Service: servicio para crear y administrar claves usadas por servicios y aplicaciones. | T2 p. 18 |
| **Lambda** | Servicio de cómputo basado en funciones que responde a invocaciones/eventos sin que el cliente administre servidores. | T1 p. 29; T2 p. 15 |
| **MTBF** | Mean Time Between Failures: tiempo medio entre fallos, según la definición y período usados. | CA p. 47 |
| **MTTF** | Mean Time To Failure: tiempo medio de operación antes de un fallo. | CA p. 47 |
| **MTTR** | Mean Time To Repair/Recover: tiempo medio para reparar o recuperar tras un fallo. | CA p. 47 |
| **NIST** | Instituto estadounidense cuyo modelo de cloud caracteriza cinco rasgos, tres modelos de servicio y cuatro de despliegue. | T1 p. 8 |
| **OPEX** | Gasto operativo asociado a operar o consumir servicios; no equivale exactamente a coste variable. | T1 p. 18 |
| **PaaS** | Platform as a Service: el proveedor opera una plataforma; el cliente se centra más en aplicación, datos y configuración. | T1 p. 10 |
| **PoP** | Point of Presence: ubicación de borde para acercar entrega o servicios de red a usuarios. | T2 p. 9 |
| **Region** | Área geográfica AWS que contiene varias AZ. La elección afecta latencia, requisitos, servicios y precio. | T2 pp. 5–6 |
| **Relocate** | Estrategia 7R para mover una plataforma o carga sin rediseñar cada aplicación. | Ampliación oficial, cap. 4 |
| **Replatform** | Migración con ajustes acotados para usar una plataforma o servicio cloud distinto. | Ampliación oficial, cap. 4 |
| **Rehost** | Traslado “lift and shift” con cambios mínimos en la aplicación. | Ampliación oficial, cap. 4 |
| **Refactor** | Cambio profundo de arquitectura o código para aprovechar capacidades cloud; también llamado re-architect. | Ampliación oficial, cap. 4 |
| **Repurchase** | Sustituir una aplicación por otro producto, a menudo SaaS. | Ampliación oficial, cap. 4 |
| **Retain** | Mantener una carga en su entorno actual, al menos temporalmente. | Ampliación oficial, cap. 4 |
| **Retire** | Apagar una aplicación que ya no se necesita, tras validar dependencias y obligaciones de datos. | Ampliación oficial, cap. 4 |
| **RDS** | Relational Database Service: servicio de AWS para operar motores de bases de datos relacionales administrados. | T2 p. 16 |
| **Redshift** | Almacén de datos analítico administrado de AWS. | T2 p. 16 |
| **S3** | Simple Storage Service: almacenamiento de objetos en buckets; no es almacenamiento de bloques. | T1 p. 16; T2 p. 14 |
| **SaaS** | Software as a Service: aplicación completa consumida como servicio. | T1 p. 10 |
| **SDK** | Software Development Kit: bibliotecas que permiten integrar llamadas a servicios AWS desde código. | T1 p. 30 |
| **Sostenibilidad** | Pilar Well-Architected centrado en reducir impacto ambiental y mejorar eficiencia del uso de recursos. | Ampliación oficial |
| **TCO** | Total Cost of Ownership: coste total de propiedad de una solución durante un período y alcance definidos. | Ampliación oficial, cap. 2 |
| **Trusted Advisor** | Servicio de recomendaciones que revisa señales de la cuenta respecto a categorías como coste, seguridad y rendimiento; no reemplaza el análisis contextual. | CA pp. 54–60 |
| **VPC** | Virtual Private Cloud: red virtual lógicamente aislada en AWS donde el cliente configura direccionamiento y conectividad. | T1 p. 28; T2 p. 17 |
| **Well-Architected Framework** | Marco de AWS para revisar cargas de trabajo mediante seis pilares, preguntas y principios de diseño. | CA pp. 2–8; ampliación oficial |
| **Well-Architected Tool** | Herramienta para guiar revisiones de cargas con preguntas del marco y ordenar planes de mejora. | CA p. 42 |

