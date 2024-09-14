import React from 'react';
import '../assets/styles/Whitepapers.css';
import { Link } from 'react-router-dom';
import CraftingMessageImage from '../assets/images/Insights/CraftingMessageImage.png'
import CustomerTransformingImage from '../assets/images/Insights/CustomerTransformingImage.png'
import RemoteWorkImage from '../assets/images/Insights/RemoteWork.png'
import GigEconomyImage from '../assets/images/Insights/GigEconomyImage.png'

function Whitepapers() {
    return (
        <div className="whitepapers-container">
          <h1>Insights</h1>
            <div className="whitepaper-item">
                <Link to="/insights/crafting-message" className="whitepaper-link">
                    <div className="whitepaper-content">
                        <div className="whitepaper-description">
                            <h2>Crafting Compelling Messages in Professional Communication</h2>
                            <p>In the realm of professional communication, the power to deliver a message that resonates amd inspires action is invaluable. This white paper draws upon the principles espoused by communication experts, providing a strategic framework for developing messages that captivate and engage audiences. How will your next message move the world?</p>
                        </div>
                        <img src={CraftingMessageImage} alt="Crafting Compelling Messages" />
                    </div>
                </Link>
            </div>

            <div className="whitepaper-item">
                <Link to="/insights/customer-transforming" className="whitepaper-link">
                    <div className="whitepaper-content">
                        <div className="whitepaper-description">
                            <h2>Centering the Customer: Transforming Strategy for Future Success</h2>
                            <p>Executive summary in an era where customer preferences evolve at an unprecedented pace, organizations must pivot from a product-centric to a customer centric approach. This white paper explores the transformative strategies and practices pivotal for businesses to achieve a customer-centric model. We delve into empathetic engagement, sophisticated data analytics, and cutting-edge digital tools that not only anticipate customer needs but also foster lasting relationships. Through a synthesis of innovative techniques and real-world applications, we provide a blueprint for organization to transform their customer interactions into meaningful experiences that drive loyalty and growth. </p>
                        </div>
                        <img src={CustomerTransformingImage} alt="Centering the Customer" />
                    </div>
                </Link>
            </div>

            <div className="whitepaper-item">
                <Link to="/insights/remote-work" className="whitepaper-link">
                    <div className="whitepaper-content">
                        <div className="whitepaper-description">
                            <h2>Definition and Evolution of Remote Work</h2>
                            <p>The purpose of this white paper is to provide a thorough understanding of remote work, detailing its definition, historical background, and the evolutionary journey that has led to its current state. It aims to serve as a comprehensive resource for organizations, employees, and policymakers to navigate the complexities of remote work and to prepare for its future trajectory. The scope encompasses the various models of remote work, technological enablers, industry-specific adaptations, and the profound impact of recent global events that have redefined the work environment.</p>
                        </div>
                        <img src={RemoteWorkImage} alt="Remote Work" />
                    </div>
                </Link>
            </div>

            <div className="whitepaper-item">
                <Link to="/insights/gig-economy" className="whitepaper-link">
                    <div className="whitepaper-content">
                        <div className="whitepaper-description">
                            <h2>The Gig Economy and Disruptive Technologies Changing the Composition of Workforces</h2>
                            <p>The gig economy refers to the labor market characterized by short-term, flexible freelance or independent work performed by “gig workers” often through digital platforms or mobile apps. It is rapidly transforming the traditional workforce and this shift is driven by disruptive technologies that are reshaping when, how and where work gets done.</p>
                        </div>
                        <img src={GigEconomyImage} alt="Gig Economy" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Whitepapers;