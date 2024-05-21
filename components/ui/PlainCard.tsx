'use client';
import { Card, CardBody, Flex } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const PlainCard = ({ children }: Props) => {
  return (
    <Card borderRadius={8} variant={'elevated'} bg={'#eee'} boxShadow={'md'}>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
