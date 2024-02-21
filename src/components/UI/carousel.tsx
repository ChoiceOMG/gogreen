'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType
} from 'embla-carousel-react';

import { debounce } from 'lodash';

import { cn } from '@/utils/utils';
import { Button } from './button';
import Arrows from './SVG/Arrows';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  enableScrollSnap?: boolean;
};

type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> & {
  isHero?: boolean;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      enableScrollSnap = false,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y'
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const [isFixed, setIsFixed] = React.useState(false);

    const [isOnFirstSlide, setIsOnFirstSlide] = React.useState(true);
    const [isOnLastSlide, setIsOnLastSlide] = React.useState(false);

    // Используйте useRef для создания ссылки на элемент Carousel
    const carouselRef2 = React.useRef<HTMLDivElement>(null);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    React.useEffect(() => {
      if (!api) return;

      const updateSlideStatus = () => {
        setIsOnFirstSlide(api.selectedScrollSnap() === 0);
        setIsOnLastSlide(
          api.selectedScrollSnap() === api.scrollSnapList().length - 1
        );
      };

      updateSlideStatus();
      api.on('select', updateSlideStatus);

      return () => {
        api.off('select', updateSlideStatus);
      };
    }, [api]);

    React.useEffect(() => {
      if (!enableScrollSnap) {
        return;
      }
      const observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];

          setIsFixed(entry.isIntersecting);
          fixPage(entry.isIntersecting);
        },
        {
          root: null, // относительно вьюпорта
          rootMargin: '0px',
          threshold: 0.5 // фиксируем, когда слайдер виден на 50%
        }
      );

      if (carouselRef2.current) {
        observer.observe(carouselRef2.current);
      }

      return () => {
        if (carouselRef2.current) {
          observer.unobserve(carouselRef2.current);
        }
      };
    }, []);

    // Добавьте обработчик события скролла, когда слайдер фиксирован
    // Добавьте обработчик события скролла, когда слайдер фиксирован
    // Обработка события прокрутки
    React.useEffect(() => {
      const handleScroll = (e: WheelEvent) => {
        if (!enableScrollSnap || !isFixed || !api) return;

        const { deltaY } = e;

        if ((isOnFirstSlide && deltaY < 0) || (isOnLastSlide && deltaY > 0)) {
          // Разрешаем прокрутку страницы вверх
          fixPage(false);
          return;
        } else {
          // Запрещаем прокрутку страницы и переключаем слайды
          if (deltaY > 0) {
            api.scrollNext();
          } else {
            api.scrollPrev();
          }
          e.preventDefault();
        }
      };

      if (isFixed) {
        window.addEventListener('wheel', handleScroll, { passive: false });
      }

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, [isFixed, isOnFirstSlide, isOnLastSlide, api]);

    const fixPage = React.useCallback((isFixed: boolean) => {
      if (isFixed && carouselRef2.current) {
        // автоматически прокручиваем страницу чтобы слайдер был виден по центру
        const windowHeight = window.innerHeight;
        const sliderHeight = carouselRef2.current.offsetHeight;
        const sliderTopPosition =
          carouselRef2.current.getBoundingClientRect().top + window.scrollY;
        const centeredPosition =
          sliderTopPosition + sliderHeight / 2 - windowHeight / 2;

        // Прокручиваем страницу до центрированной позиции
        window.scrollTo({
          top: centeredPosition,
          behavior: 'auto'
        });
        document.documentElement.style.overflow = 'hidden';
        document.body.style.paddingRight = '9px';
      } else {
        document.documentElement.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    }, []);

    return (
      <div ref={carouselRef2}>
        <CarouselContext.Provider
          value={{
            carouselRef,
            api: api,
            opts,
            orientation:
              orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
          }}
        >
          <div
            ref={ref}
            onKeyDownCapture={handleKeyDown}
            className={cn('relative', className)}
            role="region"
            aria-roledescription="carousel"
            {...props}
          >
            {children}
          </div>
        </CarouselContext.Provider>
      </div>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, isHero = true, ...props }, ref) => {
    const { carouselRef, api, orientation } = useCarousel();
    const [isLastSlide, setIsLastSlide] = React.useState(false);

    React.useEffect(() => {
      const checkIfLastSlide = () => {
        if (!api) return;
        const currentSlide = api.selectedScrollSnap();
        const lastSlideIndex = api.scrollSnapList().length - 1;
        setIsLastSlide(currentSlide === lastSlideIndex);
      };

      checkIfLastSlide();
      api?.on('select', checkIfLastSlide);

      return () => {
        api?.off('select', checkIfLastSlide);
      };
    }, [api]);

    return (
      <div
        ref={carouselRef}
        className={`overflow-hidden md:afterLight ${isHero && (isLastSlide ? '' : 'afterLight-right')} `}
      >
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute  h-[60px] w-[60px] rounded-full hover:bg-goGreen-mint/50 transition-all duration-300 ease-in-out',
        orientation === 'horizontal'
          ? 'left-0 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Arrows
        variant={'left'}
        color={variant === 'green' ? 'white' : '#292929'}
      />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-[60px] w-[60px] rounded-full hover:bg-goGreen-mint/50 transition-all duration-300 ease-in-out',
        orientation === 'horizontal'
          ? 'right-0 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Arrows
        variant={'right'}
        color={variant === 'green' ? 'white' : '#292929'}
      />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export const CarouselDots = ({ addDots = 0 }: { addDots?: number }) => {
  const { api } = useCarousel();
  const [dots, setDots] = React.useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    if (addDots) {
      setDots([...api.scrollSnapList(), ...new Array<number>(addDots).fill(0)]);
    } else {
      setDots(api.scrollSnapList());
    }
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className="flex justify-center space-x-2 p-4 mt-14">
      {dots.map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full ${selectedIndex === index ? 'bg-black' : 'bg-gray-300'}`}
          onClick={() => api && api.scrollTo(index)} // Add null check for 'api'
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
};
