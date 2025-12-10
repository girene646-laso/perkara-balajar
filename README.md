# Foxxy.dev - Performance-First Portfolio Platform

![Project Banner](public/og-image.png)

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95+-brightgreen?style=flat-square)](https://developers.google.com/web/tools/lighthouse)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg?style=flat-square)](https://github.com/girene646-laso/perkara-besar-yang-keliatan-kecil)

## 📖 About The Project

This repository houses the source code for my personal portfolio website — a high-performance, fully optimized web application engineered from scratch to showcase technical expertise in modern web development.

The goal of this project was not just to display my work, but to demonstrate my ability to build **scalable, performant, and accessible** web applications without relying on heavy CMS platforms or page builders. It serves as a living example of advanced React patterns, performance optimization techniques, and modern web standards.

### ⚡ Key Features

* **🚀 High Performance:** Achieved 95+ Lighthouse score with sub-1s First Contentful Paint (FCP)
* **📦 Optimized Bundle:** 40% bundle size reduction through strategic code splitting and tree-shaking
* **♿ Accessibility First:** WCAG 2.1 AA compliant with full keyboard navigation and screen reader support
* **📱 Progressive Web App:** Offline support with service worker caching for instant load times
* **🎨 Custom Design System:** Zero CSS framework dependencies with glassmorphism UI using CSS custom properties
* **🌓 Smart Theming:** Dark/light mode with automatic `prefers-color-scheme` detection and localStorage persistence
* **🔍 SEO Optimized:** JSON-LD structured data, Open Graph meta tags, and semantic HTML5
* **⚡ Lazy Loading:** Intersection Observer-based lazy loading for below-fold sections
* **🛡️ Type Safe:** Full TypeScript implementation with zero runtime type errors

## 🛠️ Tech Stack

I chose a modern, lightweight stack to ensure maximum performance and developer experience:

**Core Framework:**
* **React 18** - Component-based architecture with Hooks
* **TypeScript 5.0** - Full type safety and better IDE support
* **Vite 5.4** - Lightning-fast dev server and optimized builds

**Styling & Design:**
* **CSS Custom Properties** - No framework overhead, pure CSS with variables
* **Glassmorphism UI** - Modern design with backdrop-filter effects
* **Responsive Design** - Mobile-first with fluid typography

**Performance & Optimization:**
* **Code Splitting** - `React.lazy()` and `Suspense` for route-based splitting
* **PWA Support** - Service Workers for offline functionality
* **Intersection Observer** - Smart component lazy loading
* **Terser Minification** - Optimized production builds

**Developer Tools:**
* **ESLint** - Code quality and consistency
* **Git** - Version control
* **npm** - Package management

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
* Node.js 18 or higher
* npm (comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/girene646-laso/perkara-besar-yang-keliatan-kecil.git
    ```

2.  **Navigate to the project directory**
    ```bash
    cd perkara-besar-yang-keliatan-kecil
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📂 Project Structure

A detailed look at the project organization:

```text
.
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest configuration
│   ├── sw.js              # Service worker for offline support
│   └── favicon.svg        # Site favicon
│
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx     # Sticky navigation with theme toggle
│   │   ├── Hero.tsx       # Landing section with CTAs
│   │   ├── ProjectsSection.tsx  # Projects grid container
│   │   ├── ProjectCard.tsx      # Individual project case studies
│   │   ├── AboutSection.tsx     # About me content
│   │   ├── SkillsSection.tsx    # Skills grid display
│   │   ├── ContactSection.tsx   # Contact form and links
│   │   ├── Footer.tsx           # Site footer
│   │   ├── LazySection.tsx      # Intersection Observer wrapper
│   │   └── SchemaScripts.tsx    # SEO structured data injection
│   │
│   ├── data/              # Static data and content
│   │   ├── projects.ts    # Project case studies with TypeScript interfaces
│   │   └── structured-data.ts   # JSON-LD schemas for SEO
│   │
│   ├── styles/            # Global styles
│   │   └── global.css     # All CSS with custom properties and themes
│   │
│   ├── utils/             # Helper functions
│   │   └── pwa.ts         # Service worker registration logic
│   │
│   ├── App.tsx            # Main layout assembly and routing
│   └── main.tsx           # Application entry point
│
├── index.html             # HTML entry with meta tags
├── vite.config.ts         # Vite configuration (build optimization)
├── tsconfig.json          # TypeScript compiler options
├── package.json           # Dependencies and scripts
└── README.md              # You are here!
```

## 🎨 Design Philosophy

This portfolio embodies a **minimalist, performance-first** approach:

* **Glassmorphism UI:** Modern aesthetic with frosted glass effects and semi-transparent surfaces
* **Black & White Theme:** Clean, professional color palette with smart theme switching
* **Zero Framework CSS:** Custom-built design system for full control and minimal bundle size
* **Accessibility First:** Every interaction is keyboard-navigable and screen-reader friendly

## 📊 Performance Metrics

Measured with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse):

| Metric | Score |
|--------|-------|
| **Performance** | 95+ |
| **Accessibility** | 100 |
| **Best Practices** | 100 |
| **SEO** | 100 |
| **First Contentful Paint** | <1s |
| **Time to Interactive** | <2s |
| **Bundle Size (gzipped)** | ~150KB |

## 🔧 Configuration & Customization

### Update Personal Information

**1. Brand Name & Header**
```tsx
// src/components/Header.tsx
<div className="brand">Your Name</div>
```

**2. Hero Section**
```tsx
// src/components/Hero.tsx
<h1>Hi, I'm Your Name</h1>
<p className="tagline">Your professional tagline</p>
```

**3. Contact Information**
```tsx
// src/components/ContactSection.tsx
// Update email, GitHub, Instagram links
```

### Add New Projects

Edit `src/data/projects.ts` following this structure:

```typescript
{
  id: 'unique-project-id',
  name: 'Project Name',
  description: 'Brief one-liner description',
  problem: 'The challenge you faced',
  solution: 'Technical implementation details',
  role: 'Your specific contributions',
  outcome: 'Measurable results and impact',
  tech: ['React', 'TypeScript', 'etc'],
  repo: 'https://github.com/username/repo',
  highlights: [
    '⚡ Key achievement with metric',
    '🎯 Another quantifiable result'
  ]
}
```

### Customize Theme Colors

Modify CSS variables in `src/styles/global.css`:

```css
:root {
  --color-bg: #ffffff;
  --color-accent: #000000;
  --radius-md: 15px;
  --space-5: 24px;
  /* ... more variables */
}

[data-theme="dark"] {
  --color-bg: #000000;
  --color-accent: #ffffff;
  /* ... dark theme overrides */
}
```

## 🏗️ Architecture Decisions

### Why Vite Over Webpack?
* **10-100x faster** development server
* **Superior tree-shaking** and code splitting
* **Native ESM support** for modern browsers
* **Optimized build times** (3-5s vs 30-60s)

### Why No CSS Framework?
* **Smaller bundle size** - Zero framework overhead (~0KB vs ~50KB+)
* **Full control** over design system
* **Better performance** with CSS custom properties
* **No unused CSS** bloat

### Why TypeScript?
* **Catch bugs at compile time** before production
* **Better IDE autocomplete** and IntelliSense
* **Self-documenting code** with interfaces
* **Easier refactoring** with confidence

### Why Code Splitting?
* **Faster initial load** - Only load what's needed
* **Better caching** - Vendor bundle changes less frequently
* **Improved UX** - Critical content renders first

## 🚢 Deployment

This project is optimized for deployment on:

* **Vercel** (recommended for Next.js-based projects)
* **Netlify** (great for static sites)
* **GitHub Pages** (free hosting for open source)
* **Cloudflare Pages** (global CDN with edge functions)

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

* **Portfolio:** [Your Live URL]
* **GitHub:** [@girene646-laso](https://github.com/girene646-laso)
* **Instagram:** [@prlpyl](https://instagram.com/prlpyl)
* **Email:** farrellfyelo@gmail.com

---

**Built with ❤️ and ☕ by Foxxy** | Demonstrating modern web development best practices

*This portfolio is not just a website — it's proof of concept for performance-driven, accessible web applications.*
- `src/styles/global.css` — global styles, variables, layout

## Accessibility
- Skip link jumps to `#main`
- Landmarks: `header[role=banner]`, `main`, `footer[role=contentinfo]`
- Focus-visible outlines and semantic headings

## Deployment
Any static hosting will work with the built `dist/` output (Vercel, Netlify, GitHub Pages, etc.).
