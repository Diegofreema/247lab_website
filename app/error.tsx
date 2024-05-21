'use client'; // Error components must be Client Components

import { Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const textColor = useColorModeValue('#000', '#fff');
  return (
    <Flex
      minH="100vh"
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Heading textColor={'black'} size={'lg'} mb={5}>
        Something went wrong!
      </Heading>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Flex>
  );
}
