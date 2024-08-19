import React from 'react';
import '../assets/styles/Results.css';
import { useNavigate } from 'react-router-dom';
import Capture from '../assets/images/Capture.png';
import CaptureMobile from '../assets/images/CaptureMobile.png';

const Results = () => {

  const navigate = useNavigate();
  const handleNext = () => {
      navigate('/nextpage');  // Adjust navigation path as necessary
  };

  return (
    <div className="results-main-container">
      <div className="results-capture-container">
        <div className="results-content-wrapper">
          <div className="results-image-box">
            <img 
              src={Capture}
              alt="Team Meeting" 
              className="results-image" 
            />

            <img 
              src={CaptureMobile}
              alt="Team Meeting" 
              className="results-image-mobile" 
            />
          </div>
          <div className="results-text-box">
            <h1>Your Result: 0</h1>
            <div className="results-score-box">
              <div className="score-box excellent">14-18<br/>Excellent</div>
              <div className="score-box good">8-13<br/>Good</div>
              <div className="score-box poor">0-7<br/>Poor</div>
            </div>
            <p>
              To assist you in leveraging the insights gained from this tool, we have included an Action Plan Template with your report. This template guides you through developing a structured plan to address the identified areas for improvement. We have made sure you have a clear path forward.
            </p>
            <p>
              We are here to support you through every step of this process. To schedule a consultation to discuss your results in more detail, please do not hesitate to contact us.
            </p>
            <div className="results-buttons">
              <button onClick={handleNext} className="contact-us-btn">CONTACT US</button>
              <button onClick={handleNext} className="get-template-btn">GET TEMPLATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
