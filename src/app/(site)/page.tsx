import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '../../components/MainSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from '../../components/ServicesSection';
import { IndustriesSection } from '../../components/BigSliderSection';
import { WhyUsSection } from '../../components/WhyUsSection';
import { ReviewsSection } from '../../components/ReviewsSection';
import { PartnersSection } from './components/PartnersSection';
import { _industries, _services } from '@/utils/constants';
import { ArticlesDev } from '@/services/ArticlesDev';
import { ArticlesSliderSection } from '@/components/ArticlesSliderSection';
import { ContacFormSection } from '@/components/ContacFormSection';

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
      <ArticlesSliderSection articles={ArticlesDev} />
      <PartnersSection />
      <ContacFormSection />
    </>
  );
}
