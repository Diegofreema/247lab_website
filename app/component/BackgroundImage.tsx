import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {};

export const BackgroundImage = ({}: Props): JSX.Element => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      w="100%"
      pt={100}
      viewport={{ once: true }}
    >
      <Image alt="image" src="/bg.png" w={'100%'} maxH={200} />
    </Box>
  );
};
