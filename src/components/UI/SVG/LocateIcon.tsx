import React from 'react';

export const LocateIcon = ({
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
      width={width || 28}
      height={height || 38}
      viewBox="0 0 28 38"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 13.9473C28 20.2936 19.4688 31.592 15.7281 36.2537C14.8312 37.3647 13.1687 37.3647 12.2719 36.2537C8.53125 31.592 0 20.2936 0 13.9473C0 6.25048 6.27083 0.00585938 14 0.00585938C21.7292 0.00585938 28 6.25048 28 13.9473Z"
        fill={color || '#292929'}
      />
    </svg>
  );
};
