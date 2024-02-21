'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Tabs } from './Tabs';
import Image from 'next/image';
import { ScrollExpandLine } from '../Animations';
import { FixPage } from '@/utils/fixPage';

type Props = {
  items: {
    title: string;
    content: {
      title: string;
      description: string;
      img: string;
    };
  }[];
};

export const TabsSection = ({ items }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const sectionRef = useRef(null); // Создаем ref для секции
  const [isFixed, setIsFixed] = useState(false); // Состояние фиксации компонента

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIsFixed(entry.isIntersecting);
        FixPage(entry.isIntersecting, sectionRef);
        setCurrentTab(activeTab);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const { deltaY } = e;
      const isOnFirstSlide = activeTab === 0;
      const isOnLastSlide = activeTab === items.length - 1;

      if ((isOnFirstSlide && deltaY < 0) || (isOnLastSlide && deltaY > 0)) {
        FixPage(false, sectionRef);
        setIsFixed(false);
        return;
      } else {
        if (deltaY > 0 && activeTab < items.length - 1) {
          setActiveTab(activeTab + 1);
        } else if (deltaY < 0 && activeTab > 0) {
          setActiveTab(activeTab - 1);
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
  }, [isFixed, activeTab, items.length]);

  return (
    <section className=" pb-48" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <Tabs
            tabs={items.map(item => item.title) as string[]}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative pt-14 pl-7 -mt-2"
            >
              <ScrollExpandLine delay={0.5} />
              <motion.div
                className="grid lg:grid-cols-[2fr_1fr] gap-11"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col">
                  <h2 className="h2 mb-10">{items[activeTab].title}</h2>
                  <p>{items[activeTab].content.description}</p>
                </div>
                <div className="w-full h-full relative rounded-end-start overflow-hidden min-h-[285px]">
                  <Image
                    src={items[activeTab].content.img}
                    alt={items[activeTab].content.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
