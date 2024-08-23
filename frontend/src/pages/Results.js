import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/styles/Results.css';
import Capture from '../assets/images/Capture/Capture.png';
import CaptureMobile from '../assets/images/Capture/CaptureMobile.png';

const Results = () => {
  const location = useLocation();
  const totalScore = location.state?.totalScore || 0;  // Retrieve the passed totalScore

  return (
    <div className="results-main-container">
      <div className="results-capture-container">
        <div className="results-content-wrapper">
          <div className="results-image-box">
            <img src={Capture} alt="Team Meeting" className="results-image" />
            <img src={CaptureMobile} alt="Team Meeting" className="results-image-mobile" />
          </div>
          <div className="results-text-box">
            <h1>Your Result: {totalScore}</h1>
            <div className="results-score-box">
              <div className="score-box excellent">16-20<br/>Excellent</div>
              <div className="score-box good">8-15<br/>Good</div>
              <div className="score-box poor">0-7<br/>Poor</div>
            </div>
            <p>To see your detailed insights gained from the diagnostic and find out more ways to level up your internal communications strategy through our free Action Plan Template, click below! To assist you in leveraging the insights gained from this tool, we have included an Action Plan Template with your report. This template guides you through developing a structured plan to address the identified careas for improvement. We have made sure you have a clear path forward</p>
            <p>We are here to support you through every step of this process. To schedule a consultation to discuss your results in more detail, please do not hesitate to contact us.</p>
            <div className="results-buttons">
            <Link to="/contact">
              <button className="contact-us-btn">CONTACT US</button>
            </Link>
              <button className="get-template-btn">GET TEMPLATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
