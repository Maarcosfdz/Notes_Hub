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

## 2.1 CAPEX y OPEX

`[FUENTE: T1 p. 18]` En un modelo tradicional, adquirir servidores, almacenamiento, red, edificio y capacidad eléctrica exige inversión anticipada, normalmente descrita como **CAPEX** (gasto de capital). La empresa paga antes de saber con exactitud cuánto utilizará el recurso y asume mantenimiento, renovación y riesgo de capacidad ociosa.

En cloud, muchos costes se consumen como **OPEX** (gasto operativo): el cliente paga por recursos y servicios usados, con una inversión inicial menor. Esto facilita probar y ajustar sin comprar primero toda la infraestructura. Sin embargo, CAPEX/OPEX no son sinónimos exactos de fijo/variable: un contrato cloud puede tener componentes comprometidos o costes estables, y un gasto operativo no siempre varía directamente con cada solicitud.

## 2.2 Economías de escala

`[FUENTE: T1 p. 19]` Un proveedor que opera infraestructura a gran escala puede repartir costes fijos entre muchos clientes y negociar capacidad a un nivel que una organización individual difícilmente alcanza. AWS puede trasladar parte de esas eficiencias a sus precios. Esto es un beneficio potencial, no una garantía de que cada carga resulte más barata: la arquitectura, el patrón de uso, la región, el soporte, las licencias y el trabajo operativo influyen en el coste total.

## 2.3 Capacidad, elasticidad y agilidad

`[FUENTE: T1 pp. 20–22]` El **sobreaprovisionamiento** mantiene capacidad para un pico que quizá nunca ocurra; durante períodos tranquilos se paga o se mantiene capacidad infrautilizada. El **infraaprovisionamiento** provoca colas, degradación o pérdida de ventas en el pico. La elasticidad permite ajustar recursos hacia arriba o abajo conforme cambia la carga. El ejemplo docente contrapone una carga habitual de 1.000 usuarios a un evento de venta que puede multiplicarla por diez.

La **escalabilidad** es la capacidad de soportar crecimiento aumentando recursos (vertical u horizontalmente); la **elasticidad** añade ajuste dinámico según demanda. **Agilidad** es la rapidez para experimentar, aprovisionar y cambiar. Son propiedades relacionadas, pero distintas. La automatización puede aplicar cambios repetibles: por ejemplo, escalar instancias ante métricas o eliminar entornos de pruebas cuando terminan.

`[FUENTE: T1 p. 21]` La nube reduce la espera ligada a adquirir hardware: en vez de un ciclo de semanas, se pueden aprovisionar recursos en minutos. Así equipos pequeños pueden experimentar y validar una idea sin comprometerse con una gran compra previa.

## 2.4 Gastos que el cliente deja de operar y alcance global

`[FUENTE: T1 pp. 22–23]` En un centro de datos propio hay que atender instalaciones, energía, refrigeración, seguridad física, sustitución de equipos y capacidad. Trasladar cargas a servicios cloud permite dedicar más tiempo y presupuesto a productos y procesos de negocio, aunque el cliente sigue gestionando arquitectura, aplicaciones, datos y configuración bajo el modelo de responsabilidad compartida.

La infraestructura global facilita servir a usuarios desde regiones más cercanas, reducir latencia y desplegar con alcance geográfico. El mapa de la presentación es histórico y no debe utilizarse como inventario actual: número, nombre y disponibilidad de regiones, AZ y servicios cambian. Consulta el mapa oficial dinámico antes de decidir una región.

## 2.5 Coste total de propiedad (TCO)

`[AMPLIACIÓN OFICIAL · tarea 1.4]` El **TCO** compara el coste total de una solución a lo largo de un período, no solo el precio de compra del servidor. Para un entorno propio incluye hardware, instalaciones, electricidad y refrigeración, conectividad, mantenimiento, licencias, personal, soporte y capacidad de reserva. Para cloud incluye consumo de servicios, transferencia, soporte, licencias, herramientas y operación que permanece en el cliente.

Una comparación útil fija el mismo alcance, período, requisitos de disponibilidad y crecimiento. Separa costes directos e indirectos, documenta supuestos de uso y distingue inversión inicial de consumo recurrente. Un cálculo ilustrativo no predice un ahorro universal: debe recalcularse con datos de uso y precios aplicables.

