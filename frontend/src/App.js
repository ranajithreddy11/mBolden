import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Insights from './pages/Insights';
import CraftingMessage from './pages/CraftingMessage';
import CustomerTransforming from './pages/CustomerTransforming';
import GigEconomy from './pages/GigEconomy';

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={< LandingPage />}/>
                <Route path="/about" element={< About />}/>
                <Route path="/services" element={< Services />}/>
                <Route path="/insights" element={< Insights />}/>
                <Route path="/insights/crafting-message" element={< CraftingMessage />}/>
                <Route
                    path="/insights/customer-transforming"
                    element={< CustomerTransforming />}/>
                <Route path="/insights/gig-economy" element={< GigEconomy />}/>
                <Route path="/contact" element={< Contact />}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
