'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { TooltipDot } from './TooltipDot';

const Timeline = () => {
  const [activeDot, setActiveDot] = useState(0);

  const dots = [
    {
      title: '2007-2010',
      text: 'Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. '
    },
    {
      title: '2010-2012',
      text: 'Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. '
    },
    {
      title: '2012-2015',
      text: 'Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. '
    },
    {
      title: '2015-2018',
      text: 'Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. '
    },
    {
      title: '2018-2021',
      text: 'Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. '
    }
  ];

  return (
    <section className="max-sm:pb-56 py-48">
      <div className="container">
        <div className="relative flex flex-row justify-between items-center ">
          <div className="h-1 w-full bg-goGreen-black absolute  right-1/2 transform translate-x-1/2 z-[-1]"></div>
          {dots.map((dot, index) => (
            <TooltipDot
              key={index}
              title={dot.title}
              text={dot.text}
              position={index % 2 === 0 ? 'top' : 'bottom'}
              reverse={index <= dots.length / 2}
              active={index === activeDot}
              onMouseEnter={() => setActiveDot(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
