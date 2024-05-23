'use client';
import { Intro } from '@/components/ui/Intro';
import { colors } from '@/constants';
import {
  Box,
  Button,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';

interface Props {}
const lists = [
  'Users can order laboratory tests online from the comfort of their homes.',
  'Doctors and Healthcare Professionals can also order laboratory tests on your behalf.',
  'We can visit your home to collect samples, where required.',
  'Test results can be accessed through our secure online portal and automatically pushed to doctors to facilitate speedy diagnosis and treatments.',
];
export const About = ({}: Props) => {
  return (
    <Box minH={'100vh'} id="about">
      <Intro intro="About us" />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} mt={10}>
        <Left />
        <Right />
      </SimpleGrid>
    </Box>
  );
};

const Left = () => {
  return (
    <Box
      as={motion.div}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 9 },
      }}
      viewport={{ once: true }}
    >
      <Text
        fontSize={'3xl'}
        mt={2}
        fontFamily={'var(--font-rubik)'}
        fontWeight={'bold'}
        color={colors.black}
      >
        274 Laboratory
      </Text>
      <Text
        fontSize={'md'}
        mt={2}
        fontFamily={'var(--font-rubik)'}
        color={colors.black}
      >
        247Laboratory.net is an integral part of the{' '}
        <Link href="https://247healthcare.africa/" className="underline">
          247healthcare.africa
        </Link>{' '}
        digital health ecosystem. We are pushing the boundaries of healthcare
        innovation and technology for the benefit of the ordinary African.
      </Text>
      <Text>Through the 247Laboratory.net app</Text>
      <UnorderedList mt={3}>
        {lists.map((item, i) => (
          <ListItem
            fontWeight={'500'}
            fontSize={15}
            fontStyle={'italic'}
            key={i}
          >
            {item}
          </ListItem>
        ))}
        <ListItem fontWeight={'500'} fontSize={15} fontStyle={'italic'}>
          Following virtual consultation on{' '}
          <Link href="https://247doc.net/" className="underline">
            247healthcare.africa
          </Link>{' '}
          our doctors can order tests, review the outcome of your tests, write
          your prescriptions, which can be ordered through 247pharmacy.net and
          delivered to you in record time. You can do all these and much more
          from the comfort of your home.
        </ListItem>
      </UnorderedList>
      {/* <Button bg={colors.green} width="100%" color="white" mt={5}>
        Learn more
      </Button> */}
    </Box>
  );
};

const Right = () => {
  return (
    <Box
      width={'100%'}
      as={motion.div}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 9 },
      }}
      viewport={{ once: true }}
    >
      <Image alt="image" src="/doc1.png" width={'100%'} height={'auto'} />
    </Box>
  );
};
