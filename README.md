# Phone Catalog Challenge

Aplicación web enfocada en la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. Desarrollada como parte de una prueba técnica para Zara, priorizando estructura, funcionalidad, claridad de arquitectura y buenas prácticas de desarrollo profesional.

## Tecnologías utilizadas

- Next.js
- React 18
- Redux Toolkit para gestión de estado (justificado frente a Context API por escalabilidad)
- Axios para comunicación con la API autenticada
- localStorage para persistencia del carrito
- TypeScript para tipado estricto
- ESLint + Prettier (con reglas estrictas)
- Vitest + Testing Library para tests unitarios

## Funcionalidades

### Vista principal (Listado de Teléfonos)

- Cuadrícula con tarjetas (`PhoneCardList`) mostrando imagen, nombre, marca y precio base.
- Búsqueda en tiempo real (API) por nombre o marca.
- Estado persistente del carrito vía `localStorage`.
- ⚠ Indicador con el número de resultados encontrados.
- ⚠ Barra de navegación con iconos: Inicio y Carrito.

### Vista de Detalle (`PhoneDetailPage`)

- Imagen grande dinámica por color.
- Selectores de almacenamiento y color.
- Actualización en tiempo real del precio.
- Botón "Añadir al carrito" activado solo si hay selección válida.
- Sección de productos similares.
- ⚠ Visualización de especificaciones técnicas completas.

### Vista de Carrito (`CartPage`)

- Teléfonos añadidos con imagen, nombre, color/almacenamiento y precio individual.
- Eliminación individual de productos.
- Precio total calculado.
- Botón "Continuar comprando".

> Se priorizó la arquitectura limpia, separación modular por dominio (Redux slices, servicios, tipos), y cobertura funcional completa. La capa de estilos se aborda en la siguiente fase.

## Instalación y configuración

```bash
git clone https://github.com/davidlosasgonzalez/mobile-catalog-app
cd mobile-catalog-app
npm install
```

A continuación, copia el archivo `.env.local.example`, renómbralo como `.env.local` y completa las siguientes variables:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_API_KEY=
```

Una vez listo puedes ejecutar el modo desarrollo con el siguiente comando:

```bash
npm run dev
```

Para ejecutar los test:

```bash
npm run test
```

Vitest + Testing Library integrados. Tests disponibles:

- `phoneSlice.test.ts`
- `cartSlice.test.ts`
- `PhoneCardItem.test.tsx`
- `PhoneCardList.test.tsx`
- `PhoneDetailPage.test.tsx`
- `SearchBar.test.tsx`
- `CartPage.test.tsx`

## Consideraciones técnicas

- La API requiere autenticación con header `x-api-key`.
- Uso de Redux frente a Context API justificado por claridad y escalabilidad.
- Tipado estricto en todas las capas.
- Navegación vía rutas dinámicas (`/phones/[id]`).
- Sin errores en consola.

## Autor

David Losas González – [Perfil de GitHub](https://github.com/davidlosas)
