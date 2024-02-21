'use client';
import { _industries } from '@/utils/constants';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
type Stat = {
  title: string;
  subtitle: string;
};

type StatsAndTypesProps = {
  stats: Stat[];
  className?: string;
};

export const StatsAndTypes: React.FC<StatsAndTypesProps> = ({
  stats,

  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className={`flex flex-col max-w-[800px] mt-14 ${className}`} ref={ref}>
      <div className="grid md:grid-cols-3 gap-9 mb-14">
        {stats.map((stat, index) => {
          const [numberPart, symbolPart] = stat.title
            .split(/(\d+)/)
            .filter(Boolean);
          return (
            <div key={index} className="flex text-center flex-col">
              <h3 className="h3 mb-4">
                <CountUp end={isVisible ? parseInt(numberPart) : 0} />
                {symbolPart}
              </h3>
              <div className="mt-auto font-black font-Avenir uppercase">
                {stat.subtitle}
              </div>
            </div>
          );
        })}
      </div>
      {/*   <div className=" flex flex-wrap justify-center gap-4 md:gap-x-11 gap-y-4 ">
        {_industries.map((type, index) => (
          <Link
            key={index}
            className=" uppercase bg-goGreen-mint rounded-full flex items-center max-md:mx-auto justify-center h-[50px] px-4 w-fit  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-goGreen-green hover:text-white "
            href={type.link}
          >
            {type.title}
          </Link>
        ))}
      </div> */}
    </div>
  );
};
