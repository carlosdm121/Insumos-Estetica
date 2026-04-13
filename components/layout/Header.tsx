import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-pink-600 dark:text-pink-500">
              YEL <span className="text-gray-900 dark:text-white">Insumos</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#productos" className="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400">
            Productos
          </Link>
          <Link href="#pagos" className="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400">
            Medios de Pago
          </Link>
          <Link href="#pedido" className="text-sm font-medium text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400">
            Hacer Pedido
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="#pedido" 
            className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-pink-700 active:scale-95 shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
