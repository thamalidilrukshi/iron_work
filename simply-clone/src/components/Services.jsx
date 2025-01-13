import React, { useState } from 'react';
import './Navbar.css'; // Assuming you have a separate CSS file for your navbar

const Navbar = () => {
  // State variable to track the menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        {/* <span>Your Website</span> */}
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>☰</button> {/* Hamburger Menu Button */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
