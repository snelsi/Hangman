self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/index.html',
                '/home.html',
                '/game.html',
                '/game-over.html',
                '/css/bootstrap_style.css',
                '/css/style.css',
                '/node_modules/bootstrap/dist/css/bootstrap.min.css',
                '/node_modules/animate.css/animate.min.css',
                '/node_modules/jquery/dist/jquery.min.js',
                '/node_modules/@fortawesome/fontawesome-free/js/all.min.js',
                '/js/game.js',
                '/img/noose.svg',
                '/img/icon512.png',
                '/img/icon192.png',
                '/manifest.webmanifest',
                'https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap',

            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});