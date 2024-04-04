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
        description: (
          <>
            <p>
              In the critical sectors of food and power production, cleanliness
              is paramount, and an unreliable cleaning service can have
              devastating consequences.
            </p>
            <p>
              GoGreen ensures that facilities adhere to strict hygiene
              standards, promoting safety and efficiency in food processing and
              power generation.{' '}
            </p>
            <p>Trust GoGreen to safeguard your operations!</p>
          </>
        ),
        img: '/images/industries/industrial/1.jpg'
      }
    },
    {
      title: 'Manufacturing and Distribution',
      content: {
        title: 'Manufacturing and Distribution',
        description: (
          <>
            <p>
              Fast-paced manufacturing and distribution centres need to make
              cleanliness a priority – but don’t always have the time. GoGreen
              specializes in cleaning solutions designed to optimize
              productivity and safety in busy environments.{' '}
            </p>
            <p>
              Our attention to detail allows manufacturing and distribution
              facilities to maintain impeccable standards, helping foster safety
              and success.
            </p>
          </>
        ),
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
            paragraph={
              <>
                <p>
                  Our commitment to eco-friendly janitorial and maintenance
                  services makes us the ideal partner for keeping your premises
                  pristine.{' '}
                </p>
                <p>
                  Tailoring our services to meet your needs and budget, Go Green
                  ensures your business shines brighter, enhancing your
                  competitive edge with our exceptional green cleaning
                  solutions.
                </p>
              </>
            }
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
