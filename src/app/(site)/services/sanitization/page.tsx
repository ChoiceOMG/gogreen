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
      title: 'Commercial Deep Cleaning and Disinfection',
      content: {
        title: 'Commercial Deep Cleaning and Disinfection',
        description:
          'Elevate the hygiene standards of your commercial space with GoGreen`s specialized deep cleaning and disinfection services. Our expert team goes beyond the surface, delivering a cleaning experience that ensures a safe and sanitary environment. We take your industry specifications into consideration and use them to create a comprehensive cleaning plan.',
        img: '/images/services/sanitary/1.png'
      }
    },
    {
      title: 'One Time Disinfection',
      content: {
        title: 'One Time Disinfection',
        description:
          "When you need a swift and thorough disinfection solution, turn to GoGreen's one-time disinfection service. Our expert team is ready to provide immediate and effective sanitation, ensuring your space is free from harmful materials.  We utilize advanced disinfectants and follow meticulous protocols to create a safe and sanitized environment.",
        img: '/images/services/sanitary/1.png'
      }
    },
    {
      title: 'Recurring Disinfection',
      content: {
        title: 'Recurring Disinfection',
        description:
          'Our commitment to continuous disinfection means you get the peace of mind that comes from knowing your space is consistently and thoroughly disinfected. Take advantage of our flexible scheduling options, allowing you to tailor the frequency of disinfection. With GoGreen, your safety is our priority, and our recurring service is designed to provide lasting assurance in every environment.',
        img: '/images/services/sanitary/1.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Disinfection and Sanitary Processing"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/services/sanitary/main.png"
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
