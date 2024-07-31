import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
