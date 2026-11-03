---
id: cloud-block-1-introduccion
area: devops
subject: aws
group: Bloque I · Fundamentos
title: Introducción a Cloud Computing
summary: Qué es la nube, modelos de servicio y despliegue, API y servicios AWS.
icon: ☁
source: AWS Academy T1, pp. 1–16 y 25–30; CLF-C02 tarea 1.1
---

# 1. Introducción a Cloud Computing

## 1.1 Qué significa trabajar en la nube

`[FUENTE: T1 pp. 4–7]` **Cloud Computing** es el acceso bajo demanda, a través de una red, a recursos de TI configurables —por ejemplo, cómputo, almacenamiento, redes y bases de datos— que pueden aprovisionarse y liberarse con rapidez. En lugar de comprar y mantener cada servidor físico, una organización consume servicios proporcionados desde centros de datos del proveedor y paga según el modelo de cada servicio.

La idea central es tratar la infraestructura como software: seleccionar recursos, configurarlos, conectarlos y automatizar su ciclo de vida. Si una aplicación necesita más capacidad, se puede añadir; cuando deja de necesitarla, se puede reducir o retirar. La organización deja de esperar la compra, instalación y puesta en marcha de hardware para cada cambio.

En un centro de datos propio tradicional, la empresa estima la demanda futura, compra capacidad, instala equipos, dimensiona alimentación y refrigeración, y opera instalaciones y hardware. Esa capacidad puede tardar semanas o meses en llegar. Una estimación demasiado alta deja equipos ociosos; una demasiado baja puede limitar el crecimiento. En la nube la provisión de recursos de software suele hacerse en minutos, con opciones de escalar y pagar por consumo. La nube no elimina el diseño ni la operación: cambia qué tareas gestiona el proveedor y cuáles conserva el cliente.

`[EXPLICACIÓN EDITORIAL]` “Bajo demanda” no significa que cualquier recurso sea instantáneo, ilimitado o gratuito. La disponibilidad, los límites, la latencia y el precio dependen del servicio, la región, la configuración y las cuotas aplicables.

## 1.2 Definición NIST y características

`[FUENTE: T1 pp. 8–9]` La definición de NIST describe un modelo que permite acceso de red ubicuo, conveniente y bajo demanda a un conjunto compartido de recursos configurables, que se pueden aprovisionar y liberar rápidamente con poco esfuerzo de gestión o interacción con el proveedor. El material resume el modelo en **cinco características esenciales**, **tres modelos de servicio** y **cuatro modelos de despliegue**.

| Característica | Qué quiere decir en la práctica |
|---|---|
| Autoservicio bajo demanda | El consumidor puede aprovisionar capacidad sin tramitar cada operación manualmente con el proveedor. |
| Acceso amplio por red | Los servicios se alcanzan por mecanismos de red estándar desde distintos tipos de cliente. |
| Agrupación de recursos | El proveedor comparte recursos físicos entre consumidores mediante aislamiento lógico y asignación dinámica. |
| Elasticidad rápida | La capacidad puede aumentar o disminuir de forma rápida según la demanda. Para quien consume, puede parecer amplia; sigue sujeta a límites reales. |
| Servicio medido | El uso se mide; el cobro y la monitorización dependen de métricas del servicio, como horas, solicitudes, almacenamiento o transferencia. |

## 1.3 Modelos de servicio: IaaS, PaaS y SaaS

`[FUENTE: T1 p. 10]` Los modelos describen cuánto administra el proveedor y cuánto conserva el cliente. La frontera exacta varía por producto, pero la progresión ayuda a comparar responsabilidades.

| Modelo | El proveedor aporta | El cliente suele administrar | Ejemplo orientativo |
|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | Recursos virtualizados de cómputo, red y almacenamiento. | Sistema operativo invitado, parches, middleware, aplicación y datos. | Amazon EC2 permite lanzar instancias virtuales; el cliente elige y administra gran parte del entorno. |
| **PaaS** (Platform as a Service) | Infraestructura y plataforma de ejecución o despliegue. | Aplicación, datos y configuración propia del servicio. | AWS Elastic Beanstalk simplifica el despliegue de aplicaciones mientras AWS administra más componentes de plataforma. |
| **SaaS** (Software as a Service) | Aplicación completa accesible como servicio. | Uso, datos y ajustes disponibles al cliente. | Aplicación empresarial consumida por navegador, sin administrar sus servidores subyacentes. |

`[EXPLICACIÓN EDITORIAL]` Cuanto más gestionado es el servicio, menos trabajo de infraestructura puede recaer en el cliente, aunque no desaparecen sus obligaciones sobre usuarios, datos, configuración y uso seguro. “Nube” tampoco es sinónimo de SaaS: IaaS y PaaS son también formas de consumir servicios cloud.

## 1.4 Modelos de despliegue

`[FUENTE: T1 pp. 11–15]`

