'use client';

import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.06,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full dark:text-light text-dark font-bold capitalize text-8xl`}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWord}
            key={index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
