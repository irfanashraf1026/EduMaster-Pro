self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through (Kuch block nahi karta)
  e.respondWith(fetch(e.request).catch(() => {}));
});
