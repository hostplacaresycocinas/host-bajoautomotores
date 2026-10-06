'use client';

import { useEffect, useState } from 'react';

const VIDEOS = {
  mobile: {
    src: '/assets/inicio/hero-mobile.mp4',
    poster: '/assets/inicio/hero-mobile-poster.webp',
  },
  desktop: {
    src: '/assets/inicio/background-desktop.mp4',
    poster: '/assets/inicio/background-desktop-poster.webp',
  },
};

const HeroCarousel = () => {
  // Se elige un solo video según el ancho, así no se descargan los dos
  const [variant, setVariant] = useState<'mobile' | 'desktop' | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setVariant(mq.matches ? 'desktop' : 'mobile');
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className='absolute inset-0 -z-30 bg-black'>
      {/* Poster inmediato mientras carga el video */}
      <div
        className='absolute inset-0 bg-cover bg-center md:hidden'
        style={{ backgroundImage: `url(${VIDEOS.mobile.poster})` }}
      />
      <div
        className='absolute inset-0 bg-cover bg-center hidden md:block'
        style={{ backgroundImage: `url(${VIDEOS.desktop.poster})` }}
      />
      {variant && (
        <video
          key={variant}
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          poster={VIDEOS[variant].poster}
          className='absolute inset-0 w-full h-full object-cover object-center'
        >
          <source src={VIDEOS[variant].src} type='video/mp4' />
        </video>
      )}
    </div>
  );
};

export default HeroCarousel;
