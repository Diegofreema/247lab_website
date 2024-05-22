import { getLabs } from '@/actions/data.action';
import { LabComponent } from '@/components/home/LabComponent';
import { NextPage } from 'next';

interface Props {}

const page: NextPage<Props> = async ({}) => {
  const labs = await getLabs();
  return (
    <div className="mt-[20px]">
      <LabComponent all labs={labs} />
    </div>
  );
};

export default page;
