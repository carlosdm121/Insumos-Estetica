import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 dark:bg-zinc-950 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Tu Aliado en <span className="text-pink-600 dark:text-pink-500">Insumos de Estética</span> Profesional
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 lg:mx-0">
              Distribuidora mayorista de productos de alta calidad para gabinetes, spas y centros de estética. 
              Envíos a todo el país con la mejor atención personalizada.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link 
                href="#productos" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-pink-600 px-8 text-base font-bold text-white transition-all hover:bg-pink-700 active:scale-95 shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
              >
                Ver Catálogo
              </Link>
              <Link 
                href="#pedido" 
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-pink-600 px-8 text-base font-bold text-pink-600 transition-all hover:bg-pink-50 active:scale-95 dark:hover:bg-pink-900/10"
              >
                Hacer Pedido
              </Link>
            </div>
          </div>
          
          <div className="relative flex-1">
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
                alt="Insumos de Estética"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-pink-200/50 blur-3xl dark:bg-pink-900/20" />
            <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
