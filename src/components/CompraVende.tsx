'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CompraVende = () => {
  const cards = [
    {
      id: 'compra',
      title: 'Comprá tu Auto',
      description:
        'Vehículos seleccionados con la mejor calidad y precio. Encontrá el auto ideal para vos.',
      image: '/assets/compraventa/compra-venta-1.webp',
      buttonText: 'Ver Catálogo',
      href: '/catalogo',
      gradient: 'from-black/80 via-black/70 to-black/60',
    },
    {
      id: 'vende',
      title: 'Vendé tu Auto',
      description:
        'Te ayudamos a vender tu vehículo de forma rápida y segura. Tasación sin compromiso.',
      image: '/assets/compraventa/compra-venta-2.webp',
      buttonText: 'Quiero Vender',
      href: '/venta',
      gradient: 'from-black/80 via-black/70 to-black/60',
    },
  ];

  return (
    <section className='flex justify-center bg-neutral-50 py-12 md:py-16 lg:py-20'>
      <div className='max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-10'>
        {/* Cards grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          {cards.map((card, index) => (
            <Link key={card.id} href={card.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'
              >
                {/* Imagen de fondo */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className='object-cover transition-transform duration-1000 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px'
                />

                {/* Overlay gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.gradient} transition-opacity duration-500 group-hover:opacity-90`}
                ></div>

                {/* Resplandor sutil del color primario */}
                <div className='absolute inset-0 bg-color-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Contenido de la card */}
                <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10'>
                  <div className='space-y-4 md:space-y-5'>
                    {/* Badge decorativo */}
                    <div className='hidden md:inline-flex'>
                      <span className='px-4 py-1.5 bg-color-primary/90 backdrop-blur-sm text-white text-sm md:text-base font-semibold rounded-full'>
                        {card.id === 'compra' ? 'Compra' : 'Venta'}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
                      {card.title}
                    </h3>

                    {/* Descripción */}
                    <p className='text-base md:text-lg text-white/90 max-w-md leading-relaxed'>
                      {card.description}
                    </p>

                    {/* Botón CTA */}
                    <div className='group/btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-color-primary hover:bg-color-primary-dark transition-colors text-white font-semibold rounded-full w-fit'>
                      <span>{card.buttonText}</span>
                      <svg
                        className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Línea decorativa superior */}
                <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-color-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompraVende;
