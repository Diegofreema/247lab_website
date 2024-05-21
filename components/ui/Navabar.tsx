import React from 'react';
import { FloatingNav } from '../ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import LoginButtonContainer from './LoginButton';
export function FloatingNavbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/#about',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Services',
      link: '/#services',
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: 'Blog',
      link: 'https://blog.247pharmacy.net/',
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: 'Contact',
      link: '/#contact',
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <FloatingNav navItems={navItems} className="hidden md:flex">
      <LoginButtonContainer />
    </FloatingNav>
  );
}
