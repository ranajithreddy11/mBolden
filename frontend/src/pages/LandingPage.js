import React from 'react';
import '../assets/styles/LandingPage.css';
import { Link } from 'react-router-dom';

// Import images
import heroImage from '../assets/images/LandingPage/hero-image.png';
import captureImage2 from '../assets/images/LandingPage/capture-image2.png';
import FacebookIcon from '../assets/images/Facebook.svg';
import InstaIcon from '../assets/images/Instagram.svg';
import LinkedInIcon from '../assets/images/LinkedIn.svg';
import logo1 from '../assets/images/LandingPage/Logo1.png';
import logo2 from '../assets/images/LandingPage/Logo2.png';
import logo3 from '../assets/images/LandingPage/Logo3.png';
import PatsClientLogo1 from '../assets/images/LandingPage/PastClientLogo1.png';
import PatsClientLogo2 from '../assets/images/LandingPage/PastClientLogo2.png';
import PatsClientLogo3 from '../assets/images/LandingPage/PastClientLogo3.png';
import PastClientLogo4 from '../assets/images/LandingPage/PastClientLogo4.png';

const LandingPage = () => {
    return (
        <div className="landing-page">

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Be Bold, Be Agile</h1>
                    <h2>Drive Change</h2>
                    <p>Empowering teams by focusing on people, strategy, and culture</p>
                    <Link to="/about">
                        <button href="/about" className="learn-more-button">Learn More</button>
                    </Link>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
                            <img src={InstaIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                <img src={heroImage} alt="Team" className="image-hero" />
                </div>
            </div>

            {/* Capture Section */}
            <div className="capture-section">
                <img src={captureImage2} alt="Capture" className="capture-image" />
                <div className="capture-content">
                    <h2>Capture</h2>
                    <p>
                        Try our Internal Communications Diagnostic Survey Tool - “Capture.” This intuitive survey is designed to empower organizations like yours to evaluate the effectiveness of internal communication strategies.
                    </p>
                    <p>By completing this brief survey, you’ll gain valuable insights into your strengths and potential areas for improvement.</p>
                    <Link to="/capture">
                        <button className="get-started-button">Learn More</button>
                    </Link>
                </div>
                <img src={captureImage2} alt="Capture" className="capture-image2" />
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>Satisfied Customers</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <img src={logo1} alt="Logo1" className="testimonial-logo" />
                        <p>"The advice and project support from mBolden was instrumental in helping us build a more effective team. Their insight into our strategy and execution elevated our engagement and impact greatly. We would recommend mBolden for any consulting projects."</p>
                    </div>
                    <div className="testimonial">
                        <img src={logo2} alt="Logo2" className="testimonial-logo" />
                        <p>"The advice and project support from mBolden was instrumental in helping us build a more effective team. Their insight into our strategy and execution elevated our engagement and impact greatly. We would recommend mBolden for any consulting projects."</p>
                    </div>
                    <div className="testimonial">
                        <img src={logo3} alt="Logo3" className="testimonial-logo" />
                        <p>"The advice and project support from mBolden was instrumental in helping us build a more effective team. Their insight into our strategy and execution elevated our engagement and impact greatly. We would recommend mBolden for any consulting projects."</p>
                    </div>
                </div>
            </div>

            {/* End Section */}
            <div className="end-section">
                <div className="end-section-content">
                    <p>Join Companies who have <br />made <span className="bold-text">BOLD</span> moves with us.</p>
                </div>
            </div>
                <div className='past-client-container'>
                <img src={PatsClientLogo1} alt="Team" className="past-client-logo-image" />
                <img src={PatsClientLogo2} alt="Team" className="past-client-logo-image" />
                <img src={PatsClientLogo3} alt="Team" className="past-client-logo-image" />
                <img src={PastClientLogo4} alt="Team" className="past-client-logo-image" />
            </div>
        </div>
    );
};

export default LandingPage;
