const CACHE_NAME = "artkart-cache-v1";
const urlsToCache = [
  "/ArtKart/",
  "/ArtKart/index.html",
  "/ArtKart/manifest.json",
  "/ArtKart/icons/icon-192.png",
  "/ArtKart/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
