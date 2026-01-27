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
          <article className='h-[500px] md:h-[600px] lg:h-[650px] xl:h-[750px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20'>
            <HeroCarousel />

            {/* Overlay con mayor opacidad para disimular calidad del video */}
            <div className='absolute w-full h-full top-0 left-0 bg-black/50 -z-20'></div>

            {/* Contenedor centrado con diseño limpio */}
            <div className='flex flex-col items-center justify-center w-full max-w-5xl px-4 md:px-6 lg:px-8 z-30'>
              {/* Badge minimalista */}
              

              {/* Título principal - diseño limpio */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-[28px] min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[85px] text-nowrap font-bold text-white text-center uppercase tracking-tight leading-none transform-gpu will-change-transform'
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)' }}
              >
                Tu próximo auto esta acá
              </motion.h1>
              {/* Línea decorativa sutil */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='w-56 md:w-72 lg:w-96 xl:w-[500px] h-1 bg-gradient-to-r from-transparent via-color-primary to-transparent mt-3 md:mt-4 mb-3 md:mb-8 transform-gpu will-change-transform'
              ></motion.div>

              {/* Descripción centrada */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-lg md:text-xl lg:text-2xl text-center text-color-title-light max-w-2xl leading-relaxed mb-5 md:mb-8 lg:mb-10 transform-gpu will-change-transform'
                style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)' }}
              >
                En {company.name} tenemos los mejores autos para vos.{' '}
                <br className='hidden sm:block' />
                 Envianos tu consulta y nosotros te asesoramos.
              </motion.p>

              {/* Botones CTA - diseño minimalista */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col sm:flex-row gap-4 md:gap-6 transform-gpu will-change-transform'
              >
                {/* Botón principal - sólido y elegante */}
                <Link
                  href='/catalogo'
                  className='group relative px-10 md:px-14 py-4 md:py-5 bg-color-primary hover:bg-color-primary-dark text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-primary/40'
                >
                  <span className='relative z-10 flex items-center justify-center gap-2 text-base md:text-lg tracking-wide'>
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
                </Link>

                {/* Botón secundario - outline elegante */}
                <Link
                  href='/contacto'
                  className='group px-10 md:px-14 py-4 md:py-5 bg-transparent border-2 border-white/40 hover:border-white hover:bg-white/5 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300'
                >
                  <span className='flex items-center justify-center gap-2 text-base md:text-lg tracking-wide'>
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
