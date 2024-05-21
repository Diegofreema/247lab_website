'use client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { BottomGradient, LabelInputContainer } from './FormComponents';
import { LogIn, Send } from 'lucide-react';
import { Flex, Text } from '@chakra-ui/react';
import { Input } from '../input';
import { Label } from '../label';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { schema } from '@/utils/validators';
import createUser from '@/actions/auth.actions';
import { useToast, Select } from '@chakra-ui/react';
import { Button } from '../button';
import { useOpen } from '@/lib/zustand/useOpen';

import { useStates } from '@/lib/tanstack/queries';
import { ErrorCom } from '../Error';
import { LoadingComponent } from '../LoadingComponent';
import { community, states } from '@/dummyData';

type Props = {};
const initialState = {
  message: '',
};
export const RegisterForm = ({}: Props): JSX.Element => {
  const toast = useToast();
  const { isOpen, onClose } = useOpen();
  // const { data, isPending, isError, refetch, isPaused, error } = useStates();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      phoneNumber: '',
      address: '',
      state: '',
      community: '',
      dob: '',
    },
  });
  // console.log(error);

  // if (isError || isPaused) {
  //   return <ErrorCom retry={refetch} />;
  // }

  // if (isPending) {
  //   return <LoadingComponent />;
  // }

  // console.log(data, 'data');
  const { state } = watch();
  console.log(state, 'state');

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    try {
      const formData = await createUser(data);
      console.log(
        '🚀 ~ constonSubmit:SubmitHandler<z.infer<typeofschema>>= ~ formData:',
        formData
      );
      if (formData?.errors) {
        if (formData?.errors.confirmPassword) {
          return toast({
            title: 'Failed to create account',
            description: 'Passwords do not match',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          });
        }

        return toast({
          title: 'Failed to create account',
          description: 'Please give valid details.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
      if (formData?.message === 'Email Already Exist') {
        return toast({
          title: 'Failed to create account',
          description: 'Email already exist, please use different email.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }

      if (formData?.message === 'Success') {
        console.log(formData?.patientId);
        reset();
        onClose();
        return toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (error) {
      console.log(error);

      toast({
        title: 'Failed to create account',
        description: 'Something went wrong.',
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
        <ScrollArea className="h-[400px] w-full rounded-md border p-4 space-y-4">
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
            {errors.firstName && (
              <Text color="red">{'First name is required'}</Text>
            )}
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
            {errors.lastName && (
              <Text color="red">{'Last name is required'}</Text>
            )}
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
            {errors.email && (
              <Text color="red">{'Please put a valid email'}</Text>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Phone number</Label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Phone number" />
              )}
            />
            {errors.phoneNumber && (
              <Text color="red">{'Phone number is required'}</Text>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Address</Label>
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder="Address" />}
            />
            {errors.address && <Text color="red">{'Address is required'}</Text>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>State</Label>
            <Controller
              name="state"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select placeholder="Select state" {...field}>
                  {states.map((state) => (
                    <option key={state.statename} value={state.statename}>
                      {state.statename}
                    </option>
                  ))}
                </Select>
              )}
            />
            {errors.state && <Text color="red">{'State is required'}</Text>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label>Community</Label>
            <Controller
              name="community"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select placeholder="Select community" {...field}>
                  {community.map((c, i) => (
                    <option key={i} value={c.commname}>
                      {c.commname}
                    </option>
                  ))}
                </Select>
              )}
            />

            {errors.community && (
              <Text color="red">{errors.community.message}</Text>
            )}
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
            {errors.dob && <Text color="red">{errors.dob.message}</Text>}
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
            {errors.password && (
              <Text color="red">{errors.password.message}</Text>
            )}
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
            {errors.confirmPassword && (
              <Text color="red">{errors.confirmPassword.message}</Text>
            )}
          </LabelInputContainer>

          <Flex justifyContent={'flex-start'} width={'100%'} mb={10}>
            <Button
              disabled={isSubmitting}
              onClick={() => handleSubmit(onSubmit)}
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
            </Button>
          </Flex>
        </ScrollArea>
      </motion.form>
    </AnimatePresence>
  );
};
