"use client";

import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export function RecipeReveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: `translateY(${y}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function RecipeImageReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: "scale(0.97)" }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export { easeOut };
