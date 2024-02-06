import { Button } from '@/components/UI/button';
import Image from 'next/image';
import React from 'react';

export const MainSection = () => {
  return (
    <section className=" py-16 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-4 min-h-[37.444444rem]">
          <div className="relative">
            <div className=" pt-8 relative z-[1] pr-11">
              <Image
                src="/images/home/main.png"
                width={500}
                height={500}
                alt="Main Image"
                quality={100}
                priority
                className=" rounded-tr-[40px] rounded-bl-[40px] lg:rounded-tr-[80px] lg:rounded-bl-[80px]"
              />
            </div>
            <div className="w-full h-full rounded-tr-[40px] left-5 rounded-bl-[40px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] absolute bg-goGreen-mint max-lg:-bottom-10 lg:top-0 z-[0] lg:left-16"></div>
          </div>
          <div className="flex flex-col relative z-[1]">
            <h4 className="h4 mb-7">
              Commercial Janitorial Services in Edmonton
            </h4>
            <h1 className="h1 mb-11 lg:mb-14">
              GoGreen Facilities Services Ltd.
            </h1>
            <p className=" mb-14 lg:mb-10">
              Elevate Your Space with Edmonton`s Premier Eco-Cleaning Services
            </p>

            <Button
              link="/contact"
              variant={'secondary'}
              linkProps={{ title: 'Contact Page' }}
              className="w-fit"
            >
              Submit RFP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
