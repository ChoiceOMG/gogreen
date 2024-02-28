import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/industries/recreational');

export default async function Page() {
  const Items = [
    {
      title: 'Gyms',
      content: {
        title: 'Gyms',
        description:
          'When workouts get intense, gym cleaning needs to get intense too. We thoroughly clean fitness spaces, equipment, and high-traffic areas to help keep members safe, and boost customer satisfaction. GoGreen fosters a clean and welcoming atmosphere for fitness enthusiasts.',
        img: '/images/industries/recreational/1.png'
      }
    },
    {
      title: 'Leisure Centers',
      content: {
        title: 'Leisure Centers',
        description:
          'It’s hard to unwind when there is cleaning to be done, that’s why we pride ourselves in creating pristine leisure centre environments. GoGreen expertly cleans recreational spaces, pools, and common areas. By upholding high standards of cleanliness, we ensure guests are comfortable and happy. ',
        img: '/images/industries/recreational/2.jpg'
      }
    },
    {
      title: 'Stadiums and Sports Complexes',
      content: {
        title: 'Stadiums and Sports Complexes',
        description:
          'GoGreen provides top-tier cleaning services for stadiums and sports complexes. We ensure that every seat, facility, and communal area is always ready to host the next big game or concert. Let us be your partner in creating memorable moments.',
        img: '/images/industries/recreational/3.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Recreational"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/recreational/main.png"
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
