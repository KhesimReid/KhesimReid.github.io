# Apple Minimalism UI Refinement Design
**Date:** 2026-02-24
**Status:** Approved

## Goal
Refine the existing UI toward Apple's minimalist design language — surgical changes only, preserving existing structure and animations.

## Typography
- Drop Playfair Display entirely. All headings use `font-sans` (Inter / system stack).
- Hero H1: `text-6xl md:text-8xl font-bold tracking-tight`
- Section H2: `text-3xl md:text-4xl font-semibold tracking-tight`
- Body text: `font-normal` (400) replacing `font-light` (300)
- Tech badge labels and form labels: `text-sm font-medium text-slate-500` — remove uppercase tracking

## Colour & Accent
- Sky-500 retained only on: active nav underline, Send button, Back to site button
- "Hello, I'm" intro text: `text-slate-500` (was sky-500)
- Tech badge hover: remove sky glow — use `border-slate-400` on hover only
- Service card icons: remove sky-50 circle background — plain `text-slate-400` inline icon, no wrapper
- Section dividers: `border-t border-slate-100` (was `border-slate-200`)
- Hero photo border: `border-slate-200` (was `border-sky-100`)

## Spacing & Structure
- Section padding: `py-32 md:py-40` (was `py-24`)
- Section header: remove `pt-16`, reduce `mb-20` → `mb-16`
- Hero gap: `gap-16 md:gap-24` (was `gap-12 md:gap-20`)
- Service cards: remove rounded card boxes — replace with flat rows divided by `border-b border-slate-100`. Icon inline with title, no background.
- Tech badges: keep pill shape, `border-slate-200 text-slate-600`. Replace spring scale-from-zero with simple `opacity: 0 → 1` stagger fade.
- Contact form: remove `border border-slate-200 rounded-lg` card wrapper — form sits directly on white background.

## Files to Touch
- `src/App.tsx` — remove Playfair Display import/font reference
- `tailwind.config.js` — remove or deprioritise serif font family
- `index.html` — update Google Fonts link if needed
- `src/components/HeroSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/TechSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/TopNavigation.tsx` (nav divider colour)
- `src/components/ThankYouPage.tsx` (heading font)
- `src/components/BlogSection.tsx` (heading font)
- `src/components/ProjectsSection.tsx` (heading font)
