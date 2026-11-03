# 02. Desarrollo base de las diapositivas del Bloque III

Las referencias a las fuentes designan **conjuntos de diapositivas inspeccionados**. Las explicaciones son una **síntesis editorial para estudiar**, no transcripción textual exacta de sus notas pequeñas. Para reproducir un dato o tabla concreta, abrir `figuras/<fuente>_pNN.jpg`. No asumir como actual ninguna cuota o tarifa de 2022.

## A. Cómputo (T6 pp.4–30, 41–62; T9 pp.4–11 y 18–29)

### A.1 Panorama de cómputo

T6 pp.4–5 agrupa distintas maneras de ejecutar cargas de trabajo. La elección se relaciona con el grado de control requerido, la forma de distribuir aplicaciones, la demanda, las operaciones que el equipo quiere asumir y las restricciones económicas. **EC2** proporciona instancias virtuales configurables; **Lambda** ejecuta funciones bajo un modelo sin administración directa de servidores; **Elastic Beanstalk** facilita despliegues y operación de aplicaciones; **ECS/EKS** orquestan contenedores y **ECR** almacena imágenes de contenedor. Las opciones no deben tratarse como equivalentes.

Una máquina virtual ejecuta un sistema operativo invitado con recursos de CPU y RAM; un contenedor empaqueta una aplicación y sus dependencias usando un modelo de aislamiento diferente y normalmente comparte kernel con el host. *Serverless* significa que el consumidor no administra directamente los servidores que ejecutan su código: **no** implica ausencia de infraestructura ni que el código carezca de límites. Los servicios gestionados pueden simplificar operaciones, pero mantienen obligaciones del cliente sobre código, datos, permisos, configuración y costes.

### A.2 EC2: creación y selección (T6 pp.7–25)

T6 p.7 contrapone servidores físicos y EC2. Una **instancia EC2** es una máquina virtual cuyo hardware subyacente administra AWS; la cuenta selecciona imagen, tipo de instancia, red, almacenamiento, reglas de acceso y condiciones de operación. El procedimiento didáctico de T6 pp.9–24 recorre decisiones en el lanzamiento: seleccionar una **AMI**, tipo de instancia, VPC/subred, rol de IAM, script de **user data**, almacenamiento, etiquetas, Security Group y par de claves. El orden de pantallas refleja la consola histórica y puede cambiar.

La **AMI** contiene elementos para crear el sistema inicial, pero no reemplaza una política de copias de seguridad de los datos de negocio. La selección del **tipo de instancia** condiciona vCPU, memoria y prestaciones de red/almacenamiento; las familias representadas en T6 pp.12–14 incluyen propósito general, optimizadas para cómputo, memoria, almacenamiento y aceleración. No memorizar las tablas de tipos y tamaños antiguos como catálogo vigente: el examen requiere reconocer el perfil que corresponde a la carga.

El **rol IAM de EC2** permite conceder a software de la instancia permisos mediante credenciales temporales. No usar una access key permanente en user data o en un repositorio cuando existe una alternativa mediante rol. Un **Security Group** define reglas permitidas de red asociadas al recurso y actúa de manera *stateful*. T6 pp.16–18, 23–24 muestran decisiones de VPC, red, rol y SSH. La **clave SSH** autentica ante el SO remoto, mientras que un rol IAM gobierna solicitudes a APIs de AWS: son identidades y permisos diferentes.

La elección de almacenamiento depende de la necesidad: **EBS** aporta volúmenes de bloques persistentes; un **instance store** local está ligado al host y sus datos no deben considerarse persistentes ante todos los eventos de ciclo de vida. Hay servicios de almacenamiento de archivos y objetos con modelos distintos. En T6 pp.19–21 se ilustra una instancia con diferentes volúmenes de ejemplo. Para persistencia y recuperación se diseñan snapshots, copias y comportamiento al terminar instancias.

### A.3 Ciclo de vida, elasticidad y observación (T6 pp.26–30, T9 pp.18–29)

