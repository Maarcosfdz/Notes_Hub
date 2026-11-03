---
id: cloud-block-1-migracion
area: devops
subject: aws
group: Bloque I · Fundamentos
title: Adopción y migración a AWS
summary: AWS CAF, recorrido de transformación, fases, 7 Rs y servicios de migración.
icon: ↗
source: Ampliación oficial CLF-C02, tarea 1.3; corpus de auditoría 03
---

# 4. Adopción y migración a AWS

> `[AMPLIACIÓN OFICIAL]` Las tres fuentes docentes presentes (T1, T2 y Cloud Architecture) desarrollan poco o nada el dominio de migración. Este capítulo cubre la brecha con la ampliación oficial disponible. No se atribuye esta sección a diapositivas que no la contienen.

## 4.1 Adopción cloud y resultados de negocio

Adoptar cloud es una transformación organizativa y técnica, no solo mover máquinas. Puede implicar capacidades, gobierno, seguridad, procesos de operación, habilidades, datos y modelo de producto. La tarea 1.3 del CLF-C02 pide reconocer beneficios de migrar a AWS, resultados del marco CAF y estrategias de migración, entre otros objetivos.

La guía oficial relaciona la adopción con resultados como reducir riesgos, mejorar resultados ambientales/ESG, aumentar ingresos y mejorar eficiencia operativa. Son posibilidades que deben concretarse con objetivos medibles. Una organización identifica primero por qué cambia —por ejemplo, cerrar un centro de datos, acelerar lanzamientos o mejorar recuperación— y define señales que permitan saber si la transición produjo el resultado esperado.

## 4.2 AWS Cloud Adoption Framework (AWS CAF)

AWS CAF ayuda a estructurar la transformación cloud y a identificar capacidades y brechas. Sus seis **perspectivas** observan la transformación desde distintos grupos de capacidades; no son seis fases ni los dominios del examen.

| Perspectiva | Enfoque |
|---|---|
| **Business** | Alinear inversión y transformación con resultados de negocio, valor y prioridades. |
| **People** | Preparar habilidades, roles, cultura, cambio organizativo y colaboración. |
| **Governance** | Priorizar iniciativas y gestionar valor, riesgo y control. |
| **Platform** | Diseñar y gestionar entornos cloud, arquitectura, aprovisionamiento e integración. |
| **Security** | Gestionar riesgos de seguridad, controles, identidad, protección y respuesta. |
| **Operations** | Operar, observar y mejorar servicios y cargas de trabajo. |

Las perspectivas Business, People y Governance suelen agruparse como capacidades de negocio; Platform, Security y Operations, como capacidades técnicas. Esta agrupación ayuda a localizar responsables y dependencias, no convierte las perspectivas en silos.

### Dominios de transformación y fases CAF

La documentación del CAF organiza capacidades en cuatro **dominios de transformación**: tecnología, procesos, organización y producto. Estos dominios indican qué tipo de cambio se está realizando.

El recorrido de transformación tiene cuatro fases iterativas:

1. **Envision**: relacionar oportunidades con resultados de negocio medibles y acordar dirección.
2. **Align**: identificar brechas, dependencias, capacidades y prioridades para alinear las áreas afectadas.
3. **Launch**: ejecutar iniciativas piloto o prioritarias, demostrar avance y aprender.
4. **Scale**: extender iniciativas que han demostrado valor y ampliar las capacidades necesarias.

Las fases son iterativas: hallazgos del lanzamiento o del escalado pueden modificar prioridades y planes. No se deben confundir con las fases operativas de una gran migración (Assess, Mobilize, Migrate and modernize).

## 4.3 Fases de un programa de migración

AWS describe programas de migración amplios en tres fases:

| Fase | Trabajo típico | Resultado |
|---|---|---|
| **Assess** (evaluar) | Construir caso de negocio, inventariar cartera, dependencias, riesgos, preparación y oportunidades de migración. | Alcance, prioridades, hipótesis de coste/beneficio y plan inicial. |
| **Mobilize** (movilizar) | Cerrar brechas de preparación, crear landing zone, preparar gobierno/seguridad/operación, formar equipos y ensayar oleadas. | Entorno y organización preparados para migrar a escala. |
| **Migrate and modernize** (migrar y modernizar) | Migrar aplicaciones y datos por oleadas, validar y estabilizar; modernizar cuando aporte valor y sea viable. | Cargas migradas y, según el caso, evolucionadas. |

La guía de migraciones grandes divide el trabajo detallado en **Initialize** e **Implement** dentro del programa. Las olas o waves agrupan aplicaciones con dependencias y ventanas de cambio compatibles. Conviene probar el proceso con una primera oleada, aprender y ajustar antes de ampliar. Una **landing zone** es un entorno cloud inicial con cuentas, identidad, red, registros, controles y gobierno básicos para operar cargas de forma consistente.

## 4.4 Estrategias de migración: las 7 Rs

La estrategia se decide por aplicación, datos, dependencias, plazo, riesgo y objetivo. Las siete estrategias comunes son:

