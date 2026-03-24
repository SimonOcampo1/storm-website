# SENTINEL - Web Experience

An interactive web experience encompassing four distinct domains of anomalous phenomena tracking:
- **El Atlas** (`index.html`): The central dashboard and mapping core.
- **Vórtice** (`vortice.html`): Gravitational and spatial anomaly tracking.
- **Telemetría** (`telemetria.html`): Advanced metrics and sensory data feeds.
- **Archivo** (`archivo.html`): Historical records and classification catalog.

## Tech Stack
- **HTML5**: Semantic and accessible document structure.
- **Tailwind CSS v3**: Utility-first CSS framework via CDN with custom configurations (see `assets/js/tailwind.config.js`).
- **Vanilla CSS**: Extracted global animations, effects, and typography in `assets/css/styles.css`.
- **GSAP & ScrollTrigger**: Custom scroll-based animations for elements and parallax effects.
- **Lenis**: Smooth scrolling for immersive interactions.
- **Material Symbols**: Scalable vector icons.
- **Google Fonts**: Nunito Sans, Space Grotesk, JetBrains Mono, Noto Serif.

## Setup & Running
1. Clone the repository.
2. Since routing is handled via basic `.html` files, you can simply run any local server to experience it. For instance:
    ```bash
    npx serve
    ```
    or
    ```bash
    python -m http.server
    ```
3. Open `http://localhost:3000` (or the equivalent port) in your browser.

## Project Structure
```text
.
├── index.html        # El Atlas (Home)
├── archivo.html      # Archivo Page
├── telemetria.html   # Telemetria Page
├── vortice.html      # Vórtice Page
├── README.md         # Project documentation
└── assets/
    ├── css/
    │   └── styles.css        # Global styles and custom animations
    └── js/
        ├── tailwind.config.js # Tailwind CSS configuration
        └── main.js           # Core JS (GSAP bindings, Lenis init, dynamic logic)
```

## Features
- **Cinematic Design**: Glassmorphism, neon accents (primary `#00FFA3`), deep space backgrounds (`#030408`), responsive layout matching the `sublime_event_horizon` aesthetic.
- **Unified Navigation**: Context-aware main navigation synced across all pages with active states.
- **Smooth Interaction**: Sub-pixel smooth scrolling with animated staggered entrances.
- **Telemetry Visuals**: SVG dashboards, rotating scopes, pulsing nodes, responsive graphs.

## Credits
Designed and engineered as part of the `sublime_event_horizon` unification standard.
