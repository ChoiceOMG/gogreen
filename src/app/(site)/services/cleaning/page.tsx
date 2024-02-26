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

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  const Items = [
    {
      title: 'Carpet',
      content: {
        title: 'Carpet',
        description:
          'Sick of looking at mud, salt stains, and grime on carpets? GoGreen has your back. We go beyond the surface, targeting deep-seated dirt, stains, and allergens, leaving carpets visibly cleaner and contributing to a healthier indoor environment. Let us help you put your best foot forward!',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Floor Polishing',
      content: {
        title: 'Floor Polishing',
        description:
          "Revatilize your space with bright, shiny, and clean floors! Whether they're hardwood, tile, marble, or any other material, our team brings well-worn floors back to life. Using state-of-the-art equipment and eco-friendly products, we enhance the natural lustre of your floors, creating a polished finish.",
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Regular Services',
      content: {
        title: 'Regular Services',
        description:
          'Make the ordinary extraordinary with GoGreen. We understand that consistency is key to maintaining a clean and inviting environment. Our regular services encompass thorough cleaning, eco-friendly practices, and a touch of innovation. With GoGreen, you can trust that every cleaning session contributes to a healthier, more sustainable space.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'One Time Services',
      content: {
        title: 'One Time Services',
        description:
          "Whether it's a thorough deep clean, emergency restoration, or a unique cleaning project, our expert team is ready to provide top-tier service with efficiency and precision. GoGreen ensures that your space receives the attention it deserves, leaving a lasting impression. Experience the convenience and excellence of our one-time services. Choose GoGreen for instant solutions that make a lasting impact!",
        img: '/images/services/cleaning/1.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Cleaning"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/services/cleaning/main.png"
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Discover the Difference with GoGreen"
        title="Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Business Process"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
