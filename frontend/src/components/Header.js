import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">mBolden</Link>
                </div>
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
