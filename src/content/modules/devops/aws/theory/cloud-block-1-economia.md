---
id: cloud-block-1-economia
area: devops
subject: aws
group: Bloque I · Fundamentos
title: Beneficios y economía de la nube
summary: Elasticidad, escala, TCO, costes, licencias y optimización de capacidad.
icon: ◉
source: AWS Academy T1, pp. 18–23; AWS Academy CA, pp. 37–41; ampliación CLF-C02 tarea 1.4
---

# 2. Beneficios y economía de la nube

Este capítulo desarrolla el contenido docente y las ampliaciones necesarias para el dominio 1. Las figuras reproducen páginas originales, con sus notas, para que los ejemplos y diagramas conserven contexto. Los datos históricos no constituyen recomendaciones actuales de producto.

## Las seis ventajas de Cloud Computing

<a id="t1-p18"></a>

### Sustituir gastos de capital por gastos variables

`[FUENTE: T1 p. 18]`

La presentación contrapone dos modelos de gasto:

- **CAPEX (Capital Expenditure / gasto de capital):** fondos utilizados para adquirir, actualizar o mantener activos físicos, como inmuebles, instalaciones industriales y equipos.
- **OPEX (Operational Expenditure / gasto operativo):** costes que pueden ajustarse a la operación y el consumo del servicio; en el contexto cloud, se destaca que la organización puede pagar por los recursos que utiliza en lugar de hacer inversiones importantes en centros de datos y servidores antes de usarlos.

En infraestructura tradicional se realizan **inversiones en centros de datos según previsiones**; la nube permite **pagar según la cantidad consumida**, dependiendo del servicio.

**Aclaración:** la nube suele desplazar gasto hacia modelos operativos, aunque la contabilidad exacta depende de contratos, normas contables y circunstancias de la empresa.

<a id="t1-p19"></a>

### Economías de escala masivas

`[FUENTE: T1 p. 19]`

AWS combina la demanda de muchos clientes, lo que permite:

1. Agregar grandes volúmenes de utilización de infraestructura.
2. Obtener **economías de escala** mediante compras, operación y aprovechamiento eficientes.
3. Trasladar parte de estos ahorros a sus clientes mediante mejores condiciones de los servicios.

La representación gráfica incluye la secuencia **Nube AWS → Economías de escala → Ahorros para los clientes**.

<a id="t1-p20"></a>

### Evitar estimaciones fijas de capacidad

`[FUENTE: T1 p. 20]`



La diapositiva plantea tres escenarios:

- **Capacidad sobrestimada:** se compran o reservan recursos superiores a los realmente utilizados. Resultado: capacidad ociosa y coste innecesario.
- **Capacidad subestimada:** se aprovisiona menos capacidad de la necesaria. Resultado: insuficiencia de recursos ante picos de carga y posible degradación del servicio.
- **Ajuste de escala bajo demanda:** la capacidad provisionada sigue las variaciones de uso, reduciendo el exceso y atendiendo los picos cuando se dispone de mecanismos de escalado adecuados.

**La gráfica debe conservarse:** muestra una línea escalonada de demanda variable frente a la capacidad; permite explicar el valor de la elasticidad y el aprovisionamiento dinámico.

![T1 página 20: Evitar estimaciones fijas de capacidad](/study-figures/bloque-1/t1_p20.png)

*Página original conservada con sus notas para contextualizar el diagrama; material docente histórico.*

<a id="t1-p21"></a>

### Aumentar velocidad y agilidad

`[FUENTE: T1 p. 21]`

Comparación temporal propuesta:

- **Tradicional:** pueden pasar **semanas** desde que se solicita un recurso hasta que está disponible, debido a compras, aprobaciones, instalación, configuración, etc.
- **Nube:** muchos recursos pueden ponerse a disposición en **minutos** mediante aprovisionamiento programático o mediante consola.

La rapidez de aprovisionamiento permite iterar, probar diseños y poner en producción soluciones antes que con procesos de compra de hardware.

<a id="t1-p22"></a>

### Dejar de gastar dinero en la operación del CPD

`[FUENTE: T1 p. 22]`

En infraestructura tradicional, parte importante del presupuesto se dedica a:

- Equipos y hardware.
- Instalaciones.
- Suministros y utilidades (electricidad, refrigeración).
- Mantenimiento.
- Operación física del centro de datos.

El modelo cloud permite **reorientar esfuerzos e inversión** desde la operación de la infraestructura hacia la empresa, el desarrollo de productos y los clientes. No implica que desaparezcan todos los gastos operativos o las responsabilidades de administrar recursos cloud.

<a id="t1-p23"></a>

### Alcanzar escala global en minutos

`[FUENTE: T1 p. 23]`



La presentación explica que una aplicación puede desplegarse en distintas **regiones de AWS** repartidas por el mundo, con el objetivo de:

