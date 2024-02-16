'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Arrows from '../UI/SVG/Arrows';

type TabsProps = {
  tabs: string[];
  setActiveTab: (index: number) => void;
  activeTab: number;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  setActiveTab,
  activeTab
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
    <div
      className={`w-full flex items-center  bg-goGreen-green rounded-[10px] overflow-hidden px-4 relative select-none`}
    >
      <div
        className={`afterLightGreen w-full h-full absolute left-0 top-0 pointer-events-none ${showPrevArrow ? 'afterLightGreen-left' : ''} `}
      ></div>
      <div
        className={`afterLightGreen  w-full h-full absolute left-0 top-0  pointer-events-none ${showNextArrow ? 'afterLightGreen-right' : ''} `}
      ></div>
      {/*  {showPrevArrow && (
        <motion.button
          onClick={() => scroll(-100)}
          className="absolute left-5 z-[1] "
          whileTap={{ scale: 0.9 }}
        >
          <Arrows variant="left" className="text-white max-w-[20px]" />
        </motion.button>
      )}
 */}
      <div
        className="flex h-[50px]  overflow-x-scroll  no-scrollbar items-center gap-10 lg:gap-28 cursor-grab  select-none"
        ref={scrollContainerRef}
        onMouseDown={startDrag}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={drag}
        onScroll={checkArrowsVisibility}
      >
        {tabs.map((tab, index) => (
          <motion.button
            className={`flex-none  text-center whitespace-nowrap  text-lg font-black uppercase font-Avenir 
            ${activeTab === index ? ' text-newYellow' : 'text-white'}`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </motion.button>
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
  );
};
