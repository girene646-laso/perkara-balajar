export interface Project {
  id: string;
  name: string;
  description: string;
  problem?: string;
  solution?: string;
  role?: string;
  outcome?: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    name: 'Foxxy.dev - Performance-First Portfolio Platform',
    description: 'A high-performance, fully optimized personal portfolio engineered from scratch with modern web technologies and accessibility at its core.',
    problem: 'Needed a professional online presence that showcases technical expertise while demonstrating advanced React patterns, performance optimization, and modern web standards—without relying on heavy CMS platforms or page builders.',
    solution: 'Architected a custom React application using Vite for lightning-fast builds and optimal tree-shaking. Implemented strategic code splitting with React.lazy() and Suspense, reducing initial bundle size by 40%. Built a complete PWA with service worker caching for offline support and sub-second load times.',
    role: 'Solo Full-Stack Developer - Handled complete architecture design, component development, performance optimization, SEO implementation, and deployment infrastructure.',
    outcome: 'Achieved 95+ Lighthouse performance score with sub-1s First Contentful Paint (FCP). Implemented full WCAG 2.1 AA accessibility compliance with keyboard navigation and screen reader support. Created a maintainable codebase with TypeScript for type safety and reduced runtime errors by 100%.',
    tech: ['React 18', 'TypeScript', 'Vite', 'CSS Custom Properties', 'PWA', 'Service Workers', 'Lazy Loading', 'Code Splitting'],
    repo: 'https://github.com/girene646-laso/perkara-besar-yang-keliatan-kecil',
    highlights: [
      '⚡ 95+ Lighthouse Score - Optimized performance with lazy loading and code splitting',
      '♿ WCAG 2.1 Compliant - Full keyboard navigation and screen reader support',
      '📱 Progressive Web App - Offline support with service worker caching',
      '🎨 Glassmorphism UI - Custom design with dark/light theme using CSS variables',
      '🔧 Zero Dependencies UI - No CSS frameworks, fully custom component library',
      '📦 40% Bundle Reduction - Strategic code splitting and tree-shaking',
      '🚀 Sub-1s Load Time - Optimized with Intersection Observer lazy sections',
      '🔍 SEO Optimized - JSON-LD structured data and Open Graph meta tags'
    ]
  }
];
