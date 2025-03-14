import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import "@/app/styles/Contact.css";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:muhammedalfariz8003@gmail.com";
  };
  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-description">
        I'm always open to meaningful conversations, collaborations, and new ideas.  
        Whether you want to discuss a project, share insights, or just say hi—feel free to reach out.  
        Looking forward to connecting!
      </p>
      <button className="contact-button"  onClick={handleEmailClick}>Say Hi</button>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muhammed-al-faris-a859412a7" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;