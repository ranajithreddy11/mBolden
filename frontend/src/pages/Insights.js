import React from 'react';
import '../assets/styles/Insights.css';
import {Link} from 'react-router-dom';
import CaptureTeam from '../assets/images/Insights/Insights.png';

const Insights = () => {
    return (
        <div className='insights'>
            <h1>Insights</h1>
            <div className="insights-container">
                <div className="insights-content-wrapper">
                    <div className="insights-image-box">
                        <img src={CaptureTeam} alt="Team working" className="insights-image"/>
                    </div>
                    <div className="insights-text-box">
                        <p>
                            At mBolden, our mission is to provide you and your business with cutting-edge
                            insights and expert knowledge empowering you to make informed decisions and stay
                            ahead of the curve.
                        </p>
                        <Link to="/insights/whitepapers" className="insights-link">
                            learn more →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
