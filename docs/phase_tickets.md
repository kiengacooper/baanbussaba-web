# Phase Tickets (Task Details)

This document breaks down the high-level Implementation Plan into actionable "tickets" for the team.

## 🎟 Phase 1: Dev Container Refinement
- [ ] **T-1.1**: Add `firebase-tools` to `.devcontainer/devcontainer.json`.
- [ ] **T-1.2**: Update `postCreateCommand` to ensure `npm install` and global tool setup is automated.
- [ ] **T-1.3**: Trigger a container rebuild and verify `firebase --version`.

## 🎟 Phase 2: React + Vite Scaffolding
- [ ] **T-2.1**: Initialize Vite React-TS project in root.
- [ ] **T-2.2**: Delete `App.css`, `index.css` (initial content), and generic Vite assets.
- [ ] **T-2.3**: Verify `npm run dev` launches a clean blank page.

## 🎟 Phase 3: Dependencies & Configuration
- [ ] **T-3.1**: Install Tailwind CSS v4 and `@tailwindcss/vite`.
- [ ] **T-3.2**: Install GSAP and `@gsap/react`.
- [ ] **T-3.3**: Configure `vite.config.ts` for Tailwind v4 and path aliases (`@/`).

## 🎟 Phase 4: Core Global Styles
- [ ] **T-4.1**: Define CSS variables in `src/index.css` for the "Tropical Warmth" palette.
- [ ] **T-4.2**: Integrate Google Fonts (Cormorant Garamond & Inter).
- [ ] **T-4.3**: Set up basic typography scale (Fluid typography for luxury feel).

## 🎟 Phase 5: Homepage Core & Hero
- [ ] **T-5.1**: Create `<Layout />` with `<Navbar />` (Glassmorphism effect).
- [ ] **T-5.2**: Build `<Hero />` component with a placeholder luxury image/video.
- [ ] **T-5.3**: Implement GSAP "Fade-In & Slide" animations for Hero text.
