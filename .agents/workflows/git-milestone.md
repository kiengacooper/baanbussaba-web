---
description: Git Milestone and Tagging Workflow
---

# 🚩 Git Milestone & Tagging Workflow

This workflow ensures our development milestones are clearly marked in our Git history for full traceability.

## 🕒 When to Run
Run this at the end of every Phase completion (Phase 1, Phase 2, etc.).

## 🛠️ Step-by-Step Release Protocol

1. **Verify State**: Ensure all `phase_tickets.md` tasks for the phase are checked `[x]`.
2. **Standardize Commit**: Use Conventional Commits.
   - Format: `feat(phaseX): [Phase Name] completion`
   - Example: `feat(phase1): dev container and firebase tools setup`
3. **Draft Semantic Tag**:
   - Format: `v0.X.0-phaseX`
   - Example: `v0.1.0-phase1-infra`
4. **Tag and Push**:
   - `git commit -m "[Conventional Message]"`
   - `git tag -a [Tag] -m "End of Phase X: [Phase Name]"`
   - `git push origin master --tags`

## 📋 Tagging Strategy
| Phase | Version Tag | Description |
| :--- | :--- | :--- |
| **Phase 1** | `v0.1.0-phase1-infra` | Dev Container & Cloud Tools |
| **Phase 2** | `v0.2.0-phase2-scaffold` | Vite + React Scaffolding |
| **Phase 3** | `v0.3.0-phase3-deps` | Tailwind v4 & GSAP Integration |
| **Phase 4** | `v0.4.0-phase4-styles` | "Tropical Warmth" Core Themes |
| **Phase 5** | `v0.5.0-phase5-hero` | Cinematic Hero Component |
| **Phase 6** | `v1.0.0-release` | Initial Launch Build |
