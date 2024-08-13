
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js';
import { getStorage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";



const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "REDACTED",
  databaseURL: "REDACTED",
  projectId: "REDACTED",
  storageBucket: "REDACTED",
  messagingSenderId: "REDACTED",
  appId: "REDACTED",
  measurementId: "REDACTED"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
//const storage = getStorage();

export { app, auth, database, firebaseConfig};
