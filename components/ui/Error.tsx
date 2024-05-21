'use client';
import { Button, Flex, Heading } from '@chakra-ui/react';

interface Props {
  retry: () => void;
}

export const ErrorCom = ({ retry }: Props) => {
  return (
    <Flex
      justifyContent={'center'}
      gap={3}
      alignItems={'center'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Heading fontSize={{ base: 15, md: 20 }} textAlign={'center'}>
        Something went wrong please try again
      </Heading>
      <Button onClick={retry} bg={'#009a51'} color={'white'}>
        Retry
      </Button>
    </Flex>
  );
};
