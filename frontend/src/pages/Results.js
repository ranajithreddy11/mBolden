import React, { useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import '../assets/styles/Results.css';
import Capture from '../assets/images/Capture/Capture.png';
import CaptureMobile from '../assets/images/Capture/CaptureMobile.png';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const totalScore = location.state?.totalScore || 0;
    const email = location.state?.email || '';  // Retrieve the email from the location state

    const [successMessage, setSuccessMessage] = useState('');  // State to control success message
    const [errorMessage, setErrorMessage] = useState('');  // State to control error message

    const handleGetTemplateClick = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/results', {  // Adjust the URL if needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    score: totalScore,
                }),
            });

            if (response.ok) {
                setSuccessMessage('Thank you! Our free Action Plan Template was sent to your email.');  // Show success message
                setErrorMessage('');  // Clear any existing error message
            } else {
                setErrorMessage('Failed to send results. Please try again later.');
                setSuccessMessage('');  // Clear any existing success message
            }
        } catch (error) {
            setErrorMessage('Error occurred. Please try again later.');
            setSuccessMessage('');  // Clear any existing success message
        }
    };

    const handleContactUsClick = () => {
        navigate('/contact');
    };

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
                            <div className="score-box poor">0-10<br />Poor</div>
                            <div className="score-box good">11-15<br />Good</div>
                            <div className="score-box excellent">16-20<br />Excellent</div>
                        </div>
                        <p>To see your detailed insights gained from the diagnostic and find out more ways to level up your internal communications strategy through our free Action Plan Template, click below! To assist you in leveraging the insights gained from this tool, we have included an Action Plan Template with your report. This template guides you through developing a structured plan to address the identified careas for improvement. We have made sure you have a clear path forward</p>
                        <p>We are here to support you through every step of this process. To schedule a consultation to discuss your results in more detail, please do not hesitate to contact us.</p>
                        <div className="results-buttons">
                            <button className="contact-us-btn" onClick={handleContactUsClick}>CONTACT US</button>
                            <button className="get-template-btn" onClick={handleGetTemplateClick}>GET TEMPLATE</button>
                        </div>
                        {/* Success and Error Messages */}
                        {successMessage && (
                            <div className="success-message">
                                <p>{successMessage}</p>
                            </div>
                        )}
                        {errorMessage && (
                            <div className="error-message">
                                <p>{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
