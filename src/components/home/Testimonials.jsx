import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section bg-charcoal">
      <div className="container testimonials-section">
        <SectionHeading
          subtitle="Guest Diaries"
          title="Stories of Indulgence"
          centered={true}
          light={false}
        />

        <div className="testimonials-grid">
          {testimonialsData.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--royal-gold)" color="var(--royal-gold)" />
                ))}
              </div>
              <p className="comment">"{t.comment}"</p>
              <div className="guest-info">
                <h4 className="guest-name">{t.name}</h4>
                <span className="guest-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
