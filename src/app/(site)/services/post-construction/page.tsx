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

export const metadata: Metadata = getPageMeta('/services/post-construction');

export default async function Page() {
  const Items = [
    {
      title: 'Emergency Restoration',
      content: {
        title: 'Emergency Restoration',
        description: (
          <>
            <p>
              When disasters strike, trust GoGreen for rapid and effective
              emergency restoration services.{' '}
            </p>
            <p>
              Our team is on-site to mitigate damage, restore properties, and
              bring peace of mind during challenging times. Choose GoGreen for
              immediate, reliable, and comprehensive emergency restoration
              solutions.
            </p>
          </>
        ),
        img: '/images/services/post-construction/1.jpg'
      }
    },
    {
      title: 'Post-Construction Cleaning',
      content: {
        title: 'Post-Construction Cleaning',
        description: (
          <>
            <p>
              Transform your construction site into a usable space with
              GoGreen`s specialized post-construction cleaning services.{' '}
            </p>
            <p>
              We specialize in removing debris, dust, and any remnants of the
              construction process, leaving your area spotless and ready for
              use.
            </p>
          </>
        ),
        img: '/images/services/post-construction/2.jpg'
      }
    },
    {
      title: 'Move In/Move Out Cleaning',
      content: {
        title: 'Move In/Move Out Cleaning',
        description: (
          <>
            <p>
              Planning a big move? Whether you`re moving in or preparing to move
              out, trust GoGreen for a spotless start or easy handover.
            </p>
            <p>
              We ensure your commercial space is ready for its next chapter.
              Make it a smooth transition with GoGreen`s specialized
              Move-In/Move-Out cleaning services.
            </p>
          </>
        ),
        img: '/images/services/post-construction/3.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Post-Construction Cleaning"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="For unique cleaning situations, such as post-construction cleaning, emergency restoration, or move-in/move-out cleaning for commercial spaces, GoGreen stands as your specialized solution."
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
