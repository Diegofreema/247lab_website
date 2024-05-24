'use client';
import { logout } from '@/actions/auth.actions';
import { colors } from '@/constants';
import { useOpenDrawer } from '@/lib/zustand/useOpenDrawer';
import {
  Box,
  Image,
  Flex,
  Text,
  Icon,
  Button,
  useBreakpointValue,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import {
  IconFlask,
  IconHome,
  IconHospital,
  IconLockAccess,
  IconLogout,
  IconNotification,
} from '@tabler/icons-react';
import { User } from 'lucide-react';
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
  const toast = useToast();
  const onLogout = async () => {
    await logout();
    toast({
      title: 'Logout successfully',
      description: 'We hope to see you soon',
      position: 'top-right',
      status: 'success',
    });
  };
  const width = useBreakpointValue(
    {
      base: 0,
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
      hideBelow={'md'}
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
      <Link href="/">
        <Image
          alt="logo"
          src="/logo.png"
          width={{ base: 100, md: 200 }}
          height={{ base: 50, md: 'auto' }}
          objectFit={'cover'}
        />
      </Link>
      <Links />
      <Box mt={'auto'} width={'100%'} hideBelow={'md'}>
        <Button
          onClick={onLogout}
          width={'100%'}
          bg="transparent"
          color={colors.orange}
          leftIcon={<IconLogout size={25} color={colors.orange} />}
        >
          Log out
        </Button>
      </Box>
      <Box
        mt={'auto'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        hideFrom={'md'}
      >
        <IconButton
          bg="transparent"
          onClick={onLogout}
          aria-label="Logout"
          icon={
            <Icon
              as={IconLogout}
              boxSize={{ base: 20, md: 25 }}
              color={colors.orange}
            />
          }
        />
      </Box>
    </Box>
  );
};

const Links = () => {
  const { onOpen } = useOpenDrawer();
  return (
    <Flex height={'100%'} flexDirection={'column'} gap={4}>
      {links.map((link) => (
        <LinkItem key={link.label} link={link} />
      ))}
      <IconButton
        onClick={onOpen}
        hideFrom={'md'}
        aria-label="button"
        icon={<Icon as={User} boxSize={25} color="black" />}
      />
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
