import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Footer.css';
import facebook from '../assets/images/Facebook.svg';
import linkedin from '../assets/images/LinkedIn.svg';
import instagram from '../assets/images/Instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/">mBolden</Link>
                </div>
                <div className="footer-nav-container">
                    <div className="footer-copyright">
                        <div>
                            <span class="logo">mBolden. </span>
                            <span class="copyright">
                                All rights reserved.</span>
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
                        <a href="https://www.facebook.com/profile.php?id=61557755199538"><img src={facebook} alt="Facebook"/></a>
                        <a href="https://www.linkedin.com/company/mbolden-consulting/"><img src={linkedin} alt="LinkedIn"/></a>
                        <a href="https://www.instagram.com/mbolden_consulting"><img src={instagram} alt="Instagram"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;