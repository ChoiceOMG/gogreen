import React, { ComponentProps } from 'react';

const RobotIcon = (props: ComponentProps<'svg'>) => {
  return (
    <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        d="m32 224h32v192h-32a31.96166 31.96166 0 0 1 -32-32v-128a31.96166 31.96166 0 0 1 32-32zm512-48v272a64.06328 64.06328 0 0 1 -64 64h-320a64.06328 64.06328 0 0 1 -64-64v-272a79.974 79.974 0 0 1 80-80h112v-64a32 32 0 0 1 64 0v64h112a79.974 79.974 0 0 1 80 80zm-280 80a40 40 0 1 0 -40 40 39.997 39.997 0 0 0 40-40zm-8 128h-64v32h64zm96 0h-64v32h64zm104-128a40 40 0 1 0 -40 40 39.997 39.997 0 0 0 40-40zm-8 128h-64v32h64zm192-128v128a31.96166 31.96166 0 0 1 -32 32h-32v-192h32a31.96166 31.96166 0 0 1 32 32z"
      />
    </svg>
  );
};

export default RobotIcon;
