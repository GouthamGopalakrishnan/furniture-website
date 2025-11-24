import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, price, image }) => {
  return (
    <Link href={`/catalog/${id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-serif font-medium text-[var(--foreground)] group-hover:text-[var(--accent-clay)] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-stone-500 mt-1">{category}</p>
        </div>
        <p className="text-sm font-medium text-[var(--foreground)]">
          ${price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

