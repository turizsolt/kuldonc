import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2-hX481H6-mW9DVsAFAeSdRVqgGJYDHA",
    authDomain: "zsirim-e75c6.firebaseapp.com",
    databaseURL: "https://zsirim-e75c6.firebaseio.com",
    projectId: "zsirim-e75c6",
    storageBucket: "zsirim-e75c6.appspot.com",
    messagingSenderId: "720469041543",
    appId: "1:720469041543:web:ffa3b8e6bfcc74eb28f322"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BOhL07ZEcG4ewzyaTqlCugv0A-YEMlP-2UZ-tXiYEhUO_Plh2Wd_fcukLrxkAnkeqktS2TIpd5JH5nr317Rb8Lk"
);
export { messaging };
