import React from 'react';
import './sellers.css'; // Import CSS file for styling

// ContactForm component for rendering the form
function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

function Sellers() {
  return (
    <div className="sellers">
      <div className="sellers-contact-card">
        <h1 className="sellers-title">Do you want to sell your art?</h1>
        <p className="sellers-text">We're dedicated to showcasing emerging artists. Contact us through the form below. Just provide your name, email, and portfolio link. We'll review your work promptly.</p>
        <ContactForm className="sellers-contact-form" />
      </div>
    </div>
  );
}

export default Sellers;

