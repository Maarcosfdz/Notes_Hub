# 03. Ampliación oficial — Dominio 4 CLF-C02 (noviembre de 2026)

**Fecha de contraste:** 3 de noviembre de 2026. **Separación de fuentes:** todo este archivo es `[ACTUALIZACIÓN OFICIAL]` salvo los escenarios señalados `[EDITORIAL]`. No atribuirlo a las diapositivas de AWS Academy de 2022. La guía oficial denomina al dominio «Billing, Pricing, and Support»; representa un 12 % de la puntuación y agrupa tareas 4.1, 4.2 y 4.3.

Guía oficial: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html  
Historial: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html — versión 1.3 publicada 29/10/2026; AWS advierte de que las actualizaciones de guía pueden tardar aproximadamente un mes en reflejarse en el examen. Nunca prometer preguntas exactas por fecha.

## A. Objetivo 4.1 — Comparar modelos de precios de AWS

### A.1 Lógica de facturación y dimensiones de uso

No existe una única unidad de precio AWS. En un diseño, la factura puede depender de horas o segundos de instancia, duración/capacidad consumida de funciones, GB-mes de disco, rendimiento o IOPS aprovisionados, cantidad de solicitudes, datos transferidos, operaciones y software tercero. Una instancia detenida puede dejar de facturar cómputo y seguir facturando volúmenes EBS, IP públicas u otros recursos. Cada servicio publica reglas propias para las dimensiones concretas. No convertir la frase de T4 «cómputo, almacenamiento y transferencia» en lista exhaustiva de conceptos de facturación.

Para red, distinguir **entrada de datos a AWS**, **salida a Internet**, **tráfico entre regiones**, **tráfico entre AZ** y **dentro de un servicio o misma zona**. La regla general histórica sobre entrada gratuita tiene excepciones en productos y circunstancias concretas; ni «misma región» ni «mismo VPC» son garantías universales de coste cero. Ver tarifas de cada servicio y estimador de arquitectura. Explicar ejemplos sin inventar tarifas numéricas.

Referencias: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html y https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html

### A.2 On-Demand, Spot, Reserved Instances, Savings Plans

| Mecanismo | Qué se compromete / aporta | Buen caso | Limitación que debe memorizarse |
|---|---|---|---|
| EC2 On-Demand | Paga por uso, sin compromiso de duración específico | Demanda incierta, picos y proyectos iniciales | Puede ser más caro que descuentos por compromiso para uso estable; no significa ausencia de cargos asociados |
| EC2 Spot | Capacidad EC2 sobrante a precio variable, susceptible de interrupción | Batch, procesamiento distribuido con checkpoints, pruebas flexibles | AWS puede recuperar capacidad; no es opción universal para procesos críticos no recuperables |
| EC2 Reserved Instances (RI) | Compromiso de configuración y duración bajo condiciones, aplicado como beneficio de facturación | Uso estable y perfil previsible | **RI no es por definición una máquina física apartada**; la reserva de capacidad depende de modalidad y parámetros |
| Savings Plans | Compromiso de gasto de cómputo en **USD/hora** durante un plazo, con modalidades según cobertura | Uso continuo con cambios de familia/servicio compatibles | El compromiso se paga según términos, aunque no se consuma totalmente; el alcance depende del tipo de plan |
| On-Demand Capacity Reservations | Reserva capacidad EC2 en una AZ y atributos concretos | Necesidad de arrancar instancias cuando haya escasez de capacidad | Capacidad sin usar puede facturarse; reservar capacidad no equivale a recibir descuento de precio |
| Dedicated Instances | Instancias ejecutadas en hardware single-tenant según el modelo EC2 | Requisitos de aislamiento / licenciamiento admitido | No da necesariamente visibilidad ni control de host físico como Dedicated Host |
| Dedicated Hosts | Host físico dedicado identificado y administrado dentro de su modalidad | BYOL y requisitos de visibilidad/licencias por host | Se paga el host y hay restricciones de colocación/licencias |

Referencia actual: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html

Una **RI estándar** suele asociarse a condiciones de descuento y menos opciones de cambio; una **RI convertible** permite intercambios bajo reglas de conversión, a cambio de diferente flexibilidad/precio. La región, el tamaño, la familia, el tenancy, el sistema operativo, y la naturaleza regional o zonal importan; una RI regional puede tener flexibilidad de tamaño cuando las condiciones de Linux/tenancy/clase lo admiten, pero no prometer universalidad. Contrastar los detalles actuales en https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html . El pago puede ser All Upfront, Partial Upfront o No Upfront: son formas de facturación del compromiso, no tres servicios distintos.

