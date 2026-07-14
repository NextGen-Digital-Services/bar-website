import React from 'react';
import './MenuCategoryTabs.css';

const MenuCategoryTabs = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="category-tabs-container">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryTabs;
