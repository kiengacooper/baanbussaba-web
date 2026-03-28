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
- **CI/CD**: (TBD) GitHub Actions for automated deployment to Firebase Hosting.
