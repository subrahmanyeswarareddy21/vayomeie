import { useReveal } from '../hooks/useReveal';

const usps = [
  {
    image: 'https://vayomeie.com/assets/img/usp/usp-eco.png',
    title: 'Eco-Friendly Colours',
    description: 'Our colours are kind to the earth — eco-friendly dyes that look vibrant, feel gentle, and leave no trace behind.',
  },
  {
    image: 'https://vayomeie.com/assets/img/usp/usp-breathable.png',
    title: 'Breathable Fabrics',
    description: 'Cotton that feels like a second skin — soft, light, and kind to yours. Suitable for Indian weathers.',
  },
  {
    image: 'https://vayomeie.com/assets/img/usp/usp-silhouette.png',
    title: 'Modern Silhouettes',
    description: 'Daily wear with architectural lines and a modern fit — comfort without sacrificing edge. Heritage craft meets contemporary design.',
  },
];

export default function USPCards() {
  const ref = useReveal(0.15);

  return (
    <section className="py-20 lg:py-28 bg-warm relative overflow-hidden">
      {/* Light blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] light-blob bg-earth" />

      <div ref={ref} className="reveal max-w-[1100px] mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="group text-center p-8 rounded-2xl bg-cream/60 backdrop-blur-sm hover:bg-white hover:shadow-[0_8px_40px_rgba(196,168,130,.15)] transition-all duration-500 cursor-default"
            >
              <div className="w-20 h-20 mx-auto mb-7 relative">
                <div className="absolute inset-0 bg-earth/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
                <img
                  src={usp.image}
                  alt={usp.title}
                  className="relative z-10 w-full h-full object-contain p-3 float group-hover:drop-shadow-lg transition-all duration-500"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              </div>
              <h3 className="font-serif text-[1.4rem] font-light text-deep mb-3 group-hover:text-earth transition-colors duration-300">
                {usp.title}
              </h3>
              <p className="text-[13px] text-bark leading-relaxed font-light">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
