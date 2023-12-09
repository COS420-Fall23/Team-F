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

const ViewCounselor = () => {
    const [profile, setProfile] = useState(null);
    const [userId, setUserId] = useState('');
  
    useEffect(() => {
      const savedUserId = sessionStorage.getItem('userId');
      if (savedUserId) {
        setUserId(savedUserId);
        fetchUserProfile(savedUserId);
      }
    }, []);
  
    const fetchUserProfile = async () => {
        const q = query(collection(db, "profiles"), where("position", "==", "Counselor"));
        const querySnapshot = await getDocs(q);
      
        if (!querySnapshot.empty) {
          const counselors = querySnapshot.docs.map(doc => doc.data());
          setProfile(counselors); // Assuming you want to store all counselors in the 'profile' state
          window.alert("Counselors loaded");
        } else {
          window.alert("No Counselors found");
        }
      };
      
    
  
      if (!profile || profile.length === 0) {
        return <div>Loading profiles...</div>;
      }
      
      return (
        <div className="profile-container">
          <h2>Counselor Profiles</h2>
          {profile.map((counselor, index) => (
            <div key={index}>
              <div>Name: {counselor.name}</div>
              <div>Position: {counselor.position}</div>
              <div>Birthday: {counselor.birthday}</div>
              <div>Gender: {counselor.gender}</div>
              <div>University: {counselor.university}</div>
              <div>Email: {counselor.email}</div>
              
            </div>
          ))}
        </div>
      );
      
  
 
  };
  
  export default ViewCounselor;
  