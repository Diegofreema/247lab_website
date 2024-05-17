import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { BottomGradient, LabelInputContainer } from './FormComponents';
import { LogIn, Send } from 'lucide-react';
import { Flex } from '@chakra-ui/react';
import { Input } from '../input';
import { Label } from '../label';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

type Props = {};
const schema = z.object({
  firstName: z.string({
    required_error: 'Please enter a first name',
  }),
  lastName: z.string({ required_error: 'Please enter a last name' }),
  email: z
    .string({
      invalid_type_error: 'Please enter a valid email address',
      required_error: 'Please enter an email address',
    })
    .email({ message: 'Please enter an email' }),
  password: z
    .string({ required_error: 'Please enter a password' })
    .min(6, 'Please enter a valid password'),
  confirmPassword: z
    .string({ required_error: 'Please enter a password' })
    .min(6, 'Please enter a valid password'),
  address: z.string({ required_error: 'Please enter an address' }),
  phoneNumber: z
    .string({ required_error: 'Please enter a phone number' })
    .min(11, 'Please enter a valid phone number'),
  dob: z.string({ required_error: 'Please enter a date of birth' }),
  state: z.string({ required_error: 'Please select a state' }),
  community: z.string({ required_error: 'Please select a community' }),
});
export const RegisterForm = ({}: Props): JSX.Element => {
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
        <ScrollArea className="h-[300px] w-full rounded-md border p-4 space-y-4">
          <LabelInputContainer className="mb-3">
            <Label>First name</Label>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="First name" />
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Last name</Label>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Last name" />
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
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
          <LabelInputContainer className="mb-3">
            <Label>Phone number</Label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Phone number" type="email" />
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Address</Label>
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder="Address" />}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>State</Label>
            <Controller
              name="state"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder="State" />}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Community</Label>
            <Controller
              name="community"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Community" />
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Date of birth</Label>
            <Controller
              name="dob"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Date of birth" type="date" />
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
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
          <LabelInputContainer className="mb-3">
            <Label>Confirm password</Label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Confirm Password"
                  type="password"
                />
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
                Sign up
              </span>
              <BottomGradient />
            </button>
          </Flex>
        </ScrollArea>
      </motion.form>
    </AnimatePresence>
  );
};
