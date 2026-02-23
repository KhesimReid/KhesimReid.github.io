import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-md w-full text-center">

        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-sky-500" />
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
          Message received.
        </h1>

        <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
          Thanks for reaching out — I'll get back to you as soon as possible.
        </p>

        <MagneticButton
          onClick={() => navigate('/')}
          className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
          Back to site
        </MagneticButton>
      </motion.div>
    </div>
  );
}
