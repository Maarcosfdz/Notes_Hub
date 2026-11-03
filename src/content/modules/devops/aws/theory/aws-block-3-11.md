---
id: "aws-block-3-11"
area: devops
subject: aws
group: Bloque III · Tecnología y servicios
title: "11. Redes, conectividad y entrega de contenido"
summary: "Capítulo 11 del Bloque 3: apuntes completos, figuras y referencias."
source: "AWS Academy y ampliación oficial; aws-clf-c02/bloque-3/11_redes_y_contenidos.md"
---

# 11. Redes, conectividad y entrega de contenido

El objetivo 3.5 exige identificar componentes de VPC, controles, DNS y conexiones. Una arquitectura de red se entiende siguiendo un flujo: quién inicia la comunicación, hacia qué dirección, por qué ruta, con qué controles y cómo vuelve la respuesta. Un icono de gateway no demuestra que todos esos pasos estén configurados.

`[FUENTE DOCENTE]` T5 completo y T2 p.17. `[AMPLIACIÓN OFICIAL]` Documento 03, PrivateLink, Transit Gateway, API Gateway y Global Accelerator. `[EXPLICACIÓN EDITORIAL]` Desarrollo de flujos y comparaciones. Los detalles históricos se distinguen de las condiciones actuales. Seguridad SG/NACL permanece desarrollada en el Bloque II y se enlaza sin modificarla.

<a id="seccion-11-1"></a>

## 11.1 Direcciones, prefijos y capas

Una red conecta equipos que intercambian información; puede dividirse en subredes para organizar direccionamiento y flujos. IPv4 utiliza direcciones de 32 bits e IPv6, de 128. La representación textual es una forma de expresar esos valores: no debe describirse toda dirección IP como un número decimal con puntos, porque IPv6 utiliza otra notación. Las direcciones deben interpretarse dentro de su alcance; distintas redes privadas pueden utilizar rangos iguales sin estar conectadas, lo que se convierte en un problema cuando se pretende interconectarlas.

**CIDR** expresa un prefijo de red. En `192.0.2.0/24`, los primeros 24 bits identifican el prefijo y quedan 8 para direcciones dentro del bloque: 256 combinaciones. Un `/32` IPv4 identifica una sola dirección y `0.0.0.0/0` abarca todo el espacio IPv4. No expresa «solo mi equipo» ni concede permisos; en una ruta representa un conjunto de destinos y en una regla puede representar un rango de origen o destino.

T5 p.7 presenta las siete capas OSI. El modelo ayuda a distinguir funciones: la capa de red se relaciona con IP y encaminamiento; transporte con mecanismos como TCP y UDP; aplicación con protocolos como HTTP. El servicio que comprende una ruta HTTP y el que dirige flujos de transporte no examinan necesariamente la misma información. No es necesario memorizar todos los protocolos de la tabla para CLF-C02, pero sí entender por qué ALB y NLB no ofrecen idénticas decisiones.

| Capa OSI del material | Función didáctica | Ejemplo de la figura |
|---|---|---|
| 7 Aplicación | Interfaces de comunicación de aplicaciones | HTTP(S), FTP, DHCP, LDAP |
| 6 Presentación | Representación y tratamiento de información | Codificación y cifrado en el modelo |
| 5 Sesión | Organización del diálogo | NetBIOS, RPC en la tabla histórica |
| 4 Transporte | Comunicación entre extremos | TCP y UDP |
| 3 Red | Direccionamiento y encaminamiento | IP |
| 2 Enlace | Transferencia en un enlace o red local | MAC |
| 1 Física | Señales sobre un medio | Flujos de bits |

La tabla es un modelo pedagógico; los protocolos reales no siempre se reparten de forma perfecta en casillas. No se infiere de ella que activar un producto en una capa configure automáticamente todas las capas restantes.

<a id="seccion-11-2"></a>

## 11.2 Amazon VPC y subredes

**Amazon Virtual Private Cloud**, VPC, permite definir una red virtual lógicamente aislada en una región. El cliente elige direccionamiento, subredes, rutas y controles de su entorno. Una VPC puede abarcar varias AZ; una subred pertenece a una sola AZ. Esto permite distribuir componentes entre zonas sin dejar de pertenecer a la misma VPC regional.

La figura T5 p.10 representa dos subredes en zonas diferentes. La separación permite diseñar disponibilidad, pero dos subredes vacías no hacen que una aplicación se distribuya entre ellas. Deben desplegarse recursos, configurarse conectividad y decidir cómo se mantienen datos y tráfico. Compartir cuenta o región tampoco implica que dos VPC distintas estén conectadas automáticamente.

