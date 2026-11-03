# 10. Informe de validación del Bloque II

Fecha de trabajo y contraste: **2 de noviembre de 2026**. Resultado: tres capítulos extensos, glosario de seguridad, índice y matriz escritos e integrados en Notes Hub. La cobertura documental está comprobada a nivel de correspondencia de las 83 páginas entregadas. No se declara una transcripción literal perfecta ni una auditoría jurídica de cumplimiento.

## Archivos entregados

| Archivo | Contenido y extensión orientativa |
|---|---|
| [00_indice.md](00_indice.md) | Orden de lectura, etiquetas de procedencia y acceso a documentación de revisión. |
| [05_responsabilidad_compartida.md](05_responsabilidad_compartida.md) | Aproximadamente 3.200 palabras; responsabilidades, comparación EC2/RDS/Lambda y dos actividades de ocho preguntas con soluciones razonadas. |
| [06_identidad_y_acceso.md](06_identidad_y_acceso.md) | Aproximadamente 6.200 palabras; IAM, políticas, roles, federación, raíz, Organizations y secretos. |
| [07_seguridad_datos_y_cumplimiento.md](07_seguridad_datos_y_cumplimiento.md) | Aproximadamente 10.300 palabras; redes, cifrado, protección, detección, observabilidad, cumplimiento y cinco recomendaciones de Trusted Advisor. |
| [08_glosario_integral_seguridad.md](08_glosario_integral_seguridad.md) | 161 entradas y grupos relacionados, con alias, función, uso, diferencias y procedencia; aproximadamente 9.200 palabras. |
| [09_matriz_cobertura.md](09_matriz_cobertura.md) | 83 filas por página y correspondencia de objetivos 2.1–2.4 con secciones específicas. |
| [figuras/README.md](figuras/README.md) | Inventario y explicación de las 72 figuras originales conservadas. |

Los capítulos suman aproximadamente **19.700 palabras**. El recuento incluye tablas y metadatos Markdown y solo sirve como indicador de desarrollo; la calidad se ha evaluado también por actividades, ejemplos, comparativas y procedencia. Las explicaciones no se han reemplazado por enlaces a las diapositivas.

## Fuentes y revisión de PDF

Se leyó el prompt maestro completo, las instrucciones rápidas, la auditoría y el corpus unificado; se consultó la ampliación oficial del documento 02 manteniendo sus etiquetas. Se abrieron los cinco PDF con PyMuPDF, se comprobaron sus recuentos y se renderizaron las 83 páginas para revisión visual. Se mantuvieron separados el número original del curso y el índice físico del PDF recortado:

| Fuente | PDF entregado | Páginas comprobadas | Destino |
|---|---|---:|---|
| T3 | isT3_completo_51p.pdf | 51 | Capítulos 05–07; ocho páginas administrativas en la matriz. |
| T5 | T5_solo_paginas_seleccionadas.pdf | 8, originales 25–32 | Redes SG/NACL; portada en matriz. |
| T9 | T9_solo_paginas_seleccionadas.pdf | 6, originales 12–17 | CloudWatch y actividad; separador en matriz. |
| CA | CA_solo_paginas_seleccionadas.pdf | 15, selección original discontinua | AnyCompany, pilar de seguridad, recomendaciones y actividad de cifrado; recapitulación p.61 en matriz. |
| T2 | T2_solo_paginas_seleccionadas.pdf | 3, originales 18–20 | Catálogos de seguridad, costes, administración y gobierno. |

Se revisaron visualmente las 83 páginas mediante láminas de contacto. Se ampliaron selectivamente las figuras de las actividades T3 pp.9–12; IAM T3 pp.21,23; raíz/MFA y cuotas; cumplimiento; tablas SG/NACL T5 pp.27–31; y actividad CloudWatch T9 pp.15–17. Las notas extensas de CA se incorporan a partir del corpus facilitado y su figura, sin certificar la lectura literal de cada carácter pequeño. Las 72 páginas sustantivas tienen ancla explícita en los capítulos; las otras 11 se registran individualmente en la matriz.

## Correcciones y decisiones editoriales

- Se separan IAM y autorización sobre recursos de los controles de tráfico SG/NACL. El acceso efectivo se explica con el contexto de las políticas aplicables; no se usa una regla simplificada para prometer permisos entre cuentas.
- Se conserva el ejemplo Allow/Deny/NotResource de T3 p.21 y se explica su alcance para acciones S3/DynamoDB. El JSON didáctico se distingue de la captura histórica y se comprobó que puede analizarse como JSON. No se ejecutó como política de una cuenta real.
- Se diferencian trust policy y permission policy, roles y usuarios, federación del personal y Cognito para aplicaciones, y SCP frente a concesión de permisos. Se explican las excepciones de ámbito de SCP para la cuenta de administración y roles vinculados a servicios.
- Se contextualiza el ejercicio de baja latencia y la seguridad de la consola: la clave docente no constituye una garantía universal de toda arquitectura o credencial del cliente.
- T5 p.27 mezcla el comportamiento de un SG nuevo con una tabla que permite tráfico desde el propio SG. Se mantiene la figura y se explica la diferencia con el SG predeterminado. Las ACL stateless incluyen el razonamiento del tráfico de retorno y los puertos efímeros; la tabla del curso no se propone como configuración de producción.
- Se cotejó en T9 p.16 la condición EBS: **más de 1.000** operaciones, no «mayor o igual». Su problema es la falta de estadístico. No se afirma que un período de diez segundos sea universalmente imposible; depende de la métrica y resolución. La condición S3 «alrededor de 3» se conserva como ejemplo incorrecto por no definir comparación precisa.
- Las referencias históricas de raíz, Authy/Windows Phone, cuotas Organizations, SSL, SaaS ilustrativo, Privacy Shield y ACL de S3 se mantienen identificadas. Se añaden contrastes actuales de raíz, cuotas, federación, KMS y S3 Object Ownership con enlaces oficiales.
- La descripción actual de Security Hub y Security Hub CSPM se distingue del nombre histórico. No se convierten GuardDuty, Inspector, Macie y Security Hub en productos intercambiables.
- Se retiran del hilo principal portadas, separadores y notas puramente administrativas. Se corrigieron separaciones entre tablas y párrafos que afectaban al renderizado Markdown y la puntuación de una URL.
- El glosario se elaboró mediante definiciones explícitas por entrada y reutilización exacta de términos ya revisados, sin recuperar párrafos por coincidencias parciales. Se consolidan alias y se distinguen grupos de conceptos relacionados de sinónimos auténticos.

