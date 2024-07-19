import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo-header.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="header-logo" />
                </Link>
                <nav className="header-nav">
                    <Link to="/">ABOUT</Link>
                    <Link to="/">SERVICES</Link>
                    <Link to="/insights">INSIGHTS</Link>
                    <Link to="/">CAPTURE</Link>
                    <Link to="/">CONTACT</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;