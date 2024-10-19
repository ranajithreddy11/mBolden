import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Footer.css';
import Logo from '../assets/images/Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="/" className='logo-foot'>
                        <img src={Logo} alt="Logo"/>
                    </a>
                </div>
                <div className="footer-nav-container">
                    <div className="footer-copyright">
                        <div>
                            <a href="/" className='logo-foot'>
                                <img src={Logo} alt="Logo"/>
                            </a>
                            <span class="copyright">&copy; 2023. All rights reserved.</span>
                        </div>
                    </div>
                    <nav className="footer-nav">
                        <Link to="/">Terms</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Support</Link>
                        <Link to="/about">About</Link>
                        <Link to="/">Resources</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="footer-social">
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=61557755199538" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.linkedin.com/company/mbolden-consulting/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.instagram.com/mbolden_consulting" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;