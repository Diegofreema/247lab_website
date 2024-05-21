import { z } from 'zod';

export const schema = z
  .object({
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
      .string({ required_error: 'Please enter a confirm password' })
      .min(6, 'Please enter a valid password'),
    address: z.string({ required_error: 'Please enter an address' }),
    phoneNumber: z
      .string({ required_error: 'Please enter a phone number' })
      .min(11, 'Please enter a valid phone number'),
    dob: z.string({ required_error: 'Please enter a date of birth' }),
    state: z.string({ required_error: 'Please select a state' }),
    community: z.string({ required_error: 'Please select a community' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const updateSchema = z.object({
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

  address: z.string({ required_error: 'Please enter an address' }),
  phoneNumber: z
    .string({ required_error: 'Please enter a phone number' })
    .min(11, 'Please enter a valid phone number'),

  state: z.string({ required_error: 'Please select a state' }),
  community: z.string({ required_error: 'Please select a community' }),
});

export const loginSchema = z.object({
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
