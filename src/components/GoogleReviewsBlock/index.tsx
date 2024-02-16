import React from 'react';
import { Button } from '../UI/button';
import { Stars } from './Stars';
import { _googleLink } from '@/utils/constants';

export const GoogleReviews = ({
  className = 'rounded-[40px] md:rounded-[60px] rounded-tl-none  w-full py-6 md:py-28 h-full'
}: {
  className?: string;
}) => {
  return (
    <div
      className={` bg-goGreen-green  flex items-center justify-center flex-col
    ${className}
`}
    >
      <h4 className="h4 mb-5 text-white">Google Reviews</h4>
      <Stars />
      <Button
        variant={'white'}
        className=" rounded-[10px] border-white"
        link={_googleLink}
        linkProps={{ title: 'See All', target: '_blank' }}
      >
        See ALl
      </Button>
    </div>
  );
};
