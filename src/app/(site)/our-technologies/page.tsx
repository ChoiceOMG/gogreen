import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';
import { _industries } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Our Tech"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        buttonText="Request a Quote"
        imgSrc="/images/tech/main.png"
      />
      <ImageTextSection
        image1Src="/images/tech/1.png"
        image2Src="/images/tech/2.png"
        className="pb-44"
        textBlocks={[
          <TextBlock
            key={1}
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Intro"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
            className=" pb-14"
          />,
          <TextBlock
            key={2}
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Delivery Process"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />
        ]}
      />

      <IndustriesSection
        items={_industries}
        title="Innovations"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <section className=" pb-44">
        <div className="container">
          <div className="flex justify-center items-center flex-col text-center max-w-[600px] mx-auto">
            <h4 className="h4 mb-4">Your Partner for Eco-Friendly Cleaning</h4>
            <h2 className="h2 mb-11">Benefits of Tech</h2>
            <p>
              At Go Green, we’re not just a cleaning company. We’re your
              partners in creating a cleaner, healthier, and more sustainable
              environment for your business in Edmonton.
            </p>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
