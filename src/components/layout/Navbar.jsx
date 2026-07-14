import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import PremiumButton from '../shared/PremiumButton';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Bar & Lounge', path: '/bar-lounge' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Brews & Cuisines <span>Culture</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Action */}
        <div className="navbar-actions-desktop">
          <a href="tel:+917567930426" className="nav-phone-link" title="Call Us">
            <Phone size={18} />
            <span>+91 75679 30426</span>
          </a>
          <PremiumButton variant="solid" href="/reservations">
            Book a Table
          </PremiumButton>
        </div>

        {/* Mobile Action Controls */}
        <div className="navbar-actions-mobile">
          <a href="tel:+917567930426" className="nav-phone-mobile" title="Call Us">
            <Phone size={20} />
          </a>
          <button
            className="navbar-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-drawer ${isOpen ? 'open' : ''}`}>
        <div className="navbar-drawer-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="drawer-cta-wrapper">
            <PremiumButton variant="solid" href="/reservations" className="drawer-cta">
              Book a Table
            </PremiumButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
