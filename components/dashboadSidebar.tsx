'use client';
import { colors } from '@/constants';
import {
  Box,
  Image,
  Flex,
  Text,
  Icon,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  IconFlask,
  IconHome,
  IconHospital,
  IconLockAccess,
  IconLogout,
  IconNotification,
} from '@tabler/icons-react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import path from 'path';

interface Props {}
const links = [
  {
    label: 'Home',
    href: '/dashboard/home',
    icon: IconHome,
  },
  {
    label: 'Tests',
    href: '/dashboard/tests',
    icon: IconFlask,
  },
  {
    label: 'All labs',
    href: '/dashboard/all-labs',
    icon: IconHospital,
  },
  {
    label: 'Privacy Policy',
    href: 'https://247pharmacy.net/policy',
    icon: IconLockAccess,
  },
  {
    label: 'Terms and Conditions',
    href: 'https://247pharmacy.net/terms',
    icon: IconNotification,
  },
];
export const DashBoardSidebar = ({}: Props) => {
  const width = useBreakpointValue(
    {
      base: 50,
      md: 300,
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    }
  );
  return (
    <Box
      display={'flex'}
      position={'fixed'}
      top={0}
      left={0}
      flexDirection={'column'}
      minH={'100vh'}
      bg={'white'}
      width={width}
      p={10}
      gap={10}
      alignItems={'center'}
      boxShadow={'lg'}
      transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
      transitionDuration=".2s, .2s, .35s"
      transitionProperty="top, bottom, width"
      transitionTimingFunction="linear, linear, ease"
    >
      <Image
        alt="logo"
        src="/logo.png"
        width={{ base: 100, md: 200 }}
        height={{ base: 50, md: 'auto' }}
        objectFit={'cover'}
      />
      <Links />
      <Box mt={'auto'} width={'100%'} hideBelow={'md'}>
        <Button
          width={'100%'}
          bg="transparent"
          color={colors.orange}
          leftIcon={<IconLogout size={25} color={colors.orange} />}
        >
          Log out
        </Button>
      </Box>
      <Box mt={'auto'} width={'100%'} hideFrom={'md'}>
        <IconLogout size={25} color={colors.orange} />
      </Box>
    </Box>
  );
};

const Links = () => {
  return (
    <Flex height={'100%'} flexDirection={'column'} gap={4}>
      {links.map((link) => (
        <LinkItem key={link.label} link={link} />
      ))}
    </Flex>
  );
};

const LinkItem = ({ link }: { link: (typeof links)[0] }) => {
  const pathname = usePathname();

  const isActive = pathname.includes(link.href);
  const { icon: MyIcon, label, href } = link;
  return (
    <Link href={href}>
      <Flex
        gap={3}
        alignItems={'center'}
        bg={isActive ? colors.green : 'transparent'}
        p={2}
        borderRadius={5}
        _hover={{
          bg: colors.green,
          color: 'white',
          transition: 'all 0.3s ease',
        }}
        role="group"
      >
        <Icon
          as={MyIcon}
          _groupHover={{ color: 'white', transition: 'all 0.3s ease' }}
          color={isActive ? 'white' : 'black'}
          boxSize={25}
        />
        <Text
          hideBelow={'md'}
          _groupHover={{ color: 'white', transition: 'all 0.3s ease' }}
          color={isActive ? 'white' : 'black'}
          fontWeight={'bold'}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  );
};
