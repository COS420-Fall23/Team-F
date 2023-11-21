// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDkCYhI1QQWQyPL_uS2uOM4Xq5t4ZTfZzg",
    authDomain: "mental-health-de484.firebaseapp.com",
    projectId: "mental-health-de484",
    storageBucket: "mental-health-de484.appspot.com",
    messagingSenderId: "409320190217",
    appId: "1:409320190217:web:e93afd53a6cd9913fe23d8",
    measurementId: "G-M4K8YG2ZJG"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle registration
document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Registered successfully
          console.log('User created:', userCredential.user);
          // Additional logic after successful registration
        })
        .catch((error) => {
          console.error('Registration error:', error);
          // Handle errors here
        });
    });
  }
});
