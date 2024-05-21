'use client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { BottomGradient, LabelInputContainer } from './FormComponents';
import { LogIn, Send, SendHorizonal } from 'lucide-react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { Input } from '../input';
import { Label } from '../label';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../button';
import { loginSchema } from '@/utils/validators';
import { logInUser, sendEmail } from '@/actions/auth.actions';
import { useOpen } from '@/lib/zustand/useOpen';
import { useForgot } from '@/lib/zustand/useForgot';
type Props = {};
const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});
export const ForgotForm = ({}: Props): JSX.Element => {
  const toast = useToast();
  const { onOpen } = useOpen();
  const { onClose } = useForgot();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    try {
      const formData = await sendEmail(data.email);
      console.log(
        '🚀 ~ constonSubmit:SubmitHandler<z.infer<typeofschema>>= ~ formData:',
        formData
      );
      if (formData?.errors) {
        return toast({
          title: 'Failed to send email',
          description: 'Please try again later.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
      if (formData?.message === 'Password Sent') {
        reset();
        onClose();
        return toast({
          title: 'Email sent',
          description: 'Please check your email.',
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

  const handleLogin = () => {
    onClose();
    onOpen();
  };
  return (
    <AnimatePresence>
      <Flex justifyContent={'flex-end'}>
        <Button
          variant={'outline'}
          className={' w-[150px] text-black'}
          onClick={handleLogin}
        >
          <p className="text-sm underline text-green-500">Login</p>
        </Button>
      </Flex>
      <motion.form
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        exit={{ opacity: 0, scale: 0.7 }}
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <LabelInputContainer className="mb-4">
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

        <Button
          disabled={isSubmitting}
          className=" relative w-fit group/btn flex space-x-2 items-center justify-start px-4  text-white rounded-md h-10 font-medium shadow-input bg-[#009A51] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] mt-5"
          type="submit"
        >
          <SendHorizonal
            className="h-4 w-4 text-white dark:text-neutral-300"
            size={25}
          />
          <span className="text-white dark:text-neutral-300 text-sm">
            Submit
          </span>
          <BottomGradient />
        </Button>
      </motion.form>
    </AnimatePresence>
  );
};
