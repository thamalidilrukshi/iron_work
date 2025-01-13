import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}

<header className="header">
        <div className="top-bar">
          <div className="contact-info">
            <span>Email us: info@example.com</span>
            <span>Call us: 888-123-4567</span>
          </div>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        {/* <nav className="navbar">
          <div className="logo"></div>
           <ul className="nav-links">
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link> 
            <Link to='/'><li>Services</li></Link> 
            <li>Shop</li>
            <li>Contact</li>
          </ul> 
        </nav> */}
      </header>
    </header>
  );
};

export default Header;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../images/logo.png" alt="Brixel Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
