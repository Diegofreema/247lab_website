'use client';
import { Flex, Spinner } from '@chakra-ui/react';

interface Props {}

export const LoadingComponent = ({}: Props) => {
  return (
    <Flex height={'200px'} justifyContent={'center'} alignItems={'center'}>
      <Spinner color="#009A51" />
    </Flex>
  );
};
