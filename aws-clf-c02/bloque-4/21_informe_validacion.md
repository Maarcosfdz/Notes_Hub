# 21. Informe de validación — Bloque IV

Fecha: **3 de noviembre de 2026**. Entrega documental de los capítulos 15–18 de AWS CLF-C02, fuera de la colección activa de la aplicación. No se han añadido tests ni nuevas preguntas, ni se ha importado un glosario.

## Archivos y desarrollo

Se entregan [índice](00_indice.md), cuatro capítulos, [glosario](19_glosario_integral_facturacion.md), [matriz](20_matriz_cobertura.md), este informe y [registro de fuentes oficiales](22_registro_fuentes_oficiales.md). Se conservan 55 JPG sin edición en `figuras/` y cuatro copias documentales en `fuentes/`. Los PDF originales siguen en el paquete protegido; las copias de Markdown solo adaptan rutas relativas a ese respaldo y a las figuras.

| Capítulo | Palabras, separadas por espacios | Figuras insertadas |
|---|---:|---:|
| [15_modelos_de_precios_aws.md](15_modelos_de_precios_aws.md) | 5.069 | 8 |
| [16_tco_y_optimizacion_de_costes.md](16_tco_y_optimizacion_de_costes.md) | 3.110 | 6 |
| [17_facturacion_presupuestos_y_costes.md](17_facturacion_presupuestos_y_costes.md) | 3.323 | 5 |
| [18_soporte_y_recursos_aws.md](18_soporte_y_recursos_aws.md) | 3.512 | 3 |

Total de los cuatro capítulos: **14.679 palabras** bajo ese criterio de recuento; no incluye glosario, fuentes, matriz ni informes. La extensión no se usa por sí sola como prueba de cobertura.

El glosario tiene **155 entradas canónicas** escritas individualmente, 120 con alias y 35 sin campo de alias. Se encontraron **58 equivalencias** de nombre o alias con glosarios previos, enlazadas sin sobrescribirlos. Standard/Convertible, regional/zonal, tipos de Savings Plans, planes actuales/legados y componentes de Health tienen entradas diferenciadas; no se funden como sinónimos. El signo `+` se conserva en la normalización para no confundir Business Support con Business Support+.

## Auditoría de fuentes realmente realizada

Se leyeron inventario, corpus docente completo, ampliación oficial y auditoría inicial. El archivo unificado se reconoce como copia concatenada, no evidencia independiente. Se comprobaron los 55 registros contra sus nombres y se abrieron **individualmente los 55 JPG** a la resolución disponible:

- **T4:** páginas físicas 1–37, incluidas todas las tablas de precios, TCO, Calculator, facturación y soporte.
- **T6:** páginas físicas 31–40; p.35 repite la anterior y los rótulos de p.36–40 están desplazados una unidad respecto al índice físico.
- **T7:** 12, 27 y 34, con factores de coste y comparación S3/Glacier.
- **T8:** 17–20, con motor, compra, copias, despliegue y transferencia.
- **T2:** 19, identificando CUR, Budgets y Cost Explorer en sus iconos.

Este cotejo comprueba texto principal y elementos legibles empleados, **no cada carácter diminuto**. No se han reextraído ni transcrito de nuevo los PDF: el usuario indicó usar principalmente Markdown y JPG. Se comprobó la presencia de los cinco PDF y se preservaron mediante hashes. Un intento adicional de abrirlos con PyMuPDF no pudo ejecutarse por ausencia de esa biblioteca; no se declaran recuentos independientes de páginas PDF ni notas del presentador verificadas. Los recuentos del paquete siguen siendo información de su inventario.

Las tablas numéricas reproducidas se cotejaron con T4 pp.15,16,18,29,31,32,37 y T7 p.34. En gráficos sin valores por barra se describe la tendencia sin inventar importes. La lista fila a fila y destinos específicos se encuentra en la matriz; portada, índice y separadores quedan registrados sin transformarlos en teoría redundante.

## Figuras seleccionadas

Se insertan **22 figuras diferentes**, con explicación, etiqueta histórica y enlace a ficha:

| Capítulo | Figuras originales |
|---|---|
| 15 | T4 pp.4,7,10; T6 p.34; T7 pp.12,27,34; T8 p.20 |
| 16 | T4 pp.15,16,18,23,24; T6 p.36 |
| 17 | T4 pp.27,29,30,31,32 |
| 18 | T4 pp.35,36,37 |

Las 55 imágenes originales continúan disponibles. No se recortaron ni editaron. Se reconstruyen en Markdown las tablas legibles relevantes y se conserva el contexto de las capturas antiguas. Una captura que requiere ampliar sigue disponible por enlace; no se promete que su microtexto sea cómodo en una pantalla pequeña.

## Correcciones y decisiones técnicas

