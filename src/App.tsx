import { lazy, Suspense } from 'react';
import { Header, Hero, LazySection, Footer } from './components';
import { SchemaScripts } from './components/ui';
import './styles/global.css';

// Lazy load non-critical sections
const { ProjectsSection, AboutSection, SkillsSection, ContactSection } = {
  ProjectsSection: lazy(() => import('./components/ProjectsSection')),
  AboutSection: lazy(() => import('./components/AboutSection')),
  SkillsSection: lazy(() => import('./components/SkillsSection')),
  ContactSection: lazy(() => import('./components/ContactSection')),
};

export default function App() {
  return (
    <div className="portfolio-root">
      <SchemaScripts />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <LazySection>
            <ProjectsSection />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <LazySection>
            <AboutSection />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <LazySection>
            <SkillsSection />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <LazySection>
            <ContactSection />
          </LazySection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
