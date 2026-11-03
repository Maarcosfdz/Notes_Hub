---
id: "aws-block-4-16"
area: "devops"
subject: "aws"
group: "Bloque IV · Facturación, precios y soporte"
summary: "Capítulo 16 del Bloque 4: apuntes completos, figuras y referencias."
source: "AWS Academy y ampliación oficial; aws-clf-c02/bloque-4/16_tco_y_optimizacion_de_costes.md"
title: "16. TCO y optimización de costes"
---
# 16. TCO y optimización de costes

[Índice](/docs-aws/aws-clf-c02/bloque-4/00_indice.md) · [Modelos de precios](/materias/aws/aws-block-4-15/) · [Herramientas de seguimiento](/materias/aws/aws-block-4-17/).

La [economía del Bloque I](/materias/aws/cloud-block-1-economia/) explica CAPEX, OPEX, agilidad y economías de escala. Este capítulo utiliza esa base para construir una comparación económica, interpretar los ejemplos originales y aplicar los cuatro pilares docentes de optimización EC2. Las cifras de AWS Academy se conservan como **históricas**, mientras los cálculos inventados para aprender se marcan como editoriales. Ningún ejemplo constituye una oferta comercial ni una garantía de ahorro.

<a id="seccion-16-1"></a>
## 16.1 Qué compara realmente el coste total de propiedad

**[FUENTE DOCENTE]** T4 pp.13–14 define TCO como estimación de costes directos e indirectos de un producto o sistema a lo largo de su vida. Permite comparar un entorno completo o una carga específica y preparar un caso empresarial. La infraestructura tradicional incorpora equipos, administración, contratos y optimización; AWS ofrece aprovisionamiento de autoservicio, ajuste de capacidad y una distribución diferente de los pagos.

**[EXPLICACIÓN EDITORIAL]** El objeto de comparación debe ser el mismo resultado de servicio. No es correcto comparar una sala con redundancia, copia externa y personal de guardia contra una sola instancia sin backup. Tampoco lo es mantener sobredimensionado el sistema local y estimar AWS como si su carga estuviera optimizada desde el primer día sin coste de adaptación. Se fijan usuarios, rendimiento, disponibilidad, recuperación y periodo antes de sumar dinero.

Una comparación útil explicita la situación de partida, el diseño objetivo y las transiciones. Si el horizonte es de tres años, se consideran compras y renovaciones dentro de ese horizonte, pagos periódicos, gastos de migración y, cuando corresponda, valor residual. TCO no equivale a mirar el saldo de la tarjeta este mes. Un pago inicial puede dar lugar a costes distribuidos contablemente; el calendario del dinero y el consumo económico se presentan con coherencia.

### TCO, ROI y flujo de caja

El **TCO** responde cuánto cuesta disponer y operar el sistema. El **ROI** relaciona el beneficio neto de una inversión con la inversión realizada bajo una definición explícita. El **flujo de caja** sitúa entradas y salidas de dinero en el tiempo. Una iniciativa puede reducir TCO y tardar en recuperar la inversión inicial de migración; otra puede mejorar ventas o velocidad de lanzamiento sin producir la menor factura de infraestructura.

**[EXPLICACIÓN EDITORIAL — ejemplo simplificado]** Si un proyecto exige 20.000 unidades iniciales y genera un beneficio acumulado atribuible de 30.000 antes de descontar esa inversión, el beneficio neto sería 10.000 y el ROI simple, 50 %. No se deben sumar otra vez los mismos 20.000 como operación ni llamar ROI a una reducción porcentual de factura. En decisiones reales también importan fechas, riesgos y criterios financieros que exceden el nivel del examen.

<a id="seccion-16-2"></a>
## 16.2 Reconstruir los costes visibles y los indirectos

**[FUENTE DOCENTE]** T4 p.15 agrupa servidores, almacenamiento, red y mano de obra. El contenido sustantivo de la tabla se reconstruye aquí para poder estudiarlo sin depender de la imagen.

| Familia docente | Componentes de infraestructura y software | Administración e instalaciones |
|---|---|---|
| Servidores | Servidor, chasis/rack, unidades de distribución de energía PDU, conmutadores superiores de rack TOR, mantenimiento; SO y virtualización | Espacio, electricidad y refrigeración; tareas operativas asociadas |
| Almacenamiento | Discos, red de almacenamiento SAN, conmutadores Fibre Channel FC | Administración del almacenamiento, espacio, energía y refrigeración |
| Red | Conmutadores LAN, ancho de banda y balanceadores | Administración de red e instalaciones |
| Mano de obra TI | Trabajo de administración de servidores | Personal y tiempo dedicado a operar el entorno |

