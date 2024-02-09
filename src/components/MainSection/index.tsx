import { Leaf } from '@/components/UI/SVG/Leaf';
import { Button } from '@/components/UI/button';
import Image from 'next/image';
import React from 'react';
import Parallax from '../Animations/Parallax';

type MainSectionProps = {
  reverse?: boolean;
  subTitle?: string;
  title?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  imgSrc?: string;
};

export const MainSection: React.FC<MainSectionProps> = ({
  reverse = false,
  subTitle = 'Commercial Janitorial Services in Edmonton',
  title = 'GoGreen Facilities Services Ltd.',
  text = 'Elevate Your Space with Edmonton`s Premier Eco-Cleaning Services',
  buttonText = 'Submit RFP',
  buttonLink = '/contact',
  imgSrc = '/images/home/main.png'
}) => {
  const orderClasses = reverse ? 'lg:order-first' : 'lg:order-last';

  const borderRadiusClasses = reverse
    ? 'rounded-tr-[40px] rounded-bl-[40px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] left-5 lg:left-16'
    : ' rounded-tl-[40px] rounded-br-[40px] lg:rounded-tl-[100px] lg:rounded-br-[100px] right-5 lg:right-16';

  return (
    <section className=" py-16 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-4 min-h-[37.444444rem]">
          <div className={`relative ${orderClasses}`}>
            <div
              className={` relative z-[1]  w-fit ${reverse ? 'pr-11' : 'pl-11 ml-auto'}`}
            >
              <Image
                src={imgSrc}
                width={500}
                height={500}
                alt="Main Image"
                quality={100}
                priority
                className={` ${reverse ? 'rounded-end-start' : 'rounded-start-end'} `}
              />
              <Parallax>
                <Leaf
                  className={`absolute bottom-10  ${
                    reverse
                      ? 'right-0 md:-right-5 '
                      : ' left-0 md:-left-5 rotate-90'
                  }`}
                  size={'large'}
                />
              </Parallax>
            </div>
            <div
              className={`w-full h-full ${borderRadiusClasses}  absolute bg-goGreen-mint max-lg:-bottom-10 lg:-top-10 z-[0] `}
            ></div>
          </div>
          <div className="flex flex-col relative z-[1]">
            <h4 className="h4 mb-7">{subTitle}</h4>
            <h1 className="h1 mb-11 lg:mb-14">{title}</h1>
            <p className=" mb-14 lg:mb-10">{text}</p>

            <Button
              link={buttonLink}
              variant={'secondary'}
              linkProps={{ title: buttonText }}
              className="md:w-fit"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
