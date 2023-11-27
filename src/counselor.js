import React, { Component } from 'react';
import './Counselors.css'; // Assuming you have created this CSS file

class Counselors extends Component {
  state = {
    activeUniversity: null
  };

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
          <button 
            id="btnUniversityA"
            className={activeUniversity === 'univ_a' ? 'active' : ''}
            onClick={() => this.setActiveUniversity('univ_a')}
          >
            Counselors at University A
          </button>
          <button 
            id="btnUniversityB"
            className={activeUniversity === 'univ_b' ? 'active' : ''}
            onClick={() => this.setActiveUniversity('univ_b')}
          >
            Counselors at University B
          </button>

          {/* Counselors for University A */}
          <div className={activeUniversity === 'univ_a' ? 'counselor' : 'counselor hidden'} data-university="univ_a">
            <h2>John Doe</h2>
            <p><strong>Bio:</strong> John Doe, an esteemed alumnus of the University of Maine, has been a dedicated career counselor for over 10 years...</p>
            <p><strong>Availability:</strong> [Add Availability Here]</p>
          </div>
          <div className={activeUniversity === 'univ_a' ? 'counselor' : 'counselor hidden'} data-university="univ_a">
            <h2>Jane Doe</h2>
            <p><strong>Bio:</strong> Jane Doe holds a Master’s degree in Career Counseling and has been part of the University of Maine team for over 7 years...</p>
            <p><strong>Availability:</strong> [Add Availability Here]</p>
          </div>
          <div className={activeUniversity === 'univ_a' ? 'counselor' : 'counselor hidden'} data-university="univ_a">
            <h2>Peter Glenn</h2>
            <p><strong>Bio:</strong> Peter Glenn, with a background in international business, brings over 15 years of experience...</p>
            <p><strong>Availability:</strong> [Add Availability Here]</p>
          </div>

          {/* Counselors for University B */}
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Alex Morgan</h2>
            <p><strong>Bio:</strong> Alex Morgan, a career advisor with a specialty in environmental sciences, has been with the University of Southern Maine for over 8 years...</p>
            <p><strong>Availability:</strong> [Add Availability Here]</p>
          </div>
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Rachel Lee</h2>
            <p><strong>Bio:</strong> Rachel Lee brings a dynamic approach to career counseling, focusing on the arts and creative industries...</p>
            <p><strong>Availability:</strong> [Add Availability Here]</p>
          </div>
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Michael Thompson</h2>
            <p><strong>Bio:</strong> Michael Thompson, with his experience in international business and a Ph.D. in Business Administration, specializes in counseling students...</p>
            <p><strong>Availability:</strong> [Add Availability Here]</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Counselors;
