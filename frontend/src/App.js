import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Insights from './pages/Insights';
import CraftingMessage from './pages/CraftingMessage';
import CustomerTransforming from './pages/CustomerTransforming';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/crafting-message" element={<CraftingMessage />} />
                <Route path="/insights/customer-transforming" element={<CustomerTransforming />} />
                {/* Add more routes as needed */}
            </Routes>
    </Router>
    );
};

export default App;
