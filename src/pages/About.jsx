import React, { useEffect } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import { Award, ShieldCheck, Music, GlassWater } from 'lucide-react';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: 'Chef Giovanni Russo',
      role: 'Executive Chef',
      bio: 'Trained in Florence, Chef Giovanni brings over 20 years of Michelin-starred experience, crafting Italian masterpieces that preserve historical flavor profiles with modern plates.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Vincenzo "Enzo" Bianchi',
      role: 'Head Mixologist',
      bio: 'An alchemist of spirits, Enzo is renowned for custom botanical syrups, hand-carved ice sphere concepts, and tableside cocktail smoke rituals.',
      image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const values = [
    {
      icon: <Award size={36} />,
      title: 'Premium Ingredients',
      desc: 'From San Marzano tomatoes to aged Prosciutto di Parma, we source exclusively from certified Italian designation estates.'
    },
    {
      icon: <ShieldCheck size={36} />,
      title: 'Royal Ambience',
      desc: 'Step into an atmosphere designed with dark velvet paneling, golden ambient accents, and warm candlelight.'
    },
    {
      icon: <GlassWater size={36} />,
      title: 'Live Bar Artistry',
      desc: 'Our mixology is a performance. Enjoy molecular smoke, custom herb infusions, and aged bourbon barrels.'
    },
    {
      icon: <Music size={36} />,
      title: 'Curated Soundscapes',
      desc: 'Acoustic classical layers on Friday evenings give way to smooth jazz and curated rhythms to elevate your dine.'
    }
  ];

  const ambienceImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="about-page">
      {/* Section 1: Story (Burgundy) */}
      <section className="section bg-burgundy about-story-section">
        <div className="container story-container">
          <div className="story-content">
            <SectionHeading
              subtitle="The Founding"
              title="Our Story & Culinary Creed"
              light={false}
            />
            <p className="story-paragraph">
              Brews & Cuisines Culture was established with a singular vision: to bring the luxury, warmth, and artistic culinary philosophy of Italy to Indore. Inspired by the grand dining rooms of Rome and the high-end lounges of Milan, we created a space where fine dining gracefully fuses with premium nightlife.
            </p>
            <p className="story-paragraph">
              To us, dining is not merely about sustenance; it is a theatrical performance. From our imported volcanic brick oven to our curated sound system, every details is tuned to evoke a feeling of royal escape.
            </p>
          </div>
          <div className="story-featured-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
              alt="Grand Dining Table"
              className="story-featured-image"
            />
            <div className="story-gold-frame"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Values (Ivory) */}
      <section className="section bg-ivory">
        <div className="container">
          <SectionHeading
            subtitle="The Standard"
            title="What Defines Our Culture"
            centered={true}
            light={true}
          />
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-description">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Team (Charcoal) */}
      <section className="section bg-charcoal">
        <div className="container">
          <SectionHeading
            subtitle="The Masters"
            title="Our Artisans & Tastemakers"
            centered={true}
            light={false}
          />
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <div className="team-image-wrapper">
                  <img src={t.image} alt={t.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{t.name}</h3>
                  <span className="team-role">{t.role}</span>
                  <p className="team-bio">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Ambience Ribbon (Emerald) */}
      <section className="section bg-emerald ambience-section">
        <div className="container">
          <SectionHeading
            subtitle="The Space"
            title="A Glance Inside Our Gates"
            centered={true}
            light={false}
          />
          <div className="ambience-ribbon">
            {ambienceImages.map((img, i) => (
              <div key={i} className="ambience-item">
                <img src={img} alt={`Ambience Room ${i+1}`} className="ambience-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
