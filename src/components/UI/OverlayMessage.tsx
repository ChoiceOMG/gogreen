'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { CloseIcon } from './SVG/CloseIcon';

type OverlayMessageProps = {
  title: string;
  message: string;
  onClose: () => void;
};

const OverlayMessage: React.FC<OverlayMessageProps> = ({
  title,
  message,
  onClose
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white text-center flex-col bg-opacity-80">
      <h3 className="h3 mb-7 text-goGreen-green">{title}</h3>
      <p className="max-w-[600px] mx-auto">{message}</p>
      <motion.button
        onClick={onClose}
        className="absolute top-0 right-0 m-4"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <CloseIcon />
      </motion.button>
    </div>
  );
};

export default OverlayMessage;
