'use server';

import { cookies } from 'next/headers';

const api = process.env.NEXT_API_URL;

export async function getStates() {
  const res = await fetch(`${api}api=getstates`);

  if (!res.ok) {
    console.log('Failed to fetch states', res.status);
    throw new Error('Failed to fetch states');
  }

  const data = await res.json();
  return data;
}

export async function getLabs() {
  const cookie = cookies().get('patientId')?.value;
  const res = await fetch(`${api}api=getlab&patientid=${cookie}`);

  if (!res.ok) {
    console.log('Failed to fetch labs', res.status);
    throw new Error('Failed to fetch labs');
  }

  const data = await res.json();
  return data;
}
export async function getTests() {
  const cookie = cookies().get('patientId')?.value;
  const res = await fetch(`${api}api=getpasttestinfo&patientid=RW6784FA`);

  if (!res.ok) {
    console.log('Failed to fetch test', res.status);
    throw new Error('Failed to fetch test');
  }

  const data = await res.json();
  return data;
}
export async function getTestsCats(id: string) {
  const cookie = cookies().get('patientId')?.value;
  const res = await fetch(`${api}api=gettestcategory&branchid=${id}`);

  if (!res.ok) {
    console.log('Failed to fetch test cats', res.status);
    throw new Error('Failed to fetch test categories');
  }
  const data = await res.json();
  let result = [];
  if (Object.prototype.toString.call(data) === '[object Object]') {
    result.push(data);
  } else if (Object.prototype.toString.call(data) === '[object Array]') {
    result = [...data];
  }

  return result;
}
export async function getTest(id: string, catId: string) {
  const patientId = cookies().get('patientId')?.value;
  const res = await fetch(
    `${api}api=gettest&patientid=${patientId}&branchid=${id}&testcategoryid=${catId}`
  );

  if (!res.ok) {
    console.log('Failed to fetch test details', res.status);
    throw new Error('Failed to fetch test details');
  }
  const data = await res.json();
  let result = [];
  if (Object.prototype.toString.call(data) === '[object Object]') {
    result.push(data);
  } else if (Object.prototype.toString.call(data) === '[object Array]') {
    result = [...data];
  }

  return result;
}
