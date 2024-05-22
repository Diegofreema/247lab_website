'use client';
import { Cat } from '@/utils/types';
import { Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { PlainCard } from './PlainCard';
import { MoveRight } from 'lucide-react';

interface Props {
  cat: Cat[];
  branchId: string;
}

export const TestCardCats = ({ cat, branchId }: Props) => {
  return (
    <SimpleGrid gap={5} mt={10}>
      {cat.map((cat) => (
        <Link
          href={`/dashboard/all-labs/pay?test_category=${cat.categoryname}&branchId=${branchId}`}
          key={cat.categoryname}
          className="text-[#009a51] font-bold underline"
        >
          <PlainCard key={cat.categoryname}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              {cat.categoryname}

              <Icon as={MoveRight} boxSize={25} />
            </Flex>
          </PlainCard>
        </Link>
      ))}
    </SimpleGrid>
  );
};
