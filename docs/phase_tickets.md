# Phase Tickets (Task Details)

This document breaks down the high-level Implementation Plan into actionable "tickets" for the team.

## 🎟 Phase 1: Dev Container Refinement
- [x] **T-1.1**: Add `firebase-tools` to `.devcontainer/devcontainer.json`.
- [x] **T-1.2**: Update `postCreateCommand` to ensure `npm install` and global tool setup is automated.
- [x] **T-1.3**: Trigger a container rebuild and verify `firebase --version`.

## 🎟 Phase 2: React + Vite Scaffolding
- [x] **T-2.1**: Initialize Vite React-TS project in root.
- [x] **T-2.2**: Delete `App.css`, `index.css` (initial content), and generic Vite assets.
- [x] **T-2.3**: Verify `npm run dev` launches a clean blank page.

## 🎟 Phase 3: Dependencies & Configuration
- [x] **T-3.1**: Install Tailwind CSS v4 and `@tailwindcss/vite`.
- [x] **T-3.2**: Install GSAP and `@gsap/react`.
- [x] **T-3.3**: Configure `vite.config.ts` for Tailwind v4 and path aliases (`@/`).

## 🎟 Phase 4: Core Global Styles
- [x] **T-4.1**: Define CSS variables in `src/index.css` for the "Tropical Warmth" palette.
- [x] **T-4.2**: Integrate Google Fonts (Cormorant Garamond & Inter).
- [x] **T-4.3**: Set up basic typography scale (Fluid typography for luxury feel).

## 🎟 Phase 5: Homepage Core & Hero
- [ ] **T-5.1**: Create `<Layout />` with `<Navbar />` (Glassmorphism effect).
- [ ] **T-5.2**: Build `<Hero />` component with a placeholder luxury image/video.
## 🎟 Phase 6: Hosting & Launch
- [ ] **T-6.1**: Initialize Firebase via `firebase init`.
- [ ] **T-6.2**: Configure GitHub Actions secret `FIREBASE_SERVICE_ACCOUNT`.
- [ ] **T-6.3**: Create `.github/workflows/hosting-deploy.yml`.
- [ ] **T-6.4**: Final visual QA of the live site on custom domain.

## 🎟 Phase 7: CMS Integration (Production)
- [ ] **T-7.1**: Set up Sanity.io project and schemas for Baan Bussaba.
- [ ] **T-7.2**: Install Sanity CLI and integrate GROQ queries into React.
- [ ] **T-7.3**: Migrated all static data to Sanity Production Dashboard.
