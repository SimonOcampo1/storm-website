# Design System Strategy: Extreme Atmospheric Research & Expedition

## 1. Overview & Creative North Star: "The Sentinel of the Void"

This design system is built upon the "Sentinel of the Void" North Star. It rejects the clutter of traditional consumer apps in favor of a **Monumental Cinematic Isolation** aesthetic. The experience must feel like a high-altitude cockpit or a research station at the edge of a supercell—vast, silent, and technically precise.

To achieve this, we break the "standard template" through:
*   **Intentional Asymmetry:** Use large, expansive voids (utilizing the 16 and 24 spacing tokens) contrasted against hyper-dense clusters of technical telemetry.
*   **Scale Contrast:** Pairing massive `display-lg` typography with minuscule `label-sm` data points to create a sense of overwhelming atmospheric scale.
*   **Atmospheric Depth:** Utilizing backdrop blurs and fog textures to ensure the UI feels like it is floating within an environment, rather than sitting on a screen.

---

## 2. Colors & Environmental Tones

The palette is engineered for high-performance dark mode, ensuring the `primary` (#00FFA3) acts as a glowing beacon against the `background` (#030408).

### Surface Hierarchy & Nesting
We do not use cards in the traditional sense. We use **Tonal Layering**.
*   **The "No-Line" Rule:** Sectioning is achieved through shifts between `surface-container-lowest` and `surface-container-low`. Prohibit 1px solid borders for structural division.
*   **Nesting:** A `surface-container-highest` element (0.7 opacity) should only exist when nested within a lower-tier surface, creating a "stacked glass" effect.
*   **The Glass & Gradient Rule:** All floating surfaces must use `backdrop-filter: blur(20px)`. Main CTAs should utilize a subtle linear gradient from `primary` to `primary-container` to simulate the glow of an aurora.

| Token | Hex/Value | Role |
| :--- | :--- | :--- |
| `background` | #030408 | The "Void" - Base layer for all screens. |
| `primary` | #00FFA3 | "Aurora Green" - Critical actions and active telemetry. |
| `on-surface` | #F4F5F6 | "Plasma White" - Primary readability. |
| `surface-variant` | rgba(11, 13, 23, 0.7) | "Midnight Navy" - The primary glass container. |
| `outline-variant` | rgba(132, 149, 136, 0.2) | The "Ghost Border" - Only for essential definition. |

---

## 3. Typography: The Editorial Tech-Stack

We blend the elegance of a fine serif with the cold precision of a mono-spaced font.

*   **Headings (Display/Headline):** Use `notoSerif` at Light (300) or ExtraLight (200) weights. These should have increased letter-spacing (0.05em) to feel editorial and airy.
*   **Technical (Telemetry):** Use `JetBrains Mono`. This is for all coordinates, wind speeds, and timestamps. It must feel like an unyielding data stream.
*   **Body:** `spaceGrotesk` (Light). This provides a modern, slightly "outer-space" feel while maintaining high legibility against dark backgrounds.

---

## 4. Elevation & Depth: Atmospheric Layering

In this system, depth is a measurement of atmospheric density, not physical shadow.

*   **The Layering Principle:** Stacking is the primary driver of hierarchy. Place a `surface-container-highest` component atop a `surface-dim` background to create a "lift" that feels like a screen within a screen.
*   **Ambient Shadows:** Traditional drop shadows are forbidden. If a floating element requires separation, use a diffused glow of the `primary` color at 4% opacity, simulating light scattering through fog.
*   **The "Ghost Border":** If a container requires a boundary, use the `outline-variant` token at 1px width with 0px border-radius. It must feel like a thin wireframe, not a heavy box.
*   **Backdrop Blur:** A mandatory `20px` to `40px` blur must be applied to any surface containing text that overlaps background textures.

---

## 5. Components: Precision Instruments

### Buttons
*   **Primary:** Solid `primary` background, `on-primary` text (Space Grotesk Bold). 0px border radius.
*   **Tertiary (Telemetry Style):** Ghost buttons with a 1px `primary` border and `JetBrains Mono` text. Use for secondary data actions.

### Data Chips
*   **Visual Style:** Small, rectangular (0px radius), using `surface-container-high`. Text must be `label-sm` in `JetBrains Mono`.
*   **States:** Active chips glow with a 2px outer `primary` shadow.

### Input Fields
*   **Visual Style:** A single 1px line at the bottom (`outline-variant`). No box enclosure. 
*   **Telemetry Labels:** Labels sit above the input in `label-sm` JetBrains Mono, all-caps.

### Cards & Lists
*   **The Divider Forbid:** Never use horizontal lines. Use the **Spacing Scale** (8 or 10) to create "Vast Voids" between content blocks.
*   **Telemetry Stream:** Lists should look like terminal readouts, with data points aligned to a rigid internal grid.

### Custom Component: "The Horizon Gauge"
*   A specialized progress bar or scroll indicator that uses a ultra-thin 1px line across the screen, with a `primary` pulse indicating the user's current "depth" in the expedition.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Void:** Use more white space (black space) than you think is necessary.
*   **Maintain Sharpness:** Ensure every corner is a hard 90-degree angle (0px radius).
*   **Layer Textures:** Place subtle "fog" or "cloud" PNGs at 5% opacity behind UI elements to create the "Cinematic Isolation" feel.

### Don't:
*   **Use Rounds:** Never use border-radius. It breaks the "Aerospace" precision.
*   **Over-Color:** Stick strictly to the `primary` Aurora Green for interaction. Do not introduce extraneous accent colors.
*   **Clutter:** If a data point isn't vital to the "mission," hide it. The user should feel like a specialist, not a casual browser.
*   **Standard Shadows:** Avoid high-opacity black shadows; they feel "web-standard" and cheapen the premium aesthetic.