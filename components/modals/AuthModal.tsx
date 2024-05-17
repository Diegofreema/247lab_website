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

type Props = {};
type Variants = 'Login' | 'Register';
export const AuthModal = ({}: Props): JSX.Element => {
  const { isOpen, onClose } = useOpen();
  const [variant, setVariant] = useState<Variants>('Login');
  const title = variant === 'Login' ? 'Login' : 'Sign up';
  const description =
    variant === 'Login' ? 'Welcome back' : 'Create an account';
  const handleLogin = () => {
    setVariant(variant === 'Login' ? 'Register' : 'Login');
  };

  const handleClose = () => {
    onClose();
    setVariant('Login');
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {/* <DialogTrigger></DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#009a51] text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center font-semibold text-black">
            {description}
          </DialogDescription>
          {variant === 'Login' ? <LoginForm /> : <RegisterForm />}
        </DialogHeader>

        <Flex justifyContent={'center'} onClick={handleLogin}>
          {variant === 'Login' ? (
            <Text className="text-center text-[#000] cursor-pointer font-semibold text-sm">
              Do not have an account? <Text textColor={'#009a51'}>Sign up</Text>{' '}
            </Text>
          ) : (
            <Text className="text-center text-[#000] cursor-pointer font-semibold text-sm">
              Already have an account?{' '}
              <Text textColor={'#009a51'}>Sign in</Text>{' '}
            </Text>
          )}
        </Flex>
      </DialogContent>
    </Dialog>
  );
};
