# Phone Catalog Challenge

Aplicación web enfocada en la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. Desarrollada como parte de una prueba técnica, priorizando estructura, funcionalidad y claridad de arquitectura.

## Tecnologías utilizadas

-   [Next.js](https://nextjs.org/)
-   [React](https://react.dev/)
-   `localStorage` para persistencia del carrito
-   [En construcción...]

## Funcionalidades implementadas (idea inicial)

### Día 1

-   Configuración de Next.js y Redux Toolkit
-   Petición a la API de teléfonos con autenticación `x-api-key`
-   Listado inicial de 20 teléfonos en cuadrícula
-   Búsqueda en tiempo real por nombre o marca (via API)
-   Navegación funcional con rutas dinámicas (`/phones/[id]`)
-   Detalle básico de un teléfono con nombre, marca, imagen y precio

### Día 2

-   Carrito funcional con Redux (añadir, eliminar, persistir en localStorage)
-   Vista de carrito: listado de productos, precio total y botón "continuar comprando"
-   Persistencia del carrito al refrescar página
-   Contador de productos en Header conectado al estado global
-   README completo con explicación técnica
-   Prueba unitaria básica (representativa)

> El objetivo inicial será gestionar la parte lógica del sistema, dejando de lado los estilos, en los que me centraré cuando termine las funcionalidades previstas en los días 1 y 2.

## Instalación y Configuración

```bash
git clone https://github.com/davidlosasgonzalez/mobile-catalog-app
cd mobile-catalog-app
npm install
```

[En construcción...]

## Testing

```bash
npm run test
```

[En construcción...]

## Accesibilidad y estándares

-   Estructura semántica con HTML5 (`<header>`, `<main>`, `<nav>`)
-   Linting con ESLint y Prettier
-   Responsividad básica adaptada a pantallas móviles y escritorio
-   Fuentes: `Helvetica, Arial, sans-serif`

## 📚 Recursos

-   [API oficial](https://prueba-tecnica-api-tienda-moviles.onrender.com/docs/)
-   [Figma Design](https://www.figma.com/file/...)

## Autor

David Losas González – [Perfil de GitHub](https://github.com/davidlosas)
