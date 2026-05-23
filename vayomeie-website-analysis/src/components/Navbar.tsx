import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';

const links = ['Collections', 'Our Craft', 'Raw Materials', 'Journal'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const txt = scrolled ? 'text-deep' : 'text-white';
  const txtSub = scrolled ? 'text-bark' : 'text-white/80';

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,.06)]'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[60px] lg:h-[72px]">
          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 -ml-2" aria-label="Menu">
            {menuOpen ? <X size={20} className={txt} /> : <Menu size={20} className={txt} />}
          </button>

          {/* Left links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.slice(0, 2).map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-[11px] tracking-[.22em] uppercase font-medium ${txtSub} hover:${txt} transition-colors relative group`}
              >
                {l}
                <span className={`absolute -bottom-1 left-0 w-0 h-px ${scrolled ? 'bg-earth' : 'bg-white'} group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="https://vayomeie.com/assets/img/logo/vayomeie_small_logo_HD.png"
              alt="Vayomeie"
              className="h-8 lg:h-9 w-auto"
            />
          </a>

          {/* Right links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.slice(2).map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-[11px] tracking-[.22em] uppercase font-medium ${txtSub} hover:${txt} transition-colors relative group`}
              >
                {l}
                <span className={`absolute -bottom-1 left-0 w-0 h-px ${scrolled ? 'bg-earth' : 'bg-white'} group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button aria-label="Search" className={`hidden lg:flex p-2 ${txtSub} hover:${txt} transition-colors`}>
              <Search size={17} strokeWidth={1.6} />
            </button>
            <button aria-label="Wishlist" className={`hidden lg:flex p-2 ${txtSub} hover:${txt} transition-colors`}>
              <Heart size={17} strokeWidth={1.6} />
            </button>
            <button aria-label="Cart" className={`p-2 relative ${txtSub} hover:${txt} transition-colors`}>
              <ShoppingBag size={17} strokeWidth={1.6} />
              <span className="absolute -top-0.5 -right-0.5 w-[15px] h-[15px] bg-madder text-white text-[9px] rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-cream/98' : 'bg-charcoal/95 backdrop-blur-xl'}`}
      >
        <div className="px-6 py-5 space-y-4 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm tracking-[.18em] uppercase font-light ${scrolled ? 'text-deep' : 'text-white/90'}`}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
