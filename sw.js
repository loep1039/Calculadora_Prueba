const CACHE_NAME = 'calc-v2'; // Cambiamos el nombre para forzar actualización

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Obliga al nuevo Service Worker a activarse de inmediato
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Toma el control de la página inmediatamente
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
