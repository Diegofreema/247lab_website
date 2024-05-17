import { cn } from '@/lib/utils';
import { Flex, IconButton, Image } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    icon: any;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mt-10  py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-700/70 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card idx={idx}>
            <Flex justifyContent={'center'}>
              <IconButton
                _hover={{
                  bg: '#fff',
                }}
                aria-label="icon"
                bg={'#fff'}
                isRound
                icon={item?.icon}
              />
            </Flex>
            <CardTitle>{item.text}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      whileInView={{
        opacity: 1,
        x: '0%',
        transition: {
          duration: 0.5,
          type: 'tween',
          damping: 7,
          delay: idx * 0.5,
        },
      }}
      viewport={{ once: true }}
      className={cn(
        'rounded-2xl h-full w-full p-4 group overflow-hidden shadow-md shadow-black bg-[#009A51] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 text-2xl group-hover:scale-110 transition duration-200">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        'text-[#fff] font-bold tracking-wide text-center mt-4',
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
