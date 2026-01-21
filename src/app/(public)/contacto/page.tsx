'use client';

import { company } from '@/app/constants/constants';
import ClockIcon from '@/components/icons/ClockIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ContactoPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-72 md:h-80 lg:h-96 pt-10 md:pt-16 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/contacto/contacto-banner.webp'
            alt={`contacto banner`}
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
            className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-3 lg:mb-5'
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Estamos para ayudarte a encontrar el vehículo perfecto para vos.
          </motion.p>
        </div>
      </section>

      {/* Sección Principal: Información y Mapa */}
      <section className='pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 bg-color-bg-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
            {/* Columna Izquierda: Información de Contacto */}
            <div className=''>
              {/* Título */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-color-title mb-4'>
                  Estamos para{' '}
                  <span className='text-color-primary'>ayudarte</span>
                </h2>
                <p className='text-lg text-color-text leading-relaxed'>
                  Elegí el medio que prefieras para comunicarte con nosotros.
                  Estamos disponibles para responder todas tus consultas.
                </p>
              </motion.div>

              {/* Botones de Contacto */}
              <div className='mt-2 lg:mt-4'>
                {/* WhatsApp */}
                <motion.a
                  href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='group flex items-center mb-3 lg:mb-5 gap-4 p-5 bg-neutral-800 hover:bg-neutral-700 rounded-xl border-2 border-neutral-700 hover:border-color-primary'
                >
                  <div className='w-14 h-14 bg-color-primary rounded-xl flex items-center justify-center flex-shrink-0'>
                    <WhatsappFillIcon className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-white mb-1'>
                      WhatsApp
                    </h3>
                    <p className='lg:text-lg text-color-text-light'>{company.whatsapp[0]}</p>
                  </div>
                  <svg
                    className='w-5 h-5 text-color-primary group-hover:translate-x-1 transition-transform duration-300'
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
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href={`https://www.instagram.com/${company.instagram}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='group flex items-center mb-3 lg:mb-5 gap-4 p-5 bg-neutral-800 hover:bg-neutral-700 rounded-xl border-2 border-neutral-700 hover:border-color-primary'
                >
                  <div className='w-14 h-14 bg-color-primary rounded-xl flex items-center justify-center flex-shrink-0'>
                    <InstagramIcon className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-white mb-1'>
                      Instagram
                    </h3>
                    <p className='lg:text-lg text-color-text-light'>@{company.instagram}</p>
                  </div>
                  <svg
                    className='w-5 h-5 text-color-primary group-hover:translate-x-1 transition-transform duration-300'
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
                </motion.a>

               
              </div>

              {/* Horarios */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='bg-neutral-800 rounded-xl p-6 border border-neutral-700'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-color-primary rounded-lg flex items-center justify-center'>
                    <ClockIcon className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    Horarios de Atención
                  </h3>
                </div>
                <div className='space-y-2'>
                  {company.openDays.map((day, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 text-gray-300'
                    >
                      <div className='w-1.5 h-1.5 bg-color-primary rounded-full'></div>
                      <span className='text-lg'>{day}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Columna Derecha: Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <div className='sticky top-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-200'>
                <iframe
                  className='w-full h-[400px] md:h-[500px] lg:h-[600px]'
                  src={`${company.googlemaps}`}
                  width='100%'
                  height='600'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  style={{
                    border: 'none',
                  }}
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactoPage;
