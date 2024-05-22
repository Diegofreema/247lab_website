import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import React from 'react';

type Props = {
  link: string;
  text: string;
};

export default function SeeAll({ link, text }: Props) {
  return (
    <Flex justifyContent={'space-between'} mt={10} mb={5} alignItems={'center'}>
      <Text fontFamily={'var(--font-rubik)'}>{text}</Text>
      <Link className="text-[#009a51] font-bold underline" href={link}>
        See all
      </Link>
    </Flex>
  );
}
