import React from 'react';
import './../assets/styles/Services.css';
import Meeting from '../assets/images/Meeting.png';
import Onboarding from '../assets/images/Onboarding.png';
import People from '../assets/images/People.png';
import Timeline from '../assets/images/Timeline.png';

const Services = () => {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <div className="services-content">
        <div className="left-column">
          <div className="service-item">
            <img src={ Timeline } alt="Strategic Planning" className="service-icon" />
            <div className="service-text">
              <h2>Strategic Planning & Measurement</h2>
              <p>We start by aligning your strategic plan with your corporate vision, objectives, and values to ensure clarity and measurability.</p>
            </div>
          </div>
          <div className="service-item">
            <img src={ Onboarding } alt="Leadership" className="service-icon" />
            <div className="service-text">
              <h2>Leadership & Team Alignment</h2>
              <p>Enhancing capabilities to unblock issues, celebrate success, and build confidence to create aligned, engaged, and empowered organizations.</p>
            </div>
          </div>
        </div>
        <div className="center-column">
          <div className="service-center">
            <h2>We align and elevate, unleashing the potential inside your company.</h2>
          </div>
        </div>
        <div className="right-column">
          <div className="service-item">
            <img src={ Meeting } alt="Change Training" className="service-icon" />
            <div className="service-text">
              <h2>Change, Training, & Communications</h2>
              <p>To navigate change effectively, create urgency, be transparent, recognize team members, communicate timely, and ensure adequate training.</p>
            </div>
          </div>
          <div className="service-item">
            <img src={ People } alt="Diversity" className="service-icon" />
            <div className="service-text">
              <h2>Diversity, Equity, Inclusion, & Belonging</h2>
              <p>Creating an inclusive work environment helps attract top talent and foster a diverse and engaged workforce, which is necessary for teams to reach their full potential.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
