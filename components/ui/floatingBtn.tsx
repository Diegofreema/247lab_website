'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './button';

import { ArrowUp } from 'lucide-react';
import {
  useScroll,
  motion,
  Variants,
  useMotionValueEvent,
} from 'framer-motion';

type Props = {};

export const FloatingBtn = (props: Props) => {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 60) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const variants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.button
      variants={variants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      id="button"
      className="bg-[#009a51] fixed bottom-8 left-5 z-50 rounded-full h-[50px] w-[50px] hover:-translate-y-3 opacity-0 transition duration-300 flex justify-center items-center"
      onClick={handleScrollToTop}
    >
      <ArrowUp color="white" />
    </motion.button>
  );
};
