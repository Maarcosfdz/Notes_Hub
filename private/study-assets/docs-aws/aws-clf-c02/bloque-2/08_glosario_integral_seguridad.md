# 08. Glosario integral de seguridad y cumplimiento

Entradas revisadas individualmente, con función, uso y distinción relevante. Los alias reúnen nombres equivalentes; los grupos de herramientas o estándares relacionados indican explícitamente que sus miembros no son productos idénticos. Las referencias T3/T5/T9/CA/T2 indican aparición docente; «ampliación» remite al documento 02 del paquete. Las definiciones editoriales no se atribuyen literalmente a una diapositiva.

<a id="access-key"></a>

## Access key

**Alias:** clave de acceso.

Par de identificador y secreto utilizado en autenticación programática compatible con AWS. Se utiliza para firmar solicitudes y exige protección; no es una clave SSH ni debe convertirse automáticamente en una credencial permanente para toda aplicación.

**Procedencia:** T3 p.16; ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="acl-de-s3"></a>

## ACL de S3

**Alias:** S3 ACL.

Mecanismo de control de acceso a buckets u objetos bajo configuraciones que lo admiten. Se estudia para interpretar material histórico y configuraciones existentes; no es una ACL de red y en configuraciones modernas con ACL deshabilitadas se usan políticas.

**Procedencia:** T3 p.47, mecanismo heredado. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="alarma-de-cloudwatch"></a>

## Alarma de CloudWatch

**Alias:** CloudWatch alarm.

Evaluación de una métrica o expresión compatible frente a condiciones y ventanas configuradas. Se utiliza para notificar o activar acciones admitidas; no identifica por sí sola una amenaza salvo que la señal y el contexto la representen.

**Procedencia:** T9 pp.15–17. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="allow"></a>

## Allow

**Alias:** Concesión explícita.

Efecto de política que concede las acciones de una solicitud coincidente dentro de su alcance. Se utiliza para permitir operaciones necesarias; no prevalece sobre un Deny aplicable ni elimina otros límites de evaluación.

**Procedencia:** T3 pp.19,21,23. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="api"></a>

## API

Interfaz que especifica cómo un programa solicita operaciones o datos a otro sistema. Se utiliza para integrar y automatizar servicios; la consola, la CLI y los SDK son formas distintas de interactuar con las API de AWS y siguen sujetas a autorización.

**Procedencia:** T3 pp.14,31,40. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="arn"></a>

## ARN

**Alias:** Amazon Resource Name.

Identificador que expresa un recurso AWS mediante el formato del servicio correspondiente. Se utiliza en políticas para señalar recursos; el ARN de un bucket y el de sus objetos son distintos y no deben intercambiarse al conceder acciones.

**Procedencia:** T3 p.21. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-artifact"></a>

## AWS Artifact

Portal para consultar documentos e informes de cumplimiento de AWS y gestionar determinados acuerdos. Sirve como evidencia sobre controles del proveedor; no configura los controles de la aplicación ni demuestra por sí solo el cumplimiento del cliente.

**Procedencia:** T3 p.51; T2 p.18. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-audit-manager"></a>

## AWS Audit Manager

**Alias:** Audit Manager.

Servicio que ayuda a recopilar y organizar evidencias de controles en evaluaciones compatibles. Se utiliza para apoyar trabajo de auditoría; no es una certificación automática y difiere de Artifact, que proporciona documentos e informes del proveedor.

**Procedencia:** Ampliación B.3. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="autenticacion"></a>

## Autenticación

**Alias:** Authentication.

Proceso que verifica la identidad presentada mediante los mecanismos admitidos. Se utiliza antes de establecer o aceptar una sesión; una autenticación correcta no concede por sí sola todas las acciones que evalúa la autorización.

**Procedencia:** T3 pp.16–17; ampliación C.1–C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-auto-scaling"></a>

## AWS Auto Scaling

Nombre utilizado en el material para capacidades de ajuste automático de recursos compatibles. Ayuda a adaptar la capacidad a condiciones y políticas; EC2 Auto Scaling se centra específicamente en grupos de instancias EC2, por lo que los nombres no deben tratarse como servicios idénticos.

**Procedencia:** T2 p.20. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="autorizacion"></a>

## Autorización

**Alias:** Authorization.

Evaluación de si una solicitud puede realizar una acción sobre un recurso bajo sus condiciones y políticas aplicables. Se utiliza para materializar el acceso permitido; es distinta de comprobar una contraseña o un factor MFA.

**Procedencia:** T3 pp.18–23. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="bucket-policy"></a>

## Bucket policy

**Alias:** Política de bucket S3.

Política basada en recurso asociada a un bucket que expresa acceso y condiciones sobre recursos S3 compatibles. Se utiliza para regular quién puede realizar acciones; debe distinguirse de una trust policy de rol y del cifrado del contenido.

**Procedencia:** T3 pp.20,22,47. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-budgets"></a>

## AWS Budgets

Herramienta para definir presupuestos y supervisar costes o uso frente a umbrales. Sirve para avisar de desviaciones y, en configuraciones compatibles, apoyar acciones; un presupuesto no constituye por sí mismo un límite duro que detenga toda la factura.

**Procedencia:** T2 p.19. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="certificado-digital"></a>

## Certificado digital

Documento firmado que vincula una identidad con una clave pública bajo un modelo de confianza. Se utiliza en autenticación de extremos y TLS; tener un certificado no concede permisos IAM ni corrige una vulnerabilidad lógica de la aplicación.

**Procedencia:** T3 p.46; ampliación B.1. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-certificate-manager"></a>

## AWS Certificate Manager

**Alias:** ACM.

Servicio para administrar certificados en integraciones y recursos compatibles. Se utiliza para desplegar protección TLS donde se configura; no cifra automáticamente todos los saltos de una arquitectura ni almacena contraseñas como Secrets Manager.

**Procedencia:** T3 p.46; ampliación B.1. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-chime"></a>

## Amazon Chime

**Alias:** Chime.

Producto de comunicaciones mostrado como ejemplo visual de software consumido como servicio en la lámina de 2022. Su aparición permite interpretar la clasificación del curso; no demuestra disponibilidad comercial vigente ni hace equivalente su función a Shield o Trusted Advisor.

**Procedencia:** T3 p.8, icono histórico. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="cidr"></a>

## CIDR

**Alias:** Classless Inter-Domain Routing.

Notación para representar prefijos y rangos de direcciones IP. Se utiliza en reglas y direccionamiento, como los rangos ilustrativos del curso; un prefijo no es una identidad IAM ni una referencia a un Security Group.

**Procedencia:** T5 pp.26–31. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="cifrado-en-reposo-y-en-transito"></a>

## Cifrado en reposo y en tránsito

Protección criptográfica de información almacenada frente a protección de comunicaciones. Se utiliza para cubrir estados distintos de los datos; configurar una modalidad no demuestra que la otra esté protegida.

**Procedencia:** T3 pp.45–46; CA pp.65–66. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="cifrado-simetrico-y-asimetrico"></a>

## Cifrado simétrico y asimétrico

El cifrado simétrico usa una clave compartida para las operaciones correspondientes y el asimétrico utiliza un par de claves con funciones diferenciadas. Se estudian para comprender mecanismos y gestión de claves; no son sinónimos de datos en reposo y en tránsito.

**Procedencia:** Ampliación B.1. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="cis"></a>

## CIS

**Alias:** Center for Internet Security.

