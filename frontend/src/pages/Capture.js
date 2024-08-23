import React from 'react';
import '../assets/styles/Capture.css';
import { Link } from 'react-router-dom'; 
import CaptureTeam from '../assets/images/Capture/Capture.jpeg';

const Capture = () => {
  return (
    <div className="capture-container">
      <div className="content-wrapper">
        <div className="image-box">
          <img
            src={CaptureTeam}
            alt="Team working"
            className="image"
          />
        </div>
        <div className="text-box">
          <h1>CAPTURE</h1>
          <p>
            This intuitive survey is designed to empower organizations like yours
            to evaluate the effectiveness of your internal communications
            strategies. You’ll gain valuable insights of your internal
            communication practices and identify whether your current communication
            tools and strategies are up to the task, and where there might be room
            for improvement.
          </p>
          <Link to="/capture/startcapture" className="capture">
            Start capture →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Capture;
