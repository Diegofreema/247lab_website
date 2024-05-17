'use client';
import { MyText } from '@/components/ui/MyText';
import { Box, Flex, IconButton, SimpleGrid } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { colors } from '../../constants';
import { BriefcaseMedical, Clock, HandCoins, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { CustomCard } from '@/components/ui/CustomCard';
import { Intro } from '@/components/ui/Intro';
interface Props {}
const cardsArray = [
  {
    icon: <Home />,
    title: 'Home Services',
    text: 'Lab-quality testing, right at your doorstep',
  },
  {
    icon: <Clock />,
    title: '27/7 Services',
    text: 'Round-the-clock testing services for your convenience and peace of mind.',
  },
  {
    icon: <HandCoins />,
    title: 'Affordable Prices',
    text: 'Quality testing at affordable rates, because your health matters. ',
  },
  {
    icon: <BriefcaseMedical />,
    title: 'Professional Doctors',
    text: 'Our dedicated professionals deliver precise results with care.',
  },
];
export const Choose = ({}: Props) => {
  return (
    <SimpleGrid pb={20} pt={'100px'} id="about">
      <Intro intro="Why choose us?" />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt={10} gap={10}>
        {cardsArray.map(({ icon: Icon, text, title }, index) => (
          <CustomCard
            key={index}
            title={title}
            text={text}
            index={index}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: {
                bounce: true,
                duration: 0.5,
                ease: 'easeIn',
                damping: 7,
                type: 'spring',
              },
            }}
          >
            <IconButton
              _groupHover={{
                color: colors.green,
                transition: `all ${0.3}s linear`,
                bg: 'white',
              }}
              isRound={true}
              bg={colors.green}
              color="white"
              aria-label="icon"
              icon={Icon}
            />
          </CustomCard>
        ))}
      </SimpleGrid>
    </SimpleGrid>
  );
};
