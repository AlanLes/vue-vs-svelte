// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPPTzZf7C2jqVstgO2qHLLtgDU1EkCiBU",
  authDomain: "vue-svelte-presentation.firebaseapp.com",
  projectId: "vue-svelte-presentation",
  storageBucket: "vue-svelte-presentation.appspot.com",
  messagingSenderId: "410447386891",
  appId: "1:410447386891:web:b5171f18fd479016d62a0e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
