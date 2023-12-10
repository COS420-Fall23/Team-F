import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { useNavigate } from 'react-router-dom';

const ViewPrivacy = () => {
return (
    <div className="profile-container">
      <h2>Privacy Policy</h2>
      Mind Mate is committed to protecting the privacy and confidentiality of our users. Our policies are designed to safeguard the personal and health-related information you entrust to us.
    <br></br>
    <b>Data Collection:</b> We collect only the information necessary to provide you with quality mental health services. This includes personal identification details, contact information, and health-related data pertinent to your mental health care.
    <br></br>
    <b>Use of Information:</b> The information you provide is used solely for the purpose of delivering personalized mental health services and support. We do not share, sell, or disclose your data to third parties, except as required by law or with your explicit consent.
    <br></br>
    <b>Confidentiality:</b> Upholding the confidentiality of your information is paramount. Access to your data is restricted to authorized personnel who are bound by confidentiality agreements. All data is stored securely, with robust measures in place to prevent unauthorized access.
    <br></br>
    <b>Your Rights:</b> You have the right to access, amend, and in some cases delete your personal information. If you have concerns about how your information is handled, please contact us.
    <br></br>
    <b>Updates to Policy:</b> We may update this policy periodically. We encourage you to review it regularly to stay informed about how we are protecting your information.
    </div>
  );
};

export default ViewPrivacy;