Organización y referencias de prácticas y configuraciones utilizadas como ejemplo de marcos de seguridad. Ayudan a evaluar controles técnicos según el perfil aplicable; no equivalen por sí mismos a una ley ni a una certificación integral de AWS y del cliente.

**Procedencia:** T3 p.49. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-cli"></a>

## AWS CLI

**Alias:** AWS Command Line Interface.

AWS Command Line Interface, herramienta para invocar operaciones de AWS mediante comandos de terminal. Se utiliza en scripts y tareas repetibles; frente al SDK ofrece comandos en vez de bibliotecas integradas en un lenguaje, y necesita credenciales y permisos adecuados.

**Procedencia:** T3 pp.11,16,40; T2 p.20. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-cloudtrail"></a>

## AWS CloudTrail

Servicio que registra actividad de cuenta y operaciones de API dentro del alcance configurado. Se utiliza para auditoría e investigación de acciones; se diferencia de CloudWatch, centrado en observabilidad, y de Config, centrado en configuración de recursos.

**Procedencia:** T3 p.31; T2 p.20. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="cloudtrail-event-history-y-trail"></a>

## CloudTrail Event history y trail

El historial muestra eventos del alcance y período disponibles y un trail configura entrega de registros según sus opciones. Se utilizan para consulta y conservación de actividad; el historial de administración no debe suponerse un registro permanente de todos los accesos a objetos.

**Procedencia:** T3 p.31. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-cloudwatch"></a>

## Amazon CloudWatch

Servicio de observabilidad para métricas, registros, alarmas y otras señales operativas. Se utiliza para detectar problemas y evaluar el funcionamiento de cargas; una métrica de rendimiento no reemplaza el registro de actividad de API que aporta CloudTrail.

**Procedencia:** T9 pp.13–17; T2 p.20. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="cloudwatch-logs"></a>

## CloudWatch Logs

**Alias:** Logs de CloudWatch.

Capacidad para recopilar y consultar registros de aplicaciones y fuentes compatibles. Se utiliza para observabilidad e investigación; no genera retrospectivamente el detalle de API de CloudTrail que no se hubiera recogido.

**Procedencia:** Ampliación B.2. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-cognito"></a>

## Amazon Cognito

Servicio para gestionar identidad y autenticación de usuarios de aplicaciones. Sirve para registro, inicio de sesión y funciones de acceso compatibles; su propósito difiere de administrar los permisos de operadores y cargas sobre recursos AWS mediante IAM.

**Procedencia:** T3 p.42; T2 p.18. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-config"></a>

## AWS Config

Servicio que registra configuraciones e historial de recursos y permite evaluarlos mediante reglas. Se utiliza para analizar cambios y conformidad de configuración; CloudTrail documenta actividad y llamadas, mientras que Config permite examinar el estado configurado.

**Procedencia:** T3 p.50; T2 p.20. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="controles-heredados-compartidos-y-especificos"></a>

## Controles heredados, compartidos y específicos

Clasificación que distingue controles aprovechados del proveedor, actividades con responsabilidades coordinadas y decisiones propias del cliente. Sirve para documentar quién hace qué y con qué evidencia; un control compartido no implica que las dos partes administren exactamente el mismo componente.

**Procedencia:** Ampliación A.1. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="aws-cost-and-usage-report"></a>

## AWS Cost and Usage Report

Informe con datos detallados de costes y uso de servicios AWS. Se utiliza para análisis y atribución del consumo con mayor detalle que una vista resumida; no debe confundirse con una alerta presupuestaria de AWS Budgets.

**Procedencia:** T3 p.32; T2 p.19. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-cost-explorer"></a>

## AWS Cost Explorer

Herramienta para visualizar y analizar costes y uso a lo largo del tiempo, con funciones de previsión disponibles. Se utiliza para identificar tendencias y cambios de gasto; sus estimaciones no constituyen una garantía de la factura futura.

**Procedencia:** T2 p.19. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="cpd-data-center"></a>

## CPD / Data Center

Instalación física con servidores, almacenamiento, redes, energía, refrigeración y controles de seguridad. Sustenta los servicios cloud; una AZ puede incluir uno o más CPD y el cliente normalmente elige región y AZ, no el edificio concreto.

**Procedencia:** T3 pp.4–5,9–10. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="credenciales-temporales"></a>

## Credenciales temporales

**Alias:** credenciales de sesión.

Credenciales de duración limitada emitidas para una sesión autorizada, con token de sesión cuando corresponde. Reducen la necesidad de distribuir secretos permanentes; siguen representando los permisos de la sesión y necesitan renovación mediante mecanismos admitidos.

**Procedencia:** T3 pp.25–26; ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="cuenta-de-administracion"></a>

## Cuenta de administración

**Alias:** Management account.

Cuenta desde la que se gestiona una organización y sus capacidades centrales dentro del alcance permitido. Se utiliza para gobierno multicuenta; las SCP no restringen a sus usuarios y roles como restringen identidades de cuentas miembro.

**Procedencia:** T3 pp.34–38; ampliación C.4. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="cuenta-miembro"></a>

## Cuenta miembro

**Alias:** Member account.

Cuenta que forma parte de AWS Organizations y se administra en su jerarquía. Se utiliza como frontera de recursos y gobierno; pertenecer a la misma organización no concede acceso libre a datos de otras cuentas.

**Procedencia:** T3 pp.34–39. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="cumplimiento-y-evidencia"></a>

## Cumplimiento y evidencia

Cumplimiento evalúa requisitos aplicables y evidencias de controles dentro de un alcance definido, mientras el gobierno organiza responsabilidades y decisiones. Se utilizan para demostrar y sostener controles; un informe del proveedor no acredita automáticamente todo el proceso del cliente.

**Procedencia:** T3 pp.49–51; ampliación B.3. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="ddos"></a>

## DDoS

**Alias:** Distributed Denial of Service.

Ataque distribuido que pretende degradar disponibilidad mediante tráfico o solicitudes desde múltiples orígenes. Orienta la elección de protección y resiliencia; no es una vulnerabilidad de software ni una política IAM demasiado permisiva.

**Procedencia:** T3 p.43; ampliación D.2. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="denegacion-implicita"></a>

## Denegación implícita

**Alias:** Implicit deny.

Resultado de no disponer de la concesión necesaria para permitir una solicitud en su contexto. Se utiliza para explicar el acceso denegado por defecto; es diferente de un statement Deny que prohíbe explícitamente la operación.

**Procedencia:** T3 pp.19,23. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="deny"></a>

## Deny

**Alias:** Denegación explícita.

Efecto que deniega una solicitud coincidente de forma expresa. Se utiliza para establecer prohibiciones dentro del alcance del documento; otra concesión Allow no anula esa denegación aplicable.

**Procedencia:** T3 pp.19,21,23. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="deteccion-de-anomalias"></a>

## Detección de anomalías

**Alias:** Anomaly detection.

Evaluación de desviaciones respecto a un patrón de comportamiento modelado en mecanismos compatibles. Se utiliza como alternativa o complemento a umbrales fijos; no equivale a un dictamen de que toda variación sea un ataque.

**Procedencia:** T9 p.15. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-documentation-y-whitepapers"></a>

## AWS Documentation y Whitepapers

Recursos que describen interfaces, comportamiento y guías de arquitectura o cumplimiento según su publicación. Se utilizan para verificar capacidades y condiciones de servicios; una guía general no sustituye la documentación específica cuando un detalle técnico cambia.

**Procedencia:** Ampliación D.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-dynamodb"></a>

## Amazon DynamoDB

