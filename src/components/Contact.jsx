import React, { useState } from 'react';

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Contact form submission logic
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Our Information</h3>
          <p><strong>Address:</strong> 123 Retail Street, Shopping City</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> support@retailer.com</p>
          <p><strong>Hours:</strong> Monday-Friday, 9AM-5PM</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={contactForm.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={contactForm.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" value={contactForm.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={contactForm.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;