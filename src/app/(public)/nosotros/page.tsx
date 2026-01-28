'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import LocationIcon from '@/components/icons/LocationIcon';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-72 md:h-80 lg:h-96 pt-10 md:pt-16 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`nosotros banner`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/90 via-black/60 md:via-black/70 to-black/80 md:to-black/90'></div>
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
            {company.name}.<br />
            Desde Pehuajó, creciendo junto a la región
          </motion.p>
        </div>
      </section>

      {/* Sección Principal: Imagen y Textos */}
      <section className='pt-10 md:pt-16 lg:pt-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            {/* Imagen con diseño moderno */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative h-64 md:h-72 lg:h-[400px]'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt={`Equipo de ${company.name}`}
                  fill
                  className='object-cover rounded-xl lg:rounded-2xl shadow-2xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl'></div>

                {/* Badge flotante - Opción 1: Genérico (sin años específicos) */}
                {/* <div className='absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-color-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-900'>
                        Confianza y Compromiso
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Badge flotante removido (según pedido) */}
              </div>
            </motion.div>

            {/* Contenido de la historia */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <div className=''>
                <p className='text-gray-900 text-lg md:text-2xl font-semibold leading-relaxed'>
                Empresa familiar con +44 años de experiencia 🤝
                  <br />
                  🚘 Venta de 0km y usados multimarcas
                </p>

                <div className='mt-6 space-y-4'>
                  <a
                    href='https://wa.me/2396614213'
                    target='_blank'
                    rel='noreferrer'
                    className='group flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 hover:bg-gray-100 transition-colors'
                    aria-label='Contactar por WhatsApp al 2396614213'
                  >
                    <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm flex-shrink-0'>
                      <WhatsappIcon className='h-6 w-6' />
                    </span>

                    <div className='min-w-0'>
                      <div className='text-sm text-gray-700 font-medium'>
                        WhatsApp
                      </div>
                      <div className='text-xl md:text-2xl font-extrabold text-gray-900 tracking-wide group-hover:text-color-primary transition-colors'>
                        2396614213
                      </div>
                    </div>
                  </a>

                  <a
                    href={company.googlemapsLink}
                    target='_blank'
                    rel='noreferrer'
                    className='group flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 hover:bg-gray-100 transition-colors'
                    aria-label='Abrir ubicación en Google Maps'
                  >
                    <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-color-primary text-white shadow-sm flex-shrink-0'>
                      <LocationIcon className='h-6 w-6' />
                      </span>

                    <div className='min-w-0'>
                      <div className='text-sm text-gray-700 font-medium'>
                        Dirección
                      </div>
                      <div className='text-gray-900 font-semibold leading-snug group-hover:text-color-primary transition-colors'>
                        {company.adress}, {company.city}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de valores con diseño de tarjetas */}
      <section className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-6 md:mb-10 lg:mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-5 lg:mb-6'>
              Nuestros <span className='text-color-primary'>Valores</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Los principios que nos guían en cada interacción con nuestros
              clientes
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Valor 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-neutral-800 rounded-2xl p-8 shadow-lg lg:shadow-xl h-full border border-neutral-700'>
                <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-white'
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
                <h3 className='text-xl font-bold text-white mb-4'>
                  Calidad Garantizada
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  Todos nuestros vehículos pasan por rigurosos controles de
                  calidad antes de ser ofrecidos a nuestros clientes.
                </p>
              </div>
            </motion.div>

            {/* Valor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-neutral-800 rounded-2xl p-8 shadow-lg lg:shadow-xl transition-all duration-300 h-full border border-neutral-700'>
                <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-white'
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
                <h3 className='text-xl font-bold text-white mb-4'>
                  Atención Personal
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  Cada cliente recibe atención dedicada y asesoramiento experto
                  adaptado a sus necesidades específicas.
                </p>
              </div>
            </motion.div>

            {/* Valor 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-neutral-800 rounded-2xl p-8 shadow-lg lg:shadow-xl transition-all duration-300 h-full border border-neutral-700'>
                <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Servicios Flexibles
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  Ofrecemos múltiples opciones de financiamiento y servicios
                  para facilitar tu compra y cambio de vehículo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default NosotrosPage;
