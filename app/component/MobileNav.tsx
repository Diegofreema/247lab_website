'use client';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Button,
  Drawer,
  Flex,
  Text,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HandPlatter, Info, Menu, MessageCircle } from 'lucide-react';
import { colors } from '../../constants';
import { IconBellCog, IconHome } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';
import { useOpen } from '@/lib/zustand/useOpen';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className="h-4 w-4 text-[#fff]" />,
  },
  {
    name: 'About',
    link: '/#about',
    icon: <Info className="h-4 w-4 text-[#fff] dark:text-white" />,
  },
  {
    name: 'Services',
    link: '/#services',
    icon: <HandPlatter className="h-4 w-4 text-[#fff] dark:text-white" />,
  },
  {
    name: 'Blog',
    link: 'https://blog.247pharmacy.net/',
    icon: <IconBellCog className="h-4 w-4 text-[#fff] dark:text-white" />,
  },
  {
    name: 'Contact',
    link: '/#contact',
    icon: <MessageCircle className="h-4 w-4 text-[#fff] dark:text-white" />,
  },
];
const MobileNav = ({ isOpen, onClose }: Props) => {
  const { onOpen } = useOpen();

  return (
    <Drawer
      colorScheme="white"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bg={colors.green} h={'100vh'}>
        <DrawerCloseButton />

        <DrawerBody
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
          gap={4}
          justifyItems={'center'}
        >
          {navItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <Flex alignItems={'center'} gap={2}>
                {item.icon}
                <Text color={'white'} fontFamily={'var(--font-rubik)'} ml={2}>
                  {item.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button onClick={onOpen} bg={'white'} color={colors.green} w={'100%'}>
            Login
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    // <Sheet>
    //   <SheetTrigger asChild className="z-[9999]">
    //     <Button shadow={'lg'} zIndex={9999}>
    //       <Menu color={colors.green} />
    //     </Button>
    //   </SheetTrigger>
    //   <SheetContent className="z-[999999]">
    //     <Flex
    //       flexDirection={'column'}
    //       gap={4}
    //       justifyContent={'center'}
    //       alignItems={'flex-start'}
    //     >
    //       {navItems.map((item, index) => (
    //         <SheetClose key={index} asChild>
    //           <Link href={item.link}>
    //             <Flex alignItems={'center'} gap={2}>
    //               {item.icon}
    //               <Text
    //                 color={colors.green}
    //                 fontFamily={'var(--font-rubik)'}
    //                 ml={2}
    //               >
    //                 {item.name}
    //               </Text>
    //             </Flex>
    //           </Link>
    //         </SheetClose>
    //       ))}

    //       <SheetClose asChild>
    //         <Button onClick={onOpen} bg={colors.green} w={'100%'}>
    //           Login
    //         </Button>
    //       </SheetClose>
    //     </Flex>
    //   </SheetContent>
    // </Sheet>
  );
};

export default MobileNav;
