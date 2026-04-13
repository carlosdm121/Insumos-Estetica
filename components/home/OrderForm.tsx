'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío a API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Resetear formulario después de unos segundos
    setTimeout(() => setIsSuccess(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="pedido" className="w-full bg-white py-20 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gray-50 shadow-sm dark:bg-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Info Column */}
            <div className="bg-pink-600 p-10 text-white md:col-span-2">
              <h2 className="text-3xl font-bold">Haz tu pedido</h2>
              <p className="mt-4 text-pink-100">
                Completa tus datos y nos pondremos en contacto contigo para coordinar el pago y envío.
              </p>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-pink-200">WhatsApp</p>
                    <p className="font-semibold">+54 9 11 2233-4455</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-pink-200">Email</p>
                    <p className="font-semibold">ventas@yelinsumos.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <form onSubmit={handleSubmit} className="p-10 md:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-gray-700 dark:bg-zinc-800 dark:focus:ring-pink-900/30"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-gray-700 dark:bg-zinc-800 dark:focus:ring-pink-900/30"
                    placeholder="+54 9..."
                  />
                </div>
                
                <div className="col-span-full space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Pedido / Consulta</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-gray-700 dark:bg-zinc-800 dark:focus:ring-pink-900/30"
                    placeholder="Describe los productos que necesitas..."
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "mt-8 w-full rounded-xl px-8 py-4 text-base font-bold text-white transition-all active:scale-95 disabled:opacity-70",
                  isSuccess ? "bg-green-500 hover:bg-green-600" : "bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : isSuccess ? (
                  "¡Pedido Enviado!"
                ) : (
                  "Enviar Pedido"
                )}
              </button>
              
              {isSuccess && (
                <p className="mt-4 text-center text-sm font-medium text-green-600">
                  ¡Gracias por tu pedido! Nos contactaremos a la brevedad.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
