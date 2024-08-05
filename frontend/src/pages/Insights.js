// src/pages/Insights.js
import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Insights.css';

const Insights = () => {
    return (
        <div className="insights-page">
            <main>
                <h1>Insights</h1>
                <ul>
                    <li>
                        <Link to="/insights/crafting-message">Crafting Compelling Messages in Professional Communication</Link>
                    </li>
                    <li>
                        <Link to="/insights/customer-transforming">Centering the Customer: Transforming Strategy for Future Success</Link>
                    </li>
                    <li>
                        <Link to="/insights/gig-economy">The Gig Economy and Disruptive Technologies
                            Changing the Composition of Workforces</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </main>
        </div>
    );
};

export default Insights;
