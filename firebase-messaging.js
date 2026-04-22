importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyCZ-QeZrs6qJlDk4ZMs9LP2iQ4wjJ2vcF8",
    authDomain: "artkart-69692.firebaseapp.com",
    projectId: "artkart-69692",
    storageBucket: "artkart-69692.appspot.com",
    messagingSenderId: "1067935304156",
    appId: "1:1067935304156:web:d8c50769ecb9797f8d6719"
 
});

const messaging = firebase.messaging();

// 🔔 Background notification
messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icons/icon-192.png"
  });
});

// 📦 Offline cache
const CACHE_NAME = "artkart-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/icons/icon-192.png"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});