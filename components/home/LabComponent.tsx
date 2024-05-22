'use client';
import { LabBranch } from '@/utils/types';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { LabCard } from '../ui/LabCard';
import { Link } from 'next-view-transitions';
import SeeAll from '../ui/SeeAll';

interface Props {
  labs: LabBranch[];
  all?: boolean;
}

export const LabComponent = ({ labs, all }: Props) => {
  const arrayToMap = all ? labs : labs?.slice(0, 4);
  return (
    <Box>
      {!all && (
       <SeeAll link="/dashboard/all-labs" text="Branches" />
      )}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        {labs?.length > 0 &&
          arrayToMap?.map((lab, i) => <LabCard key={i} lab={lab} />)}

        {labs?.length === 0 && (
          <Text fontFamily={'var(--font-rubik)'}>
            No labs found in your area
          </Text>
        )}
      </SimpleGrid>
    </Box>
  );
};
