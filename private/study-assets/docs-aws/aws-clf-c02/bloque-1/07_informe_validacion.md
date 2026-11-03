# 7. Informe de validación — tercera pasada editorial

Fecha: 2 de noviembre de 2026. Esta pasada corrige el glosario y la organización de los apuntes existentes. Se mantiene la estructura de cuatro capítulos y no se inicia el Bloque II. Los capítulos previos a esta reorganización se conservan en `../archivo/antes-tercera-pasada/`.

## Revisión individual del glosario

Se revisaron las **139 entradas originales** contra el vocabulario y las explicaciones de los corpus 05 y 06. Cada definición se redactó de forma explícita para su concepto; se eliminó el procedimiento de añadir frases por coincidencias parciales de nombres. Ese procedimiento de la segunda iteración había introducido texto ajeno, números sueltos y duplicaciones.

Las correcciones incluyen ACL/NACL, NAS, SAN, disponibilidad, EC2 Auto Scaling, AWS CLI, ELB, los modelos IaaS/PaaS/SaaS, los pilares y las siglas de fiabilidad. Las definiciones ahora contienen de dos a cuatro frases que explican identidad, uso y diferencias pertinentes. Se sustituyeron procedencias vagas como «Economía» por apartados o páginas concretos cuando fue necesario. Las definiciones añadidas para nombres que solo aparecen como iconos se identifican como explicaciones editoriales.

Se contrastaron en documentación oficial las diferencias de [Network ACL](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html), [EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html), [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) y [ELB](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html). La referencia docente se conserva junto a cada entrada.

Se consolidaron ocho entradas duplicadas: quedan **131 conceptos canónicos**, sin eliminar ningún término de búsqueda original. Se unificaron las tres variantes de Network ACL, las dos de ELB, las dos de alta disponibilidad, las dos de tolerancia a fallos, las dos de RDBMS, las dos de Security Group y las dos de EC2 Auto Scaling. ASG se conserva como alias y se explica que designa el grupo administrado, no el servicio. «ACL» se identifica como término general que aquí se usa en el contexto de red de VPC.

El registro `09_revision_glosario.json` relaciona cada una de las 139 entradas originales con su destino canónico. La sección Conceptos utiliza las mismas definiciones y conserva alias explícitos en su búsqueda. El glosario antiguo de 94 términos continúa archivado en `../archivo/glosario_anterior.json`.

## Organización de los capítulos sin resumir el temario

Se trasladaron **27 secciones administrativas** a «Registro administrativo de las fuentes» de la matriz de cobertura: portadas, índices, objetivos, separadores, cierres y resúmenes de presentación. Su texto se conserva íntegro allí. Los enlaces de las 118 filas de la matriz se actualizaron para señalar el destino real, sea capítulo o registro administrativo.

El desarrollo completo de sostenibilidad, sus seis principios, prácticas, ejemplos, fuentes y aplicación a AnyCompany está inmediatamente después del quinto pilar y antes del apartado sobre Well-Architected Tool. Se eliminó únicamente una frase de orientación que remitía al antiguo emplazamiento del sexto pilar. También se retiró un encabezado duplicado de AnyCompany.

Se compararon los párrafos de los cuatro capítulos antes y después, descontando los bloques administrativos trasladados, los encabezados y la referencia de ubicación obsoleta. Todos los párrafos sustantivos restantes se conservaron: 110 en introducción, 76 en economía, 409 en arquitectura y 62 en migración. La reducción de palabras en los capítulos corresponde al traslado del registro administrativo; no se condensaron explicaciones, tablas, ejemplos ni aplicaciones de los pilares.

## Figuras y publicación en la aplicación

Se mantienen **52 figuras principales**. Se comprobaron su existencia, decodificación y rutas Markdown. Se extrajeron directamente del PDF cinco diagramas: AnyCompany en CA pp.12–14, el ciclo MTTF/MTTR/MTBF en CA p.47 y la tabla de disponibilidad en CA p.50. Se revisó visualmente el encuadre de esos cinco recortes y se corrigió un primer recorte que cortaba Make and Ship. Las páginas completas correspondientes se conservan en `figuras/originales/` y quedan enlazadas junto a cada diagrama para consultar sus notas.

Los otros 47 archivos mantienen las páginas completas porque aportan notas de principios, contexto o condiciones de ejercicios; se conservan sus pies explicativos. Los recortes facilitan la lectura en pantalla, pero no inventan detalle que no exista en la imagen original. `figuras/recortes.json` registra páginas, coordenadas y dimensiones. `figuras/README.md` documenta la selección.

Se sincronizaron las figuras principales y las cinco alternativas completas con `public/study-figures/bloque-1/`, manteniendo las rutas de los capítulos de la app. La comprobación local compara también el contenido de las figuras principales con sus copias publicadas. La comprobación del HTML generado y la carga HTTP se registran al finalizar esta pasada; no se deduce una inspección del navegador únicamente de que el archivo exista.

La comprobación en navegador cargó las cuatro páginas activas y decodificó sus 52 imágenes: 8 en introducción, 2 en economía y 42 en arquitectura, sin imágenes rotas. También verificó el orden de los seis pilares en el HTML y búsquedas por NACL, ELB, High availability, Security Groups y Auto Scaling Group. La búsqueda incluye definiciones, por lo que puede mostrar conceptos relacionados además del resultado canónico; no se duplican entradas para simular alias. Se capturó el diagrama Make and Ship tal como lo muestra la aplicación.

