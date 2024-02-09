import { Leaf } from '@/components/UI/SVG/Leaf';
import Image from 'next/image';
import React from 'react';
import partner_1 from './partners/1.png';
import partner_2 from './partners/2.png';
import partner_3 from './partners/3.png';
import Parallax from '@/components/Animations/Parallax';
export const PartnersSection = () => {
  return (
    <section className=" bg-goGreen-mint relative">
      <Parallax>
        <Leaf
          className="absolute -top-10 left-5 opacity-40  rotate-90"
          size={'large'}
        />
      </Parallax>
      <Parallax offset={80}>
        <Leaf
          className="absolute top-7 md:top-20 left-8 md:left-14  "
          size={'small'}
        />
      </Parallax>
      <div className="container">
        <div className="py-16">
          <div className="text-center">
            {' '}
            <h4 className="h4 mb-4">It’s a Team Effort</h4>
            <h2 className="h2">Our Partners</h2>
          </div>
          <div className="flex items-center justify-evenly max-md:flex-col gap-11 mt-8 md:mt-14">
            <Image
              src={partner_1}
              alt="Partners"
              quality={100}
              className="object-cover"
            />
            <Image
              src={partner_2}
              alt="Partners"
              quality={100}
              className="object-cover"
            />
            <Image
              src={partner_3}
              alt="Partners"
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
