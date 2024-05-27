import { MainSection } from '@/components/MainSection';
import { getPageMeta } from '@/utils/getMeta';
import { Metadata } from 'next';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { IndustriesSection } from '@/components/BigSliderSection';
import { BusinessProcessSection } from '@/components/BusinessProcessSection';
import { FAQ } from '@/components/FAQ';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TabsSection } from '@/components/TabsSection';
import { TextBlock } from '@/components/UI/TextBlock';
import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta(
  '/services/outdoor-building-maintenance'
);

export default async function Page() {
  const Items = [
    {
      title: 'Pressure Washing',
      content: {
        title: 'Pressure Washing',
        description: (
          <>
            <p>
              GoGreen`s pressure washing delivers a highly efficient and
              thorough cleaning, removing dirt, grime, mold, and stains
              effectively.
            </p>
            <p>
              Regular pressure washing can prevent the buildup of contaminants,
              protect your property from potential damage and avoid costly
              repairs in the long run. We also use eco-friendly cleaners to
              protect the delicate outdoor environment.
            </p>
          </>
        ),
        img: '/images/services/outdoor/1.png'
      }
    },
    {
      title: 'Window Cleaning',
      content: {
        title: 'Window Cleaning',
        description: (
          <>
            <p>
              See things clearly with GoGreen’s eco-friendly window cleaning
              service.{' '}
            </p>
            <p>
              We ensure streak-free, spotless windows that enhance natural light
              and provide clear views, creating a brighter and more inviting
              environment.{' '}
            </p>
          </>
        ),
        img: '/images/services/outdoor/2.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Outdoor Building Maintenance"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Choose sustainability without compromising excellence by opting for GoGreen's outdoor building maintenance services. We ensure the preservation of the environment while extending the life and enhancing the appeal of your outdoor spaces. "
        imgSrc="/images/services/outdoor/main.png"
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
