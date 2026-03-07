import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, FileDown, Send } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const FORMSPARK_URL = 'https://submit-form.com/ArdzDo2kI';

export function ContactSection() {
  const navigate = useNavigate();
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        navigate('/thank-you');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-12 md:py-20 mb-12">
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
            className="">

            <p className="text-center text-slate-600 mb-10 font-normal text-lg">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-500">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-slate-200 focus:border-sky-500 outline-none transition-colors bg-transparent text-slate-800 placeholder-slate-300"
                      placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-500">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-slate-200 focus:border-sky-500 outline-none transition-colors bg-transparent text-slate-800 placeholder-slate-300"
                      placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={fields.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b border-slate-200 focus:border-sky-500 outline-none transition-colors bg-transparent text-slate-800 placeholder-slate-300 resize-none"
                    placeholder="Tell me about your project..." />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}

                <MagneticButton
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                  <Send className="w-4 h-4" />
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </MagneticButton>
              </form>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center gap-8">
              {[
                { Icon: Github, href: 'https://github.com/khesimreid', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/khesim-reid/', label: 'LinkedIn' },
                { Icon: FileDown, href: '/Khesim_Reid_CV.pdf', label: 'Download CV' },
              ].map(({ Icon, href, label }) =>
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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