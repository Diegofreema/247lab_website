import { getProfile } from '@/actions/auth.actions';
import { Wrapper } from '@/components/Wrapper';
import { BigImage } from '@/components/dashboard/BigImage';
import { Container } from '@/components/dashboard/Container';
import { NextPage } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const page = async ({}) => {
  const cookie = cookies();
  const id = cookie.get('patientId');
  if (!id) {
    return redirect('/');
  }
  const profile = await getProfile(id?.value);

  return (
    <Container>
      <BigImage />
    </Container>
  );
};

export default page;
