import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children, className, onClick, type, disabled }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 15 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * 0.25);
    rawY.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
