import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';
export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-white py-12 md:py-20">
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

            Projects
          </motion.h2>
        </div>

        {/* Empty State - Blueprint Style */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-3xl mx-auto">

          <div className="relative rounded-lg border-2 border-dashed border-slate-200 p-12 md:p-20 text-center overflow-hidden bg-slate-50/50">
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.4] pointer-events-none"
              style={{
                backgroundImage:
                'linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />


            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                <Layout className="w-10 h-10 text-slate-300" />
              </div>

              <h3 className="text-2xl font-semibold text-slate-400 mb-3">
                Coming Soon
              </h3>

              <p className="text-slate-500 max-w-md mx-auto">
                A curated showcase of my work is currently being updated.
                Check back soon for case studies and live demos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}