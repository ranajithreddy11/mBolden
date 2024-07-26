// src/pages/Insights.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Insights.css';

const Insights = () => {
    return (
        <div className="insights-page">
            <Header />
            <main>
                <h1>Insights</h1>
                <ul>
                    <li>
                        <Link to="/insights/crafting-message">Crafting Compelling Messages in Professional Communication</Link>
                    </li>
                    <li>
                    <Link to="/insights/customer-transforming">Centering the Customer: Transforming Strategy for Future Success</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default Insights;
