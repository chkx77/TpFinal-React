Trabajo Práctico Final de React - Romero Matías

Este proyecto es una aplicación web desarrollada en React como parte de un trabajo práctico final. La aplicación permite gestionar empleados y realizar acciones básicas como iniciar sesión y ver detalles de cada empleado.

## Funcionalidades Básicas

1. **Inicio de Sesión**: 
   - Puedes iniciar sesión con las siguientes credenciales:
     - **Usuario**: `admin`
     - **Contraseña**: `admin`

2. **Página Principal**:
   - Muestra una lista de empleados cargados desde un archivo `db.json`.
   - Cada empleado tiene un enlace para ver más detalles.

3. **Página de Detalles del Empleado**:
   - Muestra información detallada del empleado seleccionado.
   - Incluye una imagen del empleado (`empleado.png`).

4. **Botón de Volver**:
   - En la página de detalles del empleado, hay un botón para volver a la lista de empleados.

## Limitaciones

- **Sesión y Deslogueo**:
  - Actualmente, no se ha implementado una funcionalidad completa para mantener la sesión iniciada o permitir el deslogueo. La aplicación no guarda el estado de sesión y se requiere iniciar sesión cada vez que se recarga la página.
