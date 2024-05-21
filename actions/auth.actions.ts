'use server';
import axios from 'axios';
import { loginSchema, schema } from '@/utils/validators';
import { User } from '@/utils/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const api = process.env.NEXT_API_URL;

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

  if (data?.patientid) {
    cookies().set('patientId', data?.patientid);
    redirect('/dashboard/home');
    return {
      patientId: data?.patientid,
      message: 'Success',
    };
  }
}
export async function getProfile(id: string) {
  try {
    const res = await fetch(`${api}api=getpatientinfo&patientid=${id}`);

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
