import React from 'react';

export const FacebookIcon = ({
  color,
  width,
  height
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width || 20}
      height={height || 37}
      viewBox="0 0 20 37"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4402 20.8125L19.4635 14.1164H13.0654V9.77104C13.0654 7.9391 13.9591 6.15342 16.8246 6.15342H19.7333V0.452383C19.7333 0.452383 17.0938 0 14.5701 0C9.30105 0 5.85696 3.20715 5.85696 9.01297V14.1164H0V20.8125H5.85696V37H13.0654V20.8125H18.4402Z"
        fill={color || '#292929'}
      />
    </svg>
  );
};