**Compute Savings Plans** son flexibles para EC2 y uso compatible de Fargate/Lambda; **EC2 Instance Savings Plans** se ligan a una familia de instancias y región, conservando flexibilidad admitida de tamaño/OS/tenancy. La documentación de 2026 puede listar otros tipos de Savings Plans; no confundir el inventario general con lo que pide la guía al nivel CLF-C02. Ver https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html . AWS recomienda evaluar Savings Plans frente a EC2 RIs por flexibilidad, pero la guía sigue exigiendo conocer las RI.

**Atención a una modalidad retirada:** T6 p.32 contiene las Scheduled Reserved Instances históricas. AWS indica expresamente que ya no pueden comprarse. No sustituirlas por una supuesta opción de compra actual ni confundirlas con programar la fecha de adquisición de una RI convencional. Referencia oficial: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html

**Ejemplos editoriales**: (1) Servidor estable 24/7: valorar compromiso y calcular cobertura; (2) recodificación de vídeo que puede reintentarse: valorar Spot; (3) servicio nuevo sin patrón conocido: On-Demand; (4) aplicación crítica que requiere disponibilidad de capacidad en una AZ concreta: Capacity Reservation más política de precio apropiada. **No** asignar la misma solución a todos los requisitos sin comprobar resiliencia y licencias.

### A.3 Descuentos RI y Savings Plans con AWS Organizations

La cuenta de administración paga los cargos de las cuentas miembro en facturación consolidada, sujeto a los matices de seller of record. El uso agregado puede contribuir a niveles de descuento. Los beneficios de RI/Savings Plans **pueden compartirse** entre cuentas elegibles según opciones y preferencias de facturación, y las reglas admiten controles y grupos. No enseñar que compartir ocurre absolutamente siempre ni que una SCP otorga el descuento. Separar: cuentas/OU/SCP (gobierno), consolidated billing (factura) y discount-sharing settings (distribución de descuentos).

Referencias: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html y https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html

### A.4 Almacenamiento y niveles

Comparar por **GB-mes**, solicitudes, operación, IOPS/throughput, permanencia mínima, recuperación y egreso de datos. S3 Standard, Standard-IA, One Zone-IA, Intelligent-Tiering y las clases Glacier tienen perfiles distintos; **Glacier Instant Retrieval** existe y se diferencia de Flexible Retrieval y Deep Archive. EBS distingue capacidad aprovisionada y rendimiento según tipo; snapshots consumen almacenamiento facturable bajo sus condiciones. RDS puede cobrar instancia, almacenamiento, IOPS/operaciones, backups, transmisión y configuraciones de despliegue de forma particular. Hay que entender el factor de coste, no memorizar tarifas de una captura de 2022. No elegir archivo profundo para datos que se necesitan en segundos.

Referencia: https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html ; https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html

### A.5 AWS Free Tier: el cambio relevante de 2025–26

T4 p.10 refleja el **antiguo** discurso «12 meses gratuitos». AWS anunció el **16 de julio de 2025** una propuesta actualizada para cuentas nuevas: créditos iniciales (con posibilidad de créditos adicionales sujetos a actividades/condiciones), modalidad de plan de cuenta gratuita con duración y saldo máximos y servicios Always Free. Según el anuncio oficial, el plan gratuito introductorio caduca a los seis meses o al agotarse los créditos, lo que suceda antes. La elegibilidad depende de fecha, país/región y situación de la cuenta; no se debe asegurar 200 USD como saldo regalado sin condiciones a toda persona. Incluso cuando una herramienta o un servicio tiene nivel gratis, otros recursos asociados pueden generar gastos si se utiliza una cuenta de pago. En una cuenta de plan gratuito, las reglas de limitación y suspensión deben consultarse antes de confiar en ellas.

Referencias: https://aws.amazon.com/about-aws/whats-new/2025/07/aws-free-tier-credits-month-free-plan/ y https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html y https://aws.amazon.com/free/free-tier-faqs/ . La página oficial del plan describe además cierre de cuenta y pérdida de acceso cuando caduca el periodo gratuito sin una conversión adecuada; no recomendar alojar producción ni datos sin respaldo bajo esa suposición de gratuidad.

