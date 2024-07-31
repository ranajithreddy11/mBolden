import React from 'react';
import '../assets/styles/Missions.css';
import Refresh from '../assets/images/Refresh.png';
import Teamwork from '../assets/images/Teamwork.png';
import Trust from '../assets/images/Trust.png';
import Plant from '../assets/images/Plant.png';

const Mission = () => {
  return (
    <div className="mission-section">
      <h1>Our Mission</h1>
      <div className="mission-content">
        <div className="mission-item">
          <img src={ Teamwork } alt="Mission Start" className="mission-icon" />
          <div className="mission-corner-icon">
            <img src= { Refresh } alt="Corner Icon" />
          </div>
          <div className="mission-text">
            <h2>We begin with you.</h2>
          </div>
        </div>
        <div className="mission-item">
          <img src= { Trust } alt="Collaboration" className="mission-icon" />
          <div className="mission-corner-icon">
            <img src={ Refresh } alt="Corner Icon" />
          </div>
          <div className="mission-text">
            <h2>We collaborate and empathize.</h2>
          </div>
        </div>
        <div className="mission-item">
          <img src={ Plant } alt="Growth" className="mission-icon" />
          <div className="mission-corner-icon">
            <img src= { Refresh } alt="Corner Icon" />
          </div>
          <div className="mission-text">
            <h2>We are committed to growth and inclusivity.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
