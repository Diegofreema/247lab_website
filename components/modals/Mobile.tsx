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

export function MobileDrawer() {
  const { isOpen, onClose } = useOpenMobile();

  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <MobileSideBar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
