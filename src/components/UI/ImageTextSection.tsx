import Image from 'next/image';
import React from 'react';

type ImageTextSectionProps = {
  image1Src: string;
  image2Src: string;
  imageOnTop?: boolean;
  textBlocks: React.ReactNode[];
  className?: string;
};

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  image1Src,
  image2Src,
  textBlocks,
  imageOnTop,
  className = ''
}) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-9">
          <div className="grid grid-cols-2 gap-2">
            <div className=" relative h-full min-h-[345px] sm:min-h-[465px] rounded-end-start-md overflow-hidden">
              <Image src={image1Src} alt="1" fill className=" object-cover" />
            </div>
            <div
              className={`flex  gap-2 ${imageOnTop ? 'flex-col-reverse' : 'flex-col'}`}
            >
              <div className=" bg-goGreen-green w-full h-[30%] rounded-start-end-sm"></div>

              <div className="  relative h-[70%] w-full rounded-start-end-md overflow-hidden">
                <Image src={image2Src} alt="2" fill className=" object-cover" />
              </div>
            </div>
          </div>
          <div className="h-fit">{textBlocks}</div>
        </div>
      </div>
    </section>
  );
};
