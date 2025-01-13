import React, { useEffect } from 'react';
import '../assets/css/AboutUs.css';
import '../components/Header.jsx';

const AboutUs = () => {
  
  useEffect(() => {
    // JavaScript Animation on Scroll - Fade In Effect
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-us');
      const aboutContent = document.querySelector('.about-content');
      const aboutImage = document.querySelector('.about-image img');
      
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = aboutSection.offsetTop + aboutSection.offsetHeight;

      if (scrollPosition > sectionPosition) {
        aboutContent.classList.add('fade-in');
        aboutImage.classList.add('image-zoom');
      } else {
        aboutContent.classList.remove('fade-in');
        aboutImage.classList.remove('image-zoom');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="header-content">
          <h1>Iron Work Construction</h1>
          <p>Expert Solutions for Residential, Commercial & Industrial Projects</p>
          <a href="#projects" className="cta-button">View Our Projects</a>
        </div>
      </header>

      {/* About Section */}
      <section className="about-us">
        <div className="about-container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Expert Ironwork Solutions for Every Project</h3>
              <p>
                We are a trusted leader in the ironwork construction industry, specializing in the fabrication and installation of high-quality, durable metal structures.
              </p>
              <p>
                From residential iron fencing to large commercial steel structures, we provide expert solutions for all types of ironwork needs.
              </p>
            </div>
            <div className="about-image">
              <img src="images/my.jpg" alt="Iron Work Construction" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Our Recent Projects</h2>
        <div className="projects-container">
          <div className="project-item">
            <img src="images/my.jpg" alt="Project 1" />
            <div className="project-info">
              <h3>Commercial Steel Building</h3>
              <p>High-quality steel structure for a large commercial building project.</p>
            </div>
          </div>
          <div className="project-item">
            <img src="images/ny.jpg" alt="Project 2" />
            <div className="project-info">
              <h3>Residential Iron Fencing</h3>
              <p>Custom iron fencing for residential properties, combining aesthetics and security.</p>
            </div>
          </div>
          <div className="project-item">
            <img src="images/my.jpg" alt="Project 3" />
            <div className="project-info">
              <h3>Industrial Steel Structure</h3>
              <p>Strong and durable steel structure for an industrial complex.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
