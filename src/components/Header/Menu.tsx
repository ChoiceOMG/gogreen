'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types/types';
import { ScrollExpandLine } from '../Animations';
import { motion } from 'framer-motion';
import { _industries, _services } from '@/utils/constants';
import DropdownMenu from './DropdownMenu';
import { MenuHeader } from '@/utils/URL';

const Menu = () => {
  const pathname = usePathname();

  const linkClass = `whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green`;

  const aboutLinks = [
    {
      title: 'Why Go Green',
      link: '/why-us'
    },
    {
      title: 'Our History',
      link: '/our-journey'
    },
    {
      title: 'Our Technologies',
      link: '/our-technologies'
    }
  ];

  const aboutContent =
    'We maintain competitive pricing and unwavering quality and are committed to reducing environmental impact and protecting people`s health.';
  const servicesContent =
    'Your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton.';

  return (
    <>
      <DropdownMenu
        title="About Us"
        content={aboutContent}
        href="/about"
        menuItems={aboutLinks}
        linkClass={linkClass}
        currentPath={pathname}
      />
      <DropdownMenu
        title="Services and Industries"
        content={servicesContent}
        href="/services"
        menuItems={[..._services, ..._industries]}
        linkClass={linkClass}
        currentPath={pathname}
      />
      {MenuHeader.map((item, index) => (
        <div key={index}>
          <Link
            href={item.link || '#'}
            className={`${linkClass} ${pathname === item.link ? ' text-goGreen-green' : ''}`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Menu;
