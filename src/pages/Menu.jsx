import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import MenuItemCard from '../components/menu/MenuItemCard';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Starters', 'Main Course', 'Italian Specialties', 'Desserts'];

  const filteredItems = menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Header Banner */}
      <section className="section bg-charcoal" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            subtitle="The Culinary Art"
            title="L'Arte della Cucina"
            centered={true}
            light={false}
          />
          <p style={{ maxWidth: '600px', margin: '-20px auto 0 auto', color: '#a0a0a0', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Every plate is crafted with raw devotion to classical Italian heritage. Discover hand-rolled pastas, premium cured meats, and decadent desserts made daily.
          </p>
        </div>
      </section>

      {/* Menu List & Selector */}
      <section className="section bg-ivory">
        <div className="container">
          <MenuCategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} dark={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
