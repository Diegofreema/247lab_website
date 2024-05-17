'use client';
import { Card, CardBody, CardHeader, IconButton } from '@chakra-ui/react';
import { HomeIcon, LucideIcon, LucideProps } from 'lucide-react';
import { MyText } from './MyText';
import { TargetAndTransition, VariantLabels, motion } from 'framer-motion';
import { colors } from '@/constants';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

type Props = {
  index?: number;
  title: string;
  text: string;
  children: React.ReactNode;
  whileHover?: VariantLabels | TargetAndTransition;
  whileInView?: VariantLabels | TargetAndTransition;
  finalIndex?: number;
  initial?: boolean | VariantLabels;
  active?: boolean;
};

export const CustomCard = ({
  index,
  active,
  text,
  title,
  children,
  whileHover,
  finalIndex = index || 1,
  whileInView = {
    opacity: 1,
    y: 0,
    transition: {
      bounce: true,
      duration: 0.5,
      ease: 'easeIn',
      delay: 0.2 * finalIndex,
      damping: 7,
      type: 'spring',
    },
  },
  // @ts-ignore
  initial = { opacity: 0, y: 100 },
}: Props): JSX.Element => {
  const textColor = active ? '#fff' : '#000';
  return (
    <Card
      transform={active ? 'translateY(-20px)' : 'translateY(0)'}
      as={motion.div}
      initial={initial}
      whileInView={whileInView}
      whileHover={whileHover}
      viewport={{ once: true }}
      paddingBottom={{ base: 10, md: 5 }}
      cursor={'pointer'}
      borderRadius={'10px'}
      role="group"
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      bg={'white'}
      shadow={'lg'}
      _hover={{
        bg: colors.green,
        transform: 'translateY(-10px)',
        transition: 'all 0.3s linear',
      }}
    >
      <CardHeader>{children}</CardHeader>
      <CardBody>
        <MyText
          _groupHover={{
            color: 'white',
            transition: `all ${0.2}s linear`,
          }}
          textAlign={'center'}
          textColor={'black'}
          fontSize={'20px'}
          fontWeight={'500'}
        >
          {title}
        </MyText>
        <MyText
          _groupHover={{
            color: 'white',
            transition: `all ${0.3}s linear`,
          }}
          textAlign={'center'}
          textColor={'black'}
        >
          {text}
        </MyText>
      </CardBody>
    </Card>
  );
};
