'use client';

import { Intro } from '@/components/ui/Intro';
import { IconButton, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CircleUser, FlaskConical, MonitorCheck } from 'lucide-react';
import { CustomCard } from '@/components/ui/CustomCard';
import { colors } from '@/constants';

register();
interface Props {}

const arr = [
  {
    title: 'Booking Appointment',
    text: 'Create a user account and click BOOK APPOINTMENT to select the required Laboratory Test',
    icon: <CircleUser />,
  },
  {
    title: 'Prepare for Your Test',
    text: 'If you have elected for home service, our phlebotomist will get to you, otherwise visit our Laboratory to take the test.',
    icon: <FlaskConical />,
  },
  {
    title: 'Get Test Result',
    text: 'Your Test Result will be mailed to you in addition to the hard copy you receive at our Laboratory.',
    icon: <MonitorCheck />,
  },
];

export const Works = ({}: Props) => {
  return (
    <SimpleGrid mb={10}>
      <Intro intro="How it works" />
      <CardSlider />
    </SimpleGrid>
  );
};

const CardSlider = () => {
  return (
    <Carousel className="mt-[30px]">
      <CarouselContent>
        {arr.map(({ title, text, icon: Icon }, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <CustomCard title={title} text={text}>
              <IconButton
                _groupHover={{
                  color: colors.green,
                  transition: `all ${0.3}s linear`,
                  bg: 'white',
                }}
                isRound={true}
                bg={colors.green}
                aria-label="icon"
                icon={Icon}
              />
            </CustomCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
