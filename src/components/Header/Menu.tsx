'use client';

import React from 'react';
import Link from 'next/link';
import {} from '@/utils/URL';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types/types';

const Menu = ({ MenuHeader }: { MenuHeader: MenuItem[] }) => {
  const pathname = usePathname();
  return MenuHeader.map((item, index) => (
    <Link
      href={item.link || '#'}
      className={` whitespace-nowrap font-Avenir font-black uppercase  ${
        pathname === item.link ? ' text-goGreen-green' : ''
      } transition-colors duration-300 ease-in-out hover:text-goGreen-green `}
      key={index}
    >
      {item.name}
    </Link>
  ));
};

export default Menu;
