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
import { AnimatePresence, Variants, motion } from 'framer-motion';

const MotionLink = motion(Link);
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
  const onLogin = () => {
    onClose();
    onOpen();
  };
  const quote: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.06,
      },
    },
  };
  const singleWord: Variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <Drawer
      colorScheme="white"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />

      <DrawerContent bg={colors.green}>
        <DrawerCloseButton color="white" />

        <DrawerBody
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
          gap={4}
        >
          {/* <AnimatePresence> */}
          <Flex
            // as={motion.div}
            // variants={variants}
            // initial="closed"
            // animate={isOpen ? 'open' : 'closed'}
            // exit={'closed'}
            height={'100%'}
            flexDirection={'column'}
            gap={4}
            justifyContent={'center'}
            alignItems={'center'}
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
                  {/* {item.icon} */}
                  <Text
                    as={motion.p}
                    variants={quote}
                    initial="initial"
                    animate="animate"
                    color={'white'}
                    fontFamily={'var(--font-rubik)'}
                    ml={2}
                  >
                    {item.name.split('').map((letter, index) => (
                      <motion.span
                        custom={index}
                        key={index}
                        variants={singleWord}
                        className="inline-block"
                      >
                        {letter}&nbsp;
                      </motion.span>
                    ))}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
          {/* </AnimatePresence> */}
        </DrawerBody>

        <DrawerFooter>
          <Button
            onClick={onLogin}
            bg={'white'}
            color={colors.green}
            w={'100%'}
            mb={10}
            fontFamily={'var(--font-rubik)'}
          >
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
