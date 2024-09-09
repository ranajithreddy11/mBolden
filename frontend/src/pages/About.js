import React from 'react';
import '../assets/styles/About.css';

import MeetingRoom from '../assets/images/Aboutpage/MeetingRoom.png';
import Onboarding from '../assets/images/Aboutpage/Onboarding.png';
import People from '../assets/images/Aboutpage/People.png';
import Timeline from '../assets/images/Aboutpage/Timeline.png';
import vector1 from '../assets/images/Aboutpage/vector1.png';
import vector2 from '../assets/images/Aboutpage/vector2.png';
import vector3 from '../assets/images/Aboutpage/vector3.png';
import vector4 from '../assets/images/Aboutpage/vector4.png';
import suzanneimg from '../assets/images/Aboutpage/suzanneimg.png';
import Instagram from '../assets/images/Aboutpage/Instagram.png';
import Facebook from '../assets/images/Aboutpage/Facebook.png';
import LinkedIn from '../assets/images/Aboutpage/LinkedIn.png';
import polygoninside from '../assets/images/Aboutpage/polygoninside.png';

import alanbresgi from '../assets/images/Aboutpage/alanbresgi.png';
import hadikiani from '../assets/images/Aboutpage/hadikiani.png';
import karenkumakanga from '../assets/images/Aboutpage/karenkumakanga.png';

import orangecard from '../assets/images/Aboutpage/orangecard.png';
import pinkcard from '../assets/images/Aboutpage/pinkcard.png';
import bluecard from '../assets/images/Aboutpage/bluecard.png';

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
            title: 'Diversity, Equity, Inclusion and Belonging'
        }
    ];

    const teamMember = {
        name: "Suzanne Knight",
        title: "CEO and Founder",
        imageUrl: suzanneimg, // Ensure this path is correct
        socialLinks: [
            {
                name: 'Instagram',
                icon: Instagram,
                url: 'https://instagram.com'
            }, {
                name: 'Facebook',
                icon: Facebook,
                url: 'https://facebook.com'
            }, {
                name: 'LinkedIn',
                icon: LinkedIn,
                url: 'https://linkedin.com'
            }
        ]
    };

    const teamMembers = [
        {
            name: "Alan Bresgi",
            position: "Senior Consulting Manager, Head of Communications",
            photo: alanbresgi, // Replace with actual path to image
        }, {
            name: "Hadi Kiani",
            position: "Consultant",
            photo: hadikiani, // Replace with actual path to image
        }, {
            name: "Karen Kumakanga",
            position: "Africa Market Lead Consultant",
            photo: karenkumakanga, // Replace with actual path to image
        }
    ];

    return (

        <div className="about-main">

            <div className="about-container-1">

                <h2>We are
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
                            At mBolden we strive to bring your vision to life through our 'values-Based
                            Transformation' approach. Our method combines strategic foresight with a
                            thorough comprehension of your organizational culture, enabling us to not only
                            predict trends but also to help shape them.
                        </p>
                        <p>
                            Our services range from aligning your corporate strategy with emerging
                            opportunities to creating a workplace that appeals to every generation.
                        </p>
                        <button>Learn More</button>
                    </div>

                    <div className="services-card-section">
                        <div className="polygon">
                            <div className="polygon-1">
                                <div className="polygon-in">
                                    <img src={polygoninside} alt="poly"/>
                                    <div className="polygon-content">
                                        <p>Pride and
                                        </p>
                                        <p>caring in all</p>
                                        <p>we do</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="service-item-position-1"
                            style={{
                            backgroundImage: `url(${vector1})`
                        }}>

                            <img src={services[0].icon} alt={services[0].title} className="service-icon1"/>
                            <h3 className='title1'>{services[0].title}</h3>

                        </div>

                        <div
                            className="service-item-position-2"
                            style={{
                            backgroundImage: `url(${vector2})`
                        }}>

                            <img src={services[1].icon} alt={services[1].title} className="service-icon2"/>
                            <h3 className='title2'>{services[1].title}</h3>

                        </div>

                        <div
                            className="service-item-position-3"
                            style={{
                            backgroundImage: `url(${vector3})`
                        }}>

                            <img src={services[2].icon} alt={services[2].title} className="service-icon3"/>
                            <h3 className='title3'>{services[2].title}</h3>

                        </div>

                        <div
                            className="service-item-position-4"
                            style={{
                            backgroundImage: `url(${vector4})`
                        }}>

                            <img src={services[3].icon} alt={services[3].title} className="service-icon4"/>
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
                                    src={teamMember.imageUrl}
                                    alt={teamMember.name}
                                    className="container2-profile-image"/>
                                <div className="container2-profile-details">
                                    <h2>{teamMember.name}</h2>
                                    <h4>{teamMember.title}</h4>
                                </div>
                            </div>

                        </div>

                        <div className="container2-social-links">
                            {teamMember
                                .socialLinks
                                .map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                        <img src={link.icon} alt={link.name} className="container2-socialimage"/>
                                    </a>
                                ))}
                        </div>

                    </div>

                </div>

                <div className="container2-card2">
                    <h2>Meet Our Team</h2>
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
                <div className="contianer3-title">
                    <h2>100% Women Owned Business</h2>
                </div>

                <div className="contianer3-section1">

                    <div className="contianer3-team-member-1">

                        <img src={orangecard} alt="orangecard" className="orangecard"/>

                        <div className="contianer3-member1-info">
                            <h3>{teamMembers[0].name}</h3>
                            <p>{teamMembers[0].position}</p>
                        </div>
                        <img
                            src={teamMembers[0].photo}
                            alt={teamMembers[0].name}
                            className="contianer3-member-photo1"/>

                    </div>

                    <div className="contianer3-team-member-2">
                        <img src={pinkcard} alt="pinkcard" className="pinkcard"/>
                        <div className="contianer3-member2-info">

                            <h3>{teamMembers[1].name}</h3>
                            <p>{teamMembers[1].position}</p>

                        </div>
                        <img
                            src={teamMembers[1].photo}
                            alt={teamMembers[1].name}
                            className="contianer3-member-photo2"/>

                    </div>

                </div>

                <div className="contianer3-section2">

                    <div className="contianer3-team-member-3">
                        <img src={bluecard} alt="bluecard" className="bluecard"/>
                        <div className="contianer3-member3-info">

                            <h3>{teamMembers[2].name}</h3>
                            <p>{teamMembers[2].position}</p>

                        </div>
                        <img
                            src={teamMembers[2].photo}
                            alt={teamMembers[2].name}
                            className="contianer3-member-photo3"/>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default About;