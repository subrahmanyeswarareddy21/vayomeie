const items = [
  'Eco-Friendly Dyes',
  'Breathable Fabrics',
  'Artisan-Driven',
  'Modern Ethnic',
  'Size-Inclusive',
  'Zero Overproduction',
];

export default function MarqueeStrip() {
  const set = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-charcoal py-3.5 overflow-hidden">
      <div className="shimmer-bg absolute inset-0 z-[1]" />
      <div className="animate-marquee flex whitespace-nowrap relative z-[2]">
        {set.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[10px] tracking-[.28em] uppercase text-white/85 font-light mx-5">
              {item}
            </span>
            <span className="text-earth/70 text-[8px] mx-1">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