![T5 p.10, fuente histórica](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p10.jpg)

[Registro de la página y detalles conservados](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p10).

T5 p.11 afirma que el rango no puede cambiarse después de crear la VPC. El matiz actual es importante: no debe confundirse reemplazar el CIDR primario con asociar bloques secundarios compatibles. La [documentación de CIDR](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html) describe esas posibilidades y restricciones. Antes de conectar redes, se planifica que los rangos no se superpongan donde el mecanismo de conexión lo impida.

### El ejemplo de direcciones reservadas

T5 p.12 utiliza `10.0.0.0/16` y cuatro subredes `/24` como ejemplo. Un `/24` contiene 256 direcciones y la tabla muestra cinco reservadas en el contexto ordinario del ejemplo, dejando 251 para recursos. No debe leerse que cuatro `/24` agotan todo el `/16`: son cuatro subredes elegidas dentro de un espacio mayor. La figura contiene además rótulos repetidos, por lo que no se propone copiar su dibujo como un plan final de direccionamiento.

| Dirección del ejemplo 10.0.0.0/24 | Reserva mostrada |
|---|---|
| 10.0.0.0 | Dirección de red |
| 10.0.0.1 | Enrutador de VPC |
| 10.0.0.2 | DNS |
| 10.0.0.3 | Uso futuro |
| 10.0.0.255 | Posición de dirección de broadcast; VPC no implica admitir broadcast tradicional |

Este cálculo ayuda a dimensionar subredes: una lista de instancias no es lo único que puede consumir direcciones, porque otros recursos crean interfaces. La reserva concreta y las excepciones de funcionalidades deben comprobarse al implantar. Referencia: [dimensionamiento de subredes](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-sizing.html).

<a id="seccion-11-3"></a>

## 11.3 Interfaces, direcciones y tablas de rutas

Una **Elastic Network Interface**, ENI, es una interfaz virtual con atributos como direcciones y asociaciones de seguridad bajo sus condiciones. T5 p.13 diferencia la principal, que no se desconecta como una interfaz secundaria, de interfaces que pueden reasignarse cuando el servicio lo permite. La reasignación conserva atributos, pero debe respetar compatibilidad y ubicación; no es un mecanismo universal para mover una instancia entre zonas.

Una IP privada identifica un extremo dentro de su entorno de red. Una IP pública permite direccionamiento público bajo configuración adecuada. La **Elastic IP** es una dirección pública estática administrada como recurso; puede reasociarse conforme a las reglas del servicio. Ninguna de ellas configura por sí sola puertos, rutas o autenticación de la aplicación.

Una **tabla de rutas** relaciona destinos con objetivos. La ruta local permite comunicación dentro de los rangos de VPC bajo el comportamiento de red y controles. Las rutas más específicas y las asociaciones de tablas determinan por dónde sale cada flujo. Una subred utiliza una tabla asociada explícitamente o la principal según configuración; varias subredes pueden compartir una tabla. Las afirmaciones de la fuente acerca de rutas locales no deben extrapolarse a la imposibilidad de cualquier función avanzada de modificación de rutas.

**Ejemplo editorial:** la tabla de una subred contiene `10.0.0.0/16 → local` y `0.0.0.0/0 → igw-id`. El tráfico hacia otra dirección de la VPC utiliza la ruta correspondiente a ese rango; el de otro destino IPv4 puede usar la ruta por defecto. Pero esa salida no demuestra que una instancia sin dirección pública pueda comunicar directamente con Internet a través del IGW. Es necesario analizar todos los requisitos.

<a id="seccion-11-4"></a>

## 11.4 Internet Gateway y NAT Gateway

Un **Internet Gateway**, IGW, permite comunicación con Internet para recursos con la configuración adecuada de VPC. En el caso IPv4 público de T5 p.17, la tabla de la subred dirige tráfico al IGW y la instancia necesita una dirección pública, además de controles que permitan el flujo. Una subred se denomina pública por su ruta hacia el IGW, no porque todo recurso que contiene sea automáticamente accesible.

Un **NAT Gateway** permite a recursos iniciar conexiones salientes bajo sus capacidades. En la arquitectura pública de T5 p.18, el NAT está en una subred pública, tiene direccionamiento apropiado y la tabla privada lo usa como objetivo para salir. La respuesta de la conexión iniciada puede regresar; no se configura así un servidor privado para admitir cualquier conexión nueva iniciada desde Internet.

![T5 p.18, fuente histórica](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p18.jpg)

[Registro de la página y detalles conservados](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p18).

