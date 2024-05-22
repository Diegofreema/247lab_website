'use client';
import { colors } from '@/constants';
import { Avatar, Flex, Text, WrapItem } from '@chakra-ui/react';

interface Props {
  name: string;
  lName: string;
}

export const DashboardHeader = ({ name, lName }: Props) => {
  const firstLetter = name?.charAt(0)?.toUpperCase();
  const lastLetter = lName?.charAt(0)?.toUpperCase();
  const fullName = name + ' ' + lName;
  return (
    <Flex
      gap={3}
      alignItems={'center'}
      width={'100%'}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <WrapItem>
        <Avatar name={`${firstLetter}${lastLetter}`} />
      </WrapItem>
      <Flex
        flexDirection={'column'}
        alignItems={{ base: 'center', md: 'flex-start' }}
        gap={1}
      >
        <Text
          textColor={'black'}
          fontFamily={'var(--font-rubik)'}
          fontWeight={'bold'}
        >
          Welcome, {fullName}
        </Text>
        <Text textColor={colors.textGrey}>Let&apos;s get started</Text>
      </Flex>
    </Flex>
  );
};
