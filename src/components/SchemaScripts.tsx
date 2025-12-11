import { useEffect } from 'react';
import { personSchema, websiteSchema, organizationSchema } from '../lib';

export function SchemaScripts() {
  useEffect(() => {
    // Inject Person schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.textContent = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Inject Website schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    // Inject Organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    return () => {
      // Cleanup
      document.head.removeChild(personScript);
      document.head.removeChild(websiteScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  return null;
}
