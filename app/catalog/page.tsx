import { ProductCard } from "@/components/ProductCard";

const CATALOG_PRODUCTS = [
  {
    id: "chair-01",
    name: "Nara Lounge Chair",
    category: "Seating",
    price: 850,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lamp-01",
    name: "Akari Floor Lamp",
    category: "Lighting",
    price: 420,
    image: "https://images.unsplash.com/photo-1507473888900-52a19b8a3d6b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sofa-01",
    name: "Cloud Sectional",
    category: "Living",
    price: 3200,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "table-01",
    name: "Oak Dining Table",
    category: "Dining",
    price: 1800,
    image: "https://images.unsplash.com/photo-1577140917170-285929dfe55c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vase-01",
    name: "Ceramic Vase Set",
    category: "Decor",
    price: 120,
    image: "https://images.unsplash.com/photo-1581783342308-f792ca11df53?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "shelf-01",
    name: "Minimalist Shelving",
    category: "Storage",
    price: 550,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop"
  },
   {
    id: "chair-02",
    name: "Velvet Armchair",
    category: "Seating",
    price: 950,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lamp-02",
    name: "Brass Table Lamp",
    category: "Lighting",
    price: 280,
    image: "https://images.unsplash.com/photo-1513506003013-d3d6233b4991?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function CatalogPage() {
  return (
    <div className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">The Collection</h1>
        <p className="text-stone-500 text-lg">
          Explore our thoughtfully curated selection of furniture and decor, 
          designed to bring balance and beauty to your home.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {CATALOG_PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

