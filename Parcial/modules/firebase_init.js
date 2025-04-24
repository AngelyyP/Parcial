// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjSvJlvBCtdkFVdUk7FNP6Uj5AHlqka5U",
  authDomain: "teams-3d5c0.firebaseapp.com",
  projectId: "teams-3d5c0",
  storageBucket: "teams-3d5c0.firebasestorage.app",
  messagingSenderId: "279154534045",
  appId: "1:279154534045:web:b741202bb68959653bd674"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };