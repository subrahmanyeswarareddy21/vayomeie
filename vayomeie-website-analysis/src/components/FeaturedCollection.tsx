import { useState, useEffect, useCallback } from 'react';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function ProductCard({ product }: { product: typeof products[0] }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) { setImgIdx(0); return; }
    const t = setInterval(() => {
      setImgIdx((p) => (p + 1) % product.images.length);
    }, 1200);
    return () => clearInterval(t);
  }, [hovering, product.images.length]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const idx = Math.min(Math.floor(x * product.images.length), product.images.length - 1);
      setImgIdx(idx);
    },
    [product.images.length]
  );

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group product-card block"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Image area */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-sand/40 mb-3.5"
        onMouseMove={handleMouseMove}
      >
        {/* All images stacked */}
        <div className="img-stack absolute inset-0">
          {product.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={product.name}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover ${
                i === imgIdx
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-[1.03]'
              }`}
            />
          ))}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-[3]" />

        {/* View button */}
        <div className="absolute inset-0 flex items-center justify-center z-[4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm text-charcoal text-[10px] tracking-[.18em] uppercase font-medium shadow-lg hover:bg-white transition-colors">
            View Product
            <ArrowRight size={12} />
          </span>
        </div>

        {/* Image position dots */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-[4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.images.map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === imgIdx ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Sale badge */}
        <div className="absolute top-3 left-3 z-[4]">
          <span className="px-2.5 py-1 bg-madder text-white text-[9px] tracking-[.15em] uppercase font-medium">
            Sale
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="text-[12px] md:text-[13px] text-deep font-medium leading-snug mb-1.5 line-clamp-2 group-hover:text-earth transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2.5">
          <span className="text-bark/50 text-[11px] line-through">{product.originalPrice}</span>
          <span className="text-deep text-[14px] font-semibold">{product.salePrice}</span>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedCollection() {
  const ref = useReveal(0.08);

  return (
    <section id="collections" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Light blobs */}
      <div className="absolute top-20 left-[-100px] w-[350px] h-[350px] light-blob bg-rose" />
      <div className="absolute bottom-20 right-[-80px] w-[300px] h-[300px] light-blob bg-earth" />

      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[.35em] uppercase text-earth mb-2.5">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-light text-deep mb-3">
            Featured Collection
          </h2>
          <div className="w-12 h-px bg-earth mx-auto mb-4" />
          <p className="text-sm text-bark font-light">Handpicked pieces crafted with intention</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <a
            href="https://vayomeie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 border border-charcoal text-charcoal text-[11px] tracking-[.22em] uppercase font-medium hover:bg-charcoal hover:text-white transition-all duration-400"
          >
            View All Products
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
