import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/industries/healthcare');

export default async function Page() {
  const Items = [
    {
      title: 'Hospitals',
      content: {
        title: 'Hospitals',
        description: (
          <>
            <p>
              Cleanliness is critical in healthcare, and GoGreen brings a wealth
              of experience to the cleaning of hospitals. High hygienic
              standards protect the well-being of patients, healthcare
              professionals, and visitors.
            </p>
            <p>
              We adhere to standards set by governing bodies and use innovative
              tools to give you the best clean.
            </p>
          </>
        ),
        img: '/images/industries/healthcare/1.jpg'
      }
    },
    {
      title: 'Laboratories',
      content: {
        title: 'Laboratories',
        description: (
          <>
            <p>
              Laboratory cleaning requires a level of precision and
              understanding that GoGreen is proud to deliver.{' '}
            </p>
            <p>
              From specialized equipment to stringent hygiene standards, our
              services promise cleanliness and compliance. As innovators
              ourselves, we’re passionate about aiding scientific excellence
              through cleaning.
            </p>
          </>
        ),
        img: '/images/industries/healthcare/2.jpg'
      }
    },
    {
      title: 'Long-Term Care',
      content: {
        title: 'Long-Term Care',
        description: (
          <>
            <p>
              Long-term care facilities are more than just health centres, they
              are homes.
            </p>
            <p>
              We offer compassionate cleaning services designed to make
              residents feel comfortable in their space. Help your valued
              community members feel at ease with GoGreen.
            </p>
          </>
        ),
        img: '/images/industries/healthcare/3.png'
      }
    },
    {
      title: 'Medical Offices and Centers',
      content: {
        title: 'Medical Offices and Centers',
        description: (
          <>
            <p>
              GoGreen specializes in tailored cleaning services for medical
              offices, we know a clean space instills trust in both patients and
              staff.
            </p>
            <p>
              Our healthcare-specific cleaning solutions reflect the precision
              and care required in the medical field. We’re also experienced in
              adhering to regulatory standards.
            </p>
          </>
        ),
        img: '/images/industries/healthcare/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Healthcare"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/healthcare/main.png"
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
                  pristine.{' '}
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
