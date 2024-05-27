import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { Form } from '@/components/ContacFormSection/Form';
import { FAQ } from '@/components/FAQ';
import { MapSection } from './components/MapSection';
import { SecondSection } from './components/SecondSection';

export const metadata: Metadata = getPageMeta('/contact');

export default async function Page() {
  return (
    <>
      <MainSection
        title="Contact Us"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Book a cleaning or reach out to us with any questions you may have. Our team is here to assist you in creating a bespoke cleaning service. Let GoGreen be your partner in cleanliness and sustainability. Contact us now to schedule an appointment or inquire about our services."
        imgSrc="/images/history/main.png"
        classNames="!pb-8"
      />
      <section>
        <div className="container">
          <Form />
        </div>
      </section>
      <SecondSection />
      <MapSection />
      <FAQ />
    </>
  );
}
