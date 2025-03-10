"use client";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin,  FaEnvelope } from "react-icons/fa";
import "@/app/styles/SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-media-bar">
      <a href="https://www.linkedin.com/in/muhammed-al-faris-a859412a7" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://muhammedalfariz8003@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="social-icon" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SocialMedia;