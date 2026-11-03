# Biblioteca personal

T05 implementado. Decisión confirmada por el usuario: una cuenta comienza sin materias seleccionadas y ve el catálogo completo. El inicio permite añadir, ocultar y recuperar con controles nativos de teclado y aria-pressed. Todos los usuarios autenticados conservan acceso por URL y áreas a todas las materias del catálogo.

Las preferencias usan marcas versionadas kind=library, identificadas por cuenta y subject. El área se obtiene del catálogo: el subject es globalmente único y estable en la aplicación, no cambia al reorganizar áreas. No hay reglas AWS en el selector. Una nueva materia del catálogo aparece sin cambiar el código de biblioteca; una retirada se oculta pero conserva sus filas y progreso. No reutilizar un ID retirado para una materia diferente. Renombrar IDs requiere una migración explícita de referencias y filas con backup, no editar solo el catálogo. El título visible puede cambiar sin cambiar el ID.

Ocultar/restaurar solo modifica la preferencia; lectura, favoritos, intentos y simulacros permanecen. Las versiones evitan sobrescribir un cambio concurrente contrario. Las preferencias se leen en servidor al navegar/recargar, también desde otro dispositivo. Quitar la interfaz de biblioteca no requiere borrar datos.
