'use client';
import { Wrapper } from '@/components/Wrapper';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Header } from './component/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/dashboard/Container';
import { colors } from '@/constants';
interface Props {}

export default function NotFound({}: Props) {
  const router = useRouter();
  return (
    <Container>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        h={'100vh'}
        gap={5}
        flexDirection={'column'}
      >
        <Heading textColor="black">Page Not Found</Heading>
        <Button bg={colors.green} color={'white'} onClick={() => router.back()}>
          Go back
        </Button>
      </Flex>
    </Container>
  );
}
