'use client';
import { Card, CardBody, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const PlainCard = ({ children }: Props) => {
  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      borderRadius={8}
      variant={'elevated'}
      bg={'#eee'}
      boxShadow={'md'}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};
