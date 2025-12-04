// Structured Data (JSON-LD) for SEO
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
