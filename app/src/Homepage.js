import React, { useState } from 'react';
import Footer from './Footer';
import Homepagepic from './assests/Homepagepic.png';
import './HomePage.css';

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
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Portfolio</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Contact us</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">LUMINARY MEDIA WORKS</h1>
            <p className="hero-subtitle">"Bringing Visions to Life, One Frame at a Time."</p>
          </div>
        </section>

        <section className="image-section">
          <div className="container">
            <div className="image-placeholder">
              <img 
                src={Homepagepic} 
                alt="Homepage" 
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