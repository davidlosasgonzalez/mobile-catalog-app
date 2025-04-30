# Phone Catalog Challenge

Aplicación web enfocada en la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. Desarrollada como parte de una prueba técnica, priorizando estructura, funcionalidad y claridad de arquitectura.

## Tecnologías utilizadas

- Next.js
- React
- Redux Toolkit para gestión de estado
- Axios para comunicación con la API
- localStorage para persistencia del carrito
- TypeScript para tipado estricto
- ESLint + Prettier + Vitest + Testing Library (tests unitarios)

## Funcionalidades implementadas (idea inicial)

### Día 1

- Configuración de Next.js y Redux Toolkit
- Petición a la API de teléfonos con autenticación `x-api-key`
- Listado inicial de 20 teléfonos en cuadrícula
- Vista principal (`/`) con componente reutilizable por tarjeta
- Separación de tipos, servicios, redux y componentes
- Tipado estricto con interfaces y types auxiliares

### Día 2 (previsto)

- Búsqueda por nombre o marca (vía API)
- Navegación funcional con rutas dinámicas (`/phones/[id]`)
- Detalle básico de un teléfono con nombre, marca, imagen y precio
- Carrito funcional con Redux (añadir, eliminar, persistir en localStorage)
- Vista de carrito: listado de productos, precio total y botón "continuar comprando"
- Persistencia del carrito al refrescar página
- Contador de productos en Header conectado al estado global
- README completo con explicación técnica
- Prueba unitaria básica (representativa)

> El objetivo inicial es cubrir la lógica de negocio. El apartado visual se abordará una vez completadas las funcionalidades previstas.

## Instalación y Configuración

```bash
git clone https://github.com/davidlosasgonzalez/mobile-catalog-app
cd mobile-catalog-app
npm install
```

## Testing

```bash
npm run test
```

Vitest + Testing Library integrados. Tests disponibles:

- Reducer `phoneSlice`
- Componente `PhoneCardItem`
- Componente `PhoneCardList`

## Accesibilidad y estándares

- Estructura semántica con HTML5 (`<header>`, `<main>`, `<section>`)
- Linting con ESLint y Prettier configurados con reglas estrictas
- Responsividad básica adaptada a pantallas móviles y escritorio
- Tipografía base: `Helvetica, Arial, sans-serif`

## 📚 Recursos

- [API oficial](https://prueba-tecnica-api-tienda-moviles.onrender.com/docs/)

## Autor

David Losas González – [Perfil de GitHub](https://github.com/davidlosas)
