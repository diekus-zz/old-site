importScripts('/cache-polyfill.js');

const CACHE_VER = 1;

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('dks19' + CACHE_VER).then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/images/bg.jpg',
                '/images/diekus.jpg',
                '/images/logo.svg',
                '/scripts/dksitem.js',
                '/scripts/19.js',
                '/styles/19.css',
                '/styles/reset.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch (event.request);
        })
    );
}); 