IGW y NAT no son equivalentes. El primero participa en conectividad pública de la VPC; el segundo traduce direcciones en el flujo correspondiente para que recursos privados inicien conexiones sin exponerlos del mismo modo. NAT tampoco es un firewall que evalúe toda intención de la aplicación ni un sustituto de controles de salida. Deben distinguirse variantes públicas y privadas de NAT y el papel de IPv6, evitando aplicar el ejemplo IPv4 a todos los casos.

La disponibilidad debe seguir el alcance de la modalidad utilizada. En el diseño zonal presentado, compartir un único NAT entre subredes de varias AZ puede introducir dependencia de esa zona y transferencias entre zonas. La necesidad de reducir esa dependencia influye en la topología. No se prescribe una configuración universal sin considerar requisitos, modalidad y coste.

<a id="seccion-11-5"></a>

## 11.5 Compartir, emparejar y centralizar redes

**VPC sharing** permite compartir subredes con cuentas participantes dentro del marco admitido, utilizando mecanismos como AWS Resource Access Manager, AWS RAM. T5 p.19 muestra una cuenta propietaria de la VPC y otras que despliegan recursos participantes. No significa que Organizations conceda automáticamente conectividad o acceso a datos de todas las cuentas. Gobierno de cuentas, propiedad de red y permisos sobre recursos son dimensiones diferentes.

**VPC peering** establece conectividad privada entre dos VPC compatibles, incluso en escenarios de cuentas o regiones diferentes. Requiere rutas y controles adecuados; no admite superposición de direccionamiento donde el servicio lo restringe. La relación no es transitiva: si A tiene peering con B y B con C, A no obtiene por ello una ruta a C a través de B. T5 p.20 hace explícita esa restricción.

**AWS Transit Gateway** proporciona un punto central para conectar múltiples redes mediante adjuntos y tablas de rutas bajo sus capacidades. Puede simplificar una topología extensa frente a mantener relaciones individuales entre cada par de redes. Centralizar también exige diseñar segmentación y control de rutas; no implica que todas las redes deban tener acceso irrestricto entre sí.

**AWS PrivateLink** ofrece acceso privado a servicios compatibles mediante endpoints y su modelo de conectividad. No equivale a una VPN que permita recorrer libremente toda la red del proveedor del servicio. Es útil distinguir «consumir un servicio concreto de forma privada» de «conectar dos redes completas». Los endpoints tienen configuración, permisos y alcance que deben revisarse.

**Figura de apoyo — Peering y rutas de las dos VPC.** `[FUENTE HISTÓRICA: T5 p.20]` Las tablas conservan la ruta local y añaden como destino el rango de la otra VPC mediante el peering. La anotación A–B–C recuerda que encadenar dos relaciones no aporta transitividad entre A y C; siguen siendo necesarios rangos compatibles y controles.

![Peering y rutas de las dos VPC](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p20.jpg)

[Registro de fuente](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p20).

<a id="seccion-11-6"></a>

## 11.6 VPN y Direct Connect

**AWS Site-to-Site VPN** conecta redes mediante túneles cifrados sobre la conectividad subyacente. El esquema T5 p.21 representa un gateway de cliente y un gateway del lado AWS, más rutas hacia el rango corporativo. Definir el túnel no elimina la necesidad de dirigir el tráfico por él. Tampoco garantiza que la red de origen o destino permita todas las comunicaciones.

**AWS Client VPN** resuelve acceso de usuarios y dispositivos remotos mediante un servicio de VPN cliente. La diferencia principal es quién se conecta: una red corporativa completa frente a un usuario remoto según su configuración. Ambas pertenecen a opciones VPN, pero sus casos y mecanismos de autenticación y rutas no son idénticos.

**AWS Direct Connect** proporciona conectividad dedicada hacia ubicaciones y servicios compatibles. Se valora por requisitos de red y prestaciones frente al uso de Internet público como única vía. Una conexión dedicada no implica cifrado extremo a extremo por defecto; cuando se necesita, deben elegirse mecanismos compatibles y configurarse. La distancia, la capacidad, la redundancia y las rutas siguen afectando al resultado.

En una arquitectura híbrida pueden coexistir enlaces y rutas alternativas, pero un único enlace físico no constituye automáticamente una solución resistente a fallos. Debe evaluarse qué ocurre cuando falla el circuito, el equipo del cliente o la ubicación. El requisito de recuperación guía la redundancia, y el cifrado guía otra parte del diseño.

**Figura de apoyo — Túnel Site-to-Site y rango corporativo.** `[FUENTE HISTÓRICA: T5 p.21]` La tabla privada dirige el rango corporativo 192.168.10.0/24 hacia el gateway virtual del ejemplo. El túnel cifra la conexión entre redes, pero no elimina la necesidad de rutas y controles. El rótulo de la subred pública contiene una inconsistencia de rango y no debe copiarse como plan de direccionamiento.

