import React from 'react';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo-header.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src={logo} alt="Logo" className="header-logo" />
                <nav className="header-nav">
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    <a href="#insights">INSIGHTS</a>
                    <a href="#capture">CAPTURE</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