![Componentes docentes del TCO de un CPD](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p15.jpg)

**Figura histórica — T4 p.15.** La matriz hace visibles costes distintos de comprar servidores. Repetir «instalaciones» en varias filas exige repartir el gasto real, no contarlo completo en cada una. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p15).

**[EXPLICACIÓN EDITORIAL]** Un coste directo puede asignarse a una carga, como su licencia o servidor. Un coste indirecto se comparte, como refrigeración o un equipo de operaciones. La clasificación depende del modelo de imputación: un enlace exclusivo de un proyecto es distinto de una salida común para todo el CPD. Se declara cómo se reparten estos gastos para que la comparación sea reproducible.

En el lado cloud se incluyen servicios consumidos, almacenamiento, copias, solicitudes, transferencias, rendimiento contratado, licencias, soporte, herramientas y trabajo del equipo. Migrar elimina determinadas tareas físicas, pero siguen existiendo gobierno, permisos, recuperación, revisión de costes y gestión de datos. Según la elección IaaS o administrada, cambia el reparto de responsabilidades y trabajo, no desaparece toda operación.

También hay costes de transición: inventario, adaptación, pruebas, formación, transferencia inicial y funcionamiento paralelo. Mantener temporalmente ambos entornos es razonable durante una migración; excluir ese periodo del presupuesto puede producir una sorpresa aunque el estado final sea más económico. A la inversa, reutilizar personal en actividades de mayor valor es un beneficio operativo, pero no debe declararse como ahorro de caja si el gasto de personal no se reduce.

<a id="seccion-16-3"></a>
## 16.3 Leer críticamente el ejemplo TCO de tres años

**[FUENTE DOCENTE — HISTÓRICA]** T4 p.16 presenta esta comparación. Se conservan los valores visibles, incluidos guiones y una pequeña diferencia aritmética; no se completan las partidas ausentes con cifras inventadas.

| Concepto | Instalaciones, USD | AWS, USD |
|---|---:|---:|
| Servidores | 91.922 | 2.547 |
| Almacenamiento | 67.840 | 4.963 |
| Red | 7.660 | Guion en la fuente |
| Mano de obra TI | Guion en la fuente | Guion en la fuente |
| **Total mostrado** | **167.422** | **7.509** |

El pie menciona soporte empresarial y una EC2 RI Partial Upfront de tres años. El título habla de ahorro de hasta el 96 % anual y la lámina muestra 159.913 USD de ahorro total en tres años. Son afirmaciones y supuestos del ejemplo docente, no una expectativa para una cuenta de estudiante.

![Comparación TCO histórica de tres años](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p16.jpg)

**Figura histórica — T4 p.16.** Los totales comparados son muy asimétricos. El gráfico acompaña la tabla y no sustituye el análisis de sus supuestos. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p16).

**[EXPLICACIÓN EDITORIAL — comprobación]** 167.422 − 7.509 = 159.913: la resta del ahorro coincide con los totales. En cambio, las dos partidas numéricas AWS suman 2.547 + 4.963 = **7.510**, un dólar más que el total impreso. No se afirma conocer si procede de redondeos o del material de origen; se registra la diferencia. El porcentaje calculado sobre los totales es aproximadamente 95,5 %, compatible con el redondeo promocional a 96 %, pero no demuestra una reducción anual idéntica.

Un guion no equivale automáticamente a coste cero. Antes de usar ese cuadro como caso empresarial habría que saber qué cubre cada partida, qué recursos y horas se estimaron, qué trabajo se excluyó y cómo se mantienen disponibilidad y rendimiento. La falta de esos supuestos impide reproducirlo como una cotización vigente. Precisamente por eso un TCO bien realizado declara cantidades y alcance, en lugar de trasladar un porcentaje llamativo a toda migración.

<a id="seccion-16-4"></a>
## 16.4 De una arquitectura a una estimación con Pricing Calculator

**[FUENTE DOCENTE]** T4 p.17 propone modelar antes de construir, explorar precios y cálculos, comparar configuraciones y agrupar servicios. T4 p.18 muestra importes iniciales, mensuales y de los primeros doce meses. Es una estimación basada en entradas; llamarla «presupuesto» en la captura no la convierte en un objeto AWS Budgets.

