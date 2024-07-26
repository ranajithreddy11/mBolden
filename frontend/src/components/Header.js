import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo-header.png'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="header-logo" />
                </Link>
                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
                    <Link to="/insights" onClick={() => setIsMenuOpen(false)}>INSIGHTS</Link>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>CAPTURE</Link>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;
