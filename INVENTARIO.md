# Inventario de migración E2 → React

La referencia visual es [la captura del sitio original](docs/captura-e2.png). La portada conserva el orden de la E2. Cada sección del portafolio también tiene una ruta al seleccionar su enlace del encabezado.

| Elemento de la E2 | Implementación en React | Recuperación y ajustes |
| --- | --- | --- |
| `index.html`, encabezado, enlaces internos y pie | `SiteHeader`, `SiteLayout`, `App` | Se conservó la marca. Los enlaces de navegación pasaron a React Router con estado activo, salto al contenido, gestión de foco y vista 404. |
| `index.html`, portada y `js/interfaz.js` | `Hero`, `Hero.css`, `data/portfolio.ts` | Se recuperaron los cuatro fondos y el control de pausa. El estado determina la animación y el control respeta `prefers-reduced-motion`. Se ajustó el gradiente para mejorar el contraste sobre la ilustración. |
| `index.html`, galería, `img/` y `js/galeria.js` | `GallerySection`, `GalleryFilter`, `ArtworkViewer` | Se conservaron las 18 ilustraciones, su orden y sus descripciones. El filtro y el visor comparten la lista visible. El visor usa `<dialog>`, flechas, Escape y retorno de foco. Las dimensiones de cada imagen reservan su espacio antes de cargarla. |
| `index.html`, biografía, testimonios y contacto, y `js/interfaz.js` | `AboutSection`, `TestimonialsSection`, `ContactSection` | Se mantuvieron los textos, opiniones y canales de contacto. Los testimonios usan un desplegable nativo y aparecen expandidos al entrar en su vista mediante React Router. |
| `comisiones.html` y `js/comisiones.js` | `CommissionsPage`, `CommissionPriceTable`, `CommissionForm`, `CommissionSlots` | Se mantuvieron los precios, las opciones, la calculadora en CLP y el límite de tres cupos. React controla los campos y comparte el estado entre formulario y lista. Se agregaron errores asociados a sus campos y un mensaje de confirmación. La tabla desplazable admite foco y teclado. |
| `js/vista-previa.js` | `ResponsivePreview`, `useModalDialog` | Se mantuvieron los tamaños de 768 px y 390 px. React controla el diálogo y el tamaño. `useLocation` y `useHref` abren la ruta actual sin anidar la barra de vista previa. |
| `css/styles.css` | `src/index.css` y hojas CSS junto a sus componentes | Los tokens de color y estilos base se comparten. Cada bloque usa BEM, por ejemplo `site-header__link--active`, `gallery__image` y `commission-form__field`. Se verificaron foco visible, contraste y márgenes a 320 px. |
| Mejoras solicitadas en la E4 | `ThemeProvider`, menú móvil de `SiteHeader`, `GalleryFilter`, `ProjectsPage` | Se incorporaron el tema claro/oscuro, el menú hamburguesa, el filtro por técnica y la consulta pública de GitHub. La galería de ilustraciones se mantiene en su propia vista. |

Los datos estáticos están en `src/data/` y los contratos de componentes, estado y API en `src/types/`. Los módulos de la E2 se usaron como referencia durante la migración.
