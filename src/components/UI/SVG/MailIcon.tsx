import React from 'react';

export const MailIcon = ({
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
      height={height || 27}
      viewBox="0 0 37 27"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.46875 0C1.55371 0 0 1.51172 0 3.375C0 4.43672 0.513086 5.43516 1.3875 6.075L17.1125 17.55C17.9363 18.1477 19.0637 18.1477 19.8875 17.55L35.6125 6.075C36.4869 5.43516 37 4.43672 37 3.375C37 1.51172 35.4463 0 33.5312 0H3.46875ZM0 7.875V22.5C0 24.982 2.07402 27 4.625 27H32.375C34.926 27 37 24.982 37 22.5V7.875L21.275 19.35C19.6273 20.5523 17.3727 20.5523 15.725 19.35L0 7.875Z"
        fill={color || '#292929'}
      />
    </svg>
  );
};
