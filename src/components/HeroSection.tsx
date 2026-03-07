import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const words = 'Khesim Reid'.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.45, delayChildren: 0.1 },
    },
  };
  const wordContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, transition: { type: 'spring', damping: 12, stiffness: 100 } },
  };
  return (
    <section ref={sectionRef} id="about" className="w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24">
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

            <motion.div style={{ y: photoY }} className="w-64 h-80 md:w-80 md:h-[400px] rounded-lg border-2 border-slate-200 overflow-hidden">
              <img
                src="/KhesimReid.jpg"
                alt="Khesim Reid"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex-1 text-center md:text-left pt-4 md:pt-8">
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              className="mb-4 text-lg font-medium text-slate-500">

              Hello, I'm
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-sans font-bold text-slate-900 mb-8 leading-tight tracking-tight"
              variants={container}
              initial="hidden"
              animate="visible">

              {words.map((word, wordIndex) =>
                <React.Fragment key={wordIndex}>
                  <motion.span
                    className="inline-block whitespace-nowrap"
                    variants={wordContainer}>
                    {Array.from(word).map((letter, letterIndex) =>
                      <motion.span key={letterIndex} variants={child} className="inline-block">
                        {letter}
                      </motion.span>
                    )}
                  </motion.span>
                  {wordIndex < words.length - 1 && ' '}
                </React.Fragment>
              )}
            </motion.h1>

            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.9 }}
              className="mx-auto md:mx-0">

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                I am an experienced Software Engineer with a proven track record in Big Tech and Fintech.
                My work focuses on building high-availability, full-stack systems that support millions of users globally. 
                With an academic foundation from top-tier UK institutions and professional experience navigating the complexities and scale of multinational environments, 
                I specialize in bridging the gap between customer needs and technical implementation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}