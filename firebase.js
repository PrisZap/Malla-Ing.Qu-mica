// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Config de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAyiBLrbz3_hWfbcvKobeTijRMhtTbaMw",
  authDomain: "malla-ingenieria-quimica-76a2a.firebaseapp.com",
  projectId: "malla-ingenieria-quimica-76a2a",
  storageBucket: "malla-ingenieria-quimica-76a2a.firebasestorage.app",
  messagingSenderId: "522265422388",
  appId: "1:522265422388:web:9b3f4f8e93bbabb91ef861"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Iniciar sesión anónima
function iniciarSesionAnonima(callback) {
  signInAnonymously(auth)
    .then(() => {
      onAuthStateChanged(auth, user => {
        if (user) callback(user.uid);
      });
    })
    .catch(console.error);
}

// Exportar funciones útiles
export { db, doc, getDoc, setDoc, iniciarSesionAnonima };
