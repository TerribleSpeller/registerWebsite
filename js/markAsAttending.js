
import { auth, firebaseConfig} from './firebase-config.js'; //REMEMEBR TO DIRECT IT PROPERLY!
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getDatabase, ref, set, remove, update } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js';


const app2 = initializeApp(firebaseConfig);
const database2 = getDatabase(app2);

async function markAsAttending(idTest) {
  try {
    const guestRef = ref(database2, 'guests/' + idTest);
    await update(guestRef, { attending: true });
    console.log('Guest marked as attending successfully');
  } catch (error) {
    console.error('Error attending guest:', error);
  }
}

export { markAsAttending }