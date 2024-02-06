import React from 'react';

export const TwitterIcon = ({
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
      width={width || 37}
      height={height || 34}
      viewBox="0 0 37 34"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1369 0H34.8131L22.4155 14.1664L37 33.4463H25.5832L16.6347 21.7562L6.40787 33.4463H0.723598L13.9815 18.291L0 0H11.7062L19.7864 10.6851L29.1369 0ZM27.143 30.0535H30.2866L9.9937 3.21599H6.61691L27.143 30.0535Z"
        fill={color || '#292929'}
      />
    </svg>
  );
};
