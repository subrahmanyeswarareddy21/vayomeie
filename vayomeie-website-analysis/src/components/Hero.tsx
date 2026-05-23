import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const videos = [
  'https://vayomeie.com/assets/videos/hero.mp4',
  'https://vayomeie.com/assets/videos/hero-2.mp4',
  'https://vayomeie.com/assets/videos/hero-3.mp4',
  'https://vayomeie.com/assets/videos/hero-5.mp4',
];

export default function Hero() {
  const [activeVid, setActiveVid] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
    const t = setInterval(() => setActiveVid((p) => (p + 1) % videos.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[680px] max-h-[1100px] flex items-center justify-center overflow-hidden">
      {/* Video backgrounds */}
      {videos.map((src, i) => (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ${
            i === activeVid ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 z-[1]" />
      <div className="absolute inset-0 grain z-[2]" />

      {/* Light leak effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] light-blob bg-earth z-[1]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] light-blob bg-rose z-[1]" />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-[11px] tracking-[.5em] uppercase text-earth font-medium mb-5 anim-fiu d1">
          Conscious Luxury
        </p>
        <h2 className="font-serif text-[clamp(2.8rem,8vw,6.5rem)] font-light text-white leading-[1.05] mb-7 anim-fiu d2">
          For the Modern<br />Minimalist
        </h2>
        <p className="text-[15px] text-white/75 leading-relaxed max-w-[440px] mx-auto mb-10 font-light anim-fiu d3">
          Eco-friendly dyes. Breathable fabrics. Artisan-crafted ethnic wear that moves with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center anim-fiu d4">
          <a
            href="#collections"
            className="group relative px-9 py-3.5 bg-white text-charcoal text-[11px] tracking-[.22em] uppercase font-medium overflow-hidden transition-transform hover:scale-[1.02] active:scale-[.98]"
          >
            <span className="relative z-10">Shop Collection</span>
            <span className="absolute inset-0 bg-earth scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[11px] tracking-[.22em] uppercase font-medium">Shop Collection</span>
          </a>
          <a
            href="#our-craft"
            className="px-9 py-3.5 border border-white/40 text-white text-[11px] tracking-[.22em] uppercase font-medium hover:bg-white/10 hover:border-white/70 transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Video indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveVid(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === activeVid ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Video ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={22} className="text-white/50" />
      </div>
    </section>
  );
}
