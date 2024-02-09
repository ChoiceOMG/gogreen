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

export const metadata: Metadata = getPageMeta('/');

export default async function Home() {
  const carouselItems = [
    {
      title: 'Commercial',
      description:
        'Go Green provides comprehensive, green cleaning solutions for commercial spaces, enhancing your business environment and customer experience.',
      link: '/industries/commercial',
      linkTitle: 'Commercial Services',
      img: '/images/home/hero.png'
    },

    {
      title: 'Educational',
      description:
        'Safe and sustainable cleaning services for educational institutions by Go Green, creating healthy learning environments for students and staff.',
      link: '/industries/educational',
      linkTitle: 'Educational Services',
      img: '/images/home/hero.png'
    },
    {
      title: 'Industrial',
      description:
        "Go Green's industrial cleaning services ensure clean, compliant, and efficient operations with environmentally responsible cleaning practices.",
      link: '/industries/industrial',
      linkTitle: 'Industrial Services',
      img: '/images/home/hero.png'
    },
    {
      title: 'Hospitality',
      description:
        "Enhance guest experiences with Go Green's hospitality cleaning services, offering sustainable solutions for hotels, restaurants, and entertainment venues.",
      link: '/industries/hospitality',
      linkTitle: 'Hospitality Services',
      img: '/images/home/hero.png'
    },
    {
      title: 'Healthcare',
      description:
        "Go Green's healthcare cleaning services prioritize safety and hygiene, using non-toxic products to maintain clean and healthy medical facilities.",
      link: '/industries/healthcare',
      linkTitle: 'Healthcare Services',
      img: '/images/home/hero.png'
    },
    {
      title: 'Recreational',
      description:
        "Keep recreational facilities inviting and clean with Go Green's eco-conscious cleaning services, from gyms to public parks and community centers.",
      link: '/industries/recreational',
      linkTitle: 'Recreational Services',
      img: '/images/home/hero.png'
    }
  ];

  const Items = [
    {
      title: 'Carpet Cleaning',
      content: {
        title: 'Carpet Cleaning',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Floor Polishing',
      content: {
        title: 'Floor Polishing',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Regular Services',
      content: {
        title: 'Regular Services',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'One-Time Services',
      content: {
        title: 'One-Time Services',
        description:
          'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.',
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
        buttonText="Request a Quote"
        imgSrc="/images/services/cleaning/main.png"
      />
      <TabsSection items={Items} />
      <ServicesSection />

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
        items={carouselItems}
        title="Industries"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <ContactUsSection />
    </>
  );
}
