import React from 'react';
import { Calendar } from 'lucide-react';
import PremiumButton from '../shared/PremiumButton';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-image-wrapper">
        <img src={event.image} alt={event.title} className="event-card-image" />
        <div className="event-card-badge">
          <Calendar size={14} />
          <span>{event.type === 'recurring' ? 'Weekly' : 'Special'}</span>
        </div>
      </div>
      <div className="event-card-content">
        <span className="event-card-time">{event.time}</span>
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-description">{event.description}</p>
        <div className="event-card-footer">
          <PremiumButton
            variant="outline"
            href="https://wa.me/917567930426?text=Hi%2C%20I%27d%20like%20to%20reserve%20a%20spot%20for%20the%20Event"
            external={true}
          >
            Reserve Spot
          </PremiumButton>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
