# Animation Enhancement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add polished modern animations — Lenis smooth scroll, custom cursor follower, parallax hero, clip-path text reveals, 3D card tilt, magnetic buttons, and badge glow — to KhesimReid.github.io.

**Architecture:** All animations are client-side using Framer Motion (already installed) and Lenis for smooth scroll. A new `CursorFollower` component is mounted at the root level. Scroll-driven effects use `useScroll`/`useTransform` with element refs. No SSR concerns — static GitHub Pages deploy.

**Tech Stack:** React 18, Framer Motion 11, Lenis (new), TypeScript, Tailwind CSS

---

### Task 1: Install Lenis

**Files:**
- Modify: `package.json` (via npm install)

**Step 1: Install**

```bash
npm install lenis
```

**Step 2: Verify**

Check `package.json` dependencies includes `"lenis"`.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install lenis for smooth scroll"
```

---

### Task 2: Create CursorFollower component

**Files:**
- Create: `src/components/CursorFollower.tsx`

**Step 1: Create the component**

```tsx
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-sky-400 opacity-60 pointer-events-none z-[9999] mix-blend-multiply hidden md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
```

**Step 2: Verify file exists**

```bash
ls src/components/CursorFollower.tsx
```

**Step 3: Commit**

```bash
git add src/components/CursorFollower.tsx
git commit -m "feat: add cursor follower component"
```

---

### Task 3: Initialise Lenis in App.tsx and mount CursorFollower

**Files:**
- Modify: `src/App.tsx`

**Step 1: Update App.tsx**

Add Lenis initialisation in the `MainPage` component's `useEffect`, and mount `CursorFollower` at the root level outside `<Routes>`:

```tsx
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
// ... existing imports ...
import { CursorFollower } from './components/CursorFollower';

function MainPage() {
  // existing state and sections...

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  // existing intersection observer useEffect stays unchanged
  // existing return JSX stays unchanged
}

