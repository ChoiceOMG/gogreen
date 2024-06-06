'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/UI/carousel';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoogleReview } from '@/types/types';

export const ReviewsSlider = ({
  reviewsData
}: {
  reviewsData: GoogleReview[];
}) => {
  const [reviews, setReviews] = useState<GoogleReview[] | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (reviewsData) {
      setReviews(reviewsData);
    }
  }, [reviewsData]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setIsExpanded(false);
      api.reInit();
    });
  }, [api]);

  if (!reviews) {
    return null;
  }
  return (
    <Carousel className="max-md:pb-20 relative" setApi={setApi}>
      <CarouselContent isHero={false}>
        {reviews.map((item, index) => (
          <CarouselItem key={index} className="-mt-5 py-5  max-lg:px-5">
            <div className="bg-white rounded-[60px] rounded-tr-[0px] shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.08)] p-8 md:p-14 h-full">
              <div className="flex items-center mb-4 sm:mb-7">
                <div className="rounded-full w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] mr-5 sm:mr-10 overflow-hidden relative">
                  <Image
                    src={item.profile_photo_url}
                    alt={`Slide ${item.author_name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="Accent uppercase">{item.author_name}</div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < item.rating ? '#F3DE2C' : 'none'}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 stroke-newYellow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`w-full 
transition-all duration-200 ease-in-out
 ${isExpanded ? '' : 'line-clamp-5-mobile'}`}
                onClick={toggleExpand}
              >
                <p>{item.text}</p>
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
  );
};
