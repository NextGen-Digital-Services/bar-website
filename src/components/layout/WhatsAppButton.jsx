import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917567930426?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Brews%20%26%20Cuisines%20Culture"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="whatsapp-icon" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
