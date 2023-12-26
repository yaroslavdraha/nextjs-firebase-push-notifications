// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging, getToken} from "@firebase/messaging";


console.log('typeof window', typeof window)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDalZWQvGJ4oebFB1KXypFdDxDFXDt0i4",
    authDomain: "pwa-test-82a84.firebaseapp.com",
    projectId: "pwa-test-82a84",
    storageBucket: "pwa-test-82a84.appspot.com",
    messagingSenderId: "1059294138361",
    appId: "1:1059294138361:web:c8d1e2bab62da2c643b728",
    measurementId: "G-6FE1CG6RG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Add the public key generated from the console here.
const vapidKey = "BCzljk4SNgPqH4FwlS9yLl2fS6xmMnV4gZjaMyb6nNZ_6IES-w-JLNAF5CsmqwfycSO3TCTUdrnpuFNOGkScvRQ"


if (typeof window !== undefined) {
    const messaging = getMessaging(app);

    const requestPermission = ()=> {
        console.log('Requesting permission...');

        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');

                getToken(messaging, { vapidKey }).then((currentToken) => {
                    if (currentToken) {
                        alert(currentToken)
                        console.log('Current token', currentToken)
                    } else {
                        // Show permission request UI
                        console.log('No registration token available. Request permission to generate one.');
                        // ...
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                });
            }
        })
    }

    requestPermission()
}

