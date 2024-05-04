// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your API key",
  authDomain: "mern-event-inventory.firebaseapp.com",
  projectId: "mern-event-inventory",
  storageBucket: "mern-event-inventory.appspot.com",
  messagingSenderId: "882301731113",
  appId: "1:882301731113:web:8d08108b5209f401b93738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;