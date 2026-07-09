'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Reveal — gentle fade + rise on scroll into view (spa-calm, no bounce).
 * Honors prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
