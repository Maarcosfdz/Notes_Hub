# 7. Informe de validación

**Fecha de elaboración:** 2 de noviembre de 2026  
**Alcance solicitado:** Bloque I del AWS Certified Cloud Practitioner CLF-C02, tareas 1.1–1.4.

## Archivos generados

- `00_indice.md`
- `01_introduccion_cloud_computing.md`
- `02_beneficios_economia.md`
- `03_infraestructura_y_arquitectura.md`
- `04_adopcion_y_migracion_aws.md`
- `05_glosario_integral.md`
- `06_control_cobertura.md` y `06_matriz_cobertura.md`
- `07_informe_validacion.md`
- `figuras/README.md`

Los cuatro capítulos se incorporaron también a la biblioteca de apuntes de la aplicación. El glosario previo se conserva en `aws-clf-c02/archivo/glosario_anterior.json`; se añadió un glosario nuevo de Bloque I para la vista activa de Conceptos.

## Material revisado y limitaciones

Se leyeron íntegramente los archivos Markdown presentes en `proceso`: la auditoría 03, el prompt maestro 04, el corpus unificado 05, la ampliación oficial 06 y estas instrucciones 07. El corpus aporta desarrollos página por página de T1, T2 y el módulo Cloud Architecture. La ampliación oficial desarrolla brechas de examen, en particular economía y migración.

Los tres PDF sí están disponibles y sus árboles de páginas confirman 30 páginas en `isT1.pdf`, 20 en `isT2.pdf` y 68 en `Capturas.pdf`. También hay 68 capturas de página completa de Cloud Architecture en `C:\Users\mroma\Pictures\Screenshots`; revisé su secuencia en cuatro hojas de contacto y comprobé a tamaño completo las páginas 1, 35 y 68. La primera es la ruta externa indicada por el corpus, la 35 contiene una actividad sobre rendimiento y la 68 es el cierre del módulo.

La revisión visual de CA confirma la secuencia y clasificación general de las páginas, y corrigió la página 45 como cita/contenido en vez de separadora. No hice una lectura ampliada de cada texto pequeño en las 68 capturas. Para T1 y T2 confirmé los recuentos del PDF y contrasté el contenido con el corpus página por página, pero no rendericé las 50 páginas para inspección visual. Por tanto, la cobertura está trazada para 118 páginas; la verificación visual completa de T1/T2 y la lectura fina de todas las capturas de CA quedan pendientes.

El propio corpus 05 tiene una inconsistencia: en su preámbulo indica que el material Cloud Architecture no se adjuntó, aunque más adelante contiene una transcripción/desarrollo de las 68 páginas. Se aprovechó ese desarrollo como fuente secundaria y se anotó la limitación. La auditoría 03 también advierte que el recuento de páginas no equivale a una transcripción literal íntegra.

## Cobertura de objetivos CLF-C02

| Objetivo | Dónde se cubre | Estado |
|---|---|---|
| **1.1 Beneficios de la nube de AWS** | Capítulos 1–3: bajo demanda, consumo medido, elasticidad, economías de escala, agilidad, alcance global y beneficios operativos. | Cubierto con fuentes docentes y ampliación oficial. |
| **1.2 Principios de diseño de AWS** | Capítulo 3: seis pilares Well-Architected y principios, caso AnyCompany, revisión de arquitectura y herramienta. | Cubierto; sostenibilidad se integra desde la ampliación oficial porque CA desarrolla cinco pilares en detalle. |
| **1.3 Adopción y migración** | Capítulo 4: CAF, perspectivas, dominios y fases, programa de migración, 7 Rs, datos y servicios. | Cubierto mediante ampliación oficial; no hay PDF fuente de clase para esta sección. |
| **1.4 Economía de la nube** | Capítulo 2: CAPEX/OPEX, TCO, costes on-prem, BYOL/licencia incluida, rightsizing, automatización y economías de escala. | Cubierto mediante fuente T1 y ampliación oficial. |

La guía oficial consultada asigna el 24 % puntuable al dominio de conceptos de nube. Ese porcentaje no se distribuye aquí entre capítulos.

## Actualidad y atribución

Se enlazó la guía oficial CLF-C02 y la documentación AWS para Well-Architected, CAF, migración y 7 Rs. Las etiquetas separan contenido de T1/T2/CA, ampliación oficial y explicación editorial. Se evitaron cifras históricas de regiones/servidores como datos actuales. Se señaló que el módulo enseña cinco categorías antiguas de Trusted Advisor mientras la documentación actual incluye seis. Se incluyeron avisos de actualidad sobre AWS Migration Hub y Snowball Edge basados en la documentación oficial consultada el 2-11-2026.

## Pendientes para una validación completa

1. Renderizar y revisar visualmente las 50 páginas de T1/T2, incluidas tablas y diagramas.
2. Ampliar la revisión de las capturas de CA donde el texto pequeño o una figura necesite cotejo detallado.
3. Incorporar figuras individuales seleccionadas si se requieren en el manual; las capturas actuales son páginas completas y no están copiadas a `figuras/`.
4. Volver a comprobar disponibilidad y fechas de retirada de productos de migración cuando se vaya a ejecutar un proyecto real.

La cobertura textual queda trazada para **118 páginas** y la revisión visual de CA se completó a nivel de secuencia/página completa con las limitaciones indicadas. La inspección visual detallada de T1/T2 y la lectura minuciosa de todo texto pequeño quedan pendientes.

