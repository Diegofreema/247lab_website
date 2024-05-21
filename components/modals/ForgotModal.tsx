import { useOpen } from '@/lib/zustand/useOpen';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LoginForm } from '../ui/form/LoginForm';
import { useState } from 'react';
import { RegisterForm } from '../ui/form/RegisterForm';
import { Flex, Text } from '@chakra-ui/react';
import { ForgotForm } from '../ui/form/ForgotPassword';
import { useForgot } from '@/lib/zustand/useForgot';

type Props = {};
type Variants = 'Login' | 'Register';
export const ForgotModal = ({}: Props): JSX.Element => {
  const { isOpen, onClose } = useForgot();

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {/* <DialogTrigger></DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#009a51] text-center">
            Forgot Password
          </DialogTitle>
          <DialogDescription className="text-center font-semibold text-black">
            Enter your registered email below
          </DialogDescription>
          <ForgotForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
