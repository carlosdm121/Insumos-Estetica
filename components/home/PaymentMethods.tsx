import { cn } from '@/lib/utils';

interface PaymentLogoProps {
  name: string;
  className?: string;
}

const VisaLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.53 15.5H17.21L18.26 9H16.58L15.53 15.5Z" fill="#1A1F71"/>
    <path d="M21.56 9.12C21.14 8.94 20.48 8.75 19.65 8.75C17.93 8.75 16.71 9.67 16.7 10.98C16.69 11.95 17.57 12.49 18.23 12.81C18.91 13.14 19.14 13.35 19.13 13.65C19.13 14.11 18.59 14.32 18.06 14.32C17.29 14.32 16.84 14.1 16.48 13.94L16.2 13.81L15.9 15.68C16.41 15.92 17.34 16.12 18.3 16.12C20.12 16.12 21.3 15.22 21.31 13.83C21.32 13.04 20.84 12.39 19.66 11.83C18.96 11.48 18.61 11.23 18.62 10.88C18.62 10.57 18.97 10.23 19.7 10.23C20.31 10.23 20.81 10.37 21.19 10.54L21.37 10.63L21.56 9.12Z" fill="#1A1F71"/>
    <path d="M12.42 9L10.78 15.5H12.46L14.1 9H12.42Z" fill="#1A1F71"/>
    <path d="M7.74 9L5.47 13.75L4.54 9.51C4.42 8.94 4.02 8.75 3.51 8.75H0.12L0 9.02C0.69 9.18 1.48 9.45 1.95 9.77C2.24 9.97 2.32 10.15 2.43 10.58L4.04 16.64H5.82L8.54 9H7.74Z" fill="#F7B600"/>
  </svg>
);

const MastercardLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="12" r="7" fill="#EB001B" fillOpacity="0.8" />
    <circle cx="15" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
    <path d="M12 7.74a6.97 6.97 0 0 1 2.31 5.26 6.97 6.97 0 0 1-2.31 5.26 6.97 6.97 0 0 1-2.31-5.26A6.97 6.97 0 0 1 12 7.74z" fill="#FF5F00" />
  </svg>
);

const MercadoPagoLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.5 13.5L13.5 17.5L12 16L14.5 13.5L12 11L13.5 9.5L17.5 13.5ZM6.5 13.5L10.5 9.5L12 11L9.5 13.5L12 16L10.5 17.5L6.5 13.5Z" fill="#009EE3"/>
  </svg>
);

const GoCuotasLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12L8 8L12 12L16 8L20 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 16L8 12L12 16L16 12L20 16" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    <text x="50%" y="22" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#22C55E" className="font-sans">GO CUOTAS</text>
  </svg>
);

const RapiPagoLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#004A99" />
    <path d="M4 8H20V16H4V8Z" fill="#FDD835" />
    <text x="50%" y="14" textAnchor="middle" fontSize="5" fontWeight="black" fill="#004A99" className="font-sans">RAPIPAGO</text>
  </svg>
);

const PagoFacilLogo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#FFD700" />
    <text x="50%" y="13" textAnchor="middle" fontSize="4.5" fontWeight="black" fill="#6A0DAD" className="font-sans">PAGO</text>
    <text x="50%" y="18" textAnchor="middle" fontSize="4.5" fontWeight="black" fill="#6A0DAD" className="font-sans">FÁCIL</text>
  </svg>
);

const PAYMENT_METHODS = [
  { name: 'VISA', component: <VisaLogo /> },
  { name: 'MASTERCARD', component: <MastercardLogo /> },
  { name: 'MERCADOPAGO', component: <MercadoPagoLogo /> },
  { name: 'GO CUOTAS', component: <GoCuotasLogo /> },
  { name: 'RAPIPAGO', component: <RapiPagoLogo /> },
  { name: 'PAGO FACIL', component: <PagoFacilLogo /> },
];

export function PaymentMethods() {
  return (
    <section id="pagos" className="w-full bg-gray-50 py-16 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Aceptamos <span className="text-pink-600 dark:text-pink-500">Múltiples Medios de Pago</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Facilitamos tus compras con los medios de pago más seguros y utilizados del país.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {PAYMENT_METHODS.map((method) => (
            <div 
              key={method.name} 
              className="group flex h-20 w-36 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800"
            >
              <div className="relative h-full w-full transition-all duration-300 group-hover:scale-110">
                {method.component}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-pink-50 px-6 py-3 text-sm font-semibold text-pink-700 dark:bg-pink-900/10 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
            <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Tus transacciones están protegidas y son 100% seguras
          </div>
        </div>
      </div>
    </section>
  );
}
