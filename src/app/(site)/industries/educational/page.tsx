import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/industries/educational');

export default async function Page() {
  const Items = [
    {
      title: 'Schools',
      content: {
        title: 'Schools',
        description: (
          <>
            <p>
              When you run a school, cleanliness is a top priority. Our school
              cleaning services go beyond the ordinary, ensuring classrooms,
              hallways, and common areas are up to standard.
            </p>
            <p>
              By choosing GoGreen, you not only ensure a clean and healthy
              learning environment but also contribute to a sustainable and
              thriving future for the next generation.
            </p>
          </>
        ),
        img: '/images/industries/educational/1.png'
      }
    },
    {
      title: 'Higher Education',
      content: {
        title: 'Higher Education',
        description: (
          <>
            <p>
              Trust GoGreen for university cleaning that contributes to the
              excellence of your institution. From dorms and rec centres to
              classrooms and lecture halls, we have you covered.
            </p>
            <p>
              GoGreen’s eco-friendly services positively impact both your
              facility and the planet, showing that you prioritize the
              well-being and future of students.
            </p>
          </>
        ),
        img: '/images/industries/educational/2.jpg'
      }
    },
    {
      title: 'Specialized Courses',
      content: {
        title: 'Specialized Courses',
        description: (
          <>
            <p>When learning gets messy, trust GoGreen to have your back.</p>
            <p>
              We have the industry expertise needed to clean up after
              specialized courses. Our services are designed for the unique
              requirements of educational spaces.
            </p>
          </>
        ),
        img: '/images/industries/educational/3.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Educational"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/educational/main.png"
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

      <ContactUsSection />
    </>
  );
}
