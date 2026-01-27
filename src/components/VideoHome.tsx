'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    numero: '01',
    titulo: 'Créditos Prendarios',
    descripcion:
      'De cuotas fijas y en pesos con solo DNI. Fácil y rápido.',
  },
  {
    numero: '02',
    titulo: 'Tomamos tu Usado',
    descripcion:
      'Aceptamos tu vehículo usado como parte de pago, facilitando tu cambio de auto.',
  },
  {
    numero: '03',
    titulo: '44 Años de Experiencia',
    descripcion:
      'Más de cuatro décadas en el mercado automotor, brindando soluciones confiables.',
  },
  {
    numero: '04',
    titulo: 'Confianza y Transparencia',
    descripcion:
      'Trabajamos con total transparencia en cada transacción, garantizando tu tranquilidad.',
  },
];

const VideoHome = () => {
  return (
    <section className='relative py-16 md:py-24 bg-color-bg-primary'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Contenido de texto - Lado izquierdo */}
          <div className='space-y-8 order-1 lg:order-1'>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='space-y-4'
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-color-title'>
                ¿Por qué{' '}
                <span className='text-color-primary'>elegirnos?</span>
              </h2>
              <p className='text-color-text text-base md:text-lg leading-relaxed max-w-lg'>
                En {company.name} nos comprometemos a ofrecerte la mejor experiencia en compra y venta de vehículos.
              </p>
            </motion.div>

            {/* Lista de beneficios */}
            <div className='space-y-6'>
              {beneficios.map((beneficio) => (
                <motion.div
                  key={beneficio.numero}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6}}
                  viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                  className='flex items-start space-x-5'
                >
                  {/* Número circular */}
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 rounded-full border-2 border-color-primary flex items-center justify-center bg-color-primary/10'>
                      <span className='text-color-primary font-bold text-lg'>
                        {beneficio.numero}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className='flex-1 space-y-2'>
                    <h3 className='text-xl md:text-2xl font-bold text-color-title'>
                      {beneficio.titulo}
                    </h3>
                    <p className='text-color-text text-base md:text-lg leading-relaxed'>
                      {beneficio.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video - Lado derecho */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] rounded-lg lg:rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2'
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover'
            >
              <source src='/assets/video-home/video-home.mp4' type='video/mp4' />
            </video>
            {/* Overlay sutil para mejor contraste */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoHome;