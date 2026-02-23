import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-sky-400 opacity-60 pointer-events-none z-[9999] mix-blend-multiply hidden md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
