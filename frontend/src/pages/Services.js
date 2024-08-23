import React from 'react';
import './../assets/styles/Services.css';
import Planning from '../assets/images/Services/Planning.svg';
import Training from '../assets/images/Services/Training.svg';
import Leadership from '../assets/images/Services/Leadership.svg';
import Diversity from '../assets/images/Services/Diversity.svg';
import Team from '../assets/images/Services/Team.svg';
import Heart from '../assets/images/Services/Heart.svg';
import Plant from '../assets/images/Services/Plant.svg';

const Services = () => {
    return (
        <div className="container">
            {/* Our Services Section */}
            <section className="services-section">
                <div className="section-heading">
                    <h2>Our Services</h2>
                    <p>We align and elevate, unleashing the potential inside your company.</p>
                </div>
                <div className="services">
                    <div className="service">
                        <img src={Planning} alt="Strategic Planning"/>
                        <h3>Strategic Planning & Measurement</h3>
                        <p>We start by aligning your strategic plan with your corporate vision,
                            objectives, and values to ensure clarity and measurability.</p>
                    </div>
                    <div className="service">
                        <img src={Training} alt="Change Training"/>
                        <h3>Change, Training, & Communications</h3>
                        <p>To navigate change effectively, create urgency, be transparent, recognize
                            team members, communicate timely, and ensure adequate training.</p>
                    </div>
                    <div className="service">
                        <img src={Leadership} alt="Leadership Alignment"/>
                        <h3>Leadership & Team Alignment</h3>
                        <p>Enhancing capabilities to unblock issues, celebrate success, and build
                            confidence to create aligned, engaged, and empowered organizations.</p>
                    </div>
                    <div className="service">
                        <img src={Diversity} alt="Diversity Inclusion"/>
                        <h3>Diversity, Equity, Inclusion, & Belonging</h3>
                        <p>Creating an inclusive work environment helps attract top talent and foster
                            diverse and engaged workforce, which is necessary for teams to reach their full
                            potential.</p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="mission-section">
                <div className="section-heading">
                    <h2>Our Mission</h2>
                </div>
                <div className="mission-statements">
                    <div className="mission">
                        <img src={Team} alt="Begin with you"/>
                        <p>We begin with you.</p>
                    </div>
                    <div className="mission">
                        <img src={Heart} alt="Collaborate"/>
                        <p>We collaborate and empathize.</p>
                    </div>
                    <div className="mission">
                        <img src={Plant} alt="Growth and Inclusivity"/>
                        <p>We are committed to growth and Inclusivity.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
