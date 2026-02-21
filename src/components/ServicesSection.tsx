import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Database, Lightbulb } from 'lucide-react';
const services = [
{
  title: 'Full-Stack Development',
  description:
  'Building end-to-end web applications with modern frameworks like React, Next.js, and Node.js. Seamless integration from database to frontend.',
  icon: Code2
},
{
  title: 'System Architecture',
  description:
  'Designing scalable, robust cloud infrastructures that handle high traffic and ensure 99.9% uptime using AWS and microservices patterns.',
  icon: Server
},
{
  title: 'Mobile Development',
  description:
  "Creating native-feeling mobile experiences using React Native. Cross-platform solutions that don't compromise on performance.",
  icon: Smartphone
},
{
  title: 'Database Design',
  description:
  'Optimizing data schemas and queries for maximum efficiency. Experience with PostgreSQL, MongoDB, and Redis caching strategies.',
  icon: Database
},
{
  title: 'Technical Consulting',
  description:
  'Helping startups and enterprises make the right technology choices. Code reviews, performance audits, and team mentorship.',
  icon: Lightbulb
}];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white py-24">
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

            What I Can Help You With
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`
                p-8 rounded-lg border border-slate-200 bg-white
                ${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}
              `}>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 p-3 rounded-full bg-sky-50 text-sky-600">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}