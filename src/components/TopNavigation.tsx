import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
interface TopNavigationProps {
  activeSection: string;
  sections: {
    id: string;
    label: string;
  }[];
}
export function TopNavigation({ activeSection, sections }: TopNavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50);
  });
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of sticky nav + some breathing room
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.nav
      animate={{ height: scrolled ? 56 : 80 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm flex items-center transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <div
          className="text-xl font-bold text-slate-900 cursor-pointer tracking-tight"
          onClick={() => scrollToSection('about')}>
          KR.
        </div>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) =>
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === section.id ? 'text-slate-900' : 'text-slate-500 hover:text-sky-500'}`}>

              {section.label}
              {activeSection === section.id &&
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500"
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }} />

            }
            </button>
          )}
        </div>

        {/* Mobile Menu Placeholder - keeping it simple for now as per requirements */}
        <div className="md:hidden text-slate-500">
          <span className="sr-only">Menu</span>
          {/* Simple hamburger could go here, but focusing on desktop editorial feel first */}
        </div>
      </div>
    </motion.nav>);

}