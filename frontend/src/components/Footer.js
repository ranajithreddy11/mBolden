import React from 'react';
// import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img src={logo} alt="Logo" className="footer-logo" />
                <nav className="footer-nav">
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    <a href="#insights">INSIGHTS</a>
                    <a href="#capture">CAPTURE</a>
                    <a href="#contact">CONTACT</a>
                </nav>
                <div className="footer-social">
                    <a href="#facebook"><img src={facebook} alt="Facebook" /></a>
                    <a href="#linkedin"><img src={linkedin} alt="LinkedIn" /></a>
                    <a href="#instagram"><img src={instagram} alt="Instagram" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;