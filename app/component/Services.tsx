'use client';
import { colors } from '@/constants';
import { Box, Card, CardBody, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Ambulance, Dna, FlaskConical, Shield } from 'lucide-react';

interface Props {}

const array = [
  {
    icon: <FlaskConical />,
    text: 'Complete Blood Test, Blood Chemistry Panel, Lipid Profile, Blood Glucose Test Blood Type and RH Factor',
    title: 'Blood Test',
  },
  {
    icon: <Dna />,
    text: 'Genetic Sequencing, Carrier Screening, Genetic Predisposition Testing',
    title: 'Genetic Testing',
  },
  {
    icon: <Ambulance />,
    text: 'Routine Urinalysis, Urine Culture, Urine Drug Screening',
    title: 'Urinalysis',
  },
  {
    icon: <Shield />,
    text: 'Bacteria Culture & sensitivity, Fungal Culture, Parasitology Examination',
    title: 'Microbiology Test',
  },
];
export const Services = ({}: Props) => {
  return (
    <SimpleGrid
      pt={'100px'}
      id="services"
      columns={{ base: 1, md: 2 }}
      gap={10}
      minHeight={'100vh'}
      mt={{ base: 50, md: 100 }}
      flexDirection={{ base: 'column-reverse', md: 'column' }}
    >
      <Left />
      <Right />
    </SimpleGrid>
  );
};

const Left = () => {
  return (
    <Box>
      <Box
        as={motion.div}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, type: 'spring', damping: 7 },
        }}
        viewport={{ once: true }}
      >
        <Text fontSize={'sm'} fontWeight={'bold'} color={colors.green}>
          Services
        </Text>

        <Text fontSize={'3xl'} mt={2} fontWeight={'bold'} color={colors.black}>
          Test Categories
        </Text>
        <Text fontSize={'md'} mt={2} color={colors.black}>
          Explore our wide lab test range, including blood work, genetics, and
          imaging. Get accurate results fast, ensuring your well-being. Book now
          for peace of mind.
        </Text>
      </Box>

      <Box mt={5} display={'flex'} flexDirection={'column'} gap={4}>
        {array.map((item, i) => (
          <ItemCard {...item} key={i} index={i} />
        ))}
      </Box>
    </Box>
  );
};

const Right = () => {
  return (
    <SimpleGrid
      as={motion.div}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 7 },
      }}
      viewport={{ once: true }}
      paddingBottom={{ base: 50, md: 20 }}
    >
      <Image
        alt="image"
        src="/micro.png"
        width={'100%'}
        height={'100%'}
        objectFit={'contain'}
      />
    </SimpleGrid>
  );
};

const ItemCard = ({
  icon: Icon,
  text,
  title,
  index,
}: (typeof array)[0] & { index: number }) => {
  return (
    <Card
      cursor={'pointer'}
      as={motion.div}
      bg={'#eee'}
      initial={{ x: 0, y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: 'tween',
          damping: 10,
          delay: 0.2 * index,
        },
      }}
      whileHover={{
        x: 20,
        transition: { duration: 0.3 },
      }}
      viewport={{ once: true }}
    >
      <CardBody display={'flex'} gap={5}>
        <Box bg={colors.green} p={3} height={'fit-content'} borderRadius={4}>
          {Icon}
        </Box>
        <Box>
          <Text fontWeight={'bold'} fontSize={'md'} textColor={colors.black}>
            {title}
          </Text>
          <Text fontSize={'sm'} fontWeight={'500'} color={colors.black}>
            {text}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};