Base de datos NoSQL administrada con modelos de clave-valor y documentos. Se utiliza para patrones de acceso compatibles con ese modelo; no sustituye automáticamente una base relacional con otras consultas, y no es la base de pedidos de Show and Sell en CA p.13.

**Procedencia:** T3 p.21. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="amazon-ebs"></a>

## Amazon EBS

Almacenamiento persistente de bloques para cargas compatibles con EC2. Se utiliza para volúmenes que el sistema operativo trata como discos; se diferencia del almacenamiento de objetos S3 y necesita una estrategia de snapshots y recuperación apropiada.

**Procedencia:** T3 pp.7,45; T9 pp.16–17; CA p.59. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="ebs-snapshot"></a>

## EBS snapshot

**Alias:** instantánea EBS.

Copia de estado de un volumen EBS que permite recuperar datos a un punto conservado. Se utiliza dentro de una estrategia de copias; la replicación de infraestructura y la existencia de una copia no prueban una restauración completa ensayada.

**Procedencia:** CA p.59. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-ec2"></a>

## Amazon EC2

Servicio para ejecutar instancias de cómputo virtual configurables. Se utiliza cuando la carga necesita control sobre el sistema operativo y su entorno; frente a Lambda exige administrar más componentes del servidor invitado.

**Procedencia:** T3 pp.6–7,9–12,26. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="ec2-auto-scaling"></a>

## EC2 Auto Scaling

**Alias:** Amazon EC2 Auto Scaling.

Servicio que administra grupos de instancias EC2 y ajusta su capacidad mediante políticas y comprobaciones de salud. Se utiliza para responder a demanda y reemplazar instancias no saludables; el Auto Scaling Group es el conjunto administrado, mientras que rightsizing selecciona tipos y tamaños adecuados.

**Procedencia:** T9 p.14. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-ecs"></a>

## Amazon ECS

Servicio administrado de AWS para organizar tareas y servicios en contenedores. Se utiliza con el modelo de orquestación de AWS; se diferencia de EKS, que expone el ecosistema Kubernetes, y puede utilizar capacidad de ejecución compatible como Fargate.

**Procedencia:** T9 p.14. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="edge-location"></a>

## Edge Location

Ubicación de borde desde la que se prestan determinadas funciones de entrega y red cerca de usuarios. Se utiliza, por ejemplo, para distribución de contenido; no es una AZ ni un centro regional donde se despliegue cualquier servicio de cómputo.

**Procedencia:** T3 pp.4–5. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="amazon-efs"></a>

## Amazon EFS

Sistema de archivos administrado y compartido por red para clientes compatibles. Se utiliza cuando varias cargas necesitan acceder a archivos comunes; ofrece una interfaz de archivos, distinta del almacenamiento de objetos de S3 y de los volúmenes de bloques EBS.

**Procedencia:** T3 pp.45–46. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-elastic-beanstalk"></a>

## AWS Elastic Beanstalk

Servicio que simplifica el despliegue y la operación de aplicaciones sobre recursos AWS. Se utiliza para delegar parte del aprovisionamiento de plataforma conservando el código propio; no es una aplicación SaaS terminada ni elimina la configuración del cliente.

**Procedencia:** T3 p.7. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="elastic-load-balancing"></a>

## Elastic Load Balancing

**Alias:** Elastic Load Balancing (ELB), ELB.

Familia de servicios que distribuye tráfico entre destinos compatibles y puede integrar comprobaciones de salud. Se utiliza para repartir solicitudes y apoyar arquitecturas disponibles; no almacena los pedidos ni sustituye las copias o la resiliencia de los destinos.

**Procedencia:** T9 pp.14,16–17; CA pp.65–66. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="estadistico-y-periodo"></a>

## Estadístico y período

Parámetros que definen cómo se resumen datos y en qué intervalo se evalúan. Se utilizan para dar significado a promedio, máximo o suma; un número y un operador no bastan si falta precisar qué se está agregando.

**Procedencia:** T9 pp.15–17. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-eventbridge"></a>

## Amazon EventBridge

Servicio para enrutar eventos desde productores hacia destinos mediante reglas y capacidades compatibles. Se utiliza para automatizar respuestas y desacoplar integraciones; una cola de mensajes tiene otro cometido principal, mantener trabajos pendientes hasta su consumo.

**Procedencia:** Ampliación editorial de T9 p.14. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="eventos-de-administracion-y-de-datos"></a>

## Eventos de administración y de datos

Clases de actividad diferenciadas por el servicio de auditoría, como cambios de recursos frente a operaciones sobre datos. Se utilizan para seleccionar qué registrar; no debe asumirse que todo evento de datos esté incluido por defecto en el historial habitual.

**Procedencia:** T3 p.31; ampliación B.2. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="federacion"></a>

## Federación

**Alias:** Federation.

Mecanismo de acceso basado en identidades administradas por un proveedor externo o centralizado. Se utiliza para evitar duplicar necesariamente contraseñas IAM por persona; la autenticación federada no evita la evaluación de permisos en el destino.

**Procedencia:** Ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="fips-140"></a>

## FIPS 140

Familia de requisitos y validaciones de módulos criptográficos citada en relación con HSM. Sirve para estudiar evidencia de protección criptográfica; la versión de la lámina de 2022 no prueba la certificación actual de todos los módulos y configuraciones de un servicio.

**Procedencia:** T3 p.41, referencia histórica; contraste oficial KMS. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-firewall-manager"></a>

## AWS Firewall Manager

**Alias:** Firewall Manager.

Servicio para administrar de forma centralizada políticas de seguridad compatibles entre cuentas y recursos de una organización. Se utiliza cuando el problema es gobierno de controles a escala; no equivale a un SG local ni a la mitigación DDoS de Shield.

**Procedencia:** Ampliación D.2. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="gdpr"></a>

## GDPR

**Alias:** RGPD, Reglamento General de Protección de Datos.

Normativa de protección de datos citada para mostrar que los requisitos dependen de jurisdicción y tratamiento. Se utiliza como referencia conceptual de cumplimiento; una región o un servicio incluido en un programa no acredita por sí solo que toda aplicación lo cumpla.

**Procedencia:** T3 p.49, ejemplo de regulación. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="google-authenticator-authy-yubikey-y-gemalto"></a>

## Google Authenticator, Authy, YubiKey y Gemalto

Ejemplos de aplicaciones, llaves de seguridad y dispositivos físicos mostrados para reforzar autenticación mediante mecanismos compatibles. Sirven para reconocer modalidades MFA del curso; no son servicios AWS equivalentes ni una certificación de compatibilidad actual de cada modelo o configuración. La atribución de Windows Phone a Authy aparece en la lámina histórica y no debe tratarse como recomendación de instalación actual.

**Procedencia:** T3 pp.17,30, ejemplos históricos. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="grupo-iam"></a>

## Grupo IAM

**Alias:** IAM group.

Conjunto de usuarios IAM al que se adjuntan políticas comunes. Facilita la administración de autorizaciones, pero no inicia sesión ni se asume como un rol; los grupos IAM no contienen subgrupos ni roles.

**Procedencia:** T3 pp.15,24. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="amazon-guardduty"></a>

## Amazon GuardDuty

**Alias:** GuardDuty.

Servicio administrado de detección de amenazas a partir de señales y fuentes admitidas. Se utiliza para investigar comportamiento sospechoso; no se confunde con el análisis de vulnerabilidades de Inspector ni con la búsqueda de datos sensibles de Macie.

**Procedencia:** Ampliación B.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="hallazgo-de-seguridad"></a>

