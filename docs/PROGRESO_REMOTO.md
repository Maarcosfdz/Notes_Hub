# Progreso por cuenta

T04A: SQLite es la fuente de verdad. `/api/study/state` obtiene la cuenta de la sesión validada; rechaza `userId` del cliente. Las escrituras requieren JSON acotado y Origin propio. No se envían objetos de estadísticas para sobrescribirlos.

Cada respuesta tiene UUID, revisión semántica, selección e instantánea histórica calculada en servidor (enunciado, opciones, clave, explicación, tema y nivel). El mismo UUID con el mismo contenido se confirma sin duplicar; otro contenido entra en conflicto. Las estadísticas se derivan en orden de inserción. Reiniciar estadísticas establece un corte, conserva los intentos y no elimina resultados de simulacros.

Los simulacros guardan ID, serie, plan ordenado con revisiones, cursor y estado. Cada posición admite un único intento. Avanzar es idempotente y requiere respuesta confirmada. Recargar y seleccionar la serie reanuda la sesión activa; si se había guardado la respuesta antes de recargar, continúa en la siguiente. Reiniciar crea otra sesión, sin borrar la anterior. Los resultados son propios de cada sesión, independientes de estadísticas generales y de puntuaciones oficiales AWS. Una revisión incompatible provoca conflicto explícito, nunca recalificación histórica.

Lectura y favoritos se guardan por recurso con versión. Una marca concurrente igual se confirma; una distinta con versión antigua se rechaza y pide recargar. El cliente muestra guardando/guardado/error y no supone éxito sin confirmación. Una respuesta perdida se reintenta con el mismo ID en la página; recargar una sesión consulta lo que confirmó el servidor. No se ofrece modo offline completo.

Las claves locales antiguas no se leen con migradores ni se borran al entrar. T04B añade importación explícita con previsualización. Las cuentas nunca heredan implícitamente el navegador. Las exportaciones de cuenta usan formato `notes-hub-account`, versión 3, e incluyen materias, intentos, marcas y sesiones; no contienen credenciales.

La migración 3 se respalda antes de aplicarse a una BD existente. Las pruebas recorren 195 respuestas también contra el servicio y restauran una copia en una base distinta. Ninguna prueba usa datos reales.

## Importación implementada en T04B

El asistente acepta legacy/v1/v2 y exportación de cuenta v3. Antes de importar el navegador captura valores brutos sin getters/migración, descarga una copia con SHA-256 y mantiene originales sin cambios. La previsualización del servidor identifica la cuenta destino, materias, formato, eventos, duplicados y legado. Solo la confirmación explícita del digest importa. Cancelar no escribe.

Cada lote conserva el texto original íntegro, digest, fecha y resumen en SQLite privado. Antes de aplicarlo se crea backup online consistente, verificado; cualquier conflicto revierte la transacción. Se deduplican UUID entre lotes solapados, no por texto/fecha. Un UUID con otra instantánea rechaza el lote. Las revisiones se comprueban contra su instantánea, nunca se recalifica con una clave actual. Exportaciones T02B sin campo type se reconocen si coinciden exactamente con la semántica conocida; evidencia antigua imposible de verificar queda como legado separado.

Los agregados anteriores y respuestas sin identidad suficiente se conservan en el archivo original y se muestran como legado, sin sumarlos ni inventar intentos. Las marcas de migración 370→480 y ambos respaldos quedan en el lote bruto; no se vuelve a ejecutar la migración. Marcas ya existentes en servidor prevalecen incluso si son falsas; nuevas marcas se añaden. Importar no borra favoritos ni historial de la cuenta.

Una exportación v3 incluye sesiones y sus respuestas, que se recuperan con enlaces a eventos, plan y resultado propio. La evidencia de sesiones puede recuperar respuestas previas a un reinicio estadístico; al importar a otra cuenta se incorporan como historial identificado, sin trasladar el corte estadístico de la cuenta origen. La operación es de fusión, no una clonación destructiva. Los archivos brutos de lotes previos viajan como archivos archivados dentro de la exportación. Límite actual 10 MiB por copia, con rechazo explícito; no es un canal para secretos ni archivos ajenos al progreso.

La sincronización consulta servidor al cargar/navegar y al volver a una pestaña; lectura/favoritos/estadísticas actualizan su vista. No hay sobrescritura de estadísticas ni sincronización offline. Los errores no se cuentan como respuestas guardadas; se puede reintentar con el ID original. Para revertir una importación, detener el servidor y restaurar su backup en otro archivo, comprobar y apuntar NOTES_DB_PATH al destino; nunca reemplazar una BD activa ni su WAL a mano. Esto revierte también cambios posteriores: conservar antes otra copia. Los ensayos de recuperación usan bases sintéticas y destinos nuevos.
