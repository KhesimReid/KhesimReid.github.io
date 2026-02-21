import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-24 mb-12">
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

            Get In Touch
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
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
              delay: 0.2
            }}
            className="bg-white p-8 md:p-10 border border-slate-200 rounded-lg">

            <p className="text-center text-slate-600 mb-10 font-light text-lg">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-slate-400 uppercase tracking-wider">

                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-3 border-b border-slate-200 focus:border-sky-500 outline-none transition-colors bg-transparent text-slate-800 placeholder-slate-300"
                    placeholder="John Doe" />

                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-slate-400 uppercase tracking-wider">

                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-3 border-b border-slate-200 focus:border-sky-500 outline-none transition-colors bg-transparent text-slate-800 placeholder-slate-300"
                    placeholder="john@example.com" />

                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider">

                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-0 py-3 border-b border-slate-200 focus:border-sky-500 outline-none transition-colors bg-transparent text-slate-800 placeholder-slate-300 resize-none"
                  placeholder="Tell me about your project..." />

              </div>

              <motion.button
                whileHover={{
                  scale: 1.01
                }}
                whileTap={{
                  scale: 0.99
                }}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">

                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center gap-8">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) =>
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  y: -3,
                  color: '#0EA5E9'
                }}
                className="text-slate-400 transition-all duration-300">

                  <Icon className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}