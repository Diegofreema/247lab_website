'use client';

import { Intro } from '@/components/ui/Intro';
import {
  IconButton,
  SimpleGrid,
  Text,
  Box,
  Flex,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { register } from 'swiper/element';
import { CircleUser, FlaskConical, MonitorCheck } from 'lucide-react';
import { CustomCard } from '@/components/ui/CustomCard';
import { colors } from '@/constants';
import { Variants, motion } from 'framer-motion';

register();
interface Props {}

const arr = [
  {
    title: 'Sign Up for Free',
    text: 'Create a free account and get started by choosing the best time that suites your Schedule',
    icon: <CircleUser />,
  },
  {
    title: 'Book Service',
    text: 'Create a free account and get started by choosing the best time that suites your Schedule',
    icon: <FlaskConical />,
  },
  {
    title: 'Pay for selected service',
    text: 'Create a free account and get started by choosing the best time that suites your Schedule',
    icon: <MonitorCheck />,
  },
  {
    title: 'View Booked Service',
    text: 'Create a free account and get started by choosing the best time that suites your Schedule',
    icon: <MonitorCheck />,
  },
];

export const Works = ({}: Props) => {
  return (
    <SimpleGrid mb={10}>
      <Intro intro="How it works" />
      <CardSlider />
    </SimpleGrid>
  );
};

const CardSlider = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => {
        if (prev === arr.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [activeCardIndex]);

  const variants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 7,
        ease: 'easeIn',
        bounce: true,
      },
    },

    closed: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 7,
        ease: 'easeIn',
        bounce: true,
      },
    },
  };
  return (
    <>
      <SimpleGrid
        hideBelow={'md'}
        columns={{ base: 1, md: 4 }}
        gap={10}
        mt={10}
        alignItems="center"
        justifyContent="center"
      >
        {arr.map((_, index) => (
          <Flex
            as={motion.div}
            variants={variants}
            initial="closed"
            whileInView={activeCardIndex === index ? 'open' : 'closed'}
            key={index}
            alignItems={'center'}
            gap={5}
            justifyContent={'center'}
          >
            <Text key={index} color={colors.green} fontWeight={'bold'}>
              Step {index + 1}
            </Text>
            <Image alt="arrow" src="/arrow.png" width={50} />
          </Flex>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={10} mt={10}>
        {arr.map(({ title, text, icon: Icon }, index) => (
          <CustomCard
            title={title}
            text={text}
            key={index}
            active={activeCardIndex === index}
            index={index}
          >
            <IconButton
              _groupHover={{
                color: colors.green,
                transition: `all ${0.3}s linear`,
                bg: 'white',
              }}
              isRound={true}
              bg={activeCardIndex === index ? 'white' : colors.green}
              aria-label="icon"
              color={activeCardIndex === index ? colors.green : 'white'}
              icon={Icon}
            />
          </CustomCard>
        ))}
      </SimpleGrid>
    </>
  );
};
