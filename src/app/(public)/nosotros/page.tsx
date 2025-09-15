'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-48 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/80 md:bg-black/70'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
          >
            Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Tu socio de confianza en el mundo automotriz
          </motion.p>
        </div>
      </section>

      {/* Sección de historia moderna */}
      <section className='pt-8 md:pt-12 pb-8 md:pb-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Imagen con diseño moderno */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative'>
                <div className='relative rounded-2xl overflow-hidden shadow-lg'>
                  <Image
                    src='/assets/nosotros/nosotros-1.webp'
                    alt={`Equipo de ${company.name}`}
                    width={600}
                    height={400}
                    className='w-full h-auto object-cover'
                  />
                </div>
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-lg'>
                <span className='text-color-primary'>Transformando</span> sueños
                en realidad
              </h2>
              <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                {company.name} nació de la pasión por los autos y el compromiso
                con nuestros clientes. Desde nuestros inicios, nos hemos
                dedicado a seleccionar cuidadosamente cada vehículo.
              </p>
              <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                Hoy, somos referentes en el mercado de autos usados, reconocidos
                por nuestra transparencia y el acompañamiento integral que
                brindamos a cada cliente.
              </p>

              {/* Estadísticas */}
              {/* <div className='grid grid-cols-2 gap-6 pt-6'>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-color-primary mb-2'>
                    +500
                  </div>
                  <div className='text-gray-600 font-medium'>
                    Vehículos vendidos
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-color-primary mb-2'>
                    +10
                  </div>
                  <div className='text-gray-600 font-medium'>
                    Años de experiencia
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de equipo */}
      <section className='pt-8 md:pt-12 pb-16 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12 md:mb-16'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-color-title'>
              Nuestro <span className='text-color-primary'>Compromiso</span>
            </h2>
            <p className='text-lg md:text-xl text-color-text max-w-3xl mx-auto'>
              Trabajamos día a día para brindar el mejor servicio y la mejor
              experiencia a nuestros clientes
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Compromiso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto'>
                <svg
                  className='w-10 h-10 text-color-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-color-title'>
                Garantía de Calidad
              </h3>
              <p className='text-color-text leading-relaxed'>
                Todos nuestros vehículos pasan por rigurosos controles antes de
                ser ofrecidos.
              </p>
            </motion.div>

            {/* Compromiso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto'>
                <svg
                  className='w-10 h-10 text-color-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-color-title'>
                Atención Personalizada
              </h3>
              <p className='text-color-text leading-relaxed'>
                Cada cliente recibe atención dedicada y asesoramiento experto.
              </p>
            </motion.div>

            {/* Compromiso 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto'>
                <svg
                  className='w-10 h-10 text-color-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-color-title'>
                Servicios Flexibles
              </h3>
              <p className='text-color-text leading-relaxed'>
                Ofrecemos diferentes opciones para facilitar tu compra y cambio
                de vehículo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
