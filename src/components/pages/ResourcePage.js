import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function ResourcePage() {
    return (
        <div className="landing-page">
            <div className="login-card">
                
                <h1 className="title">Resources</h1>
                <button type="button" className="resource-button">onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://umaine.edu/counseling/';
                }}UMaine Counseling Center</button>

                <button type="button" className="resource-button">onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://umaine.edu/counseling/student-athlete-mental-health-services/';
                }}UMaine Student Athlete Mental Health Services</button>

                <button type="button" className="resource-button">onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://umaine.edu/studentaccessibility/';
                }}UMaine Student Accessibility Services</button>

                <button type="button" className="resource-button">onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://umaine.edu/reslife/';
                }}UMaine Residence Life</button>

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