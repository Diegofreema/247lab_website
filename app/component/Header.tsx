'use client';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  MenuIcon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { colors } from '../../constants';
import { Link } from 'next-view-transitions';
import { MyText } from '@/components/ui/MyText';
import { motion } from 'framer-motion';
import { HamburgerIcon } from '@chakra-ui/icons';
import MobileNav from './MobileNav';
import { IconMenu } from '@tabler/icons-react';
interface Props {}
const siteLinks = [
  {
    name: 'About',
    link: '/#about',
  },
  {
    name: 'Services',
    link: '/#services',
  },
  {
    name: 'Blog',
    link: 'https://blog.247pharmacy.net/',
  },
  {
    name: 'Contact Us',
    link: '/#contact',
  },
];

export const Header = ({}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <motion.div
      className="w-[90%] md:w-[80%] mx-auto flex py-5 justify-between items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
          ease: 'easeIn',
          bounce: true,
        },
      }}
      style={{
        backgroundColor: 'transparent',
        zIndex: 555,
      }}
    >
      <Link href={'/'} className="inline-block bg-white">
        <Image
          alt="logo"
          src="/logo.png"
          width={{ base: 120, md: 150 }}
          height={'auto'}
          objectFit={'cover'}
        />
      </Link>
      <ContactDetails />
      <div className="block md:hidden">
        <Button onClick={onOpen}>
          <IconMenu className="w-6 h-6 text-[#009a51]" />
        </Button>
        <MobileNav isOpen={isOpen} onClose={onClose} />
      </div>
    </motion.div>
  );
};

const ContactDetails = () => {
  return (
    <Flex flexDir={'column'} gap={2} hideBelow={'md'}>
      <Text
        textColor="black"
        fontFamily={'var(--font-rubik)'}
        fontSize={14}
        fontWeight={'bold'}
      >
        Telephone: 08052255000
      </Text>
      <Text
        textColor="black"
        fontFamily={'var(--font-rubik)'}
        fontSize={14}
        fontWeight={'bold'}
      >
        Email: ask@247healthcare.africa
      </Text>
      <Text
        textColor="black"
        fontFamily={'var(--font-rubik)'}
        fontSize={14}
        fontWeight={'bold'}
      >
        For media and publicity queries, please email :
      </Text>
      <Text
        textColor="black"
        fontFamily={'var(--font-rubik)'}
        fontSize={14}
        fontWeight={'bold'}
      >
        media@247healthcare.africa
      </Text>
    </Flex>
  );
};