![Túnel Site-to-Site y rango corporativo](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p21.jpg)

[Registro de fuente](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p21).

<a id="seccion-11-7"></a>

## 11.7 Actividad original: etiquetar el diagrama

T5 p.23 pide «Etiquetar este diagrama» y deja marcadores sobre la arquitectura; p.24 presenta la solución. La actividad se conserva como identificación visual y no se convierte en preguntas nuevas de la aplicación.

![T5 p.23, fuente histórica](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p23.jpg)

[Registro de la página y detalles conservados](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p23).

| Parte de la solución p.24 | Interpretación |
|---|---|
| Región | Ámbito geográfico del conjunto de recursos representado |
| Zona de disponibilidad | Dominio zonal que contiene ambas subredes del dibujo |
| VPC 10.0.0.0/16 | Red regional y su rango ilustrativo |
| Subred pública 10.0.1.0/24 | Subred con ruta pública apropiada |
| Subred privada 10.0.2.0/24 | Subred cuya salida se representa a través del NAT |
| Direcciones IP privadas | Direcciones de las instancias dentro de sus subredes |
| Interfaz de red elástica | Interfaz que conecta el recurso a la red virtual |
| Puerta de enlace NAT | Objetivo para salida iniciada desde la red privada |
| Puerta de enlace de Internet | Conexión pública de la VPC según configuración |
| Tabla de enrutamiento | Conjunto de destinos y objetivos del flujo |
| Ruta local 10.0.0.0/16 | Camino para el rango interno representado |
| Ruta 0.0.0.0/0 a igw-id | Salida IPv4 de la tabla pública mostrada |

![T5 p.24, fuente histórica](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p24.jpg)

[Registro de la página y detalles conservados](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p24).

La figura no dibuja todos los requisitos posibles ni una arquitectura multizona completa. Para razonar, sigue la solicitud de una instancia privada hacia Internet y su respuesta; después explica por qué no puede concluirse que una petición arbitraria desde Internet deba llegar a esa misma instancia. Identificar nombres es el primer paso; relacionar las rutas es el objetivo didáctico.

<a id="seccion-11-8"></a>

## 11.8 Seguridad dentro del flujo

Los **Security Groups** permiten tráfico a interfaces o recursos asociados y mantienen estado; las **Network ACL** actúan en el límite de subred con reglas numeradas Allow/Deny y sin estado. La respuesta de una conexión debe analizarse conforme a esa diferencia. Una regla de red no concede a una identidad permiso IAM para operar un recurso.

