'use client';

import { _industries, _services } from '@/utils/constants';
import React from 'react';
import { Button } from '../UI/button';
import { usePathname } from 'next/navigation';

export const ListLink = ({ links }: { links?: 'industries' | 'services' }) => {
  const pathname = usePathname();
  return (
    <div className="flex items-center  gap-4 flex-wrap">
      {(links === 'industries' ? _industries : _services).map((item, index) => (
        <Button
          link={pathname === item.link ? '#' : item.link}
          variant={pathname === item.link ? 'outline' : 'secondary'}
          linkProps={{ title: item.linkTitle }}
          disabled={pathname === item.link}
          className={'md:w-fit'}
          key={index}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
