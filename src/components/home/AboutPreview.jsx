import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import PremiumButton from '../shared/PremiumButton';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="section bg-burgundy">
      <div className="container about-preview-grid">
        <div className="about-preview-content">
          <SectionHeading
            subtitle="Our Heritage"
            title="A Legacy of Elegance and Flavor"
            light={false}
          />
          <p className="about-text">
            Brews & Cuisines Culture is born from a passion for authentic Italian culinary heritage, merged with the high-octane energy of a modern royal lounge. Every plate we serve represents a curated journey across Italy, utilizing imported heirloom ingredients and traditional slow-cooking methods.
          </p>
          <p className="about-text">
            Step beyond the dining room into our signature bar lounge, where crystal decanters meet smoked oak chips, creating an unparalleled sensory night out.
          </p>
          <PremiumButton variant="outline" href="/about">
            Read Our Story
          </PremiumButton>
        </div>
        <div className="about-preview-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
            alt="Fine Italian Plating"
            className="about-preview-image"
          />
          <div className="image-gold-border"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