Una instancia puede pasar por estados como **pending**, **running**, **stopping**, **stopped**, **shutting-down** y **terminated**, y ciertos tipos/condiciones ofrecen **hibernación**. El efecto en volúmenes, direcciones IP y facturación depende de configuración y estado; T6 pp.26–28 presenta esquemas históricos para interpretarlos. La **Elastic IP** es una dirección pública estática administrada mediante recursos de AWS; distinguirla de una dirección pública automática que puede cambiar en ciertos ciclos de instancia.

**Auto Scaling** ajusta capacidad en respuesta a criterios y políticas. En particular, un Auto Scaling Group de EC2 tiene capacidad deseada, mínima y máxima, y puede reemplazar instancias no saludables. **Escalado vertical** cambia el tamaño/potencia de un recurso; **horizontal** añade o retira unidades. **Elasticidad** supone adaptar capacidad a demanda, no simplemente tener muchos servidores. T9 pp.19–24 muestra diferencias entre sobreaprovisionamiento, infraprovisionamiento, picos recurrentes y tráfico estacional, junto con ejemplos de capacidad deseada y lanzamiento/reemplazo de instancias. La terminología exacta de políticas y cuotas debe verificarse con la documentación actual.

### A.4 Balanceo de carga (T9 pp.4–11)

**Elastic Load Balancing (ELB)** distribuye tráfico entre destinos compatibles y puede evaluar su salud. Permite separar un punto de entrada estable de la cantidad de destinos que atienden la carga, facilitar disponibilidad y trabajar con Auto Scaling. La presentación T9 pp.5–6 diferencia **Application Load Balancer (ALB)**, **Network Load Balancer (NLB)** y el histórico **Classic Load Balancer (CLB)**, más ejemplos de Gateway Load Balancer según el esquema. Para el examen CLF-C02 resulta esencial entender cuándo se necesita repartir peticiones de aplicación frente a un flujo de red y que **ELB no sustituye al servicio que ejecuta la aplicación**.

Un **listener** recibe conexiones según protocolo y puerto; las reglas de reenvío y grupos de destino determinan a quién se dirige el tráfico; los *health checks* ayudan a evitar destinos no saludables. T9 pp.9–10 aporta una actividad con elección del balanceador según el caso; se deben conservar preguntas y explicaciones solo tras cotejar los textos de la figura. No afirmar que un balanceador por sí solo garantiza alta disponibilidad de una base de datos.

### A.5 Contenedores y serverless (T6 pp.42–60)

T6 pp.42–44 explica el empaquetado de aplicaciones con dependencias y la diferencia conceptual entre VM y contenedor. **Docker** aparece como herramienta de construcción y ejecución; un contenedor no equivale a un servidor físico completo ni a una imagen guardada en un registro. **Amazon ECR** distribuye imágenes de contenedores. **Amazon ECS** organiza tareas/servicios de contenedores con el ecosistema AWS; **Amazon EKS** ofrece Kubernetes administrado; **AWS Fargate** aporta cómputo administrado para contenedores compatibles, mientras EC2 ofrece más control del host.

T6 pp.52–58 explica **Lambda** como ejecución de funciones ante eventos o invocaciones, con ejemplos de tareas programadas, procesamiento de objetos S3 y reacción a otros servicios. El cliente aporta código, dependencias y permisos; AWS administra la infraestructura de ejecución del servicio. Lambda tiene configuraciones y límites que han cambiado desde 2022: evitar copiar el máximo tiempo, el tamaño de paquetes o las cuotas como valores actuales. **Elastic Beanstalk** (T6 pp.60–62) ayuda a desplegar aplicaciones sobre recursos de AWS gestionando una parte del aprovisionamiento y operación, pero esos recursos existen, pueden tener coste y requieren políticas de seguridad y configuración.

## B. Redes y distribución de contenido (T5 pp.4–44)

### B.1 Fundamentos

