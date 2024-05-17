'use client';
import { Wrapper } from '@/components/Wrapper';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { Hero } from './component/Hero';
import { Choose } from './component/Choose';
import { Works } from './component/Works';
import { Services } from './component/Services';
import { BackgroundImage } from './component/BackgroundImage';
import Transition from '@/components/ui/Transition';
import { Websites } from './component/Websites';
import { ContactForm } from './component/ContactForm';
import { ScrollIndicator } from '@/components/ui/scrollIndicator';

export default function Home() {
  return (
    <Wrapper>
      <ScrollIndicator />
      <Transition />
      <Hero />
      <Choose />
      <Works />
      <Services />
      <BackgroundImage />
      <Websites />
      <ContactForm />
    </Wrapper>
  );
}
