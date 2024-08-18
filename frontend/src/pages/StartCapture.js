import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/styles/StartCapture.css';  

const StartCapture = () => {
  return (
    <div className="startcapture-container">
      <div className="text-content">
        <h1 className="internal-communication">CAPTURE: Internal Communications Audit</h1>
        <p className="internal-description">
         Simply read and answer the questions honestly. <br/>
         Each question will be assigned a score of 0 to 2 points based on your reply.<br/>
         At the end, tabulate the score and match to results.
        </p>
      </div>
      <Link to="/survey" className="next-button">
        NEXT
      </Link>
    </div>
  );
};

export default StartCapture;
