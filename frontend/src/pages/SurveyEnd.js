import React, { useState } from 'react';
import '../assets/styles/SurveyEnd.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Capture from '../assets/images/Capture/Capture.png';
import CaptureMobile from '../assets/images/Capture/CaptureMobile.png';

const SurveyEnd = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const interimScore = location.state?.interimScore || 0;

    const handleNext = () => {
        navigate('/capture/results', {
            state: { totalScore: interimScore, email: email },  // Pass the email to the results page
        });
    };

    return (
        <div className="end-main-container">
            <div className="end-capture-container">
                <div className="end-content-wrapper">
                    <div className="end-image-box">
                        <img src={Capture} alt="Team Meeting" className="end-image" />
                    </div>
                    <div className="end-text-box">
                        <h1>
                            Thank you for completing CAPTURE, our Internal Communications Audit Survey!
                        </h1>
                        <img src={CaptureMobile} alt="Team Meeting" className="end-image-mobile" />
                        <p>
                            We appreciate the time and effort you invested in this important assessment.
                            Your responses have provided high-level insights into the current state of
                            internal communications within your organization.
                        </p>
                        <p>
                            To see the results from your diagnostic and receive a free IC Action Plan
                            Template to help improve your results, enter your email below.
                        </p>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="button" className="end-capture" onClick={handleNext}>
                                NEXT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyEnd;
