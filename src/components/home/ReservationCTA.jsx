import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import PremiumButton from '../shared/PremiumButton';
import './ReservationCTA.css';

const ReservationCTA = () => {
  return (
    <section className="section bg-burgundy reservation-cta-section">
      <div className="container r-cta-container">
        <div className="r-cta-content">
          <SectionHeading
            subtitle="Secure Your Experience"
            title="Reserve Your Table Tonight"
            centered={true}
            light={false}
          />
          <p className="r-cta-text">
            Indulge in a royal evening of exceptional Italian cuisine, fine wines, and custom cocktail mixology. Space is strictly limited — book your table online or connect with our concierge directly.
          </p>

          <div className="r-cta-buttons">
            <PremiumButton variant="solid" href="/reservations">
              Reserve Online
            </PremiumButton>
            
            <PremiumButton
              variant="outline"
              href="tel:+917567930426"
              className="r-cta-call"
            >
              <Phone size={18} />
              Call Now
            </PremiumButton>

            <PremiumButton
              variant="outline"
              href="https://wa.me/917567930426?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Brews%20%26%20Cuisines%20Culture"
              external={true}
              className="r-cta-wa"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
