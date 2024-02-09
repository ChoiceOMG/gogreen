'use client';
import React, { useEffect, useState } from 'react';

export const Stars = () => {
  const [fills, setFills] = useState([true, true, true, true, true]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFills(fills => fills.map((fill, index) => (index > 3 ? !fill : fill)));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex gap-1 mb-9">
      {fills.map((fill, index) => (
        <svg
          key={index}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill={fill ? 'white' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_89_1660)">
            <path
              d="M11.049 3.09802C11.3483 2.17676 12.6517 2.17676 12.951 3.09802L14.4699 7.77193C14.6038 8.18392 14.9877 8.46286 15.4209 8.46288L20.3354 8.46307C21.3041 8.4631 21.7068 9.70265 20.9232 10.2721L16.9474 13.1609C16.5969 13.4155 16.4503 13.8669 16.5841 14.2789L18.1026 18.9529C18.4019 19.8742 17.3475 20.6402 16.5638 20.0709L12.5878 17.1824C12.2373 16.9278 11.7627 16.9278 11.4122 17.1824L7.43622 20.0709C6.65252 20.6403 5.5981 19.8742 5.8974 18.9529L7.41589 14.2789C7.54974 13.8669 7.40309 13.4155 7.05263 13.1609L3.07683 10.2721C2.29317 9.70265 2.69592 8.4631 3.66461 8.46307L8.57911 8.46288C9.01231 8.46286 9.39623 8.18392 9.53011 7.77193L11.049 3.09802Z"
              stroke="white"
              strokeWidth="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_89_1660">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.171387)"
              />
            </clipPath>
          </defs>
        </svg>
      ))}
    </div>
  );
};
