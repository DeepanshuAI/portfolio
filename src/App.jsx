import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/common/CustomCursor';
import AuroraBackground from './components/bg/CyberGridCanvas';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';

// Lazy load below-fold sections for faster initial render
const AboutSection      = lazy(() => import('./components/sections/AboutSection'));
const SkillsSection     = lazy(() => import('./components/sections/SkillsSection'));
const ProjectsSection   = lazy(() => import('./components/sections/ProjectsSection'));
const ExperienceSection = lazy(() => import('./components/sections/ExperienceSection'));
const TechStackSection  = lazy(() => import('./components/sections/TechStackSection'));
const ContactSection    = lazy(() => import('./components/sections/ContactSection'));

// Minimal suspense fallback — invisible, no layout shift
const SectionFallback = () => (
  <div style={{ minHeight: '40vh' }} aria-hidden="true" />
);

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.0,          // slightly faster than before (was 1.2)
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out — feels snappier
      smoothTouch: false,
      prevent: (node) => node.id === 'modal-root', // don't interfere with modals
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-text overflow-x-hidden" id="app-root">
      {/* Custom cursor — pure DOM, no React re-renders */}
      <CustomCursor />

      {/* Aurora ambient background */}
      <AuroraBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content — Hero is eager, rest is lazy */}
      <main id="main-content" role="main">
        <HeroSection />

        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TechStackSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
