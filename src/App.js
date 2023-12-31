import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import Counselors from './components/pages/counselor';
import Quiz from './components/pages/Quiz';
import Profile from './components/pages/Profile';
import ViewProfile from './components/pages/ProfileView';
import ViewCounselor from './components/pages/CounselorView';
import ViewResources from './components/pages/ResourcePage';
import ViewPrivacy from './components/pages/PrivacyPolicy';



import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forget-password" element={<ForgetPasswordPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/counselors" element={<Counselors />} /> {/* New route for Counselors */}
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/view-profile" element={<ViewProfile />} />
                    <Route path="/view-counselor" element={<ViewCounselor />} />
                    <Route path="/resourcepage" element={<ViewResources />} />
                    <Route path="/view-privacy" element={<ViewPrivacy />} />

                </Routes>
            </div>
        </Router>
    );
}
