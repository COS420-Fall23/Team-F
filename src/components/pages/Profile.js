import React, { useState } from 'react';
import '../../App.css'


const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    birthday: '2002-12-16',
    gender: 'Male',
    university: 'University of Maine - Orono (UMO)',
    email: 'john.doe@email.com',
    password: '********'
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!'); // Replace with actual update logic
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
