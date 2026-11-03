---
id: "aws-block-4-15"
area: "devops"
subject: "aws"
group: "Bloque IV · Facturación, precios y soporte"
summary: "Capítulo 15 del Bloque 4: apuntes completos, figuras y referencias."
source: "AWS Academy y ampliación oficial; aws-clf-c02/bloque-4/15_modelos_de_precios_aws.md"
title: "15. Modelos de precios AWS"
---
# 15. Modelos de precios AWS

[Índice del bloque](/docs-aws/aws-clf-c02/bloque-4/00_indice.md) · [TCO y optimización](/materias/aws/aws-block-4-16/) · Objetivo principal: **4.1**.

Este capítulo explica de dónde sale una factura y cómo elegir una modalidad de compra. La arquitectura de los servicios ya se desarrolla en el [Bloque III](/docs-aws/aws-clf-c02/bloque-3/00_indice.md); aquí interesa su consecuencia económica. Las láminas de AWS Academy son de 2022. Las actualizaciones oficiales se consultaron el **3 de noviembre de 2026** y se identifican expresamente. Los importes inventados para explicar un cálculo llevan la etiqueta editorial y no son tarifas AWS.

<a id="seccion-15-1"></a>
## 15.1 Entender la unidad que se factura

**[FUENTE DOCENTE]** T4 p.4 organiza los costes en cómputo, almacenamiento y transferencia. Es una buena primera descomposición: ejecutar una aplicación, conservar sus datos y moverlos son actividades diferentes. Sin embargo, una factura real puede incorporar también solicitudes, rendimiento aprovisionado, licencias, monitorización y soporte. No se calcula el coste de una arquitectura contando únicamente sus servidores.

| Dimensión | Qué se mide | Consecuencia para el diseño |
|---|---|---|
| Tiempo y capacidad de cómputo | Tiempo facturable y configuración de instancia o recurso | Importan tamaño, plataforma y duración; no solo número de máquinas |
| Almacenamiento | Capacidad aprovisionada o datos almacenados durante un periodo | Un disco vacío puede costar si se paga capacidad aprovisionada |
| Rendimiento | IOPS o throughput aprovisionados, según producto | Más rendimiento contratado puede costar aunque no se aproveche |
| Solicitudes y operaciones | Cantidad y tipo de llamadas u operaciones | Millones de objetos pequeños pueden tener un perfil distinto de pocos objetos grandes |
| Transferencia y procesamiento de red | Volumen, origen, destino y componentes atravesados | Debe dibujarse el recorrido completo de los datos |
| Software y servicios auxiliares | Licencia, suscripción, soporte o servicios asociados | El precio de EC2 no incluye automáticamente todos esos conceptos |

**[EXPLICACIÓN EDITORIAL]** GB-mes expresa capacidad mantenida durante tiempo, no velocidad. IOPS expresa operaciones de entrada/salida por segundo, y throughput, volumen por segundo. Un volumen de 500 GB con rendimiento muy alto no tiene necesariamente el mismo coste que otro del mismo tamaño con rendimiento básico. Tampoco deben mezclarse GB, GiB y unidades publicadas por cada tarifa sin convertirlos.

Una estimación se construye multiplicando cantidades por precios aplicables y sumando dimensiones. En una aplicación pequeña, por ejemplo, hay que considerar cómputo, discos, copias, balanceador, solicitudes y red. Si una cantidad es desconocida, se escribe como supuesto y se prueba un intervalo. Dar una cifra exacta a partir de una demanda desconocida solo oculta incertidumbre.

![Tres familias docentes de coste](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p04.jpg)

**Figura histórica — T4 p.4.** Las tres columnas ayudan a separar consumos. Sus afirmaciones sobre Linux y transferencias regionales no son reglas universales vigentes: las excepciones se explican en 15.9. [Registro de la fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p04).

<a id="seccion-15-2"></a>
## 15.2 Pago por uso, compromiso y volumen son mecanismos distintos

**[FUENTE DOCENTE]** T4 pp.5–9 presenta tres ideas: pagar según uso, obtener mejores condiciones por compromiso y aprovechar determinados niveles de volumen. El gráfico de p.6 contrapone inversiones anticipadas en instalaciones con capacidad cloud ajustable. El beneficio es poder relacionar recursos y demanda; no demuestra que cualquier sistema en la nube sea siempre más barato.

**[EXPLICACIÓN EDITORIAL]** Reducir cantidad y reducir precio unitario son dos decisiones distintas. Apagar un entorno de pruebas por la noche reduce horas. Un compromiso puede reducir la tarifa de horas elegibles, pero introduce una obligación de pago. Si se compra un compromiso para un entorno que después se apaga, parte de ese ahorro operativo puede dejar un compromiso sin utilizar. Por eso se dimensiona y observa antes de contratar.

