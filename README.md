# STORM - El Relámpago del Catatumbo

Una experiencia web interactiva y cinematográfica dedicada al monitoreo y visualización de fenómenos atmosféricos anómalos en la cuenca del Lago de Maracaibo.

## Features
- **Estética Brutalista & Cyber-Noir**: Diseño de alta fidelidad con acentos neón `#00FFA3` sobre una paleta de espacio profundo `#030408`.
- **Inmersión Atmosférica**: Fondos de video dinámicos y composiciones visuales que capturan la magnitud de 1.6 millones de voltios.
- **Navegación Táctica de Contexto**: Sistema de navegación unificado que sincroniza el estado activo a través de los cuatro dominios principales (Atlas, Vórtice, Telemetría, Archivo).
- **Interacción de Sub-píxeles**: Desplazamiento ultra suave orquestado por Lenis y animaciones coreografiadas con GSAP.
- **Visualización de Telemetría**: Paneles de datos en tiempo real y mapas topográficos integrados mediante componentes reactivos.

## Estructura de Archivos
- `index.html`: Punto de entrada de la aplicación y montaje del DOM para el motor de Vite.
- `src/App.jsx`: Núcleo de la aplicación donde reside el enrutamiento principal entre dominios.
- `src/pages/Vortice.jsx`: Módulo de seguimiento del Relámpago del Catatumbo, integrando activos locales como `nube-descarga.png`.
- `public/`: Repositorio de activos de alto impacto, incluyendo `storm-video.mp4` y piezas visuales de telemetría.
- `tailwind.config.js`: Definición de la arquitectura de diseño, tokens de color personalizados y capas de cascada.

## Tecnologías Utilizadas
- React 19 (Arquitectura de componentes moderna)
- Tailwind CSS v4 (Sistema de diseño basado en utilidades de última generación)
- GSAP & ScrollTrigger (Motor de animaciones profesionales)
- Lenis (Smooth Scrolling Engine de alto rendimiento)
- Vite (Entorno de desarrollo y construcción ultra-rápido)

## Configuración
Para visualizar el proyecto localmente y experimentar la inmersión completa, instala las dependencias y ejecuta el servidor de desarrollo:

```bash
# Instalación de dependencias
npm install

# Ejecución del entorno de desarrollo
npm run dev
```
