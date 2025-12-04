// Service Worker registration and PWA initialization
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

// Detect PWA install prompt
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

  return deferredPrompt;
}
