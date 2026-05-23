const SvgIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d={d} /></svg>
);

const igPath = "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";
const fbPath = "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z";
const xPath = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

const shopLinks = ['New Arrivals', 'Maxi Dresses', 'A-Line Dresses', 'Tiered Dresses', 'All Products'];
const companyLinks = ['Our Story', 'Our Craft', 'Raw Materials', 'Journal', 'Contact Us'];
const supportLinks = ['Size Guide', 'Shipping & Returns', 'Care Instructions', 'FAQ', 'Privacy Policy'];

export default function Footer() {
  return (
    <footer className="bg-deep text-white/60">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-earth/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <img
              src="https://vayomeie.com/assets/img/logo/vayomeie_small_logo_HD.png"
              alt="Vayomeie"
              className="h-8 w-auto mb-5 brightness-0 invert opacity-80"
            />
            <p className="text-[12px] leading-[1.8] mb-7 max-w-[280px] font-light">
              Conscious luxury for the modern minimalist. Artisan-crafted ethnic wear using eco-friendly dyes and breathable fabrics.
            </p>
            <div className="flex gap-3">
              {[igPath, fbPath, xPath].map((d, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-white/12 rounded-sm flex items-center justify-center hover:border-earth hover:text-earth hover:bg-earth/5 transition-all duration-300"
                >
                  <SvgIcon d={d} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-[.22em] uppercase text-white/80 mb-5 font-medium">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[12px] font-light hover:text-earth transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[.22em] uppercase text-white/80 mb-5 font-medium">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[12px] font-light hover:text-earth transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] tracking-[.22em] uppercase text-white/80 mb-5 font-medium">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[12px] font-light hover:text-earth transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 font-light tracking-wider">
            © 2025 Vayomeie. All rights reserved. Artisan-crafted with ♥ in India.
          </p>
          <div className="flex gap-6">
            {['Terms', 'Privacy', 'Cookies'].map((l) => (
              <a key={l} href="#" className="text-[10px] text-white/30 hover:text-white/50 transition-colors duration-200 tracking-wider">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
