'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Parallax from './Parallax';

const MouseMoveComponent = ({
  children,
  movementStrength = 5,
}: {
  children: React.ReactNode;
  movementStrength?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPosition({
      x: x / movementStrength,
      y: y / movementStrength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Возвращаем элемент на исходную позицию
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 50, // Уменьшаем жесткость
        damping: 20, // Увеличиваем демпфирование
        mass: 0.5,
      }}
      className="w-full h-full"
    >
      <Parallax>{children}</Parallax>
    </motion.div>
  );
};

export default MouseMoveComponent;
