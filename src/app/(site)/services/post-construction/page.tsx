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
      title: 'Emergency Restoration',
      content: {
        title: 'Emergency Restoration',
        description:
          'When disasters strike, trust GoGreen for rapid and effective emergency restoration services. Our expert team is on standby 24/7, ready to mitigate damage, restore properties, and bring peace of mind during challenging times. Choose GoGreen for immediate, reliable, and comprehensive emergency restoration solutions. ',
        img: '/images/services/post-construction/1.png'
      }
    },
    {
      title: 'Post Construction Cleaning',
      content: {
        title: 'Post Construction Cleaning',
        description:
          "Transform your construction site into a usable space with GoGreen's specialized post-construction cleaning services.  Our dedicated team specializes in removing debris, dust, and any remnants of the construction process, leaving your area spotless and ready for use. Trust GoGreen for a thorough and efficient post-construction clean.",
        img: '/images/services/post-construction/1.png'
      }
    },
    {
      title: 'Move In/Move Out Cleaning',
      content: {
        title: 'Move In/Move Out Cleaning',
        description:
          "Planning a big move? Whether you're moving in or preparing to move out, trust GoGreen for a spotless start or easy handover. We ensure your commercial space is ready for its next chapter. Make it a smooth transition with GoGreen's specialized Move In/Move Out cleaning services. ",
        img: '/images/services/post-construction/1.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Post-Construction Cleaning"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
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
