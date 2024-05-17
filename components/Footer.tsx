'use client';
import { colors } from '@/constants';
import { Box, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'next-view-transitions';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
interface Props {}

const footerLinks = [
  {
    title: 'About Us',
    subLinks: [
      {
        title: 'Blog',
        link: 'https://blog.247pharmacy.net/',
      },
      {
        title: 'Terms & Conditions',
        link: 'https://247pharmacy.net/terms',
      },

      {
        title: 'Privacy Policy',
        link: 'https://247pharmacy.net/policy',
      },
    ],
  },
  {
    title: 'Services',
    subLinks: [
      {
        title: '247Pharmacy',
        link: 'https://247pharmacy.net/',
      },
      {
        title: '247Doc',
        link: 'https://247doc.net/',
      },
      {
        title: '247Homehealth',
        link: 'https://247Homehealth.net/',
      },
    ],
  },
  {
    title: 'Related Links',
    subLinks: [
      {
        title: 'Everight Diagnostic & Laboratory Services Limited',
        link: 'https://everightlab.com/',
      },
      {
        title: 'NetPro International Limited',
        link: 'https://netpro.africa/',
      },
      {
        title: 'NetPro.Software',
        link: 'https://netpro.software/',
      },
    ],
  },
  {
    title: 'Social Links',
    subLinks: [
      {
        title: 'Facebook',
        link: 'https://web.facebook.com/247Pharmacy.net?mibextid=2JQ9oc&_rdc=1&_rdr',
        icon: <IconBrandFacebook color="#009A51" size={30} />,
      },
      {
        title: 'Twitter',
        link: 'https://twitter.com/i/flow/login?redirect_after_login=%2F247Pharmacy_net',
        icon: <IconBrandTwitter color="#009A51" size={30} />,
      },
      {
        title: 'Instagram',
        link: 'https://www.instagram.com/247pharmacy.net_/?igsh=MWRvYnp0eHpycGxlbA%3D%3D',
        icon: <IconBrandInstagram color="#009A51" size={30} />,
      },
    ],
  },
];

export const Footer = ({}: Props) => {
  return (
    <SimpleGrid
      as={motion.div}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 7 },
      }}
      viewport={{ once: true }}
      columns={{ base: 1, md: 4 }}
      gap={4}
      bg={'#DFF2E9'}
      minH={'200px'}
      w={'100%'}
      p={10}
    >
      {footerLinks.map((link) => (
        <Flex flexDirection="column" key={link.title} gap={4}>
          <Heading size="md" textColor={colors.green}>
            {link.title}
          </Heading>
          <Box display="flex" flexDirection="column" gap={2}>
            {link.subLinks.map((subLink) => (
              <Flex
                as={motion.div}
                initial={{ x: 0 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                key={subLink.title}
                alignItems={'center'}
                gap={2}
                width={'fit-content'}
              >
                {/* @ts-ignore */}
                {subLink?.icon && subLink?.icon}
                <Link key={subLink.title} href={subLink.link} target="_blank">
                  <Text
                    fontWeight={'bold'}
                    fontFamily={'var(--font-rubik)'}
                    textDecoration={'underline'}
                    textDecorationColor={colors.green}
                    textColor="black"
                  >
                    {subLink.title}
                  </Text>
                </Link>
              </Flex>
            ))}
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
};
