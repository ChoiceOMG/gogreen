'use client';

import Arrows from '@/components/UI/SVG/Arrows';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

type CategoriesProps = {
  items: {
    title: string;
    url: string;
  }[];
  currectUrl?: string;
};

export const CategoriesSection: React.FC<CategoriesProps> = ({
  items,
  currectUrl = '/'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startDragX, setStartDragX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const startDrag = (e: { pageX: number }) => {
    setIsDragging(true);
    setStartDragX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const drag = (e: { preventDefault: () => void; pageX: number }) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const scroll = x - startDragX;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - scroll;
    }
  };

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const checkArrowsVisibility = () => {
    setShowPrevArrow((scrollContainerRef.current?.scrollLeft ?? 0) > 0);
    setShowNextArrow(
      (scrollContainerRef.current?.scrollLeft ?? 0) <
        (scrollContainerRef.current?.scrollWidth ?? 0) -
          (scrollContainerRef.current?.clientWidth ?? 0)
    );
  };

  useEffect(() => {
    checkArrowsVisibility();
  }, []);

  return (
    <section>
      <div className="container">
        <div
          className={`w-full flex items-center  bg-goGreen-green rounded-[10px] overflow-hidden px-4 relative`}
        >
          <div
            className={`afterLightGreen w-full h-full absolute left-0 top-0 pointer-events-none ${showPrevArrow ? 'afterLightGreen-left' : ''} `}
          ></div>
          <div
            className={`afterLightGreen  w-full h-full absolute left-0 top-0  pointer-events-none ${showNextArrow ? 'afterLightGreen-right' : ''} `}
          ></div>
          {showPrevArrow && (
            <motion.button
              onClick={() => scroll(-100)}
              className="absolute left-5 z-[1] "
              whileTap={{ scale: 0.9 }}
            >
              <Arrows variant="left" className="text-white max-w-[20px]" />
            </motion.button>
          )}

          <div
            className="flex h-[50px] cursor-grab overflow-x-scroll  no-scrollbar items-center gap-10 lg:gap-28"
            onMouseDown={startDrag}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            onMouseMove={drag}
            onScroll={checkArrowsVisibility}
            ref={scrollContainerRef}
          >
            {items.map((item, index) => (
              <Link
                href={'/blog' + item.url}
                scroll={false}
                className={`flex-none  text-center whitespace-nowrap text-white text-lg font-black uppercase font-Avenir border-b-2 px-2 rounded-full
            ${currectUrl === item.url ? 'border-white' : ' border-transparent'}`}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {showNextArrow && (
            <motion.button
              onClick={() => scroll(100)}
              className="absolute right-5 z-[1]"
              whileTap={{ scale: 0.9 }}
            >
              <Arrows variant="right" className="text-white max-w-[20px]" />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};
