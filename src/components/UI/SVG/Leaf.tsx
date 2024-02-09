import React from 'react';

type LeafProps = {
  className?: string;
  size?: 'small' | 'large';
};

export const Leaf: React.FC<LeafProps> = ({
  className = '',
  size = 'small'
}) => {
  const sizeClasses =
    size === 'small'
      ? 'w-[30px] h-[30px] rounded-tr-[15px] rounded-bl-[15px] md:w-[60px] md:h-[60px] md:rounded-tr-[30px] md:rounded-bl-[30px]'
      : 'w-[60px] h-[60px] rounded-tr-[30px] rounded-bl-[30px] md:w-[120px] md:h-[120px] md:rounded-tr-[60px] md:rounded-bl-[60px]';

  return <div className={`${sizeClasses} bg-goGreen-green ${className}`}></div>;
};
