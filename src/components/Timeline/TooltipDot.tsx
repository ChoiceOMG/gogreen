'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const TooltipDot = ({
  title,
  text,
  position,
  reverse,
  active,
  onMouseEnter
}: {
  title: string;
  text: string;
  position: string;
  reverse?: boolean;
  active: boolean;
  onMouseEnter: () => void;
}) => {
  const positionClass = position === 'top' ? 'top-full' : 'bottom-full';
  const rounded = !reverse
    ? position === 'top'
      ? 'rounded-start-end-sm'
      : 'rounded-end-start-sm'
    : position === 'top'
      ? 'rounded-end-start-sm'
      : 'rounded-start-end-sm';

  const block = (
    <motion.div
      className={`${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${reverse ? 'left-5' : 'right-5'} absolute ${positionClass} ${rounded} bg-goGreen-mint  p-7 w-[320px] md:w-[500px]`}
      initial={{ opacity: 0, y: position === 'top' ? -10 : 10 }}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : position === 'top' ? -10 : 10
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="Accent text-goGreen-green mb-2">{title}</div>
      <p>{text}</p>
    </motion.div>
  );
  return (
    <div className="group md:relative py-5 " onMouseEnter={onMouseEnter}>
      {block}

      <motion.div
        className="w-[30px] h-[30px] bg-goGreen-green rounded-full cursor-pointer relative"
        animate={{ scale: active ? 1 : 1.1 }}
        transition={{
          repeat: active ? 0 : Infinity,
          repeatType: 'reverse',
          duration: 0.5
        }}
      >
        <motion.div
          className="w-[40px] h-[40px] bg-goGreen-green rounded-full cursor-pointer absolute -top-[5px] -left-[5px]  z-[-1]"
          animate={{ scale: active ? 1 : 1.1, opacity: !active ? 0.5 : 0 }}
          transition={{
            repeat: active ? 0 : Infinity,
            repeatType: 'reverse',
            duration: 0.5
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};
