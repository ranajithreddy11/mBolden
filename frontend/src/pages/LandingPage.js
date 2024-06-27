import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Landing Page</h1>
                <h2>mBolden</h2>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
