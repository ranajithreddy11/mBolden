import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/About.css';

import MeetingRoom from '../assets/images/Aboutpage/MeetingRoom.png';
import Onboarding from '../assets/images/Aboutpage/Onboarding.png';
import People from '../assets/images/Aboutpage/People.png';
import Timeline from '../assets/images/Aboutpage/Timeline.png';

import suzanneimg from '../assets/images/Aboutpage/suzanneimg.jpeg';
import Instagram from '../assets/images/Aboutpage/Instagram.png';
import Facebook from '../assets/images/Aboutpage/Facebook.png';
import LinkedIn from '../assets/images/Aboutpage/LinkedIn.png';
import alanbresgi from '../assets/images/Aboutpage/alanbresgi.jpg';
import dominic from '../assets/images/Aboutpage/dominic.jpg';




const About = () => {
    

    const services = [
        {
            icon: MeetingRoom,
            title: 'Leadership and Team Alignment'
        }, {
            icon: Timeline,
            title: 'Strategic planning and Measurement'
        }, {
            icon: Onboarding,
            title: 'Change, Communications, and Training'
        }, {
            icon: People,
            title: 'New Ways of Thinking and Working'
        }
    ];

    const teamMember1 = {
        name: "Suzanne Knight",
        title: "CEO and Founder",
        imageUrl: suzanneimg, // Ensure this path is correct
        socialLinks: [
            {
                name: 'Instagram',
                icon: Instagram,
                url: 'https://www.instagram.com/mbolden_consulting'
            }, {
                name: 'Facebook',
                icon: Facebook,
                url: 'https://www.facebook.com/profile.php?id=61557755199538'
            }, {
                name: 'LinkedIn',
                icon: LinkedIn,
                url: 'https://www.linkedin.com/company/mbolden-consulting/'
            }
        ]
    };



    const teamMember2 = {
        name: "Dominic Chow",
        title: "Chief Operating Officer",
        imageUrl: dominic // Ensure this path is correct
    
    };

    const teamMember3 = {
        name: "Alan Bresgi",
        title: "Senior Manager and Head of Communications",
        imageUrl: alanbresgi // Ensure this path is correct
    
    };


  


    return (
        <div className="about-main">
            <div className="about-container-1">
                <h2>We are &nbsp;
                    <span className="highlight">mBolden</span>
                </h2>

                <div className="about-cards-container">
                    <div className="about-card-section">
                        <p>
                            At mBolden, we are on a mission to ensure that organizations thrive in the face
                            of relentless change. Yes, it's possible.
                        </p>
                        <p>
                            Many organizations struggle to adapt to technological advances, shifting
                            workforce dynamics, and the constant need for innovation.
                        </p>
                        <p>
                            At mBolden we strive to bring your vision to life through our 'Values-Based
                            Transformation' approach. Our method combines strategic foresight with a
                            thorough comprehension of your organizational culture, enabling us to not only
                            predict trends but also to help shape them.
                        </p>
                        <p>
                            Our services range from aligning your corporate strategy with emerging
                            opportunities to creating a workplace that appeals to every generation.
                        </p>

                        <div className="learnmore">
                       <Link to="/services">Learn more</Link> 
                       </div>

                    </div>

                    <div className="services-card-section">
                        <div className="service-item-position-1">
                            <img src={services[0].icon} alt={services[0].title} className="service-icon1" />
                            <h3 className='title1'>{services[0].title}</h3>
                        </div>

                        <div className="service-item-position-2">
                            <img src={services[1].icon} alt={services[1].title} className="service-icon2" />
                            <h3 className='title2'>{services[1].title}</h3>
                        </div>

                        <div className="service-item-position-3">
                            <img src={services[2].icon} alt={services[2].title} className="service-icon3" />
                            <h3 className='title3'>{services[2].title}</h3>
                        </div>

                        <div className="service-item-position-4">
                            <img src={services[3].icon} alt={services[3].title} className="service-icon4" />
                            <h3 className='title4'>{services[3].title}</h3>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="about-container-2">
                <div className="container2-card1">
                    <div className="container2-profile">
                        <div className="container2-image-container">
                            <div className="container2-ellipse">
                                <img
                                    src={teamMember1.imageUrl}
                                    alt={teamMember1.name}
                                    className="container2-profile-image" />
                                <div className="container2-profile-details">
                                    <h2>{teamMember1.name}</h2>
                                    <h4>{teamMember1.title}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="container2-social-links">
                            {teamMember1.socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                    <img src={link.icon} alt={link.name} className="container2-socialimage" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container2-card2">
                    <h2>Meet Our Leaders</h2>
                    <div className="container2-description">
                        <p>CEO of mBolden and DMZ's 2023 Woman of the Year, Suzanne Knight is a trusted
                            advisor for executives and inspirational leader for teams.</p>
                        <p>She has led 40+ transformations in 12 countries as an executive at mBolden,
                            Walmart Canada, Philip Morris International, and Deloitte.</p>
                        <p>As a respected leader in her field, she operates as a global keynote speaker,
                            covering the future of work, leading change, embedding innovation into ways of
                            thinking and working, and building an agile organization and mindset.</p>
                        <p>Suzanne holds an MA in Industrial/Organizational psychology and an MBA in
                            Finance and Strategy.</p>
                    </div>
                </div>
            </div>

            <div className="about-container-3">
            <div className="container3-card1">
                    <div className="container3-profile">
                        <div className="container3-image-container">
                            <div className="container3-ellipse">
                                <img
                                    src={teamMember2.imageUrl}
                                    alt={teamMember2.name}
                                    className="container3-profile-image" />
                                <div className="container3-profile-details">
                                    <h2>{teamMember2.name}</h2>
                                    <h4>{teamMember2.title}</h4>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>

                <div className="container3-card2">
                   
                    <div className="container3-description">
                        <p>Dom is a business strategist and people & culture leader with experience at Deloitte, BMO, Ford, TELUS, and most recently as the Chief Strategy Officer, Head of Talent, and Head of Marketing for a leading capital markets firm. He collaboratively works with leadership teams globally, helping them to craft and implement their vision, and enjoys rolling up his sleeves to do so. </p>
                        <p> Dom excels at simplifying complex situations to their root challenges and getting all stakeholders to row in the same direction when solving them. </p>
                        <p> He is passionate about fostering a growth mindset and ensuring that people are at the centre of strategy. </p>
                        <p>Dom is a father of two, an avid skier, racetrack instructor, cyclist, recovering golfer, and musician.</p>

                    </div>
                </div>
            </div>



            <div className="about-container-3">
            <div className="container3-card1">
                    <div className="container3-profile">
                        <div className="container3-image-container">
                            <div className="container3-ellipse">
                                <img
                                    src={teamMember3.imageUrl}
                                    alt={teamMember3.name}
                                    className="container3-profile-image" />
                                <div className="container3-profile-details">
                                    <h2>{teamMember3.name}</h2>
                                    <h4>{teamMember3.title}</h4>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>

                <div className="container3-card2">
                   
                    <div className="container3-description">
                        <p>Alan brings over 18 years of experience leading corporate communications, internal communications, change management, employee engagement, DE&I, CSR/sustainability, and stakeholder relations.</p>
                        <p> His passion lies in shaping workplace culture and fostering employee engagement. </p>
                        <p>  From his roles at Takeda Pharmaceutical, British American Tobacco, Triumph International and Philip Morris International, he has consistently delivered results, leading communications, digital communication transformation, people engagement, change management, and innovation.</p>
                        <p>Alan is fluent in Japanese and is a data-driven storyteller with an MBA from the Kellogg School of Management.</p>
                    </div>
                </div>
            </div>











        </div>
    );
};

export default About;
