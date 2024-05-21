'use client';
import { Box, Image } from '@chakra-ui/react';

interface Props {}

export const BigImage = ({}: Props) => {
  return (
    <Box width={'100%'} mt={10}>
      <Image
        src="/big.png"
        alt="bg"
        objectFit="cover"
        width={'100%'}
        height={'auto'}
      />
    </Box>
  );
};
