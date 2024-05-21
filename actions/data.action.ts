'use server';
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
