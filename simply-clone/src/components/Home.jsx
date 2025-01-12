import React from "react";
import "../assets/css/Home.css";
import"../assets/images/project1.jpg"

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

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../images/logo.png" alt="Brixel Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};



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
          Keep the whole family comfortable with building construction. We
          provide 24/7 emergency water extraction services in Los Angeles.
        </p>
        <button className="cta-button">Get Free Quote</button>
      </div>
      <div className="hero-image">
        {/* <img src="../images/hero.jpg" alt="Hero" /> */}
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services">
        <div className="service">
          <img src="../images/construction.jpg" alt="Construction" />
          <h3>Construction</h3>
          <p>
            We specialize in reliable and efficient construction services to
            bring your vision to life.
          </p>
        </div>
        <div className="service">
          <img src="../images/renovation.jpg" alt="Renovation" />
          <h3>Renovation</h3>
          <p>
            Our renovation experts can transform your existing spaces to meet
            your changing needs.
          </p>
        </div>
        <div className="service">
          <img src="../images/my.jpg" alt="Architecture" />
          <h3>Architecture</h3>
          <p>
            Our talented architects create innovative designs tailored to your
            unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

const LatestProjectsSection = () => {
  return (
    <section className="latest-projects-section">
      <h2>Latest Projects</h2>
      <div className="projects">
        <div className="project">
          <img src="./images/project1.jpg" alt="Project1" />
          <h3>Residential Building</h3>
          <p>A modern and sustainable residential building.</p>
        </div>
        <div className="project">
          <img src="../images/project2.jpg" alt="Project 2" />
          <h3>Commercial Office</h3>
          <p>A state-of-the-art commercial office space.</p>
        </div>
        <div className="project">
          <img src="./images/project3.jpg" alt="Project 3" />
          <h3>Retail Storefront</h3>
          <p>A visually appealing and functional retail storefront.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-footer">
          <h3>About Us</h3>
          <p>
            We are a trusted construction company offering services to make your
            dream projects come true. Let's build something amazing together!
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
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

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <TopBar />
        <Navbar />
      </header>

      <HeroSection />

      <ServicesSection />

      <LatestProjectsSection />

      <Footer />
    </div>
  );
};

export default Home;
