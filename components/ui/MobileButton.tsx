'use client';

import { colors } from '@/constants';
import { useOpenMobile } from '@/lib/zustand/useOpenMobile';
import { IconButton, Icon } from '@chakra-ui/react';
import { MenuIcon } from 'lucide-react';

export const MobileButton = (): JSX.Element => {
  const { onOpen } = useOpenMobile();
  return (
    <IconButton
      position={'fixed'}
      right={3}
      top={5}
      bg={colors.green}
      zIndex={555}
      color="white"
      aria-label="button"
      icon={<Icon as={MenuIcon} boxSize={25} />}
      onClick={onOpen}
    />
  );
};
