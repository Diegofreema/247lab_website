'use client';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <Box minH={'100vh'} bg="white" pt="80px">
      {children}
    </Box>
  );
};
