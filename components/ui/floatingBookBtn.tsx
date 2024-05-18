import { colors } from '@/constants';
import { Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const FloatingBookBtn = (props: Props) => {
  return (
    <div className="fix bottom-5 right-0  flex items-center justify-center  bg-[#009a51] w-[50px]  h-[50px] shadow shadow-black animate-pulse duration-[5000] rounded-full">
      <Text
        fontSize={12}
        fontWeight={'bold'}
        fontFamily={'var(--font-rubik)'}
        textColor={'white'}
      >
        Book
      </Text>
    </div>
  );
};

export default FloatingBookBtn;
