import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import PremiumButton from '../shared/PremiumButton';
import './LoungeHighlight.css';

const LoungeHighlight = () => {
  return (
    <section className="section bg-emerald">
      <div className="container lounge-highlight-grid">
        <div className="lounge-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80"
            alt="Premium Bar Ambience"
            className="lounge-image"
          />
          <div className="lounge-gold-border"></div>
        </div>
        <div className="lounge-content">
          <SectionHeading
            subtitle="The Nightlife"
            title="The Royal Lounge Experience"
            light={false}
          />
          <p className="lounge-text">
            As twilight falls, transition into our signature Bar & Lounge. A dimly lit sanctuary where classic mixology is treated as high art. Sip on single-estate reserve wines, or enjoy one of our gold-infused signature cocktails, smoked tableside over hand-carved crystal ice spheres.
          </p>
          <p className="lounge-text">
            From acoustic violin performances to exclusive wine tastings, the lounge at Brews & Cuisines Culture offers an unforgettable night of luxury and leisure.
          </p>
          <div className="lounge-details">
            <div className="detail-item">
              <span className="detail-title">Dress Code</span>
              <span className="detail-desc">Smart Casual / Formal</span>
            </div>
            <div className="detail-item">
              <span className="detail-title">Acoustic Nights</span>
              <span className="detail-desc">Every Friday & Saturday</span>
            </div>
          </div>
          <PremiumButton variant="solid" href="/bar-lounge">
            Step Into the Lounge
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default LoungeHighlight;
