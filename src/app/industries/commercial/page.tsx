import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/industries/commercial');

export default async function Page() {
  const Items = [
    {
      title: 'Offices',
      content: {
        title: 'Offices',
        description: (
          <>
            <p>
              GoGreen`s services will turn your office into a clean, inviting
              workspace that inspires efficiency.
            </p>
            <p>
              We customize our services to meet your specific office needs,
              providing flexibility and ensuring that you receive precisely the
              level of cleanliness your space requires.
            </p>
          </>
        ),
        img: '/images/industries/commercial/1.jpg'
      }
    },
    {
      title: 'Retail Stores',
      content: {
        title: 'Retail Stores',
        description: (
          <>
            <p>
              Retail stores need to make a great first impression, and GoGreen
              is here to help.{' '}
            </p>
            <p>
              We clean until every nook and cranny is spotless, creating an
              environment that attracts customers and enhances their shopping
              experience.
            </p>
          </>
        ),
        img: '/images/industries/commercial/2.jpeg'
      }
    },
    {
      title: 'Shopping Centers',
      content: {
        title: 'Shopping Centers',
        description: (
          <>
            <p>
              Immerse shoppers in a spotless and welcoming atmosphere with
              GoGreen`s meticulous shopping centre cleaning.
            </p>
            <p>
              We’re committed to providing a hygienic environment that enhances
              the overall shopping experience. From bathrooms and hallways to
              individual stores and employee lounges, GoGreen has your back.
            </p>
          </>
        ),
        img: '/images/industries/commercial/3.webp'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Commercial"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/commercial/main.png"
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
                  pristine.
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
