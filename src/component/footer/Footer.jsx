import React from 'react';
import imagefooter from '../../../public/images/logo.png';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import './Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import footeranimation1 from '../../../public/images/anmation.png';
import footeranimation4 from '../../../public/images/anmation.png';
import footeranimation2 from '../../../public/images/recycle blue.png';
import footeranimation3 from '../../../public/images/download.png';
const Footer = () => {
  return (
    <footer className="footer">
        <img src={footeranimation4} alt="footer animation" className="footeranimation4" />

      <div className="footertop">
        <img src={footeranimation1} alt="footer animation" className="footeranimation1" />
      </div>
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-3 col-md-4 col-sm-6  p-sm-3 footer-section  ">
            <img src={imagefooter} alt="imagefooter" className="imagefooter mb-3" />
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore eiusmod tempor incididunt ut labore et.
            </p>
            <div className="footer-contact footer2">
            <img src={footeranimation2} alt="footeranimation2" className="footeranimation2  " />

              <div style={{
                backgroundColor: "#ef7633", padding: "10px",
                borderRadius: "50% 50% 0 50% ", margin: "0 8px  0 0"
              }}><FaPhoneAlt className='text-light' /></div>
              <div className="footer-contact-info">
                <p className="footer-contact-title" style={{ color: "#ef7633" }}>Contact Us</p>
                <p className="footer-contact-phone">+01024668999</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6  p-sm-3 footer-section">
            <h3 className="footer-title  " style={{ color: "#565acf",zIndex:"1" }}>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Booking</a></li>
              <li><a href="/">Faq's</a></li>
              <li><a href="/">Blogs</a></li>
              <li><a href="/">Our Team</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6   p-sm-3 footer-section  ">

            <h3 className="footer-title" style={{ color: "#565acf" }}>Our Service</h3>
            <ul className="footer-links">
              <li><a href="/">Dental Care</a></li>
              <li><a href="/">Cardiac Clinic</a></li>
              <li><a href="/">Massage Therapy</a></li>
              <li><a href="/">Cardiology</a></li>
              <li><a href="/">Precise Diagnosis</a></li>
              <li><a href="/">Ambulance Services</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6   p-sm-3 footer-section footer3">
            <img src={footeranimation3} alt="footeranimation3" className='footeranimation3' />

            <h3 className="footer-title " style={{ color: "#565acf" }}>Subscribe</h3>
            <form className="footer-subscribe-form">
              <input type="text" placeholder="Email Address" className="footer-subscribe-input" />
              <input type="submit" value="Subscribe Now" className="footer-subscribe-button" style={{ backgroundColor: "#ef7633" }} />
            </form>
            <div className="footer-social-icons">
              <FaFacebookSquare className="footer-social-icon" />
              <FaInstagramSquare className="footer-social-icon text-danger" />
              <FaLinkedin className="footer-social-icon text-dark" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;