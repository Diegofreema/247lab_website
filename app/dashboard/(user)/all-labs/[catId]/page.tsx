import { getTestsCats } from '@/actions/data.action';
import { TestCardCats } from '@/components/ui/TestCardCats';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: { catId: string } }) => {
  if (!params?.catId) {
    return notFound();
  }
  const cat = await getTestsCats(params?.catId);

  return (
    <div className="mt-[20px]">
      <TestCardCats cat={cat} branchId={params?.catId} />
    </div>
  );
};

export default page;
