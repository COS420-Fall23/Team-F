import React, { useState, useEffect } from 'react';
import '../../App.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';
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


const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    birthday: '2002-12-16',
    gender: 'Male',
    university: 'University of Maine - Orono (UMO)',
    email: 'john.doe@email.com',
    password: '********'

  });

  

  
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const savedUserId = getUserID();
    if (savedUserId) {
      setUserId(savedUserId);
    }
  }, []);

  const getUserID = () => {
    return sessionStorage.getItem('userId');
  }
  

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Add the profile data to Firestore
      const docRef = await addDoc(collection(db, "profiles"), {
        ...profile,
        userId: userId 
      });
      console.log("Profile added with ID: ", docRef.id);
      window.alert('Profile updated!');
    } catch (error) {
      window.alert("Error adding profile: ", error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-form">
        <h2>Your Profile</h2>
        <h1><p className="update-instruction">Tap on an item to update</p></h1>
        <form onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="name">User ID</label>
            <input type="text" id="name" name="name" value={userId} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" name="birthday" value={profile.birthday} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender Identification</label>
            <select id="gender" name="gender" value={profile.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select id="position" name="position" value={profile.position} onChange={handleChange}>
              <option value="Student">Student</option>
              <option value="Counselor">Counselor</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="university">University of study</label>
            <input type="text" id="university" name="university" value={profile.university} onChange={handleChange} />
          </div>
          <h2>Login Information</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={profile.password} onChange={handleChange} />
          </div>
          <div className="form-actions">
            <button type="submit" className="update-btn">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

<div className="form-actions">
  <button type="submit" className="update-btn">Update Profile</button>
</div>


export default Profile;
