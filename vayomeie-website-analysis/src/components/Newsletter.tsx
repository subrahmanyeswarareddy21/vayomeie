import { useState } from 'react';
import { Send, Check, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal(0.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Video BG */}
      <video
        src="https://vayomeie.com/assets/videos/hero-3.mp4"
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/88 z-[1]" />
      <div className="absolute inset-0 grain z-[2]" />

      {/* Light blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] light-blob bg-earth z-[3]" style={{ opacity: '.08' }} />

      <div ref={ref} className="reveal relative z-10 max-w-[600px] mx-auto px-5 text-center">
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-earth/15 flex items-center justify-center">
          <Send size={20} className="text-earth" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
          Join the Movement
        </h2>
        <div className="w-12 h-px bg-earth mx-auto mb-5" />
        <p className="text-[13px] text-white/55 max-w-md mx-auto mb-10 leading-relaxed font-light">
          Be the first to know about new drops, artisan stories, and exclusive pre-booking access.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4 anim-fs">
            <div className="w-10 h-10 rounded-full bg-forest/25 flex items-center justify-center">
              <Check size={18} className="text-green-400" />
            </div>
            <p className="text-white text-sm font-light">You're part of the movement now.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/8 border border-white/15 text-white text-sm placeholder-white/30 focus:outline-none focus:border-earth/60 focus:bg-white/12 transition-all duration-300 rounded-sm"
            />
            <button
              type="submit"
              className="group px-7 py-3.5 bg-earth text-white text-[11px] tracking-[.2em] uppercase font-medium hover:bg-bark transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              Subscribe
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-white/25 mt-7 tracking-wider">
          No spam, ever. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
