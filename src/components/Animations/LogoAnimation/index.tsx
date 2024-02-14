'use client';
import React, { useEffect, useState } from 'react';
import myLogo from './logo.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { set } from 'zod';

export const LogoAnimation = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, []);

  const handleComplete = () => {
    setIsComplete(true);
  };

  return (
    <motion.div
      className={`h-full w-full fixed bottom-0 left-0 z-[999] flex justify-center items-center bg-white p-2`}
      animate={{ y: isComplete ? '100vh' : 0 }}
      transition={{ duration: 0.3 }}
    >
      {play && (
        <Lottie
          animationData={myLogo}
          loop={false}
          autoplay={true}
          className="w-full h-auto p-10"
          onComplete={handleComplete}
        />
      )}
    </motion.div>
  );
};
