'use client';

import { company } from '@/app/constants/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VentaPage = () => {
  const beneficios = [
    {
      id: 1,
      icon: (
        <svg
          className='w-10 h-10'
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
      ),
      title: 'Proceso Rápido',
      description:
        'Evaluamos tu vehículo y te damos una respuesta en el menor tiempo posible.',
    },
    {
      id: 2,
      icon: (
        <svg
          className='w-10 h-10'
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
      ),
      title: 'Asesoramiento Profesional',
      description:
        'Te brindamos toda la información necesaria y respondemos tus consultas.',
    },
    {
      id: 3,
      icon: (
        <svg
          className='w-10 h-10'
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
      ),
      title: 'Múltiples Opciones',
      description:
        'Trabajamos con permutas y distintas alternativas para facilitar la operación.',
    },
  ];

  const handleWhatsAppClick = () => {
    const mensaje = encodeURIComponent(
      '¡Hola! Quiero vender mi vehículo. ¿Pueden darme más información?'
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=${mensaje}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Header />
      {/* Hero Section con imagen de fondo */}
      <section className='relative h-72 md:h-80 lg:h-96 pt-10 md:pt-16 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
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
            Venta de Autos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Te ofrecemos la mejor cotización del mercado
          </motion.p>
        </div>
      </section>
      <main className=''>
        {/* Hero Section */}
        <section className='relative w-full pt-10 pb-16 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 overflow-hidden'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='inline-flex items-center gap-2 px-4 py-2 bg-color-primary/10 backdrop-blur-sm border border-color-primary/20 rounded-full mb-6'
              >
                <svg
                  className='w-5 h-5 text-color-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span className='text-sm md:text-base font-medium text-color-primary'>
                  Compramos tu Vehículo
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6'
              >
                Vendé tu Auto de Forma{' '}
                <span className='text-color-primary'>Rápida y Segura</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed'
              >
                Te ofrecemos la mejor atención con un proceso transparente y
                profesional. Evaluamos tu vehículo y te brindamos las mejores
                opciones.
              </motion.p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={beneficio.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='p-6 md:p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-gray-200 shadow-md'
                >
                  <div className='w-16 h-16 flex items-center justify-center bg-color-primary/10 text-color-primary rounded-xl mb-4'>
                    {beneficio.icon}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {beneficio.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {beneficio.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className='pb-16 md:pb-20 lg:pb-24'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative overflow-hidden bg-color-bg-secondary rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl'
            >
              {/* Decoración de fondo */}
              <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>

              <div className='relative'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
                  ¿Listo para vender tu auto?
                </h2>
                <p className='text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto'>
                  Contactanos ahora y recibí asesoramiento personalizado. Te
                  esperamos!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className='group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-color-primary hover:bg-color-primary-dark text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                  </svg>
                  <span>WhatsApp</span>
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
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VentaPage;
