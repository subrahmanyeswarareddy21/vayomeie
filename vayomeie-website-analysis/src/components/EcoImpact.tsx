import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: 'Preserving', label: 'Ancient Craft Traditions', icon: '🏛️' },
  { value: '100%', label: 'Eco-Friendly Colours', icon: '🎨' },
  { value: 'Zero', label: 'Overproduction', icon: '♻️' },
  { value: 'Following', label: "Nature's Way", icon: '🌱' },
];

export default function EcoImpact() {
  const ref = useReveal(0.15);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Video background */}
      <video
        src="https://vayomeie.com/assets/videos/hero-2.mp4"
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/85 z-[1]" />
      <div className="absolute inset-0 grain z-[2]" />
      <div className="absolute inset-0 shimmer-bg z-[3]" style={{ opacity: '.4' }} />

      <div ref={ref} className="reveal relative z-10 max-w-[1100px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group cursor-default"
            >
              <div className="text-3xl mb-3.5 group-hover:scale-125 transition-transform duration-400">
                {stat.icon}
              </div>
              <p className="font-serif text-2xl md:text-3xl text-white font-light mb-1.5 group-hover:text-earth transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-[10px] tracking-[.18em] uppercase text-white/55 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
