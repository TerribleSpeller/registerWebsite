// firebase-config.js

// Import Firebase SDKs (using CDN links)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js';


// Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyAGAE_ojAoeH7oWvcYOQgXm9ZAqck1EeTU",
  authDomain: "register-web-4a5f8.firebaseapp.com",
  databaseURL: "https://register-web-4a5f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "register-web-4a5f8",
  storageBucket: "register-web-4a5f8.appspot.com",
  messagingSenderId: "911239776802",
  appId: "1:911239776802:web:5ef911f6dd2c27ae4b187b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Export the initialized services
export { app, auth, database };
