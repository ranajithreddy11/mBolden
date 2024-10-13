import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Footer.css';
import Logo from '../assets/images/Logo.png'
import facebook from '../assets/images/Facebook.svg';
import linkedin from '../assets/images/LinkedIn.svg';
import instagram from '../assets/images/Instagram.svg';

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