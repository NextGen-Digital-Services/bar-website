import React, { useEffect } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page">
      {/* Header Banner (Charcoal) */}
      <section className="section bg-charcoal" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            subtitle="The Aesthetics"
            title="Visual Majesty"
            centered={true}
            light={false}
          />
          <p style={{ maxWidth: '600px', margin: '-20px auto 0 auto', color: '#a0a0a0', fontSize: '1.05rem', lineHeight: '1.8' }}>
            A photo journal of candlelight fine dining, handcrafted cocktails, velvet lounge booths, and curated live celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Section (Ivory) */}
      <section className="section bg-ivory">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
