self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
  self.skipWaiting(); // ativa o SW imediatamente
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
  return self.clients.claim();
});

self.addEventListener('message', event => {
  if (event.data === 'show-notification') {
    self.registration.showNotification('Olá!', {
      body: 'Essa é uma notificação enviada pelo Service Worker.',
      icon: 'https://cdn-icons-png.flaticon.com/512/599/599502.png',
      vibrate: [100, 50, 100],
      tag: 'teste-notificacao'
    });
  }
});
