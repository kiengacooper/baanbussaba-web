# Baan Bussaba Web Application

This implementation plan outlines the phases to construct the Baan Bussaba luxury promotional website. 
The architecture uses Vite + React (TypeScript), TailwindCSS, GSAP, and Firebase Hosting on GCP Free Tier. Based on the authentic property photos, the aesthetic focus is an elevated "Tropical Warmth / Urban Oasis" combining the property's real natural elements into a luxurious digital experience.

## Open Questions

> [!IMPORTANT]
> **Tailwind v4 Decision:** We will use **Tailwind CSS v4**. It is lightning-fast, relies on a modern CSS variable approach instead of a large config file, and natively integrates into Vite.

> [!NOTE]
> **Dev Container Scaffolding:** Your current `.devcontainer/devcontainer.json` is already robust! We will just inject the `firebase-tools` CLI dependency into the `postCreateCommand` so your container is ready for GCP Hosting right out of the box.

## Proposed Phases

### Phase 1: Dev Container Refinement (First Step)
- Modify `/workspaces/baan-bussaba-web/.devcontainer/devcontainer.json` to globally install `firebase-tools` alongside `npm`.
- Rebuild the container after this change is made.

### Phase 2: React + Vite Scaffolding
- Run the initialization command `npm create vite@latest . -- --template react-ts` directly in the root `/workspaces/baan-bussaba-web` directory.
- Clean up the default Vite assets to prepare for a blank slate.

### Phase 3: Dependencies & Configuration
- Install **Tailwind CSS v4** (`tailwindcss`, `@tailwindcss/vite`). Configure the Vite plugin.
- Install **GSAP** (`gsap`, `@gsap/react`).
- Configure TypeScript path aliases (e.g., `@/components`, `@/assets`) for clean imports.

### Phase 4: Core Global Styles ("Tropical Warmth")
- Set up `src/index.css` with standard CSS variables embodying the **Baan Bussaba specific palette** derived from the property photos:
  - **Base/Backgrounds**: Creamy Beige and Soft Whites (matching the walls, flooring, and natural light).
  - **Darks/Accents**: Deep Mahogany/Coffee Brown (matching the heavy wooden doors and exterior panels).
  - **Pops of Color**: Lush Botanical Green (from the central courtyard garden) and Warm Terracotta/Amber (from the stones, wood furniture, and sunlit curtains).
- Import bespoke, elegant typography via Google Fonts (e.g., *Cormorant Garamond* or *Playfair Display* for headings, *Inter* or *Outfit* for crisp body copy).

### Phase 5: Homepage Core & Hero Component
- Create a global `<Layout />` wrapper with a minimalistic Navigation bar.
- Build the **Cinematic Hero Video/Image** layout. It will feature large, slow-pan imagery (such as the lush indoor courtyard or a warmly lit room), overlayed with bespoke typography that animates elegantly on scroll/load using GSAP `useGSAP` hooks. 

---

## Verification Plan

### Automated Tests
- The Vite development server will be launched and previewed to ensure everything from Phase 1-5 runs without errors.
- Confirm Tailwind v4 variables apply correctly.
- Confirm GSAP animations trigger seamlessly on mount.

### Manual Verification
- You can preview the running application natively inside the Dev Container.
- We will iteratively verify that the updated "Botanical/Tropical Warmth" aesthetic perfectly elevates the real property photos.
