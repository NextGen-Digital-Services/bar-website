import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''} ${light ? 'light-mode' : ''}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2 className="title">{title}</h2>
      <div className="divider">
        <span className="gold-line"></span>
        <span className="gold-diamond">♦</span>
        <span className="gold-line"></span>
      </div>
    </div>
  );
};

export default SectionHeading;
