# Bloque IV — Facturación, precios y soporte

Apuntes de AWS Certified Cloud Practitioner CLF-C02. Continúan la numeración del temario con los capítulos **15–18**, sin modificar ni integrar los Bloques I–III en la aplicación. El dominio 4 representa el **12 %** y contiene los objetivos **4.1, 4.2 y 4.3**, según la [guía oficial consultada el 3 de noviembre de 2026](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html).

<a id="recorrido"></a>
## Recorrido de estudio

| Documento | Qué desarrolla |
|---|---|
| [15. Modelos de precios AWS](15_modelos_de_precios_aws.md) | Unidades, compras EC2, RI y Savings Plans, capacidad, transferencias, almacenamiento/RDS y Free Tier |
| [16. TCO y optimización de costes](16_tco_y_optimizacion_de_costes.md) | Comparaciones económicas, tablas históricas, Calculator, Delaware North y cuatro pilares docentes de EC2 |
| [17. Facturación, presupuestos y costes](17_facturacion_presupuestos_y_costes.md) | Herramientas, factura, métricas, avisos, informes, etiquetas, categorías y Organizations |
| [18. Soporte y recursos AWS](18_soporte_y_recursos_aws.md) | Planes actuales/legados, asistencia, recursos oficiales, Health, Trusted Advisor, partners y Marketplace |
| [19. Glosario integral](19_glosario_integral_facturacion.md) | Conceptos canónicos y alias reales, con contexto y referencias previas |
| [20. Matriz de cobertura](20_matriz_cobertura.md) | 55 páginas con destinos específicos, cotejo, figuras y relación con habilidades 4.1–4.3 |
| [21. Informe de validación](21_informe_validacion.md) | Comprobaciones ejecutadas, correcciones y límites pendientes |
| [22. Registro de fuentes oficiales](22_registro_fuentes_oficiales.md) | Referencias, alcance de consulta y estado de comprobación de destinos |

<a id="procedencia"></a>
## Procedencia y criterio de lectura

La fuente principal es el [corpus docente por página](fuentes/02_CORPUS_DOCENTE_POR_PAGINA.md), complementado por la [ampliación oficial](fuentes/03_AMPLIACION_OFICIAL_DOMINIO_4.md), el [inventario](fuentes/01_INVENTARIO_Y_MAPA.md) y la [auditoría inicial](fuentes/04_AUDITORIA_COBERTURA.md). Son copias de trabajo del paquete; solo se adaptan rutas relativas a figuras y PDF. La carpeta original se conserva íntegra.

- **[FUENTE DOCENTE]** identifica información del material AWS Academy y su lectura desarrollada. Las capturas y cifras de 2022 o anteriores permanecen históricas.
- **[ACTUALIZACIÓN OFICIAL]** identifica información respaldada por documentación AWS, con contraste fechado el 03-11-2026 y enlaces próximos a las afirmaciones.
- **[EXPLICACIÓN EDITORIAL]** identifica razonamiento didáctico, comparaciones y casos creados para comprender los mecanismos. Las cifras ficticias no son tarifas.

Se abrieron individualmente los **55 JPG** para cotejar texto principal, tablas y figuras. Eso no certifica cada carácter de menús, anotaciones pequeñas o gráficos sin etiquetas. Se conservan las 55 imágenes sin retocar y se insertan **22** láminas sustantivas en los capítulos. Las portadas, separadores y la repetición T6 p.35 se registran en la matriz sin crear apartados de teoría redundantes.

## Advertencias de vigencia que afectan al estudio

El Free Tier de «un año» de T4 p.10 no es la descripción completa actual. Se distinguen créditos, ofertas de uso, plan de cuenta y vencimientos; la FAQ consultada contiene diferencias entre apartados de caducidad que no se ocultan. El acceso de alta nuevo y sus controles de proyecto tampoco se confunden con todas las cuentas ni con Budgets.

Las RI son beneficios económicos con atributos; su reserva de capacidad depende del alcance. Savings Plans compromete gasto por hora, y la documentación actual recoge cuatro tipos. Las Scheduled Instances de T6 ya no pueden comprarse. Los descuentos máximos de la presentación y su ejemplo de TCO no se convierten en promesas.

Basic/Developer/Business/Enterprise es la tabla histórica. Se distingue de Basic/Business Support+/Enterprise/Unified Operations y de las transiciones de planes legados. Un tiempo de primera respuesta no es un SLA de resolución. La [guía de revisiones CLF-C02](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html) publica la versión 1.3 de 29-10-2026 e indica un margen aproximado de un mes para cambios del examen; no permite predecir sus preguntas.

La [base económica del Bloque I](../bloque-1/02_beneficios_economia.md), [identidad del II](../bloque-2/06_identidad_y_acceso.md) y [servicios del III](../bloque-3/00_indice.md) se reutilizan por referencia. No se han alterado aplicación, preguntas ni glosarios previos. Los casos de estudio se mantienen en estos documentos; no son nuevos tests.
