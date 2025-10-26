'use client';

import { navigation, company } from '@/app/constants/constants';
import { useNavbarStore } from '@/store/navbarStore';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import HamburguerIcon from './icons/HamburguerIcon';
import CloseIcon from './icons/CloseIcon';
import ArrowIcon from './icons/ArrowIcon';

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useNavbarStore();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-color-bg-secondary-dark shadow-lg shadow-color-bg-secondary-dark/20'
          : 'bg-gradient-to-b from-color-bg-secondary-dark/80 via-color-bg-secondary-dark/60 to-transparent md:via-color-bg-secondary-dark/60'
      }`}
    >
      <div className='flex justify-center'>
        <section className='flex justify-between items-center gap-4 md:gap-8 lg:gap-16 py-4 md:py-5 max-w-7xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          {/* Logo */}
          <Link
            className='flex items-center gap-3 md:gap-4 group'
            href='/'
            onClick={() => setIsMenuOpen(false)}
          >
            {company.favicon ? (
              <>
                <div className='relative'>
                  <Image
                    priority
                    className='w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] object-contain group-hover:opacity-90 transition-opacity duration-300'
                    src='/assets/company/favicon.webp'
                    alt={`${company.name} favicon`}
                    width={60}
                    height={60}
                  />
                </div>
                <div className='h-12 w-40 sm:w-44 md:w-52 lg:w-56'>
                  <Image
                    priority
                    className='h-full w-full object-contain object-left transition-opacity duration-300 group-hover:opacity-90'
                    src='/assets/company/logo.webp'
                    alt={`${company.name} logo`}
                    width={192}
                    height={32}
                  />
                </div>
              </>
            ) : (
              <div className='h-10 md:h-12 w-48 sm:w-56 lg:w-64'>
                <Image
                  priority
                  className='h-full w-full object-contain object-left'
                  src='/assets/company/logo.webp'
                  alt={`${company.name} logo`}
                  width={256}
                  height={48}
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6 lg:gap-10'>
            {navigation.map((nav) => {
              const isActive = pathname === nav.url;
              const isContactButton = nav.button;

              if (isContactButton) {
                return (
                  <div key={nav.id}>
                    <Link
                      href={nav.url}
                      className='group relative flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-md border border-neutral-300 text-black font-semibold text-sm lg:text-base transition-all duration-300 bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500/30 overflow-hidden'
                    >
                      <span className='relative z-10'>{nav.title}</span>
                      <ArrowIcon className='relative z-10 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1' />
                      <div className='absolute inset-0 bg-gradient-to-r from-neutral-200 to-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </Link>
                  </div>
                );
              }

              return (
                <li key={nav.id} className='relative list-none'>
                  <Link
                    className={`relative px-1 lg:px-2 py-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                    href={nav.url}
                  >
                    <span className='relative z-10'>{nav.title}</span>
                    {isActive && (
                      <motion.span
                        layoutId='activeNav'
                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-white'
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {!isActive && (
                      <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden relative z-50 p-2 text-neutral-300 hover:text-white transition-colors duration-300'
            aria-label='Toggle menu'
          >
            <AnimatePresence mode='wait'>
              {isMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CloseIcon className='w-9 h-9' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HamburguerIcon className='w-9 h-9' />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </section>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden'
              style={{ top: scrolled ? '73px' : '81px' }}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed right-0 top-[80px] md:top-[81px] h-[calc(100vh-73px)] md:h-[calc(100vh-81px)] w-[280px] sm:w-[320px] bg-color-bg-secondary-dark backdrop-blur-xl border-l border-neutral-700/50 shadow-2xl md:hidden overflow-y-auto'
            >
              <ul className='flex flex-col gap-1 p-6'>
                {navigation.map((nav) => {
                  const isActive = pathname === nav.url;
                  const isContactButton = nav.button;

                  if (isContactButton) {
                    return (
                      <li key={nav.id} className='mt-4'>
                        <Link
                          href={nav.url}
                          onClick={() => setIsMenuOpen(false)}
                          className='group relative flex items-center justify-between gap-2 px-4 py-3 rounded-lg border border-neutral-300 text-neutral-800 font-medium transition-all duration-300 bg-neutral-100 hover:shadow-lg hover:shadow-neutral-500/30 overflow-hidden'
                        >
                          <span className='relative z-10'>{nav.title}</span>
                          <ArrowIcon className='relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                          <div className='absolute inset-0 bg-gradient-to-r from-neutral-200 to-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={nav.id}>
                      <Link
                        href={nav.url}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group relative block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-white bg-white/10'
                            : 'text-neutral-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className='relative z-10'>{nav.title}</span>
                        {isActive && (
                          <span className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full'></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
