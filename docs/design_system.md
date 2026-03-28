# Design System: Baan Bussaba

## 🎨 Color Palette ("Tropical Warmth")
Our palette is derived from the real property photography to ensure authenticity.

| Role | Color/Variable | Description |
| :--- | :--- | :--- |
| **Primary Background** | `--color-beige-100` | Soft Creamy Beige (walls and natural light) |
| **Secondary Background** | `--color-white-50` | Pure Soft White (bright accent spaces) |
| **Primary Accent** | `--color-mahogany-900` | Deep Coffee Brown (wooden doors and panels) |
| **Secondary Accent** | `--color-moss-700` | Lush Botanical Green (central garden greenery) |
| **Highlights** | `--color-amber-500` | Warm Terracotta/Amber (sunlit stones and furniture) |

## 🖋️ Typography Scale (Phase 10.7 Refinement)
We use an "International Hybrid" strategy:
- **Headings (H1, H2, H3)**: `Lora` (Classic, organic, serene Serif).
- **English Body/Details**: `Montserrat` (Clean, geometric Sans-Serif).
- **Thai Body/Details**: `Sarabun` (Modern, readable Thai Sans-Serif).
- **Scale Strategy**: Fluid Typography (Clamp) for dramatic desktop views and thumb-friendly mobile reading.

## 💎 UI Elevation Tokens
- **Navbar**: Solid white (`bg-white`) with high-legibility mahogany text and a premium drop shadow (`shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]`).
- **Interactive Map**: Grayscale-to-Color transition on hover (Contrast 125%).
- **Mobile Menu**: Full-screen white overlay with cinematic slide entry (`translate-y`).

## 🎬 Motion Principles (GSAP & Lenis)
- **Scrolling**: Cinematic momentum (Lenis duration 1.5s) with a power4-inspired ease.
- **Entrance**: Subtle "Reveal from Bottom" with a `power3.out` ease.
- **Navigation**: Programmatic glide triggered by navbar clicks to ensure no "jumpy" jumps.
