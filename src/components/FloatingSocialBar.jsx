import React, { useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const FloatingSocialBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSocialBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`floating-social-bar ${
        isCollapsed ? "social-bar-collapsed" : ""
      }`}
    >
      {/* Arrow */}
      <button
        className="floating-arrow"
        onClick={toggleSocialBar}
        aria-label={isCollapsed ? "Show Social Bar" : "Hide Social Bar"}
      >
        {isCollapsed ? <FaArrowLeft /> : <FaArrowRight />}
      </button>

      {/* Social Items */}
      <div className="floating-social-items">
        {/* Contact Us */}
        <a
          href="/contact"
          className="floating-social-item contact-item"
          aria-label="Contact Us"
        >
          <span className="floating-expanded-text">Contact Us</span>
          <FaEnvelope className="floating-icon" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919329847964"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-item whatsapp-item"
          aria-label="WhatsApp"
        >
          <span className="floating-expanded-text">WhatsApp</span>
          <FaWhatsapp className="floating-icon" />
        </a>

        {/* Facebook */}
        <a
          href="#"
          className="floating-social-item facebook-item"
          aria-label="Facebook"
        >
          <span className="floating-expanded-text">Facebook</span>
          <FaFacebookF className="floating-icon" />
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="floating-social-item instagram-item"
          aria-label="Instagram"
        >
          <span className="floating-expanded-text">Instagram</span>
          <FaInstagram className="floating-icon" />
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="floating-social-item linkedin-item"
          aria-label="LinkedIn"
        >
          <span className="floating-expanded-text">LinkedIn</span>
          <FaLinkedinIn className="floating-icon" />
        </a>

        {/* YouTube */}
        <a
          href="#"
          className="floating-social-item youtube-item"
          aria-label="YouTube"
        >
          <span className="floating-expanded-text">YouTube</span>
          <FaYoutube className="floating-icon" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocialBar;