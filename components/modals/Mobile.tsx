'use client';

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { UserType } from '@/utils/types';
import { useOpenMobile } from '@/lib/zustand/useOpenMobile';
import { MobileSideBar } from '../dashboard/DashboardMobileSidebar';
import { colors } from '@/constants';

export function MobileDrawer() {
  const { isOpen, onClose } = useOpenMobile();

  return (
    <Drawer
      isOpen={isOpen}
      colorScheme="white"
      placement="top"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bg={'white'}>
        <DrawerCloseButton color="black" />
        <DrawerBody>
          <MobileSideBar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
