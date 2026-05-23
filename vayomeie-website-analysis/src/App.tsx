import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import VideoShowcase from './components/VideoShowcase';
import FeaturedCollection from './components/FeaturedCollection';
import USPCards from './components/USPCards';
import RawMaterials from './components/RawMaterials';
import OurCraft from './components/OurCraft';
import EcoImpact from './components/EcoImpact';
import Journal from './components/Journal';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  // Global scroll-reveal observer for any .reveal elements not using the hook
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <VideoShowcase />
      <FeaturedCollection />
      <USPCards />
      <RawMaterials />
      <OurCraft />
      <EcoImpact />
      <Journal />
      <Newsletter />
      <Footer />
    </div>
  );
}
