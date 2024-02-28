import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/industries/industrial');

export default async function Page() {
  const Items = [
    {
      title: 'Food and Power Plant',
      content: {
        title: 'Food and Power Plant',
        description:
          'In the critical sectors of food and power production, cleanliness is paramount, and an unreliable cleaning service can have devastating consequences. GoGreen ensures that facilities adhere to strict hygiene standards, promoting safety and efficiency in food processing and power generation. Trust GoGreen to safeguard your operations!',
        img: '/images/industries/industrial/1.jpg'
      }
    },
    {
      title: 'Manufacturing and Distribution',
      content: {
        title: 'Manufacturing and Distribution',
        description:
          'Fast-paced manufacturing and distribution centres need to make cleanliness a priority  – but don’t always have the time. GoGreen specializes in cleaning solutions designed to optimize productivity and safety in busy environments. Our attention to detail allows manufacturing and distribution facilities to maintain impeccable standards, helping foster safety and success.',
        img: '/images/industries/industrial/2.jpeg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Industrial"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/industrial/main.png"
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

      <ContactUsSection />
    </>
  );
}
