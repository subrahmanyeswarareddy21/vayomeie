import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const craftSteps = [
  {
    label: 'The Palette',
    title: 'Plants. Minerals. Nothing else.',
    description: 'Indigo leaves, madder root, pomegranate peel, myrobalan, iron-jaggery, and alum. A short, honest list — the same one Indian artisans have used for centuries.',
    bg: 'https://vayomeie.com/assets/img/hero/craft-1.png',
    icon: '🌿',
  },
  {
    label: 'The Process',
    title: '30 to 80 days from plant to garment.',
    description: 'Nine slow steps — soak, mordant, cure, print, dry, wash, boil in copper, brighten with alum, finish. We never compress them. The wait is the work.',
    bg: 'https://vayomeie.com/assets/img/hero/craft-2.png',
    icon: '⏳',
  },
  {
    label: 'The Workshop',
    title: 'Made the slow way, on purpose.',
    description: 'Boiled in copper vessels, dried on grass under direct sun. Equipment that costs more, finishes that last longer, fabric that breathes.',
    bg: 'https://vayomeie.com/assets/img/hero/craft-3.png',
    icon: '🏺',
  },
  {
    label: 'The Wearer',
    title: 'Office at 9. Workshop in your closet.',
    description: 'Built for working women who measure clothing in years, not seasons. Soft on day one, deeper after every wash, hand-down ready in five.',
    bg: 'https://vayomeie.com/assets/img/hero/craft-4.png',
    icon: '✨',
  },
];

export default function OurCraft() {
  const [active, setActive] = useState(0);
  const ref = useReveal(0.1);

  const step = craftSteps[active];
  const next = () => setActive((p) => (p + 1) % craftSteps.length);
  const prev = () => setActive((p) => (p - 1 + craftSteps.length) % craftSteps.length);

  return (
    <section id="our-craft" className="relative py-20 lg:py-28 overflow-hidden min-h-[600px]">
      {/* Background images - crossfade */}
      {craftSteps.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.bg} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-charcoal/80 z-[1]" />
      <div className="absolute inset-0 grain z-[2]" />

      {/* Light blobs */}
      <div className="absolute top-[-50px] left-[20%] w-[300px] h-[300px] light-blob bg-earth z-[3]" style={{ opacity: '.1' }} />
      <div className="absolute bottom-[-50px] right-[10%] w-[250px] h-[250px] light-blob bg-indigo-brand z-[3]" style={{ opacity: '.1' }} />

      <div ref={ref} className="reveal relative z-10 max-w-[900px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[.35em] uppercase text-earth mb-2.5">Heritage & Purpose</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-3">Our Craft</h2>
          <div className="w-12 h-px bg-earth mx-auto mb-4" />
          <p className="text-sm text-white/50 font-light">Why each Vayomeie piece feels different in your hand.</p>
        </div>

        {/* Step tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
          {craftSteps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-[10px] tracking-[.18em] uppercase font-medium border transition-all duration-400 ${
                active === i
                  ? 'bg-white text-charcoal border-white shadow-[0_0_20px_rgba(255,255,255,.15)]'
                  : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content - animated */}
        <div className="text-center" key={active}>
          <div className="text-5xl mb-5 anim-fs">{step.icon}</div>
          <p className="text-[10px] tracking-[.35em] uppercase text-earth mb-3 anim-fs" style={{ animationDelay: '.1s' }}>
            {step.label}
          </p>
          <h3 className="font-serif text-3xl md:text-[2.6rem] font-light text-white mb-6 leading-snug anim-fs" style={{ animationDelay: '.2s' }}>
            {step.title}
          </h3>
          <p className="text-[14px] text-white/65 leading-[1.8] max-w-[520px] mx-auto font-light anim-fs" style={{ animationDelay: '.3s' }}>
            {step.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <button
            onClick={prev}
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {craftSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[3px] rounded-full transition-all duration-400 ${
                  active === i ? 'w-7 bg-earth' : 'w-2.5 bg-white/25 hover:bg-white/40'
                }`}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
