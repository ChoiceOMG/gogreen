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

export const ServicesSection = () => {
  const carouselItems = [
    {
      title: 'Cleaning',
      description:
        'Discover eco-friendly cleaning services by Go Green, offering sustainable solutions for commercial spaces to ensure a clean, healthy work environment.',
      link: '/services/cleaning',
      linkTitle: 'Cleaning Services'
    },
    {
      title: 'Integrated Facility',
      description:
        'Go Green`s Integrated Facility Services combine expert cleaning, maintenance, and management for efficient upkeep of commercial properties.',
      link: '/services/integrated',
      linkTitle: 'Integrated Facility Services'
    },
    {
      title: 'Specialized Services',
      description:
        'Explore Go Green`s specialized cleaning services, tailored to meet unique commercial needs with environmentally conscious practices and advanced technology.',
      link: '/services/specialized-services',
      linkTitle: 'Specialized Services'
    },

    {
      title: 'Disinfection & Sanitization',
      description:
        'Ensure a germ-free environment with Go Green`s disinfection and sanitary processing services, using eco-safe products for effective cleaning.',
      link: '/services/disinfection-sanitization',
      linkTitle: 'Disinfection & Sanitization Services'
    },
    {
      title: 'Environmental',
      description:
        'Go Green`s Environmental Services promote sustainability in commercial cleaning, reducing your carbon footprint while maintaining pristine facilities.',
      link: '/services/environmental',
      linkTitle: 'Environmental Services'
    },
    {
      title: 'Post-Construction Cleaning',
      description:
        'Post-construction cleanup by Go Green offers thorough, eco-friendly cleaning services to prepare new spaces for safe and immediate use.',
      link: '/services/post-construction-cleaning',
      linkTitle: 'Post-Construction Cleaning Services'
    },
    {
      title: 'Commercial Floor Cleaning',
      description:
        'Professional commercial floor cleaning services by Go Green use green methods to maintain and restore the beauty of your floors sustainably.',
      link: '/services/commercial-floor-cleaning',
      linkTitle: 'Commercial Floor Cleaning Services'
    },
    {
      title: 'Outdoor Building Maintenance',
      description:
        'Maintain your building`s exterior with Go Green`s Outdoor Building Maintenance Services, ensuring a clean and professional appearance year-round.',
      link: '/services/outdoor-building-maintenance',
      linkTitle: 'Outdoor Building Maintenance Services'
    }
  ];

  return (
    <section className=" pb-20 lg:pb-44">
      <div className="container">
        <div className="relative pl-6">
          {' '}
          <h4 className="h4 mb-4">Discover the Difference with GoGreen</h4>
          <h2 className="h2 mb-11">Services</h2>
          <ScrollExpandLine className="max-h-[84px] md:max-h-[261px]" />
          <Carousel
            opts={{
              align: 'start'
            }}
            className="w-full"
          >
            <div className="relative max-md:-ml-6 max-md:pb-24">
              <CarouselContent>
                {carouselItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 pl-7"
                  >
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p>{item.description}</p>
                    <Button
                      link={item.link}
                      variant={'secondary'}
                      linkProps={{ title: item.linkTitle }}
                      className="w-fit mt-10"
                    >
                      Learn More
                    </Button>
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
