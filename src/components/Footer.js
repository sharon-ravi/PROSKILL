// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

// Import the specific icons from react-icons
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const paymentIcons = [
    { name: 'American Express', url: 'https://cdn.worldvectorlogo.com/logos/american-express-1.svg', isSvg: true },
    { name: 'Mastercard', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mastercard_logo.svg/1280px-Mastercard_logo.svg.png', isSvg: false },
    { name: 'PayPal', url: 'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg', isSvg: true },
    { name: 'Stripe/Card', url: 'https://www.svgrepo.com/show/384296/credit-card-identification-card-payment.svg', isSvg: true },
    { name: 'Visa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Visa_Logo.svg/1280px-Visa_Logo.svg.png', isSvg: false },
    { name: 'afterpay', url: 'https://static.afterpay.com/integration/logo-afterpay-colour.svg', isSvg: true, customClass: 'afterpay-logo-custom' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements['email-subscribe'].value;
    alert(`Subscribing with: ${email}`);
    e.target.reset();
  };

  return (
    <footer className="footer-modern-dark">
      <div className="footer-modern-content-wrapper">
        <div className="footer-modern-main">
          <div className="footer-modern-column subscribe-section">
            <h3>Subscribe</h3>
            <p>Stay informed of the latest news and offers from Proskill Workwear Australia.</p>
            <form onSubmit={handleSubmit} className="subscribe-form" id="newsletter-subscribe-form">
              <div className="form-group">
                <label htmlFor="email-subscribe" className="sr-only">Email Address</label>
                <input type="email" id="email-subscribe" name="email-subscribe" placeholder="Email Address" required />
              </div>
              <div className="recaptcha-placeholder">
                <input type="checkbox" id="robot-check" />
                <label htmlFor="robot-check" style={{marginLeft: '8px', fontSize: '14px', cursor: 'pointer'}}>I'm not a robot</label>
                <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA logo"
                    style={{ verticalAlign: 'middle', marginLeft: 'auto', height: '32px' }}
                />
              </div>
              {/* GOOGLE RATING BADGE PLACEHOLDER REMOVED FROM HERE */}
            </form>
          </div>

          <div className="footer-modern-column links-section">
            <h3>Our Range</h3>
            <ul>
              <li><Link to="/category/jackets">Jackets</Link></li>
              <li><Link to="/category/vests">Vests</Link></li>
              <li><Link to="/category/jumpers">Jumpers</Link></li>
              <li><Link to="/category/t-shirts">T-shirts</Link></li>
              <li><Link to="/category/polo-shirts">Polo shirts</Link></li>
              <li><Link to="/category/pants">Pants</Link></li>
              <li><Link to="/category/shorts">Shorts</Link></li>
              <li><Link to="/category/bib-braces">Bib & braces</Link></li>
              <li><Link to="/category/overalls">Overalls</Link></li>
              <li><Link to="/category/accessories">Accessories</Link></li>
              <li><Link to="/shop">View All Categories</Link></li>
            </ul>
          </div>

          <div className="footer-modern-column links-section">
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/delivery">Delivery</Link></li>
              <li><Link to="/returns-exchanges">Returns & Exchanges</Link></li>
              <li><Link to="/measurement-chart">Measurement Chart</Link></li>
              <li><Link to="/retailers">Retailers</Link></li>
              <li><Link to="/smartstore-distributor">Smartstore Distributor</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-modern-socials-cta">
            <div className="socials-group">
                <h3>Socials</h3>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
            <button type="submit" form="newsletter-subscribe-form" className="subscribe-button">
                STAY UP TO DATE
            </button>
        </div>
      </div>

      <div className="footer-modern-bottom-bar">
        <div className="footer-modern-bottom-content">
          <div className="copyright-links">
            <span>© {new Date().getFullYear()} Proskill Workwear Australia</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
          <div className="payment-icons-modern">
            {paymentIcons.map(icon => (
              <img
                key={icon.name}
                src={icon.url}
                alt={icon.name}
                title={icon.name}
                className={`${icon.isSvg ? 'payment-svg-icon' : ''} ${icon.customClass || ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;