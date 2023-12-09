import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { useNavigate } from 'react-router-dom';
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


export default function LandingPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault(); // Prevent the default form submission
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registration successful
                console.log('User created:', userCredential.user);
                navigate('/home'); // Navigate to home or another page
            })
            .catch((error) => {
                // Handle errors here
                console.error('Registration error:', error);
            });
    };


    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div className="landing-page">
            <div className="login-card">
                <h1 className="title">MindMate</h1>
                <svg width="290" height="317" viewBox="0 0 290 317" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M127.003 6.387e-07C157.838 0.0020081 187.621 11.2041 210.794 31.5167C233.967 51.8293 248.949 79.8653 252.945 110.395L288.661 166.488C291.01 170.181 290.534 175.681 285.089 178.027L253.993 191.309V237.75C253.993 246.157 250.648 254.22 244.694 260.165C238.74 266.11 230.665 269.45 222.245 269.45H190.514L190.498 317H47.634V258.45C47.634 239.747 40.7131 222.043 27.8712 206.066C12.9134 187.418 3.53645 164.929 0.820674 141.192C-1.89511 117.454 2.16084 93.4336 12.5212 71.8974C22.8815 50.3612 39.1247 32.1859 59.3791 19.4656C79.6336 6.7453 103.075 -0.00239693 127.003 6.387e-07ZM118.59 91.3436C113.352 86.2899 106.335 83.4927 99.0514 83.5544C91.7679 83.6161 84.7999 86.5318 79.6484 91.6736C74.4969 96.8153 71.574 103.772 71.5092 111.044C71.4445 118.317 74.243 125.324 79.3022 130.556L127.003 178.202L174.703 130.556C177.356 127.997 179.472 124.936 180.927 121.552C182.382 118.167 183.148 114.527 183.179 110.845C183.21 107.162 182.507 103.509 181.109 100.101C179.712 96.6921 177.648 93.5956 175.04 90.9918C172.431 88.388 169.329 86.329 165.915 84.935C162.5 83.541 158.842 82.84 155.154 82.8727C151.465 82.9055 147.82 83.6714 144.432 85.1257C141.043 86.5801 137.978 88.6938 135.416 91.3436L127.003 99.7441L118.59 91.3436Z" fill="#323C32"/>
</svg>

                <form className="login-form" onSubmit={register}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    <Link to="/forgot-password" className="forgot-link">Forgot username or password</Link>
                    <button type="submit" className="continue-button">Create New User</button>
                    
                </form>
                <div className ="footer-container">
                    <div className="navigation-buttons">
                    <button type="button" onClick={goToHome} className="back-button">Continue as Guest</button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );


    
}
