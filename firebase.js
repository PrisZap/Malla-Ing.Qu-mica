import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAAyiBLrbz3_hWfbcvKobeTijRMhtTbaMw",
    authDomain: "malla-ingenieria-quimica-76a2a.firebaseapp.com",
    projectId: "malla-ingenieria-quimica-76a2a",
    storageBucket: "malla-ingenieria-quimica-76a2a.firebasestorage.app",
    messagingSenderId: "522265422388",
    appId: "1:522265422388:web:9b3f4f8e93bbabb91ef861"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

function iniciarSesionAnonima(callback) {
  signInAnonymously(auth)
    .then(() => {
      onAuthStateChanged(auth, user => {
        if (user) callback(user.uid);
      });
    })
    .catch(console.error);
}

export { db, doc, getDoc, setDoc, iniciarSesionAnonima };
