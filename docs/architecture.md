# Architecture: Baan Bussaba

## 🏗️ Technical Conventions

### ⚛️ React Patterns
- **Components**: Functional components with TypeScript interfaces for Props.
- **Imports**: Use path aliases (`@/components`, `@/assets`) to keep imports clean.
- **State**: Prefer `useState` / `useReducer` and `Context API` (Keep it lightweight).

### 🎨 Styling (Tailwind v4)
- **Approach**: CSS-Variable-First. Avoid hardcoded hex codes in JSX; always use Tailwind's semantic theme colors.
- **Organization**: Colocate styles within components when small; use `index.css` for global strategy.

### 🎬 Animations & Smooth Scroll (Lenis + GSAP)
- **Engine**: Lenis for cinematic, weighted momentum scrolling.
- **Global Sync**: The `lenis` instance is exposed globally (`window.lenis`) to allow the `<Navbar />` to trigger programmatic `scrollTo` events for smooth, non-jumpy navigation.
- **Hook Strategy**: Use `@gsap/react`'s `useGSAP()` hook for automatic cleanup of timelines.
- **Performance**: Animate `x, y, scale, rotation, opacity` (transforms) to keep animations off the main thread.

### 🍱 Component Tree (V2 Pivot)
- `App.tsx`: Lenis Initializer & ScrollTrigger Sync.
- `Navbar.tsx`: Solid-background, shadow-based global navigation with slide-out mobile menu.
- `Hero.tsx`: Cinematic introduction.
- `ExperienceSection.tsx`: Icons and Thai/English details for essentials (WiFi, CCTV, Parking, Garden).
- `RoomSection.tsx`: Detailed residence showcase.
- `LocationSection.tsx`: Connectivity details and live Google Maps integration.
- `ContactSection.tsx`: Hospitality-focused call-to-action.

### ☁️ Hosting & Deployment
- **Provider**: Firebase Hosting (GCP Spark Plan).
- **CI/CD**: GitHub Actions (`deploy.yml`) on every push to `master`.
