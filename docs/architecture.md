# Architecture: Baan Bussaba

## 🏗️ Technical Conventions

### ⚛️ React Patterns
- **Components**: Functional components with TypeScript interfaces for Props.
- **Imports**: Use path aliases (`@/components`, `@/assets`) to keep imports clean.
- **State**: Prefer `useState` / `useReducer` and `Context API` (Keep it lightweight).

### 🎨 Styling (Tailwind v4)
- **Approach**: CSS-Variable-First. Avoid hardcoded hex codes in JSX; always use Tailwind's semantic theme colors.
- **Organization**: Colocate styles within components when small; use `index.css` for global strategy.

### 🎬 Animations (GSAP)
- **Hook Strategy**: Use `@gsap/react`'s `useGSAP()` hook for automatic cleanup of timelines.
- **Performance**: Animate `x, y, scale, rotation, opacity` (transforms) to keep animations off the main thread.

### ☁️ Hosting (Firebase)
- **Provider**: Google Cloud Platform (Free Tier).
- **Plan**: Firebase Hosting **Spark (Free)**.
- **Quota Limits**: 10 GB Storage, 10 GB/Month Bandwidth.
- **Custom Domain**: Supported with automatic SSL.
- **CI/CD Strategy**: GitHub Actions for automated deployment to Firebase Hosting via `firebase-tools`.

### ☁️ Hosting & CMS strategy 
- **Hosting**: Firebase Hosting (GCP Spark Plan).
- **MVP Content (Option A)**: Hardcoded in `src/data/content.json` for zero-latency and simplicity.
- **Production Content (Option B)**: Integration with **Sanity.io** (Headless CMS) to provide a luxurious back-office dashboard for non-technical management.
- **CI/CD Strategy**: GitHub Actions for automated deployment to Firebase Hosting.
