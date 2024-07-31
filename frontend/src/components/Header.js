import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo-header.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src={logo} alt="Logo" className="header-logo" />
                <nav className="header-nav">
                    <Link to="/">ABOUT</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="#insights">INSIGHTS</Link>
                    <Link to="#capture">CAPTURE</Link>
                    <Link to="#contact">CONTACT</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
