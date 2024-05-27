import { ArticlesSliderSection } from '@/components/ArticlesSliderSection';
import { ContacFormSection } from '@/components/ContacFormSection';
import { _industries, _services } from '@/utils/constants';
import { getPageMeta } from '@/utils/getMeta';
import { Metadata } from 'next';
import { IndustriesSection } from '../components/BigSliderSection';
import { MainSection } from '../components/MainSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { AboutSection } from './components/AboutSection';
import { PartnersSection } from './components/PartnersSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Home() {
  return (
    <>
      <MainSection reverse={true} />
      <AboutSection />
      <ServicesSection
        items={_services}
        subtitle="Discover the Difference with GoGreen"
        title="Services"
      />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Better Service and Better Quotes"
      />
      <WhyUsSection />
      <ReviewsSection className="-top-24" />
      <ArticlesSliderSection />
      <PartnersSection />
      <ContacFormSection />
    </>
  );
}
