import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextAndImagesSection } from '@/components/UI/TextAndImagesSection';
import Timeline from '@/components/Timeline';
import { TextBlock } from '@/components/UI/TextBlock';

export const metadata: Metadata = getPageMeta('/');

export default async function Home() {
  return (
    <>
      <MainSection
        title="Our History"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        buttonText="Request a Quote"
        imgSrc="/images/history/main.png"
      />
      <ImageTextSection
        image1Src="/images/history/1.png"
        image2Src="/images/history/2.png"
        textBlocks={[
          <TextBlock
            key={1}
            subtitle="Eco-friendly Janitorial and Maintenance"
            title="Go Green"
            paragraph="Our commitment to eco-friendly janitorial and maintenance services makes us the ideal partner for keeping your premises pristine. Tailoring our services to meet your needs and budget, Go Green ensures your business shines brighter, enhancing your competitive edge with our exceptional green cleaning solutions."
          />
        ]}
      />
      <Timeline />
      <section className="pb-24 lg:pb-44">
        <div className="container">
          <TextAndImagesSection
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Our Future"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
            image1Src="/images/home/about_1.png"
            image2Src="/images/home/about_2.png"
          />
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
