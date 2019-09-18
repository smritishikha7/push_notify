importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDyL-MvifOCgPQApE-cfKgLKXAE2nSIONQ",
    authDomain: "pushtrial-285df.firebaseapp.com",
    databaseURL: "https://pushtrial-285df.firebaseio.com",
    projectId: "pushtrial-285df",
    storageBucket: "",
    messagingSenderId: "603784342893"
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();