'use client';
import { MyText } from '@/components/ui/MyText';
import { colors } from '@/constants';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {
  intro: string;
};

export const Intro = ({ intro }: Props): JSX.Element => {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          bounce: true,
          damping: 7,
          ease: 'easeIn',
          type: 'spring',
        },
      }}
      viewport={{ once: true }}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
    >
      <MyText
        textAlign={'center'}
        color={'black'}
        fontSize={{ base: '3xl', md: '5xl' }}
      >
        {intro}
      </MyText>
      <Box width={'100px'} h="4px" bg={colors.green} />
    </Flex>
  );
};
