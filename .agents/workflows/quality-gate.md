---
description: Premium Quality Assurance Gate
---

# 💎 Premium Quality Gate Workflow

This workflow ensures every component and feature built for Baan Bussaba meets our "World-Class" standard for performance, accessibility, and aesthetics.

## 🕒 When to Run
Run this gate after every UI component creation or update, and before marking a Phase Ticket as complete.

## ✅ The Quality Checklist

### 📐 1. Visual & Motion (GSAP / Tailwind)
- [ ] **Fluidity**: Are GSAP animations running at 60fps? (No layout thrashing).
- [ ] **Responsiveness**: Does the component look "premium" on mobile (375px) and ultra-wide (1440px+)?
- [ ] **Design System**: Does it strictly use tokens from `docs/design_system.md`?

### ♿ 2. Accessibility (a11y)
- [ ] **Keyboard Nav**: Can I access all interactive elements via Tab?
- [ ] **Semantic HTML**: Are we using `<header>`, `<main>`, `<section>`, etc., instead of generic `<div>`s?
- [ ] **ARIA**: Are necessary `aria-label` or `aria-hidden` attributes applied for screen readers?

### ⚡ 3. Performance
- [ ] **Bundle Size**: Are we importing only what we need from libraries like GSAP or Lucide?
- [ ] **LightHouse Sync**: (Optional) Use `web-design-reviewer` to check for core web vitals.

## 🛠️ Step-by-Step
1. **Self-Review**: The agent (me) performs an automated sweep using the `web-coder` skill.
2. **Visual Check**: Trigger `web-design-reviewer` to find any layout breaks.
3. **Approval**: Present the "Quality Report" to the Human (you) for final sign-off.
