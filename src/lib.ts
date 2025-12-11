// ============ PROJECTS DATA ============
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
    description: 'A high-performance personal portfolio built with React and TypeScript. Demonstrates modern web development practices including performance optimization, accessibility, and clean code architecture.',
    problem: 'Needed to build a fast, accessible portfolio from scratch without relying on page builders or heavy CMS platforms.',
    solution: 'Built a custom React application with Vite for fast builds. Implemented code splitting with React.lazy() and Suspense to reduce bundle by 40%. Added PWA support with service workers for offline functionality and instant load times.',
    role: 'Solo Full-Stack Developer - Architecture design, component development, performance optimization, and SEO implementation.',
    outcome: 'Achieved 95+ Lighthouse score with sub-1s load time. Full WCAG 2.1 AA accessibility compliance. Clean TypeScript codebase with zero runtime errors.',
    tech: ['React 18', 'TypeScript', 'Vite', 'CSS Custom Properties', 'PWA', 'Service Workers', 'Lazy Loading', 'Code Splitting'],
    repo: 'https://github.com/girene646-laso/perkara-besar-yang-keliatan-kecil'
  }
];

// ============ SEO STRUCTURED DATA ============
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Foxxy",
  "url": "https://foxxy-portfolio.com",
  "jobTitle": "Developer",
  "sameAs": [
    "https://github.com/girene646-laso",
    "https://instagram.com/prlpyl"
  ],
  "email": "farrellfyelo@gmail.com",
  "image": "/og-image.png"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Foxxy Portfolio",
  "url": "https://foxxy-portfolio.com",
  "description": "Personal portfolio showcasing projects, skills, and contact information.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://foxxy-portfolio.com?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Foxxy",
  "url": "https://foxxy-portfolio.com",
  "logo": "/favicon.svg",
  "contact": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "farrellfyelo@gmail.com"
  }
};

// ============ PWA INITIALIZATION ============
export function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
}

export function setupPWAPrompt() {
  let deferredPrompt: any;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('PWA install prompt ready');
  });

  window.addEventListener('appinstalled', () => {
    console.log('PWA installed successfully');
  });
}