| Estrategia | Qué se hace | Ejemplo o consideración |
|---|---|---|
| **Rehost** | Migrar tal cual (“lift and shift”), con pocos cambios. | Trasladar una VM a EC2 para salir de un centro de datos con rapidez; optimización posterior posible. |
| **Relocate** | Mover una plataforma o conjunto de cargas sin rediseñar cada aplicación. | Reubicar un entorno compatible a otra plataforma/ubicación soportada. |
| **Replatform** | Hacer ajustes acotados para usar servicios cloud sin reescribir toda la aplicación. | Cambiar la base de datos autogestionada por un servicio relacional administrado si es compatible. |
| **Refactor / Re-architect** | Modificar sustancialmente arquitectura o código para aprovechar capacidades cloud. | Descomponer una aplicación o pasar componentes a un modelo administrado/serverless. |
| **Repurchase** | Sustituir por otro producto, a menudo SaaS. | Cambiar una solución instalada por una suscripción de producto equivalente. |
| **Retain** | Mantener una carga donde está, al menos por ahora. | Retener por regulación, dependencia, coste o porque no es prioridad. |
| **Retire** | Apagar una aplicación que ya no aporta valor o está duplicada. | Eliminar una carga obsoleta tras confirmar dependencias y retención de datos. |

Una cartera suele combinar varias Rs; “migrar todo con una estrategia” raramente encaja. Rehost puede acelerar la salida, pero no ofrece por sí mismo modernización ni optimización de coste. Retain y Retire son resultados intencionales del análisis, no fracasos.

## 4.5 Datos y servicios de migración

La elección de herramienta depende de volumen, ancho de banda, ventana, continuidad, formato, motor, estructura y controles. Hay migración por red y transferencia física; para bases de datos, hay que planificar tanto datos como esquema y compatibilidad.

| Servicio o recurso | Uso general |
|---|---|
| **AWS Database Migration Service (AWS DMS)** | Migrar bases de datos y mantener replicación durante la transición; Change Data Capture puede replicar cambios continuos después de una carga inicial, según el origen/destino admitidos. |
| **AWS Schema Conversion Tool (AWS SCT)** | Evaluar y convertir esquemas/código de bases cuando se cambia entre motores; requiere revisar incompatibilidades y esfuerzo manual restante. |
| **AWS DataSync** | Transferir datos entre almacenamiento local y servicios de almacenamiento AWS o entre ubicaciones compatibles, con planificación y verificación. |
| **AWS Application Migration Service (MGN)** | Replicar servidores y apoyar migración de aplicaciones; AWS está impulsando AWS Transform como experiencia de próxima generación. |
| **AWS Migration Evaluator** | Analizar inventario/uso para apoyar una evaluación económica y el caso de migración. |
| **AWS Snowball Edge** | Dispositivo físico para mover grandes volúmenes cuando la red no es adecuada. Nota de actualidad: AWS dejó de aceptar nuevos clientes para Snowball Edge el 7-11-2025 y anunció fin de soporte en regiones comerciales el 31-12-2026, con excepciones indicadas para entornos existentes de GovCloud/ADC. Verifica disponibilidad y alternativas antes de planificar. |
| **AWS Transfer Family** | Transferencia administrada de archivos mediante protocolos compatibles como SFTP, FTPS y FTP hacia almacenamiento AWS. |
| **AWS Direct Connect** | Conectividad dedicada desde una ubicación externa a AWS; puede ayudar con conectividad constante, pero no es por sí mismo una herramienta que convierta o replique datos. |

`[NOTA DE ACTUALIZACIÓN · 2026]` AWS Migration Hub dejó de aceptar nuevos clientes el 7 de noviembre de 2025; la documentación oficial recomienda AWS Transform para capacidades de siguiente generación. El corpus de clase puede mostrar nombres o pantallas anteriores. La disponibilidad y las rutas de producto pueden variar; consulta el anuncio oficial antes de diseñar un plan.

## 4.6 Cómo elegir y validar

1. Aclara el resultado de negocio, requisitos de disponibilidad, seguridad, residencia y plazo.
2. Descubre la cartera, dependencias, licencias y patrones de consumo; no planifiques solo a partir de una lista de servidores.
3. Decide la R por aplicación y documenta por qué retener, retirar, rehostear, etc.
4. Diseña la landing zone y las capacidades de operación y gobierno.
5. Agrupa oleadas, ensaya migración y reversión, valida datos y aplicación, y define criterios de aceptación.
6. Tras estabilizar, mide costes y rendimiento. Moderniza cuando el valor compense el riesgo y esfuerzo.

La migración de una base de datos requiere considerar motor, esquema, tipos de datos, volumen, cambios durante la copia, ventana de corte, consistencia y prueba de aplicación. La replicación puede reducir la interrupción, pero no elimina la necesidad de verificar integridad, compatibilidad y reversión.

## Recursos oficiales

- [Dominio 1 del CLF-C02](https://docs.aws.amazon.com/es_es/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain1.html)
- [AWS CAF: perspectivas y capacidades](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/foundational-capabilities.html)
- [AWS CAF: recorrido de transformación](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/your-cloud-transformation-journey.html)
- [Fases de migraciones grandes](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/phases.html)
- [Estrategias de migración](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html)
- [Cambio de disponibilidad de AWS Migration Hub](https://docs.aws.amazon.com/migrationhub/latest/ug/migrationhub-availability-change.html)
- [Historial de AWS Snowball Edge](https://docs.aws.amazon.com/snowball/latest/developer-guide/doc-history.html)

