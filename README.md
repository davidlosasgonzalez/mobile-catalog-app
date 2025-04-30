# Phone Catalog Challenge

Aplicación web enfocada en la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. Desarrollada como parte de una prueba técnica para Zara, priorizando estructura, funcionalidad, claridad de arquitectura y buenas prácticas de desarrollo profesional.

## Tecnologías utilizadas

- Next.js
- React 18
- Redux Toolkit para gestión de estado
- Axios para comunicación con la API
- localStorage para persistencia del carrito
- TypeScript para tipado estricto
- ESLint + Prettier (con reglas estrictas)
- Vitest + Testing Library para tests unitarios

## Funcionalidades implementadas

### Día 1

- Configuración de Next.js, ESLint, Prettier y Redux Toolkit.
- Conexión con la API externa usando `x-api-key`.
- Listado inicial de teléfonos.
- Componente reutilizable para cada tarjeta de teléfono.
- Búsqueda en tiempo real por nombre o marca .
- Separación de tipos, servicios, redux y componentes con tipado estricto.

### Día 2 (previsto)

- Navegación dinámica con rutas (`/phones/[id]`).
- Detalle completo del teléfono: selector de color y almacenamiento, actualización de imagen/precio, botón añadir al carrito.
- Carrito persistente: añadir, eliminar, total calculado, contador en header.
- Vista de carrito con productos seleccionados y botón "Continuar comprando".
- Sección de productos similares en detalle.
- Indicador del número de resultados de búsqueda.
- Estilos.

> Se prioriza el desarrollo de la lógica de negocio y arquitectura limpia. El diseño visual se abordará tras finalizar la funcionalidad clave.

## Instalación y configuración

```bash
git clone https://github.com/davidlosasgonzalez/mobile-catalog-app
cd mobile-catalog-app
npm install
```

### Modo desarrollo

```bash
npm run dev
```

## Testing

```bash
npm run test
```

Vitest + Testing Library integrados. Tests disponibles:

- Reducer `phoneSlice`
- Componente `PhoneCardItem`
- Componente `PhoneCardList`
- Componente `SearchBar`

## Autor

David Losas González – [Perfil de GitHub](https://github.com/davidlosas)
