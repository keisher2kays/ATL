import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [showFAQContent, setShowFAQContent] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  
  useEffect(() => {
    // FAQ content with delay for smooth scroll effect
    const faqTimer = setTimeout(() => {
      setShowFAQContent(true);
    }, 800);
    
    // Observer for scroll-based animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowFAQContent(true);
        }
      },
      { threshold: 0.1 }
    );
    
    // Observe the FAQ section
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      observer.observe(faqSection);
    }
    
    return () => {
      clearTimeout(faqTimer);
      if (faqSection) {
        observer.unobserve(faqSection);
      }
    };
  }, []);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "What types of stationery products do you offer?",
      answer: "At Altruistic and Loyal, we offer a premium selection of Laptops, Desktops,Printers, Toners, office stationery, organizational tools, and paper products. Our collection is carefully curated to ensure the highest quality and design standards."
    },
    {
      question: "Are your products environmentally friendly?",
      answer: "Yes, we are committed to sustainability. Many of our products are made from recycled or sustainably sourced materials, and we continuously work to reduce our environmental footprint through eco-friendly manufacturing processes and packaging solutions."
    },
    {
      question: "Do you offer wholesale or bulk pricing?",
      answer: "Yes, we offer special pricing for businesses, schools, and organizations purchasing in bulk. Please contact our reatail department at mapfumo@altruisticandloyal.com for more information and to discuss your specific needs."
    },
    
  ];
  
  return (
    <section 
      id="faq" 
      className={`faq-section ${showFAQContent ? 'fade-in' : ''}`}
    >
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle">Find answers to common questions about our products and services</p>
        </div>
        
        <div className="faq-content">
          <div className="accordion">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${openIndex === index ? 'active' : ''}`}
              >
                <div 
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.question}</h3>
                  <div className="accordion-icon">
                    <span className={`icon-bar ${openIndex === index ? 'open' : ''}`}></span>
                    <span className={`icon-bar horizontal ${openIndex === index ? 'open' : ''}`}></span>
                  </div>
                </div>
                <div className={`accordion-content ${openIndex === index ? 'show' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-footer">
          <div className="contact-info">
            <h3>Still have questions?</h3>
            <p>Our customer support team is here to help!</p>
            <div className="contact-options">
              <a href="mailto:katererekeisher4@gmail.com" className="contact-btn email-btn">
                Email Us
              </a>
              <a href="tel:+263789917878" className="contact-btn phone-btn">
                Call Us
              </a>
              {/* <a href="#contact" className="contact-btn chat-btn">
                Live Chat
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;