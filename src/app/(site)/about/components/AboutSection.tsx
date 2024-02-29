import { ScrollExpandLine } from '@/components/Animations';
import { TextBlock } from '@/components/UI/TextBlock';
import React from 'react';
import Image from 'next/image';
import { GoogleReviews } from '@/components/GoogleReviewsBlock';
export const AboutSection = () => {
  return (
    <section className=" pb-32 lg:pb-56">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative">
            <TextBlock
              title="Core Values"
              subtitle="At the Heart of Our Organization"
              paragraph="Integrity, transparency, and reliability define our approach to business, building trust with our clients through honest communication and dependable service. Innovation drives us forward as we continuously seek new methods and technologies to enhance efficiency and effectiveness."
              className="  pb-10"
              line={false}
            />
            <TextBlock
              title="Mission Statement"
              subtitle="Where We Will Take You"
              paragraph={
                <>
                  <p>
                    GoGreen Facilities Services Inc.`s mission is to provide
                    superior, eco-friendly cleaning and facility maintenance
                    solutions that promote health, safety, and environmental
                    sustainability. We aim to transform the cleaning industry by
                    integrating innovative technologies and green practices that
                    minimize ecological impact while delivering exceptional
                    results. Our commitment is to exceed client expectations
                    through unparalleled service, fostering a cleaner, safer,
                    and more sustainable future for our communities and the
                    planet. Through dedication to this mission, we strive to be
                    industry leaders, setting new standards for quality and
                    sustainability in every project we undertake.
                  </p>
                  <p>
                    Integrity, transparency, and reliability define our approach
                    to business, building trust with our clients through honest
                    communication and dependable service. Innovation drives us
                    forward as we continuously seek new methods and technologies
                    to enhance efficiency and effectiveness.
                  </p>
                </>
              }
              line={false}
            />
            <ScrollExpandLine />
          </div>
          <div className="flex flex-col gap-7">
            <div className="grid grid-cols-2 items-center relative gap-4 max-md:pr-14 w-fit">
              <div>
                <Image
                  src={'/images/about/about_1.png'}
                  width={278}
                  height={402}
                  alt={'About Image'}
                  quality={100}
                  className=" rounded-end-start"
                />
              </div>
              <div className=" relative">
                <Image
                  src={'/images/about/about_2.png'}
                  width={278}
                  height={402}
                  alt={'About Image'}
                  className="rounded-end-start"
                  quality={100}
                />
                <div className="h-full absolute w-screen left-full bg-newYellow rounded-bl-[80px] top-0 ml-4"></div>
              </div>
              <div className="relative col-span-2">
                <GoogleReviews className="rounded-start-end-sm py-10" />
                <div className="h-full absolute w-screen left-full  bg-goGreen-mint rounded-bl-[80px] top-0 ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
