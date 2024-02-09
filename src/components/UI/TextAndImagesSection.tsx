import { TextBlock } from './TextBlock';
import Image from 'next/image';
import React from 'react';

type TextAndImagesSectionProps = {
  subtitle: string;
  title: string;
  paragraph: string;
  image1Src: string;
  image2Src: string;
};

export const TextAndImagesSection: React.FC<TextAndImagesSectionProps> = ({
  subtitle,
  title,
  paragraph,
  image1Src,
  image2Src
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <TextBlock subtitle={subtitle} title={title} paragraph={paragraph} />
      <div className="grid grid-cols-2 items-center relative gap-4 max-md:pr-14 w-fit">
        <div>
          <Image
            src={image1Src}
            width={278}
            height={402}
            alt={'About Image'}
            quality={100}
            className="rounded-end-start"
          />
        </div>
        <div className="relative">
          <Image
            src={image2Src}
            width={278}
            height={402}
            alt={'About Image'}
            className="rounded-end-start"
            quality={100}
          />
          <div className="h-full absolute w-screen left-full bg-goGreen-green rounded-bl-[80px] top-0 ml-4"></div>
        </div>
      </div>
    </div>
  );
};
