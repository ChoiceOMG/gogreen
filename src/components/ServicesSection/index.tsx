'use client';
import { ScrollExpandLine } from '@/components/Animations';
import { Button } from '@/components/UI/button';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/UI/carousel';
import React from 'react';

export const ServicesSection = ({
  items,
  title,
  subtitle
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    link?: string;
    linkTitle?: string;
  }[];
  title: string;
  subtitle: string;
}) => {
  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  const isTouch =
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: coarse)').matches
      : false;

  return (
    <section className=" pb-20 lg:pb-44">
      <div className="container">
        <div className="relative pl-6">
          {' '}
          <h4 className="h4 mb-4">{subtitle}</h4>
          <h2 className="h2 mb-11">{title}</h2>
          <ScrollExpandLine className="max-h-[84px] md:max-h-[261px]" />
          <Carousel
            opts={{
              align: 'start'
            }}
            enableScrollSnap={isMobile || isTouch ? false : true}
            className="w-full"
          >
            <div className="relative max-md:-ml-6 max-md:pb-24">
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 pl-7"
                  >
                    <div className="flex flex-col h-full w-full">
                      {' '}
                      {item.icon && (
                        <div className="mb-4 w-[60px] h-[60px] bg-goGreen-mint rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                      )}
                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className=" mb-10">{item.description}</p>
                      {item.link && (
                        <Button
                          link={item.link}
                          variant={'secondary'}
                          linkProps={{
                            title: item.linkTitle
                              ? item.linkTitle
                              : `Learn More about ${item.title}`,
                            'aria-label': `Learn More about ${item.title}`
                          }}
                          className="w-fit mt-auto"
                        >
                          Learn More
                        </Button>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="max-md:bottom-0 max-md:top-auto max-md:-translate-y-0" />
              <CarouselNext className="max-md:bottom-0 max-md:top-auto max-md:-translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