## Hallazgo de seguridad

**Alias:** Finding.

Resultado que describe una observación o problema potencial detectado por una herramienta. Se utiliza para investigar y priorizar respuesta; no todos los hallazgos prueban explotación ni todos requieren la misma acción automática.

**Procedencia:** Ampliación B.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="hipaa"></a>

## HIPAA

**Alias:** Health Insurance Portability and Accountability Act.

Marco legal estadounidense citado como ejemplo de requisitos asociados a información sanitaria y actividades sujetas a su alcance. Se utiliza para entender que industria y uso modifican obligaciones; no es una política IAM ni una certificación automática de una aplicación.

**Procedencia:** T3 p.49, ejemplo sectorial. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="hipervisor"></a>

## Hipervisor

**Alias:** hypervisor.

Capa de virtualización que permite ejecutar y aislar máquinas invitadas sobre infraestructura anfitriona. En el escenario EC2 del curso la infraestructura de virtualización es responsabilidad de AWS, mientras que el cliente mantiene el sistema operativo invitado y su configuración.

**Procedencia:** T3 pp.4–5,9–10. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="hsm"></a>

## HSM

**Alias:** Hardware Security Module.

Módulo de seguridad dedicado a proteger operaciones y material criptográfico. Se utiliza como componente de servicios y sistemas de claves; no es equivalente a una política IAM ni acredita automáticamente cualquier versión de una certificación.

**Procedencia:** T3 p.41. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="iaas"></a>

## IaaS

Infrastructure as a Service: consumo de infraestructura virtualizada de cómputo, red y almacenamiento. Se utiliza para conservar control del sistema operativo y las aplicaciones; frente a PaaS deja más administración técnica en manos del cliente.

**Procedencia:** T3 p.7. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="aws-iam"></a>

## AWS IAM

Identity and Access Management, servicio de identidades y autorización para recursos AWS. Se utiliza para definir quién puede realizar qué acciones sobre qué recursos; no filtra puertos ni paquetes como Security Groups o Network ACL.

**Procedencia:** T3 pp.14–26. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="iam-access-analyzer"></a>

## IAM Access Analyzer

**Alias:** AWS IAM Access Analyzer, Access Analyzer.

Capacidades para analizar acceso y permisos según el tipo de analizador y su alcance. Se utilizan para investigar exposición externa o permisos innecesarios; no equivalen a detectar vulnerabilidades de software con Inspector ni amenazas de comportamiento con GuardDuty.

**Procedencia:** Ampliación C.5. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-iam-identity-center"></a>

## AWS IAM Identity Center

**Alias:** IAM Identity Center, AWS SSO.

Servicio para centralizar acceso del personal a cuentas AWS y aplicaciones compatibles. Se utiliza con identidades propias o proveedores externos y asignaciones de permisos; se diferencia de Cognito, orientado a los usuarios de aplicaciones.

**Procedencia:** Ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="amazon-inspector"></a>

## Amazon Inspector

**Alias:** Inspector.

Servicio que identifica vulnerabilidades y determinados problemas de exposición en recursos y software compatibles. Se utiliza para priorizar remediación; un hallazgo de vulnerabilidad no significa necesariamente que ya se haya observado un ataque.

**Procedencia:** Ampliación B.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="instancia"></a>

## Instancia

Recurso de cómputo virtual en ejecución, como una instancia de Amazon EC2. Se utiliza para ejecutar un sistema y sus aplicaciones; una AMI proporciona la configuración inicial, mientras que la instancia tiene su propio ciclo de vida y estado operativo.

**Procedencia:** T3 pp.6–7,9–12. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="integridad-y-confidencialidad"></a>

## Integridad y confidencialidad

Propiedades que protegen la exactitud frente a cambios indebidos y el acceso a información frente a actores no autorizados, respectivamente. Se utilizan para definir controles y riesgos; cifrado, permisos y registros aportan protecciones diferentes y no son sustitutos universales.

**Procedencia:** CA p.22; T3 pp.45–46. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="internet-gateway"></a>

## Internet Gateway

**Alias:** Gateway de Internet, IGW.

Componente de conectividad de VPC que participa en el acceso a Internet bajo rutas y configuraciones admitidas. Se utiliza en arquitecturas de red pública; su presencia no sustituye direccionamiento, Security Groups, ACL ni autenticación.

**Procedencia:** T3 pp.11–12. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="iso-27001-27017-27018-y-9001"></a>

## ISO 27001, 27017, 27018 y 9001

Conjunto de normas diferentes mostrado por el curso como ejemplos de certificación y acreditación en ámbitos de seguridad, nube, privacidad o gestión de calidad. Se utiliza para reconocer la categoría documental; sus números no son sinónimos ni todos acreditan el mismo control o alcance.

**Procedencia:** T3 p.49. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="json"></a>

## JSON

JavaScript Object Notation, formato textual para representar datos estructurados mediante objetos, listas y valores. Se utiliza en intercambios de API y configuraciones; a diferencia de XML no expresa la estructura mediante etiquetas de marcado.

**Procedencia:** T3 pp.20–21. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-kms"></a>

## AWS KMS

Key Management Service, servicio para crear y administrar claves criptográficas y controlar su uso. Se integra con cifrado de servicios compatibles; no sustituye la clasificación de datos ni concede automáticamente a cualquier identidad permiso para descifrarlos.

**Procedencia:** T3 pp.41,45; T2 p.18. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-knowledge-center"></a>

## AWS Knowledge Center

**Alias:** Knowledge Center.

Colección de artículos y soluciones de soporte accesibles en el ecosistema re:Post. Se utiliza para investigar incidencias y preguntas concretas; debe comprobarse antigüedad y alcance y no equivale al conjunto de respuestas comunitarias de la plataforma.

**Procedencia:** Ampliación D.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-lambda"></a>

## AWS Lambda

Servicio para ejecutar funciones en respuesta a invocaciones o eventos sin administrar servidores subyacentes. Se utiliza para lógica que encaja en sus condiciones de ejecución; frente a EC2 reduce gestión del host, pero el cliente mantiene código, dependencias y permisos.

**Procedencia:** T3 p.7; T9 p.14. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="latencia"></a>

## Latencia

Tiempo que transcurre entre una acción o solicitud y la respuesta observada en el trayecto considerado. Se utiliza para evaluar experiencia y rendimiento; mayor ancho de banda no elimina necesariamente distancia, procesamiento o esperas en otros componentes.

**Procedencia:** T3 pp.11–12; T9 p.14. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="amazon-macie"></a>

## Amazon Macie

**Alias:** Macie.

Servicio que ayuda a descubrir datos sensibles y analizar su contexto de seguridad en S3. Se utiliza para localizar información que requiere protección; no concede o deniega por sí solo todas las lecturas ni sustituye la clasificación del negocio.

**Procedencia:** Ampliación B.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-management-console"></a>

## AWS Management Console

Interfaz web gráfica para acceder a servicios y administrar recursos AWS. Se utiliza para explorar y configurar operaciones visualmente; frente a CLI y SDK ofrece interacción por navegador, pero sigue necesitando autenticación y permisos.

**Procedencia:** T3 pp.11,16,40. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-marketplace"></a>

## AWS Marketplace

**Alias:** Marketplace.

Catálogo para encontrar y adquirir productos de terceros, incluidas soluciones de seguridad con condiciones propias. Se utiliza para seleccionar herramientas adicionales; contratar un producto no demuestra su correcta integración ni el cumplimiento de toda una carga.

