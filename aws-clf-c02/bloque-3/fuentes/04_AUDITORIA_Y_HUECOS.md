# 04. Auditoría del dominio III: cobertura y pendientes

## Mapeo de tareas oficiales

| Objetivo CLF-C02 | Fuente del curso | Ampliación necesaria | Capítulo destino |
|---|---|---|---|
| 3.1 Despliegue/operación | T1 pp.25,30; T6 pp.9,25; experiencia previa de bloques I–II | CloudFormation, IaC, consola/API/CLI/SDK | 08 |
| 3.2 Infraestructura global | T2 pp.4–10; Bloque I cap.03 | Multi-AZ, multirregión, edge y recuperación | 08 |
| 3.3 Cómputo | T6 pp.4–30 y 41–62; T9 pp.4–11,18–29 | Lightsail, Outposts, Batch, Fargate; ciclo de vida y familias actuales | 09 |
| 3.4 Bases de datos | T8 pp.5–42 | ElastiCache, DocumentDB, Neptune, DMS/SCT y estado actual | 10 |
| 3.5 Redes | T5 pp.4–44 | API Gateway, PrivateLink, Global Accelerator, Transit Gateway | 11 |
| 3.6 Almacenamiento | T7 pp.5–43 | FSx, Storage Gateway, Backup, instance store, S3 clases actuales | 12 |
| 3.7 IA/ML y Analytics | Ausencia de tratamiento amplio en estos temas históricos | TODO el objetivo desde referencias oficiales (SageMaker AI, Lex, Polly, Transcribe, Textract, Glue, Athena, Kinesis, etc.) | 13 |
| 3.8 Otras categorías | T2 iconos, T9 eventos y otros ejemplos puntuales | SQS, SNS, EventBridge, Step Functions, SES, Connect, CodeBuild/Pipeline, X-Ray, WorkSpaces, Amplify, IoT Core | 14 |

## Riesgos detectables antes de escribir los capítulos

1. **Diapositivas escaneadas:** no hay capa de texto de utilidad. El mapa y el desarrollo sintetizan material visual; NO equivalen a transcripción literal de los originales. Para diapositivas con números, capturas y tablas densas, usar JPG/PDF a resolución suficiente.
2. **Reglas de precio/cuotas:** T6 pp.31–40 son principalmente economía/optimización y se reservarán para Bloque IV, salvo la relación conceptual entre tamaño, escalado y coste. T4 entero es principalmente Bloque IV, no cargarlo aquí como temario técnico principal.
3. **Temas solapados:** VPC SG/NACL en Bloque II, Región/AZ en Bloque I, IAM/roles en Bloque II. No escribir tres definiciones contradictorias ni duplicar 30 páginas de apuntes.
4. **Nombres antiguos:** revisar clases Glacier, EC2 instance types, Amazon Quick/Quick Sight y la cartera comercial actual; no confundir denominación del examen con la página comercial.
5. **Comparativas de gran importancia:** EBS/S3/EFS/FSx/instance store; Multi-AZ/read replica; RDS/Aurora/DynamoDB/ElastiCache/Redshift; VPC/IGW/NAT/peering/VPN/Direct Connect; CloudFront/Route 53/Global Accelerator; ECS/EKS/ECR/Fargate/Lambda; SNS/SQS/EventBridge/Step Functions.
6. **Actividades T5 y T9:** T5 pp.23–24 tiene ejercicio de identificar componentes, T9 pp.9–10 elección de ELB y T9 pp.16–17 alarmas CloudWatch. Preservar la pregunta y solución solo cuando se haya inspeccionado la figura; no generar preguntas nuevas para el banco de la aplicación.
7. **Integración con aplicación:** no sobrescribir los 7 capítulos actuales, glosarios anteriores ni las 370 preguntas; verificar enlaces e imágenes; generar glosario canónico con alias auténticos.

## Requisitos de validación independientes

- Inventario de páginas y etiquetas: qué es fuente, qué es ampliación oficial y qué es explicación del autor.
- Tablas/figuras reconstruidas a partir de láminas: verificar visualmente a tamaño suficiente, declarar qué quedó sin leer.
- Precisión por concepto: distinguir qué resuelve un servicio y qué no resuelve. Ejemplos técnicos sin políticas inseguras o promesas comerciales.
- Referencias: enlazar la guía oficial, los servicios relevantes y la figura concreta que soporta afirmaciones históricas.
- Enlaces/figuras/compilación: ejecutar comprobaciones, documentar números reales y no afirmar comprobaciones que no se han ejecutado.
- Examen: cobertura 3.1–3.8, énfasis en seleccionar servicios por escenarios, con nivel Cloud Practitioner, no un manual de implementación avanzado.