T5 pp.26–32, incluidas tablas de puertos 80,443,22 y 1433 y ACL numeradas, ya se desarrollan en el [capítulo 07 del Bloque II](/materias/aws/security-block-2-07/#seccion-7-2). Se conserva ese enlace preciso, las figuras nuevas en el corpus y su correspondencia individual en la matriz. No se repiten aquí todas las tablas ni se modifican las anteriores.

**Amazon Inspector** evalúa vulnerabilidades y exposición de recursos compatibles. Aunque la guía lo mencione en el contexto de seguridad de VPC, no sustituye una ruta ni funciona como una ACL que decide cada paquete. El diagnóstico necesita separar direccionamiento, comunicación, autorización y evaluación de vulnerabilidades.

<a id="seccion-11-9"></a>

## 11.9 CloudFront: origen, edge y caché

Una **Content Delivery Network**, CDN, distribuye entrega de contenido mediante ubicaciones próximas a usuarios y mecanismos de caché. **Amazon CloudFront** recibe solicitudes y puede responder desde una copia almacenada o buscar la información en el origen según configuración. El origen conserva o genera el contenido; la CDN ayuda a reducir distancias de entrega y determinadas cargas sobre él.

T5 pp.34–37 ilustra los saltos y distancias de red, las ubicaciones edge y las cachés regionales. Un objeto popular puede permanecer cerca del usuario; otro puede requerir acudir al origen o a otro nivel de caché. La caché depende de claves, políticas y vigencia, no solo de que exista una distribución. El mismo servicio también puede participar en entrega de tráfico dinámico, cuya caché exige especial cuidado.

![T5 p.37, fuente histórica](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p37.jpg)

[Registro de la página y detalles conservados](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p37).

**Ejemplo editorial:** las imágenes públicas de un catálogo pueden almacenarse y servirse de forma reutilizable. La página de un usuario autenticado no debe compartirse entre personas por utilizar una clave de caché incorrecta. La aceleración no justifica exponer datos privados ni asumir que todo contenido es estático. El origen y sus permisos deben diseñarse junto con la política de distribución.

La explicación histórica sobre comprobar si el contenido cambió es un caso de revalidación, no una regla universal de que toda respuesta dinámica pueda entregarse desde caché o de que cada solicitud envíe siempre un mismo dato al origen. Las opciones actuales deben consultarse cuando se configura el servicio. Las afirmaciones comerciales de pago por uso de 2022 tampoco se presentan como contrato vigente.

<a id="seccion-11-10"></a>

## 11.10 Route 53: nombres y políticas DNS

**Amazon Route 53** proporciona funciones DNS administradas, registro de dominios y comprobaciones de salud según sus capacidades. DNS permite resolver un nombre a información que el cliente usa para conectarse. No transporta todas las conexiones posteriores como si fuera un proxy HTTP. T5 p.40 dibuja al usuario consultando mediante un resolver y recibiendo una dirección.

La resolución puede almacenarse en caché. Por eso modificar una respuesta no significa mover de inmediato todas las conexiones existentes o imponer un porcentaje exacto de peticiones de aplicación. Las políticas ayudan a decidir respuestas DNS según criterios, dentro de esa naturaleza del sistema.

| Política | Criterio de respuesta | Caso y matiz |
|---|---|---|
| Simple | Recurso o respuesta configurada sin selección avanzada equivalente | Escenario básico; no confundir varios valores estáticos con salud individual |
| Ponderada | Pesos relativos entre registros | Migración gradual; los pesos no garantizan porcentajes exactos de conexiones |
| Latencia | Rendimiento de latencia hacia regiones con recursos | No equivale simplemente a distancia geográfica |
| Geolocalización | Ubicación del usuario | Personalización regional; no acredita cumplimiento legal por sí sola |
| Geoproximidad | Ubicación de recursos y sesgo compatible | Ajustar zonas de atracción según diseño |
| Failover | Principal y secundario según salud configurada | Activar una alternativa cuando corresponde |
| Multivalor | Conjunto de respuestas con salud según configuración | No sustituye todas las capacidades de un balanceador |

La documentación también incluye opciones basadas en IP. La tabla preserva los mecanismos del curso y el [catálogo oficial de políticas](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html) permite consultar el alcance actual. Ninguna selección DNS mueve automáticamente datos, replica una base o valida una sesión de usuario.

T5 p.43 combina selección regional por latencia y balanceo entre zonas dentro de cada región. Son dos decisiones distintas: escoger un destino regional y repartir tráfico entre servidores de esa región. T5 p.44 muestra failover desde una aplicación con ELB, instancias y base hacia un sitio estático S3. El sitio estático puede informar de una incidencia, pero no se convierte por ello en una copia funcional de la aplicación transaccional.

![T5 p.44, fuente histórica](/docs-aws/aws-clf-c02/bloque-3/figuras/t5_p44.jpg)

[Registro de la página y detalles conservados](/docs-aws/aws-clf-c02/bloque-3/fuentes/05_CORPUS_POR_PAGINA.md#t5-p44).

<a id="seccion-11-11"></a>

## 11.11 API Gateway y Global Accelerator

**Amazon API Gateway** permite publicar y administrar APIs compatibles: sus endpoints reciben solicitudes y las encaminan hacia integraciones como funciones o servicios de aplicación. El equipo define recursos, rutas o contratos, autorización y otros comportamientos según la modalidad. No es una base de datos ni el código de negocio de la API; esas funciones permanecen en servicios posteriores. Puede utilizarse delante de Lambda, pero también tiene otras integraciones y no debe identificarse como un sinónimo de Lambda.

**AWS Global Accelerator** utiliza la red global y endpoints compatibles para mejorar el acceso a aplicaciones bajo sus capacidades de encaminamiento y salud. No debe confundirse con una CDN: su propósito no es almacenar copias de todos los objetos como CloudFront. Tampoco realiza la misma función que DNS, aunque los servicios puedan combinarse en una solución.

Para elegir, pregunta si se necesita resolver nombres, distribuir objetos mediante caché, administrar una API o dirigir tráfico global hacia endpoints. Route 53, CloudFront, API Gateway y Global Accelerator resuelven esas necesidades de forma diferente. La aplicación subyacente sigue necesitando cómputo, datos, permisos y disponibilidad.

Referencias complementarias: [redes y entrega de contenido](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/networking-services.html), [qué es API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) y [Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html). Los ejemplos docentes y sus figuras se identifican individualmente en el corpus y la matriz.