T5 pp.4–7 aborda qué es una red, direcciones **IPv4/IPv6**, **CIDR** y la función de capas y protocolos de red. La notación `10.0.0.0/16` señala un prefijo de direcciones y la longitud de la parte de red; el operador no puede elegir bloques superpuestos arbitrariamente para componentes conectados. El modelo OSI ilustra niveles de comunicación: no es una lista de servicios AWS ni sustituye los protocolos concretos.

### B.2 VPC, subredes, rutas, interfaces (T5 pp.9–15)

**Amazon VPC** es una red virtual lógicamente aislada dentro de una región. Se define un espacio de direcciones y se organizan **subredes**, cada una en una sola AZ. Una subred **pública** tiene una ruta aplicable hacia un Internet Gateway y los recursos requieren además direcciones, permisos y controles apropiados para comunicarse con Internet. Una **subred privada** no expone directamente sus recursos por esa ruta; puede utilizar otros mecanismos de salida.

Una **tabla de rutas** asocia destinos con objetivos; una red correctamente direccionada no alcanza un destino si falta la ruta necesaria. Una **interfaz de red elástica (ENI)** tiene direcciones y atributos de red y puede asociarse a ciertos recursos. La **Elastic IP** es una IP pública estática con condiciones de asignación y cobro que no deben inferirse de la diapositiva. T5 pp.10–15 ofrece diagramas con VPC, subredes y dirección IP reservada: usar las cifras como ilustración, no como requisitos generales.

### B.3 Conectividad (T5 pp.17–24)

Un **Internet Gateway (IGW)** proporciona una puerta de comunicación con Internet para una VPC, combinado con rutas y direcciones apropiadas. **NAT Gateway** permite que recursos privados inicien conexiones salientes a destinos admitidos sin tener que aceptar directamente cualquier conexión entrante iniciada desde Internet. **VPC peering** conecta redes virtuales compatibles, pero no ofrece transitividad automática entre varios peering; **Transit Gateway** puede simplificar conectividad de múltiples redes cuando se necesita topología centralizada.

**Site-to-Site VPN** crea conectividad cifrada mediante túneles entre redes; **AWS Direct Connect** proporciona conexión de red dedicada, sin asumir cifrado extremo a extremo por defecto. T5 pp.19–22 muestra compartir subredes/VPC, peering, VPN y Direct Connect; no confundir una organización de cuentas con conectividad de red entre ellas. En la actividad de T5 pp.23–24 se debe identificar región, AZ, VPC, subred pública/privada, rutas, IGW, NAT y ENI, conservando la figura como fuente.

### B.4 Protección de VPC (T5 pp.26–32; material ya utilizado en Bloque II)

Un **Security Group** aplica reglas de permiso a interfaces o recursos compatibles, es **stateful** y no admite reglas `Deny`. Una **Network ACL** actúa en el límite de subred, usa reglas numeradas `Allow`/`Deny`, evalúa la primera coincidencia y es **stateless**, por lo que hay que configurar tráfico de retorno. T5 p.27 representa un grupo cuyo comportamiento no coincide necesariamente con el de un SG recién creado. El capítulo 07 del Bloque II ya desarrolla esta comparación; en el Bloque III se enlaza y solo se añade su papel dentro de la arquitectura de VPC.

### B.5 CloudFront y Route 53 (T5 pp.34–44)

**Amazon CloudFront** es una CDN que distribuye contenido desde una red de ubicaciones edge y cachés, ayudando a reducir latencia y carga del origen. Una ubicación edge no es una AZ ni un lugar donde puedan alojarse todos los tipos de servicios AWS. La política de caché y el contenido solicitado influyen en si se responde desde un punto cercano o desde el origen.

**Amazon Route 53** proporciona DNS administrado y funciones de encaminamiento DNS/estado compatibles. T5 pp.39–44 ejemplifica registros y políticas de *routing* simple, ponderado, por latencia, geolocalización, geoproximidad, failover y respuesta multivalor; hay que distinguir **DNS routing** de **balanceo de tráfico activo por ELB**. Las políticas antiguas pueden cambiar de interfaz o matices, pero la diferencia conceptual es fundamental.