Los precios escalonados dependen de la dimensión y del producto. Una tarifa marginal menor para el siguiente tramo no significa que todo el consumo anterior se recalcule necesariamente a ese precio. Tampoco significa que aumentar gasto sea una forma de ahorrar en términos absolutos. T4 p.8 cita S3, EBS y EFS: se conserva como ilustración histórica de niveles, sin prometer un descuento uniforme por GB para todos sus tipos.

T4 p.9 habla de eficiencia de hardware, energía y operaciones de AWS y cita más de 75 reducciones de precios desde 2006. Ese recuento pertenece a la presentación. Una economía de escala puede mejorar costes del proveedor; no es una garantía de que un servicio concreto baje de precio ni de que una nueva generación sustituya automáticamente la configuración del cliente sin trabajo.

### «Sin cargo adicional» y recursos asociados

**[FUENTE DOCENTE]** T4 p.11 enumera VPC, Elastic Beanstalk, Auto Scaling, CloudFormation e IAM. El asterisco recuerda cargos de otros recursos. La interpretación útil es separar la función de organización o gestión de los recursos que crea o utiliza. Beanstalk puede desplegar EC2, almacenamiento y balanceadores; una plantilla CloudFormation puede crear recursos facturables; escalar aumenta o reduce el consumo de las instancias.

**[ACTUALIZACIÓN OFICIAL]** No se generaliza esa lámina a toda funcionalidad moderna. NAT, direcciones IPv4 públicas, endpoints u otras prestaciones de red pueden generar cargos. En cada arquitectura se consulta el desglose del producto y sus recursos asociados. El portal de [Billing and Cost Management](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html) permite analizar las partidas, pero no convierte un recurso en gratuito por haberlo creado una herramienta sin cargo propio.

<a id="seccion-15-3"></a>
## 15.3 On-Demand: flexibilidad sin compromiso de uno o tres años

**[FUENTE DOCENTE]** T6 pp.32–35 asocia bajo demanda con necesidades breves, variables o difíciles de prever. El cliente paga el uso de instancias lanzadas sin adquirir el compromiso temporal propio de una RI o Savings Plan. Esto permite empezar un proyecto y aprender su patrón antes de comprometer una base permanente.

**[EXPLICACIÓN EDITORIAL]** Una empresa estrena una aplicación y desconoce cuántos clientes tendrá. Puede comenzar con On-Demand, observar horas y carga, ajustar tamaño y contratar después una parte estable. También puede mantener On-Demand para picos sobre una base comprometida. Una modalidad flexible puede ser económicamente razonable aunque su tarifa de lista sea mayor: evita pagar capacidad comprometida que no se necesita.

On-Demand no garantiza que exista capacidad para cualquier lanzamiento ni elimina cuotas. Tampoco detiene los cargos de discos o red al parar una instancia. La granularidad facturable y sus mínimos dependen de la configuración; la nota de T6 p.32 limitada a determinados Linux es histórica. Para estudiar importa distinguir ausencia de compromiso prolongado y medición del uso. Para presupuestar se consulta la combinación concreta de plataforma, región y producto en las [opciones oficiales EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html).

<a id="seccion-15-4"></a>
## 15.4 Spot: ahorro a cambio de tolerar interrupciones

**[ACTUALIZACIÓN OFICIAL]** Spot utiliza capacidad sobrante de EC2. AWS fija un precio por tipo y AZ según su oferta y demanda a largo plazo; la capacidad puede recuperarse. La explicación antigua de T6 p.32 basada en una puja superior al precio no debe convertirse en el modelo general actual. La propiedad decisiva para seleccionar Spot es la **capacidad de interrumpir y recuperar el trabajo**. [Funcionamiento de Spot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html).

**[EXPLICACIÓN EDITORIAL]** En una conversión de miles de vídeos, cada fichero puede ser una unidad independiente. Un trabajador toma una tarea, guarda el resultado fuera de la instancia y confirma su finalización. Si desaparece antes, otro trabajador repite esa unidad. Con checkpoints puede limitarse el trabajo perdido. El ahorro debe compararse con reintentos, capacidad alternativa, retrasos y complejidad operativa.

Una única base de datos que guarda su estado solo en una instancia y no puede interrumpirse no cumple ese patrón. Tener una cola o usar contenedores no vuelve tolerante a interrupciones cualquier aplicación: deben diseñarse la persistencia, la recuperación y los plazos. Para una fecha de entrega rígida puede combinarse Spot con capacidad On-Demand para completar el trabajo pendiente.

