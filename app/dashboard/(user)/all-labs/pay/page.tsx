import { getProfile } from '@/actions/auth.actions';
import { getTest } from '@/actions/data.action';
import { PayComponent } from '@/components/ui/PayComponent';
import { NextPage } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    catId: string;
  };

  searchParams: {
    branchId: string;
    test_category: string;
  };
};

const page = async ({ params, searchParams }: Props) => {
  const patientId = cookies().get('patientId')?.value;
  if (!searchParams?.branchId || !searchParams?.test_category || !patientId) {
    return notFound();
  }

  const profileData = getProfile();
  const testsPricesData = getTest(
    searchParams?.branchId,
    searchParams?.test_category
  );

  const [profile, testsPrices] = await Promise.all([
    profileData,
    testsPricesData,
  ]);

  return (
    <PayComponent
      testPrices={testsPrices}
      patientId={patientId}
      branchId={searchParams?.branchId}
      profile={profile}
    />
  );
};

export default page;
