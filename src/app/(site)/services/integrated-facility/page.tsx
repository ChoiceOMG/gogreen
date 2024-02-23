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
import { ScrollExpandLine } from '@/components/Animations';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  const services = [
    {
      title: 'Disinfection and Sanitary Processing',
      description:
        'Ensuring the safety and hygiene of your space with advanced disinfection and sanitary processing methods.'
    },
    {
      title: 'Commercial Floor Cleaning',
      description:
        'Professional floor cleaning services for commercial properties, including deep cleaning, polishing, and surface restoration.'
    },
    {
      title: 'Outdoor Building Maintenance',
      description:
        'Comprehensive outdoor building maintenance services: cleaning, repair, and maintaining the aesthetic appearance of your premises.'
    }
  ];

  return (
    <>
      <MainSection
        title="Integrated Facility Services"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/services/integrated/main.png"
      />
      <SolutionsSection />

      <section className=" pb-20 lg:pb-44">
        <div className="container">
          <div className="relative pl-6">
            {' '}
            <h4 className="h4 mb-4">Your Partner for Eco-Friendly Cleaning</h4>
            <h2 className="h2 mb-11">Integrated Facility Services</h2>
            <ScrollExpandLine className="max-h-[84px] md:max-h-[261px]" />
            <div className="grid sm:grid-cols-3 gap-4">
              {services.map((item, index) => (
                <div className="flex flex-col h-full w-full" key={index}>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className=" mb-10">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuestionSection />
      <ContactSection />

      <CompanyLogosSection />
    </>
  );
}