**[ACTUALIZACIÓN OFICIAL]** La [calculadora pública](https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html) permite organizar grupos, guardar enlaces y exportar resultados. No incluye impuestos aplicables y calcula solo lo introducido. Una configuración omitida no se descubre automáticamente por aparecer implícita en un dibujo. Para análisis de consumo real se utiliza Cost Explorer, como explica el capítulo 17.

**[EXPLICACIÓN EDITORIAL]** El procedimiento de estimación es razonado, no una secuencia de clics heredada de una consola antigua:

1. Definir entorno, región, disponibilidad y usuarios. Separar producción, pruebas y recuperación.
2. Enumerar recursos y flujos: instancias o funciones, base de datos, almacenamiento, copias, balanceadores y red.
3. Introducir cantidades y horas realistas; declarar la demanda que las justifica.
4. Comparar modalidades de compra con sus pagos iniciales y compromisos.
5. Variar las entradas inciertas: crecimiento, solicitudes, retención y salida de datos.
6. Completar costes externos y de operación para construir el TCO.

La estimación se versiona con fecha y supuestos. Si posteriormente se cambia la región o se añade una réplica, se actualiza la configuración y no solo el total escrito en un informe.

### Interpretar la captura original sin convertir sus precios en actuales

| Elemento visible en T4 p.18 | Valor histórico |
|---|---:|
| S3, 100 GB mensuales en Ohio | 2,37 USD/mes |
| Estimación EC2 con configuración indicada | 71,54 USD/mes |
| Total mensual mostrado | 73,91 USD |
| Anticipo mostrado | 0,00 USD |
| Primeros doce meses | 886,92 USD |

La captura EC2 indica Linux, una instancia, EC2 Instance Savings Plans a un año sin anticipo y un volumen gp2 de 100 GB. Por tanto, **Savings Plans ya aparece en esta captura docente**, aunque no tenga desarrollo suficiente en el corpus antiguo. La suma mensual y la multiplicación por doce son coherentes. No se deduce que ese plan o esa instancia cuesten hoy lo mismo, ni que el resto de una arquitectura esté incluido.

![Leer anticipos y mensualidades en Calculator](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p18.jpg)

**Figura histórica — T4 p.18.** La estructura permite distinguir primer año, adelanto y mensualidad. Los nombres y valores pertenecen a la captura, no son una configuración desplegada durante este trabajo. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p18).

<a id="seccion-16-5"></a>
## 16.5 Caso Delaware North: decisiones, resultados y límites

**[FUENTE DOCENTE — HISTÓRICA]** Las seis láminas T4 pp.19–24 forman un único caso progresivo. Se integran aquí sin repetir las partes que reaparecen en sucesivas páginas. La empresa se describe con más de 200 sedes, 500 millones de clientes y 3.000 millones USD de ingresos anuales. Son magnitudes del relato original; no se presentan como datos empresariales actualizados en 2026.

El problema reunía rapidez para implantar soluciones y renovación continua de equipos obsoletos. No era únicamente encontrar un servidor con menor precio. Los criterios incluían atender cargas diversas, mejorar procesos, reducir trabajo pesado —como parcheado allí donde la modalidad lo permita— y obtener retorno positivo de inversión. La plataforma debía permitir que el crecimiento empresarial no dependiera de renovar físicamente un CPD para cada necesidad.

La solución descrita trasladó el centro de datos y casi todas las aplicaciones a AWS. La lámina informa de retirar **205 servidores, un 90 %**, y emplear RI EC2 de tres años. Estas dos cifras expresan reducción de servidores del caso y duración de compromiso, respectivamente. No se multiplican para inventar un ahorro ni se interpreta el 90 % como proporción universal de reducción de coste. Una migración con cargas diferentes puede justificar otros tamaños, servicios y compras.

![Flujos de caja del caso Delaware North](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p23.jpg)

**Figura histórica — T4 p.23.** El gráfico compara 2015–2019 y menciona RI de tres años más renovación. Sus barras permiten apreciar calendarios de desembolso; no se reconstruyen importes exactos a partir de alturas sin etiqueta. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p23).

T4 p.24 agrupa resultados en optimización de recursos, rapidez de comercialización y eficiencia operativa. La primera incluye cumplimiento y seguridad robustos, mejora de recuperación ante desastres y capacidad. La segunda cita aprovisionar nuevas empresas en un día y lanzar un servicio en minutos. La tercera recoge reducción y optimización continuas de costes. El objetivo empresarial superior era crecimiento, negocio 24/7 y eficiencia.

![Resultados operativos del caso histórico](/docs-aws/aws-clf-c02/bloque-4/figuras/t4_p24.jpg)

