import React from 'react';
import { Button } from '../UI/button';
import { _phone } from '@/utils/constants';
import { Leaf } from '../UI/SVG/Leaf';
import Parallax from '../Animations/Parallax';

export const ContactUsSection = () => {
  return (
    <section className=" bg-goGreen-mint py-16 relative">
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
        <div className="flex justify-center items-center  flex-col">
          <h4 className="h4 mb-4 text-center">
            Ready to Talk to Us About Your Cleaning Needs?
          </h4>
          <h2 className="h2 mb-11">Contact Us</h2>
          <p className=" max-w-[600px] mx-auto text-center">
            At Go Green, we’re not just a cleaning company. We’re your partners
            in creating a cleaner, healthier, and more sustainable environment
            for your business in Edmonton.
          </p>
          <Button
            link={'tel:' + _phone}
            variant={'green'}
            linkProps={{ title: 'Contact Number' }}
            className="w-fit mt-14"
          >
            {_phone}
          </Button>
        </div>
      </div>
    </section>
  );
};
