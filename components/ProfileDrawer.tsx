'use client';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { ProfileItem, SidePanel } from './dashboard/DashboardWrapper';
import { UserType } from '@/utils/types';
import { useOpenDrawer } from '@/lib/zustand/useOpenDrawer';
import { PlainCard } from './ui/PlainCard';
import { EditIcon } from '@chakra-ui/icons';
import { colors } from '@/constants';
import { useUpdateForm } from '@/lib/zustand/useUpdateForm';

export function ProfileDrawer(profile: UserType) {
  const { isOpen, onClose } = useOpenDrawer();
  const {
    communityname,
    email,
    fname,
    lname,
    phone,
    statename,
    streetaddress,
  } = profile;
  const { onOpen } = useUpdateForm();
  const { onClose: OnClose } = useOpenDrawer();
  const onHandleEdit = () => {
    OnClose();
    onOpen();
  };
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody mt={20}>
          <PlainCard>
            <Text
              textColor={'black'}
              fontSize={15}
              fontFamily={'var(--font-rubik)'}
              fontWeight={'bold'}
            >
              Profile
            </Text>
            <ProfileItem label="Email" text={email} />
            <ProfileItem label="Phone" text={phone} />
            <ProfileItem label="Community" text={communityname} />
            <ProfileItem label="State" text={statename} />
            <ProfileItem label="Address" text={streetaddress} />
          </PlainCard>
        </DrawerBody>
        <DrawerFooter>
          <Button
            onClick={onHandleEdit}
            bg={colors.green}
            color={'white'}
            w={'100%'}
            fontSize={14}
            fontFamily={'var(--font-rubik)'}
            leftIcon={<EditIcon boxSize={5} color={'white'} />}
          >
            Edit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
