'use client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { BottomGradient, LabelInputContainer } from './FormComponents';
import { LogIn, Send } from 'lucide-react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { Input } from '../input';
import { Label } from '../label';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../button';
import { loginSchema } from '@/utils/validators';
import { logInUser } from '@/actions/auth.actions';
import { useOpen } from '@/lib/zustand/useOpen';
type Props = {};

export const LoginForm = ({}: Props): JSX.Element => {
  const toast = useToast();
  const { onClose } = useOpen();
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

      if (formData?.message === 'Success') {
        console.log(formData?.patientId, 'client side');
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
      }
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
  return (
    <AnimatePresence>
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
          {errors.email && <Text color="red">{errors.email.message}</Text>}
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
          {errors.password && (
            <Text color="red">{errors.password.message}</Text>
          )}
        </LabelInputContainer>
      </motion.form>
      <Flex justifyContent={'flex-start'}>
        <Button
          disabled={isSubmitting}
          className=" relative w-fit group/btn flex space-x-2 items-center justify-start px-4  text-white rounded-md h-10 font-medium shadow-input bg-[#009A51] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <LogIn
            className="h-4 w-4 text-white dark:text-neutral-300"
            size={25}
          />
          <span className="text-white dark:text-neutral-300 text-sm">
            Login
          </span>
          <BottomGradient />
        </Button>
      </Flex>
    </AnimatePresence>
  );
};
