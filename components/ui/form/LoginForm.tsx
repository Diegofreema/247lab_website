'use client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { BottomGradient, LabelInputContainer } from './FormComponents';
import { LogIn, Send } from 'lucide-react';
import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { Input } from '../input';
import { Label } from '../label';
import { AnimatePresence, motion } from 'framer-motion';

import { loginSchema } from '@/utils/validators';
import { logInUser } from '@/actions/auth.actions';
import { useOpen } from '@/lib/zustand/useOpen';
import { useForgot } from '@/lib/zustand/useForgot';
import { colors } from '../../../constants';
type Props = {};

export const LoginForm = ({}: Props): JSX.Element => {
  const toast = useToast();
  const { onClose } = useOpen();
  const { onOpen } = useForgot();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
    console.log('Submitted data:', data);

    try {
      const formData = await logInUser(data);
      console.log(
        '🚀 ~ constonSubmit:SubmitHandler<z.infer<typeofschema>>= ~ formData:',
        formData
      );
      if (formData?.errors) {
        return toast({
          title: 'Failed to create account',
          description: 'Please give valid details.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
      if (formData?.message === 'Invalid credentials') {
        return toast({
          title: 'Failed to login',
          description: 'Invalid email or password.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }

      reset();
      onClose();
      return toast({
        title: 'Welcome back.',
        description: 'Logged in successfully.',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.log(error);

      toast({
        title: 'An error occurred',
        description: 'Something went wrong, please try again later.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };
  const forgotHandler = () => {
    onClose();
    onOpen();
  };

  return (
    <AnimatePresence>
      <Button
        variant={'ghost'}
        className={' w-[150px] text-white'}
        onClick={forgotHandler}
      >
        <p className="text-sm underline text-green-500"> Forgot password?</p>
      </Button>
      <motion.form
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        exit={{ opacity: 0, scale: 0.7 }}
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <LabelInputContainer>
          <Label>Email</Label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Email" type="email" />
            )}
          />
          {errors.email && (
            <Text color="red">{'A valid email is required'}</Text>
          )}
        </LabelInputContainer>
        <LabelInputContainer>
          <Label>Password</Label>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} placeholder="Password" type="password" />
            )}
          />
          {errors.password && <Text color="red">{'Password is required'}</Text>}
        </LabelInputContainer>
        <Button
          isLoading={isSubmitting}
          bg={colors.green}
          color="white"
          type="submit"
          leftIcon={
            <LogIn
              className="h-4 w-4 text-white dark:text-neutral-300"
              size={25}
            />
          }
        >
          Login
        </Button>
      </motion.form>
    </AnimatePresence>
  );
};
