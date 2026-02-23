import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Server, Lightbulb, User } from 'lucide-react';
import { desc } from 'framer-motion/client';
const services = [
{
  title: 'Full-Stack Development',
  description:
  'Building end-to-end web applications with modern frameworks like React, Next.js, and Node.js. Seamless integration from database to frontend.',
  icon: Code2
},
{
  title: 'System Design',
  description:
  'Designing distributed systems that are resilient, performant, and built for scale. I am experienced in architecting platforms for global traffic, managing complex API migrations, and microservices orchestration.',
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
  'I provide technical audits and modernization strategies for startups and established firms. Whether it\'s optimizing frontend performance or hardening backend services, I focus on scalability, efficiency and reliability.',
  icon: Lightbulb
},
{
  title: 'Career Guidance',
  description:
  'I am passionate about helping engineers navigate the transition from academia to high-performance engineering cultures. I offer guidance on technical growth, interviewing, and building a sustainable career in tech.',
  icon: User
}];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(14,165,233,0.15)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
            className={`${index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}`}>

            <TiltCard className="p-8 rounded-lg border border-slate-200 bg-white h-full">
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
            </TiltCard>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}