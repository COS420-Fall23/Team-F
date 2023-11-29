import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="login-card">
                <h1 className="title">Home</h1>

                
                <button type="button" className="help-button">Help me find what I need</button>

                <button type="button" className="resource-button">Self-Assessment</button>

                <button type="button" className="resource-button">Local Counselors</button>

                <button type="button" className="resource-button">Continue</button>
                    
                <div className ="footer-container">
                    <div className="navigation-buttons">
                        <button type="button" className="back-button"></button>
                        <button type="submit" className="continue-button"></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
