import { getTests } from '@/actions/data.action';
import { TestComponent } from '@/components/ui/TestComponent';
import { NextPage } from 'next';

interface Props {}

const page: NextPage<Props> = async ({}) => {
  const tests = await getTests();
  return (
    <div className="mt-[20px]">
      <TestComponent all tests={tests} />
    </div>
  );
};

export default page;