AWS publica avisos de interrupción normalmente dos minutos antes de detener o terminar. Son de mejor esfuerzo; en la hibernación el proceso empieza inmediatamente y no existe esa ventana previa de dos minutos. No se diseña un guardado crítico que solo pueda funcionar si el aviso llega siempre. Véase [avisos de interrupción](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-instance-termination-notices.html).

<a id="seccion-15-5"></a>
## 15.5 Reserved Instances: descuento, atributos y alcance

**[ACTUALIZACIÓN OFICIAL]** Una EC2 Reserved Instance es un **beneficio de facturación** para uso On-Demand compatible. No es una segunda máquina que aparezca al comprarla. Si ya hay una instancia elegible, el descuento se aplica sin reinstalarla. Hay compromiso de uno o tres años y atributos que deben corresponder al consumo. Cuando vence, el recurso puede seguir funcionando con facturación On-Demand. [Descripción de RI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html), [aplicación del descuento](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/apply_ri.html).

### Forma de pago y duración

**[FUENTE DOCENTE]** T4 p.7 distingue las tres formas de pago. El adelanto cambia el flujo de caja; no cambia por sí mismo la necesidad de utilización.

| Modalidad | Alias de la lámina | Cómo se distribuye el pago |
|---|---|---|
| All Upfront | AURI | Pago del compromiso al comienzo |
| Partial Upfront | PURI | Parte inicial y cargos periódicos comprometidos |
| No Upfront | NURI | Sin adelanto, con cargos comprometidos durante el plazo |

**[EXPLICACIÓN EDITORIAL]** No Upfront no significa «solo pago cuando enciendo». All Upfront tampoco significa «toda mi arquitectura ya está pagada»: discos, red y consumos no cubiertos siguen su propia facturación. Comparar opciones requiere sumar pagos iniciales y periódicos sobre el mismo horizonte, además de valorar el dinero inmovilizado y el riesgo de cambio.

![Modalidades históricas de pago de RI](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p07.jpg)

**Figura histórica — T4 p.7.** Se conserva el 75 % promocional y su representación de adelantos como evidencia de 2022, sin convertirlos en descuento actual universal. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p07).

### Standard y Convertible

Las RI **Standard** ofrecen condiciones de descuento a cambio de menor flexibilidad de intercambio. Las **Convertible** permiten intercambiarlas por otras Convertible con atributos diferentes bajo reglas de valor y conversión. Ambas admiten ciertas modificaciones; «Standard» no equivale a «ningún atributo se puede modificar», y «Convertible» no permite cancelar libremente una compra. Las opciones de venta en el RI Marketplace también dependen de clase y elegibilidad. [Clases de RI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-types.html).

### Regional y zonal

| Alcance EC2 | Aplicación geográfica | Capacidad | Flexibilidad de tamaño |
|---|---|---|---|
| Regional | Uso elegible en AZ de la región | No reserva capacidad | Disponible bajo condiciones; no para toda plataforma/familia/tenancy |
| Zonal | AZ elegida y atributos correspondientes | Incluye reserva de capacidad en esa AZ | No ofrece la misma flexibilidad de tamaño |

La flexibilidad regional de tamaño usa unidades normalizadas dentro de una familia compatible. No autoriza a convertir cualquier Linux en Windows ni a trasladar el beneficio entre regiones. Las restricciones de familia, plataforma y tenancy deben verificarse. Para CLF-C02 basta comprender la relación: **mayor ámbito de aplicación no equivale a mayor garantía de capacidad**. [Ámbito regional y zonal](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html).

T6 pp.33–35 relaciona reserva y previsibilidad de capacidad de forma amplia. La actualización anterior delimita cuándo se reserva realmente. Las **Scheduled Reserved Instances** de T6 p.32, basadas en horarios recurrentes, ya no pueden comprarse; no son una alternativa moderna a programar encendidos. AWS lo indica en [PurchaseScheduledInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html).

<a id="seccion-15-6"></a>
## 15.6 Savings Plans: compromiso monetario por hora

**[ACTUALIZACIÓN OFICIAL]** Un Savings Plan compromete una cantidad de gasto por hora durante el plazo contratado. El consumo compatible recibe las condiciones del plan hasta el compromiso; el exceso se factura según sus reglas aplicables. Una hora sin consumo suficiente no se convierte en saldo acumulado para otra hora. No se reserva capacidad por contratarlo. [Savings Plans y alcance](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html).

