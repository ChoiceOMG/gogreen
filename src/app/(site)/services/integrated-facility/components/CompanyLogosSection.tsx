import Parallax from '@/components/Animations/Parallax';
import { Leaf } from '@/components/UI/SVG/Leaf';
import React from 'react';
import Image from 'next/image';
export const CompanyLogosSection = () => {
  return (
    <section className=" bg-goGreen-mint py-16 relative">
      <Parallax>
        <Leaf
          className="absolute -top-10 left-5 opacity-40 rotate-90"
          size={'large'}
        />
      </Parallax>
      <Parallax offset={80}>
        <Leaf
          className="absolute top-8 md:top-20 left-5 md:left-14  "
          size={'small'}
        />
      </Parallax>
      <div className="container">
        <div className="flex justify-center items-center  flex-col">
          <h4 className="h4 mb-4 text-center">
            Your Partner for Eco-Friendly Cleaning
          </h4>
          <h2 className="h2 mb-16 max-w-[800px] mx-auto">Logos of Companies</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-11">
            <Image
              src={'https://placehold.it/270x170/#EEF1F'}
              width={270}
              height={170}
              alt="GoGreen"
            />
            <Image
              src={'https://placehold.it/270x170/#EEF1F'}
              width={270}
              height={170}
              alt="GoGreen"
            />
            <Image
              src={'https://placehold.it/270x170/#EEF1F'}
              width={270}
              height={170}
              alt="GoGreen"
            />
            <Image
              src={'https://placehold.it/270x170/#EEF1F'}
              width={270}
              height={170}
              alt="GoGreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
