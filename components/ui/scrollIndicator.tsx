'use client';
import { useScroll, useSpring, motion } from 'framer-motion';
import React from 'react';

type Props = {};

export const ScrollIndicator = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 right-0 h-[6px] bg-[#36ef99] origin-[0%]"
      style={{ scaleX }}
    />
  );
};
