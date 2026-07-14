import React, { useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import EventCard from '../components/events/EventCard';
import PremiumButton from '../components/shared/PremiumButton';
import { eventsData } from '../data/eventsData';
import './Events.css';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="events-page">
      {/* Header Banner (Burgundy) */}
      <section className="section bg-burgundy events-header-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            subtitle="The Experiences"
            title="Gatherings & Acoustic Nights"
            centered={true}
            light={false}
          />
          <p className="events-header-description">
            Join us for curated weekly happenings or design your own bespoke banquet. Live music, masterclasses, and fine dining await.
          </p>
        </div>
      </section>

      {/* Events Grid (Ivory) */}
      <section className="section bg-ivory">
        <div className="container">
          <SectionHeading
            subtitle="Our Schedule"
            title="Weekly & Upcoming Occasions"
            centered={true}
            light={true}
          />
          <div className="events-grid">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Private Events Custom Package (Charcoal) */}
      <section className="section bg-charcoal private-bookings-section">
        <div className="container private-grid">
          <div className="private-content">
            <SectionHeading
              subtitle="Bespoke Celebrations"
              title="Host Your Private Event"
              light={false}
            />
            <p className="private-text">
              From grand corporate dinners and product releases to intimate anniversary receptions, Brews & Cuisines Culture provides a breathtaking backdrop. Our team manages complete event design, custom banquet menus, custom themed cocktails, and live audio layouts.
            </p>
            <p className="private-text">
              Speak directly with our Events Manager to receive customized packages and options for partial or full venue buyouts.
            </p>
            <div className="private-actions">
              <PremiumButton
                variant="solid"
                href="https://wa.me/917567930426?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20a%20private%20event%20at%20Brews%20%26%20Cuisines%20Culture"
                external={true}
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </PremiumButton>
              <PremiumButton
                variant="outline"
                href="tel:+917567930426"
              >
                <Phone size={18} />
                Call Concierge
              </PremiumButton>
            </div>
          </div>
          <div className="private-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
              alt="Bespoke Private Banquet Seating"
              className="private-image"
            />
            <div className="private-gold-border"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
