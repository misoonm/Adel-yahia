// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        // أضف هنا الملفات التي تريد تخزينها مؤقتًا
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        // أي أصول أخرى
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
