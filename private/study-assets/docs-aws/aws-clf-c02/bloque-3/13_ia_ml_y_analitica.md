---
id: technology-block-3-13
area: devops
subject: aws
group: Bloque III · Tecnología y servicios
title: "13. Inteligencia artificial, machine learning y análisis de datos"
summary: "Desarrollo didáctico del dominio 3: capítulo 13."
source: "AWS Academy T1, T2, T5–T9; ampliación oficial dominio 3"
---

# 13. Inteligencia artificial, machine learning y análisis de datos

Este capítulo desarrolla el objetivo 3.7. No tiene un conjunto equivalente de diapositivas en T5–T9: procede de la ampliación oficial del paquete y del contraste con documentación AWS. Redshift sí aparece en T8 y se conecta aquí con el resto del flujo analítico. Las situaciones descritas son explicaciones editoriales; no se atribuyen a ejercicios originales del curso.

La pregunta de examen suele presentar una necesidad: extraer datos de facturas, convertir voz en texto, construir un bot, consultar archivos o visualizar ventas. Para seleccionar un servicio hay que reconocer la tarea y el tipo de entrada y salida. No es necesario entrenar un modelo para explicar qué resuelve, pero mencionar una sigla sin relacionarla con ese trabajo resulta insuficiente.

<a id="seccion-13-1"></a>

## 13.1 Modelos propios, APIs preparadas y analítica

**Machine learning**, ML, utiliza modelos que aprenden patrones a partir de datos para realizar tareas sobre casos nuevos. El **entrenamiento** ajusta un modelo; la **inferencia** lo utiliza para producir una predicción o resultado. Son etapas diferentes y pueden requerir recursos distintos. Obtener una predicción mediante una API no significa que el cliente esté entrenando desde cero un modelo para cada llamada.

Una **API de IA preparada** ofrece una capacidad específica, como sintetizar voz o detectar texto en un documento. El equipo puede integrarla sin construir todo el modelo, pero debe elegir entradas adecuadas, evaluar resultados y gestionar permisos y datos. Un servicio para desarrollar modelos propios ofrece más flexibilidad junto con más decisiones sobre preparación, entrenamiento, evaluación y despliegue.

La **analítica** organiza, transforma y consulta información para obtener conclusiones. Puede utilizar ML, pero no toda consulta SQL o panel es una tarea de entrenamiento. Una empresa puede preparar registros con Glue, consultarlos con Athena y visualizarlos sin crear un modelo predictivo propio. Tampoco basta con aplicar IA a datos mal definidos para que el resultado sea fiable.

Para aprender a seleccionar, escribe el flujo de datos: entrada, transformación, salida y consumidor. Después pregunta si se necesita extraer, interpretar, traducir, generar, consultar o presentar. Esos verbos separan servicios que comparten la etiqueta «inteligencia artificial» pero cumplen funciones distintas.

<a id="seccion-13-2"></a>

## 13.2 SageMaker AI y el ciclo de vida de ML

**Amazon SageMaker AI** proporciona herramientas administradas para desarrollar, entrenar y desplegar modelos. El equipo prepara datos, elige un enfoque o algoritmo, realiza entrenamiento y evaluación y utiliza el modelo en un entorno de inferencia compatible. No se trata simplemente de un servicio que devuelve una traducción preparada ni de una base de datos para almacenar cualquier tabla.

**Escenario editorial:** una empresa quiere predecir una variable propia a partir de registros históricos y necesita controlar el entrenamiento y la evaluación de su modelo. Puede valorar SageMaker AI. Si lo que necesita es convertir audio hablado a texto mediante una capacidad preparada, Transcribe permite abordar directamente esa tarea sin construir el reconocedor completo.

La administración de infraestructura no decide si los datos representan a la población, si existe información incorrecta o si el criterio de evaluación es válido. La organización mantiene responsabilidad sobre uso, calidad y acceso a datos y resultados. Debe comprobar que el rendimiento observado en evaluación representa la situación real y supervisar cambios de comportamiento después del despliegue.

