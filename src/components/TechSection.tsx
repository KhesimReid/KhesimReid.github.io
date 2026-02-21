import React from 'react';
import { motion } from 'framer-motion';
const techCategories = [
{
  name: 'Frontend',
  items: [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Redux',
  'HTML5/CSS3']

},
{
  name: 'Backend',
  items: [
  'Node.js',
  'PostgreSQL',
  'GraphQL',
  'Python',
  'Express',
  'Prisma',
  'Redis']

},
{
  name: 'DevOps & Tools',
  items: ['AWS', 'Docker', 'Go', 'Git', 'CI/CD', 'Jest', 'Linux']
}];

export function TechSection() {
  return (
    <section id="tech" className="w-full bg-white py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="border-t border-slate-200 pt-16 mb-20 text-center">
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
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900">

            Technologies
          </motion.h2>
        </div>

        {/* Tech Categories */}
        <div className="max-w-4xl mx-auto space-y-16">
          {techCategories.map((category, categoryIndex) =>
          <motion.div
            key={category.name}
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
              duration: 0.6,
              delay: categoryIndex * 0.2
            }}>

              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center md:text-left">
                {category.name}
              </h3>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {category.items.map((item, itemIndex) =>
              <motion.span
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.3,
                  delay: categoryIndex * 0.2 + itemIndex * 0.05
                }}
                className="px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium transition-colors duration-300 hover:border-sky-300 hover:text-sky-600 cursor-default">

                    {item}
                  </motion.span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}