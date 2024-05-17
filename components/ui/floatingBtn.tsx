'use client';

import React from 'react';
import { Button } from './button';

import { ArrowUp } from 'lucide-react';

type Props = {};

export const FloatingBtn = (props: Props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Button
      className="bg-[#009a51] fixed bottom-8 left-5 z-50 rounded-full h-[50px] w-[50px] hover:-translate-y-3 transition duration-300"
      onClick={handleScrollToTop}
    >
      <ArrowUp color="white" />
    </Button>
  );
};
