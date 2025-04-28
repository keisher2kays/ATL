
import React, { useState } from 'react';
import logo from '../images/logo.png';
import Banner from './Banner';
import AboutUs from './About';
import Services from './Service'; // Import the Services component
import FAQ from './Faq';
import Footer from './Footer';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="Altruistic and Loyal Logo" />
          </div>
          <div className="company-name">ALTRUISTIC AND LOYAL</div>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#faq" onClick={toggleMenu}>FAQ</a>
        </nav>
      </header>
      
      {/* Container for continuous scrolling */}
      <div className="smooth-scroll-container">
        {/* Banner Component */}
        <Banner />
        
        {/* About Us Component */}
        <AboutUs />
        
        {/* Services Component */}
        <Services />

        {/*FAQ*/}
        <FAQ/>

        {/*FOOTER*/}
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;