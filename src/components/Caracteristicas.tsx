'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const caracteristicas = [
  {
    numero: '01',
    titulo: 'Stock Actualizado',
    descripcion:
      'Mantenemos un inventario constante y actualizado con los mejores vehículos del mercado. Cada auto pasa por rigurosos controles de calidad.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        />
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Atención Personalizada',
    descripcion:
      'Nuestro equipo de expertos te acompaña en cada paso del proceso, desde la búsqueda hasta la entrega, garantizando una experiencia única.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Financiación a Medida',
    descripcion:
      'Ofrecemos planes de financiación flexibles y personalizados que se adaptan a tu presupuesto y necesidades específicas.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
];

const Caracteristicas = () => {
  return (
    <section className='relative pt-10 md:pt-16 mb-16 md:mb-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center place-items-center lg:place-items-start'>
          {/* Contenido de texto - Lado izquierdo */}
          <div className='space-y-8'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='space-y-4'
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-color-title'>
                Lo que nos hace{' '}
                <span className='text-color-primary'>destacar</span>
              </h2>
            </motion.div>

            {/* Lista de características */}
            <div className='space-y-8'>
              {caracteristicas.map((caracteristica, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                  className='flex items-start space-x-6'
                >
                  {/* Número circular */}
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 rounded-full border-2 border-color-primary flex items-center justify-center bg-color-primary/10'>
                      <span className='text-color-primary font-bold text-lg'>
                        {caracteristica.numero}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className='flex-1 space-y-3'>
                    <h3 className='text-xl md:text-2xl font-bold text-color-title'>
                      {caracteristica.titulo}
                    </h3>
                    <p className='text-color-text text-base md:text-lg leading-relaxed max-w-lg lg:max-w-full'>
                      {caracteristica.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Imagen de fondo - Lado derecho */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='relative h-[400px] lg:h-[600px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl'
          >
            <Image
              src='/assets/proceso/proceso.webp'
              alt='Interior de auto de lujo'
              width={500}
              height={750}
              className='object-cover w-full h-full'
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;
