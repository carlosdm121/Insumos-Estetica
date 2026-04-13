import { ProductCard } from './ProductCard';
import { Product } from '@/types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kit de Limpieza Facial Profunda',
    description: 'Incluye leche de limpieza, tónico equilibrante y crema hidratante con ácido hialurónico.',
    wholesalePrice: 15400,
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Serum de Vitamina C Pura',
    description: 'Potente antioxidante que ilumina la piel y estimula la producción de colágeno. Uso profesional.',
    wholesalePrice: 8900,
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Máscara Led Pro 7 Colores',
    description: 'Tratamiento de fototerapia para diversos problemas de la piel. Recargable y ergonómica.',
    wholesalePrice: 42500,
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Pack 50 Algodones Laminados',
    description: 'Algodón 100% puro, no deja pelusa. Ideal para retirar maquillaje y aplicación de tónicos.',
    wholesalePrice: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Espátula Ultrasónica Skin Scrubber',
    description: 'Limpieza profunda de poros, exfoliación y penetración de activos por ultrasonido.',
    wholesalePrice: 18700,
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Gel Neutro Conductor 5kg',
    description: 'Gel de alta viscosidad para aparatología: radiofrecuencia, cavitación y depilación láser.',
    wholesalePrice: 12600,
    imageUrl: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
  },
];

export function ProductGrid() {
  return (
    <section id="productos" className="w-full bg-white py-20 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Nuestros <span className="text-pink-600 dark:text-pink-500">Productos Destacados</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Seleccionamos los mejores insumos del mercado para garantizar resultados profesionales en cada tratamiento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            ¿Buscas algo específico? <span className="text-pink-600 dark:text-pink-500 cursor-pointer hover:underline">Consúltanos por el catálogo completo</span>
          </p>
        </div>
      </div>
    </section>
  );
}
