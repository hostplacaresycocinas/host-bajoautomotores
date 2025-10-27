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

      {/* Sección Quiénes Somos */}
      <section className='mt-8 md:mt-12 mb-8 md:mb-12'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12 md:mb-16'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              ¿Quiénes Somos?
            </h2>
            <div className='w-20 h-1 bg-color-primary mx-auto mb-6'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-3 md:space-y-6 text-center'
          >
            <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
              Con casi dos décadas de experiencia, hemos construido una
              concesionaria que se distingue por entender profundamente las
              necesidades de cada cliente. Aprendimos a ponernos en el lugar del
              comprador, del trabajador, del profesional, viviendo cada
              operación como si fuera propia.
            </p>
            <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
              A diferencia de las concesionarias tradicionales, ofrecemos
              vehículos de todas las marcas, lo que nos permite encontrar la
              mejor opción para cada cliente. Nos dedicamos a esa persona que se
              esfuerza para llegar y tratamos de hacerle las cosas más fáciles,
              porque queremos que regresen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Imagen */}
      <section className='pb-16 md:pb-24'>
        <div className='max-w-7xl mx-auto flex justify-center px-4 sm:px-6 md:px-8 lg:px-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative h-72 md:h-[300px] lg:h-[400px] xl:h-[450px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'
          >
            <Image
              src='/assets/nosotros/nosotros-1.webp'
              alt={`${company.name}`}
              fill
              className='object-cover'
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