Los Savings Plans ofrecen compromisos de **uno o tres años** y opciones **All Upfront** —pago completo inicial—, **Partial Upfront** —parte inicial y resto periódico— y **No Upfront** —sin adelanto y con cargos del compromiso—, según las condiciones del producto. Compartir estos nombres de pago con las RI no los convierte en el mismo mecanismo: Savings Plans compromete gasto por hora y las RI se vinculan a atributos de configuración. [Plazos y pagos de Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html).

**Excepción publicada:** Database Savings Plans se ofrece a **un año y No Upfront**; no se presupone que los cuatro tipos permitan todos los plazos y formas de pago. Pagar anticipadamente mediante una función de Billing no equivale a contratar otra modalidad All Upfront del producto. [Condiciones específicas de Database Savings Plans](https://aws.amazon.com/savingsplans/database-pricing/), [FAQ de pagos](https://aws.amazon.com/savingsplans/faqs/).

| Tipo publicado en noviembre de 2026 | Ámbito conceptual | Diferencia principal |
|---|---|---|
| Compute Savings Plans | Uso compatible EC2, Fargate y Lambda | Flexibilidad amplia entre configuraciones y servicios cubiertos |
| EC2 Instance Savings Plans | Familia EC2 en una región | Compromiso más específico, con flexibilidad admitida de tamaño, plataforma y tenancy |
| Database Savings Plans | Uso elegible de servicios de bases de datos | No debe confundirse con Compute Savings Plans ni con Reserved DB Instances |
| SageMaker AI Savings Plans | Uso elegible de instancias de SageMaker AI | Ámbito de aprendizaje automático; no cubre cualquier factura de IA |

La distinción central del examen sigue siendo configuración de RI frente a compromiso monetario de Savings Plans. Se recoge el catálogo actual sin convertirlo en una lista exhaustiva de todos los recursos elegibles. Por ejemplo, cubrir EC2 que forma parte de un clúster no significa cubrir también su plano de control, discos, red y software. Se comprueba la dimensión concreta.

**[EXPLICACIÓN EDITORIAL — cifras ficticias]** Supóngase un compromiso de 4 unidades monetarias por hora y consumo elegible valorado a tarifa del plan de 3 en una hora. Se pagan 4: queda 1 de compromiso sin utilizar. Si otra hora consume el equivalente de 6 a esa tarifa, no se resta aquel 1 anterior; la parte que excede la cobertura se valora a su tarifa correspondiente, no se supone que cuesta exactamente 2. Es importante no mezclar precios On-Demand con precios descontados en una misma resta.

La **utilización** describe cuánto del compromiso se aprovecha; la **cobertura** describe cuánto uso elegible queda cubierto. Puede haber utilización alta con cobertura baja si se compra un compromiso pequeño para una carga enorme. También puede haber cobertura alta y compromiso desperdiciado durante horas de baja demanda. Para interpretar porcentajes se conserva la base de valoración, especialmente cuando se comparan importes On-Demand equivalentes. [Métricas oficiales de cobertura](https://docs.aws.amazon.com/savingsplans/latest/userguide/ce-sp-cr-metrics.html).

<a id="seccion-15-7"></a>
## 15.7 Dedicated Instances, Dedicated Hosts y licencias

**[FUENTE DOCENTE]** T6 pp.32–35 relaciona hardware dedicado con BYOL y requisitos corporativos. BYOL significa utilizar licencias propias cuando sus términos permiten ese despliegue. No basta con disponer de un instalador: pueden importar núcleo, socket, VM, fecha de adquisición o condiciones del proveedor.

**[ACTUALIZACIÓN OFICIAL]** Dedicated Instances ejecuta instancias en hardware dedicado a una cuenta, pero no ofrece el mismo control de colocación o identidad de host. Dedicated Hosts proporciona un servidor físico dedicado, visibilidad y control de colocación útiles para licencias ligadas al host. Su facturación se organiza por host, mientras Dedicated Instances mantiene su modelo por instancia y cargos asociados. [Dedicated Hosts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html), [Dedicated Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html).

**[EXPLICACIÓN EDITORIAL]** Si una licencia exige demostrar los núcleos de un servidor identificado, Dedicated Host responde a una necesidad distinta de contratar una instancia grande. Si basta aislamiento por cuenta, el control físico adicional puede no aportar valor. El hardware dedicado tampoco produce automáticamente cumplimiento normativo: siguen haciendo falta configuración, permisos, registros y revisión contractual. Una organización puede necesitar aislamiento y descuentos, pero son decisiones separadas que deben ser compatibles.

<a id="seccion-15-8"></a>
## 15.8 Capacity Reservations: asegurar capacidad y decidir el precio por separado

**[ACTUALIZACIÓN OFICIAL]** Una On-Demand Capacity Reservation reserva capacidad EC2 con atributos concretos en una AZ. La capacidad activa sin usar puede generar cargo. La modalidad de uso inmediato admite cancelación sin compromiso de plazo; las reservas de inicio futuro pueden incorporar compromiso y condiciones de cancelación. No se enseña que todas las reservas modernas sean cancelables bajo idénticas reglas. Un descuento compatible, cuando proceda, se analiza separadamente. [Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html).

**[EXPLICACIÓN EDITORIAL]** Una recuperación ante desastres tiene dos preguntas: cuánto costará operar el entorno y si podrá arrancarse cuando se necesite. Un Savings Plan puede resolver parte de la primera y no la segunda. Una reserva de capacidad puede abordar la segunda y aumentar el coste si se mantiene ociosa. Tampoco sustituye redundancia entre AZ: reservar en una zona no elimina su posible fallo.

![Escenarios de compra en la docencia](/docs-aws/aws-clf-c02/bloque-4/figuras/t6_p34.jpg)

**Figura histórica — T6 p.34 física.** Reconstruye la relación entre carga variable, trabajo flexible, demanda estable y licencias. La capacidad atribuida a RI requiere el matiz zonal anterior. T6 p.35 repite la lámina y no se duplica aquí. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t6-p34).

<a id="seccion-15-9"></a>
## 15.9 Transferencias: seguir el recorrido de cada GB

**[FUENTE DOCENTE]** T4 p.4, T7 pp.12 y 27 y T8 p.20 diferencian entrada y salida. La frase introductoria «entrada normalmente gratuita» no elimina cargos del componente que procesa tráfico. Asimismo, estar dentro de la misma región no implica transferencia gratuita entre todas las AZ, servicios o rutas.

| Recorrido | Qué comprobar |
|---|---|
| Entrada desde Internet | Condiciones del servicio receptor y cargos de procesamiento o conectividad |
| Salida a Internet | Volumen, tramos, franquicias y producto que entrega los datos |
| Entre regiones | Cargo de transferencia, origen y copias conservadas en destino |
| Entre AZ de una región | Tarifas regionales del servicio y excepciones específicas |
| Dentro de una AZ | Condiciones concretas, tipo de direccionamiento y componentes intermedios |
| Replicación o acceso administrado | Si existe exención y exactamente para qué operación |

**[ACTUALIZACIÓN OFICIAL]** RDS distingue transferencia RDS–EC2 en la misma AZ y replicación Multi-AZ de tráfico de aplicación entre AZ. Las dos primeras tienen tratamiento sin cargo de transferencia descrito por RDS; una aplicación EC2 en otra AZ puede incurrir en cargos del lado EC2. Las copias de snapshots entre regiones añaden transferencia y almacenamiento destino. No debe sumarse a la replicación Multi-AZ una tarifa genérica entre AZ sin leer esa excepción. [Precios RDS: transferencia](https://aws.amazon.com/rds/pricing/).

**[EXPLICACIÓN EDITORIAL]** Una arquitectura con EC2, NAT y almacenamiento puede pagar por mantener un componente, por procesar bytes y por transferirlos según destino. Son conceptos acumulables cuando corresponden, no tres nombres para el mismo cargo. Del mismo modo, enviar un archivo a una distribución y servirlo a clientes son tramos distintos: una exención en el origen no hace gratuita toda la entrega. Se documenta un diagrama de flujos y se evita contar dos veces un mismo tramo.

<a id="seccion-15-10"></a>
## 15.10 EBS y sistemas de archivos: pagar capacidad y rendimiento

**[FUENTE DOCENTE]** T7 p.12 separa volúmenes, IOPS, snapshots y transferencia. La persistencia independiente explica por qué detener EC2 no equivale a liberar su disco. El precio del volumen parte de capacidad aprovisionada, mientras una instantánea se relaciona con los datos almacenados por el mecanismo de copia.

**[ACTUALIZACIÓN OFICIAL]** En gp3 hay rendimiento básico incluido y puede aprovisionarse rendimiento adicional facturable. En gp2 las operaciones se incluyen en el precio de capacidad bajo su modelo; io2 incorpora IOPS aprovisionadas. La frase docente «SSD de uso general: incluido» necesita identificar el tipo. No se aplica a todo rendimiento de todos los SSD. [Desglose EBS](https://aws.amazon.com/ebs/pricing/).

![Factores históricos de coste EBS](/docs-aws/aws-clf-c02/bloque-4/figuras/t7_p12.jpg)

**Figura histórica — T7 p.12.** El bloque de IOPS distingue categorías antiguas, incluido almacenamiento magnético. Se utiliza para separar dimensiones; no para inferir tarifas actuales de todos los HDD/SSD. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t7-p12).

**[EXPLICACIÓN EDITORIAL]** Si una aplicación necesita poco espacio y mucha E/S, aumentar GB solo para conseguir rendimiento puede ser una elección diferente de aprovisionar rendimiento por separado. Si solo se copian archivos grandes secuencialmente, las IOPS aleatorias no describen por sí solas su necesidad. Se decide con métricas y requisitos; después se calcula coste total.

En EFS y FSx, ya explicados en el [capítulo 12](/materias/aws/aws-block-3-12/), importan modalidad, capacidad y rendimiento. No se les aplica la tarifa de un disco EBS por parecer almacenamiento. De igual forma, conservar snapshots innecesarios puede aumentar costes, pero borrarlos exige una política de retención y recuperación. El ahorro económico no convierte una copia requerida en prescindible.

<a id="seccion-15-11"></a>
## 15.11 S3: clase, solicitudes, permanencia y recuperación

**[FUENTE DOCENTE]** T7 p.27 enumera GB-mes, solicitudes y salida. PUT, COPY, POST, LIST y GET no son operaciones económicamente intercambiables. T7 p.34 añade la compensación entre precio de archivo y tiempo/coste de recuperación. La idea útil es considerar el ciclo de vida completo del dato.

![Dimensiones económicas de S3](/docs-aws/aws-clf-c02/bloque-4/figuras/t7_p27.jpg)

**Figura histórica — T7 p.27.** Se interpretan almacenamiento, solicitudes y transferencias por separado. Las exenciones dibujadas corresponden a combinaciones concretas; no a toda conexión con CloudFront o EC2. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t7-p27).

**[ACTUALIZACIÓN OFICIAL]** La siguiente comparación económica complementa la explicación técnica del Bloque III. Las permanencias son **mínimos de facturación**, no prohibiciones de borrar antes.

| Clase o grupo | Perfil económico | Precaución de selección |
|---|---|---|
| S3 Standard | Acceso frecuente; almacenamiento y solicitudes | El precio por almacenar no es toda la factura |
| Standard-IA | Acceso poco frecuente con recuperación inmediata | Recuperación y mínimo de 30 días; tamaño mínimo facturable aplicable |
| One Zone-IA | Acceso poco frecuente en una AZ | Mismos compromisos de recuperación y permanencia pertinentes, con alcance zonal |
| Intelligent-Tiering | Cambios de acceso con automatización | Evaluar monitorización, tamaño de objetos y capas opcionales de archivo |
| Glacier Instant Retrieval | Archivo con acceso inmediato | Recuperación facturable y mínimo de 90 días |
| Glacier Flexible Retrieval | Archivo con restauración previa | Modalidad/plazo de restauración y mínimo de 90 días |
| Glacier Deep Archive | Archivo de retención prolongada | Restauración más lenta y mínimo de 180 días |
| Express One Zone | Objetos con requisitos de baja latencia en una AZ | Se valora su perfil de rendimiento y alcance, no se trata como archivo barato |

Fuentes: [clases S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) y [precios, permanencias y recuperación](https://aws.amazon.com/s3/pricing/), consulta 03-11-2026. La restauración de clases de archivo puede añadir una copia temporal facturable además del archivo. Intelligent-Tiering tiene reglas propias: no se le atribuyen automáticamente los cargos de recuperación de Standard-IA.

**[EXPLICACIÓN EDITORIAL]** Una grabación conservada siete años y solicitada excepcionalmente admite una espera mayor que una imagen de una web. Para la primera, el almacenamiento de archivo puede compensar restauraciones ocasionales. Para la segunda, un pequeño ahorro por GB puede ser inferior al coste de solicitudes, recuperaciones y demora. Con muchos objetos diminutos, metadatos, tamaños mínimos y peticiones pesan más que en pocos objetos grandes. Una regla Lifecycle también puede generar operaciones de transición: mover datos continuamente no es una optimización automática.

![Comparación S3 y Glacier del material antiguo](/docs-aws/aws-clf-c02/bloque-4/figuras/t7_p34.jpg)

**Figura histórica — T7 p.34.** La matriz antigua indica objetos de 5 TB frente a archivos de 40 TB y milisegundos frente a minutos/horas. Esos límites y esa oposición no describen el catálogo moderno completo, que incluye Instant Retrieval. La figura documenta el razonamiento de intercambio entre almacenamiento y recuperación. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t7-p34).

La tabla original legible se conserva también en texto. **Todo este cuadro es histórico**, incluido el uso genérico del nombre Glacier y sus límites; no sustituye la comparación vigente anterior.

| Dimensión de T7 p.34 | S3 en la lámina | Glacier en la lámina |
|---|---|---|
| Volumen agregado de datos | Sin límite indicado | Sin límite indicado |
| Latencia media | Milisegundos | Minutos/horas |
| Tamaño máximo de elemento mostrado | 5 TB | 40 TB |
| Coste por GB-mes | Más alto, cualitativamente | Más bajo, cualitativamente |
| Operaciones facturadas citadas | PUT, COPY, POST, LIST y GET | Subida y recuperación |
| Recuperación representada | Por solicitud | Por solicitud y por GB |

Los símbolos de dinero de la captura expresan una comparación cualitativa, no tarifas numéricas. Tampoco debe interpretarse su «sin límite» agregado como ausencia de límites por objeto o condiciones del servicio.

<a id="seccion-15-12"></a>
## 15.12 RDS: la base de datos tiene varias partidas

**[FUENTE DOCENTE]** T8 pp.17–20 relaciona coste con motor, clase, tamaño/memoria, duración, número de instancias, almacenamiento, copias, E/S, despliegue y red. Una réplica adicional no es una capacidad gratuita por depender de la misma aplicación. La modalidad Multi-AZ debe estimarse según su arquitectura, sin asumir que toda disponibilidad adicional cuesta exactamente el doble.

| Partida | Qué se dimensiona | Confusión que se evita |
|---|---|---|
| Cómputo | Motor, clase, tiempo y número de recursos | Una base poco utilizada sigue pudiendo tener instancia facturable |
| Compra | On-Demand o descuento compatible | Reserved DB Instance no se rige por todas las reglas de EC2 RI |
| Almacenamiento | Capacidad y tipo | Almacenar datos no equivale a facturar sus IOPS |
| E/S y rendimiento | Operaciones o rendimiento aprovisionado según modalidad | No hay una tarifa de operación idéntica para todos los motores |
| Copias | Retención, snapshots y condiciones incluidas | Borrar la instancia no elimina necesariamente sus copias |
| Despliegue/red | Single-AZ, Multi-AZ, réplicas y recorridos | Alta disponibilidad, lectura y backup resuelven necesidades diferentes |

T8 p.19 menciona backup incluido hasta el 100 % del almacenamiento de una base activa y cargos por excedente o instancias terminadas. Se conserva como condición histórica del ejemplo; no se sustituye por «todas las copias son gratis». El alcance actual se verifica por motor y modalidad. Parar una base puede evitar horas de instancia y mantener almacenamiento, rendimiento aprovisionado y copias facturables. [Precios RDS](https://aws.amazon.com/rds/pricing/).

![Despliegue y transferencias RDS en el curso](/docs-aws/aws-clf-c02/bloque-4/figuras/t8_p20.jpg)

**Figura histórica — T8 p.20.** La separación entre E/S, despliegue y transferencia ayuda a descomponer la estimación. Las excepciones de replicación y misma AZ se distinguen del tráfico de aplicación entre zonas en 15.9. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t8-p20).

<a id="seccion-15-13"></a>
## 15.13 Free Tier: oferta gratuita, créditos y plan de cuenta

**[FUENTE DOCENTE — HISTÓRICA]** T4 p.10 dice «gratis durante un año para clientes nuevos». Era una simplificación introductoria de la oferta antigua, con límites por servicio. No significa un año de cualquier servicio sin factura y no describe todas las altas actuales.

![Free Tier en la presentación de 2022](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p10.jpg)

**Figura histórica — T4 p.10.** Se incluye para reconocer el origen de la regla antigua, que debe leerse junto con la actualización siguiente. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p10).

