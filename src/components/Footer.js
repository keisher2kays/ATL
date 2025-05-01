// import React from 'react';


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#faq">FAQ</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact Us</h4>
//           <p>Email: <a href="mailto:katererekeisher4@gmail.com">katererekeisher4@gmail.com</a></p>
//           <p>Phone: <a href="tel:+263789917878">+263 789 917 878</a></p>
//         </div>

//         <div className="footer-social">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Altruistic and Loyal. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:katererekeisher4@gmail.com">katererekeisher4@gmail.com</a></p>
          <p>Phone: <a href="tel:+263789917878">+263 789 917 878</a></p>
          <p>Address: 8514 Westlea </p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-2.675 12h-4v10h-4v-10h-2v-4h2v-2.5c0-3.1 1.9-4.5 4.5-4.5 1.3 0 2.5.1 2.5.1v4h-1.4c-1.1 0-1.5.7-1.5 1.4V8h4l-.5 4z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M24 4.557a9.935 9.935 0 0 1-2.828.775A4.935 4.935 0 0 0 23.338 3a9.87 9.87 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 0c-2.736 0-4.95 2.214-4.95 4.95 0 .387.043.765.127 1.128A13.986 13.986 0 0 1 1.671 3.149a4.93 4.93 0 0 0-.668 2.487c0 1.718.873 3.227 2.188 4.115a4.904 4.904 0 0 1-2.24-.616v.062c0 2.396 1.703 4.394 3.96 4.843a4.935 4.935 0 0 1-2.234.085c.634 1.975 2.475 3.414 4.655 3.454A9.87 9.87 0 0 1 0 19.54a13.93 13.93 0 0 0 7.548 2.211c9.056 0 14.004-7.496 14.004-13.986 0-.213-.005-.426-.014-.637A10.003 10.003 0 0 0 24 4.557z"/>
              </svg>
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24"   viewBox="0 0 24 24" >
  <path fill="#fffff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
</svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Altruistic and Loyal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;