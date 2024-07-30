import { auth } from './firebase-config.js'; //REMEMEBR TO DIRECT IT PROPERLY!
import { signOut } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';

function signout() {
    signOut(auth).then(() => {
        window.location.href = '../index.html';
    }).catch((error) => {
        console.error('Logout error', error);
    });
}

export {signout}