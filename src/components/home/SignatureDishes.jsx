import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import PremiumButton from '../shared/PremiumButton';
import { menuData } from '../../data/menuData';
import './SignatureDishes.css';

const SignatureDishes = () => {
  // Select 6 premium showcase dishes
  const signatureIds = ['s2', 'm1', 'm2', 'i1', 'i3', 'd1'];
  const signatures = menuData.filter((item) => signatureIds.includes(item.id));

  return (
    <section className="section bg-ivory">
      <div className="container signature-section">
        <SectionHeading
          subtitle="Chef's Selection"
          title="Our Signature Creations"
          centered={true}
          light={true}
        />

        <div className="signature-grid">
          {signatures.map((dish) => (
            <div key={dish.id} className="signature-card">
              <div className="dish-image-wrapper">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <span className="dish-price">{dish.price}</span>
              </div>
              <div className="dish-info">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="signature-actions">
          <PremiumButton variant="solid" href="/menu">
            View Full Menu
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
