'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MAX_PETALS = 100; // Максимальное количество лепестков

const Petal = ({
  style,
  onAnimationComplete
}: {
  style: {
    xStart: number;
    yStart: number;
    xEnd: number;
    yEnd: number;
    customStyles: string;
  };
  onAnimationComplete: () => void;
}) => (
  <motion.div
    className={style.customStyles}
    initial={{ x: style.xStart, y: style.yStart, opacity: 1, scale: 1 }}
    animate={{ x: style.xEnd, y: style.yEnd, opacity: 0, scale: 0 }}
    transition={{ duration: 1.5 }}
    onAnimationComplete={onAnimationComplete}
  />
);

const Cursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [petals, setPetals] = useState<
    {
      id: string;
      style: {
        xStart: number;
        yStart: number;
        xEnd: number;
        yEnd: number;
        customStyles: string;
      };
    }[]
  >([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const addPetal = useCallback((x: number, y: number) => {
    const rotation = Math.random() > 0.5 ? '0' : '-45';
    const scale = Math.random() > 0.5 ? 'scale-55' : 'scale-100';
    const opacity = Math.random() > 0.5 ? 'opacity-40' : 'opacity-60';
    const borderRadius =
      Math.random() > 0.5
        ? 'rounded-tr-[30px] rounded-bl-[30px]'
        : 'rounded-tl-[30px] rounded-br-[30px]';

    const newPetal = {
      id: `${Date.now()}-${Math.random()}`,
      style: {
        xStart: x,
        yStart: y,
        xEnd: x + (Math.random() * 100 - 50),
        yEnd: y + (Math.random() * 100 - 50),
        customStyles: `petal fixed w-3 h-3 rounded-full bg-goGreen-green z-10 ${rotation} ${scale} ${opacity} ${borderRadius}`
      }
    };
    setPetals(currentPetals => [...currentPetals, newPetal]);
  }, []);

  const handleAnimationComplete = useCallback((id: string) => {
    setPetals(currentPetals => currentPetals.filter(petal => petal.id !== id));
  }, []);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      const target = e.target as Element;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
      setPosition({ x: e.clientX, y: e.clientY });
      if (isMouseDown) {
        addPetal(e.clientX, e.clientY);
      }
    };

    const mouseDownHandler = () => {
      setIsMouseDown(true);
    };

    const mouseUpHandler = () => {
      setIsMouseDown(false);
    };

    const clickHandler = (e: { clientX: number; clientY: number }) => {
      if (petals.length < MAX_PETALS) {
        addPetal(e.clientX, e.clientY);
      }
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('click', clickHandler);
    };
  }, [isMouseDown, addPetal]);

  useEffect(() => {
    if (isMouseDown) {
      const intervalId = setInterval(
        () => addPetal(position.x, position.y),
        2000
      );
      return () => clearInterval(intervalId);
    }
  }, [isMouseDown, position, addPetal]);

  return (
    <>
      <motion.div
        className={`cursor ${isPointer ? 'pointer' : ''}`}
        style={{ top: `${position.y - 18}px`, left: `${position.x - 18}px` }}
        animate={{ scale: isPointer ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div className="ring">
          <motion.div className="dot" />
        </motion.div>
        <motion.div className="ring">
          <motion.div className="dot" />
        </motion.div>
      </motion.div>
      {petals.map(petal => (
        <Petal
          key={petal.id}
          style={petal.style}
          onAnimationComplete={() => handleAnimationComplete(petal.id)}
        />
      ))}
    </>
  );
};

export default Cursor;
