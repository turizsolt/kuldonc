importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    messagingSenderId: "720469041543"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title 222';
    const notificationOptions = {
        body: 'Background Message body 444',
        icon: '/firebase-logo.png',
        data: { url: 'https://zsirim-e75c6.firebaseapp.com/' }, //the url which we gonna use later
        actions: [{action: "open_url", title: "Read Now"}],
        click_action: 'https://zsirim-e75c6.firebaseapp.com/'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

self.addEventListener('notificationclick', function(event) {

        switch(event.action){
            case 'open_url':
                clients.openWindow(event.notification.data.url); //which we got from above
                break;
            case 'any_other_action':
                clients.openWindow("https://www.example.com");
                break;
        }
    }
    , false);

/*
messaging.setBackgroundMessageHandler(function(payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
    let url = 'https://zsirim-e75c6.firebaseapp.com/';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({includeUncontrolled: true, type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
*/
