import { useReveal } from '../hooks/useReveal';

const materials = [
  {
    name: 'Indigo',
    description: 'A blue that deepens with every wash.',
    image: 'https://vayomeie.com/assets/img/raw-materials/indigo.jpg',
    gradient: 'from-[#2B4570]/90',
  },
  {
    name: 'Madder Root',
    description: 'Brick reds, fixed by alum.',
    image: 'https://vayomeie.com/assets/img/raw-materials/madder.jpg',
    gradient: 'from-[#9B3B3B]/90',
  },
  {
    name: 'Myrobalan',
    description: 'The mordant that holds every colour in place.',
    image: 'https://vayomeie.com/assets/img/raw-materials/myrobalan.jpg',
    gradient: 'from-[#8B7355]/90',
  },
  {
    name: 'Pomegranate Peel',
    description: 'A soft, sun-warm yellow.',
    image: 'https://vayomeie.com/assets/img/raw-materials/pomegranate.jpg',
    gradient: 'from-[#C4882E]/90',
  },
  {
    name: 'Iron & Jaggery',
    description: 'Where our greys and blacks come from.',
    image: 'https://vayomeie.com/assets/img/raw-materials/iron-jaggery.jpg',
    gradient: 'from-[#1A1A1A]/90',
  },
  {
    name: 'Alum',
    description: 'Mineral. Brightens reds. Locks in everything.',
    image: 'https://vayomeie.com/assets/img/raw-materials/alum.jpg',
    gradient: 'from-[#6B6B6B]/90',
  },
];

export default function RawMaterials() {
  const ref = useReveal(0.1);

  return (
    <section id="raw-materials" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] light-blob bg-indigo-brand" />

      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[.35em] uppercase text-earth mb-2.5">From the Earth</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-light text-deep mb-3">
            Raw Materials
          </h2>
          <div className="w-12 h-px bg-earth mx-auto mb-4" />
          <p className="text-sm text-bark font-light max-w-lg mx-auto">
            Plants, peels, and minerals — the entire dye stack behind every Vayomeie garment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {materials.map((mat, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={mat.image}
                alt={mat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.15]"
              />
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${mat.gradient} to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
              />
              {/* Subtle inner border glow on hover */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500 z-[2]" />

              {/* Text */}
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 z-[3]">
                <h3 className="font-serif text-xl md:text-2xl font-light text-white mb-1.5 group-hover:translate-y-0 transition-transform duration-400">
                  {mat.name}
                </h3>
                <p className="text-[12px] text-white/70 font-light opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-75">
                  {mat.description}
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-all duration-500 z-[2]" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/0 group-hover:border-white/30 transition-all duration-500 z-[2]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
