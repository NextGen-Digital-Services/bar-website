import React from 'react';
import './MenuItemCard.css';

const MenuItemCard = ({ item, dark = true }) => {
  return (
    <div className={`menu-item-card ${dark ? 'theme-dark' : 'theme-light'}`}>
      <div className="menu-item-image-wrapper">
        <img src={item.image} alt={item.name} className="menu-item-image" />
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item.name}</h3>
          <span className="menu-item-price">{item.price}</span>
        </div>
        <div className="menu-item-dots-divider"></div>
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
