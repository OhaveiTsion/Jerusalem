// Installation du Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installation réussie');
  self.skipWaiting();
});

// Interception des requêtes (On laisse tout passer normalement)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
