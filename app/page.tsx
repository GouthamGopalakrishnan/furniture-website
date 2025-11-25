import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: "chair-01",
    name: "Nara Lounge Chair",
    category: "Seating",
    price: 850,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lamp-01",
    name: "Akari Floor Lamp",
    category: "Lighting",
    price: 420,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sofa-01",
    name: "Cloud Sectional",
    category: "Living",
    price: 3200,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-stone-200 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop"
          alt="Minimalist living room"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight mb-8 drop-shadow-sm">
            Simplicity is the <br/> ultimate sophistication.
          </h1>
          <Link href="/catalog">
            <Button size="lg" className="bg-white text-black hover:bg-stone-100 hover:text-black border-none">
              Discover Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-olive)] mb-4">The Philosophy</h2>
        <p className="text-2xl md:text-4xl font-serif leading-tight text-[var(--foreground)]">
          We believe in furniture that doesn&apos;t just fill a room, but shapes an atmosphere. 
          Our pieces are crafted with natural materials and honest design principles.
        </p>
      </section>

      {/* Featured Collection */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Curated Selection</h2>
          <Link href="/catalog" className="hidden md:block text-sm border-b border-black pb-1 hover:text-[var(--accent-clay)] hover:border-[var(--accent-clay)] transition-colors">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/catalog">
            <Button variant="outline" className="w-full">View All</Button>
          </Link>
        </div>
      </section>

      {/* Editorial / Feature */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-stone-100">
             <Image
              src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=1000&auto=format&fit=crop"
              alt="Artisan crafting furniture"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start md:pl-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Crafted for Life</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                In a world of fast furniture, we choose to slow down. Each piece in our collection 
                tells a story of skilled hands and timeless materials.
              </p>
              <p>
                From sustainable oak to hand-woven textiles, we source materials that age gracefully, 
                becoming more beautiful with time and use.
              </p>
            </div>
            <Link href="/about" className="mt-8">
              <Button variant="outline">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
