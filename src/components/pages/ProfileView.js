import React, { useState, useEffect } from 'react';
import '../../App.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore,doc,getDocs,query, where, orderBy } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';


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
// Initialize Firestore
const db = getFirestore(app);

const ViewProfile = () => {
    const [profile, setProfile] = useState(null);
    const [userId, setUserId] = useState('');
  
    useEffect(() => {
      const savedUserId = sessionStorage.getItem('userId');
      if (savedUserId) {
        setUserId(savedUserId);
        fetchUserProfile(savedUserId);
      }
    }, []);
  
    const fetchUserProfile = async (userId) => {
      const q = query(collection(db, "profiles"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
    
      if (!querySnapshot.empty) {
        const totalDocs = querySnapshot.docs.length;
        const lastDoc = querySnapshot.docs[totalDocs - 1].data(); // Get the last document
        setProfile(lastDoc);
        window.alert("Profile loaded");
      } else {
        window.alert("No such Profile");
      }
    };
    
    
  
    if (!profile) {
      return <div>Loading profile...</div>;
    }
  
    return (
      <div className="profile-container">
        <h2>User Profile</h2>
        <div>Name: {profile.name}</div>
        <div>Position: {profile.position}</div>
        <div>Birthday: {profile.birthday}</div>
        <div>Gender: {profile.gender}</div>
        <div>University: {profile.university}</div>
        <div>Email: {profile.email}</div>
       
      </div>
    );
  };
  
  export default ViewProfile;
  