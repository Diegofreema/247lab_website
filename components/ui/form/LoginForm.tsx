import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { BottomGradient, LabelInputContainer } from './FormComponents';
import { LogIn, Send } from 'lucide-react';
import { Flex } from '@chakra-ui/react';
import { Input } from '../input';
import { Label } from '../label';
import { AnimatePresence, motion } from 'framer-motion';
type Props = {};
const schema = z.object({
  email: z
    .string({
      invalid_type_error: 'Please enter a valid email address',
      required_error: 'Please enter an email address',
    })
    .email({ message: 'Please enter an email' }),
  password: z
    .string({ required_error: 'Please enter a password' })
    .min(6, 'Please enter a valid password'),
});
export const LoginForm = ({}: Props): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {};
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
        </LabelInputContainer>

        <Flex justifyContent={'flex-start'}>
          <button
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
          </button>
        </Flex>
      </motion.form>
    </AnimatePresence>
  );
};
