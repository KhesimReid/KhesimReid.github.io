import React from 'react';
import { motion } from 'framer-motion';
import { PenLine } from 'lucide-react';
export function BlogSection() {
  return (
    <section id="blog" className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="border-t border-slate-100 pt-8 mb-8 text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="text-3xl md:text-4xl font-sans font-semibold tracking-tight text-slate-900">

            Blog
          </motion.h2>
        </div>

        {/* Notebook Style Empty State */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-2xl mx-auto">

          <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden relative min-h-[300px] flex flex-col items-center justify-center p-8">
            {/* Lined Paper Lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-50"
              style={{
                backgroundImage:
                'repeating-linear-gradient(transparent, transparent 31px, #e2e8f0 31px, #e2e8f0 32px)',
                backgroundAttachment: 'local'
              }} />


            {/* Red Margin Line */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-red-100 pointer-events-none" />

            <div className="relative z-10 text-center bg-white/80 backdrop-blur-[2px] p-6 rounded-xl border border-slate-100/50">
              <PenLine className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-slate-400 mb-2">
                Coming Soon
              </h3>
              <p className="text-slate-500">
                Thoughts on my interests, software, careers and how big tech principals can advance small island nations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}