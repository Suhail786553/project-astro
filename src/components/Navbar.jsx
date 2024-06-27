
import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaShoppingCart, FaBars, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://live.21lab.co/mlab/wp-content/themes/mlab/assets/img/logo.png" alt="Logo" />
      </div>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <ul>
          <li style={{color:"#6EC1E4"}}>
            HomePage <FaChevronDown className="dropdown-icon" />
            <ul className="dropdown">
              <li>Homepage1</li>
              <li>Homepage2</li>
              <li>Homepage3</li>
            </ul>
          </li>
          <li>
            About <FaChevronDown className="dropdown-icon" />
            <ul className="dropdown">
              <li>Company</li>
              <li>OurPeople</li>
              <li>Mission</li>
              <li>Solutions</li>
            </ul>
          </li> 
          <li>
            Solutions <FaChevronDown className="dropdown-icon" />
            <ul className="dropdown">
              <li>BankSolution</li>
              <li>StockSolution</li>
              <li>WealthSolution</li>
            </ul>
          </li>
          <li>
            CaseStudies <FaChevronDown className="dropdown-icon" />
            <ul className="dropdown">
              <li>Subitem1</li>
              <li>Subitem2</li>
            </ul>
          </li>
          <li>Blog</li>
          <li>ContactUs</li>
          <li>
            <button className="get-started-btn">GetStarted</button>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
        <FaShoppingCart />
      </div>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
      <FaShoppingCart />
      </div>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        Menu
      </div>
    </nav>
  );
};

export default Navbar;
