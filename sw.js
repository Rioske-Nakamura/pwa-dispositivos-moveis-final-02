let cacheName = "metador-de-veia";
let filesToCache = ["/", "/index.html", 
                "/css/style.css", "/js/main.js", "/html/carne", "/html/doces", "/html/massas", "/images/", "favicon.ico",
                "/images/carne1.jpg", "/images/carne2.jpg", "/images/carne3.jpg", "/images/carne4.jpg", "/images/carne5.jpg",
                "/images/doce1.jpg", "/images/doce2.jpg", "/images/doce3.jpg", "/images/doce4.jpg", "/images/doce5.jpg",
                "/images/massa1.jpg", "/images/massa2.jpg", "/images/massa3.jpg", "/images/massa4.jpg", 
                "/images/massa6.jpg", "/images/massa8.jpg", "/images/massa9.jpg", "/images/massa10.jpg", 
                
              ];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* disponibilizando o conteudo quando estiver offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

