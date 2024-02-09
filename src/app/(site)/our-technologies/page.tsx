import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';

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

  return (
    <>
      <MainSection
        title="Our Tech"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        buttonText="Request a Quote"
        imgSrc="/images/tech/main.png"
      />
      <ImageTextSection
        image1Src="/images/tech/1.png"
        image2Src="/images/tech/2.png"
        className="pb-44"
        textBlocks={[
          <TextBlock
            key={1}
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Intro"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
            className=" pb-14"
          />,
          <TextBlock
            key={2}
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Delivery Process"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />
        ]}
      />

      <IndustriesSection
        items={carouselItems}
        title="Innovations"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <section className=" pb-44">
        <div className="container">
          <div className="flex justify-center items-center flex-col text-center max-w-[600px] mx-auto">
            <h4 className="h4 mb-4">Your Partner for Eco-Friendly Cleaning</h4>
            <h2 className="h2 mb-11">Benefits of Tech</h2>
            <p>
              At Go Green, we’re not just a cleaning company. We’re your
              partners in creating a cleaner, healthier, and more sustainable
              environment for your business in Edmonton.
            </p>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
