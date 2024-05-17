'use client';

import { AuthModal } from '@/components/modals/AuthModal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);
  if (!isMounted) return null;
  return (
    <>
      <AuthModal />
    </>
  );
};
