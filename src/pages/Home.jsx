import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import SignatureDishes from '../components/home/SignatureDishes';
import LoungeHighlight from '../components/home/LoungeHighlight';
import Testimonials from '../components/home/Testimonials';
import ReservationCTA from '../components/home/ReservationCTA';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <AboutPreview />
      <SignatureDishes />
      <LoungeHighlight />
      <Testimonials />
      <ReservationCTA />
    </>
  );
};

export default Home;
