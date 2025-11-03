"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  id?: string;
};

export default function FadeInView({ children, className, as = "div", id }: FadeInViewProps) {
  const prefersReduced = useReducedMotion();
  const MotionComponent = as === 'section' ? motion.section : motion.div;

  if (prefersReduced) {
    return <MotionComponent id={id} className={className}>{children}</MotionComponent>;
  }

  return (
    <MotionComponent
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionComponent>
  );
}
