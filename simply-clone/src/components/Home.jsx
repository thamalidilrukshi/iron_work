import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import CounterBar from "./counter bar";

// Top Bar Component
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
        <span>Email: info@example.com</span>
        <span>Phone: 888-123-4567</span>
      </div>
      <div className="social-icons">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../images/logo.png" alt="Brixel Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Create With Heart
          <br />
          Build With Mind
        </h1>
        <p>
          Keep the whole family comfortable with building construction. We provide 24/7 emergency water extraction services in Los Angeles.
        </p>
        <button className="cta-button">Get Free Quote</button>
      </div>
      <div className="hero-image">
        {/* Placeholder for hero image */}
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services">
        <div className="service">
          <img src="../images/construction.jpg" alt="Construction Service" />
          <h3>Construction</h3>
          <p>We specialize in reliable and efficient construction services to bring your vision to life.</p>
        </div>
        <div className="service">
          <img src="../images/renovation.jpg" alt="Renovation Service" />
          <h3>Renovation</h3>
          <p>Our renovation experts can transform your existing spaces to meet your changing needs.</p>
        </div>
        <div className="service">
          <img src="../images/architecture.jpg" alt="Architecture Service" />
          <h3>Architecture</h3>
          <p>Our talented architects create innovative designs tailored to your unique requirements.</p>
        </div>
      </div>
    </section>
  );
};

// Latest Projects Section
const LatestProjectsSection = () => {
  return (
    <section className="latest-projects-section">
      <h2>Latest Projects</h2>
      <div className="projects">
        <div className="project">
          <img src="../images/project1.jpg" alt="Residential Building" />
          <h3>Residential Building</h3>
          <p>A modern and sustainable residential building.</p>
        </div>
        <div className="project">
          <img src="../images/project2.jpg" alt="Commercial Office" />
          <h3>Commercial Office</h3>
          <p>A state-of-the-art commercial office space.</p>
        </div>
        <div className="project">
          <img src="../images/project3.jpg" alt="Retail Storefront" />
          <h3>Retail Storefront</h3>
          <p>A visually appealing and functional retail storefront.</p>
        </div>
      </div>
    </section>
  );
};

// Location Section (Google Map Embed)
const Location = () => {
  return (
    <section className="location">
      <h2>Our Location</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d990.6952818901973!2d79.9700832!3d6.6740188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24900021fb987%3A0x475cdb999c33f5e0!2sCeylon%20engineering!5e0!3m2!1sen!2slk!4v1736737050060!5m2!1sen!2slk" width="600" 
      height="450" style={{ border: "0" }} allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
        
      </iframe>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-footer">
          <h3>About Us</h3>
          <p>
            We are a trusted construction company offering services to make your dream projects come true. Let's build something amazing together!
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="contact-footer">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 888-123-4567</p>
          <p>Address: Los Angeles, CA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Brixel. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        {/* <TopBar />*/}
        <Navbar /> 
      </header>

      <HeroSection />
      <ServicesSection />
      <LatestProjectsSection />
      <CounterBar />
      <br />
      <br />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
