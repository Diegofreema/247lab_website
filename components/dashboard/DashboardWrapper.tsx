'use client';
import { UserType } from '@/utils/types';
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { PlainCard } from '../ui/PlainCard';
import { DashboardHeader } from './DashboardHeader';
import { colors } from '@/constants';
import { EditIcon } from 'lucide-react';
import { useUpdateForm } from '@/lib/zustand/useUpdateForm';

interface Props {
  children: React.ReactNode;
  profile: UserType;
}

export const DashboardWrapper = ({ children, profile }: Props) => {
  const marginLeft = useBreakpointValue(
    {
      base: 100,
      md: 300,
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    }
  );
  return (
    <Grid
      gap={{ base: 10, md: 20 }}
      templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
      minHeight={'100vh'}
      marginLeft={marginLeft}
      transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
      transitionDuration=".2s, .2s, .35s"
      transitionProperty="top, bottom, width"
      transitionTimingFunction="linear, linear, ease"
      pb={50}
      pt={10}
      px={{ base: 0, md: 10 }}
    >
      <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }} hideBelow={'md'}>
        <SidePanel {...profile} />
      </GridItem>
    </Grid>
  );
};

const SidePanel = ({
  communityname,
  email,
  fname,
  lname,
  phone,
  statename,
  streetaddress,
}: UserType) => {
  const { onOpen } = useUpdateForm();

  return (
    <Box w="100%" h="100%" boxShadow={'lg'} display={'grid'} gap={10} p={10}>
      <PlainCard>
        <ProfileItem label="Email" text={email} />
        <ProfileItem label="Phone" text={phone} />
        <ProfileItem label="Community" text={communityname} />
        <ProfileItem label="State" text={statename} />
        <ProfileItem label="Address" text={streetaddress} />
      </PlainCard>
      <Button
        onClick={onOpen}
        bg={colors.green}
        color={'white'}
        w={'100%'}
        fontSize={14}
        fontFamily={'var(--font-rubik)'}
        leftIcon={<EditIcon size={16} color={'white'} />}
      >
        Edit
      </Button>
    </Box>
  );
};

const ProfileItem = ({ label, text }: { label: string; text: string }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Text fontWeight={'500'} fontSize={12} textColor={colors.textGrey}>
        {label}
      </Text>
      <Text fontWeight={'bold'} fontSize={14} textColor={colors.black}>
        {text}
      </Text>
      <Divider textColor={colors.green} color={colors.green} />
    </Box>
  );
};
