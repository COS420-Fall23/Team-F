import { app } from './firebase-config.js';


// Import Firebase modules
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Assuming Firebase is already initialized in firebase-config.js

const auth = getAuth(app);

// Handle login
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Logged in successfully
          console.log('User logged in:', userCredential.user);
          // Redirect to another page or show login success message
        })
        .catch((error) => {
          console.error('Login error:', error);
          // Handle errors here (e.g., user not found, wrong password)
        });
    });
  }
});
