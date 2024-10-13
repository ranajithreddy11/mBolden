import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import Logo from '../assets/images/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <header className="header">
                <div className="header-container">
                    <a href="/" className='logo'>
                        <img src={Logo} alt="Logo"/>
                    </a>
                    <div className="hamburger" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <nav className="nav">
                        <Link to="/about">ABOUT</Link>
                        <Link to="/services">SERVICES</Link>
                        <Link to="/insights">INSIGHTS</Link>
                        <Link to="/capture">CAPTURE</Link>
                        <Link to="/contact">CONTACT</Link>
                    </nav>
                </div>
                <nav className={`side-nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
                    <Link to="/insights" onClick={() => setIsMenuOpen(false)}>INSIGHTS</Link>
                    <Link to="/capture" onClick={() => setIsMenuOpen(false)}>CAPTURE</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
