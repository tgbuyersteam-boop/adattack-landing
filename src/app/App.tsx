import { OfferHero } from './components/OfferHero';
import { About } from './components/About';
import { Offer } from './components/Offer';
import { Portfolio } from './components/Portfolio';
import { MiniPortfolio } from './components/MiniPortfolio';
import { Footer } from './components/Footer';
import { FacebookPixel } from './components/FacebookPixel';
import { useState, useEffect } from 'react';

// AdAttack Landing Page
export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate position for the red glow based on scroll (moves down as user scrolls)
  const glowPosition = Math.min(10 + (scrollY / 8), 90);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      <FacebookPixel />
      
      {/* Animated red glow that follows scroll */}
      <div 
        className="fixed inset-0 pointer-events-none transition-all duration-500 ease-out z-0"
        style={{
          background: `radial-gradient(circle 800px at 50% ${glowPosition}%, rgba(220,38,38,0.25), transparent 60%)`
        }}
      ></div>
      
      {/* Static ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-600/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-600/5 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <MiniPortfolio />
        <About />
        <Offer />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}