**Procedencia:** Ampliación D.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="metrica-y-dimension"></a>

## Métrica y dimensión

Una métrica representa observaciones de una magnitud y las dimensiones identifican recursos o subconjuntos dentro de su contexto y espacio de nombres. Se utilizan para seleccionar la señal correcta; una medida agregada no equivale a una instancia concreta sin verificar esas dimensiones.

**Procedencia:** T9 pp.14–15. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="mfa"></a>

## MFA

Multi-Factor Authentication: autenticación que exige factores de categorías diferentes para reforzar la verificación de identidad. Se utiliza para proteger accesos, especialmente el usuario raíz; no concede permisos adicionales ni sustituye el principio de mínimo privilegio.

**Procedencia:** T3 pp.17,30; CA p.56. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="microsoft-active-directory"></a>

## Microsoft Active Directory

**Alias:** Active Directory, AD.

Tecnología de directorio e identidad empresarial citada como origen de identidades integrables mediante mecanismos compatibles. Se utiliza en gobierno de usuarios de una organización; no es un grupo IAM ni una OU de Organizations aunque comparta terminología administrativa.

**Procedencia:** T3 p.42. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="minimo-privilegio"></a>

## Mínimo privilegio

**Alias:** Least privilege.

Principio de conceder únicamente las acciones y recursos necesarios para una función bajo condiciones apropiadas. Se utiliza para limitar impacto y exposición; habilitar MFA o cifrado no reduce por sí mismo una política demasiado amplia.

**Procedencia:** T3 p.19; ampliación C.1. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="multi-tenancy"></a>

## Multi-tenancy

Modelo en el que varios clientes o tenants comparten infraestructura con separación lógica. Se utiliza para aprovechar recursos comunes a escala; compartir hardware no significa que cada cliente pueda acceder a datos o recursos privados de los demás.

**Procedencia:** T3 pp.5,11–12. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="network-acl"></a>

## Network ACL

**Alias:** Network ACL (NACL), NACL, ACL de red, lista de control de acceso de red.

Lista de reglas que permite o deniega tráfico cuando entra o sale de una subred de VPC. Se utiliza como control de red adicional y es stateless, por lo que el retorno requiere reglas apropiadas; los Security Groups se asocian a recursos compatibles y conservan estado de conexión.

**Procedencia:** T5 pp.29–32. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-network-firewall"></a>

## AWS Network Firewall

**Alias:** Network Firewall.

Servicio de firewall de red administrado para inspección y filtrado de tráfico en arquitecturas VPC compatibles. Se utiliza cuando se necesita ese nivel de control; WAF inspecciona solicitudes web y no es otra denominación del mismo servicio.

**Procedencia:** Ampliación D.2, profundidad complementaria. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="notresource"></a>

## NotResource

Elemento que hace que un statement se refiera a recursos fuera del conjunto de excepciones enumerado. Se utiliza para interpretar el Deny del ejemplo; no significa denegar precisamente los recursos listados ni afecta a acciones que el statement no incluye.

**Procedencia:** T3 p.21. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="oauth-2-0"></a>

## OAuth 2.0

Marco de autorización delegada empleado por integraciones de aplicaciones compatibles. Ayuda a delegar acceso mediante flujos y tokens; OIDC añade una capa de identidad y no debe confundirse OAuth por sí solo con una garantía universal de autenticación.

**Procedencia:** Contexto editorial de identidad de aplicaciones. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="oidc"></a>

## OIDC

**Alias:** OpenID Connect.

Protocolo de identidad utilizado en integraciones compatibles para comunicar autenticación mediante tokens. Se utiliza con proveedores y servicios que lo admiten; no equivale a SAML ni elimina las políticas de autorización del destino.

**Procedencia:** Ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="oracle-sobre-ec2-o-rds"></a>

## Oracle sobre EC2 o RDS

Motor de base de datos usado para comparar dos repartos de mantenimiento. Si el cliente lo instala en EC2 mantiene ese software invitado, mientras que RDS ofrece administración del motor en el marco del servicio y conserva decisiones del cliente sobre datos, acceso y opciones de mantenimiento.

**Procedencia:** T3 pp.9–10. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="aws-organizations"></a>

## AWS Organizations

Servicio para administrar y gobernar varias cuentas AWS de forma centralizada. Se utiliza para agrupar cuentas y aplicar políticas de organización; las políticas de control limitan permisos máximos y no conceden por sí solas acceso a cada recurso.

**Procedencia:** T3 pp.34–40. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="ou"></a>

## OU

**Alias:** Organizational Unit, unidad organizativa.

Nodo de AWS Organizations que agrupa cuentas u otras OU para gobierno. Se utiliza para aplicar controles con estructura administrativa; no es una subred ni un grupo de usuarios IAM.

**Procedencia:** T3 pp.34–36. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="paas"></a>

## PaaS

Platform as a Service: modelo en el que el proveedor opera infraestructura y componentes de plataforma para desplegar aplicaciones. Se utiliza para concentrarse en código, datos y configuración del servicio; frente a IaaS reduce administración del entorno y frente a SaaS conserva una aplicación propia.

**Procedencia:** T3 p.7, clasificación docente. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="pci-dss"></a>

## PCI DSS

**Alias:** Payment Card Industry Data Security Standard.

Estándar de seguridad del sector de tarjetas de pago que se relaciona con controles y alcance de tratamiento. Se estudia para reconocer evidencias y requisitos del sector; que AWS tenga documentos pertinentes no convierte cualquier flujo de pagos del cliente en conforme.

**Procedencia:** T3 p.51; contexto de pagos. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="perfil-de-instancia"></a>

## Perfil de instancia

**Alias:** Instance profile.

Mecanismo mediante el que se presenta un rol IAM a una instancia EC2 en el caso compatible. Se utiliza para que la aplicación obtenga credenciales del rol; no equivale a una imagen AMI ni concede permisos diferentes de los definidos para ese rol.

**Procedencia:** Desarrollo editorial de T3 p.26. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="permissions-boundary"></a>

## Permissions boundary

**Alias:** Límite de permisos.

Política que limita el máximo que pueden conceder políticas de identidad en el contexto admitido. Se utiliza para delegar administración con restricciones; no concede por sí misma las acciones que necesita una identidad.

**Procedencia:** Ampliación C.1. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-administrada"></a>

## Política administrada

**Alias:** Managed policy, política gestionada.

Objeto de política reutilizable que puede ser administrado por AWS o por el cliente. Facilita asociar permisos a entidades compatibles; ser administrada no convierte en mínimo privilegio una política excesivamente amplia.

**Procedencia:** T3 pp.19–20. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-basada-en-identidad"></a>

## Política basada en identidad

**Alias:** Identity-based policy.

Política asociada a un usuario, grupo o rol IAM para definir sus autorizaciones. Se utiliza para gobernar acciones del solicitante; una política basada en recurso se adjunta al objeto que recibe la solicitud y puede identificar principales.

**Procedencia:** T3 pp.20,22. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-basada-en-recurso"></a>

## Política basada en recurso

**Alias:** Resource-based policy.

Política adjunta a un recurso de un servicio compatible que define acceso sobre él. Se utiliza, por ejemplo, en buckets S3; su efecto depende del servicio, del principal y del escenario y no se debe asumir disponible en cualquier recurso AWS.

**Procedencia:** T3 pp.20,22. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-de-confianza"></a>

## Política de confianza

**Alias:** Trust policy.

