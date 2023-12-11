import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore,doc,getDocs,query, where, orderBy } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
