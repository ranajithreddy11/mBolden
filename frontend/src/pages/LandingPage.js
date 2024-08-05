import React from 'react';
import '../assets/styles/LandingPage.css';

// Import images
import heroImage from '../assets/LandingPageImages/hero-image.png';
import captureImage2 from '../assets/LandingPageImages/capture-image2.png';
import FacebookIcon from '../assets/LandingPageImages/facebook-icon.png';
import InstaIcon from '../assets/LandingPageImages/instagram-icon.png';
import LinkedInIcon from '../assets/LandingPageImages/linkedin-icon.png';
import logo1 from '../assets/LandingPageImages/Logo1.png';
import logo2 from '../assets/LandingPageImages/Logo2.png';
import logo3 from '../assets/LandingPageImages/Logo3.png';
import PatsClientLogo1 from '../assets/LandingPageImages/PastClientLogo1.png';
import PatsClientLogo2 from '../assets/LandingPageImages/PastClientLogo2.png';
import PatsClientLogo3 from '../assets/LandingPageImages/PastClientLogo3.png';
import PastClientLogo4 from '../assets/LandingPageImages/PastClientLogo4.jpg';

const LandingPage = () => {
    return (
        <div className="landing-page">

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Be Bold ,Be Agile
                        <br/>
                        Drive Change</h1>
                    <p>Empowering teams by focusing on people, strategy, and culture</p>
                    <button className="learn-more-button">Learn More</button>
                    <div className="social-icons">
                        <a href="#"><img src={LinkedInIcon} alt="LinkedIn"/></a>
                        <a href="#"><img src={InstaIcon} alt="Instagram"/></a>
                        <a href="#"><img src={FacebookIcon} alt="Facebook"/></a>
                    </div>
                </div>
                <img src={heroImage} alt="Team" className="hero-image"/>
            </div>

            {/* Capture Section */}
            <div className="capture-section">
                <img src={captureImage2} alt="Capture" className="capture-image"/>
                <div className="capture-content">
                    <h2>Capture</h2>
                    <p>
                        Try our Internal Communications Diagnostic Survey Tool - “Capture.” This
                        intuitive survey is designed to empower organizations like yours evaluate the
                        effectiveness of internal communication strategies.
                    </p>
                    <p>By completing this brief survey, you’ll gain valuable insights into your
                        strengths and potential areas for improvement.</p>
                    <button className="get-started-button">Learn More</button>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>Satisfied Customers</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <img src={logo1} alt="Logo1" className="testimonial-logo"/>
                        <p>"The advice and project support from mBolden was instrumental in helping us
                            build a more effective team. Their insight into our strategy and execution
                            elevated our engagement and impact greatly. We would recommend mBolden for any
                            consulting projects."</p>
                    </div>
                    <div className="testimonial">
                        <img src={logo2} alt="Logo2" className="testimonial-logo"/>
                        <p>"The advice and project support from mBolden was instrumental in helping us
                            build a more effective team. Their insight into our strategy and execution
                            elevated our engagement and impact greatly. We would recommend mBolden for any
                            consulting projects."</p>
                    </div>
                    <div className="testimonial">
                        <img src={logo3} alt="Logo3" className="testimonial-logo"/>
                        <p>"The advice and project support from mBolden was instrumental in helping us
                            build a more effective team. Their insight into our strategy and execution
                            elevated our engagement and impact greatly. We would recommend mBolden for any
                            consulting projects."</p>
                    </div>
                </div>
            </div>

            {/* End Section */}
            <div className="end-section">
                <div className="end-section-content">
                    <p>Join Companies who have
                        <br/>made
                        <span className="bold-text">BOLD</span>
                        moves with us.</p>
                </div>
            </div>
            <img src={PatsClientLogo1} alt="Team" className="past-client-logo-image"/>
            <img src={PatsClientLogo2} alt="Team" className="past-client-logo-image"/>
            <img src={PatsClientLogo3} alt="Team" className="past-client-logo-image"/>
            <img src={PastClientLogo4} alt="Team" className="past-client-logo4-image"/>

        </div>
    );
};

export default LandingPage;