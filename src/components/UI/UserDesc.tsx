import React from 'react';
import Image from 'next/image';
import { Leaf } from './SVG/Leaf';
import Parallax from '../Animations/Parallax';
export const UserDesc = ({
  name,
  img,
  text
}: {
  name: string;
  img: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col ">
      <div className="relative w-fit h-fit mb-9">
        <div className="relative  rounded-full w-[200px] h-[200px] overflow-hidden">
          <Image src={img} alt={name} fill className="object-cover" />
        </div>
        <Parallax offset={20}>
          <Leaf
            size="small"
            className="absolute -bottom-1 -right-1 rotate-90"
          />
        </Parallax>
      </div>
      <h4 className="h4 mb-4 text-goGreen-green">{name}</h4>
      <p>{text}</p>
    </div>
  );
};
