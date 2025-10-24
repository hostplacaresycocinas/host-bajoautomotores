'use client';

import HeroHome from '@/components/HeroHome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Caracteristicas from '@/components/Caracteristicas';
import CarsHome from '@/components/CarsHome';
import WhatsappBanner from '@/components/WhatsappBanner';
import CompraVende from '@/components/CompraVende';

export default function Home() {
  return (
    <>
      <Header />
      <div className='relative min-h-screen w-full'>
        <div className='flex justify-center min-h-screen'>
          <main className='flex flex-col w-full'>
            <HeroHome />
            <CompraVende />
            <section className='flex flex-col gap-8 md:gap-10 lg:gap-12 mt-10 mb-10 md:mt-16 md:mb-16'>
              <CarsHome title='Nuestros Vehículos' />
            </section>
            <WhatsappBanner />
            <Caracteristicas />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
