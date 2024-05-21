'use client';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <Box
      minH={'100vh'}
      width={'100%'}
      bg={'white'}
      paddingBottom={{ base: 50, md: 20 }}
    >
      {children}
    </Box>
  );
};
