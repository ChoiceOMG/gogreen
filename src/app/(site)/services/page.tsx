import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TextAndImagesSection } from '@/components/UI/TextAndImagesSection';
import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Services and Industries"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/services/main.png"
      />

      <ServicesSection
        items={_services}
        subtitle="Discover the Difference with GoGreen"
        title="Services"
      />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <section className="pb-24 lg:pb-44">
        <div className="container">
          <TextAndImagesSection
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Innovations in Services"
            paragraph="Why settle for basic cleaning services when you can experience the extraordinary? At GoGreen, we transcend the ordinary by incorporating cutting-edge technology into every aspect of our services. Choose GoGreen for a seamlessly clean and responsibly managed environment."
            image1Src="/images/home/about_1.png"
            image2Src="/images/home/about_2.png"
          />
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
