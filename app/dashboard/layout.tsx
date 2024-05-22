import { getProfile } from '@/actions/auth.actions';
import { DashBoardSidebar } from '@/components/dashboadSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardWrapper } from '@/components/dashboard/DashboardWrapper';
import { MobileDrawer } from '@/components/modals/Mobile';
import { MobileButton } from '@/components/ui/MobileButton';
import { UserType } from '@/utils/types';
import { NextPage } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
interface Props {
  children: React.ReactNode;
}

const layout: NextPage<Props> = async ({ children }) => {
  const cookieStore = cookies();
  const patientId = cookieStore.get('patientId');

  if (!patientId) {
    return redirect(`/`);
  }

  const profile: UserType = await getProfile(patientId?.value);
  return (
    <div className="w-full min-h-screen relative">
      <MobileDrawer />
      <MobileButton />
      <DashBoardSidebar />
      <DashboardWrapper profile={profile}>
        <DashboardHeader lName={profile.lname} name={profile.fname} />
        {children}
      </DashboardWrapper>
    </div>
  );
};

export default layout;