**Figura histórica — T4 p.24.** Los tiempos de lanzamiento son resultados narrados del caso, no compromisos de SLA para cualquier aplicación. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t4-p24).

**[EXPLICACIÓN EDITORIAL]** El aprendizaje es unir coste y capacidad organizativa: medir qué trabajo deja de hacerse, cuánto tarda un despliegue y cómo cambia la recuperación. Una RI puede contribuir a una factura menor para una base estable; el autoservicio puede reducir espera; una arquitectura resiliente puede mejorar continuidad. Son causas diferentes que deben medirse por separado. Repetir las cifras sin esos mecanismos no explica por qué funcionó la decisión.

<a id="seccion-16-6"></a>
## 16.6 Los cuatro pilares docentes de optimización EC2

**[FUENTE DOCENTE]** T6 pp.36–40 físicas organiza la mejora en dimensionamiento, elasticidad, modelo de precio y almacenamiento. No son los seis pilares Well-Architected; constituyen una guía de actuación económica centrada en EC2. Cada uno cambia una variable distinta y los cuatro pueden combinarse.

![Cuatro pilares económicos del curso](/docs-aws/aws-clf-c02/bloque-4/figuras/t6_p36.jpg)

**Figura histórica — T6 p.36 física, rótulo impreso 35.** La matriz final usa el nombre del JPG para evitar desplazar citas por la repetición de la página anterior. [Fuente](/docs-aws/aws-clf-c02/bloque-4/fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md#t6-p36).

### Dimensionamiento adecuado: elegir recursos que cumplan la necesidad

T6 p.37 pide observar CPU, memoria, almacenamiento y red, elegir familia y tamaño y utilizar métricas CloudWatch. El consejo «tamaño correcto, luego reserve» evita comprometer una ineficiencia. Una media baja de CPU, por sí sola, no demuestra que pueda reducirse memoria o capacidad para picos. Se revisan periodos representativos y restricciones del servicio.

**[EXPLICACIÓN EDITORIAL]** Un servidor utiliza poca CPU, pero mantiene una caché grande en memoria. Reducirlo por CPU puede aumentar fallos y consultas a base de datos. Otro presenta CPU alta solo durante un proceso nocturno: quizá conviene optimizar ese trabajo o escalar por horario. El ahorro debe mantener los requisitos funcionales. Tras el cambio se comparan latencia, errores y uso, y se conserva una forma de revertir.

**[ACTUALIZACIÓN OFICIAL]** Las recomendaciones de rightsizing y Cost Optimization Hub ayudan a localizar oportunidades, no sustituyen la validación de la aplicación. Hub consolida y prioriza propuestas y considera descuentos, evitando sumar ahorros incompatibles sobre el mismo recurso. [Recomendaciones de tamaño](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html), [Cost Optimization Hub](https://docs.aws.amazon.com/cost-management/latest/userguide/cost-optimization-hub.html).

### Elasticidad: consumir durante los periodos necesarios

T6 p.38 propone detener o hibernar instancias compatibles en periodos inactivos y escalar según tiempo o utilización. Un laboratorio de lunes a viernes no necesita necesariamente cómputo el fin de semana. Una aplicación pública sí necesita su capacidad mínima y ajustar los picos sin degradar el servicio.

**[EXPLICACIÓN EDITORIAL — cálculo de horas]** Un entorno que funciona 8 horas durante 22 días consume 176 horas de ejecución en ese calendario. Si antes funcionaba 24 horas durante 30 días, eran 720. La diferencia es 544 horas de cómputo, no un porcentaje idéntico de toda la factura. EBS, snapshots, IP y otros recursos pueden permanecer, y un compromiso previamente contratado puede seguir pagándose. Se compara la factura completa antes y después.

La hibernación tiene compatibilidades y mantiene estado en almacenamiento; no se aplica a toda instancia. El escalado automático tampoco sabe por sí solo el presupuesto del negocio: ejecuta políticas. Una política mal definida puede mantener una cantidad mayor que la necesaria. Las métricas, el mínimo seguro y el comportamiento ante fallo forman parte del diseño.

### Modelo de precios: comprometer la base y conservar flexibilidad

T6 p.39 recomienda combinar On-Demand, Spot y reservas y considerar Lambda cuando corresponda. La decisión se desarrolla en el capítulo 15. La parte estable se evalúa para descuentos, las necesidades inciertas para flexibilidad y los trabajos recuperables para capacidad interrumpible.

**[EXPLICACIÓN EDITORIAL]** Un compromiso excesivo puede ocultar el ahorro de apagar máquinas; un compromiso demasiado corto o pequeño puede dejar mucho uso elegible a tarifa ordinaria. Se revisan utilización y cobertura a lo largo del tiempo. Serverless tampoco es una garantía de menor coste: duración, memoria, solicitudes, concurrencia y servicios auxiliares influyen. Reorganizar una aplicación solo por cambiar el nombre del modelo no sustituye una estimación.

### Almacenamiento: adecuar datos, rendimiento y retención

T6 p.40 propone revisar tamaño/tipo de EBS, snapshots innecesarios y uso de S3/Lifecycle. La comparación histórica st1 frente a gp2 como «la mitad» es del curso, no una relación de precio vigente universal. La alternativa debe satisfacer acceso, latencia, recuperación y disponibilidad.

**[ACTUALIZACIÓN OFICIAL]** Reducir tamaño económico no significa reducir directamente un volumen EBS existente: Elastic Volumes permite ampliación, no encogimiento en el mismo volumen. Para pasar a menor capacidad se planifica crear otro volumen y migrar los datos con validación de sistema de archivos y aplicación. [Límites de Elastic Volumes](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-modify-volume.html).

**[EXPLICACIÓN EDITORIAL]** Un snapshot que cumple una obligación de recuperación no es «inútil» porque no se consulte. Una clase de archivo barata no sirve para datos necesarios inmediatamente. Una transición temprana puede activar costes de recuperación, permanencia mínima o solicitudes. Se optimiza la política del dato, no únicamente el precio visible por GB.

<a id="seccion-16-7"></a>
## 16.7 Construir un TCO explicable y sensible a cambios

**[EXPLICACIÓN EDITORIAL — escenario ficticio]** Un equipo compara mantener un sistema local o migrarlo. Usa tres años, mismo número de usuarios y un nivel de recuperación equivalente. En lugar de una cifra final aislada, prepara este modelo:

| Partida del escenario | Instalaciones, unidades | AWS, unidades |
|---|---:|---:|
| Equipos/licencias iniciales o adaptación/migración | 24.000 | 8.000 |
| Operación anual durante tres años | 12.000 × 3 | 11.000 × 3 |
| Retirada y transición final | 1.000 | 1.000 |
| **Total simplificado** | **61.000** | **42.000** |

El ahorro del escenario es 19.000 unidades, aproximadamente 31,1 % del coste local. Es una demostración aritmética, no una tarifa de mercado. Los 11.000 anuales AWS deben contener las dimensiones y el trabajo incluidos; no pueden ser solo EC2 si el lado local incluye toda la operación. Tampoco se amortizan otra vez los equipos si su compra ya está contada como salida en ese mismo modelo.

Ahora se prueba sensibilidad: si tráfico o retención elevan la operación AWS a 15.000 anuales, el total sería 54.000 y el ahorro se reduciría a 7.000. Si el sistema local necesita renovación imprevista, cambia su lado de la comparación. El modelo explica qué variables mueven la conclusión y qué datos hay que medir mejor. Una cifra sin rango puede parecer más precisa y ser menos útil.

<a id="seccion-16-8"></a>
## 16.8 Mantener el ahorro después de la decisión

**[EXPLICACIÓN EDITORIAL]** La optimización es un ciclo: inventariar, asignar responsable, medir, proponer, validar, aplicar y comprobar. Las recomendaciones necesitan contexto de negocio. Un volumen sin conexión puede ser residuo de pruebas o una pieza de recuperación; se investiga antes de borrarlo. Un aumento de gasto puede corresponder a crecimiento rentable, a un error de configuración o a una suscripción olvidada.

La medida útil puede ser coste por cliente, pedido o trabajo procesado, además de importe mensual. Si una campaña duplica ventas con un aumento menor de infraestructura, el total sube y la eficiencia unitaria mejora. Si el tráfico se mantiene y los costes crecen, conviene revisar horas, recursos, rutas y licencias. Este análisis pertenece al gobierno económico, no únicamente a la selección inicial de instancias.

Los [presupuestos, etiquetas, informes y facturación consolidada del capítulo 17](/materias/aws/aws-block-4-17/) permiten cerrar ese ciclo con datos. El soporte del capítulo 18 también forma parte del TCO: elegir la menor cuota sin valorar criticidad puede dejar una necesidad operativa sin cubrir. El objetivo es sostener un servicio adecuado con un coste entendido y revisable.
