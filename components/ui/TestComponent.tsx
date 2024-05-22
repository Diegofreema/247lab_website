'use client';
import { Results } from '@/utils/types';
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { PlainCard } from './PlainCard';
import SeeAll from './SeeAll';
import { FlaskConical } from 'lucide-react';
import { colors } from '@/constants';
import { Link } from 'next-view-transitions';
import { useResultModal } from '@/lib/zustand/useResultsModal';

interface Props {
  tests: Results[];
  all?: boolean;
}

export const TestComponent = ({ tests, all }: Props) => {
  const arrayToMap = all ? tests : tests?.slice(0, 4);
  return (
    <SimpleGrid gap={5}>
      {tests.length > 0 && !all && (
        <SeeAll link="/dashboard/tests" text="Recent Tests" />
      )}
      {tests.length > 0 &&
        arrayToMap.map((test, i) => <TestItem item={test} key={i} />)}
      {tests.length === 0 && (
        <Text fontFamily={'var(--font-rubik)'} fontWeight={'bold'}>
          No tests found
        </Text>
      )}
    </SimpleGrid>
  );
};

export const TestItem = ({
  item,
  single,
}: {
  item: Results;
  single?: boolean;
}) => {
  const formattedTest =
    item?.test?.split('-')[1] + `${item?.test?.split('-')[2] || ''}`;
  const statusColor = item?.status === 'Pending' ? 'orange' : 'green';
  const { onOpen } = useResultModal();
  return (
    <PlainCard>
      <Flex>
        <FlaskConical color={colors.green} size={20} />
        <Flex ml={2} justifyContent={'space-between'} width={'100%'}>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Text fontWeight={'bold'}>{formattedTest}</Text>
            <Text fontWeight={'bold'}>
              Status:{' '}
              <Text display={'inline'} textColor={statusColor}>
                {item?.status}
              </Text>
            </Text>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Text fontWeight={'bold'}>{item?.Datex}</Text>
            {item?.status === 'Ready' && !single && (
              <Link href={`/dashboard/tests/${item?.ref}`}>
                <Text
                  fontWeight={'bold'}
                  textUnderlineOffset={2}
                  textDecoration={'underline'}
                  textColor={colors.green}
                >
                  View details
                </Text>
              </Link>
            )}
            {single && (
              <Button
                variant="ghost"
                color={colors.green}
                onClick={() =>
                  onOpen({
                    title: formattedTest,
                    ref: item?.ref,
                    fileExt: item?.fileext,
                  })
                }
              >
                View Results
              </Button>
            )}
          </Box>
        </Flex>
      </Flex>
    </PlainCard>
  );
};
