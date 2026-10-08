# Gestión de empleados — TP Final React

Proyecto académico de Matías Romero: listado, búsqueda, alta, edición, eliminación y detalle de empleados con una API de demostración.

## Tecnologías
React 18, Vite, React Router, Axios, CSS Modules y json-server.

## Ejecución
Node.js 22 y npm.

```sh
npm install
# Terminal 1
npm run api
# Terminal 2
npm run dev
# Compilación
npm run build
```

Copiar `.env.example` a `.env`. Por defecto, la API usa `http://localhost:5000`; `VITE_API_URL` permite cambiarla para un entorno de demostración. En un frontend HTTPS, usar una API HTTPS con CORS configurado.

## Sesión de demostración
Usuario: `admin`. Contraseña: `admin`. Son valores de una simulación del frontend, no autenticación de servidor. La sesión queda en sessionStorage y puede cerrarse desde la navegación. Utilizar únicamente datos ficticios. No publicar json-server con datos reales ni atribuirle permisos de acceso que no implementa.

## Publicación
El frontend puede publicarse en Vercel. `vercel.json` permite abrir rutas de la SPA. La API necesita un entorno separado; publicar solo el frontend no levanta json-server.

## Próximos pasos
Pruebas de formularios y fallas de API, cancelación de solicitudes, paginación y un backend autenticado si el proyecto supera la etapa académica.

## Presentación profesional
Proyecto personal o académico de Matías Romero. El código y la documentación describen su alcance; no se atribuyen clientes, métricas ni experiencia de producción no verificados.

## Comprobaciones
El workflow de GitHub Actions instala dependencias y compila el proyecto. El resultado del workflow, y no la existencia de este apartado, determina si la verificación pasó.

## Datos para demostraciones
Usar datos ficticios. No subir bases de datos, contraseñas, claves de servicio ni exportaciones con datos personales.
