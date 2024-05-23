'use client';
import { logout } from '@/actions/auth.actions';
import { colors } from '@/constants';
import { useOpenDrawer } from '@/lib/zustand/useOpenDrawer';
import { useOpenMobile } from '@/lib/zustand/useOpenMobile';
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
import { motion } from 'framer-motion';
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
export const MobileSideBar = ({}: Props) => {
  const toast = useToast();
  const { onClose } = useOpenMobile();
  const onLogout = async () => {
    await logout();
    onClose();
    toast({
      title: 'Logout successfully',
      description: 'We hope to see you soon',
      position: 'top-right',
      status: 'success',
    });
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      p={10}
      gap={10}
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
      <Box
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 7,
            delay: 8 * 0.3,
          },
        }}
        mt={'auto'}
        width={'100%'}
      >
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
    </Box>
  );
};

const Links = () => {
  const { onOpen } = useOpenDrawer();
  const { onClose } = useOpenMobile();

  const onOpenDrawer = () => {
    onClose();
    onOpen();
  };
  const customIndex = links.length + 1;
  return (
    <Flex height={'100%'} flexDirection={'column'} gap={4}>
      {links.map((link, i) => (
        <LinkItem key={link.label} link={link} index={i} />
      ))}
      <Flex
        onClick={onOpenDrawer}
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 7,
            delay: customIndex * 0.3,
          },
        }}
        viewport={{ once: true }}
        alignItems={'center'}
        gap={5}
      >
        <IconButton
          bg="transparent"
          hideFrom={'md'}
          aria-label="button"
          icon={<Icon as={User} boxSize={25} color="black" />}
        />
        <Text
          _groupHover={{ color: 'white', transition: 'all 0.3s ease' }}
          fontWeight={'bold'}
          textColor="black"
        >
          Profile
        </Text>
      </Flex>
    </Flex>
  );
};

const LinkItem = ({
  link,
  index,
}: {
  link: (typeof links)[0];
  index: number;
}) => {
  const pathname = usePathname();
  const { onClose } = useOpenMobile();
  const onClick = () => {
    onClose();
  };
  const isActive = pathname.includes(link.href);
  const { icon: MyIcon, label, href } = link;
  return (
    <Box
      as={motion.div}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 7,
          delay: index * 0.3,
        },
      }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
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
            _groupHover={{ color: 'white', transition: 'all 0.3s ease' }}
            color={isActive ? 'white' : 'black'}
            fontWeight={'bold'}
          >
            {label}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
