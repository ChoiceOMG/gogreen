'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Arrows from './SVG/Arrows';

const Accordion = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 }
  };

  return (
    <div className=" bg-goGreen-mint rounded-[50px] overflow-hidden">
      <div
        className={` px-6 py-4 cursor-pointer flex justify-between items-center ${isOpen ? 'bg-goGreen-green' : ''} transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className={`h4 ${isOpen ? 'text-white' : 'text-goGreen-green'}`}>
          {title}
        </h4>
        <span
          className={` min-w-[50px] min-h-[50px] rounded-full flex items-center justify-center transition-all duration-300
          ${isOpen ? 'transform rotate-180 bg-white' : 'transform rotate-0 bg-goGreen-green'}
`}
        >
          <Arrows
            variant="down"
            color={isOpen ? '#08A510' : 'white'}
            className="w-[24px] h-[14px]"
          />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <div className=" p-7">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
