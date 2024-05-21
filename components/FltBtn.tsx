'use client';
import { useOpen } from '@/lib/zustand/useOpen';
import React from 'react';

type Props = {};

export const FltBtn = (props: Props) => {
  const { onOpen } = useOpen();
  return (
    <button
      onClick={onOpen}
      className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
    >
      <span>Login</span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
    </button>
  );
};
