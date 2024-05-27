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

export const metadata: Metadata = getPageMeta('/services/specialized');

export default async function Page() {
  const Items = [
    {
      title: 'Luxury Residential Cleaning',
      content: {
        title: 'Luxury Residential Cleaning',
        description: (
          <>
            <p>
              At GoGreen, we’re all about giving you the very best clean. Our
              tailored approach ensures that every corner of your residence is
              meticulously cared for using eco-friendly products and
              cutting-edge technology.
            </p>
            <p>
              Simply put, we understand the unique demands of luxury living.
            </p>
          </>
        ),
        img: '/images/services/specialized/1.jpg'
      }
    },
    {
      title: 'Emergency Restoration',
      content: {
        title: 'Emergency Restoration',
        description: (
          <>
            <p>
              Disasters can strike at any moment, and when they do, GoGreen is
              your trusted partner for swift and effective emergency restoration
              services.
            </p>
            <p>
              We understand the urgency of restoring your property after
              unforeseen events like floods, fires, or other emergencies. With a
              commitment to prompt response, we deploy advanced restoration
              techniques.
            </p>
          </>
        ),
        img: '/images/services/specialized/2.jpg'
      }
    },
    {
      title: 'Specialized Cleaning',
      content: {
        title: 'Specialized Cleaning',
        description: (
          <>
            <p>
              Experience the difference with GoGreen`s cleaning services,
              crafted to meet your unique needs.
            </p>
            <p>
              Whether it`s delicate surfaces, unique equipment, or specific
              industry requirements, our expert team has the knowledge and
              skills to deliver precision in every detail.
            </p>
          </>
        ),
        img: '/images/services/specialized/3.jpg'
      }
    }
  ];
  return (
    <>
      <MainSection
        title="Specialized"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/services/specialized/main.png"
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
                  solutions. Luxury Residential Cleaning
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
