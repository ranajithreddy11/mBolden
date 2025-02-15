import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/LandingPage.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


// Import images
import captureImage2 from '../assets/images/LandingPage/capture-image2.png';
import logo1 from '../assets/images/LandingPage/Logo1.png';
import logo2 from '../assets/images/LandingPage/Logo2.png';
import logo3 from '../assets/images/LandingPage/Logo3.png';
import PastClientLogo1 from '../assets/images/LandingPage/PastClientLogo1.png';
import PastClientLogo2 from '../assets/images/LandingPage/PastClientLogo2.png';
import PastClientLogo3 from '../assets/images/LandingPage/PastClientLogo3.png';
import PastClientLogo4 from '../assets/images/LandingPage/PastClientLogo4.png';
import PastClientLogo5 from '../assets/images/LandingPage/PastClientLogo5.webp';
import PastClientLogo6 from '../assets/images/LandingPage/PastClientLogo6.png';
import PastClientLogo7 from '../assets/images/LandingPage/PastClientLogo7.png';
import PastClientLogo9 from '../assets/images/LandingPage/PastClientLogo9.png';
import PastClientLogo10 from '../assets/images/LandingPage/PastClientLogo10.png';
import PastClientLogo11 from '../assets/images/LandingPage/PastClientLogo11.png';
import PastClientLogo12 from '../assets/images/LandingPage/PastClientLogo12.png';
import PastClientLogo13 from '../assets/images/LandingPage/PastClientLogo13.png';
import PastClientLogo14 from '../assets/images/LandingPage/PastClientLogo14.png';
import PastClientLogo15 from '../assets/images/LandingPage/PastClientLogo15.svg';
import heroVideo from '../assets/images/LandingPage/hero.mp4'

const LandingPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,   // Number of testimonials to show at once
        slidesToScroll: 1, // Scroll one testimonial at a time
        autoplay: true,    // Automatically move to next slide
        autoplaySpeed: 3000,
        arrows: false,     // Hide next/prev arrows

        responsive: [
            {
                breakpoint: 1024, // iPads and smaller devices
                settings: {
                    slidesToShow: 2, // Show 2 testimonials on iPads
                    slidesToScroll: 1,
                    infinite: true,  // Keep looping
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 testimonial on mobile
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const logoCarouselSettings = {
        dots: false,
        infinite: true,
        speed: 5000,            // Speed of the transition - slower can be smoother
        slidesToShow: 4,        // Adjust based on your needs
        slidesToScroll: 1,      // Moves one slide at a time
        autoplay: true,
        autoplaySpeed: 0,       // Zero delay for continuous effect
        cssEase: "linear",      // Ensures smooth scrolling
        pauseOnHover: false,
        arrows: false,
    };


    return (
        <div className="landing-page">

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Be Bold, Be Agile</h1>
                    <h2>Drive Change</h2>
                    <p>Empowering teams through people, strategy, and culture</p>
                    <Link to="/about">
                        <button href="/about" className="learn-more-button">Learn More</button>
                    </Link>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61557755199538" target="_blank" rel="noopener noreferrer" className="social-icon-landing">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.linkedin.com/company/mbolden-consulting/" target="_blank" rel="noopener noreferrer" className="social-icon-landing">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.instagram.com/mbolden_consulting" target="_blank" rel="noopener noreferrer" className="social-icon-landing">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <div className="hero-video">
                    <video className="video-hero" autoPlay muted loop playsInline>
                        <source src={heroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Capture Section */}
            <div className="capture-section">
                <img src={captureImage2} alt="Capture" className="capture-image" />
                <div className="capture-content">
                    <h2>Assess Your Internal Communication Effectiveness</h2>
                    <p>
                    Discover the impact of your communication strategies with <b>Capture</b>, our free Internal Communications Diagnostic Survey. In just 5 minutes, identify strengths, uncover opportunities for improvement, and gain actionable insights to boost team collaboration and engagement.
                    </p>
                    <p>As a bonus, you'll <b>receive a complimentary Internal Communications Action Plan template with your results</b>, empowering you to take immediate, effective steps.</p>
                    <Link to="/capture">
                        <button className="get-started-button">Start Now</button>
                    </Link>
                </div>
                <img src={captureImage2} alt="Capture" className="capture-image2" />
            </div>

            {/* Testimonials Section with Carousel */}
            <div className="testimonials-section">
                <h2>Satisfied Customers</h2>
                <Slider {...settings} className="testimonials-carousel">
                    <div className="testimonial">
                        <img src={logo1} alt="Logo1" className="testimonial-logo" />
                        <h3>"They aligned or leaders”</h3>
                        <p>“mBolden helped us prepare for the new year, building our strategy, plan, and success measures. They aligned our leaders on what we need to achieve and how we'll do it. The facilitation was seamless and the team was helpful and knowledgeable. Their real-world experience was amazing."</p>
                    </div>
                    <div className="testimonial">
                        <img src={logo2} alt="Logo2" className="testimonial-logo" />
                        <h3>“Thanks for the great advice…”</h3>
                        <p>"Thanks mBolden for the great advice and support around business growth and team planning. Combining long-term vision with short-term goals lets me know we're headed in the right direction. You really care, not just about the business, but about the people behind it too. Looking forward to continuing our work together!"</p>
                    </div>
                    <div className="testimonial">
                        <img src={logo3} alt="Logo3" className="testimonial-logo" />
                        <h3>“Our experience was great”</h3>
                        <p>“The advice and project support from mBolden was instrumental in helping us build a new service offering. They listened to what we wanted and then delivered it. Our experience was great. We would recommend mBolden without hesitation for any consulting projects."</p>
                    </div>
                </Slider>
            </div>

            {/* End Section */}
            <div className="end-section">
                <div className="end-section-content">
                    <p>Join Companies who have <br />made <span className="bold-text">BOLD</span> moves with us.</p>
                </div>
            </div>
            <div class="past-client-container">
                <Slider {...logoCarouselSettings}>
                    <div><img src={ PastClientLogo1} alt="Client Logo 1"/></div>
                    <div><img src={ PastClientLogo2}  alt="Client Logo 2"/></div>
                    <div><img src={ PastClientLogo3}  alt="Client Logo 3"/></div>
                    <div><img src={ PastClientLogo4}  alt="Client Logo 4"/></div>
                    <div><img src={ PastClientLogo5} alt="Client Logo 5"/></div>
                    <div><img src={ PastClientLogo6}  alt="Client Logo 6"/></div>
                    <div><img src={ PastClientLogo7}  alt="Client Logo 7"/></div>
                    <div><img src={ PastClientLogo9} alt="Client Logo 9"/></div>
                    <div><img src={ PastClientLogo10}  alt="Client Logo 10"/></div>
                    <div><img src={ PastClientLogo11}  alt="Client Logo 11"/></div>
                    <div><img src={ PastClientLogo12}  alt="Client Logo 12"/></div>
                    <div><img src={ PastClientLogo13} alt="Client Logo 13"/></div>
                    <div><img src={ PastClientLogo14}  alt="Client Logo 14"/></div>
                    <div><img src={ PastClientLogo15}  alt="Client Logo 15"/></div>
                </Slider>
            </div>
        </div>
    );
};

export default LandingPage;
