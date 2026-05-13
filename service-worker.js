// This name changes when we want browsers to save a fresh offline copy.
const CACHE_NAME = 'mostafa-portfolio-v1';

// These are the important files the site needs to work offline.
const CORE_FILES = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json'
];

// Save the core files when the service worker is installed.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES))
  );
});

// Remove older caches so the browser does not keep old files forever.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames
        .filter((cacheName) => cacheName !== CACHE_NAME)
        .map((cacheName) => caches.delete(cacheName))
    ))
  );
});

// Try the network first, then use the saved offline copy if the network fails.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
