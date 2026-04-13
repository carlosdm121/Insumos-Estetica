export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white px-4 py-12 dark:border-gray-800 dark:bg-black sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold tracking-tight text-pink-600 dark:text-pink-500">
              YEL <span className="text-gray-900 dark:text-white">Insumos</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Distribuidora líder de insumos para estética. Calidad profesional al mejor precio mayorista.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Contacto</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:ventas@yelinsumos.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  ventas@yelinsumos.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5491122334455" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  +54 9 11 2233-4455 (WhatsApp)
                </a>
              </li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Siguenos</h3>
            <div className="flex items-center gap-4">
              {/* Instagram Icon */}
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-all dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-pink-900/30 dark:hover:text-pink-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook Icon */}
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-all dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-pink-900/30 dark:hover:text-pink-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.52 4.398-4.52 1.251 0 2.328.093 2.641.135v3.062h-1.812c-1.419 0-1.694.675-1.694 1.664v2.186h3.391l-.441 3.429h-2.95v8.783h6.035c.733 0 1.325-.593 1.325-1.325v-21.35c0-.732-.592-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} YEL Insumos - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
