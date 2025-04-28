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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.206 0 3.593.012 4.86.07 1.17.058 1.99.247 2.45.52.56.31 1.01.73 1.32 1.32.27.46.46 1.28.52 2.45.058 1.267.07 1.654.07 4.86s-.012 3.593-.07 4.86c-.058 1.17-.247 1.99-.52 2.45-.31.56-.73 1.01-1.32 1.32-.46.27-1.28.46-2.45.52-1.267.058-1.654.07-4.86.07s-3.593-.012-4.86-.07c-1.17-.058-1.99-.247-2.45-.52-.56-.31-1.01-.73-1.32-1.32-.27-.46-.46-1.28-.52-2.45C2.175 15.593 2.163 15.206 2.163 12s.012-3.593.07-4.86c.058-1.17.247-1.99.52-2.45.31-.56.73-1.01 1.32-1.32.46-.27 1.28-.46 2.45-.52C8.407 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.308.012 7.03.07 5.75.127 4.67.367 3.83.67 2.99.973 2.27 1.56 1.73 2.1c-.56.31-1.01.73-1.32 1.32-.27.46-.46 1.28-.52 2.45C.012 8.308 0 8.741 0 12s.012 3.593.07 4.86c.058 1.17.247 1.99.52 2.45.31.56.73 1.01 1.32 1.32.46.27 1.28.46 2.45.52 1.267.058 1.654.07 4.86.07s3.593-.012 4.86-.07c1.17-.058 1.99-.247 2.45-.52.56-.31 1.01-.73 1.32-1.32.27-.46.46-1.28.52-2.45.058-1.267.07-1.654.07-4.86s-.012-3.593-.07-4.86c-.058-1.17-.247-1.99-.52-2.45-.31-.56-.73-1.01-1.32-1.32-.46-.27-1.28-.46-2.45-.52C15.593.012 15.206 0 12 0z"/>
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