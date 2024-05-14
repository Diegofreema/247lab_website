import { colors } from '@/constants';
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type Props = TextProps & {
  children: React.ReactNode;
};

export const MyText = ({ children, ...props }: Props) => {
  const textColor = useColorModeValue(colors.black, 'white');
  return (
    <Text {...props} textColor={'black'} fontFamily={'var(--font-rubik)'}>
      {children}
    </Text>
  );
};