`[EXPLICACIÓN EDITORIAL · ejemplo didáctico]` Si una aplicación tiene 100 unidades de carga durante la mayor parte del mes y 1.000 durante dos días, comparar AWS con un centro de datos dimensionado para 1.000 unidades todo el año puede favorecer artificialmente al modelo elástico. La comparación justa incorpora el patrón temporal de ambos entornos, así como costes de datos, licencias y personal.

## 2.6 Componentes habituales de la factura

`[AMPLIACIÓN OFICIAL · AWS]` En términos generales, los principales factores que aparecen en muchos servicios son cómputo, almacenamiento y transferencia de datos saliente. El esquema no se aplica idénticamente a todos los servicios: algunos cobran por solicitudes, procesamiento, capacidad reservada, unidades de lectura, direcciones u otras métricas. Revisa la página de precios del servicio y el estimador para el caso concreto.

El modelo medido ayuda a relacionar consumo con uso, pero requiere observabilidad y atribución: etiquetas, presupuestos, informes y revisión periódica sirven para detectar recursos olvidados o picos inesperados. Cost Management incluye herramientas como Cost Explorer, Budgets e informes de uso/coste.

## 2.7 Rightsizing y optimización

`[AMPLIACIÓN OFICIAL · tarea 1.4]` **Rightsizing** consiste en ajustar el tipo o tamaño de un recurso a la carga real y al nivel de servicio requerido. Un proceso razonable es: definir requisitos; medir durante períodos representativos; revisar utilización y rendimiento; contrastar tamaños u opciones; aplicar el cambio con control; y volver a medir.

Una instancia infrautilizada puede reducirse o sustituirse, pero no conviene hacerlo mirando una sola métrica o un pico aislado. Deben considerarse memoria, CPU, red, almacenamiento, variabilidad, dependencias y margen de crecimiento. AWS Compute Optimizer puede ofrecer recomendaciones basadas en métricas, sujeto a sus requisitos y alcance. Rightsizing no es lo mismo que elasticidad: el primero optimiza la elección de recursos; la segunda ajusta capacidad al cambio de demanda.

## 2.8 Licencias: BYOL y License Included

`[AMPLIACIÓN OFICIAL · tarea 1.4]` Con **BYOL** (Bring Your Own License), el cliente aporta una licencia existente cuando sus términos permiten utilizarla en el entorno elegido. Con **License Included**, el coste de la licencia elegible está integrado en el precio del servicio o recurso. No se puede asumir que una licencia local sea transferible: importan producto, edición, métricas, fecha de compra, contrato y reglas del fabricante. AWS License Manager ayuda a gestionar licencias y cumplimiento, pero no sustituye la lectura del contrato.

| Opción | Ventaja posible | Comprobación necesaria |
|---|---|---|
| BYOL | Aprovechar derechos de licencia existentes y elegibles. | Derechos de movilidad, tipo de instancia/host, región y términos del fabricante. |
| License Included | Simplifica la adquisición y contabilización de licencias admitidas. | Qué edición cubre, límites y condiciones del servicio. |

## 2.9 Automatización y demanda

`[AMPLIACIÓN OFICIAL · tarea 1.4]` Automatizar la creación y retirada de entornos, la respuesta a métricas y el ciclo de vida de datos reduce tareas manuales y ayuda a evitar recursos sin uso. AWS CloudFormation puede describir infraestructura; EC2 Auto Scaling ajusta grupos de instancias; CloudWatch aporta métricas y alarmas; Lambda y EventBridge pueden ejecutar respuestas; las reglas de ciclo de vida de S3 pueden mover o expirar objetos.

Automatizar no significa “ahorrar siempre”: una política mal definida puede escalar de forma innecesaria, borrar datos o producir costes indirectos. Define umbrales, ventanas de observación, límites y permisos, y verifica el resultado.

## 2.10 Objetivos de examen y repaso

La tarea 1.4 del CLF-C02 incluye diferenciar costes fijos/variables, reconocer costes de un entorno local, distinguir BYOL de licencias incluidas, entender rightsizing, automatización y economías de escala. No es necesario inferir un precio sin datos suficientes.

1. ¿Por qué CAPEX/OPEX no equivale exactamente a fijo/variable?
2. ¿Cómo se distinguen escalabilidad, elasticidad y agilidad?
3. ¿Qué datos hacen que una comparación de TCO sea justa?
4. ¿Qué diferencia hay entre rightsizing y Auto Scaling?

