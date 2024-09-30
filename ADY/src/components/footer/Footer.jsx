import React from 'react';
import { FaMapPin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Logo from "../../assets/1.webp";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={Logo} alt="logo" className="footer-logo-img" />
          </Link>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="footer-links">
          <h1 className="footer-heading">About Us</h1>
          <ul className="footer-list">
            <li><Link to="#" className='footer-link'>About Us</Link></li>
            <li><Link to="#" className='footer-link'>Contact Us</Link></li>
            <li><Link to="#" className='footer-link'>Privacy Policy</Link></li>
            <li><Link to="#" className='footer-link'>Terms and Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h1 className="footer-heading">Services</h1>
          <ul className="footer-list">
            <li><Link to="#" className='footer-link'>Safety Guarantee</Link></li>
            <li><Link to="#" className='footer-link'>FAQ & Support</Link></li>
            <li><Link to="#" className='footer-link'>Luxury Buses</Link></li>
            <li><Link to="#" className='footer-link'>Enough Facilities</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h1 className="footer-heading">Get In Touch</h1>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <FaMapPin className='footer-contact-icon' />
              <div className="footer-contact-details">
                <p className="footer-contact-label">Adress</p>
                <p className="footer-contact-address">Baku - 28 May</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
