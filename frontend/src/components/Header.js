import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">mBolden</Link>
                </div>
                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
                    <Link to="/insights" onClick={() => setIsMenuOpen(false)}>INSIGHTS</Link>
                    <Link to="/capture" onClick={() => setIsMenuOpen(false)}>CAPTURE</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;