## B. Objetivo 4.2 — Facturación, presupuesto y administración de costes

### B.1 Herramientas según la pregunta empresarial

| Pregunta | Herramienta | Qué entrega | Qué no promete |
|---|---|---|---|
| ¿Qué cobrarán los servicios que quiero crear? | **AWS Pricing Calculator** | Estimación por arquitectura, cantidades, supuestos y precios | No es una factura real ni garantiza la demanda futura |
| ¿Qué se ha consumido y por qué sube? | **AWS Cost Explorer** | Tendencias, filtros, agrupaciones, comparaciones, previsión | No crea por sí solo un límite duro de gasto |
| ¿Voy camino de superar el presupuesto? | **AWS Budgets** | Presupuestos y avisos sobre valores reales o previstos; acciones compatibles opcionales | No interrumpe universal ni instantáneamente todo consumo |
| ¿Necesito cada línea de servicio y uso? | **Cost and Usage Report / AWS Data Exports** | Dataset granular sobre uso y coste para análisis y conciliación | No es un tablero visual sencillo por sí mismo |
| ¿Qué cargos se han facturado? | **Billing / Bills / Payments** | Estado de factura, pagos y cargos por cuenta | No reemplaza una previsión de arquitectura |
| ¿Cómo reparto costes por proyecto/propietario? | **Cost allocation tags / Cost Categories** | Dimensiones de imputación y agrupación | Una etiqueta técnica no basta si no se aplica y activa para informes |
| ¿Hay un aumento anómalo inesperado? | **Cost Anomaly Detection** | Detección y alertas de cambios atípicos | No detiene automáticamente un ataque o consumo indebido |
| ¿Qué ahorro técnico puedo perseguir? | **Cost Optimization Hub / recomendaciones** | Propuestas de derechos de tamaño, recursos poco usados, compromisos | Requiere comprobar impacto y dependencias antes de aplicar |

Referencias: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html ; https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-best-practices.html

**Distinción fundamental:** Cost Explorer analiza gasto ya observado y posibles previsiones; Pricing Calculator estima una solución diseñada según supuestos. Budgets controla umbrales deseados; CUR/Data Exports expone información detallada para análisis. No presentar el informe CUR como una alerta en tiempo real.

### B.2 Presupuestos: actual, previsto y control

Un presupuesto mensual de 100 unidades monetarias con aviso al 80 % es un ejemplo sencillo. El aviso basado en **gasto real** depende de lo incurrido; el basado en **previsión** estima si el gasto del periodo superará un umbral. La actualización de datos no es instantánea, y pueden llegar cargos después de acciones. La documentación también contempla presupuestos de uso y cobertura/utilización de compromisos según opciones; delimitar tipo de presupuesto y métrica. Las acciones de AWS Budgets están limitadas a mecanismos compatibles y no convierten el servicio en «corta automáticamente todos los gastos de AWS». Referencia: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-best-practices.html

### B.3 Etiquetas, organizaciones, facturas e informes

Las etiquetas pueden ser **definidas por usuario** (`proyecto`, `equipo`, `entorno`) o **generadas por AWS** según soporte. Para que aparezcan como dimensiones de imputación en ciertos informes deben activarse como cost allocation tags donde proceda. Una etiqueta IAM o de organización no otorga acceso por sí sola ni cambia el precio; ayuda a asignar gasto a centros de coste. Una partida sin etiqueta debe reconocerse como tal y administrarse.

El **CUR** y las exportaciones de datos permiten investigar líneas detalladas; pueden contener identificadores de recurso, uso, operación, AZ, cuenta e información sobre descuentos. No todo campo está presente para cada servicio ni todas las vistas son idénticas. Cost Categories pueden mapear costes a categorías empresariales. Con **facturación consolidada**, la cuenta de administración paga y observa costes agregados, mientras los miembros tienen ámbitos de visualización limitados; hay excepciones/particularidades por seller of record y configuración.

Referencias: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html ; https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html ; https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html

### B.4 TCO y optimización del uso: conexión con Bloque I