Política del rol que especifica quién puede asumirlo y bajo qué condiciones. Se utiliza para controlar la entrada a esa identidad; no es el documento que por sí mismo concede al rol leer un bucket o detener una instancia.

**Procedencia:** T3 pp.25–26; ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-de-contrasenas"></a>

## Política de contraseñas

**Alias:** Password policy.

Conjunto de requisitos para contraseñas de las identidades a las que se aplica. Se utiliza para gobernar credenciales; no equivale a MFA ni asegura que cada usuario existente cambie inmediatamente su contraseña al modificar un requisito.

**Procedencia:** T3 p.29; CA p.57. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-de-permisos"></a>

## Política de permisos

**Alias:** Permissions policy.

Documento que define acciones permitidas o denegadas y recursos y condiciones aplicables. Se utiliza para describir autorización; debe distinguirse de las políticas que limitan un máximo y de la confianza que permite asumir un rol.

**Procedencia:** T3 pp.18–21. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-de-sesion"></a>

## Política de sesión

**Alias:** Session policy.

Política que puede limitar los permisos de una sesión temporal según el mecanismo utilizado. Se utiliza para acotar una delegación concreta; no debe confundirse con una contraseña temporal ni asumirse que amplía permisos del rol base.

**Procedencia:** Ampliación C.1. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="politica-inline"></a>

## Política inline

**Alias:** Inline policy, política insertada.

Política incorporada directamente a una identidad concreta. Se utiliza cuando el ciclo de vida y la asociación deben permanecer ligados a esa entidad; se diferencia de un objeto de política administrada reutilizable.

**Procedencia:** T3 p.20. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="principal"></a>

## Principal

**Alias:** Sujeto de la solicitud.

Identidad o entidad que actúa como solicitante en una evaluación de acceso. Se utiliza para interpretar políticas y actividad; una política de recurso puede designar principales, mientras que la asociación de una política de identidad determina a quién se aplica.

**Procedencia:** T3 pp.20–23; ampliación C.1. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="privacy-shield-historico"></a>

## Privacy Shield histórico

**Alias:** Escudo de privacidad UE–EE.UU..

Rótulo de la lámina de 2022 relacionado con transferencias internacionales y marcos de privacidad de su contexto. Se conserva para fidelidad de fuente y no se presenta como garantía legal vigente; una decisión real requiere revisar regulación y documentación actual aplicables.

**Procedencia:** T3 p.49, referencia histórica. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="proveedor-de-identidad"></a>

## Proveedor de identidad

**Alias:** Identity Provider, IdP.

Sistema que administra y autentica identidades y participa en relaciones de confianza de federación. Se utiliza para integrar el directorio de una organización; no sustituye la definición de roles y autorizaciones de los recursos AWS.

**Procedencia:** Ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="puerto-y-protocolo"></a>

## Puerto y protocolo

El protocolo define reglas de comunicación y el puerto identifica un extremo de transporte en protocolos como TCP. Se utilizan al expresar controles de red; un número de puerto no prueba qué programa escucha ni si la conexión está cifrada.

**Procedencia:** T5 pp.27–32. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="puertos-efimeros"></a>

## Puertos efímeros

**Alias:** Ephemeral ports.

Puertos utilizados temporalmente por clientes o sistemas para extremos de conexiones según su configuración. Importan al permitir tráfico de retorno en una ACL stateless; no existe un único rango que deba copiarse sin conocer el sistema y el flujo.

**Procedencia:** Precisión editorial de T5 p.31. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="raiz-organizativa"></a>

## Raíz organizativa

**Alias:** Organization root.

Nodo superior de la jerarquía de una organización que contiene cuentas y OU. Se utiliza para organizar y heredar políticas en su ámbito; no es el usuario raíz de ninguna cuenta ni una identidad con la que iniciar sesión.

**Procedencia:** T3 p.36. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="rcp"></a>

## RCP

**Alias:** Resource Control Policy.

Política de organización para establecer límites sobre recursos compatibles en su ámbito. Se utiliza como control de recursos y no como sustituto de toda política IAM; sus condiciones y servicios admitidos deben consultarse antes de aplicarla.

**Procedencia:** Ampliación C.4, alcance adicional. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="amazon-rds"></a>

## Amazon RDS

Servicio administrado para operar motores de bases de datos relacionales compatibles. Se utiliza para delegar tareas de infraestructura y del motor admitidas por el servicio; el cliente mantiene responsabilidad sobre datos, acceso y configuración, y el modelo difiere de DynamoDB.

**Procedencia:** T3 pp.7,9–10,45; T9 pp.16–17. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="aws-re-post"></a>

## AWS re:Post

**Alias:** re:Post.

Plataforma de conocimiento y preguntas y respuestas sobre AWS. Se utiliza para buscar orientación y discusiones, junto a recursos de soporte; una respuesta requiere evaluar autoría, fecha y correspondencia con la configuración real.

**Procedencia:** Ampliación D.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="recurso-y-accion"></a>

## Recurso y acción

Un recurso es la entidad sobre la que se opera y una acción es la operación definida por un servicio. Permiten acotar permisos a necesidades concretas; no todas las acciones admiten los mismos tipos de recurso ni el mismo nivel de restricción.

**Procedencia:** T3 pp.14,18,20–21. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="region-region"></a>

## Región (Region)

**Alias:** Region, Región.

Área geográfica de AWS que contiene varias zonas de disponibilidad y ofrece un catálogo regional de servicios. Se elige por requisitos legales, latencia, disponibilidad de servicios y coste; la replicación entre regiones requiere una decisión explícita y no debe suponerse automática.

**Procedencia:** T3 pp.4–5,11–12. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="responsabilidad-compartida"></a>

## Responsabilidad compartida

**Alias:** Shared responsibility.

Modelo que asigna a AWS la seguridad de la infraestructura que presta y al cliente los controles de su uso y los componentes que administra. Sirve para atribuir tareas según servicio y capa; no significa que cada actividad se reparta al cincuenta por ciento ni que un servicio administrado elimine toda responsabilidad del cliente.

**Procedencia:** T3 pp.4–12; ampliación A.1. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="rightsizing"></a>

## Rightsizing

Proceso de ajustar tipo, tamaño y configuración de recursos a demanda y requisitos medidos. Se utiliza para reducir sobreaprovisionamiento manteniendo servicio; se diferencia de Auto Scaling, que modifica capacidad conforme a políticas, y necesita mediciones representativas.

**Procedencia:** Comparación editorial con recomendaciones y monitorización. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="rol-iam"></a>

## Rol IAM

**Alias:** IAM role.

Identidad asumible que permite obtener una sesión con credenciales temporales. Se utiliza para delegar acceso a personas, aplicaciones o servicios; quién puede asumirlo y qué puede hacer se definen mediante políticas con funciones diferentes.

**Procedencia:** T3 pp.15,25–26. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="root-user"></a>

## root user

Identidad raíz de la cuenta AWS con privilegios especialmente amplios y capacidad para tareas reservadas. Se protege con autenticación reforzada y se evita en trabajo cotidiano; compartir sus credenciales dificulta la atribución y concede acceso innecesario.

**Procedencia:** T3 pp.28–30; CA pp.10,56. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="rpo"></a>

## RPO

Recovery Point Objective: objetivo de pérdida temporal máxima de datos tolerable después de un incidente. Se utiliza para diseñar la frecuencia y método de protección; se diferencia de RTO, que establece el tiempo tolerable para restablecer el servicio.

**Procedencia:** CA p.59; contexto de frecuencia de copias. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="rto"></a>

## RTO

