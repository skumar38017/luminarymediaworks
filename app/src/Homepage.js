import React, { useState } from 'react';
import Footer from './Footer';
import './HomePage.css';
import Homepagepic from './assests/Homepagepic.png';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
        <nav className="nav-container">
          <a href="/" className="nav-brand">LUMINARYMEDIAWOKS.IN</a>
          
          <button 
            className="hamburger-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact us</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-background"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h3 className='hero-subtitle'>SHREERAJ</h3>
            <h1 className="hero-title">LUMINARY MEDIA WORKS</h1>
            <p className="hero-subtitle">"Bringing Visions to Life, One Frame at a Time."</p>
          </div>
        </section>

        <section className="image-section">
          <div className="container">
            <div className="image-placeholder">
              <img 
                src={Homepagepic} 
                alt="Featured work" 
                className="responsive-image"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
