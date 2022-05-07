// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVX5Kk9GX-Rb5b3GN783f4R7vDp-OBGC0",
    authDomain: "warehouse-acdfc.firebaseapp.com",
    projectId: "warehouse-acdfc",
    storageBucket: "warehouse-acdfc.appspot.com",
    messagingSenderId: "167402030168",
    appId: "1:167402030168:web:1ac6f01f589b2a70aff62d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;