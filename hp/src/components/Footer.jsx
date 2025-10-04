import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="fc">
      <div >
        <div >
          <a href="#" className="text-decoration-none text-light">Related links </a>
        </div>
      </div>

      <hr />
      
      <div >
<p>
          Country/Region:   India
          </p>
      </div>

      <hr />

      <div className="footer-main-content">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#contact">Contact HP</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#investor">Investor relations</a></li>
            <li><a href="#impact">Sustainable impact</a></li>
            <li><a href="#newsroom">Newsroom</a></li>
            <li><a href="#tech-takes">Tech Takes</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Ways to buy</h4>
          <ul>
            <li><a href="#shop">Shop online</a></li>
            <li><a href="#stores">HP World Brand exclusive stores</a></li>
            <li><a href="#call">Call an HP rep</a></li>
            <li><a href="#reseller">Find a reseller</a></li>
            <li><a href="#promo">HP Promotions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#drivers">Download drivers</a></li>
            <li><a href="#troubleshooting">Support & troubleshooting</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#service-providers">Authorized service providers</a></li>
            <li><a href="#repair-status">Check repair status</a></li>
            <li><a href="#featured-links">Featured links</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>HP Partners</h4>
          <ul>
            <li><a href="#amplify">HP Amplify Partner Program</a></li>
            <li><a href="#portal">HP Partner Portal</a></li>
            <li><a href="#developers">Developers</a></li>
          </ul>
        </div>
        <div className='' >
          <h4>Stay connected</h4>
         
           <FaFacebookF  size={'20px'}  />  
           <FaInstagram size={'20px' } />
            <FaXTwitter  size={'20px'}  />
           <FaYoutube size={'20px'}  />
          </div>
     
      </div>

      <hr />

      <div className="fb">
        <div className="fline">
          <a href="#">Recalls</a> | 
          <a href="#">Product recycling</a> | 
          <a href="#">Accessibility</a> | 
          <a href="#">India CSR Policy</a> | 
          <a href="#">India Entity Annual Return</a> | 
          <a href="#">Privacy</a> | 
          <a href="#">Terms of use</a> | 
        </div>
        <br />  
        <p className="text-light">
          ©2025 HP Development Company, L.P. The information contained herein is subject to change without notice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;