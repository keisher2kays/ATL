import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const [paperHeight, setPaperHeight] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [penPosition, setPenPosition] = useState(0);
  const fullText = "Discover premium stationery for your office needs...";
  
  useEffect(() => {
    // Animation sequence timing
    
    // Start laptop opening animation
    setTimeout(() => {
      setLaptopOpen(true);
    }, 300);
    
    // Start typing animation
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);
    
    // Start the printing animation
    const timer1 = setTimeout(() => {
      setIsPrinting(true);
    }, 800);
    
    // Animate the paper coming out
    const timer2 = setTimeout(() => {
      setPaperHeight(180);
    }, 1300);
    
    // Show the text after paper has been "printed"
    const timer3 = setTimeout(() => {
      setTextVisible(true);
    }, 2800);
    
    // Animate pen writing
    const maxPosition = 100;
    const writingInterval = setInterval(() => {
      setPenPosition(prevPos => {
        if (prevPos >= maxPosition) {
          clearInterval(writingInterval);
          return maxPosition;
        }
        return prevPos + 1;
      });
    }, 30);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(typingInterval);
      clearInterval(writingInterval);
    };
  }, []);
  
  return (
    <section className="hero" id="hero">
      <div className="hero-content-wrapper">
        {/* Laptop on the left */}
        <div className="laptop-container">
          <div className={`laptop ${laptopOpen ? 'laptop-open' : ''}`}>
            <div className="laptop-screen">
              <div className="laptop-display">
                <div className="typing-text">{typedText}</div>
                <div className="cursor"></div>
              </div>
            </div>
            <div className="laptop-keyboard">
              <div className="laptop-keys"></div>
              <div className="laptop-touchpad"></div>
            </div>
          </div>
        </div>
        
        {/* Printer in the middle */}
        <div className="printer-animation">
          <div className="printer">
            <div className="printer-top"></div>
            <div className="printer-middle">
              <div className="printer-controls">
                <div className="printer-button"></div>
                <div className="printer-button"></div>
              </div>
              <div className="printer-slot"></div>
            </div>
            <div className="printer-bottom"></div>
            
            <div 
              className="printed-paper" 
              style={{ height: `${paperHeight}px` }}
            >
              <div className={`paper-content ${textVisible ? 'visible' : ''}`}>
                <h1>Luxury Stationery & Paper Goods</h1>
                <p>Elevate your workspace with premium office supplies</p>
              </div>
            </div>
            
            {isPrinting && (
              <div className="printer-light"></div>
            )}
          </div>
        </div>
        
        {/* Notebook with writing pen on the right */}
        <div className="stationery-items">
          <div className="notebook-container">
            <div className="notebook">
              <div className="notebook-cover"></div>
              <div className="notebook-pages">
                <div className="notebook-lines">
                  <div className="notebook-writing" style={{ width: `${penPosition}%` }}></div>
                </div>
              </div>
              <div className="notebook-spiral"></div>
            </div>
            
            {/* Animated pen writing on notebook */}
            <div className="pen-writing" style={{ transform: `translateX(${penPosition}px)` }}>
              <div className="pen-body"></div>
              <div className="pen-tip"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;