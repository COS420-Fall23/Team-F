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
            <p><strong>Bio:</strong> Detailed biography of John Doe...</p>
            <p><strong>Availability:</strong> Details...</p>
          </div>
          {/* Add similar divs for other counselors of University A */}

          {/* Counselors for University B */}
          <div className={activeUniversity === 'univ_b' ? 'counselor' : 'counselor hidden'} data-university="univ_b">
            <h2>Alex Morgan</h2>
            <p><strong>Bio:</strong> Detailed biography of Alex Morgan...</p>
            <p><strong>Availability:</strong> Details...</p>
          </div>
          {/* Add similar divs for other counselors of University B */}
        </div>
      </div>
    );
  }
}

export default Counselors;
