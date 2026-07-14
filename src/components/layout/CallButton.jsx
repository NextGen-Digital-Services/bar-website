import React from 'react';
import { Phone } from 'lucide-react';
import './CallButton.css';

const CallButton = () => {
  return (
    <a
      href="tel:+917567930426"
      className="call-float"
      aria-label="Call Brews & Cuisines Culture"
    >
      <Phone size={24} className="call-icon" />
    </a>
  );
};

export default CallButton;
