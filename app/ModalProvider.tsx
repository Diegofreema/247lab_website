'use client';

import { AuthModal } from '@/components/modals/AuthModal';
import { ForgotModal } from '@/components/modals/ForgotModal';
import { UpdateModal } from '@/components/modals/UpdateModal';
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
      <UpdateModal />
      <ForgotModal />
    </>
  );
};