## C. Almacenamiento (T7 pp.5–43)

### C.1 Tres modelos de almacenamiento

**Bloques**: el sistema usa unidades lógicas como volúmenes de disco para sistemas de archivos, bases de datos y cargas con acceso de bajo nivel. **Objetos**: el contenido se almacena con identificador y metadatos, normalmente mediante solicitudes API; no es un disco de bloques montado de forma idéntica. **Archivos**: se ofrece un sistema jerárquico compartido bajo protocolos compatibles. T7 p.6 muestra la diferencia gráfica entre editar bloques dentro de un archivo y operar sobre un objeto; la figura es una analogía, no una promesa universal de facturación.

### C.2 EBS (T7 pp.5–12)

**Amazon EBS** ofrece almacenamiento de bloques para recursos EC2 compatibles. Se suelen crear volúmenes en una AZ y relacionarlos con instancias admisibles; el almacenamiento puede persistir más allá del ciclo de vida de la instancia, según configuración. T7 pp.7–8 explica relación con EC2, persistencia y casos de uso. **Snapshots** aportan copias puntuales para recuperación, no prueban que toda una aplicación pueda restaurarse sin ensayos. T7 pp.9–12 presenta familias de volúmenes (SSD/HDD) y límites/precios históricos: conservar la función de elegir por IOPS, latencia, rendimiento y coste, sin memorizar cifras vigentes de ese cuadro de 2022.

### C.3 S3 (T7 pp.14–27)

**Amazon S3** almacena objetos dentro de buckets. La clave identifica cada objeto en el espacio del bucket; se accede mediante API, SDK, CLI o consola conforme a permisos. El servicio ofrece clases con perfiles diferentes de acceso, redundancia, costes de almacenamiento y recuperación. En T7 pp.16–22 aparecen **S3 Standard**, **Standard-IA**, **One Zone-IA**, **Intelligent-Tiering** y familias de archivo **Glacier**. Es fundamental distinguir **patrón de acceso** (frecuente, infrecuente, desconocido, archivado) y los compromisos de recuperabilidad, durabilidad, disponibilidad y coste de solicitudes. Las tarifas, mínimos y nombres pueden haber evolucionado.

T7 pp.23–26 ilustra buckets, rutas, acceso desde aplicaciones y casos típicos de copias, medios, software y contenido estático. S3 no es una base de datos relacional ni una unidad EBS; el contenido está protegido según el servicio y las políticas del cliente. En arquitectura real hay que considerar versionado, políticas de acceso, cifrado, replicación y control de acceso público.

### C.4 Glacier, ciclo de vida y archivos (T7 pp.28–43)

Las clases **S3 Glacier** atienden necesidades de archivado y retención, con distintos tiempos y costes de recuperación. Las diapositivas T7 pp.29–34 utilizan denominaciones y tiempos históricos: estudiar el propósito y consultar documentación actual antes de elegir la clase exacta. Una **política de ciclo de vida de S3** permite automatizar transiciones o vencimiento de objetos según reglas. No debe confundirse con programar un traslado físico de dispositivos.

**Amazon EFS** proporciona un sistema de archivos administrado, compartible por varias cargas compatibles y con mecanismos de acceso por red; la presentación T7 pp.38–43 enseña propiedades, arquitectura y montaje, con una interfaz histórica que no debe memorizarse literalmente. **Amazon FSx** se añadirá desde documentación oficial por su presencia en el examen, junto con **AWS Storage Gateway**, **AWS Backup** y la distinción con *instance store*. No afirmar que EFS usa el mismo modelo de datos que S3.

## D. Bases de datos (T8 pp.5–42)

### D.1 Autogestionada y gestionada

La comparación de T8 pp.6–9 muestra que el cliente que instala una base de datos en **EC2** administra sistema operativo invitado, software de base de datos, parches, copias y operación, mientras **Amazon RDS** se encarga de tareas definidas de infraestructura y motor. El cliente sigue seleccionando configuración, acceso, esquema y uso de datos, así como parámetros y opciones de mantenimiento. Una base de datos administrada no convierte toda la arquitectura en segura o tolerante a fallos por sí sola.