Recovery Time Objective: objetivo de tiempo máximo tolerable para recuperar el servicio tras una interrupción. Se utiliza para definir procedimientos, recursos y pruebas de recuperación; no expresa cuántos datos se pueden perder, que es el foco del RPO.

**Procedencia:** Contexto editorial de recuperación y pruebas. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="amazon-s3"></a>

## Amazon S3

Servicio de almacenamiento de objetos organizados en buckets e identificados mediante claves. Se utiliza para archivos, imágenes, registros y conjuntos de datos; no expone un volumen de bloques como EBS ni la misma interfaz de archivos compartidos que EFS.

**Procedencia:** T3 pp.9–12,21–22,26,45–47; CA pp.60,65. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="s3-block-public-access"></a>

## S3 Block Public Access

**Alias:** Bloqueo de acceso público S3.

Conjunto de configuraciones para restringir formas de acceso público a recursos S3 según su alcance. Se utiliza junto con políticas y opciones de la cuenta y del bucket; no reemplaza la revisión de permisos privados o entre cuentas.

**Procedencia:** T3 p.47; ampliación B.1. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="s3-object-ownership"></a>

## S3 Object Ownership

Configuración de S3 que controla propiedad de objetos y habilitación o deshabilitación de ACL. Bucket owner enforced deshabilita ACL y utiliza políticas para acceso; se diferencia de una Network ACL, que filtra tráfico de una subred.

**Procedencia:** Ampliación B.1; documentación S3. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="s3-server-access-logging"></a>

## S3 server access logging

**Alias:** Registro de accesos S3, bucket logging.

Mecanismo de registros de solicitudes de acceso a S3 bajo su configuración y condiciones. Se utiliza para análisis y auditoría del uso; no equivale a todos los eventos y mecanismos de CloudTrail ni a una garantía de detección automática.

**Procedencia:** CA p.60. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="saas"></a>

## SaaS

Software as a Service: aplicación completa consumida como servicio y operada principalmente por el proveedor. Se utiliza para acceder a funcionalidad sin administrar su plataforma; el cliente conserva decisiones sobre usuarios, datos y configuración disponible y no despliega su propio código como en PaaS.

**Procedencia:** T3 p.8, clasificación docente. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="saml"></a>

## SAML

**Alias:** Security Assertion Markup Language.

Estándar para intercambiar información de autenticación y autorización en integraciones de federación compatibles. Se utiliza para conectar un proveedor de identidad con servicios que admiten ese flujo; no es una política IAM ni una clave de cifrado de objetos.

**Procedencia:** T3 p.42; ampliación C.2. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="scp"></a>

## SCP

**Alias:** Service Control Policy.

Política de organización que limita el máximo de permisos disponibles en las cuentas y entidades a las que se aplica. Se utiliza como guardarraíl y no concede permisos por sí sola; una identidad necesita las autorizaciones correspondientes dentro de esos límites.

**Procedencia:** T3 pp.34–38. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-sdk"></a>

## AWS SDK

**Alias:** AWS Software Development Kit.

Software Development Kit: bibliotecas para utilizar API de AWS desde un lenguaje de programación. Se utiliza para integrar servicios en aplicaciones; frente a la CLI proporciona interfaces de código en lugar de comandos y sigue requiriendo autorización adecuada.

**Procedencia:** T3 pp.16,40. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-secrets-manager"></a>

## AWS Secrets Manager

**Alias:** Secrets Manager.

Servicio para almacenar y gestionar secretos y apoyar su rotación en configuraciones compatibles. Se utiliza para credenciales de aplicación que realmente necesitan custodia; no sustituye roles temporales cuando el servicio permite evitar un secreto estático.

**Procedencia:** Ampliación B.1 y C.5. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-security-blog"></a>

## AWS Security Blog

**Alias:** Blog de seguridad AWS.

Publicación de explicaciones, novedades y ejemplos técnicos de seguridad. Se utiliza para aprender y conocer cambios; la fecha y el contexto importan y una entrada no sustituye la documentación vigente del producto.

**Procedencia:** Ampliación D.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-security-center"></a>

## AWS Security Center

**Alias:** AWS Cloud Security, centro de seguridad AWS.

Recurso web con información de capacidades, soluciones y prácticas de seguridad de AWS. Se utiliza para orientarse y localizar recursos; no es una herramienta de detección que evalúe automáticamente la cuenta.

**Procedencia:** Ampliación D.4. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="security-group"></a>

## Security Group

**Alias:** Security Groups, SG, grupo de seguridad.

Control de red que permite tráfico de entrada y salida para recursos asociados compatibles. Se utiliza para restringir fuentes, destinos, protocolos y puertos y es stateful; una Network ACL opera en subredes, puede permitir o denegar y es stateless.

**Procedencia:** T5 pp.26–28,32; CA p.58. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-security-hub"></a>

## AWS Security Hub

**Alias:** Security Hub.

Experiencia de seguridad para priorizar y responder a problemas correlacionando hallazgos de servicios compatibles en la nomenclatura consultada. Se utiliza para orientar análisis y flujo de respuesta; se distingue de los controles de postura de Security Hub CSPM.

**Procedencia:** Ampliación B.4; documentación contrastada el 2-11-2026. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-security-hub-cspm"></a>

## AWS Security Hub CSPM

**Alias:** Security Hub CSPM.

Capacidades de evaluación de postura frente a controles, estándares y buenas prácticas con consolidación de hallazgos compatibles. Se utilizan para identificar problemas de configuración y cumplimiento técnico; no equivalen a una certificación jurídica integral del cliente.

**Procedencia:** Ampliación B.4; documentación contrastada el 2-11-2026. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="seguridad-de-la-nube"></a>

## Seguridad DE la nube

**Alias:** Security of the cloud.

Protección de instalaciones, hardware, red y plataforma subyacente operada por AWS. Se utiliza para distinguir el ámbito del proveedor; no incluye por sí sola decidir los permisos de los datos que un cliente almacena en su cuenta.

**Procedencia:** T3 pp.4–5. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="seguridad-en-la-nube"></a>

## Seguridad EN la nube

**Alias:** Security in the cloud.

Protección de datos, identidades, configuraciones y componentes que el cliente introduce o administra en AWS. Su alcance cambia entre EC2, RDS y Lambda; no debe copiarse la lista de mantenimiento de un SO invitado a un servicio que no expone ese SO al cliente.

**Procedencia:** T3 pp.4,6. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="aws-shield"></a>

## AWS Shield

Servicio de protección frente a determinados ataques distribuidos de denegación de servicio dentro del alcance de sus modalidades. Se utiliza para proteger disponibilidad ante ese tipo de amenaza; no sustituye autorización IAM, reglas de red ni seguridad de la aplicación.

**Procedencia:** T3 pp.8,43; T2 p.18. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="shield-standard-y-advanced"></a>

## Shield Standard y Advanced

Modalidades de protección DDoS con alcances y condiciones distintos. Se utilizan para interpretar las opciones citadas por el curso; no debe suponerse que todas las capacidades y condiciones de Advanced están incluidas en Standard.

**Procedencia:** T3 p.43. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="sistema-operativo-invitado"></a>

## Sistema operativo invitado

**Alias:** Guest OS, SO invitado.

Sistema operativo de la máquina virtual que utiliza el cliente. En EC2 requiere administración y parcheo del cliente; se diferencia del sistema anfitrión y de la plataforma de un servicio administrado como RDS.

**Procedencia:** T3 pp.6–7,9–10. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="amazon-sns"></a>