La denominación **SageMaker AI** se distingue del uso amplio de la marca SageMaker. Para el examen se conserva el nombre de la guía, sin convertir productos relacionados en alias perfectos. Referencia: [qué es SageMaker AI](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html).

<a id="seccion-13-3"></a>

## 13.3 Lex: interfaces conversacionales

**Amazon Lex** ayuda a construir interfaces conversacionales de voz y texto. Un bot interpreta lo que un usuario quiere hacer y reúne la información necesaria para cumplir esa intención. La conversación y la integración con la operación posterior son partes diferentes: reconocer que una persona quiere reservar no implica que ya se haya creado la reserva en el sistema de negocio.

**Ejemplo editorial:** un bot solicita fecha y tipo de cita y después invoca la lógica autorizada que consulta disponibilidad. El diálogo debe tratar entradas incompletas, confirmaciones y errores. La aplicación sigue necesitando permisos, validación y protección de datos. No debe permitir que una expresión interpretada con poca confianza desencadene por sí sola una operación sensible sin los controles previstos.

Lex se diferencia de Polly, que produce audio desde texto, y de Transcribe, que obtiene texto de voz. Un sistema conversacional puede utilizar capacidades de voz, pero su objetivo incluye organizar la interacción. También se diferencia de Connect, que proporciona un entorno de centro de contacto. Referencia: [Lex V2](https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html).

<a id="seccion-13-4"></a>

## 13.4 Polly, Transcribe y Translate: dirección de la transformación

**Amazon Polly** transforma texto en voz sintetizada. Puede utilizarse para leer información en una aplicación o producir una narración accesible. La entrada principal que debe reconocer el alumno es texto y la salida es audio. Las voces, idiomas y características admitidas deben comprobarse; no se deduce que cualquier idioma o estilo esté disponible en toda modalidad.

**Amazon Transcribe** convierte audio hablado en texto mediante reconocimiento de voz. Puede apoyar subtítulos, transcripciones o el procesamiento posterior de conversaciones. Si se quiere buscar información dentro de una grabación, obtener primero texto puede ser un paso útil. El ruido, la pronunciación y las condiciones del audio influyen en el resultado, por lo que no se promete una transcripción infalible.

**Amazon Translate** traduce texto entre idiomas compatibles. Una aplicación puede recibir un mensaje en un idioma y producir una versión en otro. La traducción no convierte por sí sola un audio en texto ni sintetiza la voz de salida; esos serían pasos adicionales. También se debe revisar terminología y adecuación cuando la exactitud del contenido importa.

**Flujo editorial de una guía de viaje:** Transcribe obtiene texto de una explicación grabada; Translate produce una versión en otro idioma; Polly genera su lectura. Cada servicio transforma algo distinto y la aplicación coordina almacenamiento, autorización y revisión. El resultado no debe presentarse como traducción certificada por haber pasado por varias APIs.

| Necesidad | Entrada → salida | Servicio |
|---|---|---|
| Leer una noticia en voz alta | Texto → audio | Polly |
| Transcribir una entrevista | Audio → texto | Transcribe |
| Traducir una descripción | Texto en un idioma → texto en otro | Translate |

