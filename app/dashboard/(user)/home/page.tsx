import { getProfile } from '@/actions/auth.actions';
import { getLabs, getTests } from '@/actions/data.action';
import { Wrapper } from '@/components/Wrapper';
import { BigImage } from '@/components/dashboard/BigImage';
import { Container } from '@/components/dashboard/Container';
import { LabComponent } from '@/components/home/LabComponent';
import { TestComponent } from '@/components/ui/TestComponent';
import { NextPage } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const page = async ({}) => {
  const cookie = cookies();
  const id = cookie.get('patientId');
  if (!id) {
    return redirect('/');
  }
  const profileData = getProfile();
  const labData = getLabs();
  const testData = getTests();

  const [profile, labs, tests] = await Promise.all([
    profileData,
    labData,
    testData,
  ]);

  return (
    <Container>
      <BigImage />
      <LabComponent labs={labs} />
      <TestComponent tests={tests} />
    </Container>
  );
};

export default page;
