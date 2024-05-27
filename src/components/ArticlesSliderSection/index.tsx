import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/UI/carousel';

import ArticleCard from '@/components/UI/ArticleCard';

import { getArticlesLast } from '@/services/data';
type Props = {
  className?: string;
};

export const ArticlesSliderSection = async ({ className = '' }: Props) => {
  const posts = await getArticlesLast();

  if (!posts) {
    return null;
  }

  return (
    <section className={`pb-16 lg:py-44 ${className}`}>
      <div className="container">
        <div className="relative">
          <Carousel className="pb-20">
            <CarouselContent isHero={false}>
              {posts.map((item, index) => (
                <CarouselItem key={index} className="pb-10 h-full">
                  <ArticleCard key={index} post={item} />
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
