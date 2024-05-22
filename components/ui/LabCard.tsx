'use client';
import { Box, Text } from '@chakra-ui/react';
import { PlainCard } from './PlainCard';
import { LabBranch } from '@/utils/types';
import { Link } from 'next-view-transitions';

interface Props {
  lab: LabBranch;
}

export const LabCard = ({ lab }: Props) => {
  return (
    <PlainCard>
      <Link href={`/dashboard/all-labs/${lab?.id}`}>
        <Text
          textColor={'black'}
          fontFamily={'var(--font-rubik)'}
          fontWeight={'bold'}
          textAlign={{ base: 'center', md: 'left' }}
        >
          {lab?.branch}
        </Text>
      </Link>
    </PlainCard>
  );
};
