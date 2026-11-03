# Estilo visual y editorial

Referencia para mantener coherencia sin repetir reglas en cada página. Los comportamientos funcionales están en [Requisitos](REQUISITOS.md) y las ubicaciones de implementación en [Arquitectura](ARQUITECTURA.md).

## Base visual

La interfaz actual utiliza fondos claros cálidos o superficies oscuras, acento terracota, títulos serif y texto sans serif. Se conserva esa base en cambios rutinarios. Un rediseño es una decisión explícita, no parte implícita de una corrección de contenido.

| Elemento | Criterio |
|---|---|
| Color | Usar tokens semánticos de fondo, superficie, texto, borde y acento; evitar valores sueltos repetidos por página |
| Grupos y etiquetas | Paleta coherente que pueda incluir azul, naranja y verde; acompañar siempre el color con texto |
| Estados | Distinguir acierto, error, selección y foco; no delatar la respuesta antes de comprobar |
| Tipografía | Jerarquía clara de títulos; cuerpo y controles legibles; monoespaciada para código o pequeñas etiquetas cuando ayude |
| Espaciado | Mantener ritmos y anchos de lectura consistentes mediante estilos compartidos |
| Temas | Comprobar claro y oscuro; una combinación válida en uno no garantiza contraste en el otro |

Los valores efectivos viven en CSS. No se mantiene otra tabla de colores que pueda divergir. T07 separa tokens para botón principal, borde de controles, secciones de estudio y Bloques I–IV; los nombres de grupo siguen visibles junto a su identificación por color. Los pares de texto/botón y bordes tienen pruebas de contraste, sin afirmar una auditoría WCAG completa.

## Componentes e interacción

- Cuestionario con opciones en tarjetas, dos columnas cuando hay espacio y una en pantallas estrechas; texto ajustable y área de pulsación cómoda.
- Botón principal de comprobación con texto blanco sobre fondo suficientemente oscuro. Si el acento se aclara en tema oscuro, se revisa el fondo del botón para conservar contraste.
- Foco visible con teclado y etiquetas de controles. El resultado se comunica también con texto, no solo con color.
- Aperturas de apartados y cambios locales sin desplazamientos inesperados; los enlaces conservan su semántica de navegación.
- Tablas e imágenes adaptadas al ancho disponible, con desplazamiento horizontal o posibilidad de ampliar cuando sea necesario.
- Movimiento discreto y respeto de `prefers-reduced-motion`; no añadir animaciones para resolver una tarea de contenido.
- Mensajes comprensibles de ausencia de resultados, selección necesaria y fin de serie.

Son criterios de aceptación, no una certificación de accesibilidad ni de todos los tamaños de pantalla de la web actual.

## Texto de interfaz

Español claro, tildes y UTF-8. Mantener nombres consistentes: Apuntes, Conceptos, Preguntas y Estadísticas. Explicar resultados con frases directas. Los detalles de implementación solo aparecen cuando ayudan al estudiante a decidir o entender un estado.

## Apuntes y preguntas

- Conservar profundidad, definiciones, ejemplos y comparativas. Enlazar a una explicación existente cuando repetirla no aporte valor.
- Distinguir fuente histórica, actualización oficial fechada y explicación editorial. No atribuir al original una ampliación añadida.
- Acompañar figuras con interpretación y procedencia; reconstruir tablas importantes si la imagen sola no es cómoda.
- Encabezados orientados al estudio. Portadas, separadores y administración documental pertenecen a índices o matrices.
- Nombre canónico por concepto y alias auténticos; subtipos, componentes y recursos relacionados no son automáticamente sinónimos.
- Preguntas con explicaciones útiles y distractores comprensibles. El número de respuestas correctas coincide con la selección indicada.
- Las afirmaciones comerciales cambiantes llevan fecha y fuente. No se declara una verificación que no se haya realizado.

Esta guía define presentación. La profundidad y cobertura se contrastan con las fuentes y matrices del bloque correspondiente.
