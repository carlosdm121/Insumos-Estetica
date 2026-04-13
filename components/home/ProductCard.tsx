import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0" />
      </div>
      
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Mayorista</span>
              <span className="text-xl font-black text-pink-600 dark:text-pink-500">
                ${product.wholesalePrice.toLocaleString('es-AR')}
              </span>
            </div>
            <button className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-pink-900/30 dark:hover:text-pink-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
