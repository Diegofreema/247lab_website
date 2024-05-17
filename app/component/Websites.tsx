import { HoverEffect } from '@/components/ui/Hover';
import { Intro } from '@/components/ui/Intro';
import { Box, Card, CardBody, CardHeader, SimpleGrid } from '@chakra-ui/react';
import { Activity, Ambulance, Hospital } from 'lucide-react';

type Props = {};
const links = [
  {
    link: 'https://247pharmacy.net/',

    text: '247Pharmacy',
    icon: <Hospital color="#009A51" size={30} />,
  },
  {
    link: 'https://247doc.net/',

    text: '247Doc',
    icon: <Ambulance color="#009A51" size={30} />,
  },
  {
    link: 'https://247Homehealth.net/',

    text: '247Homehealth',
    icon: <Activity color="#009A51" size={30} />,
  },
];
export const Websites = ({}: Props): JSX.Element => {
  return (
    <Box
      minH={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Intro intro="Check our other services" />
      <HoverEffect items={links} />
    </Box>
  );
};
