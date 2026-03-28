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

### 🚩 Git Versioning & Tagging
- **Branching Strategy**: Single-trunk (`master`) for this initial development phase.
- **Commit Pattern**: [Conventional Commits](https://www.conventionalcommits.org/) (feat, fix, docs, chore).
- **Tagging Strategy**: Use semantic tags at the end of every Phase (see `.agents/workflows/git-milestone.md`).
