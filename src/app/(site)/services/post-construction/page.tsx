import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TextAndImagesSection } from '@/components/UI/TextAndImagesSection';
import { TabsSection } from '@/components/TabsSection';
import TimelineModern from '@/components/Timeline/modern';
import { FAQ } from '@/components/FAQ';
import { _industries, _services } from '@/utils/constants';
import { LeafIcon } from '@/components/UI/SVG/LeafIcon';
import { ReviewsSection } from '@/components/ReviewsSection';
import { BusinessProcessSection } from '../../../../components/BusinessProcessSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  const Items = [
    {
      title: 'Post-Construction Cleanings',
      content: {
        title: 'Post-Construction Cleaning',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
        img: '/images/services/post-construction/1.png'
      }
    },
    {
      title: 'Emergency Restoration',
      content: {
        title: 'Emergency Restoration',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
        img: '/images/services/post-construction/1.png'
      }
    },
    {
      title: 'Move-In/Move-Out Cleaning',
      content: {
        title: 'Move-In/Move-Out Cleaning',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
        img: '/images/services/post-construction/1.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Post-Con."
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        buttonText="Request a Quote"
        imgSrc="/images/services/post-construction/main.png"
      />

      <ImageTextSection
        image1Src="/images/history/1.png"
        image2Src="/images/history/2.png"
        className=" mb-28 lg:mb-44"
        textBlocks={[
          <TextBlock
            key={1}
            subtitle="Eco-friendly Janitorial and Maintenance"
            title="Go Green"
            paragraph="Our commitment to eco-friendly janitorial and maintenance services makes us the ideal partner for keeping your premises pristine. Tailoring our services to meet your needs and budget, Go Green ensures your business shines brighter, enhancing your competitive edge with our exceptional green cleaning solutions."
          />
        ]}
      />

      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Discover the Difference with GoGreen"
        title="Services"
      />

      <BusinessProcessSection />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <FAQ />
      <ReviewsSection className=" pb-28 lg:pb-44" />
      <ContactUsSection />
    </>
  );
}
