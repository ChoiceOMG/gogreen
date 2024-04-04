'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Tabs } from './Tabs';
import Image from 'next/image';
import { ScrollExpandLine } from '../Animations';

type Props = {
  items: {
    title: string;
    content: {
      title: string;
      description: string | React.ReactNode;
      img: string;
    };
  }[];
};

export const TabsSection = ({ items }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" pb-48">
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
                  <div className="content">
                    {' '}
                    {typeof items[activeTab].content.description ===
                    'string' ? (
                      <p>{items[activeTab].content.description}</p>
                    ) : (
                      items[activeTab].content.description
                    )}
                  </div>
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
