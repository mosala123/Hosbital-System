import React, { useState } from 'react';
import imagelogo from "../../../public/images/logo.png";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { RiMenuFoldFill } from "react-icons/ri";
import './Navbar.css';
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  const [opennavbar, setOpenNavbar] = useState(false);

  const toggleOpen = () => {
    setOpenNavbar(!opennavbar);
  };
// 
const [openDropdown, setOpenDropdown] = useState(null);

const handleClick = (name) => {
  setOpenDropdown(prev => (prev === name ? null : name));
}; 
  return (
    <nav className="navbar ">
      <div className="navbar-container">
     
        <Link className="navbar-logo" to="/">
          <img src={imagelogo} alt="Logo" className="logo-img" />
        </Link>

       
        <div className={`navbar-links ${opennavbar ? 'open' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-link" to="/Home">
                Home  
              </Link>
            </li>



            <li className="navbar-item Pages">
        <div onClick={() => handleClick('pages')}>
          <Link className="navbar-link" to="#">
            Pages
            <AiOutlinePlus className={`navbar-icon ${openDropdown === 'pages' ? 'rotate' : ''}`} />
          </Link>
        </div>

        {openDropdown === 'pages' && (
          <div className='navbarlinkstoggleopen'>
            <ul>
              <li><Link to="/AboutUsAll">About Us</Link></li>
              <li><Link to="/TeamUs">Team Us</Link></li>
              <li><Link to="/Question">FAQ's</Link></li>
            </ul>
          </div>
        )}
      </li>

      {/* Services Item */}
      <li className="navbar-item Pages">
        <div onClick={() => handleClick('services')}>
          <Link className="navbar-link" to="#">
            Services
            <AiOutlinePlus className={`navbar-icon ${openDropdown === 'services' ? 'rotate' : ''}`} />
          </Link>
        </div>

        {openDropdown === 'services' && (
          <div className='navbarlinkstoggleopen'>
            <ul>
              <li><Link to="/">Web Development</Link></li>
              <li><Link to="/">App Development</Link></li>
              <li><Link to="/">UI/UX Design</Link></li>
            </ul>
          </div>
        )}
      </li>

      {/* Blog Item */}
      <li className="navbar-item Pages">
        <div onClick={() => handleClick('blog')}>
          <Link className="navbar-link" to="#">
            Blog
            <AiOutlinePlus className={`navbar-icon ${openDropdown === 'blog' ? 'rotate' : ''}`} />
          </Link>
        </div>

        {openDropdown === 'blog' && (
          <div className='navbarlinkstoggleopen'>
            <ul>
              <li><Link to="/">Latest Posts</Link></li>
              <li><Link to="/">Tech News</Link></li>
              <li><Link to="/">Tutorials</Link></li>
            </ul>
          </div>
        )}
      </li>














            <li className="navbar-item">
              <Link className="navbar-link" to="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>


        {/* الجزء الثالث: Right Side Content */}
        <div className="navbar-right">
          <div className="phone-contact">
            <div className="phone-icon">
              <FaPhoneAlt />
            </div>
            <div className="phone-number">
              <span className="phone-text">+012 345 6789</span>
            </div>
          </div>

          <div className="navbar-contact-link">
            <Link className="contact-btn">
              Contact Us
              <FaAngleRight className="angle-icon" />
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <RiMenuFoldFill onClick={toggleOpen} className="menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
