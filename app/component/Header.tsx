'use client';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  MenuIcon,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../constants';
import { Link } from 'next-view-transitions';
import { MyText } from '@/components/ui/MyText';
import { motion } from 'framer-motion';
import { HamburgerIcon } from '@chakra-ui/icons';
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
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 7,
          ease: 'easeIn',
          bounce: true,
        },
      }}
      style={{
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 555,
      }}
    >
      <Box
        bg={'#fff'}
        position={'sticky'}
        top={0}
        zIndex={10}
        shadow={'lg'}
        blur={'10%'}
      >
        <Flex
          mx={'auto'}
          maxWidth={{ base: '90%', md: '80%' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          w={'100%'}
          py={4}
        >
          <Link href={'/'}>
            <Image
              alt="logo"
              src="/logo.png"
              width={{ base: 120, md: 200 }}
              height={50}
              objectFit={'cover'}
            />
          </Link>
          <Links />
          <AuthButtons />
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon color={colors.black} fontSize={'20px'} />}
            display={{ base: 'block', lg: 'none' }}
          />
        </Flex>
      </Box>
    </motion.nav>
  );
};

const Links = () => {
  return (
    <Flex gap={10} hideBelow={'lg'}>
      {siteLinks.map((link, i) => (
        <Link key={i} href={link.link}>
          <Text
            fontFamily={'var(--font-rubik)'}
            _hover={{
              color: colors.green,
              transform: 'scale(1.1)',
              transition: 'all 0.3s linear',
            }}
            textColor={colors.black}
            fontWeight={'bold'}
          >
            {link.name}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

const AuthButtons = () => {
  return (
    <Flex alignItems={'center'} gap={5} hideBelow={'lg'}>
      <Link href={'/login'}>
        <Button
          color={colors.green}
          borderWidth={1}
          _hover={{
            color: 'white',
            bg: colors.green,
            border: '1px solid green',
          }}
          borderColor={colors.green}
        >
          Login
        </Button>
      </Link>

      <Link href={'/signup'}>
        <Button
          bg={colors.green}
          _hover={{
            color: colors.green,
            bg: 'white',
          }}
          color="white"
          borderColor={colors.green}
          borderWidth={1}
        >
          Sign Up
        </Button>
      </Link>
    </Flex>
  );
};

export const TopHeader = () => {
  return (
    <Box bg={colors.green}>
      <Flex>
        <Box>
          <Text></Text>
        </Box>
        <Box>
          <Text></Text>
        </Box>
      </Flex>
    </Box>
  );
};
