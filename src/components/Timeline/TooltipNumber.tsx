'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export const TooltipNumber = ({
  title,
  position,
  reverse,
  green,
  link,
  index
}: {
  title: string;
  position: string;
  reverse?: boolean;
  green?: boolean;
  link?: string;
  index: number;
}) => {
  const positionClass = position === 'top' ? 'top-full' : 'bottom-full';
  const rounded = reverse
    ? position === 'top'
      ? 'rounded-start-end-sm'
      : 'rounded-end-start-sm'
    : position === 'top'
      ? 'rounded-end-start-sm'
      : 'rounded-start-end-sm';

  const block = (
    <motion.div
      className={`${reverse ? 'lg:right-10' : 'lg:left-10'} lg:absolute ${positionClass} ${rounded} ${green ? 'bg-goGreen-green text-white' : 'bg-goGreen-mint text-goGreen-green'} px-7 py-6 whitespace-nowrap uppercase`}
      initial={{ opacity: 0, y: position === 'top' ? -50 : 50 }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="Accent">{title}</div>
    </motion.div>
  );

  const linkBlock = (
    <Link href={link || ''}>
      <motion.div
        className={`${reverse ? 'lg:right-10' : 'lg:left-10'} lg:absolute ${positionClass} ${rounded} ${green ? 'bg-goGreen-green text-white' : 'bg-goGreen-mint text-goGreen-green'} px-7 py-6 whitespace-nowrap uppercase`}
        initial={{ opacity: 0, y: position === 'top' ? -50 : 50 }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="Accent">{title}</div>
      </motion.div>
    </Link>
  );
  return (
    <div className="group relative max-lg:w-full flex justify-center max-lg:flex-col-reverse items-center max-lg:gap-5 lg:py-5 ">
      {link ? linkBlock : block}

      <div
        className={`w-[60px] h-[60px]  rounded-full border-[3px] border-goGreen-green flex justify-center items-center bg-goGreen-green ${green ? 'bg-goGreen-green text-white' : 'bg-white text-goGreen-green'}`}
      >
        <h4 className="h4">{index}</h4>
      </div>
    </div>
  );
};