### D.2 RDS: infraestructura, Multi-AZ y réplicas

RDS ofrece motores relacionales compatibles con condiciones y versiones del servicio. En T8 pp.10–11 se ilustran clases de instancia y almacenamiento de bases de datos y su integración en VPC, que se despliega normalmente en redes privadas según los requisitos de acceso. **Multi-AZ** (T8 pp.12–13) busca disponibilidad y recuperación mediante una réplica/instancia de reserva preparada para conmutación en un dominio aislado, según modalidad. **Read replicas** (T8 p.14) permiten descargar lecturas en configuraciones admitidas; no son la misma función que un standby de alta disponibilidad, aunque ciertas arquitecturas permitan combinar objetivos.

T8 pp.15–20 recoge aplicaciones típicas y factores de coste. La tabla docente enumera características comerciales y opciones históricas; conviene estudiar conceptos de almacenamiento, tipo de instancia, disponibilidad, datos transferidos y operaciones, no importes antiguos.

### D.3 DynamoDB: NoSQL y patrones de acceso (T8 pp.22–27)

**DynamoDB** es una base de datos NoSQL administrada orientada a clave-valor y documentos. La diapositiva compara un esquema relacional con datos sin estructura de filas/columnas rígidas equivalente, e introduce **tabla**, **ítem**, **atributo**, **clave de partición** y **clave de ordenación**. El diseño de clave y patrón de consulta influyen mucho en rendimiento y distribución; no basta con asumir «NoSQL = SQL más rápido». Una consulta **Query** que aprovecha una clave no es lo mismo que leer indiscriminadamente todos los elementos con **Scan**. Las capacidades y modos de capacidad deben contrastarse con la documentación vigente.

### D.4 Redshift y Aurora (T8 pp.29–42)

**Amazon Redshift** se orienta a almacenes analíticos de datos (*data warehouse*) y consultas de inteligencia de negocio; no equivale a una base transaccional RDS para un carrito de compra. T8 pp.31–35 muestra esquemas de procesamiento paralelo, escalado y conexión desde herramientas analíticas; distinguir las láminas de clúster histórico de las modalidades actuales.

**Amazon Aurora** es una base relacional compatible con MySQL/PostgreSQL según edición, con almacenamiento y funcionamiento diseñados para AWS. T8 pp.39–42 compara objetivos de disponibilidad, rendimiento y recuperación. No memorizar una cifra promocional de multiplicador de rendimiento de 2022 como garantía actual ni afirmar que el comportamiento de réplica es universal. En el examen interesa identificar cuándo usar RDS/Aurora frente a DynamoDB/Redshift y una caché en memoria. **ElastiCache, DocumentDB, Neptune y DMS/SCT** deben explicarse mediante ampliación oficial.

## E. Despliegue y operación (ya explicado en los Bloques I y II)

**3.1:** Consola, CLI, SDK, API e infraestructura como código. Usar consola puede ser adecuado para exploración y operaciones manuales; automatizar con **CloudFormation** u otros mecanismos de IaC produce cambios reproducibles y revisables. T6 p.25 incluye un ejemplo de lanzamiento de EC2 por CLI; T1 p.30 describe las interfaces. No confundir IaC con monitorización, ni programático con «siempre requiere access keys permanentes». Un sistema de despliegue necesita identidades y permisos adecuados.

**3.2:** Región, AZ y edge. Los conceptos ya se desarrollaron en Bloque I: una **Región** es un ámbito geográfico de infraestructura; una **AZ** es un dominio de aislamiento dentro de una región; una **edge location** acerca determinados servicios a usuarios. Distribuir una aplicación por varias AZ puede reducir el impacto de un fallo zonal; desplegar en múltiples regiones puede apoyar continuidad, latencia o residencia de datos con costes y complejidad adicionales. Reutilizar y enlazar los capítulos anteriores en vez de generar una explicación contradictoria y duplicada.
