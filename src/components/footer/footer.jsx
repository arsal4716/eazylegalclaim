import React from 'react';
import '../styles/footer.css';
import footerLogo from '../../assets/logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src={footerLogo} alt='logo' height={90} width={300}/>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
      </div>
      <div className='disclaimer'>
        <p>Legal Disclaimer: eazylegalclaim.com is a free service to assist users in getting legal quotes from legal providers. eazylegalclaim.com is not affiliated with any state or government agency. eazylegalclaim.com is not a legal agency, broker, or attorney referral service. eazylegalclaim.com does not endorse or recommend any participating Third-Party Legal Claim Providers that pay to participate in this advertising.</p>
      </div>
      <hr />
      <p>Copyright © 2024 Eazy Legal Claim | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
