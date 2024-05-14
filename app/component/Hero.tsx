'use client';
import { Container } from '@/components/ui/Container';
import { MyText } from '@/components/ui/MyText';
import { colors } from '@/constants';
import { motion } from 'framer-motion';
import {
  Box,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Image,
  Button,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';

interface Props {}

export const Hero = ({}: Props) => {
  return (
    <Container>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: 'easeIn',
              bounce: true,
              type: 'spring',
              damping: 7,
            },
          }}
          viewport={{ once: true }}
        >
          <Box display="flex" flexDirection="column" gap={5}>
            <Heading
              as="h1"
              textColor={'black'}
              fontSize={{ base: '4xl', md: '5xl' }}
            >
              <Highlight
                query={['Medical', 'Lab']}
                styles={{ color: colors.green }}
              >
                Get Instant Medical Lab Services at your Finger Tips
              </Highlight>
            </Heading>
            <MyText fontWeight={'500'}>
              247Doctor Africa’s Premium Virtual Consultation Service, We are
              available to speak with you 24/7, Our team of fully qualified and
              trusted Doctors, Pharmacists, Alternative Healthcare Practitioners
              and Mental Health Specialists are available to provide video
              consultations anywhere, anytime.
            </MyText>
            <Link href="/labs" passHref>
              <Button
                className="animate-pulse"
                _hover={{
                  transform: 'translateX(10px)',
                  transition: 'all 0.3s ease-in-out',
                  bg: colors.green,
                  color: 'white',
                }}
                bg={colors.green}
                color="white"
              >
                Book an appointment
              </Button>
            </Link>
          </Box>
        </motion.div>

        <Right />
      </SimpleGrid>
    </Container>
  );
};

const Right = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: 'easeIn',
          bounce: true,
          type: 'spring',
          damping: 7,
        },
      }}
      viewport={{ once: true }}
    >
      <SimpleGrid gap={5} columns={{ base: 1, md: 2 }} hideBelow={'md'}>
        <Image alt="image" src="/he.png" />
        <Image alt="image" src="/h.png" mt={30} />
      </SimpleGrid>
    </motion.div>
  );
};
