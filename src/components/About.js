import React, { useState, useEffect } from 'react';
import ABOUTPIC from '../images/lenovo.jpeg'

const AboutUs = () => {
  const [showAboutContent, setShowAboutContent] = useState(false);
  
  useEffect(() => {
    // About Us content with delay for smooth scroll effect
    const aboutTimer = setTimeout(() => {
      setShowAboutContent(true);
    }, 800);
    
    // Observer for scroll-based animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowAboutContent(true);
        }
      },
      { threshold: 0.1 }
    );
    
    // Observe the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => {
      clearTimeout(aboutTimer);
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      className={`about-section ${showAboutContent ? 'fade-in' : ''}`}
    >
      <div className="about-container">
        <div className="about-header">
          <h2>About Altruistic and Loyal</h2>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <div className="image-container">
                {/* Placeholder for company image */}
                <div className="about-placeholder-image">
                      <img src={ABOUTPIC} alt="Altruistic and Loyal Logo" className='lenovo'/>
                      </div>
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Crafting Excellence </h3>
            <p>
              At Altruistic and Loyal, we believe that exceptional stationery enhances productivity and inspiration. 
              Founded with a passion for quality craftsmanship and innovative design, we have spent over a decade 
              perfecting our selection of premium office supplies and paper products.
            </p>
            
            <p>
              Our curated collection combines functionality with elegance, offering everything from 
              luxury notebooks and journals to premium writing instruments and organizational tools.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon quality-icon"></div>
                <h4>Premium Quality</h4>
                <p>Carefully sourced materials and superior craftsmanship</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon sustainability-icon"></div>
                <h4>Eco-Friendly</h4>
                <p>Sustainable practices and environmentally responsible products</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon design-icon"></div>
                <h4>Thoughtful Design</h4>
                <p>Functionality meets aesthetic appeal in every product</p>
              </div>
            </div>
            
            <div className="about-cta">
              <button className="learn-more-btn">Our Story</button>
              <button className="browse-products-btn">Browse Products</button>
            </div>
          </div>
        </div>
        
        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon integrity-icon"></div>
              <h4>Integrity</h4>
              <p>Honest business practices and transparent relationships</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon innovation-icon"></div>
              <h4>Innovation</h4>
              <p>Continuously evolving our products and services</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon excellence-icon"></div>
              <h4>Excellence</h4>
              <p>Striving for the highest standards in every aspect</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon community-icon"></div>
              <h4>Community</h4>
              <p>Supporting local initiatives and global causes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;