'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Atención personalizada',
    descripcion:
      'Te brindamos atención dedicada para ayudarte a encontrar el vehículo que buscas.',
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
    titulo: 'Calidad garantizada',
    descripcion:
      'Todos nuestros vehículos pasan por una revisión antes de ser ofrecidos.',
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
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    ),
  },
  {
    titulo: 'Servicios flexibles',
    descripcion:
      'Ofrecemos diferentes opciones para facilitar tu compra y cambio de vehículo.',
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
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
];

const Proceso = () => {
  return (
    <section className='flex flex-col items-center justify-center py-10 md:py-16'>
      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8'>
        {/* Título y subtítulo */}
        <div className='text-center mb-3 md:mb-5 lg:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-color-title mb-2'
          >
            Por qué elegir{' '}
            <span className='text-color-primary'>{company.name}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-color-text max-w-xl mx-auto md:text-lg font-medium'
          >
            En {company.name} trabajamos para ofrecer un servicio de calidad y
            confianza a todos nuestros clientes.
          </motion.p>
        </div>
        {/* Cards de beneficios */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl'>
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='flex flex-col items-center text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15'
            >
              {/* Icono */}
              <div className='flex items-center justify-center w-16 h-16 p-3 md:p-4 lg:w-20 lg:h-20 mb-4 rounded-full bg-color-primary/20 text-color-primary'>
                {b.icono}
              </div>

              {/* Título */}
              <h4 className='text-lg lg:text-xl font-semibold text-color-title mb-3'>
                {b.titulo}
              </h4>

              {/* Descripción */}
              <p className='text-color-text font-medium md:text-base'>
                {b.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