Se ajustó el tamaño de las imágenes al ancho del artículo para evitar que sus píxeles originales desbordasen la lectura. En esta comprobación apareció además un error de importación del script compartido: el atributo `lang="ts"` hacía que Astro lo tratase como script sin procesar. Se retiró ese atributo para que Astro gestione el módulo; no se cambiaron funciones de progreso, favoritos o navegación. La página se volvió a cargar sin errores de JavaScript.

## Codificación y referencias

El informe anterior contenía letras sustituidas por signos de interrogación. Este archivo se reconstruyó con el texto correcto y se escribió como UTF-8; no se aplicó una simple conversión sobre el texto ya dañado. También se reconstruyeron dos expresiones dañadas del registro de enlaces.

Las comprobaciones leen los Markdown mediante decodificación UTF-8 estricta y buscan tanto caracteres de sustitución como interrogaciones incrustadas dentro de palabras. Se validan los archivos de destino y sus anclas explícitas o de encabezado, el orden único de los seis pilares y las 118 correspondencias de fuentes. El índice se actualizó después de mover los apartados.

El mapa interactivo oficial de infraestructura global continúa enlazado. El registro HTTP de la segunda pasada permanece fechado como tal; una respuesta HTTP correcta acredita accesibilidad, no la actualidad semántica de cada condición comercial. Las cuatro fuentes oficiales consultadas específicamente para esta revisión se enlazan en el apartado del glosario.

## Alcance de la revisión de los originales

Se mantienen los resultados reales de la segunda iteración: los PDF tienen 30, 20 y 68 páginas, se renderizaron las 118 y se inspeccionó su secuencia en 15 hojas. Se ampliaron individualmente CA pp.12, 13, 14, 47, 50, 56, 57, 58, 59 y 60. La tercera pasada es editorial y no añade una afirmación de lectura literal independiente de todas las notas pequeñas.

La corrección de Show and Sell se conserva: su base de pedidos es un RDBMS sobre EC2, no DynamoDB. También se mantienen la distinción IAM/controles de red, las tablas de disponibilidad como aproximaciones docentes y las etiquetas históricas de Trusted Advisor. Los cuatro objetivos 1.1–1.4 siguen relacionados con sus contenidos en la matriz; la reorganización no elimina sus explicaciones.

## Comprobaciones y límites pendientes

El resultado reproducible de los controles locales se guarda en `10_control_calidad.json`. Incluye inventario de conceptos y alias, correspondencias de páginas, enlaces locales, integridad de imágenes y orden de pilares. Las comprobaciones de contenido y compilación del proyecto se ejecutan sobre la copia activa sincronizada.

**Resultado final:** 442 referencias locales sin destinos ni anclas ausentes; 118 filas de cobertura únicas; 131 conceptos y 171 nombres/alias de búsqueda; ninguna incidencia de UTF-8 detectada en los Markdown actuales. `pnpm.cmd verify:content` pasó con 4 apuntes, 131 términos, 16 comparativas y 370 preguntas. `pnpm.cmd build` completó 21 páginas con 0 errores, 0 avisos y 0 indicaciones de diagnóstico. En navegador, las 42 imágenes del capítulo 3 cargaron sin desbordar el artículo tanto a 1280 como a 390 píxeles de ancho, con los seis pilares en orden y sin errores de JavaScript.

- Sigue pendiente el cotejo literal de cada texto pequeño de los originales. Esta pasada no declara cobertura literal exhaustiva.
- El ZIP de 56 figuras mencionado no está disponible en el repositorio; las 52 figuras utilizadas proceden de los PDF presentes.
- El Mermaid editorial se conserva como código compatible con visores que lo interpreten; esta pasada no incorpora un motor Mermaid ni afirma haber comprobado su renderizado gráfico.
- Los nombres, condiciones comerciales y retiradas de servicios históricos requieren consultar la documentación vigente antes de una implantación real. No se convierten las menciones del curso en recomendaciones actuales de contratación.

## Ajuste final de cierre editorial

Se añadieron las seis entradas o grupos que faltaban: AWS Pricing Calculator, AWS Compute Optimizer, AWS Migration Hub, AWS Data Transfer Terminal, AWS Transfer Family y AWS DMS Schema Conversion / AWS SCT. El glosario y Conceptos tienen ahora **137 entradas canónicas**, con sus alias y procedencia en el complemento 06. DMS Schema Conversion y SCT se identifican como herramientas relacionadas, no como productos idénticos. Se corrigió «por sí mismo» en el registro de enlaces.

Este ajuste no modifica los cuatro capítulos ni amplía el alcance declarado de la verificación de los originales. Se conserva la limitación sobre el cotejo literal de cada nota pequeña de las 118 páginas.

Comprobaciones posteriores al ajuste: 137 entradas, 188 nombres y alias de búsqueda, 448 referencias locales válidas y ninguna incidencia de codificación detectada. La comprobación de contenido y la compilación finalizaron correctamente, con 0 errores y 0 avisos. Se verificó mediante hashes que los cuatro capítulos permanecen idénticos.
