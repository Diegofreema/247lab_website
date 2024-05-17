'use client';
import { Intro } from '@/components/ui/Intro';
import {
  BottomGradient,
  LabelInputContainer,
} from '@/components/ui/form/FormComponents';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  SimpleGrid,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Flex,
} from '@chakra-ui/react';
import { Send } from 'lucide-react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const messageSchema = z.object({
  message: z
    .string({ required_error: 'Please enter a message' })
    .min(1, 'Please enter a message')
    .max(200, 'Please enter a message less than 200 characters'),
  email: z
    .string({
      invalid_type_error: 'Please enter an valid email address',
      required_error: 'Please enter an email address',
    })
    .email({ message: 'Please enter your email address' }),
  firstName: z
    .string({ required_error: 'Please enter your first name' })
    .min(1, 'Please enter your first name')
    .max(30, 'Please enter your first name less than 30 characters'),
  lastName: z
    .string({ required_error: 'Please enter your last name' })
    .min(1, 'Please enter your last name')
    .max(30, 'Please enter your last name less than 30 characters'),
  phoneNumber: z.string({ required_error: 'Please enter your phone number' }),
});
interface Props {}

export const ContactForm = ({}: Props) => {
  return (
    <SimpleGrid
      pt={'100px'}
      id="contact"
      minH={'100vh'}
      mx={'auto'}
      maxWidth={{ base: '90%', md: '70%', lg: '50%' }}
    >
      <Intro intro="Get in touch" />
      <MyForm />
    </SimpleGrid>
  );
};

const MyForm = () => {
  const { handleSubmit, control, reset } = useForm<
    z.infer<typeof messageSchema>
  >({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phoneNumber: '',
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof messageSchema>> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        <LabelInputContainer>
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
        <LabelInputContainer>
          <Label>Last name</Label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} placeholder="Last name" />}
          />
        </LabelInputContainer>
      </SimpleGrid>
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
        <Label>Phone number</Label>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field} placeholder="Phone number" />
          )}
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label>Message</Label>
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Textarea
              rows={5}
              className="resize-none"
              {...field}
              placeholder="Your Message"
            />
          )}
        />
      </LabelInputContainer>
      <Flex justifyContent={'flex-end'}>
        <button
          className=" relative w-fit group/btn flex space-x-2 items-center justify-start px-4  text-white rounded-md h-10 font-medium shadow-input bg-[#009A51] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <Send
            className="h-4 w-4 text-white dark:text-neutral-300"
            size={25}
          />
          <span className="text-white dark:text-neutral-300 text-sm">Send</span>
          <BottomGradient />
        </button>
      </Flex>
    </form>
  );
};
