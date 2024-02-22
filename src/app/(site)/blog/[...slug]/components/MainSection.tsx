import Parallax from '@/components/Animations/Parallax';
import { DateIcon } from '@/components/UI/SVG/DateIcon';
import { Leaf } from '@/components/UI/SVG/Leaf';
import { Button } from '@/components/UI/button';
import { Category } from '@prisma/client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MainSectionProps = {
  reverse?: boolean;
  categories: Category[];
  title: string;
  imgSrc?: string;
  dateObj: Date;
};

export const MainSection: React.FC<MainSectionProps> = ({
  reverse = false,
  categories,
  title,
  imgSrc,
  dateObj
}) => {
  const month = dateObj.getMonth() + 1; // Месяцы начинаются с 0 в JavaScript
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  const date = `${month}/${day}/${year}`;

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
              {imgSrc && (
                <Image
                  src={imgSrc}
                  width={500}
                  height={500}
                  alt={title}
                  quality={100}
                  priority
                  className={` ${reverse ? 'rounded-end-start' : 'rounded-start-end'} `}
                />
              )}
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

            <Parallax
              offset={100}
              className={`w-full h-full ${borderRadiusClasses}  absolute bg-goGreen-mint max-lg:-bottom-10 lg:-top-10 z-[0] `}
            >
              <div></div>
            </Parallax>
          </div>
          <div className="flex flex-col relative z-[1]">
            <div className="flex flex-wrap gap-4">
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <Link
                    href={`/blog/${category.link}`}
                    key={index}
                    className="w-fit h4 mb-7"
                  >
                    {category.name}
                  </Link>
                ))}
            </div>

            <h1 className="h1 mb-11 lg:mb-14">{title}</h1>
            <div className="flex items-center gap-4  mt-auto lg:mb-32">
              <DateIcon />
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
