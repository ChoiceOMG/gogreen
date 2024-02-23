'use client';

import React, { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/UI/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/UI/carousel';
import Image from 'next/image';

export const Slider = ({
  items
}: {
  items: {
    title: string;
    description?: string;
    link: string;
    linkTitle?: string;
    img?: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      const currentIndex = api.selectedScrollSnap();

      setHoveredIndex(currentIndex);
      api.reInit();
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',

        skipSnaps: true
      }}
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
      className="w-full"
    >
      <div className="relative">
        <CarouselContent className="transition-transform duration-200 ease-linear">
          {items.map((item, index) => {
            return (
              <CarouselItem
                key={item.title}
                className={`md:basis-1/2 lg:basis-1/3 xl:basis-1/4 border-box md:pl-7 h-auto transition-all duration-200 ease-in-out ${hoveredIndex === index ? 'lg:!basis-1/2' : ''}`}
              >
                <div
                  className={`relative min-h-[500px] px-4  text-white  rounded-[40px] lg:rounded-[60px]  !rounded-tl-[0px] overflow-hidden bg-black bg-opacity-30 pb-7 h-full w-full flex flex-col`}
                >
                  <div className="mt-auto">
                    <h4 className="h4 mb-4 ">{item.title}</h4>
                    <p className="mb-9">{item.description}</p>
                  </div>
                  <Button
                    link={item.link}
                    variant={'white'}
                    linkProps={{ title: item.linkTitle }}
                    className="w-auto"
                  >
                    Learn More
                  </Button>
                  {item.img && (
                    <Image
                      src={item.img}
                      fill
                      alt={item.title}
                      className="   w-full z-[-1] object-cover"
                    />
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className=" max-md:top-10 max-md:-translate-y-0 ml-5 max-sm:hidden" />
        <CarouselNext className=" max-md:top-10 max-md:-translate-y-0 mr-5" />
      </div>
    </Carousel>
  );
};
