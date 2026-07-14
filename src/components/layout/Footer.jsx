import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-charcoal">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              Brews & Cuisines <span>Culture</span>
            </Link>
            <p className="footer-tagline">
              An ode to timeless Italian flavors, handcrafted mixology, and royal culinary indulgence. Step into a world of pure sensory sophistication.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/bar-lounge">Bar & Lounge</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="footer-col">
            <h3 className="footer-title">Opening Hours</h3>
            <ul className="footer-hours">
              <li>
                <span className="day">Monday - Thursday</span>
                <span className="time">12:00 PM - 11:30 PM</span>
              </li>
              <li>
                <span className="day">Friday - Saturday</span>
                <span className="time">12:00 PM - 1:00 AM</span>
              </li>
              <li>
                <span className="day">Sunday Brunch</span>
                <span className="time">11:30 AM - 4:00 PM</span>
              </li>
              <li>
                <span className="day">Sunday Dinner</span>
                <span className="time">5:00 PM - 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="footer-col contact-col">
            <h3 className="footer-title">Get in Touch</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={22} className="gold-icon" />
                <span>101 Royal Italian Boulevard, Scheme 78, Indore, MP, India</span>
              </li>
              <li>
                <Phone size={18} className="gold-icon" />
                <a href="tel:+917567930426">+91 75679 30426</a>
              </li>
              <li>
                <Mail size={18} className="gold-icon" />
                <a href="mailto:info@brewscuisinesculture.com">info@brewscuisinesculture.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Brews & Cuisines Culture. All Rights Reserved.
          </p>
          <p className="credit">
            Designed & Powered by <a href="https://nextgendigital.services" target="_blank" rel="noopener noreferrer">NextGen Digital Services</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
