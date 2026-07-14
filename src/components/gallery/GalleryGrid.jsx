import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../../data/galleryData';
import './GalleryGrid.css';

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tabs = ['All', 'Food', 'Interiors', 'Lounge/Bar', 'Events'];

  const filteredItems = activeTab === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-container">
      {/* Category Selection Tabs */}
      <div className="gallery-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-image-wrapper">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <div className="gallery-hover-overlay">
                <span className="gallery-hover-title">{item.title}</span>
                <span className="gallery-hover-category">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={32} />
          </button>

          <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous Image">
            <ChevronLeft size={40} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3>{filteredItems[lightboxIndex].title}</h3>
              <p>{filteredItems[lightboxIndex].category}</p>
            </div>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next Image">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