- Acercar servicios a usuarios de países y continentes diferentes.
- Reducir latencia al usar recursos próximos a los clientes.
- Mejorar la experiencia percibida.
- Simplificar el despliegue global sin construir centros de datos físicos propios en cada lugar.

**Importante:** el mapa es ilustrativo del alcance internacional. La selección de regiones reales depende del servicio, ubicación de datos, requisitos y costes.

![T1 página 23: Alcanzar escala global en minutos](/study-figures/bloque-1/t1_p23.png)

*Página original conservada con sus notas para contextualizar el diagrama; material docente histórico.*


## Desarrollo complementario oficial

`[AMPLIACIÓN OFICIAL: documentación enlazada al final de cada apartado; corpus 06]`

### Ampliación oficial: CAPEX, OPEX y costes fijos frente a variables

`[AMPLIACIÓN OFICIAL — CLF-C02, tarea 1.4]`

- **CAPEX (*Capital Expenditure*):** gasto de inversión o capital en activos que normalmente se utilizan a lo largo de varios ejercicios, como servidores, sistemas de almacenamiento, equipamiento de red o instalaciones físicas. Su coste económico puede reflejarse contablemente mediante depreciaciones o amortizaciones.
- **OPEX (*Operating Expenditure*):** gasto operativo asociado al funcionamiento normal de una organización, como determinados contratos, servicios, personal, consumo energético o servicios cloud.
- **Costes fijos:** cambian poco con el volumen de actividad dentro de un rango temporal o contractual, por ejemplo el alquiler de una sala de servidores o un contrato fijo de mantenimiento.
- **Costes variables:** dependen del consumo o volumen de uso, por ejemplo una capacidad computacional facturada por tiempo de utilización o un volumen de datos almacenados.

**Atención:** no son sinónimos exactos: `CAPEX ≠ coste fijo` y `OPEX ≠ coste variable`. Por ejemplo, una suscripción de importe fijo puede ser OPEX y un contrato de capacidad cloud a largo plazo puede comprometer gastos periódicos. Para el examen interesa sobre todo reconocer la tendencia a sustituir inversiones iniciales importantes por consumo flexible.

#### Ejemplo comparativo (cifras inventadas)

Una empresa tiene que soportar una aplicación que necesita 3 servidores la mayor parte del año y 12 en Navidad.

- **Instalaciones propias:** podría verse obligada a comprar y mantener capacidad adicional antes del pico de demanda.
- **Cloud:** podría contratar la capacidad base y añadir temporalmente recursos, siempre que la arquitectura lo permita.

**Lo que se gana:** flexibilidad y posible reducción de capacidad ociosa. **Lo que no está garantizado:** un ahorro neto, ya que también existen costes de transferencia de datos, almacenamiento, licencias, soporte, observabilidad, administración y otros servicios.

### Ampliación oficial: Coste total de propiedad (TCO)

El **Total Cost of Ownership (TCO)** es una estimación del coste total de poseer, operar y mantener una solución durante un periodo definido. No se limita al precio de compra o a la factura mensual. Se usa para comparar escenarios de infraestructura propia, alojamiento externo o nube, así como para elaborar un caso de negocio de migración.

#### Partidas de coste en infraestructura local (on-premises)

1. Compra, renovación, amortización y eventual retirada de servidores, almacenamiento y dispositivos de red.
2. Centro de datos: superficie, alquiler o edificio, alimentación eléctrica, refrigeración, redundancia energética, seguridad física.
3. Licencias de sistemas operativos, bases de datos, hipervisores, herramientas de copia de seguridad y otros programas.
4. Personal de administración, soporte, operaciones, guardias, mantenimiento, instalación y parches.
5. Contratos de mantenimiento, garantías, repuestos y actualización tecnológica.
6. Conectividad, Internet, enlaces dedicados, redes de comunicación y equipamiento asociado.
7. Sistemas de respaldo, recuperación ante desastres, cumplimiento, auditorías y pruebas de continuidad.
8. Costes del ciclo de vida y de oportunidad, como esperar semanas por nuevos servidores o mantener equipos sin utilizar.

#### Partidas de coste en AWS

1. Computación: tipo y número de recursos, tiempo de funcionamiento y modalidad de compra.
2. Almacenamiento: volumen, clase, operaciones y solicitudes, copias y retención.
3. Red: en particular transferencia de datos de salida, así como cargos concretos de determinados servicios de red.
4. Servicios administrados: bases de datos, monitorización, seguridad, balanceo, mensajería y otros recursos configurados.
5. Licencias, soporte y servicios profesionales cuando correspondan.
6. Operación y personal de plataforma: políticas de seguridad, mantenimiento de aplicaciones y de sistemas no administrados, gobierno y supervisión.
7. Costes de migración inicial y periodos de funcionamiento paralelo (*dual running*) entre las instalaciones y AWS.

