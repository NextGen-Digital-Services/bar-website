import React from 'react';
import { motion } from 'framer-motion';
import PremiumButton from '../shared/PremiumButton';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.span
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          An Italian-Inspired Gastronomic Haven
        </motion.span>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Fine Dining <br />Meets Royal Nightlife
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience an exquisite journey of classical Italian cuisine, hand-selected vintage wines, and artisanal mixology in an atmosphere steeped in royal indulgence.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PremiumButton variant="solid" href="/reservations">
            Book a Table
          </PremiumButton>
          <PremiumButton variant="outline" href="/menu">
            View Menu
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
