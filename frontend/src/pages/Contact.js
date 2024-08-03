import React from 'react';
import '../assets/styles/Contact.css';
import Email from '../assets/images/Email.svg';

function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
      <div className='content'>Contact Us</div> 
      </header>
      <section className="contact-section">
        <div className="contact-info">
          <h2>Let's talk!</h2>
          <h3>Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</h3>
          <p className="contact-email">
            <img src={Email} alt="Email icon" />
            Contact@mbolden.co
          </p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group-name">
              <input type="text" name="firstName" placeholder="First Name*" required />
              <input type="text" name="lastName" placeholder="Last Name*" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email*" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone Number*" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="send-message-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
