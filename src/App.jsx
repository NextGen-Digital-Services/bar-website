import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import CallButton from './components/layout/CallButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import BarLounge from './pages/BarLounge';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';

// Scroll Restoration Utility
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="main-content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bar-lounge" element={<BarLounge />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
