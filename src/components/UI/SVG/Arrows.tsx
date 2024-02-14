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
  color = '#292929'
}) => {
  switch (variant) {
    case 'up':
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
          width="23"
          height="38"
          viewBox="0 0 23 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M1.30551 17.1341C0.231499 18.1661 0.231499 19.8421 1.30551 20.8742L17.8023 36.726C18.8763 37.758 20.6205 37.758 21.6945 36.726C22.7685 35.694 22.7685 34.018 21.6945 32.9859L7.13952 19L21.6859 5.01406C22.7599 3.98204 22.7599 2.30604 21.6859 1.27402C20.6119 0.241995 18.8677 0.241995 17.7937 1.27402L1.29692 17.1259L1.30551 17.1341Z"
            fill={color}
            className="fill-current group-hover:fill-goGreen-green"
          />
        </svg>
      );
    case 'right':
      return (
        <svg
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M19.2677 18.8781C20.2441 17.9399 20.2441 16.4162 19.2677 15.478L4.27065 1.06728C3.29428 0.129085 1.70865 0.129085 0.732277 1.06728C-0.244094 2.00549 -0.244094 3.52912 0.732278 4.46733L13.9641 17.1818L0.740089 29.8963C-0.236283 30.8345 -0.236283 32.3581 0.740089 33.2963C1.71646 34.2346 3.30209 34.2345 4.27846 33.2963L19.2755 18.8856L19.2677 18.8781Z"
            fill={color}
            className="fill-current group-hover:fill-goGreen-green"
          />
        </svg>
      );
    default:
      return <></>;
      break;
  }
};

export default Arrows;
