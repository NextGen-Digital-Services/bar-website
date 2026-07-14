import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import MenuItemCard from '../components/menu/MenuItemCard';
import { barMenuData } from '../data/barMenuData';
import './BarLounge.css';

const BarLounge = () => {
  const [activeCategory, setActiveCategory] = useState('Signature Cocktails');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Signature Cocktails', 'Classic Cocktails', 'Mocktails', 'Wines & Spirits'];

  const filteredItems = barMenuData.filter((item) => item.category === activeCategory);

  return (
    <div className="bar-lounge-page">
      {/* Header Banner (Burgundy) */}
      <section className="section bg-burgundy bar-header-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            subtitle="The Cellar & Counter"
            title="Cocktails, Cellars & Craft"
            centered={true}
            light={false}
          />
          <p className="bar-header-description">
            Step into a world of sensory alchemy. From smoke-infused vintage bourbons to organic botanical mocktails, each glass represents custom curation.
          </p>
        </div>
      </section>

      {/* Drinks Selector & List (Charcoal) */}
      <section className="section bg-charcoal">
        <div className="container">
          <MenuCategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div className="drinks-grid">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} dark={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Lounge Details (Emerald) */}
      <section className="section bg-emerald">
        <div className="container lounge-culture-grid">
          <div className="lounge-culture-content">
            <SectionHeading
              subtitle="Lounge Culture"
              title="Acoustics & Dress Code"
              light={false}
            />
            <p className="culture-text">
              Our lounge is a curated ecosystem designed for sophisticated nights. Enjoy live jazz ensembles on Friday nights and guest vinyl DJs spinning deep groove ambient sets every Saturday.
            </p>
            <div className="culture-block">
              <h4 className="culture-block-title">Dress Code Policy</h4>
              <p className="culture-block-desc">
                To maintain our elegant atmosphere, we enforce a strict smart-casual dress code. Tailored shorts are permitted during brunch sessions, but athletic wear, tank tops, and beach sandals are not allowed in the evening.
              </p>
            </div>
            <div className="culture-block">
              <h4 className="culture-block-title">Table Reservations</h4>
              <p className="culture-block-desc">
                Lounge bar counter seating is open to walk-ins. However, our plush velvet booth reservations require a minimum spending limit on weekends. Contact our reservations desk for custom bookings.
              </p>
            </div>
          </div>
          <div className="lounge-culture-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=800&q=80"
              alt="Sophisticated Mixology Session"
              className="culture-image"
            />
            <div className="culture-gold-border"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BarLounge;
