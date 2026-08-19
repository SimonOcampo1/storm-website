# STORM — El Relámpago del Catatumbo

**1,6 millones de voltios, cada noche, sobre el mismo lago.**

Sitio interactivo dedicado al monitoreo y la visualización del Relámpago del Catatumbo, el fenómeno atmosférico permanente de la cuenca del Lago de Maracaibo.

## 🚀 Características

- **Cuatro dominios navegables** — Atlas, Vórtice, Telemetría y Archivo, con estado activo sincronizado en toda la navegación.
- **Paneles de telemetría** — datos y mapas topográficos integrados como componentes reactivos.
- **Estética brutalista cyber-noir** — neón `#00FFA3` sobre espacio profundo `#030408`.
- **Fondos de video** dinámicos en las secciones principales.
- **Scroll orquestado** — Lenis para el desplazamiento y GSAP para las secuencias de entrada, centralizados en un hook propio.

## 📂 Estructura

```
index.html                Punto de entrada y montaje del DOM
src/App.jsx               Núcleo y enrutado
src/pages/                Atlas · Vórtice · Telemetría · Archivo
src/components/           Navbar y Footer
src/hooks/useScrollEffects.js   Lenis + GSAP en un solo lugar
tailwind.config.js        Paleta y tipografías
```

## 🛠️ Stack

React · Vite · React Router · Tailwind CSS · GSAP · Lenis

## 💻 Puesta en marcha

```bash
git clone https://github.com/SimonOcampo1/storm-website.git
cd storm-website
npm install
npm run dev
```