**Ejemplo de comparación (didáctico):**

| Concepto anual | Local (ejemplo) | AWS (ejemplo) |
|---|---:|---:|
| Infraestructura/servicios | 28.000 € | 25.000 € |
| Electricidad, instalaciones y mantenimiento | 12.000 € | Incluido en servicios subyacentes |
| Licencias y soporte | 8.000 € | 6.000 € |
| Personal de operación asignado | 18.000 € | 10.000 € |
| **Total anual ilustrativo** | **66.000 €** | **41.000 €** |

**Los importes anteriores son ficticios.** No representan precios ni promesas de ahorro de AWS. En una comparativa real habría que ajustar el horizonte temporal, gastos de migración, facturación efectiva, impuestos, contratos existentes, crecimientos de demanda y riesgos.

**Fórmula conceptual:** `TCO = inversión atribuible al periodo + operación + mantenimiento + licencias + personal + conectividad + otros costes aplicables`.

#### TCO frente a ROI

- **TCO:** cuánto cuesta la solución durante un periodo.
- **ROI (*Return on Investment*):** relación entre beneficios netos estimados y la inversión realizada. Conceptualmente puede expresarse como `(beneficio neto atribuible / inversión) × 100 %`, dependiendo del método financiero usado.

Un cambio a AWS puede mejorar el tiempo de salida al mercado o la flexibilidad aunque no reduzca el TCO de forma inmediata. El ROI considera también los beneficios, que deben estimarse y justificarse, no darse por supuestos.

#### Recursos para evaluar costes

- **AWS Pricing Calculator:** estimar costes futuros de servicios concretos de AWS. No es por sí sola un inventario de costes de un CPD local.
- **Migration Evaluator:** ayuda a crear un caso económico a partir del entorno existente y escenarios de migración.
- **AWS Cost Explorer:** analizar gasto y uso observado, con funcionalidades de previsión; se estudia con más profundidad en el dominio 4.
- **AWS Budgets:** definir umbrales de presupuesto y avisos; no sustituye la evaluación técnica del dimensionamiento.

**Fuentes:** [TCO y principios de precios actuales](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html); [AWS Migration Evaluator](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-tools/business-case-migration-evaluator.html); T4 `isT4.pdf`, p. 13–17, como fuente docente complementaria.

### Ampliación oficial: Las tres familias generales de costes en AWS

`[AMPLIACIÓN OFICIAL — AWS]`

AWS explica tres factores básicos de costes (dependiendo siempre del servicio y modelo):

1. **Cómputo:** recursos y duración de ejecución, o capacidad/procesamiento consumido según servicio.
2. **Almacenamiento:** cantidad almacenada, categoría, acceso y operaciones según servicio.
3. **Transferencia de datos:** especialmente tráfico de salida a Internet; existen excepciones, precios específicos por ubicación y cargos de redes o transferencias entre zonas o regiones.

Es frecuente que la **entrada de datos** no tenga un cargo directo y que la **salida** se cobre, pero no hay una regla universal «todo el tráfico interno es gratis». Debe comprobarse el modelo específico.

En CLF-C02, la **comprensión económica general** corresponde al dominio 1; la selección detallada de modelos de pago, herramientas de facturación y soporte corresponde principalmente al dominio 4.

### Ampliación oficial: Rightsizing o dimensionamiento correcto

`[AMPLIACIÓN OFICIAL — CLF-C02, tarea 1.4]`

**Rightsizing** significa ajustar la capacidad de un recurso al nivel de rendimiento realmente necesario para la carga de trabajo. Se trata de evitar pagar por CPU, memoria, almacenamiento o rendimiento no utilizados, sin reducir tanto la capacidad que se comprometa el servicio.

#### Proceso típico

1. Medir el uso real y los picos representativos (CPU, memoria, red, IOPS, latencia y demanda).
2. Evaluar si el recurso está sobredimensionado, infrautilizado o necesita una configuración diferente.
3. Seleccionar familia, tamaño o servicio más apropiado; considerar margen para picos, crecimiento y requisitos de rendimiento.
4. Aplicar y probar el cambio en condiciones seguras.
5. Volver a medir y repetir periódicamente.

**Ejemplo:** una instancia EC2 diseñada inicialmente con 16 vCPU opera de forma estable usando alrededor de 2 vCPU en sus periodos relevantes. Si sus necesidades de memoria, red y picos lo permiten, podría convenir un tamaño inferior. No basta con mirar solamente la media de CPU.

#### Diferencia entre dimensionamiento correcto, elasticidad y autoescalado

