import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiHtml5, SiCss,
  SiPython, SiScala,
  SiDocker, SiGit, SiGithubactions, SiJest,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

type TechItem = {
  name: string;
  Icon: React.ComponentType<{ color?: string; size?: number }>;
  color: string;
};

const techCategories: { name: string; items: TechItem[] }[] = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Java', Icon: FaJava, color: '#ED8B00' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Scala', Icon: SiScala, color: '#DC322F' },
    ],
  },
  {
    name: 'DevOps & Tools',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'CI/CD', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
    ],
  },
];

export function TechSection() {
  return (
    <section id="tech" className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="border-t border-slate-100 pt-8 mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-sans font-semibold tracking-tight text-slate-900">
            Technologies I've Used Most
          </motion.h2>
        </div>

        {/* Tech Categories */}
        <div className="max-w-4xl mx-auto space-y-16">
          {techCategories.map((category, categoryIndex) =>
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}>

              <h3 className="text-sm font-medium text-slate-500 mb-6 text-center md:text-left">
                {category.name}
              </h3>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}>

                {category.items.map((item) =>
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                    }}
                    className="cursor-default flex flex-col items-center gap-1.5 group">

                    <motion.div
                      initial={{ filter: 'grayscale(100%)', opacity: 0.45 }}
                      whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.15 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}>
                      <item.Icon color={item.color} size={32} />
                    </motion.div>

                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      {item.name}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
