'use client';
import { UserType } from '@/utils/types';
import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';

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
      templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
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
      <GridItem colSpan={{ base: 1, md: 1 }} hideBelow={'md'}>
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
  return (
    <Box w="100%" h="100%" boxShadow={'lg'} p={10}>
      dfdsf
    </Box>
  );
};