1. **TCO T4 p.16:** 167.422 − 7.509 = 159.913 coincide; las dos partidas AWS visibles suman 7.510, un dólar más que el total impreso. Se conserva y señala la diferencia sin atribuir una causa no demostrada. No se extrapola el 96 % promocional como ahorro universal ni idéntico cada año.
2. **Calculator T4 p.18:** suma 2,37 + 71,54 = 73,91; multiplicado por doce, 886,92. Se documenta que la captura ya incluye EC2 Instance Savings Plans a un año sin adelanto; no se afirma que Savings Plans esté completamente ausente del material.
3. **Leyenda T4 p.30:** la imagen dice Elasticsearch Service; ElastiCache aparece en el panel p.27. Se usa la leyenda correcta y se registra la diferencia respecto a la descripción genérica del corpus, conservado como fuente.
4. **RI/capacidad:** se corrige la generalización docente de capacidad garantizada con cualquier RI: se distingue zonal, regional y Capacity Reservations. Standard no significa inmodificable; Convertible no significa cancelable libremente.
5. **Spot y Scheduled Instances:** la descripción antigua de puja no se enseña como regla general vigente. Scheduled Instances ya no puede comprarse. El aviso Spot se contextualiza como mejor esfuerzo, con la excepción de hibernación para la ventana previa de dos minutos.
6. **Savings Plans:** cuatro tipos actuales, compromiso monetario horario, utilización/cobertura y cargos no cubiertos. No se mezclan precios descontados y On-Demand para calcular aritméticamente el exceso.
7. **EBS/S3/RDS:** capacidad, rendimiento, copias, solicitudes, recuperación y red se separan. Se evita prometer reducción directa de tamaño EBS, gratuidad de toda E/S SSD, de toda transferencia intrarregional o de todas las copias RDS. Glacier Instant Retrieval no exige la restauración previa de las clases de archivo flexible/profundo.
8. **Free Tier:** se separan créditos, franquicias y estado de cuenta. La propia FAQ contiene diferencias entre apartados de caducidad; se registra el límite en lugar de escoger una cifra universal. Se distingue experiencia de alta nueva de condiciones de cuentas anteriores.
9. **Spend limits:** al profundizar en la documentación de AWS Settings se precisó que son un tipo de AWS Budgets con controles propios. No se presentan como un servicio totalmente independiente ni se extrapola su comportamiento de pausa a un presupuesto convencional que solo avisa.
10. **Soporte:** oferta actual separada de tabla histórica y de Enterprise On-Ramp. Se incluyen transición fechada, excepción GovCloud y diferencia entre primera respuesta y resolución. Health API no se equipara al acceso al dashboard.
11. **Edición y rutas:** se corrigió durante generación un enlace interno al capítulo de identidad y destinos oficiales que redirigían a índices o no correspondían al apartado. Se evita el alias genérico «documento técnico» para Whitepaper. No se aplicó ninguna corrección a los bloques previos.

## Objetivos y trazabilidad conceptual

La [matriz](20_matriz_cobertura.md) contiene 55 filas de páginas y **20 filas de habilidades/conexión docente**. El objetivo **4.1** se desarrolla en el capítulo 15 y compartición en 17.8; **4.2**, en el 17 y la estimación de 16.4; **4.3**, en el 18. Los destinos cubren selección de compras, flexibilidad y Organizations, red, almacenamiento, herramientas, tags/informes, soporte, recursos, abuso, partners, beneficios, Marketplace y asistencia profesional.

Se consultó la guía oficial y su historial: versión 1.3 publicada el 29-10-2026, con margen aproximado de un mes para reflejar cambios en el examen. Esto no garantiza composición ni resultado de una convocatoria particular. Las ampliaciones no se atribuyen a AWS Academy y los casos editoriales no se convierten en nuevas preguntas del banco.

## Comprobaciones ejecutadas

- **Contenido de aplicación:** `pnpm.cmd verify:content`, correcto: 7 apuntes activos, 247 términos, 16 comparativas y 370 preguntas. Este resultado no significa que el Bloque IV esté integrado.
- **Compilación:** `pnpm.cmd build`, correcto: 24 páginas estáticas y cero errores, advertencias e indicaciones de Astro. Los nuevos documentos permanecen fuera de su colección activa.
- **Documento:** lectura UTF-8 estricta, anclas explícitas, rutas locales y destinos de glosario; verificación de columnas de tablas y ausencia de alias de relleno. El control final comprueba **722 referencias locales** y **33 tablas Markdown** del conjunto documental, sin errores. Las 22 tablas de los capítulos son un subconjunto de ese total.
- **Render:** los capítulos se convirtieron secuencialmente a HTML con el renderizador Satteri instalado por el proyecto. El navegador decodificó las **22 imágenes** y comprobó columnas en las **22 tablas de los capítulos**, sin fallos. Se inspeccionó visualmente el ejemplo TCO con tabla, texto e imagen. El HTML usa un visor temporal, no nuevas rutas de aplicación.
- **Fuentes/imágenes:** 55 JPG decodificados con Pillow y comparados byte a byte; las cuatro copias documentales se ajustan únicamente en rutas relativas.
- **Integridad:** SHA-256 sobre **1.099 archivos existentes** al comenzar, incluidos Bloques I–III, su material, aplicación, configuración, banco de preguntas y paquete original. Sin cambios en los controles ejecutados; el cierre vuelve a comprobarlos.
- **Enlaces externos:** intento GET de 61 destinos bloqueado por sockets del entorno. El inventario final de 65 destinos se consultó mediante herramienta web con alcance indicado en el registro. Los 403 de re:Post y los índices sin texto extraíble quedan explícitos; no se afirma que se hayan obtenido 65 respuestas HTTP 200.

