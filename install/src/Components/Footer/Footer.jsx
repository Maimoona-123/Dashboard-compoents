import React from "react";
import "./Foorer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section hotel-details">
          <h3>Hotel Paradise</h3>
          <p>123 Beach Road, Miami, FL</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@hotelparadise.com</p>
        </div>
        
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rooms">Rooms & Rates</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Hotel Paradise. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