Referencias: [Polly](https://docs.aws.amazon.com/polly/latest/dg/what-is.html), [Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html) y [Translate](https://docs.aws.amazon.com/translate/latest/dg/what-is.html).

<a id="seccion-13-5"></a>

## 13.5 Textract, Rekognition y Comprehend

**Amazon Textract** detecta y analiza texto en documentos, incluidos formularios y tablas bajo las capacidades admitidas. Si el problema es extraer campos y relaciones de una factura escaneada, la estructura del documento importa además de las palabras. La aplicación debe evaluar campos y confianza y tratar documentos que no se interpretan correctamente.

**Amazon Rekognition** proporciona análisis de imágenes y vídeo, como detección de objetos y otras características compatibles. La tarea de reconocer contenido visual de un catálogo es diferente de recuperar celdas y campos de un formulario. La existencia de funciones de detección de texto en varias herramientas no hace que todas tengan el mismo objetivo o análisis estructurado.

**Amazon Comprehend** analiza lenguaje natural para identificar información como entidades, frases relevantes o sentimiento según la capacidad utilizada. Trabaja sobre el contenido lingüístico; no es un sustituto de la traducción ni una garantía de que la opinión interpretada represente la intención real del autor. Si el punto de partida es una imagen de un documento, puede ser necesario extraer primero información legible por el flujo correspondiente.

**Ejemplo editorial:** una organización recibe formularios escaneados y comentarios. Textract puede recuperar campos del documento; Comprehend puede ayudar a clasificar o analizar contenido textual; una aplicación envía los casos dudosos a revisión. Si además necesita reconocer tipos de objetos en fotografías, Rekognition responde a esa necesidad. La arquitectura selecciona cada capacidad por la tarea, sin afirmar que una sola API resuelva todos los pasos.

Referencias: [Textract](https://docs.aws.amazon.com/textract/latest/dg/what-is.html), [Rekognition](https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html) y [Comprehend](https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html).

<a id="seccion-13-6"></a>

## 13.6 Amazon Q y la precisión de los nombres

**Amazon Q** es una marca de capacidades de asistencia mediante IA generativa con productos y contextos diferentes. **Amazon Q Developer** se orienta a ayudar a comprender, desarrollar y operar software y entornos AWS bajo sus funciones. Una asistencia para escribir o explicar código no elimina revisión, pruebas ni la necesidad de comprender qué permisos y datos utiliza una herramienta.

El nombre amplio Amazon Q no debe convertirse en sinónimo de cualquier bot Lex o de SageMaker AI. Un bot configurado para una conversación, un entorno de entrenamiento y una asistencia generativa para desarrollo resuelven trabajos distintos. Tampoco se enumeran características comerciales como si todos los productos, planes e interfaces ofrecieran siempre lo mismo.

La [documentación de Q Developer](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html) consultada contiene un aviso de fin de soporte de sus plugins IDE para el 30 de abril de 2027 y señala Kiro como alternativa de capacidades relacionadas. Se conserva este aviso fechado para no congelar una recomendación de instalación. No cambia el objetivo introductorio de reconocer la finalidad de la categoría que sigue mencionando la guía del examen.

<a id="seccion-13-7"></a>

## 13.7 Del dato bruto al resultado analítico

Un flujo analítico suele contener ingestión, almacenamiento, catálogo, preparación, consulta y visualización. Esas fases no siempre corresponden a un único servicio ni suceden una sola vez. Deben conocerse formato, procedencia, fecha de actualización y autorizaciones; un panel puede ser técnicamente correcto y representar datos incompletos o atrasados.

Un **data lake** conserva conjuntos en un repositorio adecuado, frecuentemente objetos S3, para distintos usos. Un **data warehouse** organiza datos para cargas analíticas y modelos de consulta. No son sinónimos obligatorios ni opciones mutuamente excluyentes. La arquitectura puede conservar datos brutos, preparar versiones y cargar un warehouse para determinados informes.

**ETL** significa extraer, transformar y cargar. La transformación puede limpiar campos, normalizar formatos o combinar fuentes. En **ELT**, la carga precede a determinadas transformaciones. La elección depende de herramientas y diseño, no de que un acrónimo sea siempre superior. Para el examen interesa distinguir preparación de datos de la consulta o la visualización final.

<a id="seccion-13-8"></a>

## 13.8 Glue y Athena

**AWS Glue** ofrece integración y preparación de datos y capacidades de catálogo. El **Data Catalog** describe conjuntos para que otras herramientas puedan encontrarlos e interpretarlos; no debe confundirse el catálogo con almacenar de nuevo todos los bytes de los datos. Un trabajo de transformación puede producir un conjunto preparado a partir de otro, mientras el catálogo registra estructuras y ubicación.

**Escenario editorial:** llegan ficheros de ventas con fechas y nombres de columnas diferentes. Glue puede participar en descubrir, catalogar y transformar esos conjuntos antes de que se utilicen conjuntamente. La transformación debe conservar significado de importes, moneda y fechas; automatizar un error de conversión generaría informes incorrectos a gran escala. Se necesitan observación y control de calidad.

**Amazon Athena** permite consultas, especialmente SQL sobre datos compatibles en S3, sin administrar el mismo modelo de clúster de una base tradicional. El usuario define o utiliza las estructuras necesarias, autoriza acceso y ejecuta consultas. La facilidad de ejecución no significa que cualquier formato o organización ofrezca el mismo rendimiento y coste. Diseñar conjuntos y particiones evita leer información innecesaria.

Athena no se identifica como el servicio que convierte automáticamente todos los documentos en un esquema correcto. Puede aprovechar un catálogo y datos preparados por otro flujo. Tampoco se usa como nombre alternativo de RDS: consultar conjuntos de objetos con SQL y mantener las transacciones de una aplicación no son la misma necesidad.

Referencias: [Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) y [Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html).

<a id="seccion-13-9"></a>

## 13.9 Kinesis y procesamiento continuo

**Amazon Kinesis** identifica capacidades de datos en streaming. En **Kinesis Data Streams**, productores publican registros y consumidores los procesan bajo un modelo de flujo. Una aplicación puede recibir continuamente clics, señales de dispositivos o registros y obtener resultados sin esperar a que termine el día. El servicio de ingestión no decide por sí solo qué interpretación de negocio tiene cada evento.

Un flujo continuo exige tratar orden, particionado, retrasos y recuperación de consumidores según el servicio. «En tiempo real» no significa latencia cero ni que toda transformación se produzca de forma instantánea. La aplicación debe observar si crece el retraso y si la capacidad de procesamiento acompaña a la entrada. También debe evitar contar de forma incorrecta información reprocesada.

**Ejemplo editorial:** una tienda quiere observar una subida de errores mientras llegan eventos de navegación. Un flujo los recibe y un procesamiento calcula métricas o produce alertas. Conservar eventos y calcular una agregación son responsabilidades diferentes. Para estudiar, la señal distintiva de Kinesis es ingestión/procesamiento continuo, frente a ejecutar una consulta ocasional sobre archivos ya almacenados con Athena.

Los productos relacionados han evolucionado: nombres históricos como Kinesis Data Firehose se distinguen del nombre **Amazon Data Firehose**. No se incorporan como alias de Kinesis Data Streams, porque una función de entrega administrada y un stream no son idénticos. Referencia: [Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).

<a id="seccion-13-10"></a>

## 13.10 EMR, Redshift y OpenSearch

**Amazon EMR** facilita procesar grandes volúmenes con marcos distribuidos como Apache Spark y Hadoop bajo modalidades compatibles. Un trabajo divide el procesamiento y combina resultados; se elige cuando la organización necesita esos marcos y su modelo. No es la interfaz de un panel empresarial ni un nombre equivalente a almacenar objetos. La modalidad de ejecución determina qué capacidad administra el servicio y qué decisiones mantiene el equipo.

**Amazon Redshift** se orienta al warehouse y la analítica SQL, desarrollado en el [capítulo 10](10_bases_de_datos.md#seccion-10-7). El diseño analítico, los modelos y los datos preparados importan tanto como la elección de servicio. Una consulta agregada sobre años de ventas presenta exigencias distintas de introducir una transacción nueva.

**Amazon OpenSearch Service** proporciona capacidades administradas de búsqueda y análisis de datos indexados. Puede utilizarse para explorar registros y recuperar documentos según un índice. El índice prepara información para búsquedas y agregaciones; no se confunde con un volumen que almacena archivos sin esa función. La actualización del índice y la protección de los datos deben diseñarse.

Una herramienta de búsqueda puede complementar observabilidad o un catálogo, pero no sustituye automáticamente la fuente transaccional de verdad. Si llega información con retraso, la búsqueda puede no mostrar todavía un cambio. La organización debe saber qué estado representa cada sistema y cómo recuperar o reconstruir índices cuando proceda.

Referencias: [EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html) y [OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html).

<a id="seccion-13-11"></a>

## 13.11 Quick Sight, Quick y visualización

**Amazon Quick Sight** ofrece visualización interactiva y capacidades de inteligencia de negocio dentro del entorno de **Amazon Quick**. La documentación actual indica que Quick evolucionó desde QuickSight y que Quick Sight continúa como característica de BI. La lista de servicios del examen utiliza Quick Sight y la tarea 3.7 menciona Quick: se conservan ambos rótulos con su relación, sin tratar toda la plataforma amplia como sinónimo de la función de paneles.

Una herramienta de BI conecta datos y permite representar métricas y explorarlas. El usuario debe definir qué significa cada medida, sus filtros y la actualidad de los datos. Un gráfico de ingresos puede sumar importes incorrectamente si mezcla monedas o cuenta varias veces una transacción. Presentar el resultado no corrige automáticamente los errores del flujo anterior.

**Ejemplo editorial:** la organización consulta ventas por categoría y desea que usuarios autorizados exploren tendencias. Quick Sight corresponde a la capa de presentación; Glue puede haber preparado los datos y Redshift o Athena, ejecutado consultas. No se pide a la herramienta de paneles que sustituya el pipeline entero. Referencia: [relación actual Quick y Quick Sight](https://docs.aws.amazon.com/quick/latest/userguide/what-is.html).

<a id="seccion-13-12"></a>

## 13.12 Caso integrado y comparaciones de repaso

Una empresa recibe formularios escaneados, audios de atención y eventos de su web. Puede extraer información de documentos mediante Textract, obtener texto de audio mediante Transcribe y analizar contenido textual mediante Comprehend. Si necesita traducir y producir una lectura, añade Translate y Polly. Cada transición conserva un propósito y debe validar resultados antes de usarlos en operaciones importantes.

Los eventos de web pueden alimentar un flujo Kinesis. Los conjuntos conservados en S3 se catalogan o preparan con Glue y se consultan con Athena; un warehouse Redshift puede atender informes preparados y OpenSearch una búsqueda indexada de registros. Quick Sight presenta indicadores. SageMaker AI entra cuando se necesita desarrollar y operar un modelo propio, no porque cualquier conjunto de datos exija entrenamiento.

| Pregunta clave | Diferencia que permite responder |
|---|---|
| ¿Crear voz o reconocerla? | Polly frente a Transcribe |
| ¿Traducir o interpretar texto? | Translate frente a Comprehend |
| ¿Campos de documentos o contenido de imágenes? | Textract frente a Rekognition según la tarea |
| ¿Bot o modelo propio? | Lex frente al ciclo de desarrollo de SageMaker AI |
| ¿Preparar, consultar o presentar datos? | Glue, Athena/Redshift y Quick Sight |
| ¿Flujo continuo o consulta sobre datos almacenados? | Kinesis frente a una necesidad de consulta histórica |
| ¿Procesamiento distribuido o búsqueda indexada? | EMR frente a OpenSearch |

El usuario de estas capacidades mantiene responsabilidad sobre calidad, acceso, privacidad, autorización y decisiones tomadas con resultados. Para CLF-C02 se estudia la correspondencia entre tarea y servicio, con los matices suficientes para no prometer resultados infalibles ni mezclar funciones de categorías cercanas.
