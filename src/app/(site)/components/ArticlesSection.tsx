import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/UI/carousel';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/UI/button';
export const ArticlesSection = () => {
  const carouselItems = [
    {
      img: '/images/home/article.png',
      title: 'Blog Title',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
      link: '/',
      category: 'Blog Articles'
    },
    {
      img: '/images/home/article.png',
      title: 'Blog Title',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
      link: '/',
      category: 'Blog Articles'
    }
  ];
  return (
    <section className="pb-16 lg:py-44">
      <div className="container">
        <div className="relative">
          <Carousel className="pb-20">
            <CarouselContent isHero={false}>
              {carouselItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" grid lg:grid-cols-[1.5fr_2fr] gap-20 lg:gap-12"
                >
                  <div className=" max-lg:pr-14">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={500}
                      className=" object-cover rounded-end-start "
                    />
                  </div>
                  <div className="flex flex-col lg:pr-12">
                    <div className="mt-auto">
                      <h4 className="h4 text-goGreen-green mb-4">
                        {item.category}
                      </h4>
                      <h2 className="h2 mb-8">{item.title}</h2>
                      <p className=" mb-9 ">{item.description}</p>
                      <Button
                        link={item.link}
                        variant={'black'}
                        linkProps={{ title: 'Read More' }}
                        className="w-fit uppercase"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant={'green'}
              className="max-md:bottom-0 max-md:top-auto max-md:-translate-y-0"
            />
            <CarouselNext
              variant={'green'}
              className="max-md:bottom-0 max-md:top-auto max-md:-translate-y-0"
            />
          </Carousel>
          <div className="w-[270px] h-[270px] sm:w-[470px] sm:h-[470px] xl:w-[570px] xl:h-[570px] z-[-1] rounded-tr-[40px] max-lg:right-0 rounded-bl-[40px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] absolute bg-goGreen-mint top-10  lg:left-16"></div>
        </div>
      </div>
    </section>
  );
};
