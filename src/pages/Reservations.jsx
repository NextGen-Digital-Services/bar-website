import React, { useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import ReservationForm from '../components/reservations/ReservationForm';
import PremiumButton from '../components/shared/PremiumButton';
import './Reservations.css';

const Reservations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reservations-page">
      {/* Header Banner (Charcoal) */}
      <section className="section bg-charcoal reservations-header-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            subtitle="The Parlor"
            title="Book Your Dining Table"
            centered={true}
            light={false}
          />
          <p className="reservations-header-description">
            Experience our five-star hospitality. Reserve a candlelit table, private booth, or premium bar stool in advance.
          </p>
        </div>
      </section>

      {/* Form Section (Ivory) */}
      <section className="section bg-ivory">
        <div className="container form-layout-container">
          <div className="form-inner-wrapper">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Alternative Concierge Bookings (Burgundy) */}
      <section className="section bg-burgundy instant-bookings-section">
        <div className="container instant-container">
          <div className="instant-content">
            <SectionHeading
              subtitle="Instant Assistance"
              title="Prefer to Book Instantly?"
              centered={true}
              light={false}
            />
            <p className="instant-text">
              Speak directly with our concierge desk to arrange special dietary requests, large banquets exceeding 10 guests, or specific lounge booth placements.
            </p>
            <div className="instant-actions">
              <PremiumButton
                variant="solid"
                href="tel:+917567930426"
                className="instant-btn"
              >
                <Phone size={18} />
                Call Concierge
              </PremiumButton>
              <PremiumButton
                variant="outline"
                href="https://wa.me/917567930426?text=Hi%2C%20I%27d%20like%20to%20book%20a%20table%20for%20tonight"
                external={true}
                className="instant-btn"
              >
                <MessageCircle size={18} />
                WhatsApp Direct
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
