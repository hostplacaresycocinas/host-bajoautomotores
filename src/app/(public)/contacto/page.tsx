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
      <div className=''>
        {/* Hero Section con imagen de fondo */}
        <section className='relative h-72 md:h-80 lg:h-96 pt-10 md:pt-16 flex items-center justify-center overflow-hidden'>
          {/* Imagen de fondo con overlay */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/assets/contacto/contacto-banner.webp'
              alt={`nosotros banner`}
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/90 via-black/50 md:via-black/60 to-black/80 md:to-black/90'></div>
          </div>

          {/* Contenido centrado */}
          <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
            >
              Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
            >
              Contactanos para cualquier consulta
            </motion.p>
          </div>
        </section>

        {/* Información de contacto principal */}
        <section className='py-16 md:py-20 lg:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Sección de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12 md:mb-16'
            >
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Canales de Contacto
              </h2>
              <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
                Elegí el medio que prefieras para comunicarte con nosotros
              </p>
            </motion.div>

            {/* Grid de contacto */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 max-w-md md:max-w-none mx-auto'>
              {/* WhatsApp */}
              <motion.a
                href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-color-primary transition-colors shadow-lg text-center'
              >
                <div className='w-16 h-16 bg-color-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                  <WhatsappFillIcon className='w-8 h-8 text-color-primary' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>
                  WhatsApp
                </h3>
                <p className='text-gray-600 mb-4'>{company.whatsapp[0]}</p>
                <div className='flex items-center justify-center text-color-primary font-semibold'>
                  <span>Chatear ahora</span>
                  <svg
                    className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300'
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
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={`https://www.instagram.com/${company.instagram}/`}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-color-primary transition-colors shadow-lg text-center'
              >
                <div className='w-16 h-16 bg-color-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                  <InstagramIcon className='w-8 h-8 text-color-primary' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>
                  Instagram
                </h3>
                <p className='text-gray-600 mb-4'>@{company.instagram}</p>
                <div className='flex items-center justify-center text-color-primary font-semibold'>
                  <span>Seguir</span>
                  <svg
                    className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300'
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
              </motion.a>

              {/* Ubicación */}
              <motion.a
                href={company.googlemapsLink || ''}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-color-primary transition-colors shadow-lg text-center'
              >
                <div className='w-16 h-16 bg-color-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                  <LocationIcon className='w-8 h-8 text-color-primary' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>
                  Ubicación
                </h3>
                <p className='text-gray-600 mb-4'>
                  {company.adress}, {company.city}
                </p>
                <div className='flex items-center justify-center text-color-primary font-semibold'>
                  <span>Ver mapa</span>
                  <svg
                    className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300'
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
              </motion.a>
            </div>

            {/* Sección de horarios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='max-w-3xl mx-auto mb-16 md:mb-20'
            >
              <div className='bg-color-bg-secondary rounded-3xl p-8 md:p-12 text-center shadow-2xl'>
                <div className='w-16 h-16 bg-color-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <ClockIcon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6'>
                  Horarios de Atención
                </h3>
                <div className='space-y-4'>
                  {company.openDays.map((day, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className='flex items-center justify-center p-4 bg-color-bg-primary backdrop-blur-sm rounded-xl border border-white/20'
                    >
                      <span className='text-lg md:text-xl text-color-title font-medium'>
                        {day}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200'
            >
              <iframe
                className='w-full h-96 md:h-[500px] lg:h-[600px]'
                src={`${company.googlemaps}`}
                width='100%'
                height='600'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                style={{
                  border: 'none',
                }}
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactoPage;
