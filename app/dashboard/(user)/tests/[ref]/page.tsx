import { getTests } from '@/actions/data.action';
import { TestItem } from '@/components/ui/TestComponent';
import { Results } from '@/utils/types';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: { ref: string } }) => {
  console.log(params.ref);

  if (!params?.ref) {
    return notFound();
  }

  const results = await getTests();

  const singleTest = results.find((test: Results) => test.ref === params.ref);
  return (
    <div className="mt-[20px] h-full">
      <TestItem item={singleTest} single />
    </div>
  );
};

export default page;
