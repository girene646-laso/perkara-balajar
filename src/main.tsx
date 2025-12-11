import { createRoot } from 'react-dom/client';
import App from './App';
import { initServiceWorker } from './lib';

// Initialize PWA support
initServiceWorker();

createRoot(document.getElementById('root')!).render(<App />);
