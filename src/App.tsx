import { lazy, Suspense, ReactNode } from 'react';
import { Header, Hero, LazySection } from './components';
import { SchemaScripts } from './components/ui';
import './styles/global.css';

const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = () => <div style={{ minHeight: '200px' }} />;

interface LazySectionWrapperProps {
  children: ReactNode;
}

const LazySectionWrapper = ({ children }: LazySectionWrapperProps) => (
  <Suspense fallback={<SectionFallback />}>
    <LazySection>{children}</LazySection>
  </Suspense>
);

export default function App() {
  return (
    <div className="portfolio-root">
      <SchemaScripts />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <LazySectionWrapper>
          <ProjectsSection />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <AboutSection />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <SkillsSection />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <ContactSection />
        </LazySectionWrapper>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
