import React from 'react';
import './../assets/styles/Services.css';
import Planning from '../assets/images/Services/Planning.svg';
import Training from '../assets/images/Services/Training.svg';
import Leadership from '../assets/images/Services/Leadership.svg';

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
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="mission-section">
                <div className="section-heading">
                    <h2>Our Mission</h2>
                    <div className=' sub-heading'>
                    <p>At mBolden, we empower organizations to lead transformative change with confidence and purpose.</p>
                    </div>
                </div>
                <div className="mission-statements">
                    <div className="mission">
                        <h3>Align Strategy and Innovation</h3>
                        <p>We seamlessly integrate cutting-edge technologies with strategic vision, ensuring our clients stay ahead in a rapidly evolving business landscape.</p>
                    </div>
                    <div className="mission">
                        <h3>Foster Dynamic Leadership</h3>
                        <p>We cultivate adaptive leadership skills that inspire and guide teams through complex transformations.</p>
                    </div>
                    <div className="mission">
                        <h3>Create Thriving Workplace Cultures</h3>
                        <p>We build resilient, inclusive, and high-performing organizational cultures that embrace change and drive innovation.</p>
                    </div>
                    <div className="mission">
                        <h3>Enhance Agile Communication</h3>
                        <p>We develop robust communication frameworks that facilitate transparency, collaboration, and rapid decision-making.</p>
                    </div>
                    <div className="mission">
                        <h3>Build Future-Ready Teams</h3>
                        <p>We equip teams with the skills, mindset, and tools needed to navigate uncertainty and seize emerging opportunities.</p>
                    </div>
                    <div className='text-end'>
                    <h4>By partnering with mBolden, organizations not only set the pace for transformation but also achieve sustainable success in an ever-changing world. Our holistic approach ensures that our clients are not just prepared for the future – they're actively shaping it.</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
