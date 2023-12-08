import React, { useState } from 'react';
import '../../App.css';

const CreateAccount = () => {
  const [account, setAccount] = useState({
    name: '',
    birthday: '',
    gender: 'Male',
    university: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully!');
    // Here you might want to send the account data to a server
  };

  return (
    <div className="profile-container">
      <div className="profile-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={account.name} onChange={handleChange} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" name="birthday" value={account.birthday} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender Identification</label>
            <select id="gender" name="gender" value={account.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="university">University</label>
            <input type="text" id="university" name="university" value={account.university} onChange={handleChange} placeholder="Enter your university" />
          </div>
          <h2>Login Information</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={account.email} onChange={handleChange} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={account.password} onChange={handleChange} placeholder="Enter a password" />
          </div>
          <div className="form-actions">
            <button type="submit" className="update-btn">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;