TCO suma costes directos e indirectos durante un periodo comparable: infraestructura física, edificios, energía, personal, licencias, red, seguridad y mantenimiento frente a servicios cloud, operación, soporte y migración. ROI evalúa retorno esperado de una inversión y no es un sinónimo de «ahorro TCO». El ejemplo Delaware North de T4 es **caso histórico**, con cambios organizativos y resultados de negocio, no un factor universal de descuento. El cuadro de T4 p.16 no debe usarse para deducir que toda migración reduce costes >90 %.

Los cuatro «pilares» de optimización EC2 de T6 son una herramienta docente: **rightsizing**, **elasticidad**, **modelo de compra**, **opciones de almacenamiento**. Encajan con observación de utilización, planificación y revisión de riesgos. No confundirlos con los seis pilares de Well-Architected. No recalcular el TCO desde un único precio de catálogo ni excluir transferencia, copias, soporte o impuestos en una arquitectura real.

## C. Objetivo 4.3 — Soporte técnico, recursos y socios AWS

### C.1 Planes actuales frente a la tabla de 2022

La tabla docente **Basic / Developer / Business / Enterprise** es histórica. La guía actual y la documentación de AWS Support identifican los planes **Basic, Business Support+, Enterprise Support y Unified Operations**. AWS anunció que **Developer Support, Business Support y Enterprise On-Ramp** dejan de estar soportados **el 1 de enero de 2027** en la oferta comercial correspondiente; hubo restricciones a nuevas suscripciones desde diciembre de 2025 y matices de GovCloud. En noviembre de 2026 pueden persistir contratos/planes legados en transición; no decir que jamás existieron ni que los cuatro niveles viejos son el catálogo vigente para nuevas compras.

- **Basic:** acceso básico a documentación, soporte de cuenta/facturación y recursos de salud. No presenta la misma asistencia técnica operativa que los planes superiores.
- **Business Support+:** asistencia técnica 24×7 con expertos, funciones de respuesta asistida con IA y mayor nivel de comprobaciones/herramientas. Responde a equipos con cargas y necesidades técnicas que justifican soporte.
- **Enterprise Support:** añade acompañamiento estratégico, **Technical Account Manager (TAM)** designado, casos críticos con respuesta prioritaria y prestaciones empresariales pertinentes.
- **Unified Operations:** opción superior con asistencia especializada y operación crítica en un marco más amplio. No es solo «Enterprise con otro nombre», sino una oferta con alcance particular.

**Tiempo de respuesta no es tiempo de resolución.** Nombres y plazos dependen de severidad, plan, tipo de caso y condiciones. No reproducir como actuales los 12 h/4 h/1 h/15 min de T4 p.37 sin consultar la tabla vigente.

Referencias: https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html ; https://docs.aws.amazon.com/awssupport/latest/user/support-plans-eos.html ; https://aws.amazon.com/premiumsupport/faqs/

### C.2 Recursos técnicos y cuándo acudir a cada uno

- **AWS Support Center**: abrir y seguir casos de cuenta/facturación y casos técnicos según plan y permisos. No es el mismo producto que AWS Health o un foro comunitario.
- **AWS Documentation**: detalles técnicos y configuración de servicios; **whitepapers**: orientaciones y arquitectura; **AWS Blogs**: anuncios y ejemplos que deben leerse con fecha.
- **AWS Prescriptive Guidance**: patrones y prácticas recomendadas para arquitectura, operaciones y migración; no es un servicio que ejecute automáticamente una migración.
- **AWS Knowledge Center y AWS re:Post**: artículos oficiales y conocimiento/comunidad; desde 2023 Knowledge Center está integrado en re:Post con identificación de contenido oficial. Una respuesta comunitaria no es un contrato de soporte.
- **AWS Trusted Advisor**: comprobaciones y recomendaciones según plan y alcance; no reemplaza una auditoría completa ni configura todos los servicios automáticamente.
- **AWS Health Dashboard**: eventos generales y personalizados relativos a servicios/recursos y planificación; **AWS Health API**: acceso programático condicionado por plan y permisos según documentación actual. No equiparar AWS Health con CloudWatch o Trusted Advisor.
- **AWS Trust & Safety**: canal para reportar abuso de recursos (spam, phishing, actividad maliciosa) según procedimientos; no usar los contactos de abuso como consultoría de arquitectura.
- **AWS Professional Services y Solutions Architects**: servicios y orientación profesional/arquitectónica con condiciones de contratación y disponibilidad diferentes al soporte ordinario.

