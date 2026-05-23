import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Eco-Friendly Colours: How We Dye Without Harming the Earth',
    excerpt: 'A deep dive into the chemistry and craft behind natural dyes — from indigo vats to madder root baths.',
    category: 'Craft',
    date: 'Jan 2025',
    image: 'https://vayomeie.com/assets/img/hero/hero-4.jpg',
  },
  {
    title: 'The Perfect Saree Gift: A Guide to Gifting Handloom',
    excerpt: 'How to choose the right handloom piece for someone who values quality and heritage.',
    category: 'Style',
    date: 'Dec 2024',
    image: 'https://vayomeie.com/assets/img/blog/saree-gift-set.jpg',
  },
  {
    title: 'How to Build a Conscious Wardrobe: 5 Simple Steps',
    excerpt: 'Small, intentional shifts that make a real difference — for your closet and the planet.',
    category: 'Sustainability',
    date: 'Nov 2024',
    image: 'https://vayomeie.com/assets/img/blog/lifestyle-friends.jpg',
  },
];

export default function Journal() {
  const ref = useReveal(0.1);

  return (
    <section id="journal" className="py-20 lg:py-28 bg-warm relative overflow-hidden">
      <div className="absolute top-0 right-[-100px] w-[350px] h-[350px] light-blob bg-rose" />

      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[.35em] uppercase text-earth mb-2.5">Stories & Insights</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-deep mb-3">
            From the Journal
          </h2>
          <div className="w-12 h-px bg-earth mx-auto mb-4" />
          <p className="text-sm text-bark font-light">Stories of craft, sustainability, and style</p>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group cursor-pointer bg-cream/50 rounded-xl overflow-hidden hover:shadow-[0_8px_40px_rgba(196,168,130,.12)] transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-[2]">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-charcoal text-[9px] tracking-[.2em] uppercase font-medium rounded-sm">
                    {post.category}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 z-[2] opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-charcoal" />
                  </div>
                </div>
              </div>

              <div className="p-5 pb-6">
                <p className="text-[10px] text-bark/60 uppercase tracking-wider mb-2.5">{post.date}</p>
                <h3 className="font-serif text-lg font-light text-deep mb-2.5 leading-snug group-hover:text-earth transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[12px] text-bark leading-relaxed font-light">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
