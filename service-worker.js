//instalacion de sservice worker
self.addEventListener('install', (event) =>{
    //esperar a que se complete lainstalacion
    //promesas
    event.waitUntil(
        //abra una cache llmada pwa cache v1
        caches.open('pwa-cache-v').then(cache => {
            //anade a la cahce los archivos especificados para que esten disponibles en modo offline
            return cache.addAll([
                    '/',
                    'index.html',
                    'manifest.jsonc'
                ]);
        })
    );
});

//fetch peticion evento del service worker
self.addEventListener('fetch', (event) => {//declaramos el evento
    event.respondWith(
        caches.match(event.request).then((response) => {//promesa
        return response || fetch(event.request);//respuesta a la promesa
    })
    );
});