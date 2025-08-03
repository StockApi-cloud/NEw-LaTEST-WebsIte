// ContactUsButton.js
import React from 'react';
import './ContactUsButton.css';  // We'll style it in this CSS file

const ContactUsButton = () => {
  const handleClick = () => {
    // WhatsApp URL with predefined message
    const phoneNumber = '+916299597952';
    const message = encodeURIComponent('I want to know more about the Trading Floor.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button className="contact-us-button" onClick={handleClick}>
      <i className="fab fa-whatsapp"></i> Contact Us
    </button>
  );
};

export default ContactUsButton;
