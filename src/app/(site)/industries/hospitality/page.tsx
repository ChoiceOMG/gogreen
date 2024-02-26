import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  const Items = [
    {
      title: 'Hotels and Resorts',
      content: {
        title: 'Hotels and Resorts',
        description:
          'Make a stay at your resort or hotel memorable with exceptionally clean spaces. We know that hygiene is a make-or-break factor when it comes to guest satisfaction. GoGreen delivers an immaculate clean that enhances your hotel or resort, leaving a lasting impression on guests.',
        img: '/images/industries/hospitality/1.png'
      }
    },
    {
      title: 'Event Venues',
      content: {
        title: 'Event Venues',
        description:
          'Create unforgettable moments with GoGreen`s event venue cleaning services. Whether it`s prepping for a grand celebration or restoring after an event, we ensure that every space sparkles. GoGreen is here to help you shine!',
        img: '/images/industries/hospitality/1.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Hospitality"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/hospitality/main.png"
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
