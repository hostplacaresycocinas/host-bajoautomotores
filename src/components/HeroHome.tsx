'use client';

import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';
import LocationIcon from './icons/LocationIcon';

const HeroHome = () => {
  return (
    <section
      id='inicioSection'
      className='flex justify-center overflow-hidden bg-black relative'
    >
      <div className='max-w-[1920px] w-full flex flex-col items-center z-10'>
        <div className='flex justify-center max-w-6xl lg:max-w-[1920px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          <article className='h-[520px] md:h-[550px] lg:h-[700px] xl:h-[800px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20 will-change-transform'>
            <HeroCarousel />

            {/* Resplandores de fondo con color primario - Optimizado para mobile */}
            <div className='absolute w-full h-full top-0 left-0 -z-30 overflow-hidden'>
              {/* Resplandor superior izquierdo - Solo en mobile */}
              <div className='absolute -top-20 -left-20 w-48 h-48 bg-color-primary rounded-full blur-[80px] opacity-30 md:hidden'></div>

              {/* Resplandor superior derecho - Reducido en mobile */}
              <div className='absolute -top-32 -right-24 w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] bg-color-primary rounded-full blur-[100px] md:blur-[140px] opacity-30 md:opacity-40'></div>

              {/* Resplandor inferior central - Solo desktop */}
              <div className='absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-color-primary rounded-full blur-[150px] opacity-20 hidden md:block'></div>

              {/* Resplandor medio izquierdo - Solo desktop */}
              <div className='absolute top-1/2 -left-32 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] bg-color-primary rounded-full blur-[130px] opacity-40 hidden md:block'></div>
            </div>

            {/* Overlay gradient más suave - Optimizado para mobile */}
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85 md:from-black/70 md:via-black/60 md:to-black/80 -z-20'></div>

            <div className='flex flex-col items-center max-w-4xl px-4'>
              {/* Badge superior */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  mass: 0.5,
                }}
                className='inline-flex items-center gap-1 px-4 py-2 bg-white/10 md:backdrop-blur-sm border border-white/20 rounded-full mb-2 lg:mb-3'
              >
                <LocationIcon className='w-6 h-6 text-color-primary-light' />
                <span className='text-base md:text-lg font-medium text-white/90 tracking-wide'>
                  {company.city}
                </span>
              </motion.div>

              {/* Título principal */}
              <div className='flex flex-col items-center mb-0 lg:mb-4'>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 0.8,
                    delay: 0.15,
                  }}
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center mb-2 uppercase'
                >
                  {company.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 0.8,
                    delay: 0.25,
                  }}
                  className='items-center gap-3 hidden md:flex'
                >
                  <div className='w-12 md:w-20 h-[4px] bg-gradient-to-r from-transparent to-color-primary-light'></div>
                  <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-color-primary-light tracking-widest uppercase text-nowrap'>
                    Vehículos Seleccionados
                  </h2>
                  <div className='w-12 md:w-20 h-[4px] bg-gradient-to-l from-transparent to-color-primary-light'></div>
                </motion.div>
              </div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 0.8,
                  delay: 0.35,
                }}
                className='text-base sm:text-lg md:text-xl lg:text-2xl text-center text-color-text-light max-w-2xl leading-relaxed font-medium'
              >
                Vehículos seleccionados con atención personalizada.
                <br className='hidden sm:block' />
                Encontrá el auto perfecto para vos.
              </motion.p>

              {/* Botones CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 0.8,
                  delay: 0.45,
                }}
                className='flex flex-col sm:flex-row gap-3 md:gap-4 mt-3 md:mt-5'
              >
                {/* Botón principal */}
                <Link
                  href='/catalogo'
                  className='group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-color-primary hover:bg-color-primary-dark text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-color-primary/50 will-change-transform'
                >
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    Ver Catálogo
                    <svg
                      className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
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
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-color-primary-dark to-color-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </Link>

                {/* Botón secundario */}
                <Link
                  href='/contacto'
                  className='group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-full md:backdrop-blur-sm transition-all duration-300 will-change-transform'
                >
                  <span className='flex items-center justify-center gap-2'>
                    Contactanos
                    <svg
                      className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
