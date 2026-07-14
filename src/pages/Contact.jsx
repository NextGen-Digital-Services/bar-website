import React, { useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import PremiumButton from '../components/shared/PremiumButton';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* Header Banner (Charcoal) */}
      <section className="section bg-charcoal contact-header-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            subtitle="The Concierge"
            title="Connect With Our Staff"
            centered={true}
            light={false}
          />
          <p className="contact-header-description">
            We are dedicated to providing world-class hospitality. Find our address, opening hours, or drop us a message.
          </p>
        </div>
      </section>

      {/* Main Details and Map (Ivory) */}
      <section className="section bg-ivory">
        <div className="container contact-main-grid">
          {/* Info Card column */}
          <div className="contact-details-wrapper">
            <h3 className="details-card-title">Brews & Cuisines Culture</h3>
            
            <ul className="details-list">
              <li>
                <MapPin className="details-icon" size={24} />
                <div>
                  <h4>Location Address</h4>
                  <p>101 Royal Italian Boulevard, Scheme 78, Indore, MP, India</p>
                </div>
              </li>
              <li>
                <Phone className="details-icon" size={20} />
                <div>
                  <h4>Phone Inquiries</h4>
                  <p><a href="tel:+917567930426">+91 75679 30426</a></p>
                </div>
              </li>
              <li>
                <Mail className="details-icon" size={20} />
                <div>
                  <h4>Electronic Mail</h4>
                  <p><a href="mailto:info@brewscuisinesculture.com">info@brewscuisinesculture.com</a></p>
                </div>
              </li>
            </ul>

            <div className="opening-hours-wrapper">
              <h4>Operating Hours</h4>
              <table className="hours-table">
                <tbody>
                  <tr>
                    <td>Monday - Thursday</td>
                    <td>12:00 PM - 11:30 PM</td>
                  </tr>
                  <tr>
                    <td>Friday - Saturday</td>
                    <td>12:00 PM - 1:00 AM</td>
                  </tr>
                  <tr>
                    <td>Sunday Brunch</td>
                    <td>11:30 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday Dinner</td>
                    <td>5:00 PM - 11:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Map Column */}
          <div className="contact-map-wrapper">
            <iframe
              title="Brews & Cuisines Culture Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5298818818557!2d75.89134371496265!3d22.764299885084922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd2300000001%3A0x632e1858a74ec49b!2sScheme%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1657800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '1px solid var(--royal-gold)', minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Large Concierge Connect CTA (Burgundy) */}
      <section className="section bg-burgundy direct-connect-section">
        <div className="container direct-container">
          <div className="direct-content">
            <SectionHeading
              subtitle="Instant Assistance"
              title="Speak Directly to Our Managers"
              centered={true}
              light={false}
            />
            <p className="direct-text">
              Looking to order catering, rent the lounge for filming, or arrange a VIP guest list? Connect instantly with our management team via Call or WhatsApp.
            </p>
            
            <div className="direct-actions">
              <PremiumButton
                variant="solid"
                href="tel:+917567930426"
                className="direct-btn"
              >
                <Phone size={18} />
                Call Manager
              </PremiumButton>
              <PremiumButton
                variant="outline"
                href="https://wa.me/917567930426?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Brews%20%26%20Cuisines%20Culture"
                external={true}
                className="direct-btn"
              >
                <MessageCircle size={18} />
                WhatsApp Message
              </PremiumButton>
            </div>

            <div className="direct-socials">
              <span>Follow Our Journey:</span>
              <div className="social-links-row">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
