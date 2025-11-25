import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-[#F9F8F6] py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-3xl font-serif mb-6">Aeris.</h3>
          <p className="max-w-xs text-stone-400 font-light leading-relaxed">
            Furniture that breathes life into your space.
            Designing homes with lightness, flow, and modern elegance.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="uppercase tracking-widest text-sm text-stone-500 mb-2">Explore</h4>
          <Link href="/catalog" className="hover:text-[var(--accent-clay)] transition-colors">Collection</Link>
          <Link href="/about" className="hover:text-[var(--accent-clay)] transition-colors">Our Story</Link>
          <Link href="/journal" className="hover:text-[var(--accent-clay)] transition-colors">Journal</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="uppercase tracking-widest text-sm text-stone-500 mb-2">Connect</h4>
          <Link href="/contact" className="hover:text-[var(--accent-clay)] transition-colors">Contact</Link>
          <a href="#" className="hover:text-[var(--accent-clay)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--accent-clay)] transition-colors">Pinterest</a>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-stone-800 text-stone-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Aeris Living. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-300">Privacy</a>
          <a href="#" className="hover:text-stone-300">Terms</a>
        </div>
      </div>
    </footer>
  );
};

