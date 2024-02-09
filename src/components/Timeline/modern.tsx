'use client';

import React, { useState } from 'react';
import { TooltipNumber } from './TooltipNumber';

const TimelineModern = () => {
  const [activeDot, setActiveDot] = useState(0);

  const Titles = [
    {
      title: 'Leave a Request'
    },
    {
      title: 'preliminary estimate'
    },
    {
      title: 'Conclude an agreement'
    },
    {
      title: 'high quality service'
    }
  ];

  return (
    <section className=" py-20 lg:py-48 ">
      <div className="container">
        <div className="relative flex flex-col lg:flex-row max-lg:gap-20 justify-between items-center ">
          <div className="lg:h-1 h-full w-1 lg:w-full bg-goGreen-black absolute  lg:right-1/2 transform translate-x-1/2 z-[-1]"></div>
          {Titles.map((dot, index) => (
            <TooltipNumber
              key={index}
              index={index + 1}
              title={dot.title}
              position={index % 2 === 0 ? 'bottom' : 'top'}
              reverse={index + 1 >= Titles.length}
              green={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineModern;
