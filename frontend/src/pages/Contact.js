import React, { useState } from 'react';
import '../assets/styles/Contact.css';
import Email from '../assets/images/Email.svg';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d+$/;  // Ensures only numbers are allowed
        
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.phone) {
            errors.phone = 'Phone Number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            errors.phone = 'Phone Number must contain only digits';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch('http://localhost:5001/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
    
                if (response.ok && result.success) {
                    setFormStatus('Message sent successfully!');
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                } else {
                    setFormStatus('Failed to send message. Please try again.');
                }
            } catch (error) {
                setFormStatus('Failed to send message. Please try again.');
            }
        } else {
            setFormStatus('Please fill in all required fields.');
        }
    };

    return (
        <div className="contact-container">
            <header className="contact-header">
                <div className="content">Contact Us</div>
            </header>
            <section className="contact-section">
                <div className="contact-info">
                    <h2>Let's talk!</h2>
                    <h3>Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</h3>
                    <p className="contact-email">
                        <img src={Email} alt="Email icon" />
                        <a href="mailto:Contact@mbolden.co">Contact@mbolden.co</a>
                    </p>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group-name">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.email && <span className="error">{formErrors.email}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {formErrors.message && <span className="error">{formErrors.message}</span>}
                        </div>
                        <button type="submit" className="send-message-button">Send Message</button>
                        {formStatus && <p className="form-status">{formStatus}</p>}
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