| Modelo | Descripción y uso típico |
|---|---|
| **Nube pública** | Infraestructura de un proveedor accesible a múltiples clientes con aislamiento lógico. Cada cliente consume y configura sus recursos. |
| **Nube privada** | Entorno dedicado a una organización, operado por ella o por un tercero. Da más control sobre el entorno, a cambio de asumir o contratar su operación. |
| **Nube comunitaria** | Infraestructura compartida por organizaciones con requisitos, políticas o intereses comunes. |
| **Nube híbrida** | Integra entornos cloud con centros de datos u otros entornos, manteniendo conectividad y movimiento de datos o aplicaciones según necesidades. Puede servir para transiciones graduales o requisitos específicos. |

Estos modelos describen el entorno de despliegue, no la cantidad de gestión del modelo IaaS/PaaS/SaaS. Una arquitectura puede combinar más de un entorno y más de un modelo de servicio.

## 1.5 De componentes físicos a servicios AWS

`[FUENTE: T1 p. 16]` El material contrasta componentes tradicionales con abstracciones cloud. Un firewall o una lista de control de acceso se expresa mediante controles de seguridad e identidad como IAM; routers y balanceadores se sustituyen o complementan con VPC y Elastic Load Balancing; servidores físicos con imágenes y capacidad de cómputo como AMI y EC2. DAS, SAN, NAS y bases relacionales tradicionales encuentran equivalentes de servicio como EBS, EFS, S3 y RDS.

Esta tabla es una asociación conceptual, no una equivalencia técnica uno a uno: cada servicio ofrece interfaces, límites y modelos de operación propios. Por ejemplo, S3 es almacenamiento de objetos y no un disco de bloque montable como EBS.

## 1.6 Servicios web, API y formas de interactuar

`[FUENTE: T1 pp. 25–26, 30]` Un servicio web expone operaciones a través de una interfaz de red. Una **API** define cómo solicitar una acción o dato; el cliente envía una petición con parámetros y recibe una respuesta, que puede estar serializada, por ejemplo, en XML o JSON. AWS ofrece APIs para automatizar recursos, además de interfaces gráficas.

| Interfaz | Para qué se usa |
|---|---|
| Consola de administración | Interfaz web visual útil para explorar, configurar y aprender servicios. |
| AWS CLI | Comandos que llaman a las APIs; facilita repetición y automatización desde terminal. |
| SDK | Bibliotecas para invocar APIs desde lenguajes como Python o Java e integrar AWS en aplicaciones. |

El material destaca como propuesta de valor la agilidad, la elasticidad, el acceso a servicios y la posibilidad de concentrar recursos en las necesidades del negocio, en lugar de mantener toda la infraestructura física.

## 1.7 Catálogo de servicios y selección

`[FUENTE: T1 pp. 27–29]` Las diapositivas agrupan el catálogo en 23 áreas: analítica; integración de aplicaciones; realidad aumentada y virtual; blockchain; aplicaciones empresariales; cómputo; gestión de costes; interacción con clientes; bases de datos; herramientas para desarrolladores; computación de usuario final; tecnología de juegos; IoT; machine learning; gestión y gobernanza; medios; migración y transferencia; móvil; redes y CDN; robótica; satélite; seguridad, identidad y cumplimiento; almacenamiento. La clasificación y los nombres comerciales pueden cambiar con el tiempo.

La arquitectura ilustrativa conecta una **VPC**, una instancia **EC2**, una base **DynamoDB** y un bucket **S3**. Muestra que una solución combina servicios: la red proporciona aislamiento y direccionamiento, el cómputo ejecuta lógica, la base almacena datos estructurados para su patrón de acceso y el almacenamiento de objetos guarda archivos.

El material enumera distintas opciones de cómputo: VMware Cloud on AWS, EC2, Lambda, Elastic Beanstalk, Lightsail, AWS Batch, Outposts, Fargate, EKS y ECS. No son intercambiables. La elección depende de requisitos de control, operación, compatibilidad, escalado, portabilidad y coste. Por ejemplo, EC2 ofrece control de máquina virtual; Lambda ejecuta funciones en respuesta a eventos; ECS/EKS orquestan contenedores; Fargate ejecuta contenedores sin administrar directamente instancias subyacentes.

`[AMPLIACIÓN OFICIAL · CLF-C02, tarea 1.1]` El examen pide reconocer beneficios de la nube y de AWS, no memorizar todo el catálogo. Relaciona cada necesidad con el beneficio: provisión rápida con agilidad, ajuste de capacidad con elasticidad, expansión geográfica con alcance global, y consumo medido con cambio de gasto de capital a gasto operativo. La guía asigna al dominio de conceptos de nube el 24 % puntuable.

## Repaso

1. ¿Qué cinco características resumen el modelo NIST?
2. ¿Qué responsabilidad cambia al pasar de IaaS a SaaS?
3. ¿Por qué S3 no debe describirse como un disco de bloques?
4. ¿Qué diferencia hay entre consola, CLI y SDK?

