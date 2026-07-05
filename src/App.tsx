import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TechSection } from './components/TechSection';
import { ProjectsSection } from './components/ProjectsSection';
// import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { TopNavigation } from './components/TopNavigation';
import { ThankYouPage } from './components/ThankYouPage';

function MainPage() {
  const [activeSection, setActiveSection] = useState('about');
  const sections = [
  {
    id: 'about',
    label: 'About'
  },
  {
    id: 'services',
    label: 'Services'
  },
  {
    id: 'tech',
    label: 'Technologies'
  },
  {
    id: 'projects',
    label: 'Projects'
  },
  // {
  //   id: 'blog',
  //   label: 'Blog'
  // },
  {
    id: 'contact',
    label: 'Contact'
  }];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0.2
      }
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

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
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-sky-100 selection:text-sky-900 min-h-screen flex flex-col">
      <TopNavigation activeSection={activeSection} sections={sections} />

      <main className="flex-grow pt-16 md:pt-20">
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <ProjectsSection />
        {/* <BlogSection /> */}
        <ContactSection />
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100">
        © {new Date().getFullYear()} Khesim Reid. All rights reserved.
      </footer>
    </div>);

}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
}