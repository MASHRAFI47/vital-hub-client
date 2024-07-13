// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB9jleQQhx12JngneXomaYVJHm8wBl7U4",
    authDomain: "vital-hub.firebaseapp.com",
    projectId: "vital-hub",
    storageBucket: "vital-hub.appspot.com",
    messagingSenderId: "326754875764",
    appId: "1:326754875764:web:f4294f88527904a43a9421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;