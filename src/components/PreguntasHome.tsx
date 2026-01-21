'use client';

import { preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    setActiveAnswer(activeAnswer === id ? null : id);
  };

  return (
    <section
      id='preguntasSection'
      className='relative py-16 md:py-24'
    >
      <div className='max-w-5xl mx-auto px-4 md:px-8'>
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-color-title mb-4'>
            Preguntas{' '}
            <span className='text-color-primary'>Frecuentes</span>
          </h2>
          <p className='text-color-text text-base md:text-lg leading-relaxed max-w-2xl mx-auto'>
            Contamos con mucha experiencia en el mercado automotriz.
            <br className='hidden sm:block' />
            ¡Cualquier consulta no dudes en contactarnos!
          </p>
        </motion.div>

        {/* Lista de preguntas */}
        <div className='space-y-4'>
          {preguntas.map((pregunta) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{ duration: 0.5}}
            >
              <div
                onClick={() => toggleAnswer(pregunta.id)}
                className={`group relative bg-neutral-800 rounded-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden
                  ${
                    activeAnswer === pregunta.id
                      ? 'border-color-primary shadow-lg shadow-color-primary/20'
                      : 'border-white/10 hover:border-color-primary/50 hover:shadow-md'
                  }`}
              >
                <div className='p-5 md:p-6'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1'>
                      <h4
                        className={`text-lg md:text-xl font-semibold leading-relaxed transition-colors duration-300
                        ${
                          activeAnswer === pregunta.id
                            ? 'text-color-primary-light'
                            : 'text-color-title-light group-hover:text-color-primary'
                        }`}
                      >
                        {pregunta.question}
                      </h4>
                    </div>

                    {/* Icono de toggle */}
                    <div className='flex-shrink-0'>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                        ${
                          activeAnswer === pregunta.id
                            ? 'bg-color-primary text-white rotate-180'
                            : 'bg-white/10 text-color-text-light group-hover:bg-color-primary/20 group-hover:text-color-primary'
                        }`}
                      >
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <AnimatePresence>
                    {activeAnswer === pregunta.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className='overflow-hidden'
                      >
                        <div className='mt-4 pt-4 border-t border-white/10'>
                          <p className='text-color-text-light text-base md:text-lg leading-relaxed'>
                            {pregunta.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
