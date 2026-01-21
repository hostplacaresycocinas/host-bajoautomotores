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
          <article className='h-[540px] md:h-[650px] lg:h-[700px] xl:h-[800px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20'>
            <HeroCarousel />

            {/* Resplandores sutiles y elegantes (ocultos en mobile por performance) */}
            <div className='absolute w-full h-full top-0 left-0 -z-30 overflow-hidden hidden md:block'>
              {/* Resplandor central suave */}
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-color-primary rounded-full blur-[180px] opacity-25'></div>
              
              {/* Resplandor superior derecho */}
              <div className='absolute top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] bg-color-primary rounded-full blur-[150px] opacity-20'></div>
              
              {/* Resplandor inferior izquierdo */}
              <div className='absolute bottom-0 left-0 w-80 h-80 md:w-[450px] md:h-[450px] bg-color-primary-light rounded-full blur-[140px] opacity-15'></div>
            </div>

            {/* Overlay con mayor opacidad para disimular calidad del video */}
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 -z-20'></div>

            {/* Contenedor centrado con diseño limpio */}
            <div className='flex flex-col items-center justify-center w-full max-w-5xl px-4 md:px-6 lg:px-8 z-30 mt-12 md:mt-10'>
              {/* Badge minimalista */}
              

              {/* Título principal - diseño limpio */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-white text-center uppercase tracking-tight leading-none transform-gpu will-change-transform'
              >
                Tu próximo auto
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-color-primary-light text-center mb-3 md:mb-4 uppercase tracking-tight leading-none transform-gpu will-change-transform'
              >
                te esta esperando
              </motion.h1>

              

              {/* Línea decorativa sutil */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='w-32 md:w-44 lg:w-56 h-0.5 bg-gradient-to-r from-transparent via-color-primary to-transparent mb-3 md:mb-8 transform-gpu will-change-transform'
              ></motion.div>

              {/* Descripción centrada */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-lg md:text-xl lg:text-2xl text-center text-color-text-light max-w-2xl leading-relaxed mb-5 md:mb-8 lg:mb-10 transform-gpu will-change-transform'
              >
                En {company.name} tenemos los mejores autos para vos.
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
