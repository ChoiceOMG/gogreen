import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/UI/carousel';
import React from 'react';

import ArticleCard from '@/components/UI/ArticleCard';
import { Article } from '@/types/types';
type Props = {
  articles: Article[];
  className?: string;
};

export const ArticlesSliderSection = ({ articles, className = '' }: Props) => {
  if (!articles) {
    return null;
  }

  return (
    <section className={`pb-16 lg:py-44 ${className}`}>
      <div className="container">
        <div className="relative">
          <Carousel className="pb-20">
            <CarouselContent isHero={false}>
              {articles.map((item, index) => (
                <CarouselItem key={index}>
                  <ArticleCard
                    img={item.img}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    link={item.link}
                  />
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
        </div>
      </div>
    </section>
  );
};
