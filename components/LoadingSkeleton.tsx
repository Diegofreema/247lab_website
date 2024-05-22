'use client';
import { colors } from '@/constants';
import { Box, Spinner } from '@chakra-ui/react';

type Props = {};

export const LoadingSkeleton = ({}: Props): JSX.Element => {
  return (
    <Box
      minHeight={'100vh'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner color={colors.green} thickness="4px" size="xl" />
    </Box>
  );
};
