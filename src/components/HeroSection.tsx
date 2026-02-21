import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
export function HeroSection() {
  const name = 'Alex Chen';
  const letters = Array.from(name);
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1 * i
      }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };
  return (
    <section id="about" className="w-full bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Left Column: Photo Placeholder */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="w-full md:w-auto flex-shrink-0 flex justify-center md:justify-start">

            <div className="w-64 h-80 md:w-80 md:h-[400px] rounded-lg border-2 border-sky-100 bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-sm z-10" />
              <div className="relative z-20 flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-white shadow-sm">
                  <User className="w-12 h-12 text-slate-300" />
                </div>
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Your Photo
                </span>
              </div>
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:16px_16px] z-0" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex-1 text-center md:text-left pt-4 md:pt-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="mb-4 text-lg font-medium text-sky-500">

              Hello, I'm
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight"
              variants={container}
              initial="hidden"
              animate="visible">

              {letters.map((letter, index) =>
              <motion.span
                variants={child}
                key={index}
                className="inline-block">

                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              )}
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.8
              }}
              className="max-w-xl mx-auto md:mx-0">

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                A Senior Software Engineer specializing in building exceptional
                digital experiences. I craft scalable, performant, and
                accessible web applications with a focus on clean code and
                thoughtful design.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}