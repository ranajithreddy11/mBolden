import React from 'react';
import '../assets/styles/LandingPage.css';

// Import images
import heroImage from '../assets/LandingPageImages/hero-image.png';
import captureImage from '../assets/LandingPageImages/capture-image.png';
import pastClientLogos from '../assets/LandingPageImages/PastClientLogos.png';

//Import components
import Header from './../components/Header';
import Footer from './../components/Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Be Bold <br /> Be Agile <br /> Drive Change</h1>
                    <p>Empowering teams by focusing on people, strategy, and culture</p>
                    <button className="learn-more-button">Learn More</button>
                </div>
                <img src={heroImage} alt="Team" className="hero-image" />
            </div>

            {/* Capture Section */}
            <div className="capture-section">
                <img src={captureImage} alt="Capture" className="capture-image" />
                <div className="capture-content">
                    <h2>Capture</h2>
                    <p>
                    Try our Internal Communications Diagnostic Survey Tool - “Capture.” This intuitive survey is designed to empower organizations like yours evaluate the effectiveness of internal communication strategies.
                    </p>
                    <p>By completing this brief survey, you’ll gain valuable insights into your strengths and potential areas for improvement.</p>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>Satisfied Customers</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <div className="testimonial-logo">LOGO</div>
                        <p>"The advice and project support from mBolden was instrumental in helping us build a more effective team. Their insight into our strategy and execution elevated our engagement and impact greatly. We would recommend mBolden for any consulting projects."</p>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-logo">LOGO</div>
                        <p>"The advice and project support from mBolden was instrumental in helping us build a more effective team. Their insight into our strategy and execution elevated our engagement and impact greatly. We would recommend mBolden for any consulting projects."</p>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-logo">LOGO</div>
                        <p>"The advice and project support from mBolden was instrumental in helping us build a more effective team. Their insight into our strategy and execution elevated our engagement and impact greatly. We would recommend mBolden for any consulting projects."</p>
                    </div>
                </div>
            </div>

            {/* End Section */}
            <div className="end-section">
                <div className="end-section-content">
                    <p>Join Companies who have  <br />made <span className="bold-text">BOLD</span> moves with us.</p>
                </div>
            </div>
            <img src={pastClientLogos} alt="Team" className="past-client-logo-image" />

             {/* Footer */}
             <Footer />
        </div>
    );
};

export default LandingPage;