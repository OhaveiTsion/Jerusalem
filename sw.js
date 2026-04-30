self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Nécessaire pour que le bouton d'installation soit activé par le navigateur
  return;
});