**[ACTUALIZACIÓN OFICIAL — 03-11-2026]** AWS distingue **Free account plan** y **Paid account plan**. La documentación describe 100 USD iniciales para nuevos clientes elegibles y hasta otros 100 mediante actividades. El plan gratuito termina a los seis meses o al consumir los créditos, lo que ocurra antes; tiene un catálogo limitado y condiciones de acceso. El plan de pago permite consumos facturables más allá de créditos o fuera de su aplicación. [Planes de cuenta](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html).

Hay que separar tres cosas: un **límite gratuito de uso** de un servicio, un **crédito monetario** con caducidad y el **estado del plan de cuenta**. Agotar una franquicia puede consumir créditos; agotar créditos en una cuenta de pago puede generar cargos. La existencia de servicios Always Free tampoco significa uso ilimitado: se mantiene la cantidad y condición de cada oferta.

**Duración del plan y caducidad del saldo son relojes distintos.** El límite de seis meses o agotamiento del crédito determina cuánto puede mantenerse el **plan gratuito** en las condiciones descritas; no determina por sí solo la caducidad de cada crédito si la cuenta pasa a pago. Convertir la cuenta tampoco reinicia automáticamente el plazo de un crédito. [Duración y conversión del plan](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html).

El contraste de la [FAQ oficial](https://aws.amazon.com/free/free-tier-faqs/) consultada el 03-11-2026 permite precisar dónde está la discrepancia:

- **Nueva experiencia de alta de octubre de 2026:** en General, «When do Free Tier credits expire?», se indican **seis meses desde la creación de la cuenta** y consulta del vencimiento en Settings Portal. Para altas anteriores al lanzamiento de esa experiencia, el apartado remite a Credits en Billing and Cost Management. La sección Advanced Features también indica seis meses para los créditos al activar esas funciones.
- **Otras vigencias publicadas:** Free Plan, «What happens to my credits when I upgrade to Paid plan?», y Earning Additional Free Tier Credits, «When do activity credits expire?», indican **doce meses desde la creación de la cuenta**. La [página de precios EBS](https://aws.amazon.com/ebs/pricing/) también conserva doce meses para utilizar los créditos y describe el uso del saldo restante tras pasar a pago.

**No se fija una regla universal de seis o doce meses.** La FAQ no delimita de manera coherente todas las cohortes y saldos; la remisión a otra pantalla para altas anteriores no demuestra, por sí sola, que toda cuenta anterior tenga doce meses. Se comprueban experiencia y fecha de alta, condiciones del crédito y vencimiento del saldo concreto. La referencia a doce meses tampoco amplía a un año la duración del plan gratuito ni garantiza que una conversión a pago prorrogue todos los créditos.

**[EXPLICACIÓN EDITORIAL]** Para un laboratorio se identifica fecha de alta, plan, servicios elegibles, saldo y vencimientos antes de crear recursos. Al terminar se revisan discos, snapshots, direcciones y suscripciones. Un aviso presupuestario ayuda a detectar gasto, pero no amplía la oferta gratuita. La documentación también describe cierre o suspensión y pérdida de acceso al finalizar el plan gratuito; conservar datos importantes exige planificar su continuidad y respaldo, sin confiar en que una cuenta cerrada siga sirviendo la aplicación.

En la nueva experiencia de alta hay proyectos y controles específicos de gasto. Sus spend limits se describen como un tipo de AWS Budgets con funciones concretas; no deben confundirse con cualquier presupuesto de solo avisos ni con la estructura clásica de AWS Organizations. [Alta nueva y proyectos](https://docs.aws.amazon.com/accounts/latest/reference/sign-in-new.html), [límites de proyecto](https://docs.aws.amazon.com/accounts/latest/reference/create-spend-limit.html). No se dan instrucciones de clics basadas en la captura de 2022.

<a id="seccion-15-14"></a>
## 15.14 Seleccionar una combinación y justificarla

**[EXPLICACIÓN EDITORIAL — casos de aplicación, sin nuevas preguntas de test]** Una tienda mantiene una carga mínima todo el día y multiplica peticiones en campañas. Primero dimensiona la base; después compara un compromiso para esa parte, On-Demand para crecimiento incierto y Spot para trabajos de catálogo que puedan reintentarse. Un compromiso para el máximo de campaña mantendría obligación de pago fuera de temporada. Si requiere capacidad en una AZ en una fecha, esa necesidad se trata expresamente mediante los mecanismos de capacidad compatibles.

Un proveedor que procesa documentos al final de cada mes conoce el calendario, pero no necesariamente necesita una RI anual. Debe comparar horas efectivas, interrupciones admisibles y coste total del compromiso. Una Scheduled RI retirada no es la respuesta actual por el mero hecho de que el trabajo tenga horario. Si los resultados tienen que entregarse en minutos, también debe incluir capacidad disponible y almacenamiento de resultados.

Por último, una entidad con licencias por núcleo físico estudia Dedicated Hosts y sus términos; no elige automáticamente un plan por el mayor porcentaje promocional. Una buena decisión deja por escrito **patrón de uso, necesidad de capacidad, elegibilidad del descuento, licencias, red y riesgo de infrautilización**. El [capítulo 16](/materias/aws/aws-block-4-16/) convierte esas decisiones en un TCO comparable y el [17](/materias/aws/aws-block-4-17/) explica cómo comprobar después lo realmente consumido.
