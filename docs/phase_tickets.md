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
- [x] **T-5.1**: Create `<Layout />` with `<Navbar />` (Glassmorphism effect).
- [x] **T-5.2**: Build `<Hero />` component with a placeholder luxury image/video.
- [x] **T-5.3**: Implement GSAP "Fade-In & Slide" animations for Hero text.
## 🎟 Phase 6: Hosting & Launch
- [x] **T-6.1**: Initialize Firebase via `firebase init`.
- [x] **T-6.2**: Configure GitHub Actions secret `FIREBASE_SERVICE_ACCOUNT`.
- [x] **T-6.3**: Create `.github/workflows/hosting-deploy.yml`.
- [x] **T-6.4**: Final visual QA of the live site on custom domain.

## 🎟 Phase 10: Content Pivot & Localization (V2)
- [x] **T-10.1**: Inject Thai Fonts (Sarabun) and localize page title.
- [x] **T-10.2**: Generate non-pool imagery (Small Garden, Modern Room).
- [x] **T-10.3**: Build `RoomSection.tsx` with hybrid descriptions.
- [x] **T-10.4**: Create `ExperienceSection.tsx` (WiFi, CCTV, Parking, Garden).
- [x] **T-10.5**: Build `LocationSection.tsx` (Seacon, Suan Luang, MRT, GMaps).
- [x] **T-10.6**: Final sync and remove legacy "Amenities" components.
- [x] **T-10.7**: Interaction Refinement (Lenis Glide + Mobile Menu).

## 🎟 Phase 11: Launch Mastery (SEO & Socials)
- [x] **T-11.1**: Custom Favicon & Web Manifest.
- [x] **T-11.2**: SEO Meta Tags (Title/Description/Keywords).
- [x] **T-11.3**: Open Graph (OG) Tags for LINE/Facebook previews.

## 🎟 Phase 12: Production QA & Content Audit
- [ ] **T-12.1**: Replace Placeholder Phone Number & LINE integration.
- [ ] **T-12.2**: Cross-device visual audit (iOS/Android).
