import React, { Component } from 'react';
import '../../css/Counselors.css'; // Ensure this CSS file exists and is correctly linked

class Counselors extends Component {
  state = {
    activeUniversity: null // Tracks which university's counselors are displayed
  };

  // Method to update the active university
  setActiveUniversity = (university) => {
    this.setState({ activeUniversity: university });
  }

  render() {
    const { activeUniversity } = this.state;

    return (
      <div>
        <header>
          <h1>Counselors at Universities in Maine</h1>
        </header>
        <div className="container">
          {/* Buttons to select the university */}
          <button 
            id="btnUniversityA"
            className={activeUniversity === 'univ_a' ? 'active' : ''}
            onClick={() => this.setActiveUniversity('univ_a')}
          >
            Counselors at University of Maine Orono
          </button>
          <button 
            id="btnUniversityB"
            className={activeUniversity === 'univ_b' ? 'active' : ''}
            onClick={() => this.setActiveUniversity('univ_b')}
          >
            Counselors at University of Southern Maine
          </button>

          {/* Counselors for University of Maine Orono */}
          <div className={activeUniversity === 'univ_a' ? 'counselor' : 'counselor hidden'} data-university="univ_a">
            <h2>John Doe</h2>
            <p><strong>Bio:</strong> John Doe, an esteemed alumnus of the University of Maine Orono, has been a dedicated career counselor for over 10 years...</p>
            <p><strong>Availability:</strong> Monday to Friday, 9 AM - 5 PM</p>
          </div>
          <div className={activeUniversity === 'univ_a' ? 'counselor' : 'counselor hidden'} data-university="univ_a">
            <h2>Jane Doe</h2>
            <p><strong>Bio:</strong> Jane Doe holds a Master’s degree in Career Counseling and has been part of the University of Maine Orono team for over 7 years...</p>
            <p><strong>Availability:</strong> Monday, Wednesday, Friday, 10 AM - 4 PM</p>
          </div>
          <div className={activeUniversity === 'univ_a' ? 'counselor' : 'counselor hidden'} data-university="univ_a">
            <h2>Peter Glenn</h2>
            <p><strong>Bio:</strong> Peter Glenn, with a background in international business, brings over 15 years of experience...</p>
            <p><strong>Availability:</strong> Tuesday and Thursday, 8 AM - 6 PM</p>
          </div>

          {/* Counselors for University of Southern Maine */}
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Alex Morgan</h2>
            <p><strong>Bio:</strong> Alex Morgan, a career advisor with a specialty in environmental sciences, has been with the University of Southern Maine for over 8 years...</p>
            <p><strong>Availability:</strong> Monday to Wednesday, 9 AM - 3 PM</p>
          </div>
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Rachel Lee</h2>
            <p><strong>Bio:</strong> Rachel Lee brings a dynamic approach to career counseling, focusing on the arts and creative industries...</p>
            <p><strong>Availability:</strong> Thursday and Friday, 11 AM - 5 PM</p>
          </div>
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Michael Thompson</h2>
            <p><strong>Bio:</strong> Michael Thompson, with his experience in international business and a Ph.D. in Business Administration, specializes in counseling students...</p>
            <p><strong>Availability:</strong> Monday, Thursday, Friday, 10 AM - 4 PM</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Counselors;
