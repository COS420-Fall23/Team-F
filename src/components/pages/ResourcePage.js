import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function ResourcePage() {
    let navigate = useNavigate();

    const navigateToCounselors = () => {
        navigate('/counselors');
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
                
                <h1 className="title">Resources</h1>
                <button type="button" className="resource-button">UMaine Counseling Center</button>

                <button type="button" className="resource-button">UMaine Student Athlete Mental Health Services</button>

                <button type="button" className="resource-button">UMaine Student Accessibility Services</button>

                <button type="button" className="resource-button">UMaine Residence Life</button>

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