import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
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
export { app };