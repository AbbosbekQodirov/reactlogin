import firebase from "firebase";
import "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0x4MjZDX2FyfBlMoCq1236QcIhNu4O84",
    authDomain: "register-bd348.firebaseapp.com",
    projectId: "register-bd348",
    storageBucket: "register-bd348.appspot.com",
    messagingSenderId: "231082655934",
    appId: "1:231082655934:web:737ba384a674857e97deef",
    measurementId: "G-8X70QBDGME"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

export { projectAuth }
