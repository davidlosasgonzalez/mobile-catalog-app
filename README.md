# 📱 Phone Catalog Challenge

Aplicación web enfocada en la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. Desarrollada como parte de una prueba técnica para Zara, priorizando estructura clara, arquitectura escalable, buenas prácticas y cobertura funcional completa.

## 🛠️ Tecnologías utilizadas

- **Next.js 15.3.1** — Framework de React con soporte para SSR/ISR y rutas dinámicas.
- **React 19** — Librería base para la interfaz.
- **Redux Toolkit 2.7 + React Redux 9.2** — Gestión de estado global eficiente y tipada.
- **Axios 1.9** — Cliente HTTP con cabeceras personalizadas.
- **TypeScript 5** — Tipado estricto y robusto.
- **lodash.debounce** — Optimización de búsquedas en tiempo real.
- **react-hot-toast** — Notificaciones visuales.
- **react-spinners** — Indicadores de carga accesibles.

### Testing

- **Vitest 3.1.2** — Framework de pruebas moderno y rápido.
- **Testing Library + jest-dom** — Testing declarativo de componentes..

### Calidad de código

- **ESLint 9 + eslint-config-next** — Linter adaptado para Next.js.
- **Prettier 3.5** — Formateador de código.

## ✨ Funcionalidades

### 🗂 Listado de Teléfonos

- Tarjetas con imagen, marca, nombre y precio base.
- Búsqueda en tiempo real contra API (nombre o marca).
- Contador de resultados.
- Navegación con Carrito.
- Carrito persistente con `localStorage`.
- Redirección a la vista de detalle de producto al hacer clic.

### 🔍 Detalle del Teléfono

- Imagen que cambia según el color seleccionado.
- Selectores de color y almacenamiento.
- Precio actualizado según selección.
- Botón "Add to Cart".
- Tabla de especificaciones técnicas detalladas.
- Sección de productos similares.

### 🛒 Vista del Carrito

- Listado de productos seleccionados con detalles.
- Botón para incrementar o decrementar artículo.
- Botón para eliminar individualmente.
- Cálculo automático del total.
- Botón "Continuar comprando" hacia el inicio.

## ⚙️ Instalación y configuración

### Requisitos previos

- Node.js 18+
- npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/davidlosasgonzalez/mobile-catalog-app
cd mobile-catalog-app
npm install

# Copiar variables de entorno
cp .env.local.example .env.local
```

Editar `.env.local` con los valores:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_API_KEY=
```

### Comandos

```bash
npm run dev      # Servidor en modo desarrollo
npm run build    # Compila para producción
npm run start    # Lanza la app compilada
npm run lint     # Analiza calidad de código
npm run test     # Ejecuta los tests con Vitest
```

## 🧪 Tests disponibles

La suite de tests valida Redux, lógica de UI y comportamiento:

- `phoneSlice.test.ts`
- `cartSlice.test.ts`
- `PhoneCardItem.test.tsx`
- `PhoneCardList.test.tsx`
- `PhoneDetailPage.test.tsx`
- `SearchBar.test.tsx`
- `CartPage.test.tsx`

## 📌 Consideraciones técnicas

- Todas las peticiones incluyen `x-api-key` en headers.
- Uso de Redux priorizado por claridad y escalabilidad.
- App 100% tipada.
- Navegación con rutas dinámicas (`/phones/[id]`).
- Aplicación sin errores ni warnings en consola.
- Responsive y accesible.

## 🔍 Retos técnicos y decisiones arquitectónicas

### 1️⃣ Elección de Redux frente a Context API

Aunque el enunciado sugería usar Context API, se optó por **Redux Toolkit** debido a:

- Mayor escalabilidad para aplicaciones con crecimiento previsto.
- Mejor separación de responsabilidades y testabilidad.
- Persistencia de estado en `localStorage` más clara.
- Trazabilidad total con herramientas de desarrollo y mocks.

Esto garantizó una arquitectura más robusta sin comprometer los requisitos funcionales.

### 2️⃣ Normalización visual de imágenes

Las imágenes provenientes de la API tenían distintos tamaños y margenes en blanco. Para solucionarlo:

- Se implementó un **proxy de imagenes mediante `sharp`** en `/api/image-proxy`.
- Este sistema recorta automáticamente bordes blancos, generando un grid visual limpio y uniforme.

### 3️⃣ Estilos modulares con SASS y convenciones claras

- Se utilizó `SASS` con `modules` (`.module.scss`).
- Están organizados con una metodología BEM-like (Bloque\_\_Elemento--Modificador).
- Uso centralizado de variables (`@import '@/styles/variables'`) para mantener consistencia y reusabilidad.

### 4️⃣ Limpieza de datos duplicados

Algunas respuestas de la API incluían productos repetidos por `id`, lo que generaba errores de React por claves duplicadas.

- Se aplicó un filtrado de unicidad usando `Map` antes de renderizar o almacenar datos.

### 4️⃣ Mejora de rendimiento y optimización

- Uso de `<Image>` de Next.js con `priority` en la vista de detalle para mejorar el LCP.
- Componentes desacoplados y optimizados (evita renderizados innecesarios).
- Debounce en el buscador para minimizar llamadas a la API.

### 5️⃣ Accesibilidad

- Botones con `aria-label` y `title` donde corresponde.
- Navegación por teclado y buen contraste de colores.
- `alt` en imágenes e iconos informativos.

### 6️⃣ Escalabilidad futura

- Arquitectura preparada para nuevas vistas: favoritos, pagos, perfil.
- Componentes y slices desacoplados.
- Servicios HTTP y tipos reutilizables.

## 👤 Autor

**David Losas González**
[Perfil en GitHub](https://github.com/davidlosas)
