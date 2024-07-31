import React from 'react';
import { Link } from 'react-router-dom';
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
                         <p>
                            <span class="logo">mBolden</span>
                            <span class="copyright"> @ 2023. All rights reserved.</span>
                        </p>
                    </div>
                    <nav className="footer-nav">
                        <Link to="/">Terms</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Resources</Link>
                        <Link to="/">Contact</Link>
                    </nav>
                </div>
                <div className="footer-social">
                    <div className="social">
                        <a href="#facebook"><img src={facebook} alt="Facebook" /></a>
                        <a href="#linkedin"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="#instagram"><img src={instagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
