import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-[var(--background)] sticky top-0 z-50 border-b border-stone-200">
      <Link href="/" className="text-2xl font-serif font-bold tracking-tighter hover:text-[var(--accent-clay)] transition-colors">
        Kanso.
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/catalog" className="text-sm uppercase tracking-widest hover:text-[var(--accent-olive)] transition-colors">
          Collection
        </Link>
        <Link href="/about" className="text-sm uppercase tracking-widest hover:text-[var(--accent-olive)] transition-colors">
          Studio
        </Link>
        <Link href="/contact" className="text-sm uppercase tracking-widest hover:text-[var(--accent-olive)] transition-colors">
          Connect
        </Link>
      </div>

      <div className="flex gap-4">
         <Link href="/catalog" className="hidden md:block text-sm font-medium border-b border-black pb-0.5 hover:border-[var(--accent-clay)] hover:text-[var(--accent-clay)] transition-colors">
           Shop Now
         </Link>
         {/* Mobile menu placeholder */}
         <button className="md:hidden">
           <span className="block w-6 h-0.5 bg-black mb-1"></span>
           <span className="block w-6 h-0.5 bg-black"></span>
         </button>
      </div>
    </nav>
  );
};

