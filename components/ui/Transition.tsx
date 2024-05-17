'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 bottom-0 right-full w-screen h-screen z-[555555] bg-[#009A51]'
        )}
      />
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[55555] bg-white"
      />
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 1.5, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[5555] bg-black"
      />
    </>
  );
};

export default Transition;
