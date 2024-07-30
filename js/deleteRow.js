
import { auth, firebaseConfig} from './firebase-config.js'; //REMEMEBR TO DIRECT IT PROPERLY!
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getDatabase, ref, remove } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js';


const app2 = initializeApp(firebaseConfig);
const database2 = getDatabase(app2);

async function removeGuest(idTest) {
  try {
    const guestRef = ref(database2, 'guests/' + idTest);
    await remove(guestRef)
    console.log('Guest removed successfully');
  } catch (error) {
    console.error('Error removing guest:', error);
  }
}

export { removeGuest }