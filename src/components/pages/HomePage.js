import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function LandingPage() {
    let navigate = useNavigate();

    const navigateToCounselors = () => {
        navigate('/counselors');
    };

    const navigateToResources = () => {
        navigate('/resourcepage');
    };

    const navigateToProfile = () => {
        navigate('/Profile');
    };
    
    const navigateToViewProfile = () => {
        navigate('/view-profile');
    };
    const navigateToViewCounselor = () => {
        navigate('/view-counselor');
    };

    return (
        <div className="landing-page">
            <div className="login-card">
                
                <h1 className="title">Home</h1>
                <div className="button-container">
                <button type="button"  onClick={navigateToProfile}>
                    Update Profile
                </button>
                </div>

                <div className="button-container">
                <button type="button"  onClick={navigateToViewCounselor}>
                    View Counselor
                </button>
                </div>

                <div className="button-container">
                <button type="button"  onClick={navigateToViewProfile}>
                    View Profile
                </button>
                </div>

                <button type="button" className="help-button" onClick={navigateToResources}>Resources</button>

                <Link to="/quiz" className="full-width-link">
                    <button type="button" className="resource-button">Self-Assessment</button>
                </Link>

                <button type="button" className="resource-button" onClick={navigateToCounselors}>Local Counselors</button>

                <button type="button" className="resource-button">Continue</button>
                
                <div className="footer-container">
                    <div className="navigation-buttons">
                        <button type="button" className="back-button"></button>
                        <button type="submit" className="continue-button"></button>
                    </div>
                </div>
            </div>        
        </div>
    );
}