self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

// Mesaj ile kontrol tetikleme
self.addEventListener('message', e => {
  if(e.data === 'kontrolEt') kontrolEt();
});

// Tarihleri kontrol et ve bildirim göster
function kontrolEt() {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('kontrolBasladi'); // opsiyonel log
    });
  });

  // LocalStorage web worker’da yok, client üzerinden alınacak
  self.clients.matchAll({includeUncontrolled: true}).then(clients => {
    clients.forEach(client => {
      client.postMessage('bildirimKontrol');
    });
  });
}

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
