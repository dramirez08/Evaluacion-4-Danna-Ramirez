# Portafolio de Danna | Artista Digital

Migración del portafolio de ilustración de la Evaluación 2 a una aplicación de página única con React, TypeScript y Vite. La portada conserva las ilustraciones, la tipografía Domine y la paleta violeta del diseño original. La aplicación incluye una galería con filtro por técnica, testimonios, contacto, una calculadora de comisiones y una vista de repositorios públicos.

[Consultar la captura del portafolio de la Evaluación 2](docs/captura-e2.png).

## Ejecutar el proyecto

Probado con Node.js 26.13.1 y npm 11.20.0. Ejecuta estos comandos desde la raíz del repositorio.

```bash
npm install       # instala las dependencias
npm run dev       # inicia Vite en modo de desarrollo
npm run build     # comprueba TypeScript y genera dist/
npm run preview   # sirve localmente la compilación de dist/
```

`npm run lint` ejecuta ESLint e incluye reglas para TypeScript y los hooks de React. En un clon limpio, `npm ci` instala las versiones fijadas en `package-lock.json`.

Para desplegar, publica el contenido de `dist/` en un alojamiento estático. Configura el servidor para entregar `index.html` en las rutas de la aplicación, como `/galeria` y `/comisiones`. Así `BrowserRouter` puede resolver tanto los enlaces internos como el acceso directo o la recarga de una vista.

## Contrato de la API

Se eligió GitHub REST API porque la sección Proyectos puede mostrar los repositorios reales de la autora y enlazar a su código. El servicio usa `GET` sin credenciales contra la URL base `https://api.github.com` y el endpoint `/users/dramirez08/repos?sort=updated&per_page=6`.

`sort=updated` ordena por actualización y `per_page=6` limita el listado a seis repositorios. La API responde con un arreglo JSON. Cada tarjeta utiliza estos campos.

| Campo | Tipo | Uso |
| --- | --- | --- |
| `id` | `number` | Clave estable de React |
| `name` | `string` | Título |
| `description` | `string \| null` | Descripción o «Sin descripción» |
| `language` | `string \| null` | Lenguaje o «Sin especificar» |
| `stargazers_count` | `number` | Cantidad de estrellas |
| `html_url` | `string` | Enlace al repositorio |

`src/services/github.ts` valida los campos de la respuesta y guarda el último listado exitoso durante la vida de la página. `src/hooks/useGitHubRepositories.ts` cancela la petición con `AbortController` al salir de Proyectos. La interfaz distingue carga, éxito, lista vacía y error.

## Estado y navegación

- `ThemeProvider` comparte el tema entre las vistas y lo guarda en el navegador. La galería mantiene el filtro y la selección del visor en estado local.
- `CommissionsPage` concentra el estado del formulario y los cupos. Calcula el total desde las opciones seleccionadas y aplica el límite de tres cupos en el mismo paso que registra o elimina solicitudes. Los cupos son una simulación local de la vista.
- El encabezado usa `NavLink` para señalar la ruta activa. `SiteLayout` lleva el foco al contenido al navegar y la ruta comodín ofrece un enlace de retorno al inicio.

## Verificación de accesibilidad

Se comprobaron ocho rutas en modo claro y oscuro a 320, 768 y 1440 px. Las 48 combinaciones quedaron sin desbordamiento horizontal de la página. La tabla de precios tiene desplazamiento propio y puede recibir foco para recorrerla con el teclado.

Se ejecutó axe-core en 16 escenarios con reglas automatizables de WCAG 2.1 A y AA, incluidas las vistas de Inicio, Proyectos y Comisiones, el menú y visor abiertos, el formulario con errores y la vista previa. Se detectaron cero infracciones después de las correcciones. La revisión se complementó comprobando con teclado el salto al contenido, la apertura y el cierre del menú, el retorno del foco desde el visor y la eliminación de cupos. También se revisaron los nombres de los controles con icono y el contraste de los fondos con gradiente. Como referencia, el texto de los paneles alcanza 13,55:1 en tema oscuro y 16,60:1 en tema claro.

[Consultar el inventario de migración](INVENTARIO.md) y la [bitácora de uso de IA](uso_ia.md).
