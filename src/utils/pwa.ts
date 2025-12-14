// Service Worker registration and PWA initialization
export function initServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  // Defer registration until app is idle
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => registerSW());
  } else {
    (window as any).addEventListener('load', registerSW);
  }
}

function registerSW() {
  navigator.serviceWorker
    .register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.warn('Service Worker registration failed:', error);
    });
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
