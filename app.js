// const admin = require('firebase-admin')

var config = {
  apiKey: "AIzaSyDyL-MvifOCgPQApE-cfKgLKXAE2nSIONQ",
  authDomain: "pushtrial-285df.firebaseapp.com",
  databaseURL: "https://pushtrial-285df.firebaseio.com",
  projectId: "pushtrial-285df",
  storageBucket: "",
  messagingSenderId: "603784342893",
  appId: "1:603784342893:web:da921f50fd0f3fe22d7e64"
  // credential: admin.credential.applicationDefault(),
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission().then(function () {
    //getToken(messaging);
    console.log("have permisson");

    return messaging.getToken();
  }).then(function (token) {
    console.log(token);
  })
  .catch(function (err) {
    console.log('Permission denied', err);
  });

if ("serviceWorker" in navigator) {
  send().catch(err => console.log(err));
}

function send() {
  navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
      messaging.useServiceWorker(registration);
    });

}
// Notification.requestPermission().then((permission) => {
//     console.log(permission);

//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       // TODO(developer): Retrieve an Instance ID token for use with FCM.
//       // ...
//     } else {
//       console.log('Unable to get permission to notify.');
//     }
//   });



messaging.onMessage(function (payload) {
  console.log('onMessage: ', payload);
});