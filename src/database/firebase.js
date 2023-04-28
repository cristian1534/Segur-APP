const firebase = require('firebase/compat/app');
require('firebase/compat/auth');
require('firebase/compat/firestore');



const firebaseConfig = {
  apiKey: "AIzaSyAeACCg2zFd1t12f0kGUeSkFLe9kQSG9Sc",
  authDomain: "segur-app.firebaseapp.com",
  projectId: "segur-app",
  storageBucket: "segur-app.appspot.com",
  messagingSenderId: "216194356936",
  appId: "1:216194356936:web:b9946ca799730a797237fd",
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase;