## Contraste oficial actual

Se consultó la [guía oficial del dominio 2](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain2.html), que presenta los objetivos 2.1–2.4. La matriz desglosa las habilidades y enlaza su explicación, incluidas las tareas excepcionales de raíz, Identity Center, gestión de credenciales, registros, requisitos por industria/geografía, productos de Marketplace y recursos de información.

Se contrastaron especialmente las [buenas prácticas IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html), [protección de raíz](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html), [tareas y acceso raíz](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html), [evaluación de políticas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html), [SCP](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html), [cuotas Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html), [S3 Object Ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html), [KMS](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) y la [relación Security Hub/CSPM](https://docs.aws.amazon.com/es_es/securityhub/latest/userguide/what-are-securityhub-services.html).

El registro de referencias comprueba accesibilidad HTTP, no la vigencia de todas las frases posibles de cada servicio. Un enlace accesible no demuestra por sí solo una afirmación técnica. Los contrastes específicos anteriores sí se utilizaron para corregir contenido.

## Comprobaciones locales y aplicación

- **UTF-8:** lectura estricta de todos los Markdown, búsqueda de caracteres de sustitución, interrogaciones dentro de palabras y marcadores de plantilla pendientes. Sin incidencias detectadas en la entrega.
- **Rutas y anclas:** comprobación de destinos locales, imágenes y anclas explícitas; 83 correspondencias con destino concreto. No se depende de la generación automática de anclas para las referencias de página.
- **Figuras:** 72 JPG originales existentes, copiados sin alterar. La aplicación entrega las 72 imágenes con HTTP correcto y el navegador pudo decodificarlas todas: 9 en el capítulo 05, 25 en el 06 y 38 en el 07. Se observó el renderizado de una sección IAM en móvil y de la comparativa SG/NACL en escritorio. Esto no equivale a revisar visualmente cada posición de cada página web.
- **Enlaces externos:** se comprobaron las referencias por HTTP. Se corrigió una URL cuyo punto final se había incluido en la extracción. El resultado final distingue accesibilidad de la revisión técnica de contenido descrita arriba.
- **Mermaid:** no se han añadido bloques Mermaid; las comparaciones, tablas y ejemplos son compatibles con el renderizador existente.
- **Integridad existente:** `pnpm.cmd verify:content` ejecutado correctamente. La aplicación conserva siete apuntes de ambos bloques, 16 comparativas y el banco de 370 preguntas. El glosario activo contiene 247 términos tras consolidar 51 compartidos con los 137 anteriores; las definiciones y enlaces previos del Bloque I se conservan, añadiendo alias de búsqueda.
- **Compilación:** `pnpm.cmd build` ejecutado correctamente; Astro informó cero errores, cero advertencias y cero hints, y generó 24 páginas estáticas.
- **Navegación:** comprobados los tres capítulos nuevos, la agrupación del Bloque II y la búsqueda «IAM Identity Center» en conceptos. Los Markdown de revisión pueden descargarse desde las rutas de documentación enlazadas dentro de los capítulos.
- **Protección de material anterior:** se cotejaron hashes de los archivos del Bloque I, scripts existentes y banco de preguntas respecto al inicio de la integración. No se modificaron ni crearon tests ni se amplió el banco de preguntas. Las actividades docentes permanecen únicamente en los apuntes.

## Limitaciones y pendientes reales

1. **No se certifica una lectura palabra por palabra de todas las notas pequeñas de las 83 páginas.** La correspondencia es completa, la revisión visual general se realizó y los detalles que cambian tablas o actividades se ampliaron selectivamente. Una auditoría de literalidad requeriría cotejo adicional del texto pequeño de cada nota con los originales.
2. Los JPG conservan páginas completas. Las tablas y decisiones importantes se reconstruyen en texto para facilitar el estudio, pero las etiquetas pequeñas de algunos diagramas CA requieren abrir la imagen y ampliar o consultar el PDF. No se afirma haber recortado las 72 figuras.
3. No se desplegaron recursos AWS ni se probaron políticas, reglas de red, alarmas o controles de cumplimiento en una cuenta real. Los ejemplos didácticos no son configuraciones listas para producción.
4. No se efectuó una revisión jurídica de GDPR, HIPAA, PCI DSS o transferencias internacionales. Se explica su función y procedencia; Privacy Shield se conserva como referencia histórica sin garantía actual.
5. Las capacidades, cuotas, interfaces y condiciones comerciales pueden cambiar después de la fecha de revisión. La comprobación HTTP no sustituye la documentación actual al configurar un servicio.

La entrega permite estudiar el dominio 2 y conserva las fuentes necesarias para una revisión independiente. «Cobertura de las 83 páginas» significa que todas están identificadas y relacionadas con el contenido o registro administrativo; no significa que se hayan comprobado todos los caracteres de los originales.
