// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfyj3eZNasTaD9OL2ztsjE9Y5NFn2_T7M",
    authDomain: "assignment-10-69530.firebaseapp.com",
    projectId: "assignment-10-69530",
    storageBucket: "assignment-10-69530.appspot.com",
    messagingSenderId: "564188220537",
    appId: "1:564188220537:web:f8ccd0d66b356d05b298a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;