# Animation Enhancement Design
**Date:** 2026-02-23
**Status:** Approved

## Overview
Add polished, modern animations to KhesimReid.github.io using Framer Motion (already installed) + Lenis smooth scroll. Includes a custom cursor follower. All client-side, compatible with GitHub Pages static hosting.

## Dependencies
- `lenis` — smooth scroll library (~3kb)
- `framer-motion` — already installed, extend usage

## Components & Changes

### Global
- **Lenis smooth scroll** — initialised in `App.tsx`, synced with Framer Motion via `requestAnimationFrame`
- **Custom cursor** — new `CursorFollower.tsx` component: small sky-blue dot that trails the pointer using `useMotionValue` + `useSpring`. Hidden on touch devices.

### TopNavigation
- **Scroll-shrink** — use `useScroll` to detect scroll position; shrink nav height and add drop shadow past ~50px

### HeroSection
- **Photo parallax** — `useScroll` + `useTransform` to move the photo upward at ~40% scroll speed
- **Clip-path text reveal** — replace simple `opacity/y` fade on "Hello, I'm" and bio paragraph with a clip-path mask reveal (`clipPath: "inset(100% 0 0 0)" → "inset(0% 0 0 0)"`)

### ServicesSection
- **3D card tilt** — `onMouseMove` handler computes rotateX/rotateY from cursor position within card bounds; `useSpring` for smoothing. Lift shadow on hover.

### TechSection
- **Staggered pop-in** — replace scale `0.9→1` with a spring-based `scale: 0→1` with tighter stagger (0.04s per badge)
- **Glow on hover** — `whileHover` adds `boxShadow` with sky-blue tint

### CTA Buttons (Contact send, ThankYou back button)
- **Magnetic effect** — `onMouseMove` shifts button position toward cursor using `useSpring`; resets on `onMouseLeave`

## Architecture Notes
- Lenis instance created once in `App.tsx`, `useEffect` cleanup on unmount
- Cursor component rendered at root level in `App.tsx`, outside routes, hidden via `pointer-events: none`
- All scroll-driven effects use `useScroll` with `target` refs — no layout thrashing
- `prefers-reduced-motion` respected via Framer Motion's built-in support
