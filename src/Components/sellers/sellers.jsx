import React from 'react';
import './sellers.css'; // Import CSS file for styling

function Sellers() {
  return (
    <div className="sellers-page">
      <div className="contact-card">
        <div className="contact-page">
          <h1 className="contact-page-title">Artists Contact Us</h1>
          <p className="contact-page-description">Are you interested in selling your artwork through our platform? We're dedicated to showcasing emerging artists, and we're excited to see what you have to offer! Simply fill out your name, email address, and provide a link to your portfolio. We'll review your work and get back to you as soon as possible.</p>
          <h1 className="contact-page-title">Contact Us for Account Changes</h1>
          <p className="contact-page-description">If you need to update your account details or have any questions regarding your account, please don't hesitate to get in touch with us. We're here to assist you every step of the way. Please fill out the form below with your updated information or any inquiries you may have regarding your account. Our team will review your request and get back to you promptly. Thank you for choosing us. We appreciate your trust and look forward to assisting you with your account needs.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" />
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default Sellers;