Las herramientas de comprobación documental y el visor están en el directorio temporal; no son tests incorporados al proyecto ni modifican `scripts/`. Los artefactos de build son regenerables y no alteran los archivos protegidos.

## Límites pendientes

- No existe transcripción literal certificada de cada celda diminuta, menú o nota de las 55 imágenes. La explicación de los elementos reproducidos sí se cotejó y se conserva la figura completa para revisión independiente.
- No se resolvió documentalmente una caducidad única de todos los créditos Free Tier: las fuentes actuales no son uniformes entre apartados/experiencias. Deben consultarse condiciones y vencimientos del saldo de la cuenta concreta.
- No se verificó contratación, factura real, acceso a API según plan, funcionamiento de alertas o pausa de proyectos mediante recursos AWS. Tampoco se midieron tiempos de respuesta o recuperación.
- Las condiciones comerciales se contrastan selectivamente a fecha 03-11-2026. No se certifica cada región, motor, cuota, precio, impuesto o contrato de todos los servicios mencionados.
- No hay control HTTP directo completo satisfactorio desde el entorno. El acceso directo de los destinos re:Post no se certifica aunque su contenido de abuso se recuperara por búsqueda. Esto se diferencia de enlaces locales rotos, que sí se comprueban automáticamente.
- No se realizó una auditoría visual de cada posición, dispositivo o accesibilidad de una integración nueva. Las figuras son páginas completas sin editar y pueden requerir ampliación. La aplicación no incorpora todavía los capítulos ni sus conceptos.

La entrega desarrolla el temario y conserva trazabilidad de las 55 páginas, con las limitaciones anteriores. No se declara «todo contrastado» ni una transcripción perfecta por superar controles de formato.

## Cierre documental

Validación local final: cero errores; 55 registros y sus fichas/anclas, 155 conceptos, 22 figuras insertadas y 55 imágenes decodificadas e idénticas a las fuentes. Las cuatro copias documentales coinciden con el paquete tras la adaptación prevista de rutas. El cotejo SHA-256 mantiene sin cambios los 1.099 archivos protegidos y no detecta archivos nuevos de aplicación o de tests. Los resultados de contenido, build y revisión HTML indicados arriba corresponden a comprobaciones ejecutadas, con los límites externos y visuales descritos.


## Precisiones finales de 15.6 y 15.13

Se añadieron exclusivamente las precisiones solicitadas en el capítulo 15. En 15.6 se explicitan plazos de uno o tres años y pagos All Upfront, Partial Upfront y No Upfront bajo condiciones del producto; se mantiene la distinción respecto a RI y la tabla de cuatro tipos. Se documenta la excepción Database Savings Plans: un año y No Upfront, diferenciada de un prepago mediante Billing.

En 15.13 se separan duración del plan gratuito y vencimiento del crédito. Se identifican los apartados de la FAQ que indican seis meses junto a la experiencia de alta de octubre de 2026, los apartados de conversión y créditos de actividades que indican doce y la regla de doce meses conservada en precios EBS. No se asigna automáticamente una vigencia a toda cohorte ni se deduce que una conversión reinicie o prolongue todos los saldos.

Referencias consultadas de nuevo: [definición de Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html), [tipos](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html), [Database Savings Plans](https://aws.amazon.com/savingsplans/database-pricing/), [FAQ de pagos](https://aws.amazon.com/savingsplans/faqs/), [FAQ Free Tier](https://aws.amazon.com/free/free-tier-faqs/), [planes de cuenta](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html), [alta nueva](https://docs.aws.amazon.com/accounts/latest/reference/sign-in-new.html) y [precios EBS](https://aws.amazon.com/ebs/pricing/). El registro de 65 destinos describe la entrega anterior; estas consultas adicionales no representan una repetición HTTP completa.

Las definiciones del glosario ya distinguen compromiso, plan y crédito sin fijar una vigencia universal; no requieren modificación. Se conserva intacto, al igual que figuras, matriz, capítulos 16–18 y todo el material protegido. Se actualiza el recuento de palabras para reflejar estas dos precisiones.

Validación de esta revisión: cero errores documentales en 722 referencias locales y anclas y 33 tablas; conversión Markdown correcta. `pnpm.cmd verify:content` conserva 370 preguntas y `pnpm.cmd build` produce 24 páginas con cero errores, advertencias e indicaciones de Astro. Los 1.166 archivos protegidos específicamente para esta revisión permanecen idénticos; dentro del capítulo 15 también se comprobó que solo cambian los apartados 15.6 y 15.13. No se generan tests.
