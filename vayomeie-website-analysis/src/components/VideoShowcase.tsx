import { useReveal } from '../hooks/useReveal';

const clips = [
  { src: 'https://vayomeie.com/assets/videos/hero.mp4',   label: 'Brown Floral' },
  { src: 'https://vayomeie.com/assets/videos/hero-2.mp4',  label: 'Red-Cream' },
  { src: 'https://vayomeie.com/assets/videos/hero-3.mp4',  label: 'Teal Blue' },
  { src: 'https://vayomeie.com/assets/videos/hero-5.mp4',  label: 'Collection' },
];

export default function VideoShowcase() {
  const ref = useReveal(0.1);

  return (
    <section className="py-16 lg:py-24 bg-warm relative overflow-hidden">
      {/* Light blobs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] light-blob bg-earth" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] light-blob bg-rose" />

      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[.35em] uppercase text-earth mb-2.5">In Motion</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-deep">See It Move</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {clips.map((clip, i) => (
            <div
              key={i}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer glow-pulse"
              style={{ animationDelay: `${i * .6}s` }}
            >
              <video
                src={clip.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-xs tracking-[.15em] uppercase font-medium">{clip.label}</p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/40 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-white/0 group-hover:border-white/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
