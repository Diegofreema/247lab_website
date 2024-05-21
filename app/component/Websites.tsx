import { HoverEffect } from '@/components/ui/Hover';
import { Intro } from '@/components/ui/Intro';
import { Box, Card, CardBody, CardHeader, SimpleGrid } from '@chakra-ui/react';
import { IconCash } from '@tabler/icons-react';
import { Activity, Ambulance, Hospital, Truck } from 'lucide-react';

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
    link: '',

    text: '247Homehealth',
    icon: <Activity color="#009A51" size={30} />,
  },
  {
    link: 'https://247delivery.net/',

    text: '247Delivery',
    icon: <Truck color="#009A51" size={30} />,
  },

  {
    link: '',
    text: '247Money',
    icon: <IconCash color="#009A51" size={30} />,
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
