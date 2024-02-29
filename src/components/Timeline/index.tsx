'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { TooltipDot } from './TooltipDot';

const Timeline = () => {
  const [activeDot, setActiveDot] = useState(0);

  const dots = [
    {
      title: '2007-2010',
      text: 'Fueled by a passion for keeping your space clean while also keeping the environment clean, we decided to dream up a business model that could do both. The result was GoGreen! '
    },
    {
      title: '2010-2012',
      text: 'We built an extraordinary team that is comprised of individuals who are passionate about delivering outstanding janitorial services using cutting-edge technology.'
    },
    {
      title: '2012-2015',
      text: 'GoGreen expanded, and we helped more people than ever before keep their businesses sanitary while protecting the environment.'
    },
    /*  {
      title: '2015-2018',
      text: 'Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. '
    }, */
    {
      title: '2018-2021',
      text: 'GoGreen continues to invest in janitorial tools that push the boundaries. Through sustainable practices, our goal is to make your future cleaner – in every sense of the word.'
    }
  ];

  return (
    <section className="max-sm:py-72 py-48 pt-56">
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