| Concepto | Acción principal | Ejemplo |
|---|---|---|
| **Rightsizing** | Elegir capacidad adecuada por recurso | Cambiar una instancia demasiado grande por una menor |
| **Elasticidad** | Ajustar capacidad cuando varía la demanda | Reducir recursos durante la noche |
| **Auto Scaling** | Automatizar la variación de capacidad bajo condiciones definidas | Lanzar más instancias según una política de uso |
| **Optimización del modelo de compra** | Elegir condiciones de precio apropiadas | Evaluar ahorro con compromisos para uso predecible |

**AWS Compute Optimizer** analiza configuración y métricas de utilización para recomendar ajustes de capacidad en diversos recursos. **Trusted Advisor** también puede identificar determinadas oportunidades de optimización, pero no es lo mismo que Compute Optimizer. Ninguna recomendación evita la necesidad de comprobar requisitos y efectos sobre la aplicación.

**Fuente:** [AWS Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html).

### Ampliación oficial: Licencias: BYOL frente a License Included

`[AMPLIACIÓN OFICIAL — CLF-C02, tarea 1.4]`

Una aplicación migrada a AWS puede seguir necesitando licencias comerciales. Esto sucede, por ejemplo, con determinados sistemas operativos, gestores de bases de datos y herramientas de software empresarial.

#### Bring Your Own License (BYOL)

En **BYOL** la organización lleva a AWS licencias de software adquiridas previamente o cubiertas por un acuerdo existente. Puede resultar interesante cuando ya se poseen licencias válidas y su reutilización está permitida.

**Ventajas potenciales:** aprovechar inversión existente, mantener cierta flexibilidad contractual y evitar comprar determinadas licencias nuevas. **Limitaciones:** hay que verificar las condiciones del fabricante, elegibilidad de producto y versión, restricciones por servidor o núcleo, movilidad, tenancy, auditoría, cobertura de soporte y cumplimiento.

#### License Included (licencia incluida)

En **License Included** el precio del producto o instancia incluye el uso de una licencia provista por AWS para el software correspondiente. Es una opción conveniente cuando no se cuenta con licencias previas elegibles o se prefiere simplificar la adquisición y el seguimiento de algunas licencias.

**Ventajas potenciales:** estructura de precio más sencilla, menor necesidad de aportar licencias propias y aprovisionamiento más directo. **Limitaciones:** el coste de licencia forma parte de la tarifa aplicable y la disponibilidad depende del software, servicio y condiciones comerciales.

| Aspecto | BYOL | License Included |
|---|---|---|
| Procedencia | Licencia del cliente | Licencia provista a través del servicio AWS |
| Necesidad de licencias previas | Normalmente sí | No para la licencia incluida |
| Coste de software | Contrato/licencia externa aplicable | Incorporado al modelo de precio del servicio |
| Cumplimiento | El cliente debe comprobar sus derechos y condiciones | AWS simplifica el licenciamiento del producto incluido; persisten obligaciones del cliente sobre el uso |
| Caso típico | Licencias empresariales elegibles existentes | EC2 Windows Server o determinados motores de RDS con opción de licencia incluida |

**Ejemplo:** una empresa puede valorar Amazon RDS para Microsoft SQL Server con licencia incluida, frente a determinadas alternativas de operación en EC2 con BYOL si sus licencias cumplen los requisitos. **No puede asumirse que toda licencia Microsoft sea transferible sin condiciones:** las opciones y las restricciones de Windows Server y SQL Server difieren.

**AWS License Manager** permite organizar y controlar determinadas condiciones de licenciamiento y apoyar la conformidad. No convierte en válida una licencia que el fabricante no permita utilizar en esa configuración.

**Fuente:** [Microsoft Licensing on AWS](https://aws.amazon.com/windows/resources/licensing/); [Microsoft Licensing FAQ de AWS](https://aws.amazon.com/windows/faq/).

### Ampliación oficial: Economías de escala y automatización

Las **economías de escala** surgen cuando una operación amplia puede distribuir determinados costes fijos entre un mayor volumen de actividad, negociar capacidad y aprovechar procesos de operación más eficientes. En cloud esto contribuye a que los proveedores ofrezcan capacidad bajo demanda sin que cada cliente tenga que construir su propio centro de datos.

La **automatización** puede reducir trabajo manual, errores y tiempos de aprovisionamiento. Ejemplos:

- Aprovisionar infraestructura de forma repetible con **AWS CloudFormation** (Infrastructure as Code).
- Usar políticas para añadir o eliminar recursos con **Amazon EC2 Auto Scaling**.
- Ejecutar tareas programadas o reacciones a eventos con **AWS Lambda** y **Amazon EventBridge**.
- Monitorizar condiciones con **Amazon CloudWatch** y generar alarmas.
- Aplicar reglas automáticas de ciclo de vida para trasladar o retirar objetos de S3.

**Precaución:** automatizar recursos mal configurados también puede multiplicar costes o incidentes. Automatización, supervisión y control deben combinarse.

---
