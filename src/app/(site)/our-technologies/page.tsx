import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';
import { _industries } from '@/utils/constants';
import ScrollStopper from '@/components/UI/ScrollStopper';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Our Tech"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/tech/main.png"
      />
      <ScrollStopper>
        <ImageTextSection
          image1Src="/images/tech/1.png"
          image2Src="/images/tech/2.png"
          className="pb-44"
          textBlocks={[
            <TextBlock
              key={1}
              subtitle="Your Partner for Eco-Friendly Cleaning"
              title="Intro"
              paragraph="At GoGreen, we redefine janitorial services by seamlessly blending unparalleled cleanliness with an unwavering commitment to environmental preservation. Our mission is clear - to provide you with the highest quality cleaning solutions while actively contributing to a sustainable future."
              className=" pb-8"
            />,
            <TextBlock
              key={2}
              subtitle="Your Partner for Eco-Friendly Cleaning"
              title="Delivery Process"
              paragraph="With each service, we go beyond cleanliness. We pride ourselves on maintaining the highest standards, ensuring that every space we touch exudes cleanliness and excellence. We go beyond the ordinary, implementing cutting-edge practices that not only clean but contribute to a healthier planet."
            />
          ]}
        />
      </ScrollStopper>
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
              At GoGreen, our passionate team is at the forefront of leveraging
              the market&lsquo;s best technology to deliver high-quality
              results. We believe in the power of technology not only to achieve
              pristine cleanliness but also to enhance accountability –
              accountability to you and accountability to the environment. With
              our tech-driven approach, you can trust that your space is not
              only spotless but also managed with the utmost care. We utilize
              cutting-edge technology to ensure that our clean goes beyond the
              ordinary.
            </p>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
