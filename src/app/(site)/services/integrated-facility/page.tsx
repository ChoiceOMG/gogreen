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
import Parallax from '@/components/Animations/Parallax';
import { Leaf } from '@/components/UI/SVG/Leaf';
import { _services } from '@/utils/constants';
import { MailIcon } from '@/components/UI/SVG/MailIcon';
import { Button } from '@/components/UI/button';
import Image from 'next/image';
import { SolutionsSection } from './components/SolutionsSection';
import { QuestionSection } from './components/QuestionSection';
import { ContactSection } from './components/ContactSection';
import { CompanyLogosSection } from './components/CompanyLogosSection';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  const services = [
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    },
    {
      icon: <MailIcon width={27} height={20} />,
      title: 'Service Name',
      description:
        'At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton.'
    }
  ];

  return (
    <>
      <MainSection
        title="Integrated Facility Services"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        buttonText="Request a Quote"
        imgSrc="/images/services/integrated/main.png"
      />
      <SolutionsSection />
      <ServicesSection
        items={services}
        subtitle="Your Partner for Eco-Friendly Cleaning"
        title="Integrated Facility Services"
      />

      <QuestionSection />
      <ContactSection />

      <CompanyLogosSection />
    </>
  );
}
