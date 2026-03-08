import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Lightbulb, User } from 'lucide-react';
const services = [
{
  title: 'Full-Stack Development',
  description:
  'I build end-to-end web applications with modern frameworks like React, Next.js, and Node.js. I ensure seamless integration from database to frontend.',
  icon: Code2
},
{
  title: 'System Design',
  description:
  'I design distributed systems that are resilient, performant, and built for scale. I am experienced in architecting platforms for global traffic, managing complex API migrations, and microservices orchestration.',
  icon: Server
},
// {
//   title: 'Mobile Development',
//   description:
//   "Creating native-feeling mobile experiences using React Native. Cross-platform solutions that don't compromise on performance.",
//   icon: Smartphone
// },
// {
//   title: 'Database Design',
//   description:
//   'Optimizing data schemas and queries for maximum efficiency. Experience with PostgreSQL, MongoDB, and Redis caching strategies.',
//   icon: Database
// },
{
  title: 'Technical Consulting',
  description:
  'I provide technical audits and modernization strategies for small projects, startups and established firms. Whether it\'s optimizing frontend performance or hardening backend services, I focus on scalability, efficiency and reliability.',
  icon: Lightbulb
},
{
  title: 'Career Guidance',
  description:
  'I am passionate about helping engineers navigate the transition from academia to high-performance engineering cultures. I offer guidance on technical growth, interviewing, and building a sustainable career in tech.',
  icon: User
}];


export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="border-t border-slate-100 mb-8 text-center pt-8">
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

            What I Can Help You With
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="max-w-3xl mx-auto">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex items-start gap-6 py-8 border-b border-slate-100 last:border-0">
            <service.icon className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>);

}