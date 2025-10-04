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
            <li><a href="">Contact HP</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Investor relations</a></li>
            <li><a href="">Sustainable impact</a></li>
            <li><a href="">Newsroom</a></li>
            <li><a href="">Tech Takes</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Ways to buy</h4>
          <ul>
            <li><a href="">Shop online</a></li>
            <li><a href="">HP World Brand exclusive stores</a></li>
            <li><a href="">Call an HP rep</a></li>
            <li><a href="">Find a reseller</a></li>
            <li><a href="">HP Promotions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="">Download drivers</a></li>
            <li><a href="">Support & troubleshooting</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Authorized service providers</a></li>
            <li><a href="">Check repair status</a></li>
            <li><a href="">Featured links</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>HP Partners</h4>
          <ul>
            <li><a href="">HP Amplify Partner Program</a></li>
            <li><a href="">HP Partner Portal</a></li>
            <li><a href="">Developers</a></li>
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