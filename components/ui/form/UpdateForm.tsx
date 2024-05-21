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
import { schema, updateSchema } from '@/utils/validators';
import createUser, { getProfile } from '@/actions/auth.actions';
import { useToast, Select } from '@chakra-ui/react';
import { Button } from '../button';
import { useOpen } from '@/lib/zustand/useOpen';

import { useStates } from '@/lib/tanstack/queries';
import { ErrorCom } from '../Error';
import { LoadingComponent } from '../LoadingComponent';
import { community, states } from '@/dummyData';
import { useUpdateForm } from '@/lib/zustand/useUpdateForm';
import { updateUser } from '../../../actions/auth.actions';
import { useRouter } from 'next/navigation';
import { User, UserType } from '@/utils/types';
import { useEffect, useState } from 'react';

type Props = {};
const initialState = {
  message: '',
};
export const UpdateForm = ({}: Props): JSX.Element => {
  const toast = useToast();
  const { onClose } = useUpdateForm();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<z.infer<typeof updateSchema>>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      state: '',
      community: '',
    },
  });
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profile: UserType = await getProfile();
        if (profile) {
          setValue('email', profile?.email);
          setValue('firstName', profile?.fname);
          setValue('lastName', profile?.lname);
          setValue('phoneNumber', profile?.phone);
          setValue('address', profile?.streetaddress);
          setValue('state', profile?.statename);
          setValue('community', profile?.communityname);
        }
      } catch (error) {
        toast({
          title: 'Error getting user profile',
          description: 'Please try again later.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
    };
    getUserProfile();
  }, [toast, setValue]);
  const { state } = watch();

  const onSubmit: SubmitHandler<z.infer<typeof updateSchema>> = async (
    data
  ) => {
    try {
      const formData = await updateUser(data);
      console.log(
        '🚀 ~ constonSubmit:SubmitHandler<z.infer<typeofschema>>= ~ formData:',
        formData
      );
      if (formData?.errors) {
        return toast({
          title: 'Failed to update account',
          description: 'Please try again later.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
      if (formData?.message === 'You cannot update your data at this time') {
        return toast({
          title: 'Failed to update profile',
          description: 'You cannot update your profile at this time.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }

      if (formData?.message === 'Profile updated') {
        reset();
        onClose();
        router.refresh();
        return toast({
          title: 'Profile updated.',
          description: 'Your profile has been updated.',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (error) {
      console.log(error);

      toast({
        title: 'Failed to update profile',
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
                Update
              </span>
              <BottomGradient />
            </Button>
          </Flex>
        </ScrollArea>
      </motion.form>
    </AnimatePresence>
  );
};
