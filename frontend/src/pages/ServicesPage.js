import React from 'react';
import './../assets/styles/ServicesPage.css';
import Services from '../components/Services';
import Missions from '../components/Missions';

const ServicesPage = () => {
  return (
    <div className="services">
      <Services />
      <Missions />
    </div>
  );
};

export default ServicesPage;
