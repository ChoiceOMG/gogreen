import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';
import Image from 'next/image';
import { WhyUsSection } from '@/components/WhyUsSection';

import { ContactUsSection } from '@/components/ContactUsSection';
import { TextBlock } from '@/components/UI/TextBlock';
import { ImageTextSection } from '@/components/UI/ImageTextSection';
import { SecondSection } from './components/SecondSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { StatsAndTypes } from '@/components/UI/StatsAndTypes';
import { TextAndImagesSection } from '@/components/UI/TextAndImagesSection';
import Parallax from '@/components/Animations/Parallax';
import { Leaf } from '@/components/UI/SVG/Leaf';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Why GoGreen"
        subTitle="Pioneering Sustainable Cleaning Solutions in Edmonton"
        text="More than a cleaning service, we are your allies in fostering a cleaner, healthier, and sustainable business environment in Edmonton."
        imgSrc="/images/why/main.png"
      />
      <ImageTextSection
        image1Src="/images/why/1.png"
        image2Src="/images/why/2.png"
        textBlocks={[
          <TextBlock
            key={1}
            subtitle="Eco-friendly Janitorial and Maintenance"
            title="Go Green"
            paragraph="Our commitment to eco-friendly janitorial and maintenance services makes us the ideal partner for keeping your premises pristine. Tailoring our services to meet your needs and budget, Go Green ensures your business shines brighter, enhancing your competitive edge with our exceptional green cleaning solutions."
          />
        ]}
      />
      <SecondSection />
      <ReviewsSection />
      <section className=" py-24 lg:py-44 relative">
        <Parallax>
          <Leaf
            className="absolute -top-10 right-5 opacity-40"
            size={'large'}
          />
        </Parallax>
        <Parallax offset={80}>
          <Leaf
            className="absolute top-8 md:top-20 right-5 md:right-14  rotate-90"
            size={'small'}
          />
        </Parallax>
        <div className="container">
          <div className="flex justify-center">
            <StatsAndTypes
              stats={[
                { title: '55+', subtitle: 'Years of Commercial Experience' },
                { title: '36', subtitle: 'Hours of CI Training per employee' },
                {
                  title: '364',
                  subtitle: 'Edmonton facilities cleaned since 2021'
                }
              ]}
            />
          </div>
        </div>
      </section>
      <section className="pb-24 lg:pb-44">
        <div className="container">
          <TextAndImagesSection
            subtitle="From the Floors to the Lightbulbs"
            title="GoGreen Manages Facilities"
            paragraph="Go Green Facilities Services Inc. provides meticulous floor care, employs eco-friendly cleaning practices on all surfaces, and sustainably manages facilities' lighting systems. Our holistic service model addresses every aspect of a building's upkeep, with environmental consciousness leading the way, ensuring that facilities are impeccably maintained and operate efficiently and sustainably."
            image1Src="/images/home/about_1.png"
            image2Src="/images/home/about_2.png"
          />
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
