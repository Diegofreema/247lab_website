'use client';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  const bg = useColorModeValue('#fff', '#1A202C');
  return (
    <Box
      minH={'100vh'}
      maxWidth={{ base: '90%', lg: '80%' }}
      mx={'auto'}
      bg={'white'}
      paddingBottom={{ base: 50, md: 20 }}
    >
      {children}
    </Box>
  );
};
