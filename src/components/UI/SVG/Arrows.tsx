import React from 'react';

type ArrowVariant = 'up' | 'down' | 'left' | 'right';

interface ArrowsProps {
  variant: ArrowVariant;
  className?: string;
  color?: string;
}

const Arrows: React.FC<ArrowsProps> = ({
  variant = 'right',
  className = '',
  color = 'white'
}) => {
  switch (variant) {
    case 'up':
      return (
        <svg
          className={className}
          width="37"
          height="22"
          viewBox="0 0 37 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3659 0.805507C19.3339 -0.268502 17.6579 -0.268501 16.6259 0.805508L0.774017 17.3023C-0.258004 18.3763 -0.258003 20.1205 0.774017 21.1945C1.80604 22.2685 3.48204 22.2685 4.51406 21.1945L18.5 6.63952L32.4859 21.1859C33.518 22.2599 35.194 22.2599 36.226 21.1859C37.258 20.1119 37.258 18.3677 36.226 17.2937L20.3741 0.796915L20.3659 0.805507Z"
            fill={color}
          />
        </svg>
      );
    case 'down':
      return (
        <svg
          width="37"
          height="22"
          viewBox="0 0 37 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M16.6341 21.1945C17.6661 22.2685 19.3421 22.2685 20.3741 21.1945L36.226 4.69772C37.258 3.62371 37.258 1.87952 36.226 0.805507C35.194 -0.268502 33.518 -0.268502 32.4859 0.805507L18.5 15.3605L4.51406 0.814098C3.48204 -0.259911 1.80604 -0.259911 0.774015 0.814098C-0.258005 1.88811 -0.258005 3.6323 0.774015 4.70631L16.6258 21.2031L16.6341 21.1945Z"
            fill={color}
          />
        </svg>
      );
    case 'left':
      return (
        <svg
          width="22"
          height="37"
          viewBox="0 0 22 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M0.805505 16.6341C-0.268504 17.6661 -0.268504 19.3421 0.805505 20.3741L17.3023 36.226C18.3763 37.258 20.1205 37.258 21.1945 36.226C22.2685 35.194 22.2685 33.518 21.1945 32.4859L6.63952 18.5L21.1859 4.51406C22.2599 3.48204 22.2599 1.80604 21.1859 0.774015C20.1119 -0.258005 18.3677 -0.258005 17.2937 0.774015L0.796912 16.6258L0.805505 16.6341Z"
            fill={color}
          />
        </svg>
      );
    case 'right':
      return (
        <svg
          width="22"
          height="37"
          viewBox="0 0 22 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M21.1945 20.3659C22.2685 19.3339 22.2685 17.6579 21.1945 16.6259L4.69771 0.774017C3.6237 -0.258003 1.87951 -0.258003 0.805505 0.774017C-0.268504 1.80604 -0.268504 3.48204 0.805505 4.51406L15.3605 18.5L0.814098 32.4859C-0.259911 33.518 -0.259911 35.194 0.814098 36.226C1.88811 37.258 3.6323 37.258 4.70631 36.226L21.2031 20.3742L21.1945 20.3659Z"
            fill={color}
          />
        </svg>
      );
    default:
      return <></>;
      break;
  }
};

export default Arrows;