export function App() {
  return (
    <HashRouter>
      <CursorFollower />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
}
```

**Step 2: Run dev server and verify smooth scroll feels different**

```bash
npm run dev
```
Open browser, scroll — should feel noticeably smoother/inertia-based. Cursor dot should follow mouse.

**Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: initialise lenis smooth scroll and mount cursor follower"
```

---

### Task 4: TopNavigation scroll-shrink effect

**Files:**
- Modify: `src/components/TopNavigation.tsx`

**Step 1: Add scroll-shrink using useScroll**

Replace the static `h-16 md:h-20` on the `<nav>` with a motion-driven class. Import `useScroll` and `useMotionValueEvent` from framer-motion, add a `scrolled` boolean state:

```tsx
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function TopNavigation({ activeSection, sections }: TopNavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50);
  });

  // replace <nav className="fixed top-0 ...h-16 md:h-20..."> with:
  return (
    <motion.nav
      animate={{ height: scrolled ? 56 : 80 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm flex items-center transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}
    >
      {/* existing inner content unchanged */}
    </motion.nav>
  );
}
```

**Step 2: Verify in browser**

Scroll down — nav should shrink in height and gain a shadow. Scroll back to top — should expand again.

**Step 3: Commit**

```bash
git add src/components/TopNavigation.tsx
git commit -m "feat: add scroll-shrink effect to nav"
```

---

### Task 5: Hero photo parallax + clip-path text reveals

**Files:**
- Modify: `src/components/HeroSection.tsx`

**Step 1: Add parallax to the photo**

Import `useRef` from React, `useScroll` and `useTransform` from framer-motion. Attach a ref to the section, derive a `y` transform from scroll progress:

```tsx
import React, { useRef, Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  // existing name/animation vars...

  return (
    <section ref={sectionRef} id="about" className="w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* photo motion.div: add style={{ y: photoY }} to the inner image wrapper */}
      <motion.div style={{ y: photoY }} className="w-64 h-80 md:w-80 md:h-[400px] ...">
        <img ... />
      </motion.div>
      {/* rest unchanged */}
    </section>
  );
}
```

**Step 2: Add clip-path reveal to "Hello, I'm" and bio paragraph**

Replace `opacity/y` fade with clip-path reveal on those two `motion.div` wrappers:

```tsx
// "Hello, I'm" motion.div
initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}

// Bio paragraph motion.div
initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.9 }}
```

**Step 3: Verify in browser**

Reload — text should wipe upward into view. Scroll down — photo should drift upward slower than the page.

**Step 4: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: add hero parallax and clip-path text reveals"
```

---

### Task 6: 3D tilt on service cards

**Files:**
- Modify: `src/components/ServicesSection.tsx`

**Step 1: Read current ServicesSection to understand card structure**

Read the file before editing to understand card markup.

**Step 2: Extract a TiltCard wrapper component at top of file**

Add this above the `ServicesSection` function:

```tsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(14,165,233,0.15)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 3: Wrap each service card's inner `div` with `TiltCard`**

Replace the static `div` that wraps each card's content with `<TiltCard className="...existing classes...">`.

**Step 4: Verify in browser**

Hover over service cards — they should tilt toward the cursor and lift slightly.

**Step 5: Commit**

```bash
git add src/components/ServicesSection.tsx
git commit -m "feat: add 3D tilt effect to service cards"
```

---

### Task 7: Tech badge spring pop-in and glow hover

**Files:**
- Modify: `src/components/TechSection.tsx`

**Step 1: Read TechSection to understand badge structure**

Read the file before editing.

**Step 2: Update badge animation variants**

Find the individual tech badge `motion` elements and replace their animation with:

```tsx
// container for each category's badges — add staggerChildren
variants={{
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } }
}}

// each badge
variants={{
  hidden: { opacity: 0, scale: 0, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 18 } }
}}
whileHover={{
  scale: 1.08,
  boxShadow: '0 0 12px 2px rgba(14,165,233,0.35)',
  borderColor: '#38bdf8',
  color: '#0284c7',
}}
```

**Step 3: Verify in browser**

Scroll to tech section — badges should spring in with a bounce. Hover — should glow.

**Step 4: Commit**

```bash
git add src/components/TechSection.tsx
git commit -m "feat: spring pop-in and glow hover for tech badges"
```

---

### Task 8: Magnetic effect on CTA buttons

**Files:**
- Create: `src/components/MagneticButton.tsx`
- Modify: `src/components/ContactSection.tsx`
- Modify: `src/components/ThankYouPage.tsx`

**Step 1: Create MagneticButton wrapper**

```tsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children, className, onClick, type, disabled }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 15 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * 0.25);
    rawY.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
```

**Step 2: Replace the submit button in ContactSection with MagneticButton**

Import `MagneticButton` and replace the `motion.button` submit button with:

```tsx
<MagneticButton
  type="submit"
  disabled={status === 'loading'}
  className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
  <Send className="w-4 h-4" />
  {status === 'loading' ? 'Sending…' : 'Send Message'}
</MagneticButton>
```

**Step 3: Replace the back button in ThankYouPage with MagneticButton**

Import `MagneticButton` and replace the `motion.button` with:

```tsx
<MagneticButton
  onClick={() => navigate('/')}
  className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
  Back to site
</MagneticButton>
```

**Step 4: Verify in browser**

Hover over the Send Message and Back to site buttons — they should drift slightly toward the cursor.

**Step 5: Commit**

```bash
git add src/components/MagneticButton.tsx src/components/ContactSection.tsx src/components/ThankYouPage.tsx
git commit -m "feat: add magnetic effect to CTA buttons"
```

---

### Task 9: Final review

**Step 1: Build to catch any TypeScript errors**

```bash
npm run build
```

Expected: no errors, `dist/` folder generated.

**Step 2: Preview the production build**

```bash
npm run preview
```

Manually verify all animations work in the preview build.

**Step 3: Commit any final fixes if needed**