## Amazon SNS

**Alias:** Simple Notification Service, SNS.

Servicio de publicación y entrega de notificaciones mediante destinos compatibles. Se utiliza para avisos de alarmas del ejemplo; recibir una notificación no ejecuta por sí solo una investigación ni es lo mismo que almacenar un trabajo en una cola.

**Procedencia:** T9 p.14, icono de notificación. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="sql-injection"></a>

## SQL injection

**Alias:** SQLi, inyección SQL.

Clase de ataque que intenta alterar consultas mediante entradas que la aplicación procesa de forma insegura. Se utiliza como ejemplo de patrón web que puede motivar reglas WAF; el control perimetral no sustituye el diseño seguro de consultas.

**Procedencia:** Ampliación D.2. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="sql-server"></a>

## SQL Server

**Alias:** Microsoft SQL Server.

Motor de base de datos citado como destino de la regla TCP 1433 del ejemplo. Se utiliza para interpretar por qué una aplicación necesita ese flujo; permitir el puerto no concede acceso a sus datos ni convierte el motor en un servicio administrado.

**Procedencia:** T5 p.28. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="ssh"></a>

## SSH

**Alias:** Secure Shell.

Protocolo de acceso remoto protegido a sistemas compatibles. Se utiliza para administrar un sistema invitado y requiere custodiar claves y limitar exposición; su clave privada no es una access key de API AWS.

**Procedencia:** T3 pp.11–12; T5 pp.28,31. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).

<a id="stateful-y-stateless"></a>

## Stateful y stateless

Distinción entre controles que recuerdan el estado de una conexión y controles que evalúan cada dirección sin ese seguimiento. Se utiliza para razonar el retorno en SG y NACL; una respuesta a una conexión permitida no equivale a iniciar cualquier conexión nueva.

**Procedencia:** T5 pp.27,30,32. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-storage-gateway"></a>

## AWS Storage Gateway

**Alias:** Storage Gateway.

Servicio de integración de almacenamiento entre entornos locales y AWS mediante modalidades compatibles. Se utiliza en el ejemplo de transferencia protegida hacia S3; no es un gestor de identidad ni un certificado TLS.

**Procedencia:** T3 p.46. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-sts"></a>

## AWS STS

**Alias:** Security Token Service.

Servicio que emite credenciales temporales mediante operaciones compatibles, como la asunción de roles. Se utiliza para sesiones delegadas; no elimina la necesidad de confianza, permisos y límites aplicables al rol y al solicitante.

**Procedencia:** Ampliación C.1–C.2; contexto de roles. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-support"></a>

## AWS Support

**Alias:** Soporte AWS.

Servicio de asistencia para incidencias y consultas de AWS según el ámbito y plan aplicables. Se utiliza en el material al tratar situaciones de acceso o gestión de la cuenta que requieren soporte; no sustituye los permisos IAM ni concede automáticamente administración sobre recursos del cliente.

**Procedencia:** T3 p.28, tareas excepcionales de cuenta. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="aws-systems-manager"></a>

## AWS Systems Manager

**Alias:** Systems Manager.

Conjunto de capacidades de administración de sistemas y recursos que incluye Parameter Store. Se utiliza para tareas operativas compatibles; el servicio completo no es idéntico a su componente de almacenamiento de parámetros.

**Procedencia:** Objetivo 2.3; ampliación B.1. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="systems-manager-parameter-store"></a>

## Systems Manager Parameter Store

**Alias:** Parameter Store.

Capacidad para organizar parámetros de configuración y valores sensibles con tipos y cifrado compatibles. Se utiliza para recuperar configuración controlada; no se deben asumir las mismas funciones de ciclo de vida y rotación que en Secrets Manager.

**Procedencia:** Ampliación B.1. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="tcp-http-y-https"></a>

## TCP, HTTP y HTTPS

Conceptos de transporte y aplicación que ayudan a interpretar puertos y solicitudes del curso. HTTPS utiliza HTTP protegido mediante TLS en el contexto moderno; permitir un puerto TCP no demuestra por sí solo cifrado ni autorización de la aplicación.

**Procedencia:** T5 pp.28–31; T3 p.46. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="tls-y-ssl-historico"></a>

## TLS y SSL histórico

TLS protege comunicaciones de red según versión y configuración, mientras que SSL aparece como denominación histórica de protocolos obsoletos. Se utiliza para cifrado en tránsito y autenticación del extremo según el caso; no sustituye cifrado en reposo ni permisos de datos.

**Procedencia:** T3 p.46. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-trusted-advisor"></a>

## AWS Trusted Advisor

Herramienta que realiza comprobaciones y ofrece recomendaciones sobre recursos y configuración dentro de su alcance. Se utiliza para investigar oportunidades de mejora operativa, seguridad o coste; frente a Well-Architected Tool aporta hallazgos del entorno y necesita evaluación contextual.

**Procedencia:** CA pp.54–60; T2 p.20. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="usuario-iam"></a>

## Usuario IAM

**Alias:** IAM user.

Identidad persistente dentro de una cuenta con credenciales configurables. Se utiliza en casos compatibles de acceso, pero para acceso humano moderno se priorizan federación y sesiones temporales cuando sea viable; no equivale a la identidad raíz.

**Procedencia:** T3 pp.15–16,24,28–29. [Desarrollo en el capítulo 06](06_identidad_y_acceso.md).

<a id="vpc-y-subred"></a>

## VPC y subred

Una VPC es una red virtual lógicamente aislada y una subred es una porción de su espacio de direcciones en una AZ. Se utilizan para organizar conectividad y recursos; sus fronteras de red no conceden permisos IAM sobre datos o servicios.

**Procedencia:** T3 pp.11–12; T5 pp.26–31. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-waf"></a>

## AWS WAF

**Alias:** AWS Web Application Firewall.

Servicio que evalúa solicitudes HTTP(S) mediante reglas web compatibles. Se utiliza para controlar patrones maliciosos o tasas según configuración; se diferencia del filtrado de red de SG y NACL y no sustituye la autenticación de la aplicación.

**Procedencia:** Ampliación D.2. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-well-architected-framework"></a>

## AWS Well-Architected Framework

Marco de preguntas, principios y buenas prácticas para evaluar cargas mediante seis pilares. Se utiliza para identificar riesgos y orientar mejoras y compromisos de diseño; no es una certificación automática ni una herramienta que valide por sí sola toda configuración.

**Procedencia:** CA pp.22–25; ampliación 02, D.3. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="aws-well-architected-tool"></a>

## AWS Well-Architected Tool

Herramienta que guía y registra revisiones de cargas mediante preguntas del marco y planes de mejora. Se utiliza para organizar decisiones y revisiones posteriores; no sustituye pruebas de recuperación o seguridad ni funciona igual que las comprobaciones de Trusted Advisor.

**Procedencia:** T2 p.20; ampliación 02, D.3. [Desarrollo en el capítulo 07](07_seguridad_datos_y_cumplimiento.md).

<a id="zona-de-disponibilidad-az"></a>

## Zona de disponibilidad (AZ)

**Alias:** AZ, Availability Zone.

Dominio de aislamiento dentro de una región AWS compuesto por uno o más centros de datos. Se utiliza para distribuir componentes entre dominios de fallo; un diseño multi-AZ requiere que aplicación, red y datos admitan esa distribución y no elimina automáticamente todos los puntos únicos de fallo.

**Procedencia:** T3 pp.4–5. [Desarrollo en el capítulo 05](05_responsabilidad_compartida.md).