AWS Health: https://docs.aws.amazon.com/health/latest/ug/ ; Support: https://docs.aws.amazon.com/awssupport/latest/user/ ; Knowledge Center/re:Post: https://aws.amazon.com/about-aws/whats-new/2023/03/aws-re-post-includes-knowledge-center-articles/ ; guía de examen en sección 4.3.

### C.3 AWS Partner Network y Marketplace

La **AWS Partner Network (APN)** engloba proveedores de software independientes (**ISV**), integradores de sistemas y empresas de consultoría/servicios, entre otras modalidades. Un ISV construye/vende software; un integrador combina tecnologías, implantación y operación para resolver necesidades del cliente; no son roles excluyentes ni sellos de cumplimiento automático. El ecosistema da acceso según elegibilidad a formación, certificación, marketing, programas comerciales, eventos y beneficios. No prometer que todos los partners reciben idénticos descuentos por volumen.

**AWS Marketplace** permite encontrar, contratar, desplegar y administrar productos de terceros de distintos modelos, incluidas suscripciones, licencias, ofertas privadas y gobierno. Su catálogo no significa que cada producto sea construido por AWS ni que pagar una suscripción incluya todo el coste de infraestructura: una AMI de tercero puede generar licencia más EC2 y red. Facturación, derechos de uso, acuerdos, suscripciones, visibilidad y control del gasto son aspectos distintos del proceso. Se relaciona con la guía 4.3 en compras/entitlements/gobierno.

Referencias: https://aws.amazon.com/partners/paths/ ; https://aws.amazon.com/marketplace/resources/faqs ; https://aws.amazon.com/marketplace/features/governance ; https://aws.amazon.com/marketplace/partners/private-offers

### C.4 Escenarios de selección (editoriales, NO test nuevo)

**Escenario 1:** una empresa debe estimar el coste de desplegar 20 servidores y 3 bases, pero aún no ejecuta nada. Utiliza Pricing Calculator y documenta horas, región y transferencias; no Cost Explorer como sustituto de demanda futura.

**Escenario 2:** la aplicación presenta un aumento inesperado en EC2 de una cuenta. Cost Explorer muestra tendencia; CUR/Data Exports permite examinar las líneas detalladas; Budgets y Anomaly Detection ayudan a advertir desviaciones. Un informe explica el coste, no soluciona automáticamente la causa técnica.

**Escenario 3:** cinco cuentas de proyectos bajo AWS Organizations quieren repartir gastos. La cuenta de administración observa facturación consolidada; cada proyecto etiqueta recursos, se activan tags para asignación y se definen reglas de reparto de compromisos si procede. SCP no es herramienta para trasladar costes automáticamente.

**Escenario 4:** un servicio productivo crítico requiere ayuda operativa y contacto de acompañamiento. Valorar Enterprise Support o un nivel superior según necesidades y contrato; Basic no equivale a ese soporte. La primera respuesta del caso no asegura resolver en ese plazo la indisponibilidad.

**Escenario 5:** un cliente quiere contratar una aplicación SaaS de un tercero mediante AWS. Marketplace permite contratación y gestión; confirmar suscripción, condiciones, coste de licencia, infraestructura y tratamiento de datos. Si necesita implantar sistemas, un integrador de APN podría ayudar; no es el mismo papel que el fabricante ISV.

## D. Avisos obligatorios para Codex

1. No memorizar precios, porcentajes de descuento, duraciones de Free Tier, nombre de plan de soporte, cuotas o límites por una diapositiva de 2022 sin comprobar fecha y fuente.
2. Distinguir **RI como descuento** frente a **reserva de capacidad**, y **Savings Plans como compromiso monetario**.
3. Distinguir **costo del recurso** frente a **precio del software de Marketplace** y coste total operacional.
4. Distinguir **Cost Explorer (observado)** / **Pricing Calculator (estimado)** / **Budgets (umbrales)** / **CUR (detalle)** / **Billing (factura)**.
5. Distinguir **cuenta de administración, miembro, facturación consolidada, descuentos compartidos y tags**.
6. Distinguir **planes de 2022** de **oferta publicada en 2026**, y primeros tiempos de respuesta de resolución.
7. Reutilizar los capítulos anteriores por enlaces y referencias sin modificar sus fuentes; evitar duplicaciones largas del TCO y del Trusted Advisor.
8. No crear ni modificar banco de tests hasta encargo posterior.
