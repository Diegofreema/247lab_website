'use client';
import { Wrapper } from '@/components/Wrapper';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { Hero } from './component/Hero';
import { Choose } from './component/Choose';
import { Works } from './component/Works';

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Choose />
      <Works />
    </Wrapper>
  );
}
