import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import Capture from './pages/Capture';
import StartCapture from './pages/StartCapture';
import SurveyPage from './pages/SurveyPage';
import SurveyEnd from './pages/SurveyEnd';
import Results from './pages/Results';
import Whitepapers from './pages/Whitepapers';
import RemoteWork from './pages/RemoteWork.js'

const App = () => {
    return (
        <Router>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={< LandingPage />}/>
                <Route path="/about" element={< About />}/>
                <Route path="/services" element={< Services />}/>
                <Route path="/insights" element={< Insights />}/>
                <Route path="/insights/whitepapers" element={<Whitepapers/>} />
                <Route path="/insights/crafting-message" element={< CraftingMessage />}/>
                <Route path="/insights/customer-transforming" element={< CustomerTransforming />}/>
                <Route path="/insights/remote-work" element={< RemoteWork />}/>
                <Route path="/insights/gig-economy" element={< GigEconomy />}/>
                <Route path='/capture' element={<Capture/>}/>
                <Route path="/capture/startcapture" element={<StartCapture/>}/>
                <Route path="/capture/survey" element={<SurveyPage />} />
                <Route path="/capture/surveyend" element={<SurveyEnd/>} />
                <Route path="/capture/results" element={<Results/>} />
                <Route path="/contact" element={< Contact />}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
