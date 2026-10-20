self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass through requests normally to keep Apps Script live sync working
  e.respondWith(fetch(e.request).catch(() => {
    return caches.match(e.request);
  }));
});
