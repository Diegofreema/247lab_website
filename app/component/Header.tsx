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
import { Mail, Phone } from 'lucide-react';
interface Props {
  patientId?: string | undefined;
}
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

export const Header = ({ patientId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <motion.div
      className="w-full mx-auto flex py-5 justify-between items-center"
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
        <MobileNav isOpen={isOpen} onClose={onClose} patientId={patientId} />
      </div>
    </motion.div>
  );
};

const ContactDetails = () => {
  return (
    <Flex flexDir={'row'} gap={2} hideBelow={'md'}>
      <Flex alignItems={'center'} gap={2}>
        <Phone color={colors.green} size={20} />
        <Text
          textColor="black"
          fontFamily={'var(--font-rubik)'}
          fontSize={14}
          fontWeight={'bold'}
        >
          08052255000
        </Text>
      </Flex>

      <Flex alignItems={'center'} gap={2}>
        <Mail color={colors.green} size={20} />
        <Text
          textColor="black"
          fontFamily={'var(--font-rubik)'}
          fontSize={14}
          fontWeight={'bold'}
        >
          ask@247healthcare.africa
        </Text>
      </Flex>
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
