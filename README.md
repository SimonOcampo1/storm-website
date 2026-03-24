# SENTINEL - Experiencia Web

Una experiencia web interactiva que abarca cuatro dominios distintos de seguimiento de fenómenos anómalos:
- **El Atlas**: El panel central y núcleo de mapeo.
- **Vórtice**: Seguimiento de anomalías gravitacionales y espaciales.
- **Telemetría**: Métricas avanzadas y fuentes de datos sensoriales.
- **Archivo**: Registros históricos y catálogo de clasificación.

## Stack Tecnológico
- **React 19**: Arquitectura moderna basada en componentes.
- **Vite**: Herramienta de construcción y servidor de desarrollo ultra rápido.
- **Tailwind CSS v4**: Framework de CSS orientado a utilidades con soporte nativo para capas de cascada.
- **GSAP & ScrollTrigger**: Animaciones personalizadas basadas en scroll y efectos de paralaje.
- **Lenis**: Desplazamiento suave (smooth scrolling) para interacciones inmersivas.
- **Material Symbols**: Sistema de iconos integrados.
- **Google Fonts**: Space Grotesk, JetBrains Mono, Noto Serif.

## Instalación y Ejecución
1. Clona el repositorio.
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4. Abre `http://localhost:5173` en tu navegador.

## Estructura del Proyecto
```text
.
├── src/
│   ├── components/    # Elementos de UI reutilizables (Navbar, Footer, etc.)
│   ├── pages/         # Componentes de página (Atlas, Vortice, Telemetria, Archivo)
│   ├── hooks/         # Hooks personalizados de React (useScrollEffects)
│   └── App.jsx        # Entrada principal de la aplicación y enrutamiento
├── public/            # Activos estáticos (Videos, Iconos, Imágenes locales)
├── index.html         # Punto de entrada de Vite
├── tailwind.config.js # Configuración de Tailwind CSS
├── vite.config.js     # Configuración de Vite
└── README.md          # Documentación del proyecto
```

## Características
- **Diseño Cinemático**: Glassmorphism, acentos neón (primario `#00FFA3`), fondos de espacio profundo (`#030408`).
- **Navegación Unificada**: Navegación principal sensible al contexto sincronizada en todas las páginas con estados activos.
- **Interacción Fluida**: Desplazamiento suave de sub-píxeles con animaciones GSAP y Lenis.
- **Visuales de Telemetría**: Paneles SVG responsivos y flujos de datos dinámicos.
