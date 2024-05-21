'use server';
import axios from 'axios';
import { loginSchema, schema, updateSchema } from '@/utils/validators';
import { UpdateUser, User } from '@/utils/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const api = process.env.NEXT_API_URL;
const cookie = cookies().get('patientId');
const patientId = cookie?.value;
export default async function createUser(values: User) {
  const validatedFields = schema.safeParse({
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    password: values.password,
    dob: values.dob,
    phoneNumber: values.phoneNumber,
    address: values.address,
    state: values.state,
    community: values.community,
    confirmPassword: values.confirmPassword,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log('validation error', validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const {
    email,
    firstName,
    lastName,
    password,
    dob,
    phoneNumber,
    address,
    state,
    community,
  } = validatedFields.data;
  const formattedPassword = password
    .replace(/[#?\/\\%&]/g, '')
    .replace(/:/g, '');
  const { data } = await axios.get(
    `${api}api=registerpatient&email=${email}&fname=${firstName}&lname=${lastName}&phone=${phoneNumber}&dob=${dob}&statename=${state}&communityname=${community}&address=${address}&pasword=${formattedPassword}`
  );

  if (data?.result === 'Email Already Exist') {
    return {
      message: 'Email Already Exist',
    };
  }
  console.log('data', data.patientid);

  if (data?.patientid) {
    cookies().set('patientId', data?.patientid);
    redirect('/dashboard/home');
    return {
      patientId: data?.patientid,
      message: 'Success',
    };
  }
}

export async function logInUser(values: { email: string; password: string }) {
  const validatedFields = loginSchema.safeParse({
    email: values.email,
    password: values.password,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log('validation error', validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const {
    email,

    password,
  } = validatedFields.data;
  const formattedPassword = password
    .replace(/[#?\/\\%&]/g, '')
    .replace(/:/g, '');
  const { data } = await axios.get(
    `${api}api=patientlogin&email=${email}&pasword=${formattedPassword}`
  );

  if (data?.result === 'incorrect email or password') {
    return {
      message: 'Invalid credentials',
    };
  }
  console.log('data', data?.patientid);

  if (data?.patientid) {
    cookies().set('patientId', data?.patientid);
    redirect('/dashboard/home');
    return {
      patientId: data?.patientid,
      message: 'Success',
    };
  }
}
export async function getProfile(id?: any) {
  try {
    const res = await fetch(`${api}api=getpatientinfo&patientid=${patientId}`);

    if (!res.ok) {
      console.log('Failed to fetch profile', res.status);
      throw new Error('Failed to fetch profile');
    }
    const profile = await res.json();

    return profile;
  } catch (error) {
    throw new Error('Failed to fetch profile');
  }
}

export async function updateUser(values: UpdateUser) {
  const validatedFields = updateSchema.safeParse({
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    phoneNumber: values.phoneNumber,
    address: values.address,
    state: values.state,
    community: values.community,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log('validation error', validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, lastName, address, community, state, firstName, phoneNumber } =
    validatedFields.data;
  const id = cookie?.value;
  const { data } = await axios.get(
    `${api}api=updatepatientinfo&patientid=${id}&email=${email}&fname=${firstName}&lname=${lastName}&phone=${phoneNumber}&statename=${state}&communityname=${community}&address=${address}`
  );

  if (data?.result === 'You cannot update your data at this time') {
    return {
      message: 'You cannot update your data at this time',
    };
  }

  if (data?.result === 'updated') {
    revalidatePath('/dashboard/');
    return {
      message: 'Profile updated',
    };
  }
}

const emailSchema = z.object({
  email: z
    .string({ required_error: 'Please enter an email address' })
    .email({ message: 'Please enter a valid email address' }),
});
export async function sendEmail(value: string) {
  const validatedFields = emailSchema.safeParse({
    email: value,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log('validation error', validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email } = validatedFields.data;

  const { data } = await axios.get(`${api}api=recoverpassword&email=${email}`);

  if (data?.result === 'Password Sent') {
    return {
      message: 'Password Sent',
    };
  }
}

export async function logout() {
  cookies().delete('patientId');
  redirect('/');
}
