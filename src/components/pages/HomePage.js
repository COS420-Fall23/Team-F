import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../App.css';

export default function LandingPage() {
    let navigate = useNavigate(); // useNavigate instead of useHistory

    const navigateToCounselors = () => {
        navigate('/counselors'); // Navigate to Counselors route
    };

    return (
        <div className="landing-page">
            <div className="login-card">
                <h1 className="title">Home</h1>

                <button type="button" className="help-button">Help me find what I need</button>
                <button type="button" className="resource-button">Self-Assessment</button>

                {/* Updated button to navigate to Counselors */}